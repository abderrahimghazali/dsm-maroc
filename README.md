<p align="center">
  <img src="public/patterns/khatam.svg" alt="" width="64" height="64" />
</p>

<h1 align="center">DSM — Système de Design du Maroc</h1>

<p align="center">
  <strong>An independent, open-source design system for Moroccan public services.</strong><br/>
  Component-based, in the spirit of France's DSFR — in the spirit of France's DSFR,<br/>
  built from scratch: trilingual (العربية · ⵜⴰⵎⴰⵣⵉⵖⵜ · français), RTL-first, accessible, light and dark.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/dsm-maroc"><img src="https://img.shields.io/npm/v/dsm-maroc?label=npx%20dsm-maroc&color=0B6B3F" alt="npm version" /></a>
</p>

<p align="center">
  <a href="https://dsm-maroc.vercel.app">Live docs</a> · <a href="https://www.npmjs.com/package/dsm-maroc">npm</a> · <a href="#getting-started">Getting started</a> · <a href="#whats-inside">What's inside</a> · <a href="#structure">Structure</a> · <a href="DESIGN.md">Design spec</a> · <a href="#author">Author</a>
</p>

---

## Why

National design systems (DSFR, GOV.UK, USWDS) give citizens instant recognition of an official service and give teams
a shared, accessible foundation. DSM brings that idea to Morocco with one constraint few systems handle natively:
**three languages and two writing directions**. Every component works in Arabic (RTL), Tamazight in Tifinagh and
French, with no product-side code.

## What's inside

- **Foundations** — warm "sable" neutrals, Vert Maroc / Rouge Maroc / Bleu Majorelle / Safran, a multi-script type scale
  (IBM Plex Sans + Plex Sans Arabic + Noto Sans Tifinagh), spacing, radii, elevation, motion — as CSS variables and
  Tailwind v4 utilities.
- **Identity** — the trilingual national block mark, *le filet* (green cap on a red rule), the *khatam* eight-point
  star tessellation, arch and chamfer shapes.
- **Components** — 50+ React components on Base UI primitives: header with mega menus and mobile drawer, footer,
  official banner, forms (field, input, select, checkbox, radio, switch, file upload, OTP, date), navigation
  (breadcrumb, pagination, tabs, side menu, stepper, table of contents), content (cards, tiles, tables, key figures,
  timeline, quote, callout, accordion), feedback (alert, badge, notice, toast, progress, skeleton, empty state) and
  overlays (dialog, alert dialog, drawer, popover, tooltip, consent banner).
- **Documentation site** — foundations, live examples with language / direction / theme toggles and source code,
  usage guidance, accessibility and RTL notes, props tables.
- **Demo portal** — a national public-services portal in fr / ar / zgh: home, online procedure (multi-step form),
  ministry page, search results, news and error pages.

## Getting started

```bash
npx dsm-maroc@latest init          # copies src/dsm, dsm.css, fonts and patterns; installs the deps
npx dsm-maroc@latest add button    # or one component at a time
```

Then wire the providers in `app/layout.tsx` (the CLI prints the snippet). Manual route:

```bash
pnpm install
pnpm dev
```

- Documentation: http://localhost:3000
- Demo portal: http://localhost:3000/demo/fr · /demo/ar · /demo/zgh

To use DSM in your own Next.js 16 / Tailwind v4 project, copy `src/dsm`, `src/app/globals.css`, `src/app/fonts.ts` and
`public/patterns`, install the runtime dependencies and wrap your app in `ThemeProvider` + `LocaleProvider`
(see the "Prise en main" pages of the docs).

```bash
pnpm add @base-ui/react class-variance-authority clsx tailwind-merge lucide-react
```

## Structure

```
src/
  dsm/                    # the design system (copy this folder)
    components/           # React components, one family per file
    i18n/                 # locales (fr, ar, zgh, en), UI strings, LocaleProvider
    icons/                # curated Lucide set + RTL-aware arrows + social icons
    lib/cn.ts
  app/
    globals.css           # tokens, theme mapping, base styles, signature utilities
    fonts.ts              # next/font declarations (Plex, Plex Arabic, Tifinagh, Plex Mono)
    (docs)/               # documentation site
    demo/[locale]/        # demo portal (fr, ar, zgh)
  content/
    examples/<slug>/      # docs metadata (meta.ts) + live examples per component
    demo/                 # trilingual content of the demo portal
    registry.generated.tsx  # built by scripts/gen-registry.mjs (predev / prebuild)
public/patterns/          # khatam / band SVG masks
DESIGN.md                 # authoring rules for components
```

## Scripts

| Command          | Description                                   |
| ---------------- | --------------------------------------------- |
| `pnpm dev`       | Regenerate the docs registry, start Next.js   |
| `pnpm build`     | Regenerate the registry, production build     |
| `pnpm registry`  | Regenerate `src/content/registry.generated.tsx` |
| `pnpm lint`      | ESLint                                        |

## Languages

Component strings live in `src/dsm/i18n/index.ts` (`UiStrings`) in French, Arabic, Standard Moroccan Amazigh
(Tifinagh) and English. The Tamazight strings and demo content follow the IRCAM standard to the best of our
knowledge and **should be reviewed by a native speaker** before production use.

## Disclaimer

DSM is an independent project and is not affiliated with, or endorsed by, any Moroccan administration.
National symbols (flag, star, official denominations) remain the property of the Kingdom of Morocco and must be
used in accordance with the applicable regulations. Code is released under the MIT licence.

## Author

Designed and built by **Abderrahim Ghazali** — [abderrahimghazali.github.io](https://abderrahimghazali.github.io/) ·
[GitHub](https://github.com/abderrahimghazali) · [X @Ghazalidotdev](https://x.com/Ghazalidotdev).

Questions, licensing or a custom build for a ministry or agency: open an issue on this repository or reach out on X.
