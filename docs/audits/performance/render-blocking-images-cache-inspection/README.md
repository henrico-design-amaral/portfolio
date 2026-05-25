# Performance Inspection — Render Blocking, Images and Cache

## Contexto

Inspeção técnica dos diagnósticos residuais de performance após o fechamento da frente estrutural de acessibilidade.

A auditoria base usada foi:

`docs/audits/performance/post-residual-color-contrast-fix-psi/`

Estado validado antes desta inspeção:

- Mobile: Performance 82, Acessibilidade 100, Boas práticas 100, SEO 100
- Desktop: Performance 97, Acessibilidade 100, Boas práticas 100, SEO 100

## Arquivos gerados

- `performance-residual-audits.csv`
- `performance-priority-audits.csv`

## Diagnósticos prioritários encontrados

### Mobile

- `forced-reflow-insight`
- `network-dependency-tree-insight`
- `cache-insight`
- `image-delivery-insight`
- `mainthread-work-breakdown`
- `cumulative-layout-shift`

### Desktop

- `forced-reflow-insight`
- `network-dependency-tree-insight`
- `cache-insight`
- `image-delivery-insight`
- `cumulative-layout-shift`

## Leitura dos dados

A performance mobile ainda é a frente mais sensível.

Principais sinais no mobile:

- FCP: 3,6 s
- LCP: 3,6 s
- Main thread: 2,2 s
- Economia estimada em imagens: 410 KiB
- Economia estimada em cache: 499 KiB

Principais sinais no desktop:

- Performance já está alta, em 97
- Ainda há oportunidades em imagens, cache, árvore de dependência de rede e reflow
- O desktop não deve ser o primeiro alvo de otimização pesada

## Diagnóstico

A próxima frente de performance deve priorizar mobile.

Ordem sugerida de investigação:

1. Imagens
2. Cache
3. Render blocking / dependência de rede
4. Main thread
5. Reflow forçado

A razão é simples: imagens e cache têm economia clara reportada pelo PSI e tendem a ser menos arriscados do que mexer em JavaScript, layout ou arquitetura visual.

## Decisão

Não corrigir nada nesta branch.

Esta branch registra apenas a inspeção dos diagnósticos residuais de performance.

## Próximo passo recomendado

Criar uma branch de correção focada primeiro em imagens e cache:

`perf/fix-image-delivery-and-cache-hints`

Escopo sugerido:

- inspecionar imagens usadas no portfolio;
- identificar formatos, tamanhos e pesos;
- revisar atributos `loading`, `decoding`, `fetchpriority`, `width` e `height`;
- avaliar cache apenas se houver controle real no GitHub Pages;
- evitar alterações visuais;
- evitar refatoração de JS;
- não mexer em acessibilidade já resolvida.

Se cache não for controlável pelo projeto por causa do GitHub Pages, registrar como limitação em vez de tentar solução artificial.
