# DECISIONS — Portfolio

## Decisão 001

Data: 2026-05-25

Contexto:

O Portfolio passou por ciclos de ajustes visuais, copy, acessibilidade, PSI baseline e governança Git. Para evitar perda de contexto entre ChatGPT, Codex local, Codex no Antigravity e sessões futuras, o projeto precisa de uma camada mínima de orquestração documental.

Decisão:

Aplicar a Fase 1 do Henrico Agent OS ao Portfolio.

Motivo:

Criar uma fonte de contexto versionável em Markdown para reduzir retrabalho, evitar prompts de memória repetidos, separar estratégia de execução e manter rastreabilidade.

Impacto:

- O Portfolio passa a ter handoff explícito.
- Próximas sessões começam lendo contexto local.
- Decisões relevantes passam a ser registradas.
- Quality gates mínimos passam a ser documentados.
- Alterações futuras devem continuar respeitando branch pequena, commit pequeno e PR de escopo único.

Arquivos relacionados:

- `HANDOFF.md`
- `TASKS.md`
- `DECISIONS.md`
- `QUALITY_GATES.md`
- `docs/orchestrator/README.md`
- `docs/orchestrator/PHASE_1.md`

Status:

Ativa.
