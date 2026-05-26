# Portfolio Agent Orchestration

## Purpose

This folder documents the operating model for using AI agents in the portfolio project.

## Main cockpit

Antigravity is the preferred cockpit for this project.

Use Antigravity for:

- file navigation;
- terminal;
- Git;
- PowerShell;
- Claude Code;
- Codex when available;
- local validation.

## Tool roles

- ChatGPT: strategy, diagnosis, prompts, review and decision support.
- Claude Code: repository-aware executor.
- Codex: alternative code executor when available.
- GitHub CLI: PR creation and merge from terminal.
- Git: source of truth.
- Antigravity: single operating environment.

## Current agent set

- `portfolio-orchestrator`
- `case-strategist`
- `frontend-implementer`
- `git-pr-reviewer`

## Current skills

- `case-page-foundation`
- `pr-closeout`
- `visual-regression-check`
- `psi-validation`

## Rule

Agents and skills must serve the portfolio.

They must not become a separate product or distraction from the main goal: creating a strong portfolio around complex systems, operational platforms and decision infrastructure.

## Operating command prompts

Reusable command prompts live in:

`docs/orchestration/COMMAND_PROMPTS.md`

Use this file for:

- session start;
- session closeout;
- home refinement;
- case creation;
- case refinement;
- visual regression checks;
- PSI validation;
- PR closeout through terminal.

## HTML/CSS/JS organization rule

All created or updated HTML pages must preserve semantic structure.

CSS belongs in `assets/css/`.

JavaScript belongs in `assets/js/`.

Large inline CSS or JavaScript blocks are not acceptable as a default pattern.

Every created or updated portfolio page must support both PT-BR and EN-US.

