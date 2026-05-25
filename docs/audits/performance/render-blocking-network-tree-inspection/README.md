# Performance Inspection — Render Blocking and Network Tree

## Contexto

Inspeção técnica após a segunda rodada PSI pós-correção de imagens responsivas.

A frente de acessibilidade está encerrada com 100/100 em mobile e desktop.

A correção de imagens responsivas foi mantida após segunda validação, pois a queda desktop anterior não se confirmou.

Fonte base desta inspeção:

`docs/audits/performance/second-post-image-delivery-psi/`

## Arquivos gerados

- `render-blocking-network-tree-summary.csv`
- `script-loading-references.txt`
- `mobile-network-dependency-tree-insight-items.json`
- `desktop-network-dependency-tree-insight-items.json`
- `mobile-forced-reflow-insight-items.json`
- `desktop-forced-reflow-insight-items.json`
- `mobile-mainthread-work-breakdown-items.json`
- `desktop-mainthread-work-breakdown-items.json`
- `mobile-bootup-time-items.json`
- `desktop-bootup-time-items.json`
- `mobile-unused-javascript-items.json`
- `desktop-unused-javascript-items.json`

## Diagnósticos encontrados

### Mobile

- `network-dependency-tree-insight`: score 0
- `forced-reflow-insight`: score 0
- `unused-javascript`: score 0,5, economia estimada de 38 KiB
- `bootup-time`: ok, 0,5 s
- `mainthread-work-breakdown`: ok, 1,3 s
- `script-treemap-data`: ok

### Desktop

- `network-dependency-tree-insight`: score 0
- `unused-javascript`: score 0,5, economia estimada de 38 KiB
- `bootup-time`: ok, 0,5 s
- `forced-reflow-insight`: ok
- `mainthread-work-breakdown`: ok, 1,1 s
- `script-treemap-data`: ok

## Scripts identificados no HTML

O `index.html` carrega:

- GSAP via CDN com `defer`
- ScrollTrigger via CDN com `defer`
- Tailwind via CDN sem `defer`
- configuração inline do Tailwind
- script inline com `window.addEventListener('load')`
- `assets/js/site.js` com `defer`

## Leitura técnica

A árvore de dependência de rede permanece como diagnóstico crítico em mobile e desktop.

A thread principal e o tempo de execução de JavaScript não aparecem como grandes gargalos nesta rodada.

O JavaScript não utilizado aparece com economia estimada de 38 KiB, mas não é o maior problema de performance neste momento.

O sinal mais relevante é a presença de dependências externas no caminho de carregamento, especialmente:

- Tailwind CDN em runtime;
- GSAP CDN;
- ScrollTrigger CDN.

A suspeita principal é que o uso do Tailwind CDN em produção esteja contribuindo para a árvore de dependência de rede e para o custo inicial de renderização.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a inspeção dos diagnósticos de render blocking, network tree e scripts.

## Próximo passo recomendado

Criar uma branch de investigação específica para comparar alternativas de remoção ou redução do Tailwind CDN em produção:

`perf/inspect-tailwind-cdn-runtime-cost`

Escopo sugerido:

- verificar impacto do `https://cdn.tailwindcss.com`;
- avaliar se o CSS gerado deve ser local/buildado;
- comparar risco de migração para Tailwind build;
- mapear classes usadas no `index.html`;
- não remover CDN ainda;
- não alterar visual;
- não alterar motion;
- não alterar GSAP nesta primeira etapa.

## Possíveis frentes futuras

Depois da investigação do Tailwind CDN:

1. Tailwind build/local CSS
2. preconnect para CDNs externos
3. revisão de GSAP/ScrollTrigger
4. inspeção de forced reflow mobile
5. service worker ou estratégia de cache, apenas se fizer sentido para GitHub Pages

## Fora do escopo

- Não alterar HTML.
- Não alterar CSS.
- Não alterar JavaScript.
- Não alterar imagens.
- Não mexer em acessibilidade.
- Não aplicar otimização sem branch própria.
