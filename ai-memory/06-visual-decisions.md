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