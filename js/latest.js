/* latest.js — drives the homepage "Latest" strip and the AI Portfolio "New" marker
   from /artifacts.json. Content is also baked into the HTML at build time, so this
   script only needs to (a) keep things in sync if the markup drifts and (b) handle
   the per-visitor "New" state, which cannot be static.

   State model (two independent keys, so the badge can hand off from the homepage
   strip to the AI page even when they point at the same piece):
     jm:seenLatest  -> id of the newest artifact the visitor has opened from the strip
     jm:seenAi      -> id of the newest AI-page artifact the visitor has seen
   A badge shows only while its key does not match the current newest id, so a freshly
   published artifact makes "New" reappear on its own, and it clears once seen.
   localStorage is per-browser and per-device; that is the intended, honest scope. */
(function () {
  'use strict';

  var K_LATEST = 'jm:seenLatest';
  var K_AI = 'jm:seenAi';

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    fetch('/artifacts.json', { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !data.artifacts || !data.artifacts.length) return;
        var list = data.artifacts;
        var latest = list[0];
        var aiLatest = list.filter(function (a) { return a.onAI; })[0] || latest;

        /* ---- Homepage: the gold Latest strip ---- */
        var strip = document.querySelector('[data-latest]');
        if (strip) {
          if (latest.url) strip.setAttribute('href', latest.url);
          strip.setAttribute('data-latest-id', latest.id);
          var title = strip.querySelector('[data-latest-title]');
          if (title) title.textContent = latest.title;
          var meta = strip.querySelector('[data-latest-meta]');
          if (meta && latest.meta) meta.textContent = latest.meta;
          var badge = strip.querySelector('[data-latest-new]');
          if (badge) badge.hidden = (get(K_LATEST) === latest.id);
          strip.addEventListener('click', function () { set(K_LATEST, latest.id); });
        }

        /* ---- AI page: mark the top row New until seen, then remember ---- */
        var row = document.querySelector('[data-ai-top]');
        if (row) {
          if (get(K_AI) !== aiLatest.id) row.classList.add('is-new');
          set(K_AI, aiLatest.id); // seen on this visit; clears for next time
        }
      })
      .catch(function () { /* offline or blocked: baked-in HTML defaults remain */ });
  });
})();
