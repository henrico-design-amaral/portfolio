# Tailwind Local CSS Parity Test

## Contexto

Teste de paridade visual para substituir o Tailwind CDN em runtime por CSS local gerado.

Esta branch vem após:

- `perf/inspect-tailwind-cdn-runtime-cost`
- `perf/plan-tailwind-build-migration`
- `perf/prepare-tailwind-build-foundation`

## Objetivo

Validar se o portfolio consegue carregar Tailwind via CSS local gerado, sem depender de:

`https://cdn.tailwindcss.com`

## O que foi alterado

### index.html

Removido:

- `<script src="https://cdn.tailwindcss.com"></script>`
- bloco inline `tailwind.config`

Adicionado:

- `<link rel="stylesheet" href="assets/css/tailwind.generated.css">`

### tailwind.config.js

Alinhado com o antigo `tailwind.config` inline do HTML, preservando:

- cores `base`
- cores `support`
- cores `accent`
- `system`
- `page`
- `text-primary`
- `text-secondary`
- `text-tertiary`
- fontes `display`, `body` e `mono`

### .gitignore

Adicionado:

- `node_modules/`

## Build local

Comando executado:

`npm run build:css`

Resultado:

- `assets/css/tailwind.generated.css` regenerado com sucesso.

## Validação local

Servidor local executado com:

`python -m http.server 8080`

Recursos carregados com sucesso:

- `/assets/css/tailwind.generated.css`
- `/assets/css/site.css`
- `/assets/js/site.js`
- `/assets/img/cases/*-640.webp`
- `/assets/img/foto-placeholder.svg`

## Decisão

A substituição do Tailwind CDN por CSS local é tecnicamente viável.

Esta branch remove a dependência runtime do Tailwind CDN e preserva o CSS customizado principal em `assets/css/site.css`.

## Próximo passo recomendado

Após merge, rodar PSI mobile e desktop em branch documental:

`docs/add-post-tailwind-local-css-psi-validation`

Validar:

- performance mobile;
- performance desktop;
- network dependency tree;
- unused JavaScript;
- render blocking;
- acessibilidade;
- presença/ausência de Tailwind CDN nos diagnósticos.

## Fora do escopo

- Não alterar layout.
- Não alterar copy.
- Não alterar motion.
- Não alterar JS.
- Não alterar imagens.
- Não alterar acessibilidade.
- Não mexer em GSAP/ScrollTrigger.
