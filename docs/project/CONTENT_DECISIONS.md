# Content Decisions — Portfolio Expansion

Date: 2026-06-02

## Principle

No metrics, dates, roles, clients, or impact claims were added unless they were already present in local project documentation.

Primary sources used:

- `docs/Henrico-Amaral-CV.md`
- `docs/CASE_PETROBRAS.md`
- `docs/CASE_BAYER.md`
- `docs/CASE_AMBEV.md`
- `docs/CASE_BMG.md`
- `docs/metrics-audit.md`
- `docs/project/PRODUCT.md`
- `ai-memory/01-project-context.md`
- `ai-memory/02-product-positioning.md`

## Metrics

### Petrobras

The Petrobras page and home may continue to use the documented 95% automation/documentation claim because `docs/metrics-audit.md` marks it as high-confidence and `docs/CASE_PETROBRAS.md` includes the claim.

### Bayer

No quantitative metric was added. The page uses qualitative language around agricultural data traceability and technical decision structure.

Reason: `docs/metrics-audit.md` marks previous Bayer quantitative claims as low confidence.

### Ambev

No quantitative metric was added. The page uses qualitative language around operational visibility, continuous reading, and logistics exceptions.

Reason: `docs/metrics-audit.md` marks previous Ambev quantitative claims as low confidence.

### BMG

No quantitative opening-time metric was added. The page uses qualitative language around regulated flow simplification, modularity, and traceability.

Reason: `docs/metrics-audit.md` marks the previous “less than 24 hours” claim as medium/low confidence.

## About Page

The About page uses only claims already present in local material:

- Approx. 20 years in digital design.
- 15+ years in UX/Product Design.
- Senior Product Designer positioning.
- Enterprise/B2B/internal systems focus.
- Projects for Petrobras, Bayer, Ambev, Banco do Brasil, Bradesco, Claro, Globo, iFood, BMG, and Youse.
- Tools listed in `docs/Henrico-Amaral-CV.md` and the existing home copy.

The timeline is intentionally phase-based, not year-based, because no complete dated career chronology was available in the local source files.

## Tone

Copy decisions follow `docs/project/PRODUCT.md` and `ai-memory/02-product-positioning.md`:

- Prefer structural, precise, sober language.
- Avoid generic claims like “innovative,” “seamless,” “delightful,” or “transformação digital.”
- Emphasize architecture, constraints, operational clarity, traceability, and decision support.

## Bilingual Handling

Standalone About and case pages use inline `.lang-pt` / `.lang-en` spans.

Global visibility rules now live in `assets/css/site.css`:

- `html[data-lang="en"] .lang-pt { display: none; }`
- `html[data-lang="pt"] .lang-en { display: none; }`

This avoids duplicating bilingual visibility rules per page.
