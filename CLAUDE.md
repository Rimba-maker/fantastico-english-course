## Project

Fantastico English Course — multi-page marketing site (Astro 7, Tailwind CSS v4, TypeScript strict, `motion` for animated React islands). Full spec: `docs/internal/PRD.md` (gitignored — internal only, not part of the public repo).

**Design system:** `DESIGN.md` at the repo root is the source of truth for colors, type, spacing, and components. Read it before writing any UI — don't invent tokens ad hoc.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Agent skills

### Issue tracker

Issues live as GitHub issues in this repo; use the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), used as-is. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — `CONTEXT.md` + `docs/adr/` at the repo root, created lazily as decisions are made. See `docs/agents/domain.md`.
