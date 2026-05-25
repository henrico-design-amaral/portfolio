# Lighthouse A11Y Audit Nodes

## Contexto

Extração dos nós exatos apontados pelo Lighthouse/PSI após a validação pós-correção de acessibilidade.

Fonte dos dados:

- docs/audits/performance/post-a11y-fix-psi/

## Resultado principal

A correção anterior dos botões de idioma foi publicada, mas os alertas persistentes de acessibilidade apontam para outros elementos.

## Audit IDs confirmados

- color-contrast
- label-content-name-mismatch
- 	arget-size

## Totais extraídos

- Color contrast: 48 ocorrências
- Label in name: 8 ocorrências
- Target size: 2 ocorrências

## Diagnóstico

### Color contrast

Os problemas de contraste se concentram principalmente em:

- microstats e textos auxiliares dos section headers
- labels pequenos dos cards de método
- subtítulos de section headers
- textos e índices da seção About
- labels dos cards de contato
- elementos do footer

### Label in name

Os alertas apontam para os quatro cards interativos da seção #cases.

Interpretação provável:

- os cards usam ole="button"
- cada card possui texto visível extenso
- o ria-label atual substitui o nome acessível por frases curtas como Abrir caso Petrobras
- o Lighthouse entende que o nome acessível não corresponde suficientemente ao rótulo visível do componente

### Target size

O PSI exibiu alerta de áreas de toque. O audit ID real encontrado no JSON é 	arget-size, não 	ap-targets.

## Decisão

Não corrigir nesta branch.

Esta branch registra apenas a inspeção técnica dos nós do Lighthouse.

## Próximo passo recomendado

Criar uma branch separada de correção:

11y/fix-lighthouse-audit-nodes

Escopo sugerido:

1. Corrigir os cards de cases para label-content-name-mismatch.
2. Corrigir contraste nos grupos mais recorrentes.
3. Corrigir 	arget-size apenas nos elementos apontados no CSV.
