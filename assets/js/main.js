/**
 * Portfolio Main Javascript
 * Minimal, fast, and accessible implementation for language switching and mobile navigation.
 */

const translations = {
  "pt-BR": {
    "meta.title": "Henrico Amaral — Senior Product Designer",
    "nav.skip": "Ir para o conteúdo principal",
    "nav.method": "Método",
    "nav.cases": "Casos",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "hero.status": "Disponível agora · CLT · PJ · Freelancer",
    "hero.specialties": "Product Design · Enterprise · Operações complexas",
    "hero.title": "Sistemas claros para decisões difíceis.",
    "hero.description": "Ajudo empresas a transformar fluxos confusos, dados dispersos e regras complexas em produtos digitais fáceis de operar.",
    "hero.cta": "Vamos conversar",
    "method.badge": "Abordagem",
    "method.title": "Método de Trabalho",
    "method.intro": "Design focado em simplificação de processos e infraestrutura de clareza visual.",
    "method.step1.title": "Mapeamento de Complexidade",
    "method.step1.desc": "Identificação de gargalos operacionais e regras de negócios intrincadas antes de propor qualquer interface.",
    "method.step2.title": "Infraestrutura Visual",
    "method.step2.desc": "Criação de hierarquias de informação fortes que apoiam a tomada de decisões corporativas eficientes.",
    "method.step3.title": "Iteração e Validação",
    "method.step3.desc": "Refinamento contínuo com usuários especialistas para reduzir tempo de aprendizado e mitigar erros operacionais.",
    "cases.badge": "Portfólio",
    "cases.title": "Casos de Sucesso",
    "cases.case1.title": "Painel de Operações Logísticas",
    "cases.case1.desc": "Redução de sobrecarga cognitiva e tempo de resposta operacional em central de distribuição crítica.",
    "cases.case2.title": "Terminal de Auditoria Financeira",
    "cases.case2.desc": "Simplificação de fluxos de conciliação bancária complexos para equipes de conformidade de alta performance.",
    "impact.badge": "Resultados",
    "impact.title": "Impacto em Números",
    "impact.stat1": "Tempo de integração de novos operadores",
    "impact.stat2": "Precisão na execução de tarefas críticas",
    "impact.stat3": "Eficiência na tomada de decisão operacional",
    "about.badge": "Sobre mim",
    "about.title": "Focado em simplificar o complexo",
    "about.role": "Senior Product Designer",
    "about.p1": "Com ampla experiência em ambientes enterprise, atuo na intersecção entre processos operacionais complexos e design focado no usuário.",
    "about.p2": "Meu foco principal é projetar sistemas de alta eficiência que apoiam decisões difíceis e reduzem erros de execução de forma estruturada.",
    "contact.badge": "Contato",
    "contact.title": "Vamos construir algo sólido juntos",
    "contact.desc": "Disponível para projetos enterprise sob demanda e consultorias operacionais.",
    "contact.cta": "Enviar e-mail",
    "footer.role": "Senior Product Designer · Decision Infrastructure",
    "footer.quote1": "Pense simples. Faça melhor.",
    "footer.quote2": "Torne-se inevitável.",
    "footer.copy": "Henrico Amaral · Product Designer · 2026",
    "footer.top": "↑ Topo"
  },
  "en": {
    "meta.title": "Henrico Amaral — Senior Product Designer",
    "nav.skip": "Skip to main content",
    "nav.method": "Method",
    "nav.cases": "Cases",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.status": "Available now · Full-time · Contractor · Freelance",
    "hero.specialties": "Product Design · Enterprise · Complex Operations",
    "hero.title": "Clear systems for hard decisions.",
    "hero.description": "I help companies turn messy workflows, scattered data and complex rules into digital products teams can actually operate.",
    "hero.cta": "Let’s talk",
    "method.badge": "Approach",
    "method.title": "Working Method",
    "method.intro": "Design focused on process simplification and visual clarity infrastructure.",
    "method.step1.title": "Complexity Mapping",
    "method.step1.desc": "Identification of operational bottlenecks and intricate business rules before proposing any interface.",
    "method.step2.title": "Visual Infrastructure",
    "method.step2.desc": "Creation of strong information hierarchies that support efficient corporate decision-making.",
    "method.step3.title": "Iteration and Validation",
    "method.step3.desc": "Continuous refinement with expert users to reduce learning curves and mitigate operational errors.",
    "cases.badge": "Portfolio",
    "cases.title": "Success Cases",
    "cases.case1.title": "Logistics Operations Dashboard",
    "cases.case1.desc": "Reduction of cognitive overload and operational response times in critical distribution hubs.",
    "cases.case2.title": "Financial Audit Terminal",
    "cases.case2.desc": "Simplification of complex bank reconciliation workflows for high-performance compliance teams.",
    "impact.badge": "Results",
    "impact.title": "Impact in Numbers",
    "impact.stat1": "Onboarding time for new operators",
    "impact.stat2": "Accuracy in executing critical tasks",
    "impact.stat3": "Efficiency in operational decision-making",
    "about.badge": "About me",
    "about.title": "Focused on simplifying the complex",
    "about.role": "Senior Product Designer",
    "about.p1": "With extensive experience in enterprise environments, I work at the intersection of complex operational processes and user-focused design.",
    "about.p2": "My main focus is designing highly efficient systems that support difficult decisions and systematically reduce execution errors.",
    "contact.badge": "Contact",
    "contact.title": "Let's build something solid together",
    "contact.desc": "Available for custom enterprise projects and operational consulting.",
    "contact.cta": "Send email",
    "footer.role": "Senior Product Designer · Decision Infrastructure",
    "footer.quote1": "Pense simples. Faça melhor.",
    "footer.quote2": "Torne-se inevitável.",
    "footer.copy": "Henrico Amaral · Product Designer · 2026",
    "footer.top": "↑ Top"
  }
};

const metaDescriptions = {
  "pt-BR": "Sistemas claros para decisões difíceis. Senior Product Designer especializado em operações complexas e enterprise.",
  "en": "Clear systems for hard decisions. Senior Product Designer specialized in complex operations and enterprise."
};

/**
 * Set application language
 * @param {string} lang - 'pt-BR' or 'en'
 */
function setLanguage(lang) {
  if (!translations[lang]) return;

  // 1. Update HTML tag attribute
  document.documentElement.lang = lang;

  // 2. Loop elements and update contents
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((elem) => {
    const key = elem.getAttribute("data-i18n");
    if (translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });

  // 3. Update title
  document.title = translations[lang]["meta.title"];

  // 4. Update SEO meta description
  const metaDesc = document.querySelector('meta[data-i18n-meta="description"]');
  if (metaDesc && metaDescriptions[lang]) {
    metaDesc.setAttribute("content", metaDescriptions[lang]);
  }

  // 5. Update language toggle button visual text and state
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    const langTextElem = langToggleBtn.querySelector(".lang-text");
    // Show the label of the target language
    const nextLang = lang === "pt-BR" ? "en" : "pt-BR";
    if (langTextElem) {
      langTextElem.textContent = nextLang.split("-")[0].toUpperCase();
    }
    // Update ARIA attributes
    langToggleBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    langToggleBtn.setAttribute(
      "aria-label",
      lang === "pt-BR" ? "Mudar para inglês" : "Switch to Portuguese"
    );
  }

  // 6. Persist selection
  localStorage.setItem("portfolio-lang", lang);
}

/**
 * Initialize language toggle controls
 */
function initLanguageToggle() {
  const langToggleBtn = document.getElementById("lang-toggle");
  if (!langToggleBtn) return;

  // Set initial language from localStorage or document default
  const savedLang = localStorage.getItem("portfolio-lang");
  const defaultLang = savedLang || (document.documentElement.lang === "en" ? "en" : "pt-BR");
  
  setLanguage(defaultLang);

  langToggleBtn.addEventListener("click", () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === "pt-BR" ? "en" : "pt-BR";
    setLanguage(newLang);
  });
}

/**
 * Initialize mobile navigation menu
 */
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const siteHeader = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!mobileMenuBtn || !siteHeader) return;

  mobileMenuBtn.addEventListener("click", () => {
    const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
    mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
    siteHeader.classList.toggle("nav-open");
    
    // Toggle body scroll locking when menu is open
    document.body.classList.toggle("menu-lock-scroll");
  });

  // Close menu when clicking nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      siteHeader.classList.remove("nav-open");
      document.body.classList.remove("menu-lock-scroll");
    });
  });
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initLanguageToggle();
  initMobileMenu();
});
