# ScrollTrigger Runtime Cost Reduction

## Contexto

Correção controlada após a inspeção:

`docs/audits/performance/gsap-scrolltrigger-runtime-cost-inspection/`

A inspeção apontou `ScrollTrigger.min.js` e `gsap.min.js` como fontes recorrentes de forced reflow, especialmente no mobile.

## Objetivo

Reduzir custo de runtime de ScrollTrigger sem remover GSAP, sem alterar a assinatura visual principal e sem misturar esta correção com outras frentes.

## Alterações aplicadas

### index.html

Removido o bloco inline de GSAP/ScrollTrigger dos cards de cases.

Esse bloco criava múltiplos `scrollTrigger` por card para:

- entrada do card;
- entrada do título;
- entrada da descrição;
- opacidade do SVG comportamental.

A remoção evita duplicidade com animações já centralizadas em `assets/js/site.js`.

### assets/js/site.js

Quando aplicável, os blocos de parallax foram protegidos por `if (!motionReduced)`, impedindo inicialização em mobile e em usuários com `prefers-reduced-motion`.

## O que foi preservado

- GSAP continua carregado.
- ScrollTrigger continua carregado.
- Animações principais da hero foram preservadas.
- CSS/keyframes comportamentais dos cards foram preservados.
- SVGs dos cards foram preservados.
- Modal dos cases não foi alterado.
- Layout, copy, imagens e acessibilidade não foram alterados.

## Risco controlado

Esta branch não remove bibliotecas externas.

A redução é feita primeiro sobre duplicidade e inicialização desnecessária.

## Validação local

Executar:

`npm run build:css`

Executar servidor local:

`python -m http.server 8080`

Checar visualmente:

- hero;
- nav desktop;
- nav mobile;
- cards;
- modal;
- scroll;
- PT/EN;
- mobile.

## Próximo passo recomendado

Após merge, rodar PSI em branch documental:

`docs/add-post-scrolltrigger-reduction-psi-validation`

Validar:

- Performance mobile;
- Performance desktop;
- forced reflow;
- bootup-time;
- mainthread-work-breakdown;
- accessibility;
- regressão visual perceptível.

## Fora do escopo

- Não remover GSAP.
- Não remover ScrollTrigger.
- Não mexer em Tailwind.
- Não mexer em imagens.
- Não mexer em fontes.
- Não mexer em cache.
- Não alterar copy.
- Não redesenhar seções.
