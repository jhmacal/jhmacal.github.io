/**
 * animations.js
 * 1. Fade-in on scroll via IntersectionObserver.
 * 2. Count-up animator with auto-trigger via IntersectionObserver.
 * Vanilla JS, no frameworks.
 */
(function () {
  'use strict';

  /* ============================================================
     SECTION 1: Fade-in on scroll
  ============================================================ */
  function initFadeIn() {
    var fadeElements = document.querySelectorAll('.fade-in');
    if (!fadeElements.length) return;

    // Fallback: if IntersectionObserver is unsupported, show everything immediately
    if (!('IntersectionObserver' in window)) {
      fadeElements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after triggering -- animation only runs once
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

  /* ============================================================
     SECTION 2: Count-up animator
  ============================================================ */

  /**
   * Ease-out cubic.
   * @param {number} t - Progress 0..1
   * @returns {number}
   */
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  /**
   * Animate a number from 0 to `target` over `duration` ms.
   * @param {HTMLElement} el       - Element whose textContent is updated
   * @param {number}      target   - Target number (integer or float)
   * @param {number}      duration - Duration in milliseconds
   * @param {string}      [prefix] - String prepended to the number (e.g. "$")
   * @param {string}      [suffix] - String appended to the number (e.g. "%")
   */
  function countUp(el, target, duration, prefix, suffix) {
    if (!el) return;

    var pfx  = prefix  || '';
    var sfx  = suffix  || '';
    var start = null;
    var isFloat = target !== Math.floor(target);

    function step(timestamp) {
      if (!start) start = timestamp;
      var elapsed  = timestamp - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased    = easeOutCubic(progress);
      var current  = target * eased;
      var display  = isFloat ? current.toFixed(1) : Math.round(current).toLocaleString();
      el.textContent = pfx + display + sfx;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure we land exactly on target
        var finalDisplay = isFloat
          ? target.toFixed(1)
          : target.toLocaleString();
        el.textContent = pfx + finalDisplay + sfx;
      }
    }

    requestAnimationFrame(step);
  }

  /**
   * Auto-trigger count-up for elements with [data-countup].
   * Attributes:
   *   data-countup          = target number (required)
   *   data-prefix           = prefix string (optional)
   *   data-suffix           = suffix string (optional)
   *   data-duration         = duration in ms (optional, default 1800)
   */
  function initCountUp() {
    var countupElements = document.querySelectorAll('[data-countup]');
    if (!countupElements.length) return;

    // WeakSet tracks elements that have already been animated
    var animated = new WeakSet();

    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      countupElements.forEach(function (el) {
        if (animated.has(el)) return;
        animated.add(el);
        var target   = parseFloat(el.getAttribute('data-countup'));
        var prefix   = el.getAttribute('data-prefix')   || '';
        var suffix   = el.getAttribute('data-suffix')   || '';
        var duration = parseInt(el.getAttribute('data-duration'), 10) || 1800;
        if (!isNaN(target)) {
          countUp(el, target, duration, prefix, suffix);
        }
      });
      return;
    }

    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;

          // Only animate once
          if (animated.has(el)) return;
          animated.add(el);

          var target   = parseFloat(el.getAttribute('data-countup'));
          var prefix   = el.getAttribute('data-prefix')   || '';
          var suffix   = el.getAttribute('data-suffix')   || '';
          var duration = parseInt(el.getAttribute('data-duration'), 10) || 1800;

          if (!isNaN(target)) {
            countUp(el, target, duration, prefix, suffix);
          }

          countObserver.unobserve(el);
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    countupElements.forEach(function (el) {
      countObserver.observe(el);
    });
  }

  /* ============================================================
     SECTION 3: Scroll indicator — fades out on scroll
  ============================================================ */
  function initScrollIndicator() {
    var indicator = document.querySelector('.scroll-indicator');
    if (!indicator) return;

    // Fade in after delay using JS so transition fires cleanly
    setTimeout(function () {
      indicator.style.opacity = '1';
    }, 1800);

    // Fade out on scroll
    window.addEventListener('scroll', function () {
      indicator.style.opacity = window.scrollY > 60 ? '0' : '1';
    }, { passive: true });
  }

  /* ============================================================
     INIT
  ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    initFadeIn();
    initCountUp();
    initScrollIndicator();
  });

  /* Expose countUp globally for optional manual invocation */
  window.countUp = countUp;
}());
