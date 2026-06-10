/**
 * Organic & Semantic Motion Engine
 * Henrico Amaral Portfolio
 */
(function() {
  const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Reveal Engine via IntersectionObserver
  function initRevealEngine() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger when element is 10% in viewport
      threshold: 0.02
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    const targets = document.querySelectorAll(
      '.motion-reveal, .motion-reveal-up, .motion-reveal-down, .motion-reveal-left, .motion-reveal-right, .motion-blur-in, .motion-fade-in, .motion-scale-in'
    );

    targets.forEach(target => {
      if (motionReduced) {
        target.classList.add('is-visible');
      } else {
        // Skip elements inside hero to handle them sequentially
        if (!target.closest('#hero') && !target.closest('.case-hero')) {
          revealObserver.observe(target);
        }
      }
    });
  }

  // 2. Parallax Engine (Passive Scroll + requestAnimationFrame)
  function initParallaxEngine() {
    if (motionReduced) return;

    const parallaxElements = document.querySelectorAll('.motion-parallax, .motion-parallax-soft');
    const bgParallax = document.querySelector('.motion-parallax-bg');

    if (!parallaxElements.length && !bgParallax) return;

    let ticking = false;

    function updateParallax() {
      const scrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;

      // Regular Parallax
      parallaxElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const elementCenter = rect.top + rect.height / 2;
          const screenCenter = viewportHeight / 2;
          const diff = elementCenter - screenCenter;

          const isSoft = el.classList.contains('motion-parallax-soft');
          const multiplier = isSoft ? 0.03 : 0.06;

          let translation = diff * multiplier;
          const maxTranslate = isSoft ? 14 : 28;
          translation = Math.max(-maxTranslate, Math.min(maxTranslate, translation));

          el.style.transform = `translateY(${translation.toFixed(1)}px)`;
        }
      });

      // Background Hero Parallax
      if (bgParallax) {
        const rect = bgParallax.parentElement.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const offset = scrollY * 0.12;
          bgParallax.style.transform = `scale(1.04) translateY(${offset.toFixed(1)}px)`;
        }
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();
  }

  // 3. Premium Magnetic Hover Interaction
  function initMagneticButtons() {
    if (motionReduced) return;

    const magneticElements = document.querySelectorAll('.magnetic-wrap, .motion-magnetic');

    magneticElements.forEach(el => {
      el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

      el.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        // Muted movement (maximum 6px displacement)
        const moveX = (x * 0.12).toFixed(1);
        const moveY = (y * 0.12).toFixed(1);

        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // 4. Hero & Case Hero Entry Sequence
  function triggerHeroSequence() {
    const hero = document.getElementById('hero') || document.querySelector('.case-hero');
    if (!hero) return;

    if (motionReduced) {
      hero.querySelectorAll(
        '.motion-reveal, .motion-reveal-up, .motion-reveal-down, .motion-reveal-left, .motion-reveal-right, .motion-blur-in, .motion-fade-in, .motion-scale-in'
      ).forEach(el => el.classList.add('is-visible'));
      return;
    }

    // Sequence elements sequentially
    const sequence = hero.querySelectorAll(
      '.motion-reveal, .motion-reveal-up, .motion-reveal-down, .motion-reveal-left, .motion-reveal-right, .motion-blur-in, .motion-fade-in, .motion-scale-in'
    );

    sequence.forEach((el, index) => {
      el.style.setProperty('--motion-delay', `${index * 110}ms`);
      // Use requestAnimationFrame timeout to ensure transition triggers cleanly
      setTimeout(() => {
        el.classList.add('is-visible');
      }, 50);
    });
  }

  // Initializer
  function init() {
    initRevealEngine();
    initParallaxEngine();
    initMagneticButtons();
    triggerHeroSequence();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
