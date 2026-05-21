# GEMINI.md — PORTFOLIO

Este arquivo instrui o Antigravity sobre como operar dentro do projeto Portfolio.

Antes de qualquer alteração, leia:

1. PROJECT_CONTROL.md
2. AGENTS.md
3. Este GEMINI.md

Se existir, leia também:

4. ai-memory/
5. ai-wiki/
6. docs/

---

## REGRA PRINCIPAL

Não altere arquivos sem antes auditar o estado atual do projeto.

Se o pedido for auditoria, diagnóstico ou análise, não modifique nada.

Se o pedido for execução, confirme:

- projeto ativo
- branch atual
- git status
- escopo da tarefa
- arquivos afetados
- risco da alteração

---

## PROJETO

Nome:

Portfolio

Caminho:

C:\Users\henri\Documents\!PROJETOS\01_ACTIVE\Portfolio

Repositório:

https://github.com/henrico-design-amaral/portfolio

Branch principal:

main

---

## MAIN

A main representa a versão oficial do projeto.

Não trabalhar diretamente na main para:

- mudanças estruturais
- mudanças visuais grandes
- experimentos
- refatorações
- otimização de imagens
- reorganização de arquivos
- alterações arriscadas

Criar branch específica por tarefa.

---

## AUDITORIA

Quando receber pedido de auditoria:

1. Ler arquivos de controle.
2. Confirmar branch.
3. Rodar git status.
4. Verificar estrutura.
5. Identificar arquivos relevantes.
6. Identificar riscos.
7. Propor plano curto.
8. Não alterar nenhum arquivo.

Saída:

- estado atual
- riscos
- arquivos provavelmente afetados
- plano de ação
- primeira alteração recomendada

---

## EXECUÇÃO

Quando receber aprovação para executar:

1. Trabalhar apenas no escopo aprovado.
2. Alterar o mínimo necessário.
3. Não misturar tarefas.
4. Não tocar em arquivos privados.
5. Não alterar outro projeto.
6. Testar quando aplicável.
7. Reportar arquivos alterados.
8. Sugerir commit.

---

## GIT

Antes de qualquer commit:

git status
git diff --stat
git diff --name-only

Não usar git add . sem revisar escopo.

Preferir git add explícito.

Não executar:

git push --force
git reset --hard
git clean -fd
git clean -fdx

Push apenas com pedido explícito.

---

## BRANCHES

Usar nomes claros:

audit/home-structure
fix/case-modal-index
fix/case-modal-translation
docs/design-system-move
chore/assets-webp
design/home-section

---

## PRs

1 PR = 1 tipo de mudança.

Não repetir o erro da branch audit/portfolio-structure.

Se uma branch crescer demais, interromper, criar branch limpa e mover apenas o que for necessário.

---

## CONTEXTO VALIDADO

O PR #2 foi o PR correto para regras do Antigravity.

Ele veio da branch:

docs/antigravity-rules

Ele adicionou oficialmente:

- AGENTS.md
- GEMINI.md

A main ficou limpa após o merge.

Último merge relevante:

Merge pull request #2 from henrico-design-amaral/docs/antigravity-rules

Ainda pode haver branches remotas antigas para limpar:

git push origin --delete docs/antigravity-rules
git push origin --delete audit/portfolio-structure
git fetch --prune

Não mexer em gh-pages nem master agora.

---

## STATUS DA HOME

Branch de correção:

fix/home-modal-and-docs-structure

Correções aplicadas:

- cards de cases com data-case-index correto
- abertura de modal por clique e teclado
- client, desc e metric do modal lendo COPY conforme idioma atual
- design-system*.html mantidos em docs/

Próximas tarefas recomendadas:

- otimizar imagens dos cases para WebP em PR separado
- revisar destino do link de CV
- validar responsividade da home depois de mudanças visuais
