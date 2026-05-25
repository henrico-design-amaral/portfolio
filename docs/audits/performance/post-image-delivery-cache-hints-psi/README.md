# PSI Audit — Post Image Delivery and Cache Hints Fix

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI realizada após o merge da correção `perf: add responsive case image sources`.

A correção adicionou variantes responsivas `640w` e `960w` para as imagens dos cases e atualizou o `index.html` com `srcset` e `sizes`.

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1622.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1622.json`

## Resultados atuais

### Mobile

- Performance: 81
- Acessibilidade: 100
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 3,5 s
- LCP: 3,6 s
- TBT: 0 ms
- CLS: 0
- Speed Index: 4,7 s
- TTI: 3,6 s

Diagnósticos ainda presentes:

- Reflow forçado.
- Renderizar solicitações de bloqueio: economia estimada de 1.930 ms.
- Árvore de dependência da rede.
- Melhorar entrega de imagens: economia estimada de 27 KiB.
- Minimizar trabalho da thread principal: 2,1 s.
- Usar ciclos de vida eficientes de cache: economia estimada de 76 KiB.

### Desktop

- Performance: 84
- Acessibilidade: 100
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 1,4 s
- LCP: 1,4 s
- TBT: 0 ms
- CLS: 0,031
- Speed Index: 3,8 s
- TTI: 1,4 s

Diagnósticos ainda presentes:

- Detalhamento da LCP.
- Reflow forçado.
- Renderizar solicitações de bloqueio: economia estimada de 530 ms.
- Árvore de dependência da rede.
- Usar ciclos de vida eficientes de cache: economia estimada de 123 KiB.

## Comparação com auditoria anterior

Auditoria anterior:

`docs/audits/performance/post-residual-color-contrast-fix-psi/`

### Mobile

- Performance: 82 → 81
- Acessibilidade: 100 → 100
- Boas práticas: 100 → 100
- SEO: 100 → 100
- Image delivery: 410 KiB → 27 KiB
- Cache: 499 KiB → 76 KiB

### Desktop

- Performance: 97 → 84
- Acessibilidade: 100 → 100
- Boas práticas: 100 → 100
- SEO: 100 → 100
- Image delivery: 568 KiB → não aparece no resumo
- Cache: 637 KiB → 123 KiB

## Diagnóstico

A correção de entrega de imagens funcionou no objetivo principal.

No mobile, o desperdício reportado em `image-delivery-insight` caiu de 410 KiB para 27 KiB.

No desktop, o diagnóstico `Melhorar a entrega de imagens` não aparece mais no resumo PSI.

Também houve redução relevante no diagnóstico de cache, embora nenhuma correção direta de cache tenha sido aplicada.

Entretanto, o score desktop caiu de 97 para 84 nesta execução, com piora perceptível em Speed Index. Essa queda deve ser tratada com cautela: pode ser variação de execução, cache/CDN ou mudança real de carregamento. Não deve ser corrigida nesta branch sem nova inspeção.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a validação pós-correção de imagens responsivas.

## Próximo passo recomendado

Criar uma nova branch de inspeção para entender a queda no desktop e os diagnósticos residuais:

`perf/inspect-post-image-delivery-regression`

Escopo sugerido:

- comparar JSON anterior e atual;
- inspecionar `Speed Index`, `LCP`, `network-dependency-tree-insight`, `forced-reflow-insight` e `render-blocking-resources`;
- verificar se a queda desktop é variação de PSI ou regressão real;
- não alterar código até a causa estar clara.

## Fora do escopo

- Não alterar imagens.
- Não alterar HTML.
- Não alterar CSS.
- Não alterar JavaScript.
- Não mexer em acessibilidade.
- Não aplicar nova otimização sem inspeção.
