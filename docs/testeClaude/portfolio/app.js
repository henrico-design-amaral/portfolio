/* ===========================================================
   Portfolio interactions — vanilla, robust, direct-edit safe
   =========================================================== */
(function () {
  'use strict';

  /* ---- scroll reveal ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* ---- nav: scrolled state + dark-over-dark sections ---- */
  var nav = document.querySelector('.nav');
  var darkSections = Array.prototype.slice.call(document.querySelectorAll('[data-navdark]'));
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 12);
    var probe = nav.offsetHeight + 4;
    var overDark = darkSections.some(function (s) {
      var r = s.getBoundingClientRect();
      return r.top <= probe && r.bottom >= probe;
    });
    nav.classList.toggle('dark', overDark);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- nav active link via section observers ---- */
  var links = {};
  document.querySelectorAll('.nav__links a[href^="#"]').forEach(function (a) {
    links[a.getAttribute('href').slice(1)] = a;
  });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var a = links[e.target.id];
      if (!a) return;
      if (e.isIntersecting) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
        a.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(links).forEach(function (id) {
    var s = document.getElementById(id);
    if (s) spy.observe(s);
  });

  /* ---- marquee: duplicate track for seamless loop ---- */
  document.querySelectorAll('.marquee__track').forEach(function (t) {
    t.innerHTML = t.innerHTML + t.innerHTML;
  });

  /* ---- case modal ---- */
  var DATA = {
    petrobras: {
      sector: 'Energia · Operação offshore',
      name: 'Petrobras',
      lead: 'Coordenação offshore crítica para monitoramento ambiental e resposta operacional em tempo real. Consolidei informações antes dispersas entre monitoramento orbital, análise geoespacial e mobilização de recursos em um único fluxo contínuo de leitura.',
      img: 'https://henrico-design-amaral.github.io/portfolio/assets/img/cases/petrobras.webp',
      page: 'Case — Petrobras SALA CAR.html',
      meta: { Sistema: 'Monitoramento ambiental offshore', Contexto: 'Operação offshore', Escopo: 'Resposta ambiental', Impacto: 'Coordenação de riscos operacionais' },
      note: '95% de redução no esforço manual de consolidação de relatórios operacionais.'
    },
    ambev: {
      sector: 'Logística · Escala nacional',
      name: 'Ambev',
      lead: 'Infraestrutura logística nacional para monitoramento distribuído e gestão de rupturas operacionais. Estruturei a supply chain para leitura de disponibilidade, ruptura e coordenação — a plataforma passou a refletir o estado real da operação.',
      img: 'https://henrico-design-amaral.github.io/portfolio/assets/img/cases/ambev.webp',
      meta: { Sistema: 'Gestão logística distribuída', Contexto: 'Escala nacional', Escopo: 'Supply chain', Impacto: 'Visibilidade de rupturas operacionais' },
      note: 'Dados dispersos transformados em uma visão operacional compartilhada.'
    },
    bayer: {
      sector: 'Agronegócio · Inteligência agronômica',
      name: 'Bayer',
      lead: 'Sistema territorial de inteligência agronômica para análise ambiental e suporte à decisão agrícola. Reorganizei as informações em torno da cultura como unidade central de análise, conectando dados técnicos, comparação de indicadores e registro de decisões.',
      img: 'https://henrico-design-amaral.github.io/portfolio/assets/img/cases/bayer.webp',
      meta: { Sistema: 'Inteligência agronômica', Contexto: 'Análise técnica', Escopo: 'Dados agrícolas', Impacto: 'Rastreabilidade de dados agrícolas' },
      note: 'Cultura como unidade central conectando dados, comparação e decisão.'
    },
    bmg: {
      sector: 'Finanças · Ambiente regulado',
      name: 'BMG',
      lead: 'Arquitetura financeira modular para operações PJ em ambientes regulados. Estruturei a jornada PJ com validações, estados e fluxos aderentes a exigências operacionais e regulatórias — pensada para pequenas empresas sem remover segurança e conformidade.',
      img: 'https://henrico-design-amaral.github.io/portfolio/assets/img/cases/bmg.webp',
      meta: { Sistema: 'Plataforma financeira empresarial', Contexto: 'Ambiente regulado', Escopo: 'Conta PJ', Impacto: 'Fluxos regulados simplificados' },
      note: 'Conta digital para PJ sem abrir mão de conformidade bancária.'
    }
  };

  var modal = document.getElementById('caseModal');
  var mHero = modal.querySelector('.modal__hero');
  var mSector = modal.querySelector('.modal__sector');
  var mName = modal.querySelector('.modal__body h3');
  var mLead = modal.querySelector('.modal__lead');
  var mMeta = modal.querySelector('.modal__meta');
  var mNote = modal.querySelector('.modal__note');
  var mCta = modal.querySelector('.modal__cta');
  var lastFocus = null;

  function openCase(key) {
    var d = DATA[key]; if (!d) return;
    lastFocus = document.activeElement;
    mHero.style.backgroundImage = 'url(' + d.img + ')';
    mSector.textContent = d.sector;
    mName.textContent = d.name;
    mLead.textContent = d.lead;
    mMeta.innerHTML = Object.keys(d.meta).map(function (k) {
      return '<div><dt>' + k + '</dt><dd>' + d.meta[k] + '</dd></div>';
    }).join('');
    mNote.textContent = d.note;
    if (d.page) { mCta.href = d.page; mCta.style.display = 'inline-flex'; }
    else { mCta.style.display = 'none'; }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__close').focus();
  }
  function closeCase() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.case').forEach(function (c) {
    c.addEventListener('click', function () { openCase(c.dataset.case); });
    c.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCase(c.dataset.case); }
    });
  });
  modal.querySelector('.modal__close').addEventListener('click', closeCase);
  modal.querySelector('.modal__scrim').addEventListener('click', closeCase);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeCase();
  });

  /* ---- footer year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
