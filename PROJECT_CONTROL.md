# PROJECT CONTROL — PORTFOLIO

Este arquivo define o controle básico do projeto Portfolio.

O Portfolio é o projeto ativo principal de Henrico Amaral.

---

## 1. IDENTIDADE DO PROJETO

Nome local:

Portfolio

Caminho local:

C:\Users\henri\Documents\!PROJETOS\01_ACTIVE\Portfolio

Repositório:

https://github.com/henrico-design-amaral/portfolio

Branch principal:

main

Página publicada:

https://henrico-design-amaral.github.io/portfolio/

---

## 2. FUNÇÃO DO PROJETO

O Portfolio é o portfólio profissional atual de Henrico Amaral.

Objetivo:

Reposicionar Henrico como Product Designer sênior especializado em:

- sistemas complexos
- plataformas enterprise
- arquitetura de informação
- visualização operacional
- design systems
- produtos digitais de alta complexidade
- interfaces para decisão

O Portfolio não deve ser tratado como um site visual genérico.

Ele é uma peça estratégica de posicionamento profissional.

---

## 3. ESCOPO DO PROJETO

O Portfolio pode conter:

- código do site
- HTML
- CSS
- JS
- assets públicos usados no site
- documentação do projeto
- regras locais
- memória local
- wiki compilada segura, se existir

O Portfolio não deve conter:

- bibliotecas completas de agents
- bibliotecas completas de skills
- MCPs reutilizáveis
- prompts soltos globais
- node_modules
- dist desnecessário
- build versionado sem necessidade
- arquivos privados de cliente
- materiais brutos sensíveis versionados
- repositórios externos clonados

---

## 4. ARQUIVOS DE CONTROLE

Antes de alterar qualquer arquivo, o Antigravity deve ler:

1. PROJECT_CONTROL.md
2. AGENTS.md
3. GEMINI.md

Se existir, também ler:

4. ai-memory/
5. ai-wiki/
6. docs/

---

## 5. GIT

main é a versão oficial.

Mudanças estruturais, visuais grandes ou experimentais não devem ser feitas diretamente na main.

Criar branches pequenas por tarefa.

Formato recomendado:

audit/home-structure
fix/case-modal-index
docs/design-system-move
design/section-name
content/copy-name
chore/assets-cleanup

---

## 6. PRs

Regra:

1 PR = 1 tipo de mudança.

Não repetir o erro da branch audit/portfolio-structure, que ficou grande demais e misturou muitas alterações.

Se uma branch ficar grande demais, criar branch limpa com escopo menor.

---

## 7. STATUS VALIDADO

Estado validado após merge do PR #2:

- main limpa
- main atualizada com origin/main
- AGENTS.md e GEMINI.md incorporados oficialmente
- último merge relevante: Merge pull request #2 from henrico-design-amaral/docs/antigravity-rules

Ainda pode restar limpeza de branches remotas antigas:

git push origin --delete docs/antigravity-rules
git push origin --delete audit/portfolio-structure
git fetch --prune

Não mexer em gh-pages nem master agora.

---

## 8. ÚLTIMA ETAPA EXECUTADA

Branch:

fix/home-modal-and-docs-structure

Objetivo:

Corrigir a abertura dos modais de cases, respeitar tradução dinâmica no conteúdo principal do modal, manter os arquivos de design system dentro de docs/ e otimizar imagens públicas para WebP.

Alterações executadas:

- data-case-index nos cards da home
- suporte a teclado nos cards de cases
- leitura de client, desc e metric a partir do dicionário COPY
- design-system.html, design-system-v2.html e design-system-v3.html mantidos em docs/
- imagens públicas da home convertidas para WebP e referências atualizadas

Próximas etapas recomendadas:

1. Revisar se o link de CV deve baixar Markdown ou apontar para PDF.
2. Fazer revisão visual rápida da home após cada mudança.
