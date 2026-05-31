# Home Index Legacy Backup

**Data:** 2026-05-31 18:10 (BRT / UTC-3)
**Branch de origem:** main
**Commit de origem:** `3371c79f46315938e237e237c34f91bea4c2f11b` — `docs: link portfolio raw assets (#48)`
**Motivo:** Reconstrução absoluta da home (home/rebuild-index-from-zero). A index acumulou resíduos de múltiplas iterações (Orbital Hero, hero-system, hc.1–hc.4, hex grid, ev-orbit), CSS contaminado e JS acoplado. A decisão foi zerar a home e construir uma base limpa, semântica e controlável desde o início.

---

## Arquivos copiados

| Arquivo original | Arquivo neste backup |
|---|---|
| `index.html` | `index.html` |
| `assets/css/site.css` | `site.css` |
| `assets/css/tailwind.generated.css` | `tailwind.generated.css` |
| `assets/css/tailwind.input.css` | `tailwind.input.css` |
| `assets/css/case-petrobras.css` | `case-petrobras.css` |
| `assets/js/site.js` | `site.js` |
| `tailwind.config.js` | `tailwind.config.js` |
| `package.json` | `package.json` |
| `package-lock.json` | `package-lock.json` |
| `favicon.svg` | `favicon.svg` |

---

## Assets carregados pela index (mapeamento completo)

### CSS / Fontes
- `assets/css/tailwind.generated.css?v=20260526-home-fix-01`
- `assets/css/site.css?v=20260526-home-fix-01`
- Google Fonts: Syne, Inter, JetBrains Mono (CDN)

### JavaScript
- `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js` (CDN, defer)
- `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js` (CDN, defer)
- `assets/js/site.js?v=20260526-home-fix-01` (defer)

### Imagens
- `assets/img/cases/petrobras.webp` (+ 640w, 960w srcset)
- `assets/img/cases/ambev.webp` (+ 640w, 960w srcset)
- `assets/img/cases/bayer.webp` (+ 640w, 960w srcset)
- `assets/img/cases/bmg.webp` (+ 640w, 960w srcset)
- `assets/img/foto-placeholder.svg`
- `favicon.svg`

---

## Problemas conhecidos

- `site.css` tem 2851 linhas — contém lixo residual de pelo menos 5 iterações de hero diferentes
- `site.js` tem ~815 linhas — acoplado diretamente ao HTML legado (seletores de classe obsoletos)
- index.html contém: `hero-system`, `ev-orbit`, `hero-card`, `hero-line`, `orbit-node`, `hc.1–hc.4` (comentados ou em legado escondido)
- Dois IDs `#hero` existiram em alguma iteração; branch anterior tentou isolar com `#hero-legacy`
- Copy antiga continha "Arquitetura de decisão para sistemas críticos" e "Decision infrastructure for complex platforms"
- `tailwind.generated.css` gerado a partir de classes arbitrárias espalhadas no HTML — não reflete um sistema controlado
- GSAP carregado via CDN sem fallback local
- Sem `home.css` separado — tudo misturado em `site.css`

---

## Decisão

Este backup preserva a home anterior completa antes da reconstrução absoluta da index.

A nova home usará:
- `index.html` — reescrito do zero
- `assets/css/home.css` — CSS limpo sem herdar site.css
- `assets/js/home.js` — JS limpo sem herdar site.js

`site.css` e `site.js` permanecem preservados aqui e não serão carregados pela nova home.

---

## Branch de destino

`home/rebuild-index-from-zero`
