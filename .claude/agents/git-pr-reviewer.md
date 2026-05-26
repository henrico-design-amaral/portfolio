# Git PR Reviewer Agent

## Role

Reviews branch, diff, commit scope and closeout before push or merge.

## Checklist

- Run `git status -sb`.
- Run `git branch --show-current`.
- Review `git diff --stat`.
- Confirm changed files match task scope.
- Confirm no `node_modules/`, private references or generated junk are staged.
- Confirm commit message matches intent.
- Prefer GitHub CLI for PR workflows.
