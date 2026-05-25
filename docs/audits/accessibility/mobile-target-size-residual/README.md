# Mobile Target Size Residual — Node Inspection

## Contexto

Inspeção técnica do alerta residual de `target-size` após a validação mobile em:

`docs/audits/performance/post-mobile-target-size-fix-psi/`

A correção anterior tentou aumentar o botão mobile e o espaçamento visual entre `nav-lang` e `#mobile-menu-toggle`.

## Nó reportado

Audit ID:

`target-size`

Elemento:

`button#mobile-menu-toggle`

Selector:

`body.font-body > nav#nav > div.max-w-[1440px] > button#mobile-menu-toggle`

Node label:

`Abrir menu`

## Diagnóstico do Lighthouse

O Lighthouse ainda reporta:

- alvo parcialmente obstruído;
- menor espaço calculado: `22.7px by 52px`;
- mínimo esperado: `24px by 24px`;
- safe clickable space: `13px`;
- mínimo esperado: `24px`.

## Interpretação

A correção anterior melhorou o tamanho nominal do botão, mas não resolveu o cálculo de área segura.

O problema residual parece estar menos relacionado ao tamanho absoluto do botão e mais relacionado a:

- proximidade entre `nav-lang` e `#mobile-menu-toggle`;
- possível colisão/obstrução lateral;
- cálculo de safe clickable space dentro do container do nav;
- espaço útil insuficiente ao redor do botão no mobile.

## Arquivo gerado

- `target-size-residual-node.json`

## Decisão

Não corrigir nesta branch.

Esta branch registra apenas a inspeção do nó residual.

## Próximo passo recomendado

Criar uma branch de correção específica:

`a11y/fix-mobile-nav-hit-area`

Escopo sugerido:

- ajustar a estrutura do nav mobile;
- garantir área segura mínima real ao redor do botão;
- evitar pseudo-elemento com `pointer-events: none` como solução principal;
- considerar aumentar padding lateral do container;
- considerar separar visualmente e estruturalmente `nav-lang` e `mobile-menu-toggle`;
- validar novamente com PSI mobile.

Contraste continua fora do escopo.
