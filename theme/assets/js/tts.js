/**
 * Text-to-Speech reader using Web Speech API.
 *
 * Design notes:
 *
 *   - We chunk the article by DOM element (paragraph, heading, blockquote,
 *     list item). Each chunk is one utterance. This works around Chrome's
 *     ~15 s auto-cutoff on long utterances and lets us highlight the
 *     currently-spoken block.
 *
 *   - We skip <pre>, <code>, <table>, and any element with [data-tts-skip].
 *     Reading a code block char-by-char is unbearable and adds no value.
 *
 *   - Voice selection: on load we auto-pick the "best" voice matching the
 *     article language, preferring known-good voices (Google, Microsoft
 *     Neural, macOS "premium"). User can override via the dropdown; choice
 *     is remembered in localStorage per language.
 *
 *   - Resume support: current chunk index is persisted per URL in
 *     localStorage, so returning to a page 3 days later resumes from where
 *     the user left off (well, from the top of the paragraph they were on).
 *
 *   - The Web Speech API is quirky across browsers. Chrome fires voice
 *     changed asynchronously. Safari doesn't fire `end` reliably on pause.
 *     We defensively re-query state on every UI interaction.
 */
(function () {
  'use strict';

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;  // no TTS support — leave the widget hidden
  }

  const widget = document.getElementById('tts-widget');
  if (!widget) return;

  const lang = widget.dataset.lang || 'es';
  const langPrefix = lang === 'es' ? 'es' : 'en';
  const storageKey = 'dfp:tts:pos:' + location.pathname;
  const voiceStorageKey = 'dfp:tts:voice:' + langPrefix;
  const speedStorageKey = 'dfp:tts:speed';

  // UI refs
  const launcher = document.getElementById('tts-launcher');
  const launcherLabel = launcher.querySelector('.tts__launcher-label');
  const launcherPlayIcon = launcher.querySelector('.tts__icon--play');
  const launcherPauseIcon = launcher.querySelector('.tts__icon--pause');
  const panel = document.getElementById('tts-panel');
  const closeBtn = document.getElementById('tts-close');
  const playBtn = document.getElementById('tts-play');
  const stopBtn = document.getElementById('tts-stop');
  const prevBtn = document.getElementById('tts-prev');
  const nextBtn = document.getElementById('tts-next');
  const speedSlider = document.getElementById('tts-speed');
  const speedValueEl = document.getElementById('tts-speed-value');
  const voiceSelect = document.getElementById('tts-voice');
  const statusEl = document.getElementById('tts-status');
  const playCtlPlay = playBtn.querySelector('.tts__ctl-icon--play');
  const playCtlPause = playBtn.querySelector('.tts__ctl-icon--pause');

  // Reveal widget now that we know TTS is supported
  widget.hidden = false;

  // ---- Extract narratable chunks from the article body ------------------

  const bodyRoot = document.querySelector('.article__body, .investigation__body');
  if (!bodyRoot) return;

  const CHUNK_SELECTORS = 'p, h2, h3, h4, blockquote, li';
  const SKIP_SELECTORS = 'pre, code, table, [data-tts-skip], .tts__skip';

  function extractChunks() {
    const nodes = bodyRoot.querySelectorAll(CHUNK_SELECTORS);
    const out = [];
    nodes.forEach(function (n) {
      // Skip if inside a skip zone
      if (n.closest(SKIP_SELECTORS)) return;
      // Skip if it contains ONLY code/pre
      if (n.matches(SKIP_SELECTORS)) return;
      const text = normalize(n.textContent);
      if (text.length < 3) return;  // empty or ornamental
      out.push({ el: n, text: text });
    });
    return out;
  }

  function normalize(t) {
    return (t || '').replace(/\s+/g, ' ').trim();
  }

  const chunks = extractChunks();
  if (!chunks.length) {
    widget.hidden = true;
    return;
  }

  // ---- Voice selection --------------------------------------------------

  let voices = [];
  let selectedVoice = null;

  function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    if (!voices.length) return;

    // Filter to voices that match the page language
    const langMatch = voices.filter(function (v) { return v.lang && v.lang.toLowerCase().startsWith(langPrefix); });
    const candidates = langMatch.length ? langMatch : voices;

    // Populate the dropdown
    voiceSelect.innerHTML = '';
    candidates.forEach(function (v) {
      const opt = document.createElement('option');
      opt.value = v.name;
      // Format: "Mónica (es-ES) — Google" or "Sabina (es-MX)"
      opt.textContent = v.name + ' (' + v.lang + ')' + (v.localService ? '' : ' ☁');
      voiceSelect.appendChild(opt);
    });

    // Pick the best default: previously saved > preferred markers > first
    const saved = localStorage.getItem(voiceStorageKey);
    selectedVoice =
      candidates.find(function (v) { return v.name === saved; }) ||
      pickBestVoice(candidates) ||
      candidates[0];
    if (selectedVoice) voiceSelect.value = selectedVoice.name;
  }

  function pickBestVoice(list) {
    // Preference order: Argentina Spanish (es-AR), then LATAM Spanish,
    // then Spain Spanish. Within each, prefer voices whose name suggests
    // they're the newer high-quality ones.
    const rankName = function (v) {
      const n = (v.name || '').toLowerCase();
      let score = 0;
      if (n.includes('premium') || n.includes('enhanced') || n.includes('neural')) score += 100;
      if (n.includes('google') && !v.localService) score += 50;  // Chrome cloud voices
      if (n.includes('microsoft')) score += 40;
      // macOS/iOS specific good ones
      if (['mónica', 'monica', 'paulina', 'jorge', 'diego'].some(function (x) { return n.includes(x); })) score += 30;
      return score;
    };
    const rankLang = function (v) {
      const l = (v.lang || '').toLowerCase();
      if (l === 'es-ar') return 1000;
      if (l.startsWith('es-4') || l === 'es-mx' || l === 'es-cl' || l === 'es-co') return 500;
      if (l === 'es-es') return 100;
      if (l.startsWith('es')) return 50;
      return 0;
    };
    return list.slice().sort(function (a, b) {
      return (rankLang(b) + rankName(b)) - (rankLang(a) + rankName(a));
    })[0];
  }

  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;

  voiceSelect.addEventListener('change', function () {
    selectedVoice = voices.find(function (v) { return v.name === voiceSelect.value; });
    if (selectedVoice) localStorage.setItem(voiceStorageKey, selectedVoice.name);
    // If currently speaking, restart from current chunk with new voice
    if (isPlaying()) restartFromCurrent();
  });

  // ---- Speed control ----------------------------------------------------

  const savedSpeed = parseFloat(localStorage.getItem(speedStorageKey));
  if (savedSpeed && savedSpeed >= 0.5 && savedSpeed <= 3) {
    speedSlider.value = String(savedSpeed);
  }
  speedValueEl.textContent = parseFloat(speedSlider.value).toFixed(1) + '×';
  speedSlider.addEventListener('input', function () {
    const v = parseFloat(speedSlider.value);
    speedValueEl.textContent = v.toFixed(1) + '×';
    localStorage.setItem(speedStorageKey, String(v));
    if (isPlaying()) restartFromCurrent();
  });

  // ---- Playback state machine -------------------------------------------

  let currentIdx = 0;
  let currentUtterance = null;

  // Restore position if any
  const savedPos = parseInt(localStorage.getItem(storageKey) || '0', 10);
  if (savedPos > 0 && savedPos < chunks.length) currentIdx = savedPos;

  function isPlaying() {
    return window.speechSynthesis.speaking && !window.speechSynthesis.paused;
  }

  function speakCurrent() {
    if (currentIdx >= chunks.length) {
      stop();
      setStatus(lang === 'es' ? 'Fin del artículo' : 'End of article');
      return;
    }
    const chunk = chunks[currentIdx];
    const u = new SpeechSynthesisUtterance(chunk.text);
    if (selectedVoice) u.voice = selectedVoice;
    u.lang = selectedVoice ? selectedVoice.lang : (langPrefix === 'es' ? 'es-ES' : 'en-US');
    u.rate = parseFloat(speedSlider.value);
    u.pitch = 1;
    u.volume = 1;

    u.onend = function () {
      // Advance only if this utterance completed naturally (not cancelled)
      if (u === currentUtterance && !u._cancelled) {
        currentIdx++;
        localStorage.setItem(storageKey, String(currentIdx));
        if (currentIdx < chunks.length) {
          speakCurrent();
        } else {
          highlightChunk(null);
          setPlaying(false);
          setStatus(lang === 'es' ? 'Fin del artículo' : 'End of article');
          currentIdx = 0;
          localStorage.removeItem(storageKey);
        }
      }
    };
    u.onerror = function () {
      // Swallow — often fires on rapid stop/pause. Just don't crash.
    };

    currentUtterance = u;
    highlightChunk(chunk.el);
    window.speechSynthesis.speak(u);
    setPlaying(true);
    setStatus(
      (lang === 'es' ? 'Reproduciendo ' : 'Playing ') +
      (currentIdx + 1) + '/' + chunks.length
    );
  }

  function restartFromCurrent() {
    // Cancel and start again from current chunk with new voice/speed
    if (currentUtterance) currentUtterance._cancelled = true;
    window.speechSynthesis.cancel();
    setTimeout(speakCurrent, 40);
  }

  function play() {
    if (window.speechSynthesis.paused && currentUtterance) {
      window.speechSynthesis.resume();
      setPlaying(true);
      setStatus(lang === 'es' ? 'Reproduciendo…' : 'Playing…');
      return;
    }
    if (!window.speechSynthesis.speaking) {
      speakCurrent();
    }
  }

  function pause() {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setPlaying(false);
      setStatus(lang === 'es' ? 'Pausado' : 'Paused');
    }
  }

  function stop() {
    if (currentUtterance) currentUtterance._cancelled = true;
    window.speechSynthesis.cancel();
    highlightChunk(null);
    setPlaying(false);
    setStatus(lang === 'es' ? 'Detenido' : 'Stopped');
    currentIdx = 0;
    localStorage.removeItem(storageKey);
  }

  function skip(delta) {
    const wasPlaying = isPlaying() || window.speechSynthesis.paused;
    if (currentUtterance) currentUtterance._cancelled = true;
    window.speechSynthesis.cancel();
    currentIdx = Math.max(0, Math.min(chunks.length - 1, currentIdx + delta));
    localStorage.setItem(storageKey, String(currentIdx));
    if (wasPlaying) {
      setTimeout(speakCurrent, 40);
    } else {
      highlightChunk(chunks[currentIdx].el);
      setStatus((lang === 'es' ? 'Párrafo ' : 'Paragraph ') + (currentIdx + 1) + '/' + chunks.length);
    }
  }

  // ---- Highlight the currently-spoken block -----------------------------

  let highlightedEl = null;
  function highlightChunk(el) {
    if (highlightedEl) highlightedEl.classList.remove('tts-current');
    highlightedEl = el;
    if (el) {
      el.classList.add('tts-current');
      // Scroll into view but keep the reader comfortable
      const rect = el.getBoundingClientRect();
      if (rect.top < 100 || rect.bottom > window.innerHeight - 120) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function setPlaying(playing) {
    if (playing) {
      launcher.classList.add('tts__launcher--active');
      launcherPlayIcon.style.display = 'none';
      launcherPauseIcon.style.display = '';
      playCtlPlay.style.display = 'none';
      playCtlPause.style.display = '';
    } else {
      launcher.classList.remove('tts__launcher--active');
      launcherPlayIcon.style.display = '';
      launcherPauseIcon.style.display = 'none';
      playCtlPlay.style.display = '';
      playCtlPause.style.display = 'none';
    }
  }

  function setStatus(text) { statusEl.textContent = text; }

  // ---- UI wiring --------------------------------------------------------

  let panelOpen = false;
  launcher.addEventListener('click', function () {
    // First click: open panel AND start playing.
    // Subsequent clicks: toggle play/pause (panel stays open).
    if (!panelOpen) {
      openPanel();
      play();
    } else if (isPlaying()) {
      pause();
    } else {
      play();
    }
  });

  closeBtn.addEventListener('click', function () {
    stop();
    closePanel();
  });

  playBtn.addEventListener('click', function () {
    if (isPlaying()) pause();
    else play();
  });
  stopBtn.addEventListener('click', stop);
  prevBtn.addEventListener('click', function () { skip(-1); });
  nextBtn.addEventListener('click', function () { skip(1); });

  function openPanel() {
    panel.hidden = false;
    panelOpen = true;
    launcher.setAttribute('aria-expanded', 'true');
  }
  function closePanel() {
    panel.hidden = true;
    panelOpen = false;
    launcher.setAttribute('aria-expanded', 'false');
  }

  // Keyboard shortcuts on the article page — only when TTS is initialized
  document.addEventListener('keydown', function (e) {
    // Ignore if user is typing in an input/textarea/contenteditable
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    // Ignore if the search modal is open
    const searchModal = document.getElementById('search-modal');
    if (searchModal && searchModal.hasAttribute('open')) return;

    if (e.key === ' ' && panelOpen) {
      e.preventDefault();
      if (isPlaying()) pause(); else play();
    } else if (e.key.toLowerCase() === 's' && panelOpen && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      stop();
    }
  });

  // Chrome quirk: cancel any lingering utterance from a previous page
  window.addEventListener('pagehide', function () {
    if (currentUtterance) currentUtterance._cancelled = true;
    window.speechSynthesis.cancel();
  });
})();
