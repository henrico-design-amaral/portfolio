# PSI Audit — Post Mobile Nav Hit Area Fix

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI mobile realizada após o merge da correção `a11y: fix mobile nav hit area`.

A correção anterior atacou o problema residual de `target-size` no botão mobile `#mobile-menu-toggle`.

## Arquivo bruto

- `psi-henrico-design-amaral-github-io-mobile-20260525-1447.json`

## Resultado atual

### Mobile

- Performance: 80
- Acessibilidade: 96
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 3,5 s
- LCP: 3,9 s
- TBT: 0 ms
- CLS: 0,062
- Speed Index: 3,5 s
- TTI: 4,0 s

## Diagnósticos ainda presentes

- As cores de primeiro e segundo plano não têm taxa de contraste suficiente.
- Renderizar solicitações de bloqueio.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.
- Usar ciclos de vida eficientes de cache.
- Cumulative Layout Shift: 0,062.

## Diagnósticos removidos

- `target-size` não aparece mais no resumo PSI mobile.
- `label-content-name-mismatch` continua ausente no resumo PSI mobile.

## Comparação com auditoria anterior

Auditoria anterior:

`docs/audits/performance/post-mobile-target-size-fix-psi/`

### Mobile

- Performance: 79 → 80
- Acessibilidade: 93 → 96
- Boas práticas: 100 → 100
- SEO: 100 → 100
- `target-size`: presente → removido
- `label-content-name-mismatch`: ausente → continua ausente
- `color-contrast`: presente → continua presente

## Diagnóstico

A correção `a11y: fix mobile nav hit area` resolveu o problema residual de área de toque no mobile.

O alerta de `target-size` não aparece mais no resumo PSI.

Com isso, a frente estrutural de acessibilidade fica resolvida nos pontos que vinham sendo tratados:

- nomes acessíveis dos cards de cases;
- área segura do botão mobile;
- target-size mobile.

A pendência principal restante de acessibilidade é contraste.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a validação pós-correção.

## Próximo passo recomendado

Criar uma branch específica para contraste:

`a11y/fix-color-contrast-groups`

Escopo sugerido:

- corrigir grupos recorrentes de contraste apontados pelo Lighthouse;
- priorizar microtextos, índices, labels auxiliares, About, Contact e Footer;
- evitar mudança estética ampla;
- validar com PSI mobile e desktop após a correção.
