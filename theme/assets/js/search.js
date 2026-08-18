/**
 * Client-side search using Lunr.js.
 *
 * Behavior:
 *   - Lunr + search-index.json are lazy-loaded on the FIRST search modal open.
 *   - Subsequent opens are instant.
 *   - Queries are debounced (~120 ms). Top ~12 results are shown.
 *   - Keyboard: ↑/↓ navigate, Enter opens, Esc closes.
 *   - Cmd/Ctrl+K opens from anywhere.
 *   - Lunr's Spanish stemmer is loaded when the page is in ES for better recall
 *     ("federalismo" also matches "federalismos", "federales", etc.).
 *
 * The index is language-mixed (both ES and EN docs), but we filter results by
 * the current page's language so users don't see the wrong translation.
 */
(function () {
  'use strict';

  const LUNR_VERSION = '2.3.9';
  const LUNR_URLS = {
    core: 'https://cdn.jsdelivr.net/npm/lunr@' + LUNR_VERSION + '/lunr.min.js',
    stemmer_support: 'https://cdn.jsdelivr.net/npm/lunr-languages@1.14.0/lunr.stemmer.support.min.js',
    es: 'https://cdn.jsdelivr.net/npm/lunr-languages@1.14.0/lunr.es.min.js',
  };

  let lunrLoaded = false;
  let index = null;
  let docs = null;
  let docsById = {};
  let pageLang = document.documentElement.lang || 'es';

  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-input');
  const list = document.getElementById('search-list');
  const empty = document.getElementById('search-empty');
  const noResults = document.getElementById('search-no-results');
  const loading = document.getElementById('search-loading');
  const closeBtn = modal ? modal.querySelector('.search-modal__close') : null;

  if (!modal || !input) return;

  // ---- Open / close ------------------------------------------------------

  document.addEventListener('click', function (e) {
    const opener = e.target.closest('[data-search-open]');
    if (opener) {
      e.preventDefault();
      openModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    // Cmd+K / Ctrl+K → open
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openModal();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () { closeModal(); });
  }

  // Click backdrop to close (dialog outside content)
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  function openModal() {
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    setTimeout(function () { input.focus(); }, 30);

    // Kick off the lazy load on first open
    if (!lunrLoaded) {
      loadLunrAndIndex();
    }
  }

  function closeModal() {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  }

  // ---- Lazy load Lunr and the index -------------------------------------

  async function loadLunrAndIndex() {
    lunrLoaded = true;  // mark early to avoid re-entry
    loading.hidden = false;
    empty.hidden = true;

    try {
      await loadScript(LUNR_URLS.core);
      if (pageLang === 'es') {
        await loadScript(LUNR_URLS.stemmer_support);
        await loadScript(LUNR_URLS.es);
      }

      const res = await fetch('/search-index.json', { cache: 'default' });
      if (!res.ok) throw new Error('index fetch failed: ' + res.status);
      docs = await res.json();
      docsById = {};
      for (var i = 0; i < docs.length; i++) docsById[docs[i].id] = docs[i];

      // Build the Lunr index
      const _lunr = window.lunr;
      index = _lunr(function () {
        // Use Spanish stemmer if available
        if (pageLang === 'es' && _lunr.es) {
          this.use(_lunr.es);
        }
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('summary', { boost: 3 });
        this.field('category_name', { boost: 2 });
        this.field('author', { boost: 2 });
        this.field('tags', { boost: 2 });
        this.field('body');

        for (var j = 0; j < docs.length; j++) {
          const d = docs[j];
          // Only index docs matching the current page language
          if (d.lang !== pageLang) continue;
          this.add({
            id: d.id,
            title: d.title,
            summary: d.summary,
            category_name: d.category_name,
            author: d.author,
            tags: (d.tags || []).join(' '),
            body: d.body,
          });
        }
      });

      loading.hidden = true;
      // If the user typed something while loading, run it now
      if (input.value.trim()) runSearch();
      else empty.hidden = false;
    } catch (err) {
      loading.hidden = true;
      empty.hidden = false;
      empty.querySelector('.search-modal__hint').textContent =
        'No se pudo cargar el buscador. Recargá la página.';
      console.error('[search] load failed:', err);
      lunrLoaded = false;  // allow retry
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // ---- Query & render ---------------------------------------------------

  let debounceTimer = null;
  input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runSearch, 120);
  });

  function runSearch() {
    const q = input.value.trim();
    if (!q) {
      list.innerHTML = '';
      empty.hidden = false;
      noResults.hidden = true;
      return;
    }
    if (!index) return;  // still loading

    empty.hidden = true;
    let results;
    try {
      // Fuzzy + prefix search: "polit" matches "política" via *
      const augmented = q
        .split(/\s+/)
        .filter(Boolean)
        .map(function (t) { return t + '* ' + t + '~1'; })
        .join(' ');
      results = index.search(augmented).slice(0, 12);
    } catch (err) {
      // Lunr syntax errors on weird input — fall back to raw
      try { results = index.search(q).slice(0, 12); }
      catch (e) { results = []; }
    }

    if (!results.length) {
      list.innerHTML = '';
      noResults.hidden = false;
      return;
    }
    noResults.hidden = true;
    renderResults(results, q);
  }

  function renderResults(results, query) {
    const html = results.map(function (r, idx) {
      const doc = docsById[r.ref];
      if (!doc) return '';
      const typeLabel = doc.type === 'article' ? 'Artículo' :
                        doc.type === 'investigation' ? 'Investigación' :
                        doc.type === 'book' ? 'Libro' : doc.type;
      return (
        '<li class="search-modal__result" role="option" data-idx="' + idx + '">' +
          '<a href="' + escapeAttr(doc.url) + '" class="search-modal__result-link">' +
            '<span class="search-modal__result-type">' + typeLabel + '</span>' +
            '<h3 class="search-modal__result-title">' + highlight(escapeHtml(doc.title), query) + '</h3>' +
            (doc.summary ? '<p class="search-modal__result-summary">' + highlight(escapeHtml(doc.summary), query) + '</p>' : '') +
            (doc.category_name ? '<span class="search-modal__result-meta">' + escapeHtml(doc.category_name) + '</span>' : '') +
          '</a>' +
        '</li>'
      );
    }).join('');
    list.innerHTML = html;

    // Highlight first result
    focusedIdx = 0;
    updateFocus();
  }

  // ---- Keyboard nav ------------------------------------------------------

  let focusedIdx = -1;
  input.addEventListener('keydown', function (e) {
    const items = list.querySelectorAll('.search-modal__result');
    if (!items.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusedIdx = Math.min(focusedIdx + 1, items.length - 1);
      updateFocus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusedIdx = Math.max(focusedIdx - 1, 0);
      updateFocus();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = items[focusedIdx] || items[0];
      const link = target.querySelector('a');
      if (link) window.location.href = link.href;
    }
  });

  function updateFocus() {
    const items = list.querySelectorAll('.search-modal__result');
    items.forEach(function (el, i) {
      if (i === focusedIdx) {
        el.classList.add('search-modal__result--focused');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('search-modal__result--focused');
      }
    });
  }

  // ---- Helpers ----------------------------------------------------------

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
    });
  }
  function escapeAttr(s) { return escapeHtml(s); }

  function highlight(text, query) {
    const words = query.split(/\s+/).filter(function (w) { return w.length > 1; });
    if (!words.length) return text;
    const re = new RegExp('(' + words.map(escapeRe).join('|') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }
  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
})();
