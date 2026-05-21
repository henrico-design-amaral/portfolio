# DO NOT REPEAT — Portfolio

Este arquivo registra soluções, padrões e abordagens que não devem ser repetidos no Portfolio.

Antes de propor ou executar qualquer alteração, verificar este arquivo.

## Não repetir no posicionamento

Não apresentar Henrico como:

- designer visual genérico
- criador de telas bonitas
- UX designer com discurso comum
- profissional baseado apenas em estética
- executor de landing pages
- perfil júnior ou intermediário

## Não repetir na escrita

Evitar:

- experiências incríveis
- soluções inovadoras
- design centrado no usuário
- interfaces intuitivas
- jornadas fluidas
- transformação digital
- impacto positivo
- paixão por design
- design que encanta
- experiências memoráveis
- elevar a experiência do usuário

Essas expressões são genéricas e enfraquecem o posicionamento.

## Não repetir no visual

Evitar:

- visual genérico de SaaS
- template premium comum
- excesso de glow
- excesso de gradiente
- grid forte demais
- cyberpunk
- sci-fi genérico
- dashboard falso futurista
- glassmorphism gratuito
- cards decorativos sem função
- motion chamativo
- background competindo com conteúdo
- contraste baixo em texto importante
- texto pequeno demais para parecer sofisticado
- transformar Sobre em seção clara/desconectada do sistema escuro final quando a home já estiver em linguagem editorial técnica
- transformar a camada humana em lifestyle ou autobiografia decorativa

## Não repetir na estrutura

Evitar:

- alterar uma seção sem comparar com o site inteiro
- criar variações visuais isoladas
- duplicar componentes
- reescrever tudo sem necessidade
- instalar dependências sem justificativa
- misturar memória global com memória local
- commitar fora da pasta Portfolio
- usar OLD_portfolio como base sem pedido explícito
- **Não usar comandos NPM/Node**: O projeto é puramente estático; não tente rodar `npm install` ou `npm run` a menos que um `package.json` seja explicitamente introduzido.
- **Não quebrar o monolito sem plano**: Apesar de grande, o `index.html` é o local de todas as seções. Não tente separar arquivos sem um plano de build (ex: Vite).
- **Não alterar tokens no site.css sem verificar index.html**: O Tailwind é configurado inline no HTML; alterações no CSS global devem respeitar os tokens definidos no script de config do Tailwind.
- **Não reexecutar `git init` em um repositório já inicializado**: Antes de qualquer comando Git estrutural, confirmar branch e remote com `git status --short --branch`, `git branch --show-current` e `git remote -v`.
- **Não recriar `origin` se ele já existir**: O remote atual do Portfolio é `https://github.com/henrico-design-amaral/portfolio.git`.
- **Não voltar o remote para `Portfolio.git` uppercase**: O GitHub aceita redirect, mas avisa que o repositório oficial foi movido para `portfolio.git`.
- **Não publicar GitHub Pages por fora do fluxo da branch principal sem necessidade**: O fluxo atual é commit em `main` + push para `origin/main`.
- **Não criar headers de seção isolados quando o `section-header` atende**: Método, Cases e Impacto usam o mesmo padrão canônico de kicker, título, divisor e subtítulo.
- **Não deixar conteúdo principal invisível por padrão dependendo de animação**: O HTML/CSS deve ser legível sem GSAP; estados ocultos devem ser preparados pelo JavaScript quando ele estiver disponível.
- **Não criar motion específico demais por seção sem necessidade**: Usar `revealSectionSystem()` para headers, chips, rodapés editoriais e cards antes de inventar timelines paralelas.

## Não repetir no processo

Evitar:

- começar pelo código sem ler a memória
- aceitar pedido literal sem avaliar impacto
- deixar decisões importantes sem registro
- ignorar problemas abertos
- tratar inferência como fato
- fingir que algo foi confirmado sem ler arquivos
- não atualizar changelog após decisão relevante

## Não repetir em microtextos editoriais

- **Não recriar chips, microflows ou rodapés editoriais por seção sem necessidade**: a revisão de 2026-05-17 consolidou microtexto mínimo, geralmente uma linha principal por seção.
- **Não usar microcódigos, coordenadas falsas ou rótulos técnicos performáticos**: remover padrões como `HUMAN LAYER / ACTIVE`, `SYSTEM VIEW` e similares quando não ajudam leitura, contraste, narrativa ou conversão.
- **Não aumentar microtextos para competir com o conteúdo principal**: microstats devem funcionar como detalhe visual legível e discreto.
- **Não inserir microtextos dentro dos cards de Impacto**: a camada editorial deve ficar no entorno da seção.
- **Não usar microtextos como decoração barulhenta**: eles devem reforçar leitura sistêmica, não parecer badge promocional.

## Não repetir em blur e exit animations

- **Não omitir blur nas animações de entrada**: blur progressivo (4-10px → 0) deve acompanhar opacity + translateY para transições mais cinematográficas.
- **Não esquecer exit animations**: usar `toggleActions: 'play none none reverse'` com `end` definido para que elementos revertam suavemente ao scrollar para cima.
- **Não usar blur string misturado com numérico**: padronizar `filter: blur(Xpx)` como número, não como string condicional. O campo `blur` no config deve ser numérico.
- **Não aplicar blur no section inteiro**: blur deve ser direcionado a elementos específicos (headers, cards, textos), não no container da seção — blur no container afeta tudo dentro dele.
- **Não esquecer `will-change`**: elementos que recebem animação de `filter: blur()` + `opacity` + `transform` devem ter `will-change: transform, filter, opacity` para GPU acceleration.
- **Não deixar scroll-linked effects fora do `if (!motionReduced)`**: hero scroll blur e section dividers scrub devem respeitar `prefers-reduced-motion`.

## Não repetir com clearProps em reverse animations

- **Não usar `clearProps` em animações que usam `toggleActions` com `reverse`**: o GSAP limpa as propriedades inline ao final da reversão, causando "pulo" visual quando o usuário scrolla de volta para cima.
- **Exemplo do problema**: `gsap.fromTo(card, { y: 24, opacity: 0 }, { y: 0, opacity: 1, clearProps: 'filter,opacity,transform', scrollTrigger: { toggleActions: 'play none none reverse' } })`
- **Solução**: remover `clearProps` dessas animações. O CSS pode controlar valores default se necessário, ou usar `onReverseComplete` callback para cleanup controlado.
- **Afeta**: case cards, `reveal()` function, `revealSectionSystem()` cards selector.
- **Verificar sempre**: antes de adicionar `clearProps` em qualquer animação com ScrollTrigger, confirmar se `toggleActions` inclui `reverse`.

## Não repetir em backgrounds e motion

- **Não voltar ao grid duplo**: o padrão consolidado agora é um único grid global fixo; não recriar grid grande com microgrid interno.
- **Não usar topologias ambientais globais ou SVGs técnicos sem função**: fundos devem ser progressão tonal, não mapa técnico falso.
- **Não remover todos os motions úteis**: preservar fade/translate/stagger sutis e os motions comportamentais dos cards de cases, desde que não atrasem leitura.
- **Não esconder conteúdo principal por padrão com GSAP**: usar `immediateRender: false` e garantir leitura sem depender da animação.

## Regra final

Se uma solução parecer genérica, decorativa ou desconectada do posicionamento de Henrico, não usar.

## Não manter bibliotecas de agentes dentro do Portfolio

Não adicionar ao projeto:

- _agents/
- _agents/skills/
- bibliotecas completas de prompts
- repositórios externos de skills
- clones de agentes
- frameworks auxiliares que não façam parte do site publicado

Esses materiais devem ficar na biblioteca central Henrico-Agent-OS fora deste projeto.

O Portfolio deve conter apenas arquivos necessários ao site, documentação, memória local e assets reais do portfólio.

## Não repetir na gestão de ativos

- **Não apagar referências de cases**: Materiais em `case-references/` são vitais para a memória do projeto, mesmo que não sejam públicos.
- **Não publicar material bruto ou sensível**: Nunca commitar `case-references/` ou arquivos que contenham dados reais de clientes sem anonimização.
- **Não usar _archive para materiais ativos**: Usar nomes semânticos como `case-references/` para evitar confusão com lixo ou arquivos deletáveis.

## Não repetir na Seção de Impacto

- **Não usar placeholders "0" em KPIs**: Nunca deixar valores zerados no HTML indexável. O valor real deve estar no markup para SEO e Acessibilidade.
- **Não usar métricas performativas**: Evitar números bonitos sem lastro documental ou justificativa qualitativa.
- **Não manter KPI sem lastro textual localizado**: se o número não aparecer em docs, case-references textuais ou memória confiável, substituir por evidência qualitativa concreta.
- **Não chamar a seção de "Impacto mensurável" quando parte das evidências for qualitativa**: usar "Impacto observável" ou outro termo compatível com a natureza da evidência.
- **Não priorizar animação sobre o dado**: A animação (contador) é um bônus visual; o dado (número) é a infraestrutura da informação. O site deve ser funcional e informativo sem JS.
- **Não transformar requisitos obrigatórios de sistema, compliance ou rastreabilidade em métricas promocionais de performance.**
- **Não usar a expressão "100 auditável" ou métricas percentuais para conformidade regulatória.** Priorizar linguagem qualitativa como "Rastreabilidade completa" ou "Fluxos regulados simplificados".
- **Não usar jargões internos sem contexto**: Evitar termos como "PDRs" na seção de impacto; usar linguagem compreensível como "pontos".
- **Preservar a densidade de dados da seção Impacto**: Cada card deve manter as 5 camadas de informação (Cliente, Dimensão, Evidência, Descrição, Tipo) para garantir profundidade técnica.
- **Não regredir para o layout "KPI Wall"**: O grid 2x2 editorial com split-cards é o padrão final. Não usar cards verticais simples com números gigantes isolados.
- **Não esconder conteúdo principal em atributos data-target**: Todo texto de impacto deve estar visível no HTML inicial para garantir rastreabilidade por crawlers e leitores de tela sem dependência de JavaScript.

## Não repetir na Seção Impacto — CSS

- **Não tentar sobrescrever classes Tailwind com seletores CSS que incluem escape de caracteres especiais** (ex: `.impact-cell .font-display.lg\:text-\[3\.5rem\]`). Esses seletores nunca matcham em runtime Tailwind JIT. Usar classes semânticas próprias (ex: `.impact-evidence`).

- **Não usar apenas `min-height` para equalizar cards** quando o conteúdo varia entre eles. Usar `grid-auto-rows` no container pai + `height: 100%` no card. `min-height` permite que cards com conteúdo maior cresçam, quebrando a simetria.

- **Não declarar tipografia de títulos de seção apenas via classes Tailwind no HTML** sem um seletor CSS explícito de fallback. Se as classes Tailwind forem removidas durante refactoring, o elemento herda a fonte do body. Sempre declarar `font-family`, `font-weight` e `font-size` no CSS como propriedade do seletor semântico.

- **Não usar `flex: 1` em `impact-dimension` sem `overflow: hidden` em `impact-desc`**. O `flex: 1` na dimensão empurra a tag para o rodapé, mas a descrição precisa de `overflow: hidden` para não vazar a altura fixada pelo `grid-auto-rows`.

- **Não usar `multi_replace_file_content` com blocos grandes em arquivos CRLF**. O seletor de `TargetContent` falha porque o arquivo tem `\r\n` mas o seletor usa `\n`. Preferir `replace_file_content` com um único ponto de ancoragem, ou usar PowerShell para operações de string complexas.

- **Não repetir o padrão de `max-w-[1560px] mx-auto` sem padding lateral explícito no container filho**. O container da seção Impacto usa agora `px-6 md:px-12` diretamente no div do container.
