/**
 * Organic & Semantic Motion Engine — ES5
 * Henrico Amaral Portfolio
 * v20260610-motion-cache-zero-02
 */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');
  root.classList.add('motion-ready');

  var mediaQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var reduceMotion = mediaQuery ? mediaQuery.matches : false;

  var revealSelector = [
    '[data-motion]',
    '.motion-reveal',
    '.motion-reveal-up',
    '.motion-reveal-left',
    '.motion-reveal-right',
    '.motion-fade-in',
    '.motion-blur-in',
    '.motion-scale-in',
    '.motion-section',
    '.motion-card',
    '.motion-image',
    '.motion-diagram',
    '.motion-panel',
    '.motion-case-hero',
    '.motion-case-block',
    '.motion-impact'
  ].join(', ');

  function addVisible(el) {
    if (!el) return;
    el.classList.add('is-visible');
  }

  function setVisibleList(list) {
    for (var i = 0; i < list.length; i++) {
      addVisible(list[i]);
    }
  }

  function isInsideHeroChild(el) {
    var hero = document.getElementById('hero') || document.querySelector('.case-hero');
    if (!hero || !el || el === hero) return false;
    return hero.contains(el);
  }

  // ── 1. REVEAL ENGINE ─────────────────────────────────────────────────────────
  function initReveal() {
    var targets = document.querySelectorAll(revealSelector);
    if (!targets.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      setVisibleList(targets);
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      for (var j = 0; j < entries.length; j++) {
        var entry = entries[j];
        if (!entry.isIntersecting) continue;
        addVisible(entry.target);
        obs.unobserve(entry.target);
      }
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    for (var k = 0; k < targets.length; k++) {
      var el = targets[k];

      // Hero children are sequenced by initHero(). The hero container itself still needs visibility.
      if (isInsideHeroChild(el)) continue;

      if (!el.style.getPropertyValue('--motion-delay') && !el.classList.contains('motion-hero')) {
        el.style.setProperty('--motion-delay', Math.min(k * 28, 220) + 'ms');
      }

      observer.observe(el);
    }
  }

  // ── 2. HERO SEQUENCE ─────────────────────────────────────────────────────────
  function initHero() {
    var hero = document.getElementById('hero') || document.querySelector('.case-hero');
    if (!hero) return;

    var sequence = hero.querySelectorAll([
      '[data-motion]',
      '.motion-reveal',
      '.motion-reveal-up',
      '.motion-reveal-left',
      '.motion-reveal-right',
      '.motion-blur-in',
      '.motion-fade-in',
      '.motion-scale-in',
      '.motion-hero',
      '.motion-case-hero',
      '.motion-card',
      '.motion-panel'
    ].join(', '));

    addVisible(hero);

    if (reduceMotion) {
      setVisibleList(sequence);
      return;
    }

    for (var j = 0; j < sequence.length; j++) {
      var el = sequence[j];
      el.style.setProperty('--motion-delay', Math.min(j * 95, 620) + 'ms');
      addVisible(el);
    }
  }

  // ── 3. PARALLAX ENGINE ───────────────────────────────────────────────────────
  function initParallax() {
    if (reduceMotion) return;

    var softItems = document.querySelectorAll('.motion-parallax-soft, [data-parallax]');
    var bgItem = document.querySelector('.motion-parallax-bg');

    if (!softItems.length && !bgItem) return;

    var ticking = false;
    var viewportH = window.innerHeight || document.documentElement.clientHeight;

    function update() {
      viewportH = window.innerHeight || document.documentElement.clientHeight;

      for (var i = 0; i < softItems.length; i++) {
        var el = softItems[i];
        var rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportH) continue;

        var speed = parseFloat(el.getAttribute('data-parallax') || '0.025');
        var center = rect.top + rect.height / 2;
        var diff = center - viewportH / 2;
        var y = diff * speed;
        var cap = 16;
        y = Math.max(-cap, Math.min(cap, y));

        el.style.transform = 'translate3d(0,' + y.toFixed(2) + 'px,0)';
      }

      if (bgItem) {
        var parentRect = bgItem.parentElement ? bgItem.parentElement.getBoundingClientRect() : null;
        if (parentRect && parentRect.top < viewportH && parentRect.bottom > 0) {
          var scrollY = window.pageYOffset || document.documentElement.scrollTop;
          var offset = scrollY * 0.08;
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
          var x = (e.clientX - rect.left - rect.width / 2) * 0.10;
          var y = (e.clientY - rect.top - rect.height / 2) * 0.10;
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