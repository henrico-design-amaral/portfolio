# Performance Inspection — Post Image Delivery Regression

## Contexto

Inspeção comparativa após a correção `perf: add responsive case image sources`.

A correção anterior adicionou variantes responsivas das imagens dos cases e atualizou o `index.html` com `srcset` e `sizes`.

A validação pós-correção mostrou melhora clara em `image-delivery-insight`, mas também queda relevante no score desktop.

## Auditorias comparadas

### Antes

`docs/audits/performance/post-residual-color-contrast-fix-psi/`

### Depois

`docs/audits/performance/post-image-delivery-cache-hints-psi/`

## Arquivos gerados

- `psi-before-after-key-audits.csv`
- `desktop-before-after-comparison.csv`

## Resultado resumido

### Mobile

- Performance: 82 → 81
- Acessibilidade: 100 → 100
- Image delivery: 410 KiB → 27 KiB
- Cache: 499 KiB → 76 KiB
- Speed Index: 3,6 s → 4,7 s
- FCP: 3,6 s → 3,5 s
- LCP: 3,6 s → 3,6 s
- TBT: 0 ms → 0 ms

### Desktop

- Performance: 97 → 84
- Acessibilidade: 100 → 100
- Image delivery: 568 KiB → removido do resumo
- Cache: 637 KiB → 123 KiB
- FCP: 0,8 s → 1,4 s
- LCP: 0,9 s → 1,4 s
- Speed Index: 1,1 s → 3,8 s
- TBT: 110 ms → 0 ms
- Max Potential FID: 360 ms → 20 ms
- Main thread: 1,4 s → 1,7 s
- CLS: 0,031 → 0,031

## Diagnóstico

A correção de imagens funcionou no objetivo principal:

- no mobile, o desperdício de image delivery caiu de 410 KiB para 27 KiB;
- no desktop, `image-delivery-insight` deixou de aparecer no resumo;
- o cache também melhorou de forma relevante.

A queda desktop parece concentrada principalmente em percepção visual:

- `speed-index` piorou de 1,1 s para 3,8 s;
- `first-contentful-paint` piorou de 0,8 s para 1,4 s;
- `largest-contentful-paint` piorou de 0,9 s para 1,4 s.

Ao mesmo tempo, métricas de bloqueio melhoraram:

- `total-blocking-time` caiu de 110 ms para 0 ms;
- `max-potential-fid` caiu de 360 ms para 20 ms.

Isso indica que a regressão não parece estar ligada a JavaScript bloqueando a thread principal. A hipótese mais provável está entre:

1. variação de execução do PSI;
2. cache/CDN ainda estabilizando a nova publicação;
3. escolha diferente de recurso visual após `srcset/sizes`;
4. mudança na ordem de carregamento percebida pelo Lighthouse;
5. impacto visual do Speed Index sem piora correspondente em TBT/CLS.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a inspeção comparativa da queda desktop após a correção de imagens responsivas.

## Próximo passo recomendado

Antes de reverter ou alterar `srcset/sizes`, rodar uma nova validação PSI em outro momento para confirmar se a queda desktop persiste.

Branch sugerida:

`docs/add-second-post-image-delivery-psi-run`

Se a queda persistir, abrir uma branch técnica específica:

`perf/inspect-desktop-speed-index-lcp`

Escopo sugerido:

- inspecionar LCP element no JSON;
- inspecionar filmstrip/screenshot se disponível;
- verificar qual imagem/recurso o browser escolheu no desktop;
- revisar `sizes`;
- comparar carregamento com e sem `srcset`;
- evitar mexer em imagens se a causa for render blocking externo.

## Fora do escopo

- Não alterar HTML.
- Não alterar CSS.
- Não alterar JavaScript.
- Não alterar imagens.
- Não reverter `srcset`.
- Não aplicar nova otimização sem segunda validação.
