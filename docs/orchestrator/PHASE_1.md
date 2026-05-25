# Portfolio — Phase 1 Orchestrator

## Objetivo

Aplicar ao Portfolio a Fase 1 do Henrico Agent OS: uma camada mínima de contexto compartilhado, governança, handoff, decisões e quality gates.

## O que esta fase resolve

- Reduz perda de contexto entre ferramentas.
- Evita prompts de memória repetidos.
- Ajuda ChatGPT, Codex local e Antigravity a começarem pelo mesmo estado.
- Impede alterações amplas sem plano.
- Mantém branch, commit e PR com escopo controlado.
- Registra decisões e próximos passos.

## O que esta fase não faz

- Não cria automação complexa.
- Não instala Paperclip.
- Não configura Obsidian CLI.
- Não cria RAG.
- Não transforma o Portfolio em SaaS.
- Não altera interface.
- Não altera assets.
- Não substitui revisão humana.

## Relação com arquivos existentes

### PROJECT_CONTROL.md

Continua sendo a governança histórica do projeto.

### AGENTS.md

Continua sendo a instrução operacional para agentes no repositório.

### GEMINI.md

Continua orientando o Antigravity a ler os arquivos de controle antes de alterar qualquer coisa.

### HANDOFF.md

Passa a ser o resumo vivo para troca de contexto entre sessões e ferramentas.

### TASKS.md

Passa a concentrar a próxima fila de trabalho.

### DECISIONS.md

Registra decisões que devem sobreviver ao chat atual.

### QUALITY_GATES.md

Define o mínimo antes de alteração, commit, PR e merge.

## Fluxo padrão

1. Ler contexto.
2. Verificar branch.
3. Verificar `git status -sb`.
4. Separar escopo permitido e proibido.
5. Planejar.
6. Executar o mínimo necessário.
7. Testar.
8. Documentar.
9. Commitar.
10. Abrir PR.

## Primeira aplicação

Esta branch `docs/add-orchestrator-phase-1` cria somente documentação.

Arquivos de interface não fazem parte deste PR.
