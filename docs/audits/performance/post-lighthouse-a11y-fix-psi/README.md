# PSI Audit — Post Lighthouse A11Y Fix

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI realizada após o merge da correção `a11y: fix lighthouse label and target nodes`.

A correção anterior atacou nós comprovados na inspeção Lighthouse:

- `label-content-name-mismatch` nos cards de cases
- `target-size` no botão `#mobile-menu-toggle`

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1358.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1358.json`

## Resultados atuais

### Mobile

- Performance: 79
- Acessibilidade: 93
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 3,5 s
- LCP: 3,8 s
- TBT: 0 ms
- CLS: 0
- Speed Index: 4,6 s
- TTI: 3,9 s

### Desktop

- Performance: 99
- Acessibilidade: 96
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 0,8 s
- LCP: 0,8 s
- TBT: 0 ms
- CLS: 0,031
- Speed Index: 0,8 s
- TTI: 0,8 s

## Comparação com auditoria anterior

Auditoria anterior:

`docs/audits/performance/post-a11y-fix-psi/`

### Mobile

- Performance: 79 → 79
- Acessibilidade: 93 → 93
- Boas práticas: 100 → 100
- SEO: 100 → 100

### Desktop

- Performance: 96 → 99
- Acessibilidade: 96 → 96
- Boas práticas: 100 → 100
- SEO: 100 → 100

## Diagnósticos ainda presentes

### Mobile

- As cores de primeiro e segundo plano não têm taxa de contraste suficiente.
- As áreas de toque não têm tamanho ou espaçamento suficiente.
- Elementos com rótulos de texto visíveis não têm nomes acessíveis correspondentes.
- Reflow forçado.
- Renderizar solicitações de bloqueio.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Usar ciclos de vida eficientes de cache.

### Desktop

- As cores de primeiro e segundo plano não têm taxa de contraste suficiente.
- Elementos com rótulos de texto visíveis não têm nomes acessíveis correspondentes.
- Reflow forçado.
- Renderizar solicitações de bloqueio.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Usar ciclos de vida eficientes de cache.

## Diagnóstico

A correção baseada nos nós extraídos foi aplicada e publicada, mas os alertas de acessibilidade ainda aparecem no resumo do PSI.

A pontuação de acessibilidade não mudou:

- Mobile: 93
- Desktop: 96

A melhoria observada foi em performance desktop, que subiu de 96 para 99. Essa melhora pode estar relacionada a variação de execução ou cache, não necessariamente à correção de acessibilidade.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a validação pós-correção.

## Próximo passo recomendado

Antes de corrigir contraste, rodar uma nova inspeção dos JSONs desta auditoria para verificar se os nós de `label-content-name-mismatch` e `target-size` mudaram após a correção.

Branch sugerida:

`a11y/reinspect-post-fix-audit-nodes`
