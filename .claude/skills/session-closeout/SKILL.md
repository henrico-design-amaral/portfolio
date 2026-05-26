# Session Closeout Skill

## Purpose

Close a project work session safely.

## Procedure

1. Run `git status -sb`.
2. Run `git branch --show-current`.
3. Run `git diff --stat`.
4. Run `git diff --cached --stat`.
5. Run `git log --oneline -5`.
6. Identify created commits.
7. Identify uncommitted changes.
8. Identify untracked files.
9. Confirm whether the branch was pushed.
10. Confirm whether a PR exists or is needed.

## Report format

Return:

- current branch;
- files changed;
- staged files;
- untracked files;
- commits created;
- pushed/not pushed;
- PR status;
- whether main is clean;
- next recommended action.

## Rule

Do not say the session is complete unless `git status -sb` is clean or all remaining changes are explicitly listed.
