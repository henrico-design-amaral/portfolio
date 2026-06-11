/**
 * Organic & Semantic Motion Engine — ES5
 * Henrico Amaral Portfolio
 * v20260610-motion-cache-zero-01
 */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── 1. REVEAL ENGINE ─────────────────────────────────────────────────────────
  function initReveal() {
    var targets = document.querySelectorAll(
      '[data-motion], .motion-reveal, .motion-reveal-up, .motion-reveal-left, .motion-reveal-right, .motion-fade-in, .motion-blur-in, .motion-scale-in'
    );

    if (!targets.length) return;

    // If reduced motion, make everything visible immediately
    if (reduceMotion) {
      for (var i = 0; i < targets.length; i++) {
        targets[i].classList.add('is-visible');
      }
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      for (var j = 0; j < entries.length; j++) {
        var entry = entries[j];
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    }, {
      threshold: 0.14,
      rootMargin: '0px 0px -10% 0px'
    });

    for (var k = 0; k < targets.length; k++) {
      var el = targets[k];
      // Skip hero children — they're handled by initHero()
      if (el.closest && (el.closest('#hero') || el.closest('.case-hero'))) continue;
      // Assign stagger delay only if not explicitly set
      if (!el.style.getPropertyValue('--motion-delay') && !el.classList.contains('motion-hero')) {
        el.style.setProperty('--motion-delay', Math.min(k * 30, 200) + 'ms');
      }
      observer.observe(el);
    }
  }

  // ── 2. HERO SEQUENCE ─────────────────────────────────────────────────────────
  function initHero() {
    var hero = document.getElementById('hero') || document.querySelector('.case-hero');
    if (!hero) return;

    var sequence = hero.querySelectorAll(
      '.motion-reveal, .motion-reveal-up, .motion-blur-in, .motion-fade-in, .motion-hero'
    );

    if (reduceMotion) {
      for (var i = 0; i < sequence.length; i++) {
        sequence[i].classList.add('is-visible');
      }
      return;
    }

    for (var j = 0; j < sequence.length; j++) {
      var el = sequence[j];
      // Each hero element gets incremental delay via CSS custom property
      el.style.setProperty('--motion-delay', (j * 110) + 'ms');
      el.classList.add('is-visible');
    }
  }

  // ── 3. PARALLAX ENGINE ───────────────────────────────────────────────────────
  function initParallax() {
    if (reduceMotion) return;

    var softItems = document.querySelectorAll('.motion-parallax-soft, [data-parallax]');
    var bgItem    = document.querySelector('.motion-parallax-bg');

    if (!softItems.length && !bgItem) return;

    var ticking = false;
    var viewportH = window.innerHeight || document.documentElement.clientHeight;

    function update() {
      viewportH = window.innerHeight || document.documentElement.clientHeight;

      // Soft parallax on scroll-triggered images/diagrams
      for (var i = 0; i < softItems.length; i++) {
        var el   = softItems[i];
        var rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportH) continue;

        var speed    = parseFloat(el.getAttribute('data-parallax') || '0.03');
        var center   = rect.top + rect.height / 2;
        var diff     = center - viewportH / 2;
        var y        = diff * speed;
        var cap      = 18;
        y = Math.max(-cap, Math.min(cap, y));

        el.style.transform = 'translate3d(0,' + y.toFixed(2) + 'px,0)';
      }

      // Hero background parallax
      if (bgItem) {
        var parentRect = bgItem.parentElement ? bgItem.parentElement.getBoundingClientRect() : null;
        if (parentRect && parentRect.top < viewportH && parentRect.bottom > 0) {
          var scrollY = window.pageYOffset || document.documentElement.scrollTop;
          var offset  = scrollY * 0.10;
          bgItem.style.transform = 'scale(1.04) translateY(' + offset.toFixed(2) + 'px)';
        }
      }

      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  // ── 4. MAGNETIC HOVER ────────────────────────────────────────────────────────
  function initMagnetic() {
    if (reduceMotion) return;

    var targets = document.querySelectorAll('.magnetic-wrap, .motion-magnetic');

    for (var i = 0; i < targets.length; i++) {
      (function (el) {
        el.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';

        el.addEventListener('mousemove', function (e) {
          var rect = el.getBoundingClientRect();
          var x    = (e.clientX - rect.left - rect.width / 2) * 0.12;
          var y    = (e.clientY - rect.top  - rect.height / 2) * 0.12;
          el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
        });

        el.addEventListener('mouseleave', function () {
          el.style.transform = 'translate(0px,0px)';
        });
      }(targets[i]));
    }
  }

  // ── INIT ─────────────────────────────────────────────────────────────────────
  function init() {
    initHero();
    initReveal();
    initParallax();
    initMagnetic();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
