/**
 * resume.js
 * Handles sticky sidebar nav scroll tracking for the resume page.
 * Marks the active .resume-nav__link based on which section
 * is currently most visible in the viewport.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    var SECTION_IDS = ['experience', 'education', 'credentials', 'languages'];

    var sections = SECTION_IDS.map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);

    var navLinks = Array.from(
      document.querySelectorAll('.resume-nav__link[data-section]')
    );

    if (!sections.length || !navLinks.length) return;

    /**
     * Set the active nav link by section id.
     */
    function setActive(id) {
      navLinks.forEach(function (link) {
        var isActive = link.getAttribute('data-section') === id;
        link.classList.toggle('active', isActive);
      });
    }

    /**
     * IntersectionObserver path.
     * Tracks which section has the largest intersection ratio,
     * or, when a section fully covers the viewport, falls back
     * to the topmost visible section.
     */
    if ('IntersectionObserver' in window) {

      var visibilityMap = {};

      SECTION_IDS.forEach(function (id) {
        visibilityMap[id] = 0;
      });

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            var id = entry.target.id;
            visibilityMap[id] = entry.intersectionRatio;
          });

          // Pick the section with the greatest visible ratio.
          var bestId = null;
          var bestRatio = -1;

          SECTION_IDS.forEach(function (id) {
            if (visibilityMap[id] > bestRatio) {
              bestRatio = visibilityMap[id];
              bestId = id;
            }
          });

          if (bestId) {
            setActive(bestId);
          }
        },
        {
          rootMargin: '0px 0px -40% 0px',
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0]
        }
      );

      sections.forEach(function (section) {
        observer.observe(section);
      });

    } else {
      /**
       * Scroll event fallback.
       * Finds the section whose top edge is closest to (but not
       * past) the upper quarter of the viewport.
       */

      var ticking = false;

      function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          ticking = false;
          updateActiveFromScroll();
        });
      }

      function updateActiveFromScroll() {
        var viewportMid = window.scrollY + window.innerHeight * 0.3;
        var activeId = SECTION_IDS[0];

        sections.forEach(function (section) {
          if (section.offsetTop <= viewportMid) {
            activeId = section.id;
          }
        });

        setActive(activeId);
      }

      window.addEventListener('scroll', onScroll, { passive: true });

      // Run once on load.
      updateActiveFromScroll();
    }

  });

}());
