# Command Prompts — Portfolio

Prompts reutilizáveis para trabalhar no portfólio dentro do Antigravity, Claude Code, Codex ou outro executor com acesso ao repositório.

## 1. Start session

Read CLAUDE.md first.

Use:
- portfolio-orchestrator
- session-start skill

Task:
Start a new work session for this repository.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Identify the current branch.
4. Identify staged, modified and untracked files.
5. Check whether the branch matches the task.
6. If there are unrelated changes, stop and report.
7. Do not edit files.
8. Do not commit.

Report:
- current branch;
- working tree status;
- risks;
- recommended next branch;
- whether it is safe to proceed.

## 2. Close session

Read CLAUDE.md first.

Use:
- git-pr-reviewer
- session-closeout skill

Task:
Close the current work session safely.

Run:
- git status -sb
- git branch --show-current
- git diff --stat
- git diff --cached --stat
- git log --oneline -5

Report:
- current branch;
- changed files;
- staged files;
- untracked files;
- commits created;
- pushed/not pushed;
- PR status;
- whether main is clean;
- next recommended action.

Do not say the session is complete unless git status is clean or all remaining changes are explicitly listed.

## 3. Home refinement

Read CLAUDE.md first.

Use:
- portfolio-orchestrator
- portfolio-home-strategist
- frontend-implementer
- homepage-refinement skill
- homepage-quality-audit skill
- anti-ai-slop-editorial-review skill
- design-taste-review skill
- html-page-structure-guard skill
- visual-regression-check skill

Task:
Audit and refine the portfolio home page.

Scope:
- Inspect index.html.
- Inspect assets/css/site.css.
- Inspect assets/js/site.js only if behavior is relevant.
- Do not edit before reporting the plan.
- Preserve PT-BR and EN-US.
- Preserve semantic HTML.
- Keep CSS in assets/css/.
- Keep JS in assets/js/.
- Avoid inline CSS/JS unless strictly necessary and documented.
- Do not commit.

First output:
- diagnosis;
- proposed changes;
- files that would be touched;
- risks.

## 4. Create case page

Read CLAUDE.md first.

Use:
- portfolio-orchestrator
- case-strategist
- frontend-implementer
- case-page-foundation skill
- case-page-refinement skill
- anti-ai-slop-editorial-review skill
- design-taste-review skill
- html-page-structure-guard skill
- visual-regression-check skill

Task:
Create the case page: [CASE NAME].

Mandatory:
- PT-BR and EN-US content.
- Semantic HTML.
- CSS in assets/css/.
- JS in assets/js/.
- No large inline style blocks.
- No unnecessary scripts.
- No invented metrics.
- No fake screenshots.
- No generic UX case language.
- Preserve portfolio visual language.
- Do not alter unrelated files.
- Do not commit.

After editing:
- report files changed;
- explain semantic structure;
- explain CSS/JS organization;
- explain bilingual implementation;
- list risks and validation needed.

## 5. Refine case page

Read CLAUDE.md first.

Use:
- portfolio-orchestrator
- case-strategist
- frontend-implementer
- case-page-refinement skill
- anti-ai-slop-editorial-review skill
- design-taste-review skill
- html-page-structure-guard skill
- visual-regression-check skill

Task:
Refine the case page: [CASE PAGE PATH].

Scope:
- Work only on the specified case page and required page-specific CSS/JS files.
- Do not alter home unless explicitly asked.
- Do not alter global CSS/JS without explaining why.
- Preserve PT-BR and EN-US.
- Preserve semantic HTML.
- Move page-specific CSS to assets/css/.
- Move page-specific JS to assets/js/.
- Do not commit.

First output:
- current page diagnosis;
- semantic issues;
- CSS/JS organization issues;
- bilingual issues;
- proposed correction plan;
- risks.

## 6. Visual regression check

Read CLAUDE.md first.

Use Playwright MCP if available.

Use:
- frontend-implementer
- visual-regression-check skill

Task:
Validate the current UI change locally.

Do not edit files.

Checks:
1. Open the local page.
2. Confirm page renders.
3. Confirm PT-BR content is visible.
4. Confirm EN-US toggle works where applicable.
5. Confirm navigation works.
6. Confirm mobile navigation works.
7. Confirm no obvious horizontal scroll.
8. Confirm no visible encoding corruption.
9. Confirm no broken images.
10. Report console errors if available.

## 7. PSI validation

Read CLAUDE.md first.

Use:
- git-pr-reviewer
- psi-validation skill

Task:
Run PageSpeed Insights validation.

Scope:
- Documentation-only branch.
- Do not alter product files.
- Save mobile JSON.
- Save desktop JSON.
- Create README with scores, diagnostics and comparison to baseline.

## 8. PR closeout through terminal

Read CLAUDE.md first.

Use:
- git-pr-reviewer
- pr-closeout skill

Task:
Close this branch through GitHub CLI.

Run:
- git status -sb
- git branch --show-current
- git diff --stat
- git diff --cached --stat

If clean and committed:
- git push
- gh pr create
- gh pr merge --squash --delete-branch
- git switch main
- git pull
- git fetch --prune
- git status -sb

Report:
- PR number;
- merge status;
- branch deletion status;
- final main status.
