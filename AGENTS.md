# AGENTS.md

## Scope

This repository is Metal Coder, the Ghost theme for heavymetalcoder.com, forked from Casper (TryGhost/Casper, tracked as the `upstream` remote). Site-specific styles live in section 13 of assets/css/screen.css. Keep changes focused on theme source, generated assets, CI, and repo-level metadata for this repository.

## Commands

Use pnpm for this repo, pinned by package.json.

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm test:ci
pnpm zip
```

Run the test command before opening a PR when theme files, generated assets, dependencies, or CI change.

## Boundaries

- Edit source CSS, JavaScript, Handlebars templates, partials, and package metadata intentionally.
- Keep generated assets/built/ files in sync when source assets change and the repo tracks those outputs.
- Do not commit node_modules/, local Ghost content, generated zip files outside tracked release expectations, or secrets.
