/* ── i18n Dictionary ── */
const COPY = {
  pt: {
    'nav.method':   'Método',
    'nav.cases':    'Casos',
    'nav.impact':   'Impacto',
    'nav.about':    'Sobre',
    'eyebrow':      'SISTEMAS OPERACIONAIS · DECISÃO · ESCALA',
    'h1.l1':        'Arquitetura de decisão',
    'h1.l2':        'para sistemas críticos.',
      'sub':          'Estruturo plataformas, fluxos e sistemas para operações onde clareza sustenta coordenação, escala e tomada de decisão.',
    'cta.primary':  'Ver caso SALA CAR',
    'cta.secondary':'Método',
    'signature':    'Pense simples. Faça melhor. Torne-se inevitável.',
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
    's4.title':     'Engenharia de interação<br>para sistemas complexos.',
    's4.statement': 'Antes da interface, organizo contexto, relações e regras para transformar complexidade operacional em superfícies de decisão mais claras.',
    's4.stat1':     'MÉTODO APLICADO A PRODUTOS COMPLEXOS',
    's4.stat2':     'CAMADAS <strong>4</strong>',
    's4.stat3':     'DECISÕES <strong>+</strong>',
    's4.chip1':     'Systems Thinking',
    's4.chip2':     'Information Architecture',
    's4.chip3':     'Decision Engineering',
    's4.microphrase': 'Estruturas invisíveis, decisões mais claras.',
    's4.microflow': 'Contexto → Estrutura → Interação → Decisão',
    's4.microcomp': 'Método aplicado a produtos complexos.',
    's5.desc':      'Evidências quantitativas quando há lastro, evidências qualitativas quando o impacto é estrutural.',
    'skip':         'Ir para o conteúdo',
    'nav.contact':  'Contato',
    'worked-with':  'Clientes',
    'c1.i':         'Coordenação de Riscos Operacionais',
    's3.header.kicker': 'SISTEMAS REAIS · IMPACTO OPERACIONAL',
    's3.header.title': 'Sistemas reais.<br>Impacto operacional.',
    's3.header.meta': 'ENERGIA · LOGÍSTICA · AGRO · FINANÇAS',
    's3.header.desc': 'Projetos em energia, logística, agronegócio e finanças onde design reduziu ruído, reorganizou fluxos e tornou decisões críticas mais rastreáveis.',
    'case.label.system': 'Sistema',
    'case.label.context': 'Contexto',
    'case.label.scope': 'Escopo',
    'case.label.impact': 'Impacto',
    'case.aria.petro': 'Abrir caso Petrobras',
    'case.aria.ambev': 'Abrir caso Ambev',
    'case.aria.bayer': 'Abrir caso Bayer',
    'case.aria.bmg': 'Abrir caso BMG',
    'card.petro.system': 'Monitoramento<br>ambiental offshore',
    'card.petro.context': 'Operação<br>offshore',
    'card.petro.scope': 'Resposta<br>ambiental',
    'card.petro.impact': 'Coordenação de<br>riscos operacionais',
    'card.ambev.system': 'Gestão logística<br>distribuída',
    'card.ambev.context': 'Escala<br>nacional',
    'card.ambev.scope': 'Supply<br>chain',
    'card.ambev.impact': 'Visibilidade de<br>rupturas operacionais',
    'card.bayer.system': 'Inteligência<br>agronômica',
    'card.bayer.context': 'Análise<br>técnica',
    'card.bayer.scope': 'Dados<br>agrícolas',
    'card.bayer.impact': 'Rastreabilidade de<br>dados agrícolas',
    'card.bmg.system': 'Plataforma financeira<br>empresarial',
    'card.bmg.context': 'Ambiente<br>regulado',
    'card.bmg.scope': 'Conta<br>PJ',
    'card.bmg.impact': 'Fluxos regulados<br>simplificados',
    'm1.label':     'Visibilidade Operacional',
    'm1.desc':      'Mapeio sinais, fontes de dados, responsáveis e pontos críticos antes de definir qualquer superfície.',
    'm2.label':     'Estrutura de Relações',
    'm2.desc':      'Desenho relações entre áreas, permissões, estados e exceções para reduzir inconsistências operacionais.',
    'm3.label':     'Clareza Cognitiva',
    'm3.desc':      'Priorizo informação, hierarquia e contexto para diminuir esforço cognitivo em fluxos densos.',
    'm4.label':     'Superfícies de Decisão',
    'm4.desc':      'Transformo regras, alertas e decisões em interfaces que ajudam equipes a agir com segurança e clareza.',
    's5.tag':       'EVIDÊNCIA · ESCALA · RASTREABILIDADE',
    's5.title':     'Impacto observável.<br>Operação rastreável.',
    's5.desc':      'Evidências quantitativas quando há lastro, evidências qualitativas quando o impacto é estrutural.',
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
     'ab.subtitle':       '20 anos entre design, tecnologia e produto; 15+ anos em UX/Product Design para ambientes complexos.',
     'ab.p1':             'Não comecei no design desenhando telas. Comecei organizando informação, navegação, fluxos e decisões.',
     'ab.p2':             'Ao longo de 20 anos, trabalhei em produtos digitais complexos para empresas como Petrobras, Bayer, Ambev, Banco do Brasil, Bradesco, Claro, Globo, iFood e BMG.',
     'ab.p3':             'Meu trabalho está no ponto onde produto, operação, tecnologia e decisão se encontram. Antes de pensar em componentes, eu tento entender o sistema: quem decide, com qual informação, sob qual pressão e com quais consequências.',
     'ab.p4':             'Hoje, combino design, IA e pensamento sistêmico para transformar complexidade em sistemas mais claros, operáveis e sustentáveis.',
      'ab.photo.alt':      'Henrico Amaral, Senior Product Designer especializado em sistemas enterprise.',
      'ab.photo.caption': 'Henrico Amaral<br>Product Designer Sênior · Infraestrutura de Decisão<br>São Paulo · Sistemas Enterprise · Workflow assistido por IA',
     'ab.card1.title':    'Território',
     'ab.card1.items':    '<li>Enterprise</li><li>B2B</li><li>Operações críticas</li><li>Sistemas regulados</li>',
     'ab.card2.title':    'Prática',
     'ab.card2.items':    '<li>Discovery</li><li>Arquitetura da informação</li><li>Fluxos complexos</li><li>Design systems</li>',
     'ab.card3.title':    'Setores',
     'ab.card3.items':    '<li>Oil & Gas</li><li>Agronegócio</li><li>Logística</li><li>Finanças</li><li>Seguros</li>',
     'ab.card4.title':    'Ferramentas',
     'ab.card4.items':    '<li>Figma</li><li>Power BI</li><li>AccessMonitor</li><li>GitHub</li><li>IA generativa</li>',
     'ab.card5.title':    'IA aplicada',
     'ab.card5.items':    '<li>Agentes</li><li>Prompts</li><li>Workflows</li><li>Prototipação assistida</li>',
     'ab.beyond.title':   'Além da interface',
     'ab.beyond.items':   '<li>Pai</li><li>Observador de sistemas</li><li>Aprendiz constante</li><li>IA aplicada ao design</li><li>Reposicionamento com método</li>',
     'hero.availability': 'Status Operacional: Sistema pronto',
     'modal.case':        'Caso',
     'ct.tag':            'SÃO PAULO · REMOTO/HÍBRIDO · PT/EN',
     'ct.title':          'Sistemas mais claros.<br>Conversas mais objetivas.',
     'ct.sub':            'Para recrutadores, empresas e conversas técnicas sobre produtos enterprise, plataformas internas e ambientes regulados.',
     'ct.card1.title':    'Para recrutadores',
     'ct.card1.text':     'Senior, Lead ou Staff Product Designer para sistemas enterprise.',
     'ct.card2.title':    'Para empresas',
     'ct.card2.text':     'Diagnóstico de fluxos, arquitetura de informação e plataformas internas.',
     'ct.card3.title':    'Para conversas técnicas',
     'ct.card3.text':     'Design systems, IA aplicada e infraestrutura de decisão.',
     'ct.cv':             'Ver CV',
     'ct.cases':          'Ver cases',
     'ct.meta':           'São Paulo · Remoto / Híbrido · Português / Inglês profissional',
     'ft.role':           'Designer de Produto · 2026',
     'ft.signature':      'Pense simples. Faça melhor. Torne-se inevitável.',
     'ft.bio':            'Infraestrutura de decisão para sistemas críticos, plataformas enterprise e operações complexas.',
     'ft.contact-label':  'Contato',
     'ft.cv':             'Currículo',
     'ft.info-label':     'Informação',
     'ft.work-mode':      'Remoto / Híbrido',
     'modal.close':       'Fechar modal',
   },
   en: {
     'nav.method':   'Method',
     'nav.cases':    'Cases',
     'nav.impact':   'Impact',
     'nav.about':    'About',
     'eyebrow':      'OPERATIONAL SYSTEMS · DECISION · SCALE',
     'h1.l1':        'Decision architecture',
     'h1.l2':        'for critical systems.',
      'sub':          'I structure platforms, flows and systems for operations where clarity supports coordination, scale and decision-making.',
     'cta.primary':  'View SALA CAR case',
     'cta.secondary':'Method',
     'signature':    'Think simple. Make it better. Become inevitable.',
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
      's4.title':     'Interaction engineering<br>for complex systems.',
      's4.statement': 'Before the interface, I organize context, relationships and rules to turn operational complexity into clearer decision surfaces.',
      's4.stat1':     'METHOD APPLIED TO COMPLEX PRODUCTS',
      's4.stat2':     'LAYERS <strong>4</strong>',
      's4.stat3':     'DECISIONS <strong>+</strong>',
      's4.chip1':     'Systems Thinking',
      's4.chip2':     'Information Architecture',
      's4.chip3':     'Decision Engineering',
      's4.microphrase': 'Invisible structures, clearer decisions.',
      's4.microflow': 'Context → Structure → Interaction → Decision',
      's4.microcomp': 'Method applied to complex products.',
      's5.desc':      'Quantitative evidence where documented, qualitative evidence where the impact is structural.',
      'skip':         'Skip to content',
      'nav.contact':  'Contact',
      'worked-with':  'Clients',
      'c1.i':         'Operational Risk Coordination',
      's3.header.kicker': 'REAL SYSTEMS · OPERATIONAL IMPACT',
      's3.header.title': 'Real systems.<br>Operational impact.',
      's3.header.meta': 'ENERGY · LOGISTICS · AGRO · FINANCE',
      's3.header.desc': 'Projects in energy, logistics, agribusiness and finance where design reduced noise, reorganized flows and made critical decisions more traceable.',
      'case.label.system': 'System',
      'case.label.context': 'Context',
      'case.label.scope': 'Scope',
      'case.label.impact': 'Impact',
      'case.aria.petro': 'Open Petrobras case',
      'case.aria.ambev': 'Open Ambev case',
      'case.aria.bayer': 'Open Bayer case',
      'case.aria.bmg': 'Open BMG case',
      'card.petro.system': 'Offshore environmental<br>monitoring',
      'card.petro.context': 'Offshore<br>operation',
      'card.petro.scope': 'Environmental<br>response',
      'card.petro.impact': 'Operational risk<br>coordination',
      'card.ambev.system': 'Distributed logistics<br>management',
      'card.ambev.context': 'National<br>scale',
      'card.ambev.scope': 'Supply<br>chain',
      'card.ambev.impact': 'Operational stockout<br>visibility',
      'card.bayer.system': 'Agronomic<br>intelligence',
      'card.bayer.context': 'Technical<br>analysis',
      'card.bayer.scope': 'Agricultural<br>data',
      'card.bayer.impact': 'Agricultural data<br>traceability',
      'card.bmg.system': 'Business financial<br>platform',
      'card.bmg.context': 'Regulated<br>environment',
      'card.bmg.scope': 'Business<br>account',
      'card.bmg.impact': 'Simplified regulated<br>flows',
     'm1.label':     'Operational Visibility',
     'm1.desc':      'I map signals, data sources, owners and critical points before defining any surface.',
     'm2.label':     'Relationship Structure',
     'm2.desc':      'I design relationships between areas, permissions, states and exceptions to reduce operational inconsistencies.',
     'm3.label':     'Cognitive Clarity',
     'm3.desc':      'I prioritize information, hierarchy and context to reduce cognitive effort in dense flows.',
     'm4.label':     'Decision Surfaces',
     'm4.desc':      'I turn rules, alerts and decisions into interfaces that help teams act with safety and clarity.',
      's5.tag':       'EVIDENCE · SCALE · TRACEABILITY',
      's5.title':     'Observable impact.<br>Traceable operation.',
      's5.desc':      'Quantitative evidence where documented, qualitative evidence where the impact is structural.',
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
     'ab.subtitle':       '20 years across design, technology and product; 15+ years in UX/Product Design for complex environments.',
     'ab.p1':             'I did not start in design by drawing screens. I started by organizing information, navigation, flows and decisions.',
     'ab.p2':             'Over 20 years, I have worked on complex digital products for companies such as Petrobras, Bayer, Ambev, Banco do Brasil, Bradesco, Claro, Globo, iFood and BMG.',
     'ab.p3':             'My work sits where product, operations, technology and decision-making meet. Before thinking about components, I try to understand the system: who decides, with what information, under what pressure and with what consequences.',
     'ab.p4':             'Today, I combine design, AI and systems thinking to turn complexity into clearer, more operable and sustainable systems.',
      'ab.photo.alt':      'Henrico Amaral, Senior Product Designer specialized in enterprise systems.',
      'ab.photo.caption': 'Henrico Amaral<br>Senior Product Designer · Decision Infrastructure<br>São Paulo · Enterprise Systems · AI-assisted workflow',
     'ab.card1.title':    'Territory',
     'ab.card1.items':    '<li>Enterprise</li><li>B2B</li><li>Critical operations</li><li>Regulated systems</li>',
     'ab.card2.title':    'Practice',
     'ab.card2.items':    '<li>Discovery</li><li>Information architecture</li><li>Complex flows</li><li>Design systems</li>',
     'ab.card3.title':    'Sectors',
     'ab.card3.items':    '<li>Oil & Gas</li><li>Agribusiness</li><li>Logistics</li><li>Finance</li><li>Insurance</li>',
     'ab.card4.title':    'Tools',
     'ab.card4.items':    '<li>Figma</li><li>Power BI</li><li>AccessMonitor</li><li>GitHub</li><li>Generative AI</li>',
     'ab.card5.title':    'Applied AI',
     'ab.card5.items':    '<li>Agents</li><li>Prompts</li><li>Workflows</li><li>Assisted prototyping</li>',
     'ab.beyond.title':   'Beyond the interface',
     'ab.beyond.items':   '<li>Father</li><li>Systems observer</li><li>Constant learner</li><li>AI applied to design</li><li>Repositioning with method</li>',
     'hero.availability': 'Operational Status: System Ready',
     'modal.case':        'Case',
     'ct.tag':            'SÃO PAULO · REMOTE/HYBRID · PT/EN',
     'ct.title':          'Clearer systems.<br>More objective conversations.',
     'ct.sub':            'For recruiters, companies and technical conversations about enterprise products, internal platforms and regulated environments.',
     'ct.card1.title':    'For recruiters',
     'ct.card1.text':     'Senior, Lead or Staff Product Designer for enterprise systems.',
     'ct.card2.title':    'For companies',
     'ct.card2.text':     'Flow diagnosis, information architecture and internal platforms.',
     'ct.card3.title':    'For technical conversations',
     'ct.card3.text':     'Design systems, applied AI and decision infrastructure.',
     'ct.cv':             'View CV',
     'ct.cases':          'View cases',
     'ct.meta':           'São Paulo · Remote / Hybrid · Portuguese / Professional English',
     'ft.role':           'Product Designer · 2026',
     'ft.signature':      'Think simple. Make better. Become inevitable.',
     'ft.bio':            'Decision infrastructure for critical systems, enterprise platforms and complex operations.',
     'ft.contact-label':  'Contact',
     'ft.cv':             'Resume',
     'ft.info-label':     'Info',
     'ft.work-mode':      'Remote / Hybrid',
     'modal.close':       'Close modal',
   }
};

/* ── Global Motion Constants ── */
const MOTION = {
  duration: { fast: 0.55, base: 0.7, slow: 0.9, text: 0.6, hero: 0.8 },
  ease: { standard: 'power2.out', heavy: 'power2.out', soft: 'sine.out', precise: 'power2.out', subtle: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  stagger: { fast: 0.04, base: 0.05, slow: 0.08 },
  blur: { entry: 3, subtle: 2, hero: 4, text: 3, word: 4 }
};

let currentLang = 'pt';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  const dict = COPY[lang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (!dict[key]) return;
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

  document.querySelectorAll('.lang-btn').forEach(b => {
    const active = b.dataset.lang === lang;
    if(active) {
      b.classList.add('active', 'text-accent-500');
      b.classList.remove('text-text-tertiary');
    } else {
      b.classList.remove('active', 'text-accent-500');
      b.classList.add('text-text-tertiary');
    }
    b.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  const announcer = document.getElementById('sr-announcer');
  if (announcer) {
    announcer.textContent = lang === 'pt' ? 'Idioma alterado para Português' : 'Language changed to English';
  }

  // Re-split hero title words after language change
  splitHeroTitle();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ── Word-level split for hero title (myna-hero style) ── */
function splitHeroTitle() {
  const motionReducedNow = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.hl-i').forEach(el => {
    const text = el.textContent.trim();
    const words = text.split(/\s+/);
    if (words.length <= 1 || motionReducedNow) return;
    el.innerHTML = '';
    el.style.whiteSpace = 'normal';
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.className = 'hero-word';
      span.textContent = word;
      span.style.display = 'inline-block';
      span.style.position = 'relative';
      if (i < words.length - 1) {
        span.style.marginRight = '0.25em';
      }
      el.appendChild(span);
    });
  });
}

/* ── GSAP & ScrollTrigger Animations ── */
gsap.registerPlugin(ScrollTrigger);
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Split hero title before animation starts
splitHeroTitle();

/* ---- Hero: Subtle editorial entrance ---- */
const tl = gsap.timeline({ defaults: { ease: MOTION.ease.subtle, duration: motionReduced ? 0 : MOTION.duration.hero } });

if (motionReduced) {
  gsap.set([
    '.availability-badge-v2',
    '.eyebrow-line',
    '.eyebrow-text',
    '.hero-word',
    '.hl-i',
    '.sub',
    '.cta-wrapper',
    '.author-signature--hero',
    '.clients-strip',
    '.section-kicker',
    '.section-header-title',
    '.section-header-divider',
    '.section-header-rule',
    '.section-header-subtitle',
    '.framework-card',
    '.case-card',
    '.impact-cell',
    '.editorial-reveal'
  ], { opacity: 1, y: 0, scale: 1, scaleX: 1, scaleY: 1, filter: 'blur(0px)' });
} else {
  tl.from('.availability-badge-v2', { opacity: 0, y: 6, filter: `blur(${MOTION.blur.subtle}px)`, duration: 0.45, immediateRender: false }, 0.1)
    .from('.eyebrow-line', { scaleX: 0, duration: 0.45, ease: 'power2.inOut', transformOrigin: 'left', immediateRender: false }, 0.2)
    .from('.eyebrow-text', { opacity: 0, y: 4, filter: `blur(${MOTION.blur.subtle}px)`, duration: 0.35, immediateRender: false }, 0.3)
    .from('.hero-word', {
      y: 14,
      opacity: 0,
      filter: `blur(${MOTION.blur.word}px)`,
      duration: 0.5,
      stagger: 0.04,
      ease: MOTION.ease.subtle,
      immediateRender: false
    }, 0.45)
    .from('.sub', { opacity: 0, y: 10, filter: `blur(${MOTION.blur.text}px)`, duration: 0.5, ease: MOTION.ease.subtle, immediateRender: false }, 0.85)
    .from('.cta-wrapper', { opacity: 0, y: 8, filter: `blur(${MOTION.blur.subtle}px)`, duration: 0.45, ease: MOTION.ease.subtle, immediateRender: false }, 1.1)
    .from('.author-signature--hero', { opacity: 0, y: 6, filter: `blur(${MOTION.blur.subtle}px)`, duration: 0.4, ease: MOTION.ease.subtle, immediateRender: false }, 1.25)
    .from('.clients-strip', { opacity: 0, y: 4, duration: 0.4, ease: MOTION.ease.subtle, immediateRender: false }, 1.4);
}

function reveal(selector, vars = {}) {
  gsap.utils.toArray(selector).forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        end: 'top 45%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 18,
      filter: `blur(${MOTION.blur.entry}px)`,
      duration: MOTION.duration.base,
      ease: MOTION.ease.standard,
      ...vars
    });
  });
}

if (!motionReduced) {
  function revealSectionSystem(sectionSelector, cardsSelector) {
    const tlSection = gsap.timeline({
      scrollTrigger: {
        trigger: sectionSelector,
        start: 'top 86%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
      }
    });

    const addFrom = (selector, vars, position) => {
      if (document.querySelector(selector)) {
        tlSection.from(selector, vars, position);
      }
    };

    addFrom(`${sectionSelector} .section-kicker`, { opacity: 0, y: 4, filter: `blur(${MOTION.blur.subtle}px)`, duration: 0.35, ease: MOTION.ease.subtle, immediateRender: false }, 0);
    addFrom(`${sectionSelector} .section-header-title`, { opacity: 0, y: 10, filter: `blur(${MOTION.blur.entry}px)`, duration: 0.5, ease: MOTION.ease.subtle, immediateRender: false }, 0.05);
    addFrom(`${sectionSelector} .section-header-divider`, { opacity: 0, scaleY: 0, duration: 0.4, ease: 'power2.inOut', transformOrigin: 'top', immediateRender: false }, 0.1);
    addFrom(`${sectionSelector} .section-header-subtitle`, { opacity: 0, y: 6, filter: `blur(${MOTION.blur.subtle}px)`, duration: 0.4, ease: MOTION.ease.subtle, immediateRender: false }, 0.15);
    addFrom(`${sectionSelector} .section-header-rule`, { opacity: 0, scaleX: 0, duration: 0.4, ease: 'power2.inOut', transformOrigin: 'left', immediateRender: false }, 0.2);
    addFrom(`${sectionSelector} .section-microstats span`, { opacity: 0, y: 4, filter: `blur(${MOTION.blur.subtle}px)`, duration: 0.35, stagger: 0.03, ease: MOTION.ease.subtle, immediateRender: false }, 0.22);

    if (cardsSelector && document.querySelector(`${sectionSelector} ${cardsSelector}`)) {
      tlSection.fromTo(
        `${sectionSelector} ${cardsSelector}`,
        { opacity: 0, y: 12, filter: `blur(${MOTION.blur.entry}px)` },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, stagger: 0.05, ease: MOTION.ease.subtle, immediateRender: false },
        0.3
      );
    }
  }

  revealSectionSystem('#process', '.framework-card');
  revealSectionSystem('#cases');
  revealSectionSystem('#impact', '.impact-cell');
  revealSectionSystem('#about', '.editorial-reveal');
  revealSectionSystem('#contact', '.editorial-reveal');
}

  // Parallax elements
  gsap.utils.toArray('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
    gsap.to(el, {
      y: () => -(ScrollTrigger.maxScroll(window) * speed),
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || 'body',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  });

// Parallax on Case Images
  gsap.utils.toArray('.case-card').forEach(card => {
    const img = card.querySelector('img');
    if (img) {
      gsap.fromTo(img,
        { yPercent: -2, scale: 1.03 },
        {
        yPercent: 3,
        scale: 1.07,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        ease: 'none',
        immediateRender: false
      });
    }
  });

  if (!motionReduced) {

    /* ── Scroll-Linked Hero Blur ── */
    const hero = document.querySelector('#hero');
    if (hero) {
      gsap.to('#hero .sub, #hero .cta-wrapper, #hero .availability-badge-v2', {
        opacity: 0.3,
        y: -15,
        filter: 'blur(10px)',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          immediateRender: false
        }
      });
    }

    /* Section dividers removed — no animation needed */

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

/* ── Magnetic Effect Implementation ── */
function initMagnetic() {
  if (motionReduced) return;
  const magnets = document.querySelectorAll('.magnetic-wrap');
  magnets.forEach(magnet => {
    magnet.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = magnet.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      gsap.to(magnet, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
    magnet.addEventListener('mouseleave', () => {
      gsap.to(magnet, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
}
initMagnetic();

// Initial lang apply
setLang('pt');

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
