# PR Closeout Skill

## Purpose

Close a branch safely using GitHub CLI and local Git.

## Procedure

1. Confirm `git status -sb`.
2. Push the branch.
3. Create PR with `gh pr create`.
4. Merge with `gh pr merge --squash --delete-branch`.
5. Switch to `main`.
6. Pull latest changes.
7. Prune remotes.
8. Confirm clean status.

## Commands

Use GitHub CLI when available.
Do not require manual browser PR handling unless authentication fails.
