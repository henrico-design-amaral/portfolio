# Command Prompts — Portfolio

Prompts operacionais reutilizáveis para trabalhar no portfólio dentro do Antigravity, Claude Code, Codex ou qualquer executor com acesso ao repositório.

Use este arquivo para iniciar sessões, refinar a home, criar ou refinar cases, validar alterações, rodar auditorias e encerrar ciclos de trabalho com segurança.

---

## Regra global para qualquer comando

Antes de qualquer tarefa:

1. Ler `CLAUDE.md`.
2. Rodar `git status -sb`.
3. Rodar `git branch --show-current`.
4. Rodar `git stash list`.
5. Identificar arquivos modificados, staged e untracked.
6. Confirmar se a branch atual corresponde à tarefa.
7. Se houver mudanças não relacionadas, parar e reportar.
8. Não editar arquivos antes de apresentar o plano.
9. Não criar commit sem instrução explícita.
10. Não criar PR se não houver commit novo.
11. Não aplicar stash sem instrução explícita.
12. Não apagar stash sem inspeção e confirmação explícita.

Regras permanentes:

- Toda página criada ou atualizada deve suportar PT-BR e EN-US.
- Todo HTML deve ser semântico e acessível.
- CSS deve ficar em `assets/css/`.
- JavaScript deve ficar em `assets/js/`.
- Imagens devem ficar em `assets/img/`.
- Documentação deve ficar em `docs/`.
- Evitar CSS e JS inline.
- CSS/JS inline só é permitido para bootstrapping mínimo, fallback `noscript` ou justificativa técnica explícita.
- Não alterar arquivos globais como `assets/css/site.css`, `assets/js/site.js` ou `index.html` sem justificar antes.
- Não inventar métricas, resultados, telas, depoimentos, validações ou evidências.
- Não usar linguagem genérica de case UX.
- Não transformar o projeto em experimento de ferramenta. O objetivo é fortalecer o portfólio.
- Toda alteração deve ter escopo claro, impacto mínimo e possibilidade de reversão.

---

## 1. Início de sessão

```txt
Read CLAUDE.md first.

Use:
- portfolio-orchestrator
- session-start skill

Task:
Start a new work session for this repository.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git stash list.
4. Identify the current branch.
5. Identify staged files.
6. Identify modified files.
7. Identify untracked files.
8. Check whether the current branch matches the intended task.
9. If there are unrelated changes, stop and report.
10. Do not create a new branch before reporting the current state.
11. Do not edit files.
12. Do not commit.

Report:
- current branch;
- working tree status;
- existing stashes;
- staged files;
- modified files;
- untracked files;
- detected risks;
- whether it is safe to proceed;
- recommended branch name;
- next recommended action.
```

---

## 2. Criar branch para nova tarefa

```txt
Read CLAUDE.md first.

Use:
- portfolio-orchestrator
- session-start skill

Task:
Prepare a clean branch for the next task.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git stash list.
4. Confirm working tree is clean.
5. Confirm current branch is main.
6. Run git pull.
7. Run git fetch --prune.
8. Create a new branch with a clear name.

Rules:
- If working tree is not clean, stop and report.
- If current branch is not main, stop and report.
- Do not edit files.
- Do not commit.

Recommended branch naming:
- case/refine-petrobras-narrative-structure
- case/create-bayer-page-foundation
- case/create-ambev-page-foundation
- home/refine-hero-positioning
- home/refine-case-cards
- a11y/fix-specific-issue
- perf/inspect-specific-issue
- docs/update-specific-documentation
- ops/update-project-workflow

Report:
- initial branch;
- new branch;
- working tree status;
- risks;
- next recommended action.
```

---

## 3. Refinamento da home

```txt
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

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git stash list.
4. Identify unrelated changes.
5. If unrelated changes exist, stop and report.
6. Do not edit before reporting the plan.

Scope:
- Inspect `index.html`.
- Inspect `assets/css/site.css`.
- Inspect `assets/js/site.js` only if behavior is relevant.
- Do not edit case pages.
- Do not alter unrelated files.
- Do not change performance setup unless explicitly requested.
- Do not add new libraries.
- Do not commit.

Mandatory:
- Preserve PT-BR and EN-US.
- Preserve semantic HTML.
- Keep CSS in `assets/css/`.
- Keep JS in `assets/js/`.
- Avoid inline CSS/JS unless strictly necessary and documented.
- Do not touch global architecture unless explicitly justified before editing.

Focus:
- hero clarity;
- positioning within 30 seconds;
- section rhythm;
- case cards;
- method clarity;
- impact credibility;
- CTA clarity;
- mobile readability;
- visual refinement;
- language quality;
- accessibility risks.

First output:
- current diagnosis;
- strongest parts;
- weakest parts;
- proposed changes;
- files that would be touched;
- risks;
- recommended implementation phases.
```

---

## 4. Criação de novo case

```txt
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

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git stash list.
4. Identify unrelated changes.
5. If unrelated changes exist, stop and report.
6. Inspect existing case page patterns.
7. Inspect the language toggle pattern.
8. Inspect relevant CSS/JS patterns.
9. Do not edit before reporting the plan.

Scope:
- Create or update only the files required for this case.
- Create page-specific CSS in `assets/css/` if needed.
- Create page-specific JS in `assets/js/` only if needed.
- Do not alter `index.html` unless explicitly requested.
- Do not alter existing case pages unless explicitly requested.
- Do not alter global CSS/JS unless justified before editing.
- Do not commit.

Mandatory:
- PT-BR and EN-US content.
- Semantic HTML.
- CSS in `assets/css/`.
- JS in `assets/js/`.
- No large inline style blocks.
- No unnecessary scripts.
- No invented metrics.
- No fake screenshots.
- No generic UX case language.
- Preserve portfolio visual language.
- Preserve accessibility basics.

Case narrative must clarify:
- context;
- operational problem;
- constraints;
- users and system actors;
- role and responsibility;
- decision model;
- design decisions;
- trade-offs;
- impact without inflated claims;
- reflection.

First output:
- proposed case structure;
- files that would be touched;
- content strategy;
- CSS/JS organization plan;
- bilingual implementation plan;
- risks;
- recommended implementation phases.
```

---

## 5. Refinamento de case existente

```txt
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

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git stash list.
4. Identify unrelated changes.
5. If unrelated changes exist, stop and report.
6. Inspect the current case page.
7. Inspect page-specific CSS.
8. Inspect shared behavior only if relevant.
9. Do not edit before reporting the plan.

Scope:
- Work only on the specified case page.
- Work only on the related page-specific CSS/JS files.
- Do not touch `index.html`.
- Do not touch unrelated cases.
- Do not touch `assets/css/site.css` unless justified before editing.
- Do not touch `assets/js/site.js` unless justified before editing.
- Do not commit.

Mandatory:
- Preserve PT-BR and EN-US.
- Preserve semantic HTML.
- Keep page-specific CSS in `assets/css/`.
- Keep JS in `assets/js/` if new JS is required.
- Avoid large inline CSS/JS.
- Do not invent metrics.
- Do not create fake screenshots.
- Do not use generic UX case language.
- Preserve portfolio visual language.
- Preserve accessibility basics.

Audit:
1. Evaluate if the operational context is clear.
2. Evaluate if the problem is concrete.
3. Evaluate if the role is credible and specific.
4. Evaluate if the system model is strong enough.
5. Evaluate if design decisions are real decisions.
6. Evaluate if impact avoids unsupported metrics.
7. Evaluate if PT-BR and EN-US are equivalent in meaning.
8. Evaluate if the page structure is semantic and maintainable.
9. Evaluate what is missing to reach senior international case-study quality.

First output:
- current diagnosis;
- strongest parts;
- weakest parts;
- missing sections;
- proposed final case structure;
- content rewrite plan;
- visual refinement plan;
- files that would be touched;
- risks;
- recommended implementation phases.
```

---

## 6. Refatoração HTML/CSS/JS de página

```txt
Read CLAUDE.md first.

Use:
- portfolio-orchestrator
- frontend-implementer
- html-page-structure-guard skill
- visual-regression-check skill

Task:
Refactor page structure and separation of concerns for: [PAGE PATH].

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git stash list.
4. Identify unrelated changes.
5. If unrelated changes exist, stop and report.
6. Inspect the target HTML.
7. Inspect related CSS.
8. Inspect related JS only if needed.
9. Do not edit before reporting the plan.

Scope:
- Work only on the target page and required page-specific CSS/JS.
- Move page-specific CSS to `assets/css/`.
- Move page-specific JS to `assets/js/` if needed.
- Keep only minimal inline JS if it prevents language flash before first paint.
- Keep only minimal inline CSS if it is a necessary `noscript` fallback.
- Do not touch unrelated files.
- Do not commit.

Mandatory:
- Preserve page content.
- Preserve PT-BR and EN-US.
- Preserve semantic HTML.
- Preserve accessibility basics.
- Do not change visual identity without explicit instruction.
- Do not alter global CSS/JS unless justified before editing.

First output:
- current structure diagnosis;
- inline CSS/JS found;
- extraction plan;
- files that would be touched;
- risks;
- validation plan.
```

---

## 7. Validação visual local

```txt
Read CLAUDE.md first.

Use:
- frontend-implementer
- visual-regression-check skill
- Playwright MCP if available

Task:
Validate the current UI change locally.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Identify changed files.
4. Do not edit files.

Checks:
1. Open the local page.
2. Confirm the page renders.
3. Confirm PT-BR content is visible.
4. Confirm EN-US toggle works where applicable.
5. Confirm navigation works.
6. Confirm mobile navigation works.
7. Confirm no obvious horizontal scroll.
8. Confirm no visible encoding corruption.
9. Confirm no broken images.
10. Confirm no console errors if available.
11. Confirm CSS is loaded from the correct file.
12. Confirm no large inline CSS/JS was introduced.

Report:
- page tested;
- viewport tested;
- visible issues;
- console errors;
- accessibility concerns;
- CSS/JS loading issues;
- whether the change is safe to commit.
```

---

## 8. Validação de encoding e estrutura

```txt
Read CLAUDE.md first.

Use:
- frontend-implementer
- html-page-structure-guard skill

Task:
Validate encoding and structural integrity for: [FILES OR PAGE PATH].

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Do not edit files.

Checks:
1. Confirm files read as UTF-8.
2. Count replacement characters.
3. Count common mojibake markers.
4. Confirm expected CSS files are linked.
5. Confirm expected JS files are linked.
6. Confirm PT-BR markers exist.
7. Confirm EN-US markers exist.
8. Confirm there is a single h1.
9. Confirm large inline style blocks were not introduced.
10. Confirm large inline script blocks were not introduced.

Recommended command:

```powershell
@'
from pathlib import Path
import re

files = [
    Path("[FILE_1]"),
    Path("[FILE_2]"),
]

markers = {
    "replacement_char": "\ufffd",
    "capital_a_tilde_mojibake": "\u00c3",
    "capital_o_circumflex": "\u00d4",
    "box_vertical_right": "\u251c",
    "box_down_horizontal": "\u252c",
}

for path in files:
    text = path.read_text(encoding="utf-8")
    print(f"\n{path}")
    print("UTF-8 OK")
    for name, marker in markers.items():
        print(name, text.count(marker))

html_files = [p for p in files if p.suffix.lower() == ".html"]

for path in html_files:
    html = path.read_text(encoding="utf-8")
    print(f"\nHTML checks: {path}")
    print("h1_count", len(re.findall(r"<h1\b", html)))
    print("style_count", html.count("<style>"))
    print("script_count", html.count("<script"))
    print("lang_pt", "lang-pt" in html)
    print("lang_en", "lang-en" in html)
'@ | python -
```

Report:
- files checked;
- UTF-8 status;
- suspicious markers;
- HTML structure findings;
- risks;
- recommended correction if needed.
```

---

## 9. Validação PageSpeed Insights

```txt
Read CLAUDE.md first.

Use:
- git-pr-reviewer
- psi-validation skill

Task:
Run PageSpeed Insights validation.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Confirm this is a documentation-only validation branch.
4. Do not alter product files.

Scope:
- Run mobile PSI.
- Run desktop PSI.
- Save mobile JSON.
- Save desktop JSON.
- Create README with scores, diagnostics and comparison to baseline.
- Do not alter HTML, CSS or JS.
- Do not commit before reporting generated files.

Report:
- mobile scores;
- desktop scores;
- key diagnostics;
- files generated;
- comparison with previous baseline;
- whether follow-up work is recommended.
```

---

## 10. Auditoria de stashes

```txt
Read CLAUDE.md first.

Use:
- git-pr-reviewer
- session-closeout skill

Task:
Audit existing Git stashes safely.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git stash list.
4. Do not apply any stash.
5. Do not drop any stash.
6. Do not edit files.

For each stash:
- run git stash show --name-status;
- run git stash show --stat;
- identify whether it relates to current work;
- identify whether it appears redundant;
- identify whether it contains global files;
- identify whether it contains case files;
- identify whether it contains project governance files.

Report:
- stash id;
- stash message;
- files affected;
- risk level;
- recommendation: keep, inspect deeper, or safe to drop.

Rules:
- Do not apply stash without explicit instruction.
- Do not drop stash without explicit instruction.
- Never apply a stash directly on main unless explicitly instructed.
```

---

## 11. Commit seguro

```txt
Read CLAUDE.md first.

Use:
- git-pr-reviewer
- session-closeout skill

Task:
Prepare a safe commit for the current changes.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git diff --stat.
4. Run git diff --name-only.
5. Run git diff --check.
6. Confirm the changed files match the task scope.
7. If unrelated files are present, stop and report.
8. Do not commit before reporting.

Report:
- current branch;
- files changed;
- whether changes match task scope;
- diff check result;
- recommended commit message;
- whether it is safe to stage and commit.

If explicitly approved:
1. Stage only the files that belong to the task.
2. Run git diff --cached --name-only.
3. Commit with the approved message.
4. Run git status -sb.
```

---

## 12. Encerramento de sessão

```txt
Read CLAUDE.md first.

Use:
- git-pr-reviewer
- session-closeout skill

Task:
Close the current work session safely.

Do not edit files unless explicitly needed for documentation.

Run:
- git status -sb
- git branch --show-current
- git branch -vv
- git stash list
- git diff --stat
- git diff --name-only
- git diff --cached --stat
- git diff --cached --name-only
- git log --oneline -5
- gh pr status

Report:
- current branch;
- working tree status;
- changed files;
- staged files;
- untracked files;
- existing stashes;
- commits created in this session;
- whether the branch is pushed;
- whether a PR exists;
- whether main is clean;
- risks;
- next recommended action.

Rules:
- If there are no commits, do not create PR.
- If working tree is not clean, do not say the session is complete.
- If untracked files exist, list them and stop.
- If unrelated changes exist, stop and report.
- If branch has no upstream, report the correct push command.
```

---

## 13. PR e merge via terminal

```txt
Read CLAUDE.md first.

Use:
- git-pr-reviewer
- pr-closeout skill

Task:
Create and merge the current branch through GitHub CLI.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git diff --stat.
4. Run git diff --cached --stat.
5. Run git log --oneline -5.
6. Confirm the branch has commits not present in main.
7. Confirm working tree is clean.
8. Confirm branch is pushed.

If there are no commits ahead of main:
- do not create PR;
- report that there is nothing to merge.

If working tree is not clean:
- do not create PR;
- report changed files.

If clean and committed:
1. Run git push.
2. Create PR with gh pr create.
3. Merge with gh pr merge --squash --delete-branch.
4. Switch to main.
5. Pull main.
6. Run git fetch --prune.
7. Run git status -sb.

Report:
- PR number;
- merge status;
- local branch deletion status;
- remote branch deletion status;
- final branch;
- final main status;
- next recommended action.
```

---

## 14. Atualização documental simples direto na main

Use este comando apenas para alterações documentais pequenas, seguras e sem impacto em produto.

```txt
Read CLAUDE.md first.

Use:
- git-pr-reviewer
- session-closeout skill

Task:
Apply a small documentation-only update directly on main.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Confirm current branch is main.
4. Run git pull.
5. Confirm working tree is clean.
6. Confirm the change is documentation-only.
7. Do not edit product files.

Allowed files:
- docs/**
- README.md
- CLAUDE.md
- .claude/agents/**
- .claude/skills/**

Forbidden files:
- index.html
- cases/**
- assets/css/**
- assets/js/**
- assets/img/**

Rules:
- If any product file is involved, stop and create a branch instead.
- If working tree is not clean, stop and report.
- If the change is more than a small documentation update, stop and create a branch.
- Do not push until diff is reviewed.

Report before commit:
- files changed;
- why direct main is acceptable;
- risk level;
- recommended commit message.

If approved:
1. Stage only documentation files.
2. Commit.
3. Push main.
4. Run git status -sb.
```

---

## 15. Pesquisa externa com MCP

```txt
Read CLAUDE.md first.

Use:
- portfolio-orchestrator
- external-reference-research skill
- Firecrawl MCP if available
- Playwright MCP if visual inspection is required

Task:
Research external references for: [TOPIC].

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Do not edit files.
4. Do not commit.

Rules:
- Do not copy proprietary text.
- Do not copy layouts.
- Extract principles, not assets.
- Cite sources in notes when applicable.
- Keep recommendations relevant to this portfolio.
- Do not create implementation before reporting research findings.

Output:
- sources inspected;
- useful principles;
- what applies to this portfolio;
- what should be ignored;
- recommended next action.
```

---

## 16. Petrobras refinement específico

```txt
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
Audit and refine the Petrobras / SALA CAR case page.

Before doing anything:
1. Run git status -sb.
2. Run git branch --show-current.
3. Run git stash list.
4. Identify unrelated changes.
5. If unrelated changes exist, stop and report.
6. Inspect cases/petrobras.html.
7. Inspect assets/css/case-petrobras.css.
8. Inspect assets/css/site.css only for inherited global styles.
9. Inspect assets/js/site.js only for shared behavior/language toggle.
10. Do not edit before reporting the plan.

Context:
The current Petrobras case is only a foundation. It is not final. The goal is to transform it into a strong senior-level portfolio case about critical offshore environmental operations and decision infrastructure.

Scope:
- Work primarily on `cases/petrobras.html`.
- Work on `assets/css/case-petrobras.css` for page-specific styling.
- Do not touch `index.html`.
- Do not touch `assets/css/site.css` unless justified before editing.
- Do not touch `assets/js/site.js` unless justified before editing.
- Do not commit.

Mandatory:
- Preserve PT-BR and EN-US.
- Preserve semantic HTML.
- Keep page-specific CSS in `assets/css/case-petrobras.css`.
- Keep JS in `assets/js/` if new JS becomes necessary.
- Do not add large inline CSS or JS.
- Do not invent metrics.
- Do not create fake screenshots.
- Do not use generic UX case-study language.
- Do not over-polish before the narrative is structurally strong.

Audit:
1. Evaluate if the case explains the operational context clearly.
2. Evaluate if the problem is concrete enough.
3. Evaluate if the role is credible and specific.
4. Evaluate if the system model is strong enough.
5. Evaluate if design decisions are real decisions, not generic UX claims.
6. Evaluate if the impact section avoids unsupported metrics.
7. Evaluate if PT-BR and EN-US are equivalent in meaning.
8. Evaluate if the page structure is semantic and maintainable.
9. Evaluate what is missing to reach a senior international case-study standard.

Output only:
- current diagnosis;
- strongest parts;
- weakest parts;
- missing sections;
- proposed final case structure;
- content rewrite plan;
- visual refinement plan;
- files that would be touched;
- risks;
- recommended implementation phases.
```