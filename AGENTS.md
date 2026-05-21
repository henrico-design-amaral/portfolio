# AGENTS.md — PORTFOLIO

Este arquivo define as regras específicas para agentes de IA trabalhando no projeto Portfolio.

O Antigravity deve ler este arquivo antes de alterar qualquer coisa neste projeto.

---

## 1. PROJETO ATIVO

Projeto:

Portfolio

Caminho local:

C:\Users\henri\Documents\!PROJETOS\01_ACTIVE\Portfolio

Repositório:

https://github.com/henrico-design-amaral/portfolio

Branch oficial:

main

---

## 2. PAPEL DO AGENTE

O agente deve atuar como executor técnico e auditor de projeto.

O agente não deve decidir estratégia sozinho.

O agente deve:

- ler regras
- auditar antes de alterar
- trabalhar em escopos pequenos
- preservar Git limpo
- preservar arquivos sensíveis
- propor planos curtos
- explicar riscos
- indicar arquivos alterados
- sugerir commit

---

## 3. LEITURA OBRIGATÓRIA

Antes de qualquer ação, ler:

1. PROJECT_CONTROL.md
2. AGENTS.md
3. GEMINI.md

Se existirem, ler também:

4. ai-memory/
5. ai-wiki/
6. docs/

---

## 4. MODOS

### AUDIT MODE

Quando o usuário pedir auditoria, análise, diagnóstico ou inspeção:

- não alterar arquivos
- não criar arquivos
- não mover arquivos
- não deletar arquivos
- não fazer commit
- não fazer push

Apenas ler e reportar.

Saída obrigatória:

1. estado atual
2. riscos
3. arquivos provavelmente afetados
4. plano curto
5. primeira alteração recomendada

### EXECUTION MODE

Só usar depois de aprovação explícita.

Pode:

- alterar arquivos necessários
- criar arquivos necessários
- atualizar memória
- atualizar documentação
- rodar testes locais
- sugerir commit

Não pode:

- fazer push sem autorização
- fazer merge
- alterar outro projeto
- tocar em arquivos privados
- executar mudanças amplas
- misturar tarefas

---

## 5. BRANCHES

Não trabalhar direto na main para:

- mudanças estruturais
- mudanças visuais grandes
- reorganizações
- experimentos
- otimização de imagens
- refatorações
- alterações com risco de quebrar a home

Criar branch por tarefa.

Exemplos:

audit/home-structure
fix/case-modal-index
docs/design-system-move
design/home-section
content/case-copy
chore/assets-cleanup

---

## 6. REGRA DE PR

1 PR = 1 tipo de mudança.

Não misturar:

- docs com visual
- visual com JS
- JS com otimização de imagens
- governança com layout
- auditoria com execução
- limpeza com redesign

A branch audit/portfolio-structure ficou grande demais e não deve ser usada como padrão.

A branch docs/antigravity-rules foi o exemplo correto: pequena, limpa e focada.

---

## 7. ARQUIVOS SENSÍVEIS

Não alterar, publicar ou commitar materiais privados.

Se existir:

case-references/

Tratar como material privado local.

Não commitar:

- documentos de clientes
- PDFs privados
- planilhas
- e-mails
- arquivos Axure
- Visio
- PPTs privados
- DOCXs privados
- imagens brutas confidenciais
- materiais não curados

Assets públicos usados no site devem ficar em:

assets/

Materiais privados dos cases devem ficar fora do Git público.

---

## 8. HENRICO-AGENT-OS

Não criar bibliotecas de skills, agents ou MCPs dentro do Portfolio.

Se a tarefa envolver:

- skill
- agent
- MCP
- workflow
- command
- rule
- instinct
- prompt reutilizável

então ela pertence ao Henrico-Agent-OS, não ao Portfolio.

Caminho:

C:\Users\henri\Documents\!PROJETOS\00_SYSTEM\henrico-agent-os

---

## 9. GOOGLE DRIVE

Não mover código do Portfolio para o Google Drive.

Não criar .git no Google Drive.

Não sincronizar repositório inteiro com Google Drive.

O Google Drive pode receber:

- exports
- imagens finais
- documentação final
- textos
- materiais publicados
- registro de decisões

---

## 10. HOMEPAGE — AUDITORIA PLANEJADA

Próxima branch recomendada:

audit/home-structure

A auditoria da home deve verificar:

- index.html
- assets/css/site.css
- assets/js/site.js
- assets usados pelos cases
- links para docs
- estrutura dos modais
- dados dos cases
- estado da responsividade
- riscos de manutenção

Não alterar nada durante auditoria.

---

## 11. ISSUES JÁ IDENTIFICADAS NA HOME

### 11.1 Modal de cases

Status: corrigido na branch fix/home-modal-and-docs-structure.

No index.html, a ordem visual dos cases é:

1. Petrobras
2. Ambev
3. Bayer
4. BMG

No array CASE_DATA em assets/js/site.js, a ordem é:

0. Petrobras
1. Bayer
2. Ambev
3. BMG

Correção proposta:

- Petrobras -> data-case-index="0"
- Ambev -> data-case-index="2"
- Bayer -> data-case-index="1"
- BMG -> data-case-index="3"

Essa deve ser uma alteração pequena, isolada e segura.

### 11.2 Traduções do modal

Status: corrigido na branch fix/home-modal-and-docs-structure para client, desc e metric.

Atualizar openCaseModal para ler:

- client
- desc
- metric

a partir do dicionário COPY, respeitando currentLang.

Não misturar esta alteração com outras.

### 11.3 Tags dos cases

Decidir se as tags técnicas em inglês devem continuar em inglês ou se terão tradução dinâmica.

Não executar antes de decisão de Henrico.

### 11.4 Design System

Mover:

- design-system.html
- design-system-v2.html
- design-system-v3.html

para:

- docs/design-system.html
- docs/design-system-v2.html
- docs/design-system-v3.html

Fazer isso em PR separado.

### 11.5 Imagens

Converter PNGs pesados dos cases para WebP e atualizar referências.

Fazer isso só depois das correções menores.

Não misturar otimização de imagem com JS ou docs.

---

## 12. ORDEM RECOMENDADA DE PRÓXIMAS MUDANÇAS

1. Mover arquivos de design system para docs, se voltarem a sair de docs.
2. Atualizar referências quebradas, se aparecerem.
3. Otimizar imagens para WebP.
4. Testar manualmente.
5. Commitar em PRs pequenos.

---

## 13. SAÍDA OBRIGATÓRIA APÓS EXECUÇÃO

Ao terminar uma tarefa, informar:

1. branch atual
2. arquivos alterados
3. motivo da alteração
4. testes feitos
5. riscos restantes
6. status do Git
7. sugestão de commit
8. se precisa PR

---

## 14. REGRA FINAL

Não fazer tudo de uma vez.

Uma branch.
Uma tarefa.
Um commit.
Um PR pequeno.
