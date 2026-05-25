# Tailwind Build Migration Plan

## Contexto

Plano técnico para migrar o portfolio do Tailwind CDN em runtime para CSS local/buildado.

A inspeção anterior confirmou que o Tailwind CDN aparece na árvore de dependência de rede e no audit de JavaScript não utilizado.

Fonte anterior:

`docs/audits/performance/tailwind-cdn-runtime-cost-inspection/`

## Objetivo

Remover dependência de runtime do Tailwind CDN de forma controlada, sem regressão visual, sem alteração de layout e sem misturar performance com redesign.

## Estado atual

O `index.html` carrega:

- `https://cdn.tailwindcss.com`
- `tailwind.config` inline
- classes utilitárias diretamente no HTML
- CSS customizado local em `assets/css/site.css`

A página também usa:

- GSAP CDN com `defer`
- ScrollTrigger CDN com `defer`
- `assets/js/site.js` com `defer`

## Arquivos gerados nesta inspeção

- `current-tailwind-runtime-config.txt`
- `html-class-attributes.txt`
- `current-build-files.txt`
- `tailwind-class-inventory.csv`

## Problema

O Tailwind CDN é aceitável para prototipação, mas não é a melhor opção para produção.

Problemas identificados:

- adiciona dependência externa no carregamento;
- aparece na network dependency tree;
- aparece como JavaScript não utilizado;
- executa lógica no cliente;
- dificulta controle fino de cache;
- mantém configuração crítica dentro do HTML;
- aumenta o risco de variação de performance entre execuções PSI.

## Risco da migração

A página usa muitas classes utilitárias diretamente no `index.html`.

Remover o CDN sem gerar CSS local equivalente pode quebrar:

- layout responsivo;
- espaçamentos;
- tipografia;
- cores;
- grid;
- estados hover/focus;
- comportamento mobile;
- cards de cases;
- navegação;
- modal;
- seções editoriais.

## Estratégia recomendada

A migração deve ser feita em etapas.

### Etapa 1 — Preparação de build

Criar arquivos de build sem remover o CDN ainda:

- `package.json`
- `tailwind.config.js`
- `postcss.config.js`, se necessário
- arquivo de entrada CSS para Tailwind, se necessário
- script de build

### Etapa 2 — Paridade visual

Gerar CSS local compilado e carregar em paralelo para comparação controlada.

Não remover o CDN até validar que o CSS local cobre as classes usadas.

### Etapa 3 — Remoção do CDN

Remover:

- `<script src="https://cdn.tailwindcss.com"></script>`
- bloco inline `tailwind.config`

Adicionar CSS compilado local.

### Etapa 4 — Validação

Rodar:

- comparação visual manual desktop/mobile;
- PSI mobile;
- PSI desktop;
- checagem de acessibilidade;
- checagem de layout nos principais breakpoints.

## Próxima branch recomendada

`perf/prepare-tailwind-build-foundation`

Escopo:

- criar infraestrutura mínima de build;
- extrair `tailwind.config` inline para `tailwind.config.js`;
- preservar tokens atuais;
- não remover o CDN;
- não alterar layout;
- não alterar copy;
- não alterar JS;
- não alterar imagens.

## Fora do escopo desta branch

- Não remover Tailwind CDN.
- Não criar CSS compilado final.
- Não alterar `index.html` além de documentação futura.
- Não alterar `assets/css/site.css`.
- Não mexer em GSAP.
- Não mexer em motion.
- Não mexer em acessibilidade.
- Não rodar correção de performance ainda.

## Decisão

Esta branch é apenas plano e inventário.

A migração para build local é válida, mas deve ser feita com paridade visual controlada.
