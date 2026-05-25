# PSI Audit — Post Residual Color Contrast Fix

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI realizada após o merge da correção `a11y: fix residual color contrast selectors`.

A correção atacou os seletores residuais de contraste identificados na inspeção anterior, que havia reduzido os nós de `color-contrast` de 48 para 13.

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1604.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1605.json`

## Resultados atuais

### Mobile

- Performance: 82
- Acessibilidade: 100
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 3,6 s
- LCP: 3,6 s
- TBT: 0 ms
- CLS: 0
- Speed Index: 3,6 s
- TTI: 3,6 s

Diagnósticos ainda presentes:

- Reflow forçado.
- Renderizar solicitações de bloqueio.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Minimizar trabalho da thread principal.
- Usar ciclos de vida eficientes de cache.

Diagnósticos removidos:

- `color-contrast` não aparece mais no resumo PSI mobile.
- `label-content-name-mismatch` continua ausente.
- `target-size` continua ausente.

### Desktop

- Performance: 97
- Acessibilidade: 100
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 0,8 s
- LCP: 0,9 s
- TBT: 110 ms
- CLS: 0,031
- Speed Index: 1,1 s
- TTI: 1,1 s

Diagnósticos ainda presentes:

- Reflow forçado.
- Renderizar solicitações de bloqueio.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Usar ciclos de vida eficientes de cache.

Diagnósticos removidos:

- `color-contrast` não aparece mais no resumo PSI desktop.
- `label-content-name-mismatch` continua ausente.

## Comparação com auditoria anterior

Auditoria anterior:

`docs/audits/performance/post-color-contrast-fix-psi/`

### Mobile

- Performance: 79 → 82
- Acessibilidade: 96 → 100
- Boas práticas: 100 → 100
- SEO: 100 → 100
- `color-contrast`: presente → removido

### Desktop

- Performance: 98 → 97
- Acessibilidade: 96 → 100
- Boas práticas: 100 → 100
- SEO: 100 → 100
- `color-contrast`: presente → removido

## Diagnóstico

A correção residual de contraste funcionou.

A frente estrutural de acessibilidade está fechada com sucesso:

- Mobile: Acessibilidade 100
- Desktop: Acessibilidade 100
- `color-contrast` removido
- `label-content-name-mismatch` removido
- `target-size` removido

As pendências restantes são de performance, rede, cache, imagens e render blocking, não de acessibilidade estrutural.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a validação pós-correção residual de contraste.

## Próximo passo recomendado

Encerrar a frente de acessibilidade e abrir uma nova frente separada para performance:

`perf/inspect-render-blocking-images-cache`

Escopo sugerido:

- render blocking;
- entrega de imagens;
- cache;
- árvore de dependência da rede;
- trabalho da main thread;
- reflow forçado.

Não misturar performance com novas alterações visuais.
