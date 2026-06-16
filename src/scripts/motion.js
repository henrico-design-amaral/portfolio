const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

if (reduceMotion) {
  root.classList.add('motion-reduced');
}

setYear();
