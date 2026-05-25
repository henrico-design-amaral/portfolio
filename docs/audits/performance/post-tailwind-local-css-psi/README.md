# PSI Audit — Post Tailwind Local CSS Migration

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI realizada após o merge da branch `perf: replace tailwind cdn with local css`.

A alteração removeu o Tailwind CDN em runtime e passou a carregar o CSS local gerado:

`assets/css/tailwind.generated.css`

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1654.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1654.json`

## Resultados atuais

### Mobile

- Performance: 87
- Acessibilidade: 100
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 2,9 s
- LCP: 3,0 s
- TBT: 0 ms
- CLS: 0
- Speed Index: 4,4 s
- TTI: 3,0 s

Diagnósticos ainda presentes:

- Reflow forçado.
- Renderizar solicitações de bloqueio: economia estimada de 1.180 ms.
- Árvore de dependência da rede.
- Melhorar entrega de imagens: economia estimada de 27 KiB.
- Usar ciclos de vida eficientes de cache: economia estimada de 81 KiB.

### Desktop

- Performance: 99
- Acessibilidade: 100
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 0,8 s
- LCP: 0,8 s
- TBT: 0 ms
- CLS: 0,032
- Speed Index: 0,8 s
- TTI: 0,8 s

Diagnósticos ainda presentes:

- Reflow forçado.
- Solicitações que bloquearam a renderização: economia estimada de 490 ms.
- Árvore de dependência da rede.
- Usar ciclos de vida eficientes de cache: economia estimada de 128 KiB.

## Comparação com auditoria anterior

Auditoria anterior:

`docs/audits/performance/second-post-image-delivery-psi/`

### Mobile

- Performance: 81 → 87
- Acessibilidade: 100 → 100
- Boas práticas: 100 → 100
- SEO: 100 → 100
- FCP: 3,5 s → 2,9 s
- LCP: 3,6 s → 3,0 s
- TBT: 0 ms → 0 ms
- CLS: 0 → 0
- Speed Index: 4,6 s → 4,4 s
- TTI: 3,6 s → 3,0 s
- Render blocking: 2.100 ms → 1.180 ms
- Image delivery: 27 KiB → 27 KiB
- Cache: 76 KiB → 81 KiB

### Desktop

- Performance: 98 → 99
- Acessibilidade: 100 → 100
- Boas práticas: 100 → 100
- SEO: 100 → 100
- FCP: 0,8 s → 0,8 s
- LCP: 0,8 s → 0,8 s
- TBT: 0 ms → 0 ms
- CLS: 0,031 → 0,032
- Speed Index: 0,8 s → 0,8 s
- TTI: 0,8 s → 0,8 s
- Render blocking: 620 ms → 490 ms
- Cache: 123 KiB → 128 KiB

## Diagnóstico

A migração do Tailwind CDN para CSS local gerado funcionou.

O ganho mais relevante apareceu no mobile:

- Performance subiu de 81 para 87.
- FCP caiu de 3,5 s para 2,9 s.
- LCP caiu de 3,6 s para 3,0 s.
- TTI caiu de 3,6 s para 3,0 s.
- Render blocking caiu de 2.100 ms para 1.180 ms.

No desktop, a performance continuou alta e subiu de 98 para 99.

A acessibilidade permaneceu em 100 em mobile e desktop.

A economia de image delivery permaneceu estável em 27 KiB no mobile, indicando que a frente de imagens responsivas não regrediu.

O cache teve pequena piora de 76 KiB para 81 KiB no mobile e de 123 KiB para 128 KiB no desktop, mas isso é marginal perto do ganho obtido com a remoção do Tailwind CDN em runtime.

## Decisão

A substituição do Tailwind CDN por CSS local deve ser mantida.

Não há evidência de regressão estrutural nesta rodada.

## Próximo passo recomendado

Criar uma branch de inspeção para entender os diagnósticos residuais:

`perf/inspect-post-tailwind-render-blocking-network-tree`

Escopo sugerido:

- verificar se `cdn.tailwindcss.com` desapareceu da network tree;
- inspecionar os recursos restantes em render blocking;
- inspecionar a árvore de dependência de rede após a remoção do Tailwind CDN;
- mapear se GSAP/ScrollTrigger aparecem como próximos gargalos;
- não alterar código ainda.

## Fora do escopo

- Não mexer em GSAP.
- Não mexer em ScrollTrigger.
- Não mexer em imagens.
- Não mexer em acessibilidade.
- Não mexer em layout.
- Não aplicar nova otimização sem inspeção.
