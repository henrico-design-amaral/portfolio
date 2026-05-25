# Tailwind Build Foundation

## Contexto

Fundação técnica para migração futura do Tailwind CDN em runtime para CSS local/buildado.

Esta branch vem após o plano documentado em:

`docs/audits/performance/tailwind-build-migration-plan/`

## Objetivo

Criar infraestrutura mínima de build Tailwind sem alterar o comportamento atual da página publicada.

## O que foi criado

- `package.json`
- `package-lock.json`
- `tailwind.config.js`
- `assets/css/tailwind.input.css`
- `assets/css/tailwind.generated.css`

## Decisão técnica

Foi usada a versão `tailwindcss@3.4.17` para manter paridade com o CDN atualmente carregado:

`https://cdn.tailwindcss.com/3.4.17`

## O que não foi alterado

- O Tailwind CDN ainda não foi removido.
- O `index.html` não deve ser alterado nesta branch.
- O CSS gerado ainda não deve ser conectado ao HTML.
- Nenhuma alteração visual deve ser introduzida.
- Nenhuma alteração de layout, copy, motion, imagem ou acessibilidade deve ser feita.

## Por que o CSS gerado ainda não foi conectado

A conexão do CSS local e a remoção do CDN exigem validação visual própria.

Esta branch apenas prova que o projeto já tem base local para gerar Tailwind CSS.

## Próximo passo recomendado

Criar uma branch separada para testar paridade visual com CSS local:

`perf/test-tailwind-local-css-parity`

Escopo futuro:

- carregar `assets/css/tailwind.generated.css`;
- remover temporariamente o CDN apenas nessa branch;
- validar visual desktop e mobile;
- rodar PSI;
- comparar screenshots;
- só depois decidir se a migração deve ser mantida.
