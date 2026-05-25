# HANDOFF — Portfolio

## Projeto

Portfolio profissional de Henrico Amaral.

## Estado atual

Branch atual: `docs/add-orchestrator-phase-1`

Branch base: `main`

Status esperado do Git: branch limpa antes das alterações documentais.

## Objetivo atual

Aplicar a Fase 1 do Henrico Agent OS ao Portfolio, criando uma camada mínima de contexto compartilhado, handoff, tarefas, decisões e quality gates.

## Contexto

O Portfolio é o projeto piloto do Henrico Agent OS.

O objetivo não é alterar interface nesta branch.  
O objetivo é preparar o projeto para ser operado com mais segurança por ChatGPT, Codex local, Codex no Antigravity e GitHub.

## Escopo permitido

- Criar documentação de orquestração do Portfolio.
- Criar arquivos de handoff, tasks, decisions e quality gates.
- Criar `docs/orchestrator/`.
- Registrar como o Portfolio deve usar a Fase 1 global.

## Fora do escopo

- Alterar `index.html`.
- Alterar `assets/css/site.css`.
- Alterar `assets/js/site.js`.
- Alterar imagens.
- Refatorar layout.
- Otimizar performance.
- Criar automações complexas.
- Instalar Paperclip, Obsidian CLI ou MCPs.

## Arquivos prováveis

- `HANDOFF.md`
- `TASKS.md`
- `DECISIONS.md`
- `QUALITY_GATES.md`
- `docs/orchestrator/README.md`
- `docs/orchestrator/PHASE_1.md`

## Riscos

- Misturar documentação com alteração de interface.
- Duplicar regras já existentes em `PROJECT_CONTROL.md`, `AGENTS.md` e `GEMINI.md`.
- Criar documentação grande demais e pouco prática.

## Próxima ação segura

Criar os arquivos mínimos da Fase 1, revisar `git diff --stat`, commitar apenas documentação e abrir PR separado.

## Última atualização

2026-05-25
