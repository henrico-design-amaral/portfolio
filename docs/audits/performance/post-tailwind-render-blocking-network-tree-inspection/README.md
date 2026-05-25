# Performance Inspection — Post Tailwind Render Blocking and Network Tree

## Contexto

Inspeção técnica após a migração do Tailwind CDN para CSS local gerado.

Fonte base:

`docs/audits/performance/post-tailwind-local-css-psi/`

A validação anterior confirmou:

- Mobile Performance: 87
- Desktop Performance: 99
- Mobile Accessibility: 100
- Desktop Accessibility: 100
- Tailwind CDN removido do `index.html`
- CSS local carregado via `assets/css/tailwind.generated.css`

## Objetivo

Identificar os diagnósticos residuais após a remoção do Tailwind CDN:

- network dependency tree;
- render blocking;
- forced reflow;
- bootup time;
- unused JavaScript;
- fontes externas;
- CSS local;
- GSAP/ScrollTrigger.

## Arquivos gerados

- `post-tailwind-render-blocking-network-tree-summary.csv`
- `post-tailwind-network-matches.txt`
- `post-tailwind-head-loading-references.txt`
- `tailwind-cdn-absence-check.txt`
- `mobile-network-dependency-tree-insight-items.json`
- `desktop-network-dependency-tree-insight-items.json`
- `mobile-forced-reflow-insight-items.json`
- `desktop-forced-reflow-insight-items.json`
- `mobile-bootup-time-items.json`
- `desktop-bootup-time-items.json`
- `mobile-mainthread-work-breakdown-items.json`
- `desktop-mainthread-work-breakdown-items.json`

## Resultado resumido

### Mobile

- `network-dependency-tree-insight`: score 0
- `forced-reflow-insight`: score 0
- `unused-javascript`: score 1
- `bootup-time`: score 1, 0,2 s
- `mainthread-work-breakdown`: score 1, 1,5 s

### Desktop

- `network-dependency-tree-insight`: score 0
- `forced-reflow-insight`: score 0
- `unused-javascript`: score 1
- `bootup-time`: score 1, 0,1 s
- `mainthread-work-breakdown`: score 1, 0,7 s

## Tailwind CDN

O Tailwind CDN não aparece mais nos JSONs extraídos da auditoria pós-migração.

Arquivo de verificação:

`tailwind-cdn-absence-check.txt`

Resultado esperado:

`No occurrences of cdn.tailwindcss.com were found in extracted post-Tailwind audit JSON files.`

Isso confirma que a migração para `assets/css/tailwind.generated.css` removeu a dependência de runtime do Tailwind CDN.

## Recursos ainda presentes na network tree

A árvore de dependência de rede ainda aponta:

- `assets/css/tailwind.generated.css`
- `assets/css/site.css`
- `fonts.googleapis.com`
- `fonts.gstatic.com`
- arquivos `.woff2` de Syne, Inter e JetBrains Mono

Também há preconnect já presente no `head`:

- `https://fonts.googleapis.com`
- `https://fonts.gstatic.com`

## GSAP e ScrollTrigger

A inspeção mostra que os principais sinais residuais de JavaScript e reflow estão ligados a:

- `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`
- `assets/js/site.js`

O `forced-reflow-insight` aparece com score 0 em mobile e desktop.

Os arquivos de forced reflow apontam repetidamente para `ScrollTrigger.min.js` e também para `gsap.min.js`.

No mobile, `bootup-time` mostra `ScrollTrigger.min.js` com custo maior que os demais scripts analisados.

## Diagnóstico

A remoção do Tailwind CDN resolveu a frente de JavaScript não utilizado relacionada ao Tailwind.

O problema atual não é mais Tailwind.

Os gargalos residuais se dividem em três grupos:

1. Caminho de renderização inicial:
   - Google Fonts;
   - `tailwind.generated.css`;
   - `site.css`.

2. Network dependency tree:
   - fontes externas;
   - CSS local;
   - cadeia de carregamento de fontes.

3. Reflow e runtime motion:
   - GSAP;
   - ScrollTrigger;
   - scripts de animação associados aos cards e seções.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a inspeção pós-migração Tailwind local.

## Próximo passo recomendado

Criar uma branch específica para investigar GSAP/ScrollTrigger antes de alterar qualquer script:

`perf/inspect-gsap-scrolltrigger-runtime-cost`

Escopo sugerido:

- mapear todos os usos de `gsap` e `ScrollTrigger`;
- separar animações críticas de animações decorativas;
- verificar quais animações rodam em mobile;
- avaliar se `ScrollTrigger` pode ser carregado sob demanda;
- avaliar se parte das animações pode virar CSS;
- verificar se o script inline dos cases pode migrar para `site.js`;
- não remover GSAP ainda;
- não alterar motion sem antes mapear impacto visual.

## Frentes futuras

Depois da inspeção GSAP/ScrollTrigger:

1. otimização de Google Fonts;
2. preload ou self-hosting de fontes, se fizer sentido;
3. revisão de CSS crítico/local;
4. estratégia de cache, respeitando limitações do GitHub Pages;
5. investigação separada de forced reflow mobile.

## Fora do escopo

- Não alterar HTML.
- Não alterar CSS.
- Não alterar JavaScript.
- Não mexer em imagens.
- Não mexer em acessibilidade.
- Não mexer em layout.
- Não remover GSAP ou ScrollTrigger nesta branch.
