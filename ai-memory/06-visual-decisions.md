# VISUAL DECISIONS — Portfolio

## 2026-05-21 — i18n da legenda da foto do Sobre e refinamento do subtítulo do Hero

Decisão:
A legenda da foto na seção Sobre passou a ser traduzível via `data-t="ab.photo.caption"`, com versões PT e EN no objeto COPY. Antes estava hardcoded em inglês.

O subtítulo do Hero foi simplificado: "plataformas, fluxos e sistemas digitais" → "plataformas, fluxos e sistemas", removendo "digitais" como palavra redundante.

Publicação:
Branch `fix/home-signature-content-audit` mergeada em `main` e publicada via GitHub Pages.

## 2026-05-21 — Assinatura autoral e evidências sem KPI inflado

Decisão:
A frase "Pense simples. Faça melhor. Torne-se inevitável." foi incorporada como assinatura editorial, não como headline principal.

Aplicação:
- Hero: microassinatura abaixo dos CTAs, com baixo peso visual, mono, tracking alto e opacidade controlada.
- Contato: fechamento mais forte antes dos canais de contato, funcionando como síntese autoral.
- Footer: não recebeu repetição adicional para evitar excesso de slogan.

Governança visual:
- A seção Impacto passa a usar "Impacto observável" em vez de "Impacto mensurável", porque agora mistura uma métrica quantitativa documentada com evidências qualitativas concretas.
- Os cards de cases deixam de usar "Usuários" quando o conteúdo é qualitativo. O eixo passa a ser Sistema / Contexto / Escopo / Impacto.
- Letter spacing negativo foi removido dos pontos editados nesta rodada para preservar legibilidade e evitar compressão visual.
- A escala cromática passa a usar uma progressão mais linear entre superfície clara e fechamento escuro: `#f2efe9`, `#e6ded1`, `#d8cbb8`, `#b89f82`, `#80644a`, `#5d3f2e`, `#472211`.
- O banner de clientes não deve depender de `transform` para centralização, porque GSAP/reduced-motion pode sobrescrever transformações. A centralização deve vir de `left`/`right` explícitos com limite máximo de largura.

## 2026-05-16 — Sobre e Contato como fechamento editorial escuro

Decisão:
Sobre e Contato deixam de ser fechamento genérico e passam a formar um bloco final escuro, técnico e institucional, continuando a lógica visual de Hero, Método, Cases e Impacto.

Aplicação visual:
- Sobre usa o `section-header` canônico em variante escura, narrativa humana em bloco editorial largo, quatro blocos técnicos e uma faixa humana discreta.
- Contato usa o mesmo header editorial, três cards de intenção e CTAs objetivos para LinkedIn, E-mail, WhatsApp, CV e Cases.
- A camada ambiental usa linhas finas, grid sutil, ruído leve e coordenadas técnicas, sem glow pesado ou aparência SaaS.
- A seção humaniza Henrico com presença profissional, sem transformar o conteúdo em lifestyle.

Regra:
Sobre deve conectar trajetória, repertório, IA e pensamento sistêmico. Contato deve funcionar como conversão estratégica para recrutadores, empresas e conversas técnicas, não como rodapé decorativo.

## 2026-05-16 — Auditoria global de consistência sistêmica

Decisão:
Método, Cases e Impacto passam a usar um `section-header` canônico, com kicker editorial, grid de título à esquerda, divisor vertical fino e subtítulo/microelementos à direita.

Padrão criado:
- `.section-header`
- `.section-kicker`
- `.section-kicker-context`
- `.section-header-grid`
- `.section-header-title-col`
- `.section-header-divider`
- `.section-header-title`
- `.section-header-subtitle`

Aplicação visual:
- Método preserva clareza metodológica, mas agora entra na mesma gramática editorial de Cases e Impacto.
- Cases preserva sua atmosfera autoral e passa a usar a mesma estrutura de header das demais seções.
- Impacto deixa de ter título e evidências desproporcionais; cards mantêm grid 2x2 com alturas e colunas mais controladas.

Regra:
Novas seções editoriais não devem criar headers próprios se o padrão `section-header` atender. Variações devem nascer de conteúdo, ritmo e microtexto, não de uma gramática visual isolada.

Registro de decisões estéticas e refinamentos do sistema visual consolidado.

## Conceito Central: "Infraestrutura de Decisão"

O design deve evocar a sensação de um sistema operacional robusto e coordenado, mas com a sofisticação e o respiro de uma publicação editorial premium.

## Decisões Visuais Consolidadas

1. **Camadas Ambientais (Topology)**: O uso de grids persistentes e caminhos SVG no background (ID `env-infrastructure` e outros) serve para conectar as seções visualmente. Isso reforça a ideia de que o portfólio é um ecossistema único de dados e decisões, não apenas uma coleção de seções isoladas.
2. **Tensão Tipográfica**: O contraste extremo entre a `Syne` em escala massiva (até 8rem no desktop) e a `JetBrains Mono` em tamanhos minúsculos (8-10px) cria uma dinâmica visual que comunica simultaneamente autoridade criativa e precisão técnica.
3. **Motion Significativo e Comportamental**:
   - Cada card de projeto possui uma "assinatura de motion" no background que reflete o tipo de problema resolvido (Radar para monitoramento crítico, Scanners territoriais para dados agrícolas, Flow lines para logística).
   - O motion deve ser sutil o suficiente para não competir com a leitura, atuando como uma camada de "vida sistêmica".
4. **Paleta Terrosa e Sóbria**: A transição para tons de papel, marrom e terra (`#f2efe9`, `#472211`) afasta o projeto do visual de "SaaS genérico" ou "Portfolio Dark padrão", trazendo um tom institucional mais maduro e autoral.
5. **Liquid Glass e Magnética**:
   - A navegação utiliza efeitos de vidro fluido para manter legibilidade sobre o background ambiental em constante scroll.
   - Elementos interativos possuem "Magnetic Effects" (via GSAP) para aumentar o feedback tátil e o engajamento na navegação.

## Refinamentos Obrigatórios

- **Filtros de Blur**: Usar blur progressivo em transições de seções para suavizar a entrada de dados.
- **Hierarquia Editorial**: Headlines nunca devem ser interrompidas por elementos decorativos pesados; a decoração (grids/svgs) deve sempre estar na camada de infraestrutura (Z-index baixo).
- **Consistência de Casos**: Os cases devem manter a estrutura de Bento Grid de alta fidelidade, garantindo que o impacto operacional seja a métrica visualmente dominante.
- 6. **Evidência Operacional (V3)**: A seção Impacto utiliza um grid 2x2 de cards editoriais largos. Cada card é estruturalmente dividido entre Contexto (Project/Dimension) e Evidência (Value/Description), normalizando métricas quantitativas e qualitativas em uma mesma gramática visual. O motion sutil de entrada e a revelação de linhas internas reforçam a precisão técnica da seção.

## 2026-05-16 — Fundos sólidos em Método e Cases

Decisão:
As seções Método (`#process`) e Cases (`#cases`) usam fundos sólidos da paleta existente, sem grid/topologia ambiental no fundo da seção.

Paleta aplicada:
- Método: `base-200` / `#c9c4bc`
- Cases: `page` / `#EBE7E0`

Motivo:
Reduzir ruído visual nas duas seções de leitura e manter o foco na hierarquia editorial, nos cards de método e nos cards de cases. A camada técnica continua existindo nos elementos internos quando tem função narrativa, mas não como textura de fundo dessas seções.

## 2026-05-16 — Microtextos editoriais em Método e Impacto

Decisão:
Método e Impacto passam a usar microtextos editoriais no entorno do conteúdo principal, seguindo a lógica visual de Cases sem copiar literalmente seus textos.

Aplicação:
- Método: microstats, chips técnicos, microfrase, fluxo conceitual e complemento editorial.
- Impacto: microstats, chips de evidência operacional, microfrase, fluxo conceitual e complemento editorial.

Regra:
Microtextos devem permanecer pequenos, em uppercase, com tracking alto, contraste baixo e motion sutil. Eles não devem entrar dentro dos cards nem competir com títulos, subtítulos ou evidências principais.

## 2026-05-16 — Padronização editorial entre Método, Cases e Impacto

Decisões tomadas:
- `section-microstats section-microcopy` passa a ser o padrão para pequenas métricas laterais/editoriais.
- `section-chip-row` + `section-chip` passa a ser o padrão para chips técnicos de seção.
- `section-editorial-footer` passa a ser o padrão para linhas editoriais inferiores.
- Cases foi alinhada ao mesmo sistema usado em Método e Impacto.
- Tamanhos consolidados:
  - microstats: `0.563rem`
  - chips via `section-chip-row`: `0.563rem`
  - rodapé editorial via `section-editorial-footer`: `0.5rem`

Arquivos alterados nesta rodada:
- `index.html`
- `assets/css/site.css`
- `assets/js/site.js`
- `ai-memory/05-technical-decisions.md`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/07-open-issues.md`
- `ai-memory/08-changelog.md`
- `ai-memory/09-do-not-repeat.md`

Problemas resolvidos:
- Método, Cases e Impacto estavam usando estilos diferentes para elementos editoriais equivalentes.
- Cases ainda usava Tailwind inline para chips, microstats e footer editorial.
- Os tamanhos dos microtextos editoriais não estavam padronizados entre seções.

Problemas pendentes:
- Validar visualmente no navegador os breakpoints 390px, 768px e 1366px.
- Conferir se os microflows não geram overflow em telas muito estreitas.
- Validar a entrada GSAP dos microtextos em Método e Impacto.
- Conferir se a troca PT/EN mantém a composição editorial equilibrada.

Próximos passos:
- Rodar inspeção visual em browser local ou GitHub Pages.
- Ajustar quebras/ocultação de microflows em mobile, se necessário.
- Revisar se os microtextos continuam subordinados ao conteúdo principal depois da validação visual.

## 2026-05-16 — Marcadores narrativos nos kickers

Decisão:
Os `sh-kicker` de Método, Cases e Impacto passam a compartilhar um marcador editorial secundário antes do nome da seção.

Aplicação:
- Método: `02.04.01 M` como índice de método/camadas.
- Cases: `10.90.54 S` preservado como coordenada editorial já existente.
- Impacto: `95.4K.12 E` como índice de evidência, escala e operação.

Regra:
O marcador deve usar `.sh-kicker-context`, com baixa opacidade e peso reduzido. O `data-t` deve ficar apenas no texto principal da seção, para não apagar o marcador durante a troca PT/EN.

## 2026-05-17 — Sistema de blur progressivo (entrada, saída, scroll)

Decisão:
Adicionar blur como elemento central da linguagem de motion do portfólio.

Aplicação visual:
- **Hero**: Título entra com blur(10px)→0 + rotação sutil; subtítulo com blur(6px)→0; badge, eyebrow, CTAs e marquee com blur(4px)→0. Ao scrollar para longe do hero, fundo técnico desfoca (12px) e conteúdo desfoca+some (10px).
- **Seções editoriais**: Kicker (4px), título (8px), subtítulo (4px), microstats (4px) e cards (8px) entram com blur progressivo escalonado. Ao scrollar de volta, a animação reverte — elementos desfocam e somem suavemente.
- **Cases**: Cada card entra com blur consistente por comportamento (6-12px). Título e descrição também entram com blur. Ao scrollar para cima, a animação reverte com blur-out.
- **Section dividers**: Transição suave com fade + scaleX ao scrollar entre seções.
- **Nav**: Transição mais suave ao scrollar com `backdrop-filter: blur(24px)` + classe `.nav-scrolled`.

Regra:
Blur deve ser sutil o suficiente para não competir com leitura, mas presente o bastante para criar transição cinematográfica entre estados. Valores controlados centralmente via `MOTION.blur`.

## 2026-05-17 — Revisão minimalista sistêmica da home

Decisão:
A home passa a usar uma superfície visual mais simples e progressiva, com grid global único e fixo no `body::before`. As seções deixaм de depender de múltiplas topologias, grids internos, coordenadas falsas, chips e rodapés editoriais.

Aplicação:
- Hero, Método, Cases, Impacto, Sobre e Contato mantêm a estrutura principal, mas com menos camadas decorativas.
- O grid não muda entre seções; a progressão vem apenas de fundo, temperatura e contraste.
- Cards têm superfície própria: claros nas seções claras e escuros elevados nas seções finais.
- Os microtextos foram reduzidos a uma linha principal por seção.
- "Human Layer", `SYSTEM VIEW`, coordenadas falsas, microflows e SVGs ambientais de seção foram removidos do HTML.
- Cards de Impacto usam proporção mais clara: lado esquerdo menor (`0.8fr`) e evidência à direita como foco (`1.8fr`).

Regra:
Motion permanece como aprimoramento narrativo, não como dependência de leitura. Conteúdo principal deve ficar legível por padrão; animações GSAP não podem deixar hero, headers ou cards invisíveis se falharem.

## 2026-05-17 — Myna-hero style animations

Decisão:
O hero do portfólio adota a linguagem de motion do componente myna-hero da 21st.dev: word-level staggered entrance com blur progressivo e spring easing overshoot.

Aplicação visual:
- Título do hero é quebrado em palavras individuais (`<span class="hero-word">`) via JavaScript no runtime
- Cada palavra entra com blur(8px) → 0px, y: 24px → 0px, stagger 0.06s, spring easing (back.out 1.4)
- Badge, eyebrow, CTAs e marquee também usam spring easing com durações mais curtas (0.5-0.6s)
- O timing geral é mais apertado: hero animation completa em ~1.6s vs ~2.4s anterior

Regra:
Spring easing (back.out) cria overshoot sutil que comunica energia e precisão técnica. Stagger de 0.06s entre palavras cria ritmo sem parecer robótico. Este padrão deve ser usado em headers principais, não em todos os textos.

## 2026-05-17 — The Infinite Grid como background fixo

Decisão:
O portfólio usa um grid infinito scrollante como elemento de infraestrutura visual, inspirado no componente the-infinite-grid da 21st.dev.

Aplicação visual:
- Grid fixo em toda a página, posição `fixed` com z-index 0
- Duas camadas SVG: camada de fundo (dim, 6% opacidade) + camada de frente (12% opacidade)
- A camada de frente tem uma máscara radial que segue o mouse, revelando o grid mais brilhante ao redor do cursor
- O grid scrolla infinitamente via GSAP ticker (não CSS animation) — mais suave e controlável
- Três orbes ambiente com blur(120px) criam profundidade sem competir com conteúdo

Diferenças da implementação 21st.dev:
- Projeto é vanilla HTML/CSS/JS, não React — implementação via JavaScript puro
- Sem dependência de Framer Motion, usa GSAP ticker equivalente
- Sistema de orbes adaptado para paleta de cores do portfólio (tons terra/marrom)

Regra:
O grid deve permanecer sutil (opacidade 6-12%) e nunca competir com o conteúdo. A máscara do mouse é um detalhe de interação, não uma feature principal.
