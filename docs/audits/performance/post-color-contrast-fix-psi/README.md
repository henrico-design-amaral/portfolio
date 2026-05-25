# PSI Audit — Post Color Contrast Fix

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI realizada após a presença do bloco `A11Y — color contrast groups` na `main`.

O objetivo era validar se os ajustes iniciais de contraste removeriam ou reduziriam o alerta de `color-contrast` no Lighthouse/PSI.

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1528.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1528.json`

## Resultados atuais

### Mobile

- Performance: 79
- Acessibilidade: 96
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 3,5 s
- LCP: 3,9 s
- TBT: 0 ms
- CLS: 0
- Speed Index: 4,7 s
- TTI: 3,9 s

Diagnósticos ainda presentes:

- Contraste insuficiente.
- Reflow forçado.
- Render blocking.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Minimizar trabalho da thread principal.
- Cache.

### Desktop

- Performance: 98
- Acessibilidade: 96
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 0,8 s
- LCP: 0,9 s
- TBT: 40 ms
- CLS: 0,031
- Speed Index: 1,0 s
- TTI: 1,0 s

Diagnósticos ainda presentes:

- Contraste insuficiente.
- Reflow forçado.
- Render blocking.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Cache.

## Diagnóstico

A presença do bloco `A11Y — color contrast groups` não removeu o alerta de contraste no PSI.

A pontuação de acessibilidade permaneceu em:

- Mobile: 96
- Desktop: 96

Os alertas estruturais tratados antes continuam resolvidos:

- `label-content-name-mismatch` não aparece no resumo.
- `target-size` não aparece no resumo mobile.

A pendência principal de acessibilidade agora é exclusivamente contraste.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a validação pós-ajuste inicial de contraste.

## Próximo passo recomendado

Criar uma branch técnica para reinspecionar os nós residuais de contraste no JSON mais recente:

`a11y/inspect-color-contrast-residual-nodes`

Objetivo:

- extrair novamente os nós de `color-contrast`;
- comparar com a inspeção anterior;
- identificar quais seletores ainda falham;
- corrigir contraste com base nos nós atuais, não por aproximação visual.
