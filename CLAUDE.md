## Project

Fantastico English Course — multi-page marketing site (Astro 7, Tailwind CSS v4, TypeScript strict, `motion` for animated React islands). Full spec: `docs/internal/PRD.md` (gitignored — internal only, not part of the public repo).

**Design system:** `DESIGN.md` at the repo root is the source of truth for colors, type, spacing, and components. Read it before writing any UI — don't invent tokens ad hoc.

## Agent skills

### Issue tracker

Issues live as GitHub issues in this repo; use the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), used as-is. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — `CONTEXT.md` + `docs/adr/` at the repo root, created lazily as decisions are made. See `docs/agents/domain.md`.
