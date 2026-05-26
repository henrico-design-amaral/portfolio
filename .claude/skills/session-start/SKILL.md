# Session Start Skill

## Purpose

Start a project work session safely before any implementation.

## Procedure

1. Run `git status -sb`.
2. Run `git branch --show-current`.
3. Identify the current branch.
4. Identify staged, modified and untracked files.
5. Confirm whether the branch matches the intended task.
6. If there are unrelated changes, stop and report.
7. Do not edit files before reporting the initial state.
8. Do not commit.

## Report format

Return:

- current branch;
- working tree status;
- detected risks;
- whether it is safe to proceed;
- recommended branch name;
- next action.

## Rule

A session is not ready to start until the current Git state is known.
