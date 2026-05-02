/**
 * nav.js
 * Navigation behaviors: scroll state, mobile hamburger, active link.
 * Vanilla JS, no frameworks, no globals.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var nav    = document.querySelector('.nav');
    var toggle = document.querySelector('.nav__toggle');
    var links  = document.querySelector('.nav__links');

    if (!nav) return;

    /* ----------------------------------------------------------
       1. Scroll: toggle .nav--scrolled
    ---------------------------------------------------------- */
    function handleScroll() {
      if (window.scrollY > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }

    // Run once on load in case the page is already scrolled
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    /* ----------------------------------------------------------
       2. Mobile hamburger: toggle .open on links + toggle
    ---------------------------------------------------------- */
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var isOpen = links.classList.contains('open');
        links.classList.toggle('open', !isOpen);
        toggle.classList.toggle('open', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });

      /* ----------------------------------------------------------
         3. Close mobile menu on any nav link click
      ---------------------------------------------------------- */
      var navAnchors = links.querySelectorAll('a');
      navAnchors.forEach(function (anchor) {
        anchor.addEventListener('click', function () {
          links.classList.remove('open');
          toggle.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    /* ----------------------------------------------------------
       4. Active link: match current pathname
    ---------------------------------------------------------- */
    var pathname = window.location.pathname;

    // Normalise: strip trailing slash unless it's root
    var normPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

    var navLinks = document.querySelectorAll('.nav__links a');
    navLinks.forEach(function (anchor) {
      var href = anchor.getAttribute('href');
      if (!href) return;

      // Normalise href the same way
      var normHref = href === '/' ? '/' : href.replace(/\/$/, '');

      var isActive = false;

      if (normHref === '/') {
        // Home: exact match only
        isActive = normPath === '/';
      } else if (normPath === normHref) {
        // Exact match
        isActive = true;
      } else if (normPath.startsWith(normHref + '/')) {
        // Prefix match -- e.g. /writing matches /writing/the-constraint/
        isActive = true;
      }

      if (isActive) {
        anchor.classList.add('active');
      } else {
        anchor.classList.remove('active');
      }
    });
  });
}());
