# HTML Page Structure Guard Skill

## Purpose

Ensure every created or updated HTML page is semantic, maintainable, accessible and properly separated by concern.

## Core rule

HTML is for structure and content.

CSS belongs in:

`assets/css/`

JavaScript belongs in:

`assets/js/`

Images belong in:

`assets/img/`

Documentation belongs in:

`docs/`

## Mandatory HTML structure

Every HTML page must use meaningful landmarks and semantic elements:

- `header` when applicable;
- `nav` for navigation;
- `main` for primary page content;
- `section` for major thematic blocks;
- `article` for standalone case/story sections when appropriate;
- `aside` for supporting contextual content;
- `footer` for footer content.

## Heading rules

- Use a single primary `h1`.
- Preserve heading hierarchy.
- Do not skip heading levels for visual reasons.
- Use CSS for visual scale, not incorrect heading levels.

## Language rule

Every created or updated portfolio page must support both PT-BR and EN-US content.

The HTML must preserve the language switching pattern used in the project.

The current language state must be reflected in:

- `html[lang]`;
- `html[data-lang]`;
- visible language toggle state when applicable.

## CSS rule

Do not create large inline `<style>` blocks in HTML.

Move reusable or page-specific CSS to:

`assets/css/`

Acceptable inline CSS exceptions:

1. minimal critical bootstrapping;
2. temporary experiment documented as temporary;
3. no-script fallback when absolutely necessary.

If inline CSS is used, explain why it is necessary and whether it should be migrated later.

## JavaScript rule

Do not create large inline `<script>` blocks in HTML.

Move reusable or page-specific JS to:

`assets/js/`

Acceptable inline JS exceptions:

1. minimal anti-flash language bootstrapping;
2. minimal critical setup that must run before first paint.

If inline JS is used, explain why it is necessary and whether it should be migrated later.

## Accessibility basics

Every page must preserve:

- skip link;
- clear navigation labels;
- correct button semantics;
- accessible language toggle;
- readable contrast;
- keyboard-accessible navigation;
- no information conveyed only by color;
- meaningful link text.

## Output

When reviewing or creating a page, report:

- semantic structure;
- CSS files touched;
- JS files touched;
- inline CSS/JS exceptions;
- PT-BR/EN-US implementation;
- accessibility risks;
- files changed;
- recommended next validation.
