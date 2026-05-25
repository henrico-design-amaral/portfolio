# Performance Inspection — Tailwind CDN Runtime Cost

## Contexto

Inspeção técnica do custo de runtime do Tailwind CDN no portfolio.

Esta branch foi criada após a inspeção de render blocking e network tree indicar que a próxima frente de performance deveria investigar dependências externas, especialmente o Tailwind CDN.

Fonte base:

`docs/audits/performance/second-post-image-delivery-psi/`

## Estado antes desta inspeção

Acessibilidade está encerrada:

- Mobile Accessibility: 100
- Desktop Accessibility: 100

A frente de imagens responsivas também foi validada:

- Image delivery mobile: 410 KiB → 27 KiB
- Image delivery desktop: removido do resumo PSI
- Segunda rodada desktop voltou para Performance 98

## Arquivos gerados

- `tailwind-cdn-references.txt`
- `mobile-network-dependency-tree-items.json`
- `desktop-network-dependency-tree-items.json`
- `network-tree-cdn-matches.txt`
- `mobile-unused-javascript-items.json`
- `desktop-unused-javascript-items.json`
- `unused-js-cdn-matches.txt`

## Evidências encontradas

### HTML

O `index.html` carrega:

- GSAP via CDN com `defer`
- ScrollTrigger via CDN com `defer`
- Tailwind via CDN sem `defer`
- `tailwind.config` inline
- `assets/js/site.js` com `defer`

Trecho relevante:

- `<script src="https://cdn.tailwindcss.com"></script>`
- `tailwind.config = { ... }`

## Network dependency tree

O audit `network-dependency-tree-insight` encontrou Tailwind CDN no caminho de rede:

- `https://cdn.tailwindcss.com/3.4.17`

No mobile, o recurso aparece com:

- `transferSize`: 127110 bytes
- `navStartToEndTime`: 259

Também aparece o CSS local:

- `assets/css/site.css`

## JavaScript não utilizado

O audit de JavaScript não utilizado aponta Tailwind CDN como fonte de desperdício.

### Desktop

- URL: `https://cdn.tailwindcss.com/`
- `wastedBytes`: 38452
- `wastedPercent`: 30.45676305431903
- `totalBytes`: 126250

### Mobile

- URL: `https://cdn.tailwindcss.com/`
- `wastedBytes`: 38458

## Diagnóstico

A suspeita principal foi confirmada: o Tailwind CDN está presente na árvore de dependência de rede e também aparece no audit de JavaScript não utilizado.

O problema não parece estar concentrado no `assets/js/site.js`, porque a inspeção aponta diretamente para o Tailwind CDN como recurso externo relevante.

GSAP e ScrollTrigger estão presentes como dependências externas, mas ambos já usam `defer`. Eles devem ser analisados depois, não antes do Tailwind.

O Tailwind CDN é aceitável para protótipos, mas é inadequado como dependência de runtime em uma página de portfolio publicada, principalmente porque:

- adiciona dependência externa;
- executa lógica no cliente;
- aparece na árvore de dependência de rede;
- aparece no audit de JavaScript não utilizado;
- dificulta controle de cache e estabilidade de carregamento.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a inspeção do custo de runtime do Tailwind CDN.

## Próximo passo recomendado

Criar uma branch técnica para preparar uma migração controlada para CSS local/buildado:

`perf/plan-tailwind-build-migration`

Escopo sugerido:

- mapear classes Tailwind usadas no `index.html`;
- preservar tokens atuais do `tailwind.config`;
- avaliar criação de `tailwind.config.js`;
- avaliar criação de `package.json`;
- gerar CSS local compilado;
- remover `https://cdn.tailwindcss.com` apenas depois de validação visual;
- comparar PSI antes/depois;
- garantir que nenhuma regressão visual seja introduzida.

## Fora do escopo

- Não remover Tailwind CDN nesta branch.
- Não alterar HTML.
- Não alterar CSS.
- Não alterar JavaScript.
- Não alterar imagens.
- Não alterar layout.
- Não alterar motion.
- Não mexer em GSAP ainda.
- Não aplicar build sem plano e validação.
