# CLAUDE.md — Portfolio Project Instructions

Read this file before working in this repository.

## Source of truth

- `AGENTS.md` is the main operational constitution of the project.
- `docs/orchestration/` contains workflow documentation.
- `docs/project/` contains project control, tasks and handoff files.
- `docs/governance/` contains quality gates, accessibility and rules.

## Current project phase

The technical optimization phase is accepted as complete for now.

Accepted baseline:

- Mobile Performance: 88
- Mobile Accessibility: 100
- Mobile Best Practices: 100
- Mobile SEO: 100
- Desktop Performance: 99
- Desktop Accessibility: 100
- Desktop Best Practices: 100
- Desktop SEO: 100

Do not continue micro-optimizing performance unless explicitly asked.

The current product phase is individual case pages, starting with Petrobras / SALA CAR.

## Operating rules

Before any change:

1. Run `git status -sb`.
2. Run `git branch --show-current`.
3. Confirm the active branch matches the task.
4. Inspect relevant files before editing.
5. Do not make broad changes.
6. Do not alter unrelated files.
7. Do not commit unless explicitly instructed.

## Branch discipline

Use one branch per intent.

Examples:

- `ops/add-portfolio-agent-orchestration`
- `case/petrobras-page-foundation`
- `case/petrobras-content-structure`
- `case/petrobras-visual-system`

Do not stack branches on top of unmerged branches.

## Do not touch unless explicitly asked

- Do not change performance optimization code.
- Do not change Tailwind build setup.
- Do not remove GSAP or ScrollTrigger.
- Do not alter global visual language.
- Do not modify `assets/js/site.js` unless the task explicitly requires it.
- Do not modify images.
- Do not modify accessibility fixes.
- Do not edit generated audit JSON files.
- Do not commit `node_modules/`.
- Do not commit private reference folders.

## Petrobras case direction

Target page:

`cases/petrobras.html`

This is not a generic UX/UI case.

It is a case about critical offshore operations, environmental incident management and decision infrastructure.

Core positioning:

The interface is not just a visual layer.
It is a coordination layer for critical operational decisions.

Avoid:

- generic UX jargon;
- invented metrics;
- fake dashboards;
- fake screenshots;
- exaggerated claims;
- startup-style landing page language.

Prefer:

- sober editorial structure;
- operational clarity;
- traceability;
- decision support;
- information hierarchy;
- system model;
- constraints;
- trade-offs;
- human and operational context.

## Final report format

At the end of any task, report:

- files changed;
- commands run;
- risks;
- what was not changed;
- next recommended step.

Never say the work is complete unless `git status -sb` is clean or the remaining changes are explicitly listed.

## HTML page structure rule

Whenever an HTML file is created or updated, the code must be as semantic as possible.

HTML must be responsible for structure and content.

CSS must live under:

`assets/css/`

JavaScript must live under:

`assets/js/`

Do not embed large CSS or JavaScript blocks inside HTML.

Inline CSS is allowed only as a deliberate temporary exception, critical minimal bootstrapping or no-script fallback.

Inline JavaScript is allowed only for critical minimal bootstrapping, such as preventing language flash before first paint.

If inline CSS or JavaScript is used, explain why it exists and whether it should be migrated later.

Every created or updated portfolio page must support both PT-BR and EN-US content.

Use clear semantic landmarks:

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `aside`;
- `footer`.

Preserve heading hierarchy and accessibility basics.

