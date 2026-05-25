# PSI Audit — Post ScrollTrigger Runtime Reduction

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI realizada após o merge da branch:

`perf: reduce scrolltrigger runtime cost`

A alteração removeu o bloco inline de GSAP/ScrollTrigger dos cards de cases no `index.html`.

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1709.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1710.json`

## Resultados atuais

### Mobile

- Performance: 88
- Acessibilidade: 100
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 2,9 s
- LCP: 2,9 s
- TBT: 0 ms
- CLS: 0
- Speed Index: 4,5 s
- TTI: 2,9 s

Diagnósticos ainda presentes:

- Reflow forçado.
- Renderizar solicitações de bloqueio: economia estimada de 1.190 ms.
- Árvore de dependência da rede.
- Melhorar entrega de imagens: economia estimada de 27 KiB.
- Usar ciclos de vida eficientes de cache: economia estimada de 81 KiB.

### Desktop

- Performance: 99
- Acessibilidade: 100
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 0,7 s
- LCP: 0,7 s
- TBT: 0 ms
- CLS: 0,031
- Speed Index: 0,7 s
- TTI: 0,7 s

Diagnósticos ainda presentes:

- Reflow forçado.
- Renderizar solicitações de bloqueio: economia estimada de 460 ms.
- Árvore de dependência da rede.
- Usar ciclos de vida eficientes de cache: economia estimada de 128 KiB.

## Comparação com auditoria anterior

Auditoria anterior:

`docs/audits/performance/post-tailwind-local-css-psi/`

### Mobile

- Performance: 87 → 88
- Acessibilidade: 100 → 100
- FCP: 2,9 s → 2,9 s
- LCP: 3,0 s → 2,9 s
- TBT: 0 ms → 0 ms
- CLS: 0 → 0
- Speed Index: 4,4 s → 4,5 s
- TTI: 3,0 s → 2,9 s
- Render blocking: 1.180 ms → 1.190 ms
- Image delivery: 27 KiB → 27 KiB
- Cache: 81 KiB → 81 KiB

### Desktop

- Performance: 99 → 99
- Acessibilidade: 100 → 100
- FCP: 0,8 s → 0,7 s
- LCP: 0,8 s → 0,7 s
- TBT: 0 ms → 0 ms
- CLS: 0,032 → 0,031
- Speed Index: 0,8 s → 0,7 s
- TTI: 0,8 s → 0,7 s
- Render blocking: 490 ms → 460 ms
- Cache: 128 KiB → 128 KiB

## Diagnóstico

A remoção do bloco inline de GSAP/ScrollTrigger dos cards de cases não gerou regressão.

Houve melhora marginal:

- Mobile Performance subiu de 87 para 88.
- Mobile LCP caiu de 3,0 s para 2,9 s.
- Mobile TTI caiu de 3,0 s para 2,9 s.
- Desktop manteve Performance 99.
- Desktop FCP, LCP, Speed Index e TTI caíram de 0,8 s para 0,7 s.
- Desktop render blocking caiu de 490 ms para 460 ms.

Por outro lado, o diagnóstico de `forced reflow` continua presente em mobile e desktop.

Isso indica que a redução inicial foi válida, mas insuficiente para eliminar o gargalo principal.

## Decisão

Manter a remoção do bloco inline.

Não há evidência de regressão estrutural.

## Próximo passo recomendado

Criar uma branch de inspeção específica para os nós residuais após esta redução:

`perf/inspect-post-scrolltrigger-reduction-reflow`

Escopo sugerido:

- extrair `forced-reflow-insight` atualizado;
- comparar antes/depois;
- verificar se os nós ainda apontam para `ScrollTrigger.min.js`;
- verificar se o custo residual vem de `assets/js/site.js`;
- identificar se parallax/scrub ainda são os principais responsáveis;
- não alterar código nesta próxima branch.

## Fora do escopo

- Não mexer em GSAP.
- Não mexer em ScrollTrigger.
- Não mexer em Tailwind.
- Não mexer em imagens.
- Não mexer em fontes.
- Não alterar layout.
- Não alterar copy.
