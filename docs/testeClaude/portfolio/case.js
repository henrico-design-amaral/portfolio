/* Case page interactions — reveal + nav state */
(function () {
  'use strict';
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  var nav = document.querySelector('.nav');
  var dark = [].slice.call(document.querySelectorAll('[data-navdark]'));
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 12);
    var p = nav.offsetHeight + 4;
    nav.classList.toggle('dark', dark.some(function (s) { var r = s.getBoundingClientRect(); return r.top <= p && r.bottom >= p; }));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
