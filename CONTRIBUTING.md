# Contributing to DSM

Thanks for helping build a design system for Moroccan public services. DSM is an independent, open-source project and is not affiliated with any administration.

## Setup

```bash
pnpm install
pnpm dev        # docs site on http://localhost:3000
```

Read `DESIGN.md` before touching anything under `src/dsm/`: it is the contract every component follows (tokens-only colours, logical properties for RTL, translated strings via `useT`, Base UI primitives).

## Checks

Every pull request runs these in CI. Run them locally first:

```bash
npx tsc --noEmit -p .   # types
pnpm lint               # eslint
pnpm test               # CLI end-to-end tests (node --test)
pnpm build              # docs site, registry and OG image
```

## Where things live

- `src/dsm/` — the design system itself: components, icons, i18n, `cn`. This is what the CLI ships.
- `src/app/globals.css` — tokens, Tailwind theme mapping, base styles, `dsm-*` utilities.
- `src/content/examples/<slug>/` — one folder per documented component: `meta.ts` plus example files.
- `src/content/demo/{fr,ar,zgh}.ts` — the demo portal's content.
- `cli/` — the `dsm-maroc` npm package. `cli/scripts/sync.mjs` snapshots the sources at publish time.

## Translations

Every user-facing string in a component goes through `UiStrings` in `src/dsm/i18n/index.ts`, in all four locales (fr, ar, zgh, en). Tamazight strings need review by a native speaker before a release; open an issue or a PR if you can help.

## Releasing the CLI

1. Bump `version` in `cli/package.json`.
2. `cd cli && npm publish` — `prepack` re-syncs the sources automatically.

## Receiving fixes when you copied the sources

The CLI never overwrites existing files. To update a component, run `npx dsm-maroc@latest add <name> --overwrite` on a clean git branch and review the diff against your customisations.
