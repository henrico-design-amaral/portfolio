# Post Lighthouse A11Y Fix — Node Reinspection

## Contexto

Reinspeção dos JSONs da auditoria `post-lighthouse-a11y-fix-psi` após a correção `a11y: fix lighthouse label and target nodes`.

A correção anterior tentou atacar:

- `label-content-name-mismatch` nos cards de cases
- `target-size` no botão `#mobile-menu-toggle`

## Fonte

Auditoria analisada:

`docs/audits/performance/post-lighthouse-a11y-fix-psi/`

Inspeção anterior usada como comparação:

`docs/audits/accessibility/lighthouse-audit-nodes/`

## Arquivos gerados

- `post-lighthouse-a11y-fix-nodes.csv`
- `comparison-summary.csv`

## Resultado da comparação

| Audit ID | Antes | Depois | Delta |
|---|---:|---:|---:|
| `color-contrast` | 48 | 48 | 0 |
| `label-content-name-mismatch` | 8 | 8 | 0 |
| `target-size` | 1 | 1 | 0 |

## Diagnóstico

A correção anterior foi aplicada e publicada, mas a reinspeção dos novos JSONs mostra que os mesmos grupos de problemas continuam aparecendo.

Isso indica que:

1. O problema de `label-content-name-mismatch` nos cards de cases não foi resolvido apenas adicionando o nome do cliente no `aria-label`.
2. O problema de `target-size` no `#mobile-menu-toggle` não foi resolvido apenas com `width`, `height`, `min-width` e `min-height` de `44px`.
3. O contraste segue intocado, como esperado, porque não foi escopo da correção anterior.

## Interpretação técnica

Para os cards de cases, o problema pode estar ligado ao uso de `role="button"` em um `div` complexo com muito conteúdo visível. A correção mais robusta pode exigir trocar o elemento interativo para `<button>` ou `<a>`, ou ajustar a estrutura acessível do card de forma mais controlada.

Para `target-size`, o problema pode envolver espaçamento entre elementos vizinhos, não apenas tamanho absoluto do botão.

## Decisão

Não corrigir nesta branch.

Esta branch registra apenas a reinspeção e confirma que a correção anterior não alterou os nós reportados pelo Lighthouse.

## Próximo passo recomendado

Criar uma branch de correção estrutural com escopo restrito:

`a11y/fix-case-card-semantics-and-mobile-target`

Escopo sugerido:

1. Reavaliar a semântica dos cards de cases.
2. Corrigir `target-size` considerando tamanho e espaçamento real do botão mobile.
3. Deixar contraste para uma branch separada.
