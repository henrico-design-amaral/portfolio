/* ═══════════════════════════════════════════════════════════
   HOME.JS — Henrico Amaral Portfolio
   Base zero. Sem herança de site.js.
   v: home-zero-01 | 2026-05-31
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────
   1. COPY PT/EN
   ─────────────────────────────────────────────*/
const COPY = {
  pt: {
    /* Navegação */
    'nav.method':  'Método',
    'nav.cases':   'Casos',
    'nav.impact':  'Impacto',
    'nav.about':   'Sobre',
    'nav.contact': 'Contato',
    'skip':        'Ir para o conteúdo',

    /* Hero */
    'hero.badge':   'Disponível agora · CLT · PJ · Freelancer',
    'hero.eyebrow': 'Product Design · Enterprise · Operações complexas',
    'hero.title':   'Sistemas claros para decisões difíceis.',
    'hero.sub':     'Ajudo empresas a transformar fluxos confusos, dados dispersos e regras complexas em produtos digitais fáceis de operar.',
    'hero.cta':     'Vamos conversar',
    'worked-with':  'Clientes',

    /* Método */
    's2.kicker':    'CONTEXTO · ESTRUTURA · INTERAÇÃO',
    's2.title':     'Antes de desenhar telas,<br>organizo o problema.',
    's2.sub':       'Mapeio fluxos, regras, usuários e decisões para transformar sistemas complexos em produtos mais claros.',
    'm1.step':      '01 / Input',
    'm1.title':     'Entender o contexto',
    'm1.desc':      'Identifico quem usa, quem decide, quais regras importam e onde o fluxo quebra.',
    'm2.step':      '02 / Logic',
    'm2.title':     'Organizar a estrutura',
    'm2.desc':      'Transformo processos dispersos em jornadas, estados, permissões e prioridades claras.',
    'm3.step':      '03 / Flow',
    'm3.title':     'Desenhar a experiência',
    'm3.desc':      'Crio interfaces que reduzem esforço, orientam ação e deixam o sistema mais fácil de operar.',
    'm4.step':      '04 / Output',
    'm4.title':     'Validar e ajustar',
    'm4.desc':      'Testo hipóteses, alinho áreas envolvidas e refino a solução antes da implementação.',

    /* Casos */
    's3.kicker':        'PROJETOS REAIS · PROBLEMAS COMPLEXOS',
    's3.title':         'Trabalhos onde clareza<br>virou operação.',
    's3.sub':           'Cases em plataformas internas, produtos B2B e sistemas de decisão. Os setores mudam. O problema é o mesmo: organizar complexidade para melhorar a operação.',
    'case.label.sys':   'Sistema',
    'case.label.ctx':   'Contexto',
    'case.label.scope': 'Escopo',
    'case.label.imp':   'Impacto',

    /* Petrobras */
    'c1.sector':   'ENERGIA',
    'c1.client':   'Petrobras',
    'c1.desc':     'Coordenação offshore crítica para monitoramento ambiental e resposta operacional em tempo real.',
    'c1.sys':      'Monitoramento<br>ambiental offshore',
    'c1.ctx':      'Operação<br>offshore',
    'c1.scope':    'Resposta<br>ambiental',
    'c1.imp':      'Coordenação de<br>riscos operacionais',
    'c1.metric':   '95% de redução no esforço manual',
    'c1.mlabel':   'EVIDÊNCIA QUANTITATIVA',
    'c1.modal':    'Centralização de sinais operacionais offshore distribuídos em um ambiente unificado de monitoramento para decisões críticas de gestão de plataformas.',

    /* Ambev */
    'c2.sector':   'LOGÍSTICA',
    'c2.client':   'Ambev',
    'c2.desc':     'Infraestrutura logística nacional para monitoramento distribuído e gestão de rupturas operacionais.',
    'c2.sys':      'Gestão logística<br>distribuída',
    'c2.ctx':      'Escala<br>nacional',
    'c2.scope':    'Supply<br>chain',
    'c2.imp':      'Visibilidade de<br>rupturas operacionais',
    'c2.metric':   'Leitura operacional em escala',
    'c2.mlabel':   'EVIDÊNCIA QUALITATIVA',
    'c2.modal':    'Estruturação da visibilidade de exceções logísticas em uma cadeia de suprimentos distribuída para detecção de anomalias e resposta coordenada.',

    /* Bayer */
    'c3.sector':   'AGRONEGÓCIO',
    'c3.client':   'Bayer',
    'c3.desc':     'Sistema territorial de inteligência agronômica para análise ambiental e suporte à decisão agrícola.',
    'c3.sys':      'Inteligência<br>agronômica',
    'c3.ctx':      'Análise<br>técnica',
    'c3.scope':    'Dados<br>agrícolas',
    'c3.imp':      'Rastreabilidade de<br>dados agrícolas',
    'c3.metric':   'Múltiplas camadas integradas',
    'c3.mlabel':   'EVIDÊNCIA QUALITATIVA',
    'c3.modal':    'Unificação de fluxos de dados agrícolas fragmentados em uma arquitetura progressiva de interpretação nacional.',

    /* BMG */
    'c4.sector':   'FINANÇAS',
    'c4.client':   'BMG',
    'c4.desc':     'Arquitetura financeira modular para operações PJ em ambientes regulados.',
    'c4.sys':      'Plataforma financeira<br>empresarial',
    'c4.ctx':      'Ambiente<br>regulado',
    'c4.scope':    'Conta<br>PJ',
    'c4.imp':      'Fluxos regulados<br>simplificados',
    'c4.metric':   'Onboarding modular e flexível',
    'c4.mlabel':   'EVIDÊNCIA QUALITATIVA',
    'c4.modal':    'Design de lógica de permissões complexas e fluxos de estado de transação para uma plataforma bancária corporativa com rastreabilidade completa.',

    'modal.close': 'Fechar',
    'modal.label': 'Caso',

    /* Impacto */
    's4.kicker':     'EVIDÊNCIA · ESCALA · RASTREABILIDADE',
    's4.title':      'Impacto observável.<br>Operação rastreável.',
    's4.sub':        'Quando há número validado, ele aparece. Quando o impacto é estrutural, a evidência é descrita com precisão.',
    'imp.dim':       'DIMENSÃO',
    'imp.ev':        'EVIDÊNCIA',
    'imp1.client':   'Petrobras',
    'imp1.dim':      'Automação operacional',
    'imp1.value':    '95% de redução no esforço manual',
    'imp1.desc':     'Consolidação de relatórios operacionais reorganizada para leitura contínua em contexto offshore.',
    'imp1.type':     'Operação crítica',
    'imp2.client':   'Bayer',
    'imp2.dim':      'Dados agrícolas',
    'imp2.value':    'Rastreabilidade de dados agrícolas',
    'imp2.desc':     'Informações agrícolas reorganizadas em torno da cultura como unidade central de análise, conectando dados técnicos, comparação de indicadores e registro de decisões dentro de um fluxo estruturado.',
    'imp2.type':     'Dados agrícolas',
    'imp3.client':   'Ambev',
    'imp3.dim':      'Monitoramento logístico',
    'imp3.value':    'Visibilidade de rupturas operacionais',
    'imp3.desc':     'Estrutura de supply chain organizada para leitura de disponibilidade, ruptura e coordenação logística. A plataforma passou a refletir o estado real da operação.',
    'imp3.type':     'Supply chain',
    'imp4.client':   'BMG',
    'imp4.dim':      'Ambiente regulado',
    'imp4.value':    'Fluxos regulados simplificados',
    'imp4.desc':     'Jornada PJ estruturada com validações, estados e fluxos aderentes a exigências operacionais e regulatórias.',
    'imp4.type':     'Banking / compliance',

    /* Sobre */
    's5.kicker':   'TRAJETÓRIA · MÉTODO · REPERTÓRIO',
    's5.title':    'Por trás<br>da estrutura.',
    's5.sub':      'Senior Product Designer para plataformas B2B, sistemas internos e operações complexas.',
    'ab.p1':       'Sou Senior Product Designer com 20 anos em design digital e mais de 15 anos em UX/Product Design.',
    'ab.p2':       'Meu trabalho é organizar fluxos, informação e decisões em produtos digitais usados por times de operação, negócio e tecnologia.',
    'ab.p3':       'Atuei em projetos para Petrobras, Bayer, Ambev, Banco do Brasil, Bradesco, Claro, Globo, iFood, BMG e Youse. São setores diferentes, mas o desafio se repete: transformar complexidade em sistemas mais claros, confiáveis e fáceis de operar.',
    'ab.p4':       'Não parto da tela. Parto do problema, do fluxo, das regras e das decisões que o sistema precisa sustentar.',
    'ab.c1.title': 'Papel',
    'ab.c1.items': '<li>Senior Product Designer</li><li>Plataformas B2B</li><li>Sistemas internos</li><li>Workflows complexos</li><li>Ambientes regulados</li>',
    'ab.c2.title': 'O que resolvo',
    'ab.c2.items': '<li>Fluxos confusos</li><li>Dados dispersos</li><li>Regras de negócio</li><li>Múltiplos stakeholders</li>',
    'ab.c3.title': 'Como trabalho',
    'ab.c3.items': '<li>Discovery</li><li>Arquitetura da informação</li><li>Fluxos e estados</li><li>Prototipação</li>',
    'ab.c4.title': 'Experiência',
    'ab.c4.items': '<li>Energia</li><li>Bancos e seguros</li><li>Telecom</li><li>Agro e logística</li><li>Produtos digitais em escala</li>',
    'ab.c5.title': 'Ferramentas',
    'ab.c5.items': '<li>Figma</li><li>FigJam / Miro</li><li>GitHub</li><li>IA generativa</li>',

    /* Contato */
    's6.kicker':   'SÃO PAULO · REMOTO/HÍBRIDO · PT/EN',
    's6.title':    'Sistemas mais claros.<br>Conversas mais objetivas.',
    's6.sub':      'Para vagas sêniores, projetos enterprise e conversas técnicas sobre produto, operação e decisão.',
    'ct.c1.title': 'Para recrutadores',
    'ct.c1.text':  'Senior Product Designer para produtos B2B, sistemas internos e operações complexas.',
    'ct.c2.title': 'Para empresas',
    'ct.c2.text':  'Diagnóstico e desenho de fluxos, plataformas internas e produtos digitais com alta complexidade.',
    'ct.c3.title': 'Para conversas técnicas',
    'ct.c3.text':  'Arquitetura da informação, prototipação e clareza operacional.',
    'ct.cv':       'Ver CV',
    'ct.cases':    'Ver cases',

    /* Footer */
    'ft.role':      'Senior Product Designer · Decision Infrastructure',
    'ft.signature': 'Pense simples. Faça melhor.<br>Torne-se inevitável.',
    'ft.bottom':    'Henrico Amaral · Product Designer · 2026',
    'ft.top':       '↑ Topo',
  },

  en: {
    /* Navegação */
    'nav.method':  'Method',
    'nav.cases':   'Cases',
    'nav.impact':  'Impact',
    'nav.about':   'About',
    'nav.contact': 'Contact',
    'skip':        'Skip to content',

    /* Hero */
    'hero.badge':   'Available now · Full-time · Contractor · Freelance',
    'hero.eyebrow': 'Product Design · Enterprise · Complex Operations',
    'hero.title':   'Clear systems for hard decisions.',
    'hero.sub':     'I help companies turn messy workflows, scattered data and complex rules into digital products teams can actually operate.',
    'hero.cta':     "Let’s talk",
    'worked-with':  'Clients',

    /* Método */
    's2.kicker':    'CONTEXT · STRUCTURE · INTERACTION',
    's2.title':     'Before designing screens,<br>I organize the problem.',
    's2.sub':       'I map workflows, rules, users and decisions to turn complex systems into clearer products.',
    'm1.step':      '01 / Input',
    'm1.title':     'Understand the context',
    'm1.desc':      'I identify who uses it, who decides, which rules matter and where the workflow breaks.',
    'm2.step':      '02 / Logic',
    'm2.title':     'Organize the structure',
    'm2.desc':      'I turn dispersed processes into clear journeys, states, permissions and priorities.',
    'm3.step':      '03 / Flow',
    'm3.title':     'Design the experience',
    'm3.desc':      'I create interfaces that reduce effort, guide action and make the system easier to operate.',
    'm4.step':      '04 / Output',
    'm4.title':     'Validate and adjust',
    'm4.desc':      'I test hypotheses, align involved teams and refine the solution before implementation.',

    /* Casos */
    's3.kicker':        'REAL PROJECTS · COMPLEX PROBLEMS',
    's3.title':         'Work where clarity<br>became operation.',
    's3.sub':           'Case studies across internal platforms, B2B products and decision systems. The industries change. The problem is the same: organizing complexity so teams can operate better.',
    'case.label.sys':   'System',
    'case.label.ctx':   'Context',
    'case.label.scope': 'Scope',
    'case.label.imp':   'Impact',

    /* Petrobras */
    'c1.sector':   'ENERGY',
    'c1.client':   'Petrobras',
    'c1.desc':     'Critical offshore coordination for environmental monitoring and real-time operational response.',
    'c1.sys':      'Offshore environmental<br>monitoring',
    'c1.ctx':      'Offshore<br>operation',
    'c1.scope':    'Environmental<br>response',
    'c1.imp':      'Operational risk<br>coordination',
    'c1.metric':   '95% reduction in manual effort',
    'c1.mlabel':   'QUANTITATIVE EVIDENCE',
    'c1.modal':    'Centralization of distributed offshore operational signals into a unified monitoring environment for critical platform management decisions.',

    /* Ambev */
    'c2.sector':   'LOGISTICS',
    'c2.client':   'Ambev',
    'c2.desc':     'National logistics infrastructure for distributed monitoring and operational stockout management.',
    'c2.sys':      'Distributed<br>logistics management',
    'c2.ctx':      'National<br>scale',
    'c2.scope':    'Supply<br>chain',
    'c2.imp':      'Operational stockout<br>visibility',
    'c2.metric':   'Operational reading at scale',
    'c2.mlabel':   'QUALITATIVE EVIDENCE',
    'c2.modal':    'Structuring visibility of logistical exceptions in a distributed supply chain for anomaly detection and coordinated response.',

    /* Bayer */
    'c3.sector':   'AGRIBUSINESS',
    'c3.client':   'Bayer',
    'c3.desc':     'Territorial agronomic intelligence system for environmental analysis and agricultural decision support.',
    'c3.sys':      'Agronomic<br>intelligence',
    'c3.ctx':      'Technical<br>analysis',
    'c3.scope':    'Agricultural<br>data',
    'c3.imp':      'Agricultural data<br>traceability',
    'c3.metric':   'Multiple layers integrated',
    'c3.mlabel':   'QUALITATIVE EVIDENCE',
    'c3.modal':    'Unification of fragmented agricultural data flows into a progressive national interpretation architecture.',

    /* BMG */
    'c4.sector':   'FINANCE',
    'c4.client':   'BMG',
    'c4.desc':     'Modular financial architecture for business operations in regulated environments.',
    'c4.sys':      'Enterprise financial<br>platform',
    'c4.ctx':      'Regulated<br>environment',
    'c4.scope':    'Business<br>account',
    'c4.imp':      'Simplified regulated<br>flows',
    'c4.metric':   'Flexible and modular onboarding',
    'c4.mlabel':   'QUALITATIVE EVIDENCE',
    'c4.modal':    'Design of complex permission logic and transaction state flows for a corporate banking platform with full traceability.',

    'modal.close': 'Close',
    'modal.label': 'Case',

    /* Impacto */
    's4.kicker':     'EVIDENCE · SCALE · TRACEABILITY',
    's4.title':      'Observable impact.<br>Traceable operation.',
    's4.sub':        'When a validated number exists, it appears. When the impact is structural, the evidence is described precisely.',
    'imp.dim':       'DIMENSION',
    'imp.ev':        'EVIDENCE',
    'imp1.client':   'Petrobras',
    'imp1.dim':      'Operational automation',
    'imp1.value':    '95% reduction in manual effort',
    'imp1.desc':     'Operational reporting consolidation reorganized for continuous reading in offshore contexts.',
    'imp1.type':     'Critical operation',
    'imp2.client':   'Bayer',
    'imp2.dim':      'Agricultural data',
    'imp2.value':    'Agricultural data traceability',
    'imp2.desc':     'Agricultural information reorganized around the crop as the central unit of analysis, connecting technical data, indicator comparison and decision records inside a structured flow.',
    'imp2.type':     'Agricultural data',
    'imp3.client':   'Ambev',
    'imp3.dim':      'Logistics monitoring',
    'imp3.value':    'Operational stockout visibility',
    'imp3.desc':     'Supply chain structure organized for reading availability, stockouts and logistical coordination. The platform started to reflect the real state of the operation.',
    'imp3.type':     'Supply chain',
    'imp4.client':   'BMG',
    'imp4.dim':      'Regulated environment',
    'imp4.value':    'Simplified regulated flows',
    'imp4.desc':     'Business banking journey structured with validations, states and flows aligned with operational and regulatory requirements.',
    'imp4.type':     'Banking / compliance',

    /* Sobre */
    's5.kicker':   'TRAJECTORY · METHOD · RANGE',
    's5.title':    'Behind<br>the structure.',
    's5.sub':      'Senior Product Designer for B2B platforms, internal systems and complex operations.',
    'ab.p1':       'I'm a Senior Product Designer with 20 years in digital design and 15+ years in UX/Product Design.',
    'ab.p2':       'My work is about organizing workflows, information and decisions in digital products used by operations, business and technology teams.',
    'ab.p3':       'I've worked on projects for Petrobras, Bayer, Ambev, Banco do Brasil, Bradesco, Claro, Globo, iFood, BMG and Youse. Different industries, same challenge: turning complexity into clearer, more reliable and easier-to-operate systems.',
    'ab.p4':       'I don't start from the screen. I start from the problem, the workflow, the rules and the decisions the system needs to support.',
    'ab.c1.title': 'Role',
    'ab.c1.items': '<li>Senior Product Designer</li><li>B2B platforms</li><li>Internal systems</li><li>Complex workflows</li><li>Regulated environments</li>',
    'ab.c2.title': 'What I solve',
    'ab.c2.items': '<li>Messy workflows</li><li>Scattered data</li><li>Business rules</li><li>Multiple stakeholders</li>',
    'ab.c3.title': 'How I work',
    'ab.c3.items': '<li>Discovery</li><li>Information architecture</li><li>Flows and states</li><li>Prototyping</li>',
    'ab.c4.title': 'Experience',
    'ab.c4.items': '<li>Energy</li><li>Banking and insurance</li><li>Telecom</li><li>Agro and logistics</li><li>Digital products at scale</li>',
    'ab.c5.title': 'Tools',
    'ab.c5.items': '<li>Figma</li><li>FigJam / Miro</li><li>GitHub</li><li>Generative AI</li>',

    /* Contato */
    's6.kicker':   'SÃO PAULO · REMOTE/HYBRID · PT/EN',
    's6.title':    'Clearer systems.<br>More objective conversations.',
    's6.sub':      'For senior roles, enterprise projects and technical conversations about product, operations and decision-making.',
    'ct.c1.title': 'For recruiters',
    'ct.c1.text':  'Senior Product Designer for B2B products, internal systems and complex operations.',
    'ct.c2.title': 'For companies',
    'ct.c2.text':  'Diagnosis and design of workflows, internal platforms and highly complex digital products.',
    'ct.c3.title': 'For technical conversations',
    'ct.c3.text':  'Information architecture, prototyping and operational clarity.',
    'ct.cv':       'View CV',
    'ct.cases':    'View cases',

    /* Footer */
    'ft.role':      'Senior Product Designer · Decision Infrastructure',
    'ft.signature': 'Pense simples. Faça melhor.<br>Torne-se inevitável.',
    'ft.bottom':    'Henrico Amaral · Product Designer · 2026',
    'ft.top':       '↑ Top',
  }
};


/* ─────────────────────────────────────────────
   2. ESTADO GLOBAL
   ─────────────────────────────────────────────*/
const LANG_KEY = 'ha_lang';
let currentLang = 'pt';


/* ─────────────────────────────────────────────
   3. IDIOMA
   ─────────────────────────────────────────────*/
function setLanguage(lang) {
  const safe = (lang === 'en') ? 'en' : 'pt';
  currentLang = safe;

  /* Atualizar documentElement */
  document.documentElement.lang = (safe === 'pt') ? 'pt-BR' : 'en';
  document.documentElement.dataset.lang = safe;
  localStorage.setItem(LANG_KEY, safe);

  const dict = COPY[safe] || COPY.pt;

  /* Atualizar elementos com data-t */
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (typeof dict[key] !== 'string') return;
    el.innerHTML = dict[key];
  });

  /* Atualizar alt text */
  document.querySelectorAll('[data-t-alt]').forEach(el => {
    const key = el.dataset.tAlt;
    if (dict[key]) el.setAttribute('alt', dict[key]);
  });

  /* Atualizar aria-label */
  document.querySelectorAll('[data-t-aria]').forEach(el => {
    const key = el.dataset.tAria;
    if (dict[key]) el.setAttribute('aria-label', dict[key]);
  });

  /* Sincronizar todos os toggles */
  document.querySelectorAll('[data-lang-toggle]').forEach(toggle => {
    toggle.dataset.currentLang = safe;
    toggle.setAttribute('aria-label',
      safe === 'pt' ? 'Selecionar idioma' : 'Select language');
  });

  document.querySelectorAll('.lang-toggle__option').forEach(btn => {
    const active = btn.dataset.lang === safe;
    btn.setAttribute('aria-pressed', String(active));
  });

  /* Anunciar para screen readers */
  const announcer = document.getElementById('sr-announcer');
  if (announcer) {
    announcer.textContent = safe === 'pt'
      ? 'Idioma alterado para Português'
      : 'Language changed to English';
  }
}

function initLanguageToggle() {
  const saved = localStorage.getItem(LANG_KEY);
  const initial = (saved === 'en' || saved === 'pt') ? saved : 'pt';

  document.querySelectorAll('.lang-toggle__option').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  setLanguage(initial);
}


/* ─────────────────────────────────────────────
   4. NAV — SCROLL BEHAVIOR
   ─────────────────────────────────────────────*/
function initNavScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let last = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    last = current;
  }, { passive: true });
}


/* ─────────────────────────────────────────────
   5. MENU MOBILE
   ─────────────────────────────────────────────*/
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    const nextOpen = !isOpen;
    menu.hidden = !nextOpen;
    toggle.setAttribute('aria-expanded', String(nextOpen));
    toggle.setAttribute('aria-label',
      currentLang === 'pt'
        ? (nextOpen ? 'Fechar menu' : 'Abrir menu')
        : (nextOpen ? 'Close menu' : 'Open menu')
    );
  });

  /* Fechar ao clicar em link interno */
  menu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label',
        currentLang === 'pt' ? 'Abrir menu' : 'Open menu');
    });
  });
}


/* ─────────────────────────────────────────────
   6. MODAL DE CASO
   ─────────────────────────────────────────────*/
const CASE_DATA = [
  { key: 'c1', img: 'assets/img/cases/petrobras.webp', tags: ['Offshore', 'Monitoring'] },
  { key: 'c2', img: 'assets/img/cases/ambev.webp',     tags: ['Supply Chain', 'Operations'] },
  { key: 'c3', img: 'assets/img/cases/bayer.webp',     tags: ['Agri-tech', 'Data Scale'] },
  { key: 'c4', img: 'assets/img/cases/bmg.webp',       tags: ['Fintech', 'Compliance'] },
];

let lastFocus = null;

function openCaseModal(index) {
  const data = CASE_DATA[index];
  if (!data) return;

  const modal = document.getElementById('case-modal-overlay');
  if (!modal) return;

  lastFocus = document.activeElement;
  const dict = COPY[currentLang] || COPY.pt;

  /* Preencher conteúdo */
  const clientEl = document.getElementById('modal-client');
  const descEl   = document.getElementById('modal-desc');
  const metricEl = document.getElementById('modal-metric');
  const labelEl  = document.getElementById('modal-metric-label');
  const tagsEl   = document.getElementById('modal-tags');

  if (clientEl) clientEl.textContent = dict[`${data.key}.client`] || '';
  if (descEl)   descEl.textContent   = dict[`${data.key}.modal`]  || '';
  if (metricEl) metricEl.textContent = dict[`${data.key}.metric`] || '';
  if (labelEl)  labelEl.textContent  = dict[`${data.key}.mlabel`] || '';

  if (tagsEl) {
    tagsEl.innerHTML = '';
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'case-modal__tag';
      span.textContent = tag;
      tagsEl.appendChild(span);
    });
  }

  /* Mostrar modal */
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');

  /* Foco no botão de fechar */
  requestAnimationFrame(() => {
    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) closeBtn.focus();
  });
}

function closeCaseModal() {
  const modal = document.getElementById('case-modal-overlay');
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
}

function initCaseModal() {
  /* Abrir ao clicar em card */
  document.querySelectorAll('[data-case-index]').forEach(card => {
    card.addEventListener('click', () => {
      openCaseModal(parseInt(card.dataset.caseIndex, 10));
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCaseModal(parseInt(card.dataset.caseIndex, 10));
      }
    });
  });

  /* Fechar */
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeCaseModal);

  const overlay = document.getElementById('case-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeCaseModal();
    });
  }

  /* Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('case-modal-overlay');
      if (modal && !modal.hidden) closeCaseModal();
    }
  });

  /* Focus trap */
  document.addEventListener('keydown', e => {
    const modal = document.getElementById('case-modal-overlay');
    if (!modal || modal.hidden) return;
    if (e.key !== 'Tab') return;

    const focusable = Array.from(
      modal.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])')
    ).filter(el => !el.disabled && el.offsetParent !== null);

    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}


/* ─────────────────────────────────────────────
   7. INIT
   ─────────────────────────────────────────────*/
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initNavScroll();
  initMobileMenu();
  initCaseModal();
});
