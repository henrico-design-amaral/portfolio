# CHANGELOG — Portfolio

## 2026-05-15 — Renomeação Local de Pasta

Tipo: system / organization
Arquivos alterados:
- !PROJETOS/GEMINI.md
- !PROJETOS/ia-memory/06-project-registry.md
- Portfolio/GEMINI.md
- Portfolio/ai-memory/*.md

Resumo: Pasta local do projeto renomeada de `Portfolio_v2` para `Portfolio`.
Motivo: Simplificação da nomenclatura local mantendo consistência com o repositório remoto e URL de deploy.
Impacto: Todas as referências internas foram atualizadas para apontar para `Portfolio`.
Status: Concluído.

---

## 2026-05-15 — Inspeção Técnica e Sincronização de Memória

Tipo: system / audit / documentation
Arquivos alterados:
- ai-memory/03-design-system.md
- ai-memory/05-technical-decisions.md
- ai-memory/06-visual-decisions.md
- ai-memory/07-open-issues.md
- ai-memory/08-changelog.md

Resumo: Realizada inspeção técnica profunda do codebase real (Vanilla HTML/JS, GSAP, Tailwind) e sincronização dos arquivos de memória.
Motivo: Sincronizar a documentação teórica com a realidade técnica do projeto antes de iniciar novas evoluções visuais.
Impacto: Memória técnica, visual e design system agora refletem exatamente o que está no código. Identificados riscos de manutenção no monolito `index.html`.
Riscos: Alta dependência de CDNs identificada.
Status: Concluído.

---

## 2026-05-15 — Criação da memória persistente do projeto

Tipo:
system / memory / documentation

Arquivos alterados:
- GEMINI.md
- ai-memory/README.md
- ai-memory/00-global-profile.md
- ai-memory/01-project-context.md
- ai-memory/02-product-positioning.md
- ai-memory/03-design-system.md
- ai-memory/04-content-style.md
- ai-memory/05-technical-decisions.md
- ai-memory/06-visual-decisions.md
- ai-memory/07-open-issues.md
- ai-memory/08-changelog.md
- ai-memory/09-do-not-repeat.md

Resumo:
Criação da camada de memória persistente específica do Portfolio.

Motivo:
Evitar perda de contexto, retrabalho, decisões contraditórias, mistura com outros projetos e inconsistência visual ou textual.

Impacto:
O projeto passa a ter uma fonte de verdade local para orientar o Antigravity e qualquer agente durante a evolução do portfólio.

Riscos:
A memória precisa ser mantida atualizada. Se não for atualizada após decisões relevantes, perde valor operacional.

Status:
Criado.

## 2026-05-15 — Limpeza de bibliotecas de agentes fora do escopo

Tipo:
system / repository hygiene / memory

Arquivos ou pastas afetadas:
- _agents/
- huashu-design/
- ui-ux-pro-max-skill/
- .gitignore
- ai-memory/05-technical-decisions.md
- ai-memory/09-do-not-repeat.md

Resumo:
Remoção de bibliotecas de agentes e skills de dentro do repositório Portfolio.

Motivo:
Separar o produto publicado das ferramentas operacionais usadas para criação, evitando ruído no Git e confusão de escopo para agentes.

Status:
Concluído. Repositório Portfolio limpo e materiais migrados para Henrico-Agent-OS.

---

## 2026-05-15 — Reorganização de Referências de Cases

Tipo: system / security / hygiene
Arquivos alterados:
- .gitignore
- ai-memory/05-technical-decisions.md
- ai-memory/08-changelog.md
- ai-memory/09-do-not-repeat.md
- docs/case-references-index.md
Pastas renomeadas:
- _archive/ -> case-references/

Resumo: Renomeação da pasta de arquivos brutos para `case-references/` e reforço das regras de privacidade e segurança de dados de clientes.
Motivo: Evitar exposição acidental de materiais sensíveis e organizar referências de apoio.
Status: Concluído.

---

## 2026-05-15 — Auditoria e Sanitização da Seção Impacto

Tipo: audit / SEO / accessibility / editorial
Arquivos alterados:
- index.html
- assets/js/site.js
- ai-memory/05-technical-decisions.md

Resumo: Auditoria de credibilidade e correção técnica das métricas de impacto. 
Ações:
- Substituídos placeholders "0" por valores reais indexáveis no HTML.
- Refinamento editorial dos rótulos (PT/EN) para tom de "Enterprise Product Designer".
- Ajuste da lógica JS (GSAP) para resetar contadores apenas no momento da animação.
- Verificação de lastro documental em `case-references/`.

Motivo: Garantir credibilidade, SEO e acessibilidade (legibilidade sem JS), além de elevar o nível profissional da narrativa de impacto.
Status: Concluído.

---

### 2026-05-16 — Refinamento Editorial Final e Governança de Compliance

Resumo: Substituição de termos genéricos por rótulos técnicos e ajuste de governança para métricas regulatórias.

Ações:
- [Editorial] Refinamento do grid de Cases: substituição de buzzwords por rótulos precisos (ex: "Coordenação de Riscos Operacionais").
- [Compliance] Conversão da métrica "100%" (BMG) para rótulo de requisito sistêmico ("auditável").
- [Docs] Atualização do `docs/metrics-audit.md` e diretrizes de memória.
- [Paridade] Garantia de sincronização PT/EN no dicionário de tradução (`site.js`).

Motivo: Evitar tom promocional/marketing e reforçar o posicionamento de design de infraestrutura e sistemas regulados.
Status: Concluído.