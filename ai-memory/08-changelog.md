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