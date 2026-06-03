# Final Portfolio Review — Current Local Pass

Date: 2026-06-02

Branch: `portfolio/codex-goal-execution`

Scope reviewed:

- Home: `index.html`
- About: `about.html`
- Cases: `cases/petrobras.html`, `cases/bayer.html`, `cases/ambev.html`, `cases/bmg.html`
- Shared CSS/JS: `assets/css/site.css`, `assets/css/case-petrobras.css`, `assets/css/about.css`, `assets/js/site.js`

## Evidence

Commands run locally:

```bash
node --check assets/js/site.js
node --check tools/portfolio-verify.js
npm run build:css
npm run verify:site
npx lighthouse <local-url> --emulated-form-factor=mobile --output=json
npx lighthouse <local-url> --emulated-form-factor=desktop --output=json
```

`npm run verify:site` checks:

- HTTP 200 for home, About, and all four case pages.
- Viewports: 390px, 1366px, 1440px.
- One `h1`, one `main`, and one `footer` per page.
- No horizontal overflow above 1px.
- No console warnings/errors captured by Playwright.
- PT/EN visibility state.
- EN language toggle on `about.html`.
- Local `href`, `src`, `srcset`, CSS `url(...)`, and HTML anchor references.
- Home case modal content, dedicated case links, Escape close behavior, and keyboard activation with Enter and Space.

Latest verified result:

```json
{
  "checkedPages": 18,
  "englishToggle": {
    "lang": "en",
    "dataLang": "en",
    "h1": "Structure before the screen.",
    "visiblePT": 0,
    "visibleEN": 55,
    "overflow": 0
  },
  "caseModal": {
    "cards": 4,
    "enterOpens": true,
    "spaceOpens": true,
    "messages": []
  },
  "localReferences": {
    "failures": []
  },
  "failures": []
}
```

Local Lighthouse mobile reports were saved in:

`docs/audits/performance/local-final-lighthouse-20260602/`

Mobile:

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Home | 78 | 100 | 100 | 100 |
| About | 83 | 100 | 100 | 100 |
| Petrobras | 81 | 100 | 100 | 100 |
| Bayer | 83 | 100 | 100 | 100 |
| Ambev | 83 | 100 | 100 | 100 |
| BMG | 83 | 100 | 100 | 100 |

Desktop:

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Home | 97 | 100 | 100 | 100 |
| About | 82 | 100 | 100 | 100 |
| Petrobras | 99 | 100 | 100 | 100 |
| Bayer | 99 | 100 | 100 | 100 |
| Ambev | 83 | 100 | 100 | 100 |
| BMG | 94 | 100 | 100 | 100 |

Notes:

- Scores are local Lighthouse scores from `http://127.0.0.1:4173`, not production PageSpeed Insights scores.
- Mobile Lighthouse runs showed 0 ms total blocking time on all six pages.
- Desktop Lighthouse primary runs showed 0 ms total blocking time on five pages and 20 ms on Home.
- Desktop reruns were kept for About and Ambev because the local environment showed FCP/LCP variance without accessibility, best-practices, SEO, TBT, or CLS regressions.
- `npm run build:css` still emits the existing Browserslist stale data warning.

## Acceptance Checklist

| Requirement | Current Evidence | Status |
|---|---|---|
| Site opens locally without error | `npm run verify:site` returned HTTP 200 for all public pages | Passed |
| Console clean | Playwright captured zero warnings/errors in checked pages/viewports | Passed |
| Home available | `index.html` verified at 390, 1366, 1440 | Passed |
| Case pages accessible | Petrobras, Bayer, Ambev, BMG verified at 390, 1366, 1440 | Passed |
| About page accessible | `about.html` verified at 390, 1366, 1440 | Passed |
| PT/EN preserved where implemented | `about.html` and case pages use `.lang-pt/.lang-en`; toggle verified on About | Passed for checked pages |
| Mobile 390px without overflow | Playwright overflow check returned 0 | Passed |
| Desktop 1366/1440 consistent at technical level | Playwright overflow/console/landmark checks passed | Passed |
| No invented metrics | New pages use qualitative impact except Petrobras 95%, already documented | Passed by content review |
| No Google Fonts external loading | Search found no `fonts.googleapis` / `fonts.gstatic` in active HTML | Passed |
| Basic semantic landmarks | One `main`, one `footer`, one `h1` in checked pages | Passed |
| Internal links/assets/anchors | `npm run verify:site` returned `localReferences.failures: []` | Passed |
| Case modal integration | `npm run verify:site` verified 4 cards, page links, Escape close, Enter and Space activation | Passed |
| Lighthouse accessibility | Local mobile and desktop reports scored 100 on all six checked pages | Passed |
| Lighthouse best practices and SEO | Local mobile and desktop reports scored 100 on all six checked pages | Passed |

## Remaining Risk

- Published URL PageSpeed Insights was not run in this pass. Local Lighthouse results may differ from production/CDN results.
- Visual quality was spot-checked through screenshots, but not reviewed by an external human reviewer.
- The home still uses external GSAP/ScrollTrigger from CDN because that was existing behavior and removing it would be a separate motion/runtime task.
- Performance scores still have room for improvement, especially Home at 78 and Petrobras at 81 in local mobile Lighthouse, and About at 82 / Ambev at 83 in primary local desktop Lighthouse.
- Local Lighthouse reported cache and unused CSS savings because the local static server does not mirror production caching and the site ships shared CSS across pages.

## Recommendation

Before PR:

1. Run PageSpeed Insights on the published preview after deployment.
2. Review the rendered About and case pages manually in browser.
3. Decide whether Playwright should remain as a devDependency or be moved to an ad-hoc validation workflow.
