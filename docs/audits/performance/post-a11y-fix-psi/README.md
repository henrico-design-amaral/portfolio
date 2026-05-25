# PSI Audit — Post A11Y Fix

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI realizada após o merge da correção `a11y: fix language labels and touch targets`.

A correção anterior alterou:

- nomes acessíveis dos botões de idioma `PT` e `EN`
- área mínima de toque para `.lang-btn`, `.mobile-menu-toggle` e `.mobile-menu a`

A publicação do HTML foi confirmada no GitHub Pages, com os nomes acessíveis `PT — Português` e `EN — English` presentes na versão publicada.

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1335.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1336.json`

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
- Speed Index: 4,7 s
- TTI: 3,9 s

### Desktop

- Performance: 96
- Acessibilidade: 96
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 0,8 s
- LCP: 0,8 s
- TBT: 150 ms
- CLS: 0,031
- Speed Index: 1,1 s
- TTI: 1,1 s

## Comparação com auditoria anterior

Auditoria anterior:

`docs/audits/performance/post-orchestrator-psi/`

### Mobile

- Performance: 78 → 79
- Acessibilidade: 93 → 93
- Boas práticas: 100 → 100
- SEO: 100 → 100

### Desktop

- Performance: 96 → 96
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
- Minimizar trabalho da thread principal.

### Desktop

- As cores de primeiro e segundo plano não têm taxa de contraste suficiente.
- Elementos com rótulos de texto visíveis não têm nomes acessíveis correspondentes.
- Reflow forçado.
- Renderizar solicitações de bloqueio.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Usar ciclos de vida eficientes de cache.

## Diagnóstico

A correção anterior foi segura e pequena, mas não alterou a pontuação de acessibilidade no PSI.

Como a versão publicada já contém os novos nomes acessíveis dos botões de idioma, a conclusão é que os elementos sinalizados pelo Lighthouse não eram apenas os botões `PT/EN` ou o menu mobile.

O próximo ciclo precisa identificar os nós exatos dentro do JSON do Lighthouse antes de aplicar novas correções.

Não é recomendado continuar ajustando contraste, labels ou touch targets por tentativa visual.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a validação pós-correção.

## Próximo passo recomendado

Criar uma branch técnica para extrair do JSON os nós exatos apontados pelo Lighthouse:

`a11y/inspect-lighthouse-audit-nodes`

Objetivo da próxima branch:

- identificar quais elementos ainda falham em contraste
- identificar quais elementos ainda falham em label-in-name
- identificar quais elementos ainda falham em tap-targets
- corrigir apenas os elementos comprovados
