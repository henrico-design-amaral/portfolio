# Case Page Refinement Skill

## Purpose

Create or refine individual case pages with strong narrative, semantic HTML and clean separation of concerns.

## Scope

Use this skill when editing pages under:

`cases/`

## Required agents

Recommended:

- `portfolio-orchestrator`;
- `case-strategist`;
- `frontend-implementer`;
- `git-pr-reviewer`.

## Required companion skills

Recommended:

- `case-page-foundation`;
- `anti-ai-slop-editorial-review`;
- `design-taste-review`;
- `html-page-structure-guard`;
- `visual-regression-check`.

## Rules

- Every case must support PT-BR and EN-US.
- Every case must use semantic HTML.
- CSS belongs in `assets/css/`.
- JS belongs in `assets/js/`.
- Avoid large inline CSS and JS.
- Do not invent metrics.
- Do not create fake screenshots.
- Do not use generic UX case language.
- Do not over-design.
- Do not alter global assets unless required and documented.
- Do not commit without explicit instruction.

## Case narrative requirements

A case must clarify:

- context;
- operational problem;
- constraints;
- user/system actors;
- role and responsibility;
- decision model;
- design decisions;
- trade-offs;
- impact without inflated claims;
- reflection.

## Output

Before implementation, report:

- current case state;
- weak points;
- proposed structure;
- files likely to be touched;
- risks.

After implementation, report:

- files changed;
- semantic structure;
- CSS/JS organization;
- bilingual implementation;
- claims that need human verification;
- visual/accessibility validation required.
