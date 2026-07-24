document.documentElement.classList.add('js-enabled');

const header = document.querySelector('[data-header]');
const progress = document.querySelector('.scroll-progress span');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

const setScrolled = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
const setProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
};

window.addEventListener('scroll', () => {
  setScrolled();
  setProgress();
}, { passive: true });

setScrolled();
setProgress();

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  toggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reduce-motion');
}
