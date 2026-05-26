/* ── i18n Dictionary ── */
const COPY = {
  pt: {
    'nav.method':   'Método',
    'nav.cases':    'Casos',
    'nav.impact':   'Impacto',
    'nav.about':    'Sobre',
    'eyebrow':      'Product Design · Enterprise · Operações complexas',
    'h1.l1':        'Sistemas claros',
    'h1.l2':        'para decisões difíceis.',
      'sub':          'Ajudo empresas a transformar fluxos confusos, dados dispersos e regras complexas em produtos digitais fáceis de operar.',
    'cta.primary':  'Vamos conversar',
    'worked-with':  'Clientes',
    's2.tag':       '01 / Território',
    's2.title':     'Onde atuo',
    's2.i1':        'Plataformas internas de missão crítica',
    's2.i2':        'Ambientes de monitoramento operacional',
    's2.i3':        'Sistemas de interpretação analítica',
    's2.i4':        'Fluxos financeiros regulados',
    's2.i5':        'Infraestrutura de suporte à decisão',
    's2.statement': 'Antes da interface, organizo as estruturas invisíveis que sustentam coordenação, contexto e tomada de decisão.',
    's3.tag':       '03 / Casos',
    's3.title':     'Trabalhos selecionados',
    's3.all':       'Todos os casos',
    'c1.client':    'Petrobras (SALA CAR)',
    'c1.desc':      'Plataforma de consolidação de ocorrências ambientais offshore. Centralização de sinais operacionais distribuídos para garantir resposta estruturada a eventos críticos.',
    'c1.metric':    '95% de automação documental',
    'c1.metricLabel': 'EVIDÊNCIA QUANTITATIVA',
    'c2.client':    'Bayer',
    'c2.desc':      'Plataforma de Dados Agrícolas. Estruturação da safra como unidade central de análise, conectando indicadores técnicos e validação institucional.',
    'c2.metric':    'Múltiplas camadas integradas',
    'c2.metricLabel': 'EVIDÊNCIA QUALITATIVA',
    'c3.client':    'AmBev',
    'c3.desc':      'Monitoramento operacional de logística. Organização de indicadores em camadas de leitura para detecção de quebras e acompanhamento contínuo de estados de distribuição nacional.',
    'c3.metric':    'Leitura contínua em escala',
    'c3.metricLabel': 'EVIDÊNCIA QUALITATIVA',
    'c4.client':    'BMG (Conta PJ)',
    'c4.desc':      'Banking digital modular para pequenas empresas (MEI a LTDA). Redução de burocracia no onboarding com escalabilidade progressiva de serviços financeiros e fiscais.',
    'c4.metric':    'Onboarding modular e flexível',
    'c4.metricLabel': 'EVIDÊNCIA QUALITATIVA',
    'view-case':    'Ver caso',
    's4.tag':       'CONTEXTO · ESTRUTURA · INTERAÇÃO',
    's4.title':     'Antes de desenhar telas,<br>organizo o problema.',
    's4.statement': 'Mapeio fluxos, regras, usuários e decisões para transformar sistemas complexos em produtos mais claros.',
    's4.stat1':     'MÉTODO APLICADO A PRODUTOS COMPLEXOS',
    's4.stat2':     'CAMADAS <strong>4</strong>',
    's4.stat3':     'DECISÕES <strong>+</strong>',
    's4.chip1':     'Systems Thinking',
    's4.chip2':     'Information Architecture',
    's4.chip3':     'Decision Engineering',
    's4.microphrase': 'Estruturas invisíveis, decisões mais claras.',
    's4.microflow': 'Contexto → Estrutura → Interação → Decisão',
    's4.microcomp': 'Método aplicado a produtos complexos.',
    's5.desc':      'Quando há número validado, ele aparece. Quando o impacto é estrutural, a evidência é descrita com precisão.',
    'skip':         'Ir para o conteúdo',
    'nav.contact':  'Contato',
    'worked-with':  'Clientes',
    'c1.i':         'Coordenação de Riscos Operacionais',
    's3.header.kicker': 'PROJETOS REAIS · PROBLEMAS COMPLEXOS',
    's3.header.title': 'Trabalhos onde clareza<br>virou operação.',
    's3.header.meta': 'PLATAFORMAS INTERNAS · B2B · DECISÃO',
    's3.header.desc': 'Cases em plataformas internas, produtos B2B e sistemas de decisão. Os setores mudam. O problema é o mesmo: organizar complexidade para melhorar a operação.',
    'case.label.system': 'Sistema',
    'case.label.context': 'Contexto',
    'case.label.scope': 'Escopo',
    'case.label.impact': 'Impacto',
    'case.aria.petro': 'PETROBRAS — Abrir caso Petrobras',
    'case.aria.ambev': 'AMBEV — Abrir caso Ambev',
    'case.aria.bayer': 'BAYER — Abrir caso Bayer',
    'case.aria.bmg': 'BMG — Abrir caso BMG',
    'card.petro.system': 'Operação<br>offshore',
    'card.petro.context': 'Operação<br>offshore',
    'card.petro.scope': 'Coordenação de<br>ocorrências',
    'card.petro.impact': 'Resposta<br>rastreável',
    'card.ambev.system': 'Logística<br>distribuída',
    'card.ambev.context': 'Logística<br>distribuída',
    'card.ambev.scope': 'Rupturas<br>operacionais',
    'card.ambev.impact': 'Visibilidade<br>nacional',
    'card.bayer.system': 'Dados<br>agrícolas',
    'card.bayer.context': 'Dados<br>agrícolas',
    'card.bayer.scope': 'Interpretação<br>técnica',
    'card.bayer.impact': 'Decisão<br>confiável',
    'card.bmg.system': 'Conta<br>PJ',
    'card.bmg.context': 'Conta<br>PJ',
    'card.bmg.scope': 'Fluxos<br>regulados',
    'card.bmg.impact': 'Jornada clara<br>e segura',
    'm1.label':     'Entender o contexto',
    'm1.desc':      'Identifico quem usa, quem decide, quais regras importam e onde o fluxo quebra.',
    'm2.label':     'Organizar a estrutura',
    'm2.desc':      'Transformo processos dispersos em jornadas, estados, permissões e prioridades claras.',
    'm3.label':     'Desenhar a experiência',
    'm3.desc':      'Crio interfaces que reduzem esforço, orientam ação e deixam o sistema mais fácil de operar.',
    'm4.label':     'Validar e ajustar',
    'm4.desc':      'Testo hipóteses, alinho áreas envolvidas e refino a solução antes da implementação.',
    's5.tag':       'EVIDÊNCIA · ESCALA · RASTREABILIDADE',
    's5.title':     'Impacto observável.<br>Operação rastreável.',
    's5.desc':      'Quando há número validado, ele aparece. Quando o impacto é estrutural, a evidência é descrita com precisão.',
    's5.stat1':     'RESULTADOS OBSERVÁVEIS EM SISTEMAS COMPLEXOS',
    's5.stat2':     'OPERAÇÕES <strong>12+</strong>',
    's5.stat3':     'DADOS <strong>+</strong>',
    's5.chip1':     'Operações críticas',
    's5.chip2':     'Escala operacional',
    's5.chip3':     'Rastreabilidade',
    's5.chip4':     'Sistemas enterprise',
    's5.microphrase': 'Evidências operacionais, não métricas decorativas.',
    's5.microflow': 'Escala → Rastreabilidade → Coordenação → Impacto',
    's5.microcomp': 'Resultados observáveis em sistemas complexos.',
    'imp.label_dim': 'DIMENSÃO',
    'imp.label_ev':  'EVIDÊNCIA',
    'imp1.client':  'Petrobras',
    'imp1.dim':     'Automação operacional',
    'imp1.val':     '95% de redução no esforço manual',
    'imp1.desc':    'Consolidação de relatórios operacionais reorganizada para leitura contínua em contexto offshore.',
    'imp1.type':    'Operação crítica',
    'imp2.client':  'Bayer',
    'imp2.dim':     'Dados agrícolas',
    'imp2.val':     'Rastreabilidade de dados agrícolas',
    'imp2.desc':    'Informações agrícolas reorganizadas em torno da cultura como unidade central de análise, conectando dados técnicos, comparação de indicadores e registro de decisões dentro de um fluxo estruturado.',
    'imp2.type':    'Dados agrícolas',
    'imp3.client':  'Ambev',
    'imp3.dim':     'Monitoramento logístico',
    'imp3.val':     'Visibilidade de rupturas operacionais',
    'imp3.desc':    'Estrutura de supply chain organizada para leitura de disponibilidade, ruptura e coordenação logística. A plataforma passou a refletir o estado real da operação, transformando dados dispersos em uma visão operacional compartilhada.',
    'imp3.type':    'Supply chain',
    'imp4.client':  'BMG',
    'imp4.dim':     'Ambiente regulado',
    'imp4.val':     'Fluxos regulados simplificados',
    'imp4.desc':    'Jornada PJ estruturada com validações, estados e fluxos aderentes a exigências operacionais e regulatórias. A conta digital foi pensada para pequenas empresas sem remover a segurança e a conformidade bancária do processo.',
    'imp4.type':    'Banking / compliance',
     'ab.tag':            'TRAJETÓRIA · MÉTODO · REPERTÓRIO',
     'ab.title':          'Por trás<br>da estrutura.',
     'ab.subtitle':       'Senior Product Designer para plataformas B2B, sistemas internos e operações complexas.',
     'ab.p1':             'Sou Senior Product Designer com 20 anos em design digital e mais de 15 anos em UX/Product Design.',
     'ab.p2':             'Meu trabalho é organizar fluxos, informação e decisões em produtos digitais usados por times de operação, negócio e tecnologia.',
     'ab.p3':             'Atuei em projetos para Petrobras, Bayer, Ambev, Banco do Brasil, Bradesco, Claro, Globo, iFood, BMG e Youse. São setores diferentes, mas o desafio se repete: transformar complexidade em sistemas mais claros, confiáveis e fáceis de operar.',
     'ab.p4':             'Não parto da tela. Parto do problema, do fluxo, das regras e das decisões que o sistema precisa sustentar.',
      'ab.photo.alt':      'Henrico Amaral, Senior Product Designer especializado em sistemas enterprise.',
      'ab.photo.caption': 'Henrico Amaral<br>Senior Product Designer',
     'ab.card1.title':    'Papel',
     'ab.card1.items':    '<li>Senior Product Designer</li><li>Plataformas B2B</li><li>Sistemas internos</li><li>Workflows complexos</li><li>Ambientes regulados</li>',
     'ab.card2.title':    'O que resolvo',
     'ab.card2.items':    '<li>Fluxos confusos</li><li>Dados dispersos</li><li>Regras de negócio</li><li>Múltiplos stakeholders</li>',
     'ab.card3.title':    'Como trabalho',
     'ab.card3.items':    '<li>Discovery</li><li>Arquitetura da informação</li><li>Fluxos e estados</li><li>Prototipação</li>',
     'ab.card4.title':    'Experiência',
     'ab.card4.items':    '<li>Energia</li><li>Bancos e seguros</li><li>Telecom</li><li>Agro e logística</li><li>Produtos digitais em escala</li>',
     'ab.card5.title':    'Ferramentas',
     'ab.card5.items':    '<li>Figma</li><li>FigJam / Miro</li><li>AccessMonitor</li><li>GitHub</li><li>IA generativa</li><li>Antigravity</li>',
     'ab.beyond.title':   'Além da interface',
     'ab.beyond.items':   '<li>Pai</li><li>Observador de sistemas</li><li>Aprendiz constante</li><li>IA aplicada ao design</li><li>Reposicionamento com método</li>',
      'hero.availability': 'Disponível agora · CLT · PJ · Freelancer',
     'modal.case':        'Caso',
     'ct.tag':            'SÃO PAULO · REMOTO/HÍBRIDO · PT/EN',
     'ct.title':          'Sistemas mais claros.<br>Conversas mais objetivas.',
     'ct.sub':            'Para vagas sêniores, projetos enterprise e conversas técnicas sobre produto, operação e decisão.',
     'ct.card1.title':    'Para recrutadores',
     'ct.card1.text':     'Senior Product Designer para produtos B2B, sistemas internos e operações complexas.',
     'ct.card2.title':    'Para empresas',
     'ct.card2.text':     'Diagnóstico e desenho de fluxos, plataformas internas e produtos digitais com alta complexidade.',
     'ct.card3.title':    'Para conversas técnicas',
     'ct.card3.text':     'Arquitetura da informação, prototipação, IA aplicada e clareza operacional.',
     'ct.cv':             'Ver CV',
     'ct.cases':          'Ver cases',
     'ft.role':           'Senior Product Designer · Decision Infrastructure',
     'ft.signature':      'Pense simples. Faça melhor.<br>Torne-se inevitável.',
     'ft.bio':            'Senior Product Designer para plataformas B2B, sistemas internos e operações complexas.',
     'ft.contact-label':  'Contato',
     'ft.cv':             'Currículo',
      'ft.info-label':     'Disponibilidade',
      'ft.work-mode':      'Remoto / Híbrido',
     'modal.close':       'Fechar modal',
   },
   en: {
     'nav.method':   'Method',
     'nav.cases':    'Cases',
     'nav.impact':   'Impact',
     'nav.about':    'About',
     'eyebrow':      'Product Design · Enterprise · Complex Operations',
     'h1.l1':        'Clear systems',
     'h1.l2':        'for hard decisions.',
      'sub':          'I help companies turn messy workflows, scattered data and complex rules into digital products teams can actually operate.',
      'cta.primary':  'Let\'s talk',
     'worked-with':  'Clients',
     's2.tag':       '01 / Territory',
     's2.title':     'Where I operate',
     's2.i1':        'Mission-critical internal platforms',
     's2.i2':        'Operational monitoring environments',
     's2.i3':        'Analytical interpretation systems',
     's2.i4':        'Regulated financial workflows',
     's2.i5':        'Decision-support infrastructure',
     's2.statement': 'Before the interface, I organize the invisible structures that support coordination, context, and decision-making.',
     's3.tag':       '03 / Cases',
     's3.title':     'Selected work',
     's3.all':       'All case studies',
     'c1.client':    'Petrobras (SALA CAR)',
     'c1.desc':      'Offshore environmental occurrence consolidation platform. Centralization of distributed operational signals to ensure structured response to critical events.',
     'c1.metric':    '95% documentation automation',
     'c1.metricLabel': 'QUANTITATIVE EVIDENCE',
     'c2.client':    'Bayer',
     'c2.desc':      'Agricultural Data Platform. Structuring the crop as the central unit of analysis, connecting technical indicators and institutional validation.',
     'c2.metric':    'Multiple layers integrated',
     'c2.metricLabel': 'QUALITATIVE EVIDENCE',
     'c3.client':    'AmBev',
     'c3.desc':      'Logistics operational monitoring. Organization of indicators into reading layers for disruption detection and continuous tracking of national distribution states.',
     'c3.metric':    'Continuous reading at scale',
     'c3.metricLabel': 'QUALITATIVE EVIDENCE',
     'c4.client':    'BMG (Conta PJ)',
     'c4.desc':      'Modular digital banking for small businesses (MEI to LTDA). Bureaucracy reduction in onboarding with progressive scalability of financial and fiscal services.',
     'c4.metric':    'Flexible and modular onboarding',
     'c4.metricLabel': 'QUALITATIVE EVIDENCE',
     'view-case':    'View case',
      's4.tag':       'CONTEXT · STRUCTURE · INTERACTION',
      's4.title':     'Before designing screens,<br>I organize the problem.',
      's4.statement': 'I map workflows, rules, users and decisions to turn complex systems into clearer products.',
      's4.stat1':     'METHOD APPLIED TO COMPLEX PRODUCTS',
      's4.stat2':     'LAYERS <strong>4</strong>',
      's4.stat3':     'DECISIONS <strong>+</strong>',
      's4.chip1':     'Systems Thinking',
      's4.chip2':     'Information Architecture',
      's4.chip3':     'Decision Engineering',
      's4.microphrase': 'Invisible structures, clearer decisions.',
      's4.microflow': 'Context → Structure → Interaction → Decision',
      's4.microcomp': 'Method applied to complex products.',
      's5.desc':      'When a validated number exists, it appears. When the impact is structural, the evidence is described precisely.',
      'skip':         'Skip to content',
      'nav.contact':  'Contact',
      'worked-with':  'Clients',
      'c1.i':         'Operational Risk Coordination',
      's3.header.kicker': 'REAL PROJECTS · COMPLEX PROBLEMS',
      's3.header.title': 'Work where clarity<br>became operation.',
      's3.header.meta': 'INTERNAL PLATFORMS · B2B · DECISION',
      's3.header.desc': 'Case studies across internal platforms, B2B products and decision systems. The industries change. The problem is the same: organizing complexity so teams can operate better.',
      'case.label.system': 'System',
      'case.label.context': 'Context',
      'case.label.scope': 'Scope',
      'case.label.impact': 'Impact',
      'case.aria.petro': 'PETROBRAS — Open Petrobras case',
      'case.aria.ambev': 'AMBEV — Open Ambev case',
      'case.aria.bayer': 'BAYER — Open Bayer case',
      'case.aria.bmg': 'BMG — Open BMG case',
      'card.petro.system': 'Offshore<br>operation',
      'card.petro.context': 'Offshore<br>operation',
      'card.petro.scope': 'Occurrence<br>coordination',
      'card.petro.impact': 'Traceable<br>response',
      'card.ambev.system': 'Distributed<br>logistics',
      'card.ambev.context': 'Distributed<br>logistics',
      'card.ambev.scope': 'Operational<br>stockouts',
      'card.ambev.impact': 'National<br>visibility',
      'card.bayer.system': 'Agricultural<br>data',
      'card.bayer.context': 'Agricultural<br>data',
      'card.bayer.scope': 'Technical<br>interpretation',
      'card.bayer.impact': 'Reliable<br>decision',
      'card.bmg.system': 'Business<br>account',
      'card.bmg.context': 'Business<br>account',
      'card.bmg.scope': 'Regulated<br>flows',
      'card.bmg.impact': 'Clear and safe<br>journey',
     'm1.label':     'Understand the context',
     'm1.desc':      'I identify who uses it, who decides, which rules matter and where the workflow breaks.',
     'm2.label':     'Organize the structure',
     'm2.desc':      'I turn dispersed processes into clear journeys, states, permissions and priorities.',
     'm3.label':     'Design the experience',
     'm3.desc':      'I create interfaces that reduce effort, guide action and make the system easier to operate.',
     'm4.label':     'Validate and adjust',
     'm4.desc':      'I test hypotheses, align involved teams and refine the solution before implementation.',
      's5.tag':       'EVIDENCE · SCALE · TRACEABILITY',
      's5.title':     'Observable impact.<br>Traceable operation.',
      's5.desc':      'When a validated number exists, it appears. When the impact is structural, the evidence is described precisely.',
      's5.stat1':     'OBSERVABLE RESULTS IN COMPLEX SYSTEMS',
      's5.stat2':     'OPERATIONS <strong>12+</strong>',
      's5.stat3':     'DATA <strong>+</strong>',
      's5.chip1':     'Critical operations',
      's5.chip2':     'Operational scale',
      's5.chip3':     'Traceability',
      's5.chip4':     'Enterprise systems',
      's5.microphrase': 'Operational evidence, not decorative metrics.',
      's5.microflow': 'Scale → Traceability → Coordination → Impact',
      's5.microcomp': 'Observable results in complex systems.',
      'imp.label_dim': 'DIMENSION',
      'imp.label_ev':  'EVIDENCE',
      'imp1.client':  'Petrobras',
      'imp1.dim':     'Operational automation',
      'imp1.val':     '95% reduction in manual effort',
      'imp1.desc':    'Operational reporting consolidation reorganized for continuous reading in offshore contexts.',
      'imp1.type':    'Critical operation',
      'imp2.client':  'Bayer',
      'imp2.dim':     'Agricultural data',
      'imp2.val':     'Agricultural data traceability',
      'imp2.desc':    'Agricultural information reorganized around the crop as the central unit of analysis, connecting technical data, indicator comparison and decision records inside a structured flow.',
      'imp2.type':    'Agricultural data',
      'imp3.client':  'Ambev',
      'imp3.dim':     'Logistics monitoring',
      'imp3.val':     'Operational stockout visibility',
      'imp3.desc':    'Supply chain structure organized for reading availability, stockouts and logistical coordination. The platform started to reflect the real state of the operation, turning dispersed data into a shared operational view.',
      'imp3.type':    'Supply chain',
      'imp4.client':  'BMG',
      'imp4.dim':     'Regulated environment',
      'imp4.val':     'Simplified regulated flows',
      'imp4.desc':    'Business banking journey structured with validations, states and flows aligned with operational and regulatory requirements. The digital account was designed for small businesses without removing banking security and compliance from the process.',
      'imp4.type':    'Banking / compliance',
     'ab.tag':            'TRAJECTORY · METHOD · RANGE',
     'ab.title':          'Behind<br>the structure.',
     'ab.subtitle':       'Senior Product Designer for B2B platforms, internal systems and complex operations.',
     'ab.p1':             'I’m a Senior Product Designer with 20 years in digital design and 15+ years in UX/Product Design.',
     'ab.p2':             'My work is about organizing workflows, information and decisions in digital products used by operations, business and technology teams.',
     'ab.p3':             'I’ve worked on projects for Petrobras, Bayer, Ambev, Banco do Brasil, Bradesco, Claro, Globo, iFood, BMG and Youse. Different industries, same challenge: turning complexity into clearer, more reliable and easier-to-operate systems.',
     'ab.p4':             'I don’t start from the screen. I start from the problem, the workflow, the rules and the decisions the system needs to support.',
      'ab.photo.alt':      'Henrico Amaral, Senior Product Designer specialized in enterprise systems.',
      'ab.photo.caption': 'Henrico Amaral<br>Senior Product Designer',
     'ab.card1.title':    'Role',
     'ab.card1.items':    '<li>Senior Product Designer</li><li>B2B platforms</li><li>Internal systems</li><li>Complex workflows</li><li>Regulated environments</li>',
     'ab.card2.title':    'What I solve',
     'ab.card2.items':    '<li>Messy workflows</li><li>Scattered data</li><li>Business rules</li><li>Multiple stakeholders</li>',
     'ab.card3.title':    'How I work',
     'ab.card3.items':    '<li>Discovery</li><li>Information architecture</li><li>Flows and states</li><li>Prototyping</li>',
     'ab.card4.title':    'Experience',
     'ab.card4.items':    '<li>Energy</li><li>Banking and insurance</li><li>Telecom</li><li>Agro and logistics</li><li>Digital products at scale</li>',
     'ab.card5.title':    'Tools',
     'ab.card5.items':    '<li>Figma</li><li>FigJam / Miro</li><li>AccessMonitor</li><li>GitHub</li><li>Generative AI</li><li>Antigravity</li>',
     'ab.beyond.title':   'Beyond the interface',
     'ab.beyond.items':   '<li>Father</li><li>Systems observer</li><li>Constant learner</li><li>Applied AI in design</li><li>Methodical repositioning</li>',
      'hero.availability': 'Available now · Full-time · Contractor · Freelance',
     'modal.case':        'Case',
     'ct.tag':            'SÃO PAULO · REMOTE/HYBRID · PT/EN',
     'ct.title':          'Clearer systems.<br>More objective conversations.',
     'ct.sub':            'For senior roles, enterprise projects and technical conversations about product, operations and decision-making.',
     'ct.card1.title':    'For recruiters',
     'ct.card1.text':     'Senior Product Designer for B2B products, internal systems and complex operations.',
     'ct.card2.title':    'For companies',
     'ct.card2.text':     'Diagnosis and design of workflows, internal platforms and highly complex digital products.',
     'ct.card3.title':    'For technical conversations',
     'ct.card3.text':     'Information architecture, prototyping, applied AI and operational clarity.',
     'ct.cv':             'View CV',
     'ct.cases':          'View cases',
     'ft.role':           'Senior Product Designer · Decision Infrastructure',
      'ft.signature':      'Pense simples. Faça melhor.<br>Torne-se inevitável.',
     'ft.bio':            'Senior Product Designer focused on B2B platforms, internal tools and complex workflows.',
     'ft.contact-label':  'Contact',
     'ft.cv':             'Resume',
      'ft.info-label':     'Availability',
      'ft.work-mode':      'Remote / Hybrid',
     'modal.close':       'Close modal',
   }
};

/* ── Global Motion Constants ── */
const MOTION = {
  duration: { fast: 0.42, base: 0.82, slow: 1.05, text: 0.74, hero: 0.9 },
  ease: { organic: 'power3.out', soft: 'power2.out', linear: 'none' },
  stagger: { fast: 0.055, base: 0.065, slow: 0.085 },
  blur: { entry: 2, subtle: 1, hero: 2, text: 2, card: 2 }
};

const LANG_STORAGE_KEY = 'henrico_lang';
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentLang = 'pt';
let motionReduced = reduceMotionQuery.matches;

function setLanguage(lang) {
  const safeLang = lang === 'en' ? 'en' : 'pt';
  currentLang = safeLang;
  document.documentElement.lang = safeLang === 'pt' ? 'pt-BR' : 'en';
  document.documentElement.dataset.lang = safeLang;
  localStorage.setItem(LANG_STORAGE_KEY, safeLang);

  const dict = COPY[safeLang] || COPY.pt;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (typeof dict[key] !== 'string') return;
    const val = dict[key];
    if (val.includes('{em}')) {
      el.innerHTML = val.replace('{em}', '<em class="text-accent-500 font-normal">').replace('{/em}', '</em>');
    } else {
      el.innerHTML = val;
    }
  });
  document.querySelectorAll('[data-t-alt]').forEach(el => {
    const key = el.getAttribute('data-t-alt');
    if (dict[key]) el.setAttribute('alt', dict[key]);
  });
  document.querySelectorAll('[data-t-aria-label]').forEach(el => {
    const key = el.getAttribute('data-t-aria-label');
    if (dict[key]) el.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll('[data-t-title]').forEach(el => {
    const key = el.getAttribute('data-t-title');
    if (dict[key]) el.setAttribute('title', dict[key]);
  });

  document.querySelectorAll('[data-lang-toggle]').forEach(toggle => {
    toggle.dataset.currentLang = safeLang;
    toggle.setAttribute('aria-label', safeLang === 'pt' ? 'Selecionar idioma' : 'Select language');
  });

  document.querySelectorAll('.lang-toggle__option').forEach(btn => {
    const active = btn.dataset.lang === safeLang;
    btn.setAttribute('aria-pressed', String(active));
    btn.classList.toggle('active', active);
  });

  const announcer = document.getElementById('sr-announcer');
  if (announcer) {
    announcer.textContent = safeLang === 'pt' ? 'Idioma alterado para Português' : 'Language changed to English';
  }

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  if (mobileMenuToggle) {
    const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-label', safeLang === 'pt'
      ? (isOpen ? 'Fechar menu' : 'Abrir menu')
      : (isOpen ? 'Close menu' : 'Open menu'));
  }
}

function initLanguageToggle() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  const initial = saved === 'en' || saved === 'pt' ? saved : 'pt';

  document.querySelectorAll('.lang-toggle__option').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  setLanguage(initial);
}

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenu.hidden = isOpen;
    mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    mobileMenuToggle.setAttribute('aria-label', currentLang === 'pt'
      ? (isOpen ? 'Abrir menu' : 'Fechar menu')
      : (isOpen ? 'Open menu' : 'Close menu'));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.hidden = true;
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mobileMenuToggle.setAttribute('aria-label', currentLang === 'pt' ? 'Abrir menu' : 'Open menu');
    });
  });
}

function hasMotionEngine() {
  return Boolean(window.gsap && window.ScrollTrigger);
}

function setMotionFinalState() {
  document.body.classList.remove('motion-ready');
  document.querySelectorAll('.reveal, .reveal-soft, .reveal-blur, .reveal-card').forEach(el => {
    el.classList.add('is-visible');
  });
}

function initHeroMotion() {
  const hero = document.querySelector('#hero');
  if (!hero) return;

  const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (motionReduced || !hasMotionEngine()) {
    setMotionFinalState();
    return;
  }

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => {
      document.body.classList.remove('motion-ready');
    }
  });

  // 1. Header entra com fade curto
  if (document.querySelector('#nav')) {
    tl.fromTo('#nav', { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0);
  }

  // 2. Badge entra
  if (document.querySelector('.availability-badge-v2')) {
    tl.fromTo('.availability-badge-v2',
      { autoAlpha: 0, y: 12, filter: 'blur(2px)' },
      { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.7 },
      1.1
    );
  }

  // 7. Eyebrow entra
  if (document.querySelector('.eyebrow-line') && document.querySelector('.eyebrow-text')) {
    tl.fromTo('.eyebrow-line', { scaleX: 0 }, { scaleX: 1, duration: 0.6 }, 1.2);
    tl.fromTo('.eyebrow-text',
      { autoAlpha: 0, y: 8, filter: 'blur(2px)' },
      { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.6 },
      1.3
    );
  }

  // 8. H1 entra com fade + y leve
  const hl = gsap.utils.toArray('#hero .hl-i');
  if (hl.length) {
    tl.fromTo(hl,
      { autoAlpha: 0, y: 12, filter: 'blur(2px)' },
      { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.1 },
      1.4
    );
  }

  // 9. Sub entra
  if (document.querySelector('#hero .sub')) {
    tl.fromTo('#hero .sub',
      { autoAlpha: 0, y: 10, filter: 'blur(2px)' },
      { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.7 },
      1.6
    );
  }

  // 10. CTA entra
  if (document.querySelector('#hero .cta-wrapper')) {
    tl.fromTo('#hero .cta-wrapper',
      { autoAlpha: 0, y: 10, filter: 'blur(2px)' },
      { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.7 },
      1.8
    );
  }

  // 11. Faixa de clientes entra por último
  if (document.querySelector('.clients-strip')) {
    tl.fromTo('.clients-strip',
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.8 },
      2.2
    );
  }
}

function revealBatch(selector, options = {}) {
  const elements = gsap.utils.toArray(selector);
  if (!elements.length) return;
  elements.forEach(el => el.classList.add(options.className ?? 'reveal'));

  gsap.set(elements, {
    autoAlpha: 0,
    y: options.y ?? 14,
    filter: `blur(${options.blur ?? MOTION.blur.entry}px)`
  });

  ScrollTrigger.batch(elements, {
    start: options.start ?? 'top 82%',
    once: true,
    onEnter: batch => {
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: options.duration ?? MOTION.duration.base,
        stagger: options.stagger ?? MOTION.stagger.base,
        ease: options.ease ?? MOTION.ease.organic,
        overwrite: true,
        onComplete: () => batch.forEach(el => el.classList.add('is-visible'))
      });
    }
  });
}

function initScrollReveals() {
  revealBatch('.section-kicker, .section-header-title, .section-header-subtitle, .section-microstats span', {
    y: 12,
    blur: MOTION.blur.subtle,
    stagger: MOTION.stagger.fast,
    className: 'reveal-text'
  });

  revealBatch('.framework-card, .case-card, .impact-cell, .editorial-reveal', {
    y: 14,
    blur: MOTION.blur.card,
    stagger: MOTION.stagger.base,
    className: 'reveal-card'
  });
}

function initFooterMotion() {
  const items = gsap.utils.toArray('.site-footer__identity, .site-footer__signature, .site-footer__bottom');
  if (!items.length) return;

  items.forEach(el => el.classList.add('reveal-card'));
  gsap.set(items, {
    autoAlpha: 0,
    y: 12,
    filter: `blur(${MOTION.blur.card}px)`
  });

  gsap.to(items, {
    autoAlpha: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: 0.75,
    stagger: 0.06,
    ease: MOTION.ease.organic,
    overwrite: true,
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 82%',
      once: true
    },
    onComplete: () => items.forEach(el => el.classList.add('is-visible'))
  });
}

function initClientMarquee() {
  document.querySelectorAll('.marquee-content[aria-hidden="true"]').forEach(track => {
    track.setAttribute('aria-hidden', 'true');
  });
}

function initMagnetic() {
  if (motionReduced || !hasMotionEngine()) return;

  document.querySelectorAll('.magnetic-wrap').forEach(magnet => {
    magnet.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = magnet.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      gsap.to(magnet, {
        x: x * 0.16,
        y: y * 0.16,
        duration: 0.45,
        ease: MOTION.ease.organic
      });
    });
    magnet.addEventListener('mouseleave', () => {
      gsap.to(magnet, {
        x: 0,
        y: 0,
        duration: 0.55,
        ease: MOTION.ease.organic
      });
    });
  });
}

function initHomeMotion() {
  motionReduced = reduceMotionQuery.matches;

  initClientMarquee();

  if (motionReduced || !hasMotionEngine()) {
    setMotionFinalState();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  document.body.classList.add('motion-ready');
  initHeroMotion();
  initScrollReveals();
  initFooterMotion();
  initMagnetic();
}

/* ── Nav Scroll behavior ── */
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  const currentScroll = window.pageYOffset;
  if (currentScroll > 60) {
    nav.classList.add('shadow-sm', 'nav-scrolled');
  } else {
    nav.classList.remove('shadow-sm', 'nav-scrolled');
  }
  lastScroll = currentScroll;
}, { passive: true });

initLanguageToggle();
initHomeMotion();

/* ── Case Study Modal ── */
let lastFocusedElement = null;

const CASE_DATA = [
  {
    copyKey: 'c1',
    client: 'Petrobras (SALA CAR)',
    tags: ['Offshore', 'Monitoring'],
    desc: 'Centralização de sinais operacionais offshore distribuídos em um ambiente unificado de monitoramento para decisões críticas de gestão de plataformas.',
    metric: '95%',
    metricLabel: 'EVIDÊNCIA QUANTITATIVA'
  },
  {
    copyKey: 'c2',
    client: 'Bayer',
    tags: ['Agri-tech', 'Data Scale'],
    desc: 'Unificação de fluxos de dados agrícolas fragmentados — clima, solo e métricas de produção — em uma arquitetura progressiva de interpretação nacional.',
    metric: 'Dados agrícolas',
    metricLabel: 'EVIDÊNCIA QUALITATIVA'
  },
  {
    copyKey: 'c3',
    client: 'AmBev',
    tags: ['Supply Chain', 'Operations'],
    desc: 'Estruturação da visibilidade de exceções logísticas em uma cadeia de suprimentos distribuída para detecção de anomalias e resposta coordenada.',
    metric: 'Leitura operacional',
    metricLabel: 'EVIDÊNCIA QUALITATIVA'
  },
  {
    copyKey: 'c4',
    client: 'BMG',
    tags: ['Fintech', 'Compliance'],
    desc: 'Design de lógica de permissões complexas e fluxos de estado de transação para uma plataforma bancária corporativa com rastreabilidade completa.',
    metric: 'Fluxos regulados',
    metricLabel: 'EVIDÊNCIA QUALITATIVA'
  }
];

function openCaseModal(index) {
  const caseData = CASE_DATA[index];
  if (!caseData) return;

  const modal = document.getElementById('case-modal');
  lastFocusedElement = document.activeElement;
  const dict = COPY[currentLang] || COPY.pt;
  const copyKey = caseData.copyKey;
  document.getElementById('modal-client').textContent = dict[`${copyKey}.client`] || caseData.client;

  // Set tags
  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = '';
  caseData.tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.className = 'px-2 py-1 rounded border border-base-200 text-[8px] uppercase tracking-widest text-text-tertiary';
    tagEl.textContent = tag;
    tagsContainer.appendChild(tagEl);
  });

  document.getElementById('modal-desc').textContent = dict[`${copyKey}.desc`] || caseData.desc;
  document.getElementById('modal-metric').textContent = dict[`${copyKey}.metric`] || caseData.metric;
  document.getElementById('modal-metric-label').textContent = dict[`${copyKey}.metricLabel`] || caseData.metricLabel;

  // Show modal
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');

  // Focus on close button for accessibility
  setTimeout(() => {
    document.getElementById('modal-close').focus();
  }, 100);
}

function closeCaseModal() {
  const modal = document.getElementById('case-modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

function getModalFocusableElements() {
  const modal = document.getElementById('case-modal');
  return Array.from(modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
    .filter(el => el.offsetParent !== null);
}

// Add click handlers to case cards
document.querySelectorAll('[data-case-index]').forEach((card, index) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    openCaseModal(parseInt(card.dataset.caseIndex));
  });

  card.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    openCaseModal(parseInt(card.dataset.caseIndex));
  });
});

// Close modal handlers
document.getElementById('modal-close').addEventListener('click', closeCaseModal);
document.getElementById('case-modal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    closeCaseModal();
  }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('case-modal');
  const modalOpen = !modal.classList.contains('hidden');
  if (e.key === 'Escape' && modalOpen) {
    closeCaseModal();
  }
  if (e.key === 'Tab' && modalOpen) {
    const focusable = getModalFocusableElements();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});
