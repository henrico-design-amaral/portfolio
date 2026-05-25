# Color Contrast Residual Nodes

## Contexto

Reinspeção dos nós residuais de `color-contrast` após a presença do bloco `A11Y — color contrast groups` na `main`.

A auditoria analisada está em:

`docs/audits/performance/post-color-contrast-fix-psi/`

## Arquivos gerados

- `color-contrast-residual-nodes.csv`
- `comparison-summary.csv`

## Resultado da comparação

| Audit ID | Antes | Depois | Delta |
|---|---:|---:|---:|
| `color-contrast` | 48 | 13 | -35 |

## Leitura

A primeira correção de contraste reduziu os nós de contraste de 48 para 13.

Isso representa uma redução de aproximadamente 72,9% dos nós reportados pelo Lighthouse.

## Seletores residuais

| Ocorrências | Seletor |
|---:|---|
| 7 | `div.max-w-[1440px] > div.about-layout > div.about-narrative > p.editorial-reveal` |
| 2 | `div.grid > div.flex > div.w-10 > span.font-display` |
| 2 | `div.section-header-grid > div.section-header-subtitle > div.section-microstats > span` |
| 2 | `div.section-header > div.section-header-grid > div.section-header-subtitle > p` |

## Diagnóstico

O alerta de contraste ainda permanece porque alguns grupos específicos continuam abaixo do contraste mínimo.

A maior concentração residual está na narrativa da seção About:

`about-narrative > p.editorial-reveal`

Os demais grupos residuais estão em microtextos e pequenos indicadores editoriais.

## Decisão

Não corrigir nesta branch.

Esta branch registra apenas a inspeção residual dos nós de contraste.

## Próximo passo recomendado

Criar uma branch específica de correção residual:

`a11y/fix-color-contrast-residual-selectors`

Escopo sugerido:

- corrigir contraste de `.about-narrative p.editorial-reveal`;
- corrigir contraste dos `span.font-display` dentro dos indicadores pequenos;
- corrigir contraste residual de `.section-microstats span`;
- corrigir contraste residual de `.section-header-subtitle p`;
- evitar alteração estética ampla;
- validar novamente com PSI mobile e desktop.

## Fora do escopo

- Não alterar layout.
- Não alterar imagens.
- Não alterar motion.
- Não alterar performance.
- Não alterar nav.
- Não mexer em JavaScript.
