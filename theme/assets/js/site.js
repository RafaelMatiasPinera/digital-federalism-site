/**
 * Minimal site JS for the Digital Federalism editorial theme.
 * Handles: copy-URL share buttons.
 */
(function () {
  'use strict';

  // Copy-link buttons on article share bar
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-copy-url]');
    if (!btn) return;
    e.preventDefault();
    const url = btn.getAttribute('data-copy-url');
    if (!url || !navigator.clipboard) return;
    navigator.clipboard.writeText(url).then(function () {
      const original = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
      setTimeout(function () { btn.innerHTML = original; }, 1500);
    }).catch(function () {});
  });
})();
