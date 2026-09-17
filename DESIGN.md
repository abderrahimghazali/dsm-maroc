# DSM — Design & authoring spec

Système de Design du Maroc. A component-based design system for Moroccan public services,
in the spirit of France's DSFR, built from scratch: trilingual (ar / fr / zgh), RTL-first,
accessible, light + dark.

Read this before writing or editing any file under `src/dsm/`.

## Stack

- Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4.
- Headless primitives: `@base-ui/react` 1.8 (docs: `node_modules/@base-ui/react/docs/react/components/<name>.md`).
  Use its Tailwind examples as the structural reference, then restyle with DSM tokens.
- Variants: `class-variance-authority` (`cva`). Class merging: `cn()` from `@/dsm/lib/cn`.
- Icons: import from `@/dsm/icons` only (curated Lucide set + RTL-aware `ArrowForward`, `ArrowBack`,
  `ChevronForward`, `ChevronBack`, `ArrowOutward`, and social icons).

## File conventions

- One component family per file: `src/dsm/components/<kebab-name>.tsx`.
- Named exports only. Export the props type (`export type XProps`). Root element accepts `className`
  and spreads `...props`.
- Add `"use client"` only when the file uses hooks, Base UI interactive parts, or event handlers.
- Every new file must be re-exported from `src/dsm/index.ts`.
- No default exports, no barrel side effects, no external CSS files: styles are Tailwind utilities
  using the DSM tokens below.

## Tokens (the only colours you may use)

Semantic Tailwind utilities generated from `src/app/globals.css` — never use raw hex, arbitrary
colours, or Tailwind's default palette (`red-500`, `neutral-*` … are disabled).

| Purpose            | Utilities                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------ |
| Page / surfaces    | `bg-canvas` `bg-surface` `bg-surface-muted` `bg-surface-sunken` `bg-surface-inverse`        |
| Text               | `text-ink` `text-ink-muted` `text-ink-subtle` `text-ink-inverse`                            |
| Borders            | `border-line` `border-line-strong` `ring-line` `ring-line-strong`                          |
| Brand hues         | `rouge` `vert` `bleu` `safran` each with `-hover`, `-soft`, `-soft-fg` (e.g. `bg-vert-soft text-vert-soft-fg`) |
| Semantic aliases   | `primary` (+ `primary-hover`, `primary-fg`), `accent`, `link` (+`link-hover`), `focus`      |
| Status             | `info` `success` `warning` `error` each with `-soft` and `-soft-fg`                          |
| Misc               | `bg-white` `bg-black` `text-current` `bg-transparent`                                        |

Rules:
- Primary action colour is **vert** (`bg-primary text-primary-fg`). **Rouge** is brand/accent + error.
  **Bleu** is links, focus and info. **Safran** is warning.
- Status colour must never be the only signal: pair it with an icon or a label.
- Dark mode is automatic through tokens. Do not write `dark:` variants unless unavoidable.
- `primary-fg` is white in light mode and near-black in dark mode: always use it for text on `bg-primary`.

Shape, elevation, motion:
- Radii: controls `rounded-md`; containers (cards, popups, panels) `rounded-lg`; pills/badges `rounded-sm` or `rounded-full`.
- Shadows: `shadow-xs` (resting), `shadow-sm`, `shadow-md` (hover / raised), `shadow-lg` (popups, dialogs).
- Motion: `transition-… duration-(--dsm-duration) ease-dsm` (200 ms). Fast interactions: `duration-(--dsm-duration-fast)`.
  Enter animations: `animate-dsm-in` / `animate-dsm-up`. Popups use Base UI `data-starting-style` / `data-ending-style` with opacity + 2–4 px translate or `scale-[0.97]`.
- Reduced motion is handled globally.

Sizing:
- Control heights: sm `h-9`, md `h-11` (default), lg `h-13`. Text sizes: sm `text-sm`, md `text-[0.9375rem]`, lg `text-base`.
- Icons inside controls: `[&_svg]:size-[1.15em]` pattern or `size-4` / `size-5`.
- Container: `dsm-container` (max 78 rem, gutters). Vertical rhythm on pages: sections `py-12 lg:py-16`.

Typography:
- Body `text-base` (16/25.6). Small `text-sm`. Micro labels: `text-xs font-semibold uppercase tracking-wide text-ink-subtle`.
- Headings: `font-semibold tracking-tight text-balance`; h1 `text-4xl`, h2 `text-2xl`/`text-3xl`, h3 `text-lg`/`text-xl`.
- Display (hero): `text-display` / `text-display-lg` with `tracking-tighter`.
- Fonts switch automatically per `lang` (Plex Sans / Plex Sans Arabic / Noto Sans Tifinagh).

## RTL — mandatory

Every component must work in `dir="rtl"` without any RTL-specific code:
- Use logical utilities only: `ps-* pe-* ms-* me-* start-* end-* text-start text-end border-s border-e rounded-s-* rounded-e-* inset-inline-*`.
  Never `pl pr ml mr left right text-left text-right border-l border-r`.
- Directional glyphs: use `ArrowForward` / `ChevronForward` (they mirror), or add class `dsm-flip-rtl`
  to any icon that points in the reading direction. Icons with fixed meaning (check, close, external link) don't flip.
- Translations of hover/slide effects: `translate-x-1 rtl:-translate-x-1`.
- Base UI direction is provided by `LocaleProvider` (DirectionProvider inside). Don't add your own.

## i18n — built-in strings

Components never hard-code French. For labels a component needs internally (close, previous, next, required…)
read them from `const t = useT()` (`@/dsm/i18n/provider`) — the dictionary is `UiStrings` in `src/dsm/i18n/index.ts`.
If you need a string that is missing, add the key to `UiStrings` and to **all four** dictionaries (fr, ar, zgh, en).
Everything content-like (titles, descriptions, item labels) comes through props.

## Accessibility

- Prefer Base UI primitives for anything interactive (dialog, tooltip, tabs, accordion, select, menu, switch, checkbox, radio, toast, collapsible, popover).
- Focus rings are global (`:focus-visible`). Don't add `outline-none` unless you replace it with a visible focus style (`focus-visible:ring-2 focus-visible:ring-focus`).
- Icon-only buttons need `aria-label`. Decorative icons get `aria-hidden`.
- Status messages: `role="status"` (polite) or `role="alert"` (assertive, errors only).
- Hit areas ≥ 40 px. Contrast AA (tokens are pre-validated; don't lighten text).
- Forms: label always visible, hint before the control, error after it with `aria-describedby` / `aria-invalid`, required marker from `t.required`.

## Visual signatures (use sparingly, on purpose)

- `dsm-filet` — 3 px identity rule, green cap then red. Header bottom, footer top, section eyebrows.
- `dsm-khatam` / `dsm-khatam-fade-end|start|radial|bottom` — 8-point star tessellation colourised with `currentColor`;
  place as `absolute inset-… pointer-events-none opacity-[0.05–0.15]` inside a `relative overflow-hidden` parent. Set `text-…` to colour it.
- `dsm-band` — lozenge band (decorative rule).
- `dsm-arch` — horseshoe-arch top radius for media/illustration frames.
- `dsm-chamfer` — tile-cut corner on the end side (accent blocks only).
- `dsm-prose` — long-form typography.

## Reference implementations

Read these first; match their density, naming and structure:
`button.tsx` (cva variants + Base UI Button + loading), `alert.tsx` (status tones + i18n close),
`card.tsx` (composable slots, enlarged link, hover arrow), `badge.tsx`, `header.tsx` (NavigationMenu, Drawer),
`language-switcher.tsx` + `menu-styles.ts` (Menu popup styling shared by dropdowns).

## Quality bar

Premium, institutional, calm. Generous whitespace, crisp 1 px lines, warm neutrals, restrained colour.
Every interactive state (hover, focus-visible, active, disabled, loading, open, selected, invalid) must be styled.
No placeholder TODOs. No lorem ipsum in examples: realistic Moroccan public-service content (French by default).

## Form controls and `Field`

`Field` does not clone its child. It provides the control id, `aria-describedby` and invalid state through context;
every control that can live inside a `Field` (Input, Textarea, Select, NativeSelect…) calls `useFieldControl(props)`
from `./field` and spreads the returned `id` / `aria-*` onto its native element. New controls must do the same.
