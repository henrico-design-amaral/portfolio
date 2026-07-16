# MOTION — Sistema de Motion do Portfolio

Versão: v2 (2026-07-16)
Arquivos: `assets/css/motion.css`, `assets/js/motion.js`, `assets/css/hero.css` (hero da home), `assets/css/cases.css` (lightbox).

## Filosofia

Motion como leitura guiada, não como espetáculo. Cada movimento sequencia a atenção
na narrativa (chegada → varredura → prova → decisão) e reforça "controlled confidence".
Segue o PRODUCT.md: o motion nunca compete com o argumento do case, nunca atrasa o
acesso ao conteúdo e permanece legível sem JavaScript e com `prefers-reduced-motion`.

Regra de registro (brand): cada reveal combina com o que revela. Texto não usa blur.
Mídia (telas, painéis, diagramas) pode usar blur e wipe. Nenhuma seção usa entrada
idêntica "por reflexo".

## Tokens

| Token | Valor | Uso |
|---|---|---|
| `--motion-duration-fast` | 240ms | feedback, hover, chips |
| `--motion-duration-medium` | 480ms | cards, blocos, stats |
| `--motion-duration-slow` | 720ms | seções, hero, mídia |
| `--motion-ease-organic` | cubic-bezier(0.215, 0.61, 0.355, 1) | reveals |
| `--motion-ease-soft` | cubic-bezier(0.16, 1, 0.3, 1) | hovers, saídas |
| `--motion-distance-y` | 16px desktop / 8px mobile | rise |
| `--motion-blur-media` | 8px | blur-in de mídia apenas |

Saídas ≈ 75% da duração de entrada. Sem bounce, sem elastic.

## Materiais

1. **Fade** — opacidade pura. Texto grande, encerramentos (reflexão).
2. **Rise** — fade + translateY pequeno. Padrão de blocos e headers de seção.
3. **Blur-in** — fade + blur(8px→0) + scale(1.015→1). Exclusivo de mídia:
   telas dos cases, painéis, foto do about.
4. **Wipe** — clip-path inset vertical. Reservado (não aplicado por padrão).
5. **Cross-fade de navegação** — View Transitions API (`@view-transition`),
   em todas as páginas; fallback: navegação instantânea normal.
6. **Stagger** — irmãos dentro de um grupo (chips, roles, plates, stats),
   passo 60–70ms, teto ~480ms.

## Coreografia por etapa

### 1. Chegada (home `#hero`)
Sequência CSS própria em `hero.css` (9 passos, 20→440ms). Mantida como está.

### 2. Navegação entre páginas
Cross-fade via View Transitions (motion.css carregado em todas as páginas,
incluindo cases e cv). Reduced-motion: sem animação.

### 3. Home — seções
- `process`/`cases`/`impact`: rise + stagger (classes `motion-*` no HTML).
- `about`/`contact`: `.editorial-reveal` agora é classe viva (alias de rise);
  foto do about usa blur-in.

### 4. Páginas de case (`case-page--espresso`)
Coreografia 100% por seletor semântico BEM (sem classes extras no HTML):
- Hero do case: sequência no load (kicker → título → subtítulo → mídia com blur-in).
- `section-header` (kicker + número + h2): rise como unidade única.
- `chips` / `roles` / `decision-card` / `constraint`: rise rápido com stagger.
- `plate` (telas): blur-in de mídia, stagger curto entre plates.
- `impact-stat`: rise médio com stagger — sem count-up (evidência, não teatro).
- `architecture-lane`: rise com stagger.
- Diagramas (`hub-*`, `cycle`, `node`): fade discreto (o desenho já é a informação).
- `reflection`: fade puro — encerramento quieto.
- Lightbox: entrada com fade do backdrop + rise/scale do painel; saída instantânea.

### 5. CV
Apenas cross-fade de navegação (motion.css sem motion.js). Documento imediato e imprimível.

## Segurança e acessibilidade

- Conteúdo visível por padrão; estados iniciais só ativam com `html.motion-ready` (JS).
- `prefers-reduced-motion: reduce`: tudo visível, sem transição, marquee parado.
- Reveals disparam por IntersectionObserver (threshold 0.12, unobserve após 1º disparo).
- Apenas transform/opacity/filter animados; nunca propriedades de layout.
- `will-change` restrito a marquee/parallax.
