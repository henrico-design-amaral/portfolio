# PSI Audit — Post Orchestrator

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI realizada após a instalação da Fase 1 do Henrico Agent OS no Portfolio e atualização do estado vivo do orquestrador.

Esta auditoria valida a versão publicada após:

- estabilização visual, copy e acessibilidade da Home
- baseline PSI anterior
- instalação da Fase 1 do Orquestrador
- atualização de `HANDOFF.md`, `TASKS.md` e `DECISIONS.md`

## Arquivos brutos

- `psi-henrico-design-amaral-github-io-mobile-20260525-1303.json`
- `psi-henrico-design-amaral-github-io-desktop-20260525-1304.json`

## Mobile

- Performance: 78
- Acessibilidade: 93
- Boas práticas: 100
- SEO: 100

## Desktop

- Performance: 96
- Acessibilidade: 96
- Boas práticas: 100
- SEO: 100

## Core Web Vitals observados

### Mobile

- FCP: 3,6 s
- LCP: 3,9 s
- TBT: 0 ms
- CLS: 0
- Speed Index: 4,7 s
- TTI: 3,9 s

### Desktop

- FCP: 0,8 s
- LCP: 0,8 s
- TBT: 130 ms
- CLS: 0,031
- Speed Index: 1,1 s
- TTI: 1,1 s

## Comparação com baseline anterior

Baseline anterior localizado em:

`docs/audits/performance/baseline-psi/`

A comparação detalhada deve ser feita em uma próxima etapa, caso seja necessário extrair e comparar os JSONs diretamente.

## Principais oportunidades

1. Melhorar contraste entre primeiro e segundo plano.
2. Corrigir elementos com rótulos visíveis sem nomes acessíveis correspondentes.
3. Reduzir impacto de render blocking e melhorar entrega de imagens, principalmente no mobile.

## Diagnóstico

O desktop está em condição forte: Performance 96, Acessibilidade 96, Boas práticas 100 e SEO 100.

O mobile é o principal ponto de atenção. A Performance 78 indica que a experiência móvel ainda sofre com FCP de 3,6 s, LCP de 3,9 s e Speed Index de 4,7 s. Os diagnósticos apontam render blocking, entrega de imagens e trabalho da main thread como oportunidades relevantes.

A acessibilidade ainda tem alertas recorrentes, principalmente contraste e nomes acessíveis. Esses pontos devem ser tratados antes de otimizações visuais novas.

## Primeira correção recomendada

Criar uma branch específica para acessibilidade:

`a11y/fix-contrast-and-accessible-names`

Escopo sugerido:

- revisar contraste dos textos sinalizados
- corrigir nomes acessíveis de elementos com rótulos visíveis
- validar navegação mobile e áreas de toque
- não alterar layout de forma ampla

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas auditoria e evidência técnica.

## Próximo passo

Criar branch específica caso a auditoria indique correção necessária.

Sugestões:

- `a11y/fix-contrast-and-accessible-names`
- `perf/improve-mobile-rendering`
- `perf/optimize-image-delivery`
