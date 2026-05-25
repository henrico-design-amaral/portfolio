# Image Delivery and Cache Hints Fix

## Contexto

Correção inicial de performance após a inspeção `render-blocking-images-cache-inspection`.

A frente de acessibilidade já está encerrada com:

- Mobile Accessibility: 100
- Desktop Accessibility: 100

Esta branch foca apenas em entrega de imagens e documentação de cache.

## Evidência usada

Arquivos de inspeção:

- `image-asset-inventory.csv`
- `image-delivery-insight-items.csv`
- `cache-insight-items.csv`

O PSI apontou desperdício nas imagens dos cases:

### Mobile

- `ambev.webp`
- `petrobras.webp`
- `bayer.webp`

### Desktop

- `ambev.webp`
- `petrobras.webp`
- `bayer.webp`
- `bmg.webp`

## O que foi alterado

Foram criadas variantes responsivas das imagens dos cases:

- `petrobras-640.webp`
- `petrobras-960.webp`
- `ambev-640.webp`
- `ambev-960.webp`
- `bayer-640.webp`
- `bayer-960.webp`
- `bmg-640.webp`
- `bmg-960.webp`

O `index.html` foi atualizado para usar:

- `srcset`
- `sizes`
- `loading="lazy"`
- `decoding="async"`
- `width`
- `height`

## Decisão sobre cache

O diagnóstico de cache aponta assets servidos pela publicação estática.

Nesta branch, não foi aplicada correção artificial de cache via HTML ou JavaScript.

Cache deve ser tratado separadamente apenas se houver controle real sobre headers, CDN, Service Worker ou camada de hosting.

## Fora do escopo

- Não altera layout.
- Não altera copy.
- Não altera JavaScript.
- Não altera acessibilidade.
- Não altera motion.
- Não corrige render blocking.
- Não mexe em cache por workaround.

## Próximo passo

Após merge, rodar PSI mobile e desktop em uma branch documental:

`docs/add-post-image-delivery-cache-hints-validation`

Validar se houve redução no diagnóstico `image-delivery-insight`.
