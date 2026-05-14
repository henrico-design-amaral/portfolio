# Product

## Register

brand

## Users

Senior evaluators operating inside enterprise organizations: Head of Design, Staff and Principal Designers, Product Directors, Platform Leads, Engineering Leadership, Enterprise UX Leaders. They arrive during structured hiring or partnership evaluation — not casual browsing. They are reading at a desk, with time and intent, assessing whether this designer can operate at system-architecture depth, not just interface execution. Their threshold question is: "Does this person think before the screen?"

## Product Purpose

A technical editorial platform that makes structural decision-making visible. Not a visual portfolio. Not a UI gallery. A documentation architecture that exposes how Henrico Amaral reasons about signal modeling, entity architecture, permission logic, state transitions, monitoring hierarchies, and organizational impact — before any interface exists.

Success looks like: a staff-level evaluator reading the portfolio and immediately understanding that design decisions here happen at the organizational layer, not the component layer. The portfolio is itself an artifact of that thinking.

Cases covered: SALA CAR (monitoring hierarchy, signal orchestration), Bayer (dataset aggregation, interpretation hierarchy), Ambev (exception visibility, event-flow logistics), BMG (permission architecture, compliance layers, transaction state machines).

## Brand Personality

Structural · Precise · Undecorated

The voice is that of a principal engineer writing documentation — no enthusiasm, no self-promotion, no adjectives that don't earn their place. The interface communicates through structure, not styling. Confidence without performance.

## Anti-references

- UI gallery portfolios (Dribbble-style image grids, screenshot-first storytelling)
- Generic "design thinking" process showcases (double diamond, empathy maps as decoration)
- SaaS landing pages with hero-metric templates (big number + small label + gradient accent)
- Visual-first storytelling that places aesthetics before architecture
- Isolated component showcases without operational context
- Any layout that could be mistaken for a marketing site for a software product

## Design Principles

1. **Architecture before interface.** Every section exposes the reasoning layer that precedes the screen — signal modeling, entity relationships, state machines, permission matrices. Interface is the output, not the subject.

2. **Diagram-first storytelling.** Structural diagrams carry the argument. Typography and layout exist to frame the diagram, not compete with it.

3. **Constraint-driven narrative.** Each case is defined by its operational constraints (regulatory, organizational, multi-system). The constraint is the context. Removing it makes the work meaningless.

4. **Impact before aesthetics.** Organizational outcomes — automation, interpretation acceleration, compliance traceability — are the claim. Visual decisions serve that claim. Never the reverse.

5. **Silence as a signal.** The absence of decorative motion, gradient text, glassmorphism, and identical card grids communicates competence. The portfolio should feel like a well-engineered system, not a designed artifact.

## Color System (Canonical)

Per PDR v2 and DESIGN_SYSTEM v1:

- Primary accent: `#680A08` (deep brick red)
- Surface neutral: `#DACCB7` (warm parchment)
- Structural black: `#000000`
- Structural white: `#FFFFFF`
- Distribution: 60% black / 30% reading surface / 10% accent

`index.html` uses `#d45c5a` (brighter terracota) — acceptable exploration, not canonical.
`index2.html` uses `#FFD100` (yellow) — exploratory variant, non-canonical. May be kept as parallel experiment.

## Accessibility & Inclusion

WCAG 2.1 AA minimum. Critical considerations for this context:
- Signals and state indicators must never rely on color alone (iconography + position reinforcement required)
- All escalation/priority states need non-color differentiation
- Keyboard navigation mandatory for all interactive surfaces
- Reduced-motion support required (prefers-reduced-motion) — motion is functional, not decorative, so graceful degradation matters

## Agent Operating Rules (Memory)

**STRICT DIRECTIVES FOR AI AGENTS:**
1. **NO AUTO-COMMITTING:** Do not execute `git commit` or `git push` autonomously. Only commit when explicitly instructed by the user.
2. **BILINGUAL PARITY IS MANDATORY:** Any and all content updates must ALWAYS be reflected simultaneously in both languages (PT and EN) within the `site.js` dictionary or HTML structure. Parity is non-negotiable.
3. **AUTONOMOUS EXECUTION:** Do not ask for permission to execute actions or tools. Execute them proactively.
