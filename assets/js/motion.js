/**
 * Organic & Semantic Motion Engine — ES5, v2
 * Henrico Amaral Portfolio
 * v20260716-motion-v2-01
 *
 * Reveals por IntersectionObserver com stagger por lote:
 * elementos que entram juntos no viewport são sequenciados entre si
 * (60ms por item, teto 420ms); um elemento sozinho revela sem delay.
 * Coreografia dos cases via seletores BEM (sem classes extras no HTML).
 * Spec: docs/design/MOTION.md
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
    '.motion-impact',
    '.editorial-reveal'
  ].join(', ');

  /* Páginas de case: coreografia semântica (mesmos seletores do motion.css). */
  var caseSelector = [
    '.case-reframe__section-header',
    '.case-reframe__lead',
    '.case-reframe__project-card',
    '.case-reframe__callout',
    '.case-reframe__chip',
    '.case-reframe__node',
    '.case-reframe__role',
    '.case-reframe__constraint',
    '.case-reframe__impact-stat',
    '.case-reframe__architecture-lane',
    '.case-reframe__section-body > p',
    '.case-reframe__plate',
    '.case-reframe__hub-stage',
    '.case-reframe__cycle',
    '.case-reframe__reflection-copy'
  ].map(function (s) { return '.case-page--espresso ' + s; }).join(', ');

  var STAGGER_STEP = 60;
  var STAGGER_CAP = 420;

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
    var targets = document.querySelectorAll(revealSelector + ', ' + caseSelector);
    if (!targets.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      setVisibleList(targets);
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      var batch = [];
      for (var j = 0; j < entries.length; j++) {
        var entry = entries[j];
        if (!entry.isIntersecting) continue;
        batch.push(entry.target);
        obs.unobserve(entry.target);
      }
      if (!batch.length) return;

      // Stagger por lote: quem aparece junto, entra em sequência (ordem visual).
      batch.sort(function (a, b) {
        var ra = a.getBoundingClientRect();
        var rb = b.getBoundingClientRect();
        return (ra.top - rb.top) || (ra.left - rb.left);
      });

      for (var k = 0; k < batch.length; k++) {
        var delay = Math.min(k * STAGGER_STEP, STAGGER_CAP);
        if (delay > 0) {
          batch[k].style.setProperty('--motion-delay', delay + 'ms');
        }
        addVisible(batch[k]);
      }
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    for (var k2 = 0; k2 < targets.length; k2++) {
      var el = targets[k2];

      // Hero children are sequenced by initHero(). The hero container itself still needs visibility.
      if (isInsideHeroChild(el)) continue;

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
      el.style.setProperty('--motion-delay', Math.min(j * 60, 360) + 'ms');
      addVisible(el);
    }
  }

  // ── 3. PARALLAX ENGINE ───────────────────────────────────────────────────────
  function initParallax() {
    if (reduceMotion) return;

    var softElements = document.querySelectorAll('.motion-parallax-soft, [data-parallax]');
    var bgElement = document.querySelector('.motion-parallax-bg');

    if (!softElements.length && !bgElement) return;

    var softItems = [];
    var bgItem = null;

    var ticking = false;
    var viewportH = window.innerHeight || document.documentElement.clientHeight;

    function cacheLayout() {
      viewportH = window.innerHeight || document.documentElement.clientHeight;
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;

      softItems = [];
      for (var i = 0; i < softElements.length; i++) {
        var el = softElements[i];
        var rect = el.getBoundingClientRect();
        softItems.push({
          el: el,
          offsetTop: rect.top + scrollY,
          height: rect.height,
          speed: parseFloat(el.getAttribute('data-parallax') || '0.025')
        });
      }

      if (bgElement && bgElement.parentElement) {
        var pRect = bgElement.parentElement.getBoundingClientRect();
        bgItem = {
          el: bgElement,
          parentOffsetTop: pRect.top + scrollY,
          parentHeight: pRect.height
        };
      }
    }

    function update() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;

      for (var i = 0; i < softItems.length; i++) {
        var item = softItems[i];
        if (scrollY + viewportH > item.offsetTop && scrollY < item.offsetTop + item.height) {
          var itemCenter = item.offsetTop + item.height / 2;
          var diff = itemCenter - (scrollY + viewportH / 2);
          var y = diff * item.speed;
          var cap = 16;
          y = Math.max(-cap, Math.min(cap, y));
          item.el.style.transform = 'translate3d(0,' + y.toFixed(2) + 'px,0)';
        }
      }

      if (bgItem) {
        if (scrollY + viewportH > bgItem.parentOffsetTop && scrollY < bgItem.parentOffsetTop + bgItem.parentHeight) {
          var offset = scrollY * 0.08;
          bgItem.el.style.transform = 'scale(1.04) translateY(' + offset.toFixed(2) + 'px)';
        }
      }

      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    function onResize() {
      cacheLayout();
      onScroll();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    cacheLayout();
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
