# PSI Audit — Post Structural A11Y Fix

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI realizada após o merge da correção estrutural `a11y: fix case card semantics and mobile target`.

A correção anterior atacou:

- `label-content-name-mismatch` nos cards de cases
- `target-size` no botão mobile `#mobile-menu-toggle`

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1419.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1423.json`

## Resultados atuais

### Mobile

- Performance: 78
- Acessibilidade: 93
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 3,6 s
- LCP: 4,0 s
- TBT: 0 ms
- CLS: 0
- Speed Index: 4,7 s
- TTI: 4,0 s

Diagnósticos ainda presentes:

- Contraste insuficiente.
- Áreas de toque sem tamanho ou espaçamento suficiente.
- Reflow forçado.
- Render blocking.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Cache.

Diagnóstico removido:

- `label-content-name-mismatch` não aparece mais no resumo mobile.

### Desktop

- Performance: 80
- Acessibilidade: 96
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 2,0 s
- LCP: 2,0 s
- TBT: 0 ms
- CLS: 0,032
- Speed Index: 2,0 s
- TTI: 2,0 s

Diagnósticos ainda presentes:

- Contraste insuficiente.
- Render blocking.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Cache.

Diagnósticos removidos:

- `label-content-name-mismatch` não aparece mais no resumo desktop.
- `target-size` não aparece no resumo desktop.

## Comparação com validação anterior

Auditoria anterior:

`docs/audits/performance/post-lighthouse-a11y-fix-psi/`

### Mobile

- Performance: 79 → 78
- Acessibilidade: 93 → 93
- Boas práticas: 100 → 100
- SEO: 100 → 100
- `label-content-name-mismatch`: presente → removido
- `target-size`: presente → ainda presente

### Desktop

- Performance: 99 → 80
- Acessibilidade: 96 → 96
- Boas práticas: 100 → 100
- SEO: 100 → 100
- `label-content-name-mismatch`: presente → removido
- `target-size`: não aparece

## Diagnóstico

A correção estrutural dos cards de cases funcionou: o alerta de `label-content-name-mismatch` desapareceu do resumo PSI em mobile e desktop.

O problema de `target-size` ainda persiste no mobile. Isso indica que o problema restante provavelmente não está apenas no tamanho absoluto do botão, mas no espaçamento calculado entre alvos interativos próximos, especialmente entre seletor de idioma e botão de menu.

O contraste continua pendente e deve ser tratado em branch separada.

A queda de Performance desktop de 99 para 80 deve ser registrada, mas não corrigida nesta etapa. Como a branch não alterou performance diretamente e o TBT está em 0 ms, a hipótese mais provável é variação de execução, cache ou rede. Essa hipótese precisa ser validada em auditoria posterior, não assumida como regressão definitiva.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a validação pós-correção estrutural.

## Próximo passo recomendado

Criar uma branch específica para corrigir o `target-size` mobile residual:

`a11y/fix-mobile-target-size-residual`

Escopo sugerido:

- inspecionar o novo JSON mobile
- identificar o seletor exato do `target-size`
- ajustar espaçamento real entre `nav-lang` e `mobile-menu-toggle`
- não corrigir contraste nesta branch

Contraste deve ficar para uma branch posterior:

`a11y/fix-color-contrast-groups`
