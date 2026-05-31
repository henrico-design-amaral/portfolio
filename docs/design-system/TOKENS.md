# Design System Tokens

Tabela de tokens de especificação para o portfólio Portfolio, servindo de fundação técnica para futura implementação em variáveis CSS (`:root`).

---

## 1. Color Tokens (Pearl & Honey Palette)

| Token Name | Value | Role | Usage |
| :--- | :--- | :--- | :--- |
| `--color-cream-50` | `#f2efe9` | Fundo Elevado / Hover | Fundo de botões secundários, cards em estado hover e início do hero. |
| `--color-cream-100` | `#DAD5CD` | Fundo Primário (Pearl) | Fundo padrão da página e áreas de leitura principais. |
| `--color-cream-200` | `#c9c4bc` | Fundo Secundário | Fundo para seções de transição como Método. |
| `--color-brown-700` | `#80644a` | Fundo Transição Escuro | Fundo para a seção Sobre. |
| `--color-brown-800` | `#5d3f2e` | Fundo Escuro Elevado | Fundo para a seção de Contato. |
| `--color-brown-900` | `#472211` | Cocoa Profundo | Fundo para o rodapé (Footer). |
| `--color-gold-500` | `#BE9C6E` | Honey Gold Accent | Cor de realce em botões primários, badges de status, kickers e links ativos. |
| `--color-line-soft` | `rgba(71, 34, 17, 0.08)` | Bordas / Divisórias Claras | Bordas finas de cards e separadores horizontais em seções claras. |
| `--color-line-dark` | `rgba(242, 239, 233, 0.12)` | Bordas / Divisórias Escuras | Bordas finas de cards e separadores em seções escuras. |
| `--color-text-primary` | `#472211` | Texto Principal (Cocoa) | Títulos e parágrafos principais em fundos claros (contraste ideal). |
| `--color-text-secondary`| `#533E2B` | Texto Secundário (Mocha) | Parágrafos secundários e textos descritivos sobre fundos claros. |
| `--color-text-muted` | `#7a6a5e` | Texto Muted | Metadados, microtextos e indicações secundárias em monospace. |
| `--color-text-light` | `#f2efe9` | Texto Inverso | Texto principal utilizado sobre fundos escuros (Sobre, Contato, Footer). |
| `--color-text-light-muted`| `rgba(242, 239, 233, 0.78)`| Texto Inverso Secundário | Texto secundário sobre fundos escuros. |
| `--color-status-green` | `#10b981` | Status Online (Emerald) | Ponto indicador do badge de disponibilidade. |

---

## 2. Typography Tokens

| Token Name | CSS Family | Target Weight | Default Tracking | Default Line-height |
| :--- | :--- | :--- | :--- | :--- |
| `--font-display` | `'Syne', sans-serif` | `700` / `800` | `-0.02em` | `0.96` a `1.15` |
| `--font-body` | `'Inter', sans-serif` | `400` / `500` / `600` | `normal` | `1.55` a `1.65` |
| `--font-mono` | `'JetBrains Mono', monospace` | `500` / `600` / `700` | `0.22em` a `0.3em` | `1.0` |

### Escala de Tamanhos (Font Sizes)

| Token Name | Desktop Value | Mobile Value (390px) | Context / Application |
| :--- | :--- | :--- | :--- |
| `--font-size-hero-title` | `4.00rem` (64px) | `2.25rem` (36px) | Título principal do Hero. |
| `--font-size-section-title`| `2.50rem` (40px) | `2.00rem` (32px) | Headlines de seções principais. |
| `--font-size-card-title` | `1.50rem` (24px) | `1.25rem` (20px) | Títulos dentro de cards. |
| `--font-size-body` | `1.0625rem` (17px) | `0.9375rem` (15px) | Texto corrido de parágrafos. |
| `--font-size-nav` | `0.9375rem` (15px) | `1.50rem` (24px) | Links de menu de navegação. |
| `--font-size-label` | `0.625rem` (10px) | `0.563rem` (9px) | Badges, kickers de seção e metadados. |

---

## 3. Spacing Tokens (Scale based on 4px/8px grid)

| Token Name | Value | Application Context |
| :--- | :--- | :--- |
| `--space-1` | `4px` | Ajustes finos de alinhamento, espaçamento interno do status dot. |
| `--space-2` | `8px` | Espaçamento interno de badges de disponibilidade, lacunas de ícones. |
| `--space-3` | `12px` | Distância entre eyebrows/kickers e títulos de cards. |
| `--space-4` | `16px` | Padding interno de pequenos botões, margem inferior de parágrafos. |
| `--space-6` | `24px` | Gaps entre itens secundários, gutters laterais em desktop. |
| `--space-8` | `32px` | Padding interno de cards técnicos e cases, espaçamento entre blocos. |
| `--space-12` | `48px` | Padding vertical de cabeçalhos, gaps em grids de colunas. |
| `--space-16` | `64px` | Margem inferior de cabeçalhos de seção, separações de blocos maiores. |
| `--space-24` | `96px` | Respiros verticais amplos em seções (padding superior/inferior). |

---

## 4. Radius Tokens (Corner Softness)

| Token Name | Value | Context / Application |
| :--- | :--- | :--- |
| `--radius-xs` | `2px` | Pequenos tags e indicadores visuais rígidos. |
| `--radius-sm` | `4px` | Botões (CTAs) e badges de texto segmentado. |
| `--radius-md` | `8px` | Cards padrão de método e elementos secundários. |
| `--radius-lg` | `12px` | Cards principais de cases e seções arredondadas elevadas. |
| `--radius-full` | `9999px` | Badges em formato de pílula e botões circulares. |

---

## 5. Shadow Tokens (Functional Elevation Only)

| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `--shadow-none` | `none` | Padrão para todos os cards e superfícies planas para manter aspecto editorial. |
| `--shadow-glow` | `0 0 8px rgba(16, 185, 129, 0.3)`| Glow sutil verde para indicar status ativo online no badge. |
| `--shadow-accent`| `0 4px 12px rgba(190, 156, 110, 0.15)`| Glow contido dourado aplicado em hovers de botões primários. |

---

## 6. Motion Tokens (Aesthetic Continuity)

| Token Name | Value (Easing) | Duration / Usage |
| :--- | :--- | :--- |
| `--ease-organic` | `cubic-bezier(.22, 1, .36, 1)` | `420ms` (Média transição de hovers de cards). |
| `--ease-soft` | `cubic-bezier(.16, 1, .3, 1)` | `220ms` (Transição rápida de links e botões). |
| `--ease-spring-overshoot`| `cubic-bezier(0.175, 0.885, 0.32, 1.275)`| `600ms` (Interpolação de foco e revelação de blocos). |

---

## 7. Component Specific Tokens

### Header & Navigation
- `--header-height`: `4.5rem` (72px)
- `--header-bg`: `rgba(242, 239, 233, 0.85)`
- `--header-blur`: `12px`

### Language Toggle
- `--toggle-width`: `3.5rem` (56px)
- `--toggle-height`: `1.75rem` (28px)
- `--toggle-thumb-size`: `1.5rem` (24px)

### Section Layout
- `--section-pad-desktop`: `6rem`
- `--section-pad-mobile`: `4rem`
