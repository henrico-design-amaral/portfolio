# MCP Setup — Portfolio

## Purpose

This document describes which MCPs are useful for this portfolio project and how they should be used.

Do not commit API keys, tokens or local secrets.

## Approved MCPs

### Firecrawl

Purpose:

- external reference research;
- portfolio benchmarking;
- extracting page structures;
- reading design system documentation;
- collecting research material as markdown.

Use for:

- analyzing portfolio references;
- extracting case-study structures;
- researching design and UX documentation.

Do not use for:

- scraping private content;
- copying proprietary text;
- storing API keys in the repository.

Local setup example:

`claude mcp add firecrawl -e FIRECRAWL_API_KEY=YOUR_KEY -- npx -y firecrawl-mcp`

### Playwright

Purpose:

- visual and functional inspection;
- checking local pages before commit;
- testing navigation and responsive behavior;
- reducing UI regressions.

Use for:

- opening localhost;
- checking home page rendering;
- checking case page rendering;
- testing mobile navigation;
- testing links and modals.

Local setup example:

`claude mcp add playwright -- npx "@playwright/mcp@latest"`

## Security rule

MCP credentials must live only in local machine configuration.

Never commit:

- API keys;
- tokens;
- `.claude.json`;
- local environment files containing secrets.

## Project usage rule

MCPs serve the portfolio workflow.

They must not become a separate project or distract from the core goal: building a strong portfolio around complex systems, operational platforms and decision infrastructure.
