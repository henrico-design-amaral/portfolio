# VISUAL DECISIONS — Portfolio

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
