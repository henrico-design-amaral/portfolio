# Local Lighthouse Pass — 2026-06-02/2026-06-03

Scope: local Lighthouse runs against `http://127.0.0.1:4173`.

These are local validation artifacts, not production PageSpeed Insights results.

## Mobile

| Report | Performance | Accessibility | Best Practices | SEO | FCP | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `lh-home-mobile.json` | 78 | 100 | 100 | 100 | 3.3 s | 4.4 s | 0.056 | 0 ms |
| `lh-about-mobile.json` | 83 | 100 | 100 | 100 | 3.5 s | 3.6 s | 0 | 0 ms |
| `lh-petrobras-mobile.json` | 81 | 100 | 100 | 100 | 3.6 s | 3.8 s | 0.001 | 0 ms |
| `lh-bayer-mobile.json` | 83 | 100 | 100 | 100 | 3.5 s | 3.6 s | 0.034 | 0 ms |
| `lh-ambev-mobile.json` | 83 | 100 | 100 | 100 | 3.5 s | 3.6 s | 0 | 0 ms |
| `lh-bmg-mobile.json` | 83 | 100 | 100 | 100 | 3.5 s | 3.6 s | 0.007 | 0 ms |

## Desktop

| Report | Performance | Accessibility | Best Practices | SEO | FCP | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `lh-home-desktop.json` | 97 | 100 | 100 | 100 | 1.5 s | 2.4 s | 0.045 | 20 ms |
| `lh-about-desktop.json` | 82 | 100 | 100 | 100 | 3.5 s | 3.6 s | 0 | 0 ms |
| `lh-petrobras-desktop.json` | 99 | 100 | 100 | 100 | 1.7 s | 2.0 s | 0.001 | 0 ms |
| `lh-bayer-desktop.json` | 99 | 100 | 100 | 100 | 1.5 s | 1.8 s | 0.034 | 0 ms |
| `lh-ambev-desktop.json` | 83 | 100 | 100 | 100 | 3.5 s | 3.6 s | 0 | 0 ms |
| `lh-bmg-desktop.json` | 94 | 100 | 100 | 100 | 2.3 s | 2.7 s | 0.007 | 0 ms |

## Reruns

Additional desktop reruns were kept because the local environment showed strong FCP/LCP variance without TBT, CLS, accessibility, best-practices, or SEO regressions.

| Report | Performance | Accessibility | Best Practices | SEO | FCP | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `lh-about-desktop-rerun.json` | 94 | 100 | 100 | 100 | 2.3 s | 2.7 s | 0 | 0 ms |
| `lh-ambev-desktop-rerun.json` | 58 | 100 | 100 | 100 | 7.8 s | 8.1 s | 0 | 0 ms |
| `lh-ambev-desktop-rerun-2.json` | 99 | 100 | 100 | 100 | 1.5 s | 1.8 s | 0 | 0 ms |

Operational notes:

- Lighthouse on this Windows environment can emit cleanup errors for temporary files. The JSON files listed above were written and parsed successfully.
- Bayer and BMG had one slower local run before rerun; the final JSONs use the latest successful rerun.
- Desktop About and Ambev had additional reruns; all reruns stayed at 100 for accessibility, best practices, and SEO.
- The local static server does not reproduce production caching headers, so cache-related savings are expected in local reports.
