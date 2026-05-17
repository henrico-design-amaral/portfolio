# CHANGELOG — Portfolio

## 2026-05-16 — Reestruturação editorial de Sobre e Contato

Tipo: design-system / content / conversion / accessibility

Arquivos alterados:
- `index.html`
- `assets/css/site.css`
- `assets/js/site.js`
- `docs/Henrico-Amaral-CV.md`
- `ai-memory/05-technical-decisions.md`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/07-open-issues.md`
- `ai-memory/08-changelog.md`
- `ai-memory/09-do-not-repeat.md`

Decisões tomadas:
- Substituir Sobre por narrativa mais humana, conectando trajetória, repertório enterprise, IA e pensamento sistêmico.
- Criar quatro blocos editoriais: o que estrutura, como pensa, onde atua melhor e como trabalha hoje.
- Adicionar faixa humana discreta, subordinada à leitura técnica.
- Substituir Contato por seção de conversão com três intenções: recrutadores, empresas e conversas técnicas.
- Criar CTAs para LinkedIn, E-mail, WhatsApp, CV e Cases sem exibir telefone em texto puro.
- Manter as duas seções em fundo escuro institucional com grid/linhas/ruído sutis.
- Incluir Sobre e Contato no `revealSectionSystem()` com `immediateRender: false`.

Problemas resolvidos:
- Sobre anterior tinha composição própria em fundo claro, menos conectada ao sistema editorial atual.
- Contato anterior funcionava mais como encerramento conceitual do que como conversão objetiva.
- CTAs estavam limitados e sem segmentação por intenção.

Problemas pendentes:
- Validar visualmente em navegador interativo real os breakpoints 1366px, 1024px, 768px e 390px.
- Substituir `docs/Henrico-Amaral-CV.md` por PDF final se Henrico quiser um CV tradicional para download.

Status: Concluído localmente, sem commit.

---

## 2026-05-16 — Auditoria global de consistência entre seções

Tipo: design-system / editorial-system / motion / accessibility

Arquivos alterados:
- `index.html`
- `assets/css/site.css`
- `assets/js/site.js`
- `ai-memory/05-technical-decisions.md`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/08-changelog.md`
- `ai-memory/09-do-not-repeat.md`

Decisões tomadas:
- Criar o padrão canônico `section-header` para Método, Cases e Impacto.
- Manter a atmosfera editorial de Cases, mas trazer sua lógica para o sistema compartilhado.
- Preservar a clareza de Método sem tratar a seção como bloco visual isolado.
- Refinar Impacto com título menos dominante, evidências menores e cards mais simétricos.
- Centralizar motion de headers, chips, footers editoriais e cards em `revealSectionSystem()`.
- Usar `JetBrains Mono`, fonte realmente carregada, nos rótulos editoriais que ainda apontavam para `Space Mono`.
- Manter conteúdo estrutural visível por padrão e preparar estados ocultos via JS quando GSAP estiver disponível.

Problemas resolvidos:
- Headers de Método, Cases e Impacto seguiam gramáticas diferentes.
- Impacto ainda tinha desproporção entre título, subtítulo e evidências.
- Cards de Impacto dependiam demais do conteúdo para controlar percepção de proporção.
- Motion de Método e Impacto era mais fragmentado do que o sistema editorial pedia.
- Havia referências a uma fonte não carregada (`Space Mono`) em elementos editoriais.
- Parte do conteúdo estrutural ficava invisível por padrão caso a animação não rodasse.

Problemas pendentes:
- Validar visualmente em navegador interativo real os breakpoints 1680px, 1440px, 1366px, 1024px, 768px e 390px.
- Conferir o GitHub Pages somente depois de uma publicação futura; esta rodada não fez commit nem push.
- Avaliar, em rodada separada, se Sobre e Contato devem receber uma versão leve do `section-header` ou permanecer como blocos conceituais próprios.

Coisas que não devem ser repetidas:
- Não criar variações de header por seção sem motivo estrutural.
- Não usar fonte não carregada em rótulos editoriais.
- Não depender de classes `opacity-0` no HTML para conteúdo principal.
- Não duplicar timelines GSAP quando o padrão compartilhado resolve.

Próximos passos:
- Abrir a versão local em browser interativo e validar os breakpoints principais.
- Se aprovado, publicar por commit em `main` + push para `origin/main` em uma rodada separada.

Status: Concluído localmente, sem commit.

---

## 2026-05-16 — Publicação dos marcadores narrativos nos kickers

Tipo: release / design / editorial-system

Arquivos alterados:
- `index.html`
- `assets/css/site.css`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/08-changelog.md`

Decisões tomadas:
- Replicar em Método e Impacto a lógica do marcador narrativo já presente em Cases.
- Usar marcadores diferentes por seção para evitar repetição mecânica.
- Consolidar `.sh-kicker-context` como classe semântica para o marcador secundário.
- Manter o `data-t` apenas no texto principal do kicker, preservando o marcador durante troca PT/EN.
- Não executar `git init` nem recriar `origin`, pois o repositório já está configurado em `main` com `origin` lowercase oficial.

Problemas resolvidos:
- Método e Impacto não tinham o mesmo refinamento editorial do kicker de Cases.
- O marcador de Cases usava estilo inline.
- A estrutura anterior colocava `data-t` no kicker inteiro em Método/Impacto, o que impediria preservar um marcador narrativo fixo.

Problemas pendentes:
- Validar visualmente os três kickers em mobile, tablet e desktop.
- Confirmar se os marcadores continuam equilibrados após troca PT/EN.
- Confirmar no GitHub Pages se a versão publicada atualizou após o push.

Coisas que não devem ser repetidas:
- Não colocar `data-t` no `sh-kicker` inteiro quando houver marcador narrativo secundário.
- Não usar estilos inline para o marcador do kicker se `.sh-kicker-context` existir.
- Não copiar literalmente o mesmo marcador entre seções.
- Não voltar o remote para `Portfolio.git` uppercase.

Próximos passos:
- Fazer commit e push para `origin/main`.
- Verificar a versão publicada no GitHub Pages após a propagação.

Status: Preparado para commit/publicação.

---

## 2026-05-16 — Marcadores narrativos nos kickers de seção

Tipo: design / editorial-system

Arquivos alterados:
- `index.html`
- `assets/css/site.css`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/08-changelog.md`

Decisões tomadas:
- Replicar a lógica do marcador secundário de Cases nos kickers de Método e Impacto.
- Criar `.sh-kicker-context` para substituir o estilo inline do marcador de Cases.
- Manter os marcadores diferentes entre seções para parecerem parte da narrativa, não cópia mecânica.
- Mover `data-t` para o texto principal do kicker em Método e Impacto, preservando o marcador na troca PT/EN.

Problemas resolvidos:
- Método e Impacto estavam sem a camada editorial secundária presente em Cases.
- O marcador de Cases usava estilo inline em vez de classe compartilhada.

Problemas pendentes:
- Validar no navegador se os marcadores não comprimem ou quebram mal em mobile.

Próximos passos:
- Conferir visualmente os três kickers em PT/EN.

Status: Concluído.

---

## 2026-05-16 — Commit e publicação do portfólio no GitHub Pages

Tipo: release / repository / memory

Arquivos alterados:
- `index.html`
- `assets/css/site.css`
- `assets/js/site.js`
- `ai-memory/05-technical-decisions.md`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/07-open-issues.md`
- `ai-memory/08-changelog.md`
- `ai-memory/09-do-not-repeat.md`

Decisões tomadas:
- Não reexecutar `git init`, pois o repositório já está inicializado.
- Não recriar `origin`, pois o remote já está configurado.
- Usar branch `main` como fonte de publicação.
- Publicar as alterações via commit + push para `origin/main`.

Problemas resolvidos:
- Estado Git confirmado antes da publicação.
- Remote `origin` validado e corrigido para `https://github.com/henrico-design-amaral/portfolio.git`.
- Memória persistente atualizada antes do commit.
- Seções Método, Cases e Impacto ficaram padronizadas na camada editorial secundária.
- Commit `7fa5ae3` publicado em `origin/main`.

Problemas pendentes:
- Confirmar visualmente a versão publicada no GitHub Pages após o push.
- Validar breakpoints 390px, 768px e 1366px.
- Verificar cache/tempo de propagação do GitHub Pages.

Coisas que não devem ser repetidas:
- Não rodar `git init` em repo já inicializado.
- Não adicionar remote duplicado.
- Não voltar o remote para a URL uppercase `Portfolio.git`, pois o GitHub redireciona para `portfolio.git`.
- Não commitar de fora da pasta `Portfolio`.
- Não publicar sem atualizar a memória quando houver decisão relevante.

Próximos passos:
- Abrir a URL publicada e confirmar que o GitHub Pages serviu a versão atual.
- Aguardar propagação/cache do Pages se a página ainda exibir a versão anterior.

Status: Publicado em `origin/main`.

---

## 2026-05-16 — Consolidação de memória, Git e microtextos editoriais

Tipo: system / memory / design-system / repository

Arquivos alterados:
- `index.html`
- `assets/css/site.css`
- `assets/js/site.js`
- `ai-memory/05-technical-decisions.md`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/07-open-issues.md`
- `ai-memory/08-changelog.md`
- `ai-memory/09-do-not-repeat.md`

Decisões tomadas:
- Não reexecutar `git init`, pois o repositório Portfolio já possui `.git`.
- Manter branch principal como `main`.
- Confirmar `origin` como `https://github.com/henrico-design-amaral/portfolio.git`.
- Consolidar Método, Cases e Impacto com a mesma gramática editorial para microstats, chips e rodapés editoriais.
- Padronizar microstats e chips em `0.563rem`.
- Padronizar rodapés editoriais em `0.5rem`.

Problemas resolvidos:
- Remote Git documentado na memória estava divergente do estado real.
- Cases ainda usava Tailwind inline para elementos editoriais equivalentes aos de Método e Impacto.
- Microtextos editoriais estavam com tamanhos e classes inconsistentes entre seções.
- A memória persistente ainda não registrava integralmente as decisões recentes sobre fundos sólidos, microtextos, padronização e estado Git.

Problemas pendentes:
- Validar visualmente Método, Cases e Impacto em 390px, 768px e 1366px.
- Conferir se microflows não causam overflow em mobile.
- Validar animações GSAP dos microtextos e dos cards de Impacto no navegador.
- Conferir composição em PT/EN após troca de idioma.

Coisas que não devem ser repetidas:
- Não reexecutar `git init` em repositório já inicializado.
- Não recriar `origin` quando ele já estiver configurado.
- Não criar microtextos editoriais com classes Tailwind isoladas quando já existe sistema semântico.
- Não deixar Método, Cases e Impacto com padrões diferentes para microstats, chips e rodapés editoriais.
- Não transformar microtextos em decoração barulhenta ou concorrente com o conteúdo principal.

Próximos passos:
- Rodar validação visual local ou no GitHub Pages.
- Ajustar breakpoints dos microflows se houver overflow.
- Revisar o `07-open-issues.md`, que ainda contém bloco duplicado antigo e pode ser limpo em uma próxima passada de documentação.

Status: Concluído.

---

## 2026-05-16 — Microtextos editoriais em Método e Impacto

Tipo: design / editorial-system / motion

Arquivos alterados:
- `index.html`
- `assets/css/site.css`
- `assets/js/site.js`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/08-changelog.md`

Resumo:
Adicionada camada editorial secundária nas seções Método e Impacto, aproximando as duas seções da linguagem visual já presente em Cases.

Ações:
- Criadas classes compartilhadas para microcopy, microstats, chips, microflow e rodapé editorial.
- Método recebeu microstats, chips refinados, fluxo conceitual e frase editorial inferior.
- Impacto recebeu microstats, chips técnicos, fluxo conceitual e frase editorial inferior.
- Motion sutil adicionado via GSAP com opacity, translateY e stagger curto, preservando `prefers-reduced-motion`.

Status: Concluído.

---

## 2026-05-16 — Fundos sólidos em Método e Cases

Tipo: design / layout / visual-system

Arquivos alterados:
- `index.html`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/08-changelog.md`

Resumo:
Removidas as camadas internas de grid/topologia ambiental das seções Método e Cases, preservando fundos sólidos da paleta consolidada.

Motivo:
Reduzir ruído visual e reforçar a leitura editorial das duas seções, mantendo Método em `base-200` (`#c9c4bc`) e Cases em `page` (`#EBE7E0`).

Status: Concluído.

---

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

---

## 2026-05-16 — Refatoração da Seção Impacto: Sistema de Grid Rígido

Tipo: feat / layout / CSS / design-system

Arquivos alterados:
- `index.html` — Markup da seção Impacto reescrito com classes semânticas
- `assets/css/site.css` — Bloco de Impact CSS reescrito do zero 3x iterado até estado final

### Decisões tomadas

1. **Abandonado o controle de layout por classes Tailwind inline** nos cards de impacto.
   - Seletores como `.impact-cell .font-display.lg\:text-\[3\.5rem\]` nunca matchavam em runtime.
   - Substituídos por classes semânticas próprias: `.impact-evidence`, `.impact-desc`, `.impact-dimension`.

2. **Coluna interna dos cards fixada em `0.88fr 1.12fr`** (proporção única para todos os 4 cards).
   - Conteúdo não pode mais alterar a largura das colunas.
   - `flex-shrink: 0` em todos os elementos críticos garante que nada encolhe.

3. **Todos os 4 cards com altura idêntica via `grid-auto-rows`.**
   - `grid-auto-rows: 340px` (desktop) / `360px` (1280px+) no `.impact-grid`.
   - `.impact-cell { height: 100% }` garante que cada card ocupa 100% da célula do grid.

4. **Título reduzido de `clamp(3.5rem, 8vw, 8rem)` para `clamp(2.75rem, 5vw, 5rem)`.**
   - Motivo: estava dominando demais a seção, desequilibrando o header.
   - `font-family: 'Syne', sans-serif; font-weight: 800` agora declarado explicitamente no seletor CSS.
   - O h2 havia perdido as classes Tailwind após o refactor e estava herdando a fonte do body.

5. **Evidência controlada em `clamp(1.5rem, 2.2vw, 2.125rem)`.**
   - Antes `clamp(2rem, 3.5vw, 3.25rem)` — Petrobras ("95% de redução no esforço manual") explodia o card.
   - Agora todos os 4 itens de evidência têm o mesmo peso visual.

6. **Subtítulo com `text-align: right` e sem `max-width`.**
   - Alinha ao eixo direito da coluna do header, composição editorial mais sofisticada.

7. **Remote Git atualizado de `Portfolio_v2.git` para `portfolio.git` (lowercase).**
   - GitHub fez redirect automático; repositório oficial é `henrico-design-amaral/portfolio`.

### Problemas resolvidos

- [x] Seletores Tailwind quebrados que nunca aplicavam estilos
- [x] Cards com alturas diferentes (conteúdo ditava a estrutura)
- [x] Título herdando fonte errada após remoção das classes Tailwind
- [x] BMG com peso visual inferior aos demais cards
- [x] Markup duplicado no index.html após operação de replace com CRLF

### Problemas pendentes

- [ ] Verificar se o `site.js` (GSAP) ainda anima corretamente os cards com as novas classes `.impact-cell`
- [ ] Validar o layout nos breakpoints 390px, 768px e 1366px no navegador
- [ ] Verificar se o GitHub Pages está servindo a versão atualizada sem cache

### Commit publicado

```
feat(impact): refactor section with editorial cards, SVG icons and refined typography
system(memory): add persistent project memory
```

Status: Concluído (pendente validação visual no GitHub Pages).
