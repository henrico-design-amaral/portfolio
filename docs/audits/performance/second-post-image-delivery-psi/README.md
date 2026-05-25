# PSI Audit — Second Post Image Delivery Run

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Segunda rodada PSI após a correção `perf: add responsive case image sources`.

A primeira validação pós-correção mostrou melhora clara em `image-delivery-insight`, mas também queda desktop de Performance 97 para 84.

Esta segunda rodada foi executada para verificar se a queda desktop era regressão real ou variação de execução/cache/CDN.

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1629.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1629.json`

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
- Speed Index: 4,6 s
- TTI: 3,6 s

Diagnósticos ainda presentes:

- Reflow forçado.
- Renderizar solicitações de bloqueio: economia estimada de 2.100 ms.
- Árvore de dependência da rede.
- Melhorar entrega de imagens: economia estimada de 27 KiB.
- Usar ciclos de vida eficientes de cache: economia estimada de 76 KiB.

### Desktop

- Performance: 98
- Acessibilidade: 100
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 0,8 s
- LCP: 0,8 s
- TBT: 0 ms
- CLS: 0,031
- Speed Index: 0,8 s
- TTI: 0,8 s

Diagnósticos ainda presentes:

- Renderizar solicitações de bloqueio: economia estimada de 620 ms.
- Árvore de dependência da rede.
- Usar ciclos de vida eficientes de cache: economia estimada de 123 KiB.

## Comparação com primeira rodada pós-image delivery

Auditoria anterior:

`docs/audits/performance/post-image-delivery-cache-hints-psi/`

### Mobile

- Performance: 81 → 81
- Acessibilidade: 100 → 100
- FCP: 3,5 s → 3,5 s
- LCP: 3,6 s → 3,6 s
- Speed Index: 4,7 s → 4,6 s
- TBT: 0 ms → 0 ms
- Image delivery: 27 KiB → 27 KiB
- Cache: 76 KiB → 76 KiB

### Desktop

- Performance: 84 → 98
- Acessibilidade: 100 → 100
- FCP: 1,4 s → 0,8 s
- LCP: 1,4 s → 0,8 s
- Speed Index: 3,8 s → 0,8 s
- TBT: 0 ms → 0 ms
- Image delivery: ausente no resumo → ausente no resumo
- Cache: 123 KiB → 123 KiB

## Diagnóstico

A queda desktop observada na primeira validação pós-image delivery não se confirmou.

A segunda rodada voltou a apresentar desktop Performance 98, com FCP, LCP e Speed Index em 0,8 s.

Isso indica que a queda anterior foi provavelmente variação de execução, cache/CDN ou estabilização da publicação, não regressão estrutural causada pelo `srcset/sizes`.

A correção de imagens responsivas deve ser mantida.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a segunda validação PSI pós-correção de imagens.

## Próximo passo recomendado

Encerrar a investigação de regressão desktop.

A próxima frente real de performance deve ser aberta separadamente e focada em:

`perf/inspect-render-blocking-network-tree`

Escopo sugerido:

- render blocking;
- árvore de dependência da rede;
- scripts externos;
- Tailwind CDN;
- GSAP CDN;
- ordem de carregamento;
- impacto no mobile.

Não mexer em imagens responsivas, pois a correção foi validada.
