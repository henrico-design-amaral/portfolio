# PSI Audit — Post Mobile Target Size Fix

## URL auditada

https://henrico-design-amaral.github.io/portfolio/

## Data

2026-05-25

## Contexto

Auditoria PSI mobile realizada após o merge da correção `a11y: fix residual mobile target size`.

A correção anterior tentou resolver o alerta residual de `target-size` no botão mobile `#mobile-menu-toggle`.

## Arquivo bruto

- `psi-henrico-design-amaral-github-io-mobile-20260525-1434.json`

## Resultado atual

### Mobile

- Performance: 79
- Acessibilidade: 93
- Boas práticas: 100
- SEO: 100

Core Web Vitals:

- FCP: 3,5 s
- LCP: 3,5 s
- TBT: 200 ms
- CLS: 0,063
- Speed Index: 4,1 s
- TTI: 3,9 s

## Diagnósticos ainda presentes

- As cores de primeiro e segundo plano não têm taxa de contraste suficiente.
- As áreas de toque não têm tamanho ou espaçamento suficiente.
- Minimizar trabalho da thread principal.
- Reduzir tempo de execução de JavaScript.
- Reflow forçado.
- Renderizar solicitações de bloqueio.
- Árvore de dependência da rede.
- Melhorar entrega de imagens.

## Diagnósticos removidos

- `label-content-name-mismatch` continua ausente no resumo PSI mobile.

## Diagnóstico

A correção residual de `target-size` não removeu o alerta de áreas de toque no mobile.

A hipótese anterior de que bastaria aumentar o botão e o espaçamento visual não foi confirmada pelo PSI.

O problema pode envolver:

- área clicável real do botão;
- sobreposição estrutural no nav;
- cálculo de safe clickable space entre `nav-lang` e `#mobile-menu-toggle`;
- ou interferência de layout responsivo no container do nav.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a validação pós-correção.

## Próximo passo recomendado

Criar uma branch técnica para inspecionar o JSON mobile mais recente e extrair novamente o nó `target-size`:

`a11y/inspect-mobile-target-size-residual`

Objetivo:

- confirmar se o seletor ainda é `button#mobile-menu-toggle`;
- verificar `boundingRect`, `path`, `snippet`, `explanation` e `subItems`;
- decidir se a próxima correção deve alterar o HTML do botão, o container do nav ou a relação entre `nav-lang` e `mobile-menu-toggle`.

Contraste permanece fora do escopo.
