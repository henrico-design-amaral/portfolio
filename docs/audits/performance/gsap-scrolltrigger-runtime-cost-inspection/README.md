# Performance Inspection — GSAP and ScrollTrigger Runtime Cost

## Contexto

Inspeção técnica do custo de runtime de GSAP e ScrollTrigger após a remoção do Tailwind CDN.

Esta branch vem depois de:

- `perf: replace tailwind cdn with local css`
- `docs: add post-tailwind local css PSI validation`
- `docs: inspect post-tailwind render blocking network tree`

A validação pós-Tailwind local mostrou:

- Mobile Performance: 87
- Desktop Performance: 99
- Mobile Accessibility: 100
- Desktop Accessibility: 100
- Unused JavaScript resolvido
- Tailwind CDN ausente dos JSONs extraídos

Ainda permanecem diagnósticos residuais de:

- forced reflow;
- render blocking;
- network dependency tree.

## Objetivo

Entender se GSAP e ScrollTrigger são a próxima frente real de performance antes de qualquer alteração em código.

## Arquivos gerados

- `gsap-scrolltrigger-code-references.txt`
- `gsap-scrolltrigger-script-costs.csv`
- `gsap-scrolltrigger-script-costs-normalized.csv`
- `forced-reflow-gsap-matches.txt`
- `mobile-forced-reflow-insight-items.json`
- `desktop-forced-reflow-insight-items.json`
- `mobile-bootup-time-items.json`
- `desktop-bootup-time-items.json`
- `mobile-mainthread-work-breakdown-items.json`
- `desktop-mainthread-work-breakdown-items.json`

## Scripts externos identificados

O `index.html` ainda carrega:

- `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`

Ambos usam `defer`.

## Uso no código

### index.html

Existe um bloco inline específico para animações dos cards de cases.

Esse bloco:

- roda em `window.addEventListener('load')`;
- verifica `typeof gsap !== 'undefined'`;
- verifica `typeof ScrollTrigger !== 'undefined'`;
- desativa motion quando `prefers-reduced-motion: reduce`;
- desativa motion em telas até `768px`;
- aplica animações de entrada nos `.case-card`;
- aplica animações em título, descrição e SVG comportamental dos cards;
- cria múltiplos `scrollTrigger` por card.

### assets/js/site.js

O arquivo principal registra:

- `gsap.registerPlugin(ScrollTrigger)`

E usa GSAP/ScrollTrigger para:

- hero entrance;
- reveal de seções;
- cards;
- footer;
- elementos com `data-parallax`;
- parallax em imagens de cases;
- efeito de saída visual no hero;
- magnetic hover em elementos interativos.

## Evidências de forced reflow

Os arquivos `mobile-forced-reflow-insight-items.json` e `desktop-forced-reflow-insight-items.json` apontam repetidamente para:

- `ScrollTrigger.min.js`
- `gsap.min.js`

No mobile, há um reflow relevante associado a `ScrollTrigger.min.js` com `reflowTime` de `231.661 ms`.

Também aparecem reflows associados a:

- `ScrollTrigger.min.js`: `26.05 ms`, `26.025 ms`, `2.749 ms` e ocorrências menores;
- `gsap.min.js`: `49.371 ms`.

No desktop, também há ocorrências associadas a `ScrollTrigger.min.js` e `gsap.min.js`, mas com tempos menores.

## Evidências de bootup/script cost

O CSV `gsap-scrolltrigger-script-costs.csv` registra custo de bootup por recurso.

A leitura geral indica:

- ScrollTrigger/GSAP ainda aparecem como custo relevante;
- `assets/js/site.js` também aparece, mas o problema de reflow aponta com mais força para ScrollTrigger;
- o custo mobile é mais sensível que o desktop.

## Diagnóstico

GSAP em si não deve ser removido às cegas.

O problema mais claro é o uso amplo de ScrollTrigger:

- múltiplas animações de entrada;
- múltiplos triggers por seção;
- parallax;
- scrubbing;
- animações em cards;
- animações duplicadas entre bloco inline e `assets/js/site.js`.

O forced reflow residual está mais ligado a ScrollTrigger do que ao CSS local ou às imagens.

A próxima correção deve testar redução de ScrollTrigger de forma controlada, especialmente no mobile e em animações decorativas.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a inspeção do custo de GSAP/ScrollTrigger.

## Próximo passo recomendado

Criar uma branch técnica para reduzir custo de ScrollTrigger sem remover a assinatura visual principal:

`perf/reduce-scrolltrigger-runtime-cost`

Escopo sugerido:

1. Remover ou migrar o bloco inline de animação dos case cards para `assets/js/site.js`.
2. Evitar criação de múltiplos `ScrollTrigger` redundantes para os mesmos cards.
3. Manter animações principais da hero.
4. Reduzir ou desativar parallax com `scrub` no mobile.
5. Garantir que `prefers-reduced-motion` e `max-width: 768px` realmente evitem inicialização de triggers pesados.
6. Considerar CSS animation para micro-efeitos dos SVGs dos cards.
7. Rodar PSI depois da alteração.

## Fora do escopo

- Não remover GSAP nesta branch.
- Não remover ScrollTrigger nesta branch.
- Não alterar layout.
- Não alterar copy.
- Não alterar imagens.
- Não alterar acessibilidade.
- Não alterar Tailwind.
- Não mexer em fontes.
