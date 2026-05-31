# Portfolio Design System

Este documento estabelece as diretrizes canônicas para o sistema de design do portfólio Portfolio, definindo a identidade visual, escala de cores, tipografia, grids e regras comportamentais dos componentes para assegurar a consistência editorial e técnica da interface.

---

## 1. Princípio Visual

O portfólio foi concebido sob uma direção de arte madura, afastando-se de modismos visuais comuns da web contemporânea. A estética é governada pelas seguintes características fundamentais:

- **Editorial**: Inspirado em publicações impressas de luxo, monografias de arquitetura e relatórios institucionais de alto padrão. Prioriza o respiro e a tensão tipográfica.
- **Técnico**: Uso de elementos que sugerem rigor e infraestrutura (tabelas de dados, coordenadas discretas, monospace, microtítulos).
- **Claro e Quente**: Superfícies quentes de tom de papel (creme e pérola) em vez de fundos brancos assépticos ou pretos genéricos de landing pages SaaS.
- **Institucional e Preciso**: Transmite solidez corporativa e experiência sênior. Cada detalhe visual possui uma função direta na comunicação.
- **Minimalista e Autoral**: Menos elementos, porém desenhados com extremo cuidado de alinhamento, espaçamento e proporção.

> [!WARNING]
> **Proibição Estética**: É expressamente proibido o uso de estética SaaS genérica (como botões com cantos super arredondados, gradientes roxos/azuis neon, sombras flutuantes pesadas) ou futurismo gratuito (partículas, canvas complexos interativos, grids de hexágonos).

---

## 2. Lema

> **Pense simples. Faça melhor. Torne-se inevitável.**

Este lema se traduz na interface através dos seguintes critérios práticos:
- **Simplicidade Estrutural**: Os layouts utilizam marcações semânticas puras com fluxos de leitura retos e óbvios.
- **Contraste Funcional**: A hierarquia de relevância é dada pela escala tipográfica e contraste cromático, nunca pelo acúmulo de adornos.
- **Poucos Elementos**: Se um elemento visual não ajuda a estruturar a leitura ou a reforçar o posicionamento, ele deve ser descartado.
- **Alto Controle Tipográfico**: Uso rigoroso de espaçamento entre letras (tracking), entrelinhamento (line-height) e espessura dos pesos de fontes.
- **Nada Decorativo sem Papel**: Cada linha divisória, borda ou marcador serve apenas para organizar ou agrupar dados operacionais.

---

## 3. Paleta Canônica (Pearl & Honey)

A paleta de cores estabelece a progressão tonal sutil entre superfícies e textos, baseada em tons de papel orgânico (Pearl) e acentos quentes (Honey).

### Cores de Superfície (Escala Creme)
- `--color-cream-50` (`#f2efe9`): Creme claro. Utilizado para superfícies elevadas, estado hover e fundo inicial da Hero.
- `--color-cream-100` (`#DAD5CD` / `#EBE7E0`): Pearl Base. Tom dominante de fundo de página que confere o visual quente e editorial.
- `--color-cream-200` (`#c9c4bc`): Creme médio. Fundo para seções de transição de conteúdo intermediário (como a seção Método).
- `--color-line-soft` (`rgba(71, 34, 17, 0.08)`): Cor base para linhas divisórias finas e bordas de cards operacionais.

### Cores de Suporte (Escala Marrom/Tons de Terra)
- `--color-brown-700` (`#80644a`): Marrom médio (Bronze). Fundo para transição ao bloco final escuro (seção Sobre).
- `--color-brown-800` (`#533E2B` / `#5d3f2e`): Mocha. Fundo escuro para transição para o contato.
- `--color-brown-900` (`#472211`): Cocoa. Tom mais escuro de marrom, utilizado para o fundo do rodapé (Footer).

### Cores de Acento (Honey Gold)
- `--color-gold-400` (`#e6ded1` / `#DAD5CD`): Acento sutil e claro para estados inativos em áreas escuras.
- `--color-gold-500` (`#BE9C6E`): Honey Gold. Tom de ouro envelhecido, contido e quente, utilizado exclusivamente para badges, detalhes de acessibilidade, CTAs e kickers.

### Escala de Texto
- `--color-text-primary` (`#472211`): Cocoa primário. Usado para títulos e textos principais sobre fundos claros, oferecendo legibilidade confortável e alto contraste sem usar preto puro.
- `--color-text-secondary` (`#533E2B`): Mocha secundário. Usado para textos de apoio, parágrafos e descrições.
- `--color-text-muted` (`#7a6a5e`): Muted. Usado para kickers secundários, metadados e textos de menor hierarquia.

### Regras Cromáticas
1. **Fundo**: Nunca usar branco puro (`#ffffff`). O fundo base deve sempre ter a temperatura quente do Pearl ou derivados da escala creme/terrosa.
2. **Texto**: Nunca usar preto puro (`#000000`). Utilizar o Cocoa (`#472211`) como preto primário institucional.
3. **Acento**: O Honey Gold (`#BE9C6E`) deve ser aplicado de forma contida e cirúrgica. Não deve dominar a tela, servindo apenas como ponto de atenção técnico.
4. **Contraste**: A legibilidade tem precedência sobre a estética. Todas as combinações de superfície e texto devem satisfazer os critérios de contraste de acessibilidade para textos normais e grandes.

---

## 4. Tipografia

A tipografia é o principal elemento de design do portfólio. É estruturada por três famílias de fontes complementares, cada uma com função estrita:

### 1. Display (`Syne`)
- **Uso**: Título H1 do Hero, headlines de seções editoriais, assinatura de encerramento.
- **Características**: Peso muito forte (bold/extra-bold), tracking levemente negativo (`-0.02em` a `-0.03em`) para títulos massivos, line-height muito compacto (`0.96` a `1.15`). Entrega uma estética arredondada e forte tensão editorial.

### 2. Sans/Text (`Inter`)
- **Uso**: Parágrafos de leitura, textos descritivos, links de navegação secundários, textos internos de cards.
- **Características**: Alta legibilidade no ambiente digital, peso regular/médio (`400` / `500`), entrelinhamento confortável (`1.55` a `1.65`). Evita excesso de peso para não cansar a leitura.

### 3. Mono/Label (`JetBrains Mono`)
- **Uso**: Badges de disponibilidade, kickers/eyebrows de seção, microtextos técnicos de rodapés, botões de ação e navegação mono.
- **Características**: Letras em caixa alta (uppercase), tracking alto (`0.2em` a `0.3em`), tamanho de fonte reduzido (`8px` a `11px`). Exerce função técnico-editorial clara de rotulação.

### Escala de Tamanhos
- **Hero Title**: `4.00rem` (Desktop) / `2.25rem` (Mobile) — Display Syne.
- **Section Title**: `2.50rem` (Desktop) / `2.00rem` (Mobile) — Display Syne.
- **Card Title**: `1.50rem` (Desktop) / `1.25rem` (Mobile) — Display Syne.
- **Body Text**: `1.0625rem` (Desktop) / `0.9375rem` (Mobile) — Sans Inter.
- **Nav Links**: `0.9375rem` (Desktop) / `1.50rem` (Mobile Drawer) — Sans Inter.
- **Micro Label / Kicker**: `0.563rem` a `0.625rem` — Mono JetBrains Mono.

---

## 5. Grid e Layout

O layout segue regras rígidas de posicionamento e alinhamento para criar ritmo de leitura:

- **Container Máximo**: `1200px` (alinhado centralmente na tela).
- **Gutters (Desktop)**: `1.5rem` (24px) de margens internas laterais para segurança da tela.
- **Gutters (Mobile)**: `1.0rem` (16px) nas bordas de visualização.
- **Primeira Dobra**: A Hero section ocupa entre `90vh` e `100vh`, projetada para centralizar o texto editorial principal verticalmente, com o rodapé da Hero ancorado na margem inferior para convidar ao scroll.
- **Relação Hero/Header/Clientes**: A cabeçalho (`header`) flutua de forma compacta e fixa. A Hero exibe as mensagens centrais e fecha na parte inferior com a faixa de clientes em largura total (`clients-strip`).
- **Respiro Vertical (Section Padding)**: Escala padrão de `6rem` para desktop, `5rem` para notebooks/tablets e `4rem` para mobile (390px).

> [!CAUTION]
> **Erros de Layout**: É proibido o uso de seções espremidas sem respiro (padding inferior a `4rem`), grids complexos que competem com a legibilidade das headlines, ou o desalinhamento de blocos de conteúdo principais nas laterais da tela.

---

## 6. Backgrounds e Superfícies

Os fundos das seções devem manter a legibilidade em foco absoluto, sem firulas ou texturas futuristas pesadas:

- **Superfícies Sólidas**: As seções seguem uma progressão cromática linear do claro para o escuro ao longo do scroll da página (`#f2efe9` → `#e6ded1` → `#d8cbb8` → `#b89f82` → `#80644a` → `#5d3f2e` → `#472211`).
- **Textura Técnica Discreta**: Uso opcional e extremamente suave de malha de pontos (`dot-grid`) com baixa opacidade (máximo de 4% a 6%) nas dobras iniciais.
- **Centro Limpo**: A coluna ou bloco que carrega a tipografia de parágrafos nunca deve receber texturas, linhas ou grids concorrentes.

> [!WARNING]
> **Proibição de Efeitos de Fundo**: São terminantemente proibidos degradês diagonais de transição entre as seções, linhas divisórias coloridas ou tracejadas fortes cruzando a página, animações de partículas brilhantes, renderização em canvas 3D ou glows no estilo "SaaS marketing" sob os textos.

---

## 7. Componentes Essenciais

### 1. Header (Cabeçalho)
- **Visual**: Fundo claro translúcido com `backdrop-filter: blur(12px)` e uma linha divisória inferior extremamente sutil.
- **Layout**: Alinhamento em flexbox `space-between`. Sigla "HA" à esquerda (Display Syne Bold) e links de navegação (em Sans regular) centralizados ou alinhados.
- **Navegação**: Links limpos, sem sublinhados por padrão, com transição de opacidade no hover.

### 2. Language Toggle (Seletor de Idioma)
- **Visual**: Um controle minimalista segmentado com visual leve. Mostra o idioma de destino em caixa alta.
- **Interação**: Estado hover suaviza a borda e fundo. Suporta ARIA attributes completos (`aria-pressed` indicando se está ativo/pressionado).

### 3. Badge (Disponibilidade)
- **Visual**: Pílula horizontal com fundo sutil creme médio (`base-200`) e borda fina de contorno.
- **Elemento**: Um ponto verde à esquerda (`--status-green`) com sombra de glow sutil pulsante em CSS, seguido do texto mono indicando "Disponível agora...".

### 4. Eyebrow (Kicker de Seção)
- **Visual**: Microtexto em `JetBrains Mono` uppercase, tracking de `0.3em` e opacidade reduzida.
- **Layout**: Fica posicionado logo acima do H1 ou H2 correspondente.

### 5. CTA (Botão de Ação Primário)
- **Visual**: Fundo sólido Cocoa (`#472211`) com texto claro, ou Honey Gold (`#BE9C6E`) com texto escuro, dependendo do contraste da seção.
- **Layout**: Padding generoso de toque (`min-height: 48px` para acessibilidade), cantos com raio sutil (`--radius-sm`).
- **Hover**: Transição suave de cor de fundo e sombra contida.

### 6. Clients Strip (Faixa de Clientes)
- **Visual**: Faixa discreta horizontal posicionada na margem inferior da Hero. Fundo translúcido sutil.
- **Conteúdo**: Texto mono "Marcas atendidas" ou "Clientes" à esquerda, seguido por uma lista estática ou marquee suave com os nomes de empresas parceiras (Bayer, Petrobras, Ambev, etc.) em Display Syne com peso regular e opacidade sutil.

### 7. Cards Técnicos / Cases
- **Visual**: Borda sutil de contorno, fundo sólido da paleta da seção (levemente elevado em contraste com o fundo base).
- **Conteúdo**: Categoria do projeto em mono uppercase, título do case em Display e descrição concisa em Sans. Sem sombras externas pesadas ou cantos arredondados gigantescos (limite de 8px a 12px de raio).

### 8. Footer (Rodapé)
- **Visual**: Fundo Cocoa profundo (`#472211`) e texto claro com alta legibilidade.
- **Conteúdo**: Assinatura visual "HA Henrico Amaral" à esquerda, lemas autorais centralizados em Display com tracking aberto, e links rápidos (como "↑ Topo") à direita. Sem listas gigantes de links ou sitemaps.

---

## 8. Hero Canônica

A primeira dobra (Hero) atua como o manifesto editorial de entrada do portfólio. Seu arranjo visual deve respeitar rigorosamente a seguinte hierarquia e tensão:

1. **Badge superior**: Badges de status de disponibilidade e especialidades operacionais logo acima do título principal.
2. **Kicker/Eyebrow**: Uma frase de introdução em monospace técnico.
3. **H1 Dominante**: O título principal "Sistemas claros para decisões difíceis." posicionado centralmente, ocupando a maior parte do peso visual da dobra, usando a tipografia Display Syne.
4. **Subtítulo/Descrição**: Parágrafo de descrição abaixo do título em Sans Inter, delimitado a um comprimento confortável de leitura (máximo de 60 caracteres por linha).
5. **CTA Primário**: Botão "Vamos conversar" alinhado abaixo da descrição.
6. **Clients Strip**: Faixa de prova social ancorada na base horizontal, fechando a dobra visual com sofisticação institucional.

---

## 9. Motion Canônico (Futuro)

Embora não implementado nesta fase estrutural, qualquer motion futuro deve obedecer a regras estritas de sobriedade:

- **Evolução de Estado**: Transições baseadas em interpolações lineares ou springs contidas, sem acelerações elásticas agressivas (evitar rebotes exagerados).
- **Entrada de Conteúdo**: Animações de entrada escalonadas (stagger) discretas usando transições de opacidade combinadas com leves deslocamentos no eixo Y (máximo de 12px) e blur progressivo sutil (blur entrando de 8px para 0px).
- **Interação de Background**: Movimentos automáticos lentos (como scroll de grid) calculados para consumir o mínimo de recursos e não desviar a atenção da leitura.
- **Reduced Motion**: Respeito obrigatório à preferência de acessibilidade `@media (prefers-reduced-motion: reduce)`. Caso ativada, todas as transições e efeitos de deslocamento são desativados (`duration: 0s !important` ou `transition: none !important`).
- **Carregamento**: O conteúdo principal deve estar 100% visível e funcional mesmo se o interpretador de JavaScript falhar ou for bloqueado pelo usuário.

---

## 10. Proibições Permanentes

Sob nenhuma hipótese os seguintes padrões legados, resíduos ou decisões conflitantes devem reingressar no projeto ativo:

- **Orbital Hero**: O componente orbital e suas órbitas SVGs concêntricas estão banidos.
- **Hero-system/Ev-orbit/Orbit-node**: Qualquer código ou marcação ligada a órbitas ou sistemas de nós interativos no hero.
- **CSS/JS Legados**: Arquivos `site.css`, `site.js`, `home.css`, `home.js`, `tailwind.generated.css` e similares não devem ser carregados ou preservados na nova base ativa.
- **Power BI / AI-assisted workflow**: Termos banidos da identidade visual e posicionamento de conteúdo.
- **Arquitetura de Decisão para Sistemas Críticos**: Frase banida de uso como headline ou título H1 principal.
- **Glows SaaS**: Sombras neon em CSS, sombras pesadas nos botões ou elementos com opacidade em blur para simular luzes coloridas de fundo.
- **Tailwind / GSAP nesta fase**: Nenhuma dependência externa de frameworks CSS ou animações de alta complexidade deve ser adicionada à estrutura canônica inicial.
- **Motion antes de Estrutura**: Animar elementos antes que a marcação semântica HTML e o layout estático CSS estejam 100% resolvidos e homologados.
