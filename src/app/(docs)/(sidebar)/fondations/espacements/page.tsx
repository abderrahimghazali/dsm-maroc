import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { cn } from "@/dsm/lib/cn";

export const metadata: Metadata = { title: "Espacements & grille" };

type Step = { token: string; rem: string; px: string };

const steps: Step[] = [
  { token: "0.5", rem: "0.125rem", px: "2px" },
  { token: "1", rem: "0.25rem", px: "4px" },
  { token: "1.5", rem: "0.375rem", px: "6px" },
  { token: "2", rem: "0.5rem", px: "8px" },
  { token: "3", rem: "0.75rem", px: "12px" },
  { token: "4", rem: "1rem", px: "16px" },
  { token: "5", rem: "1.25rem", px: "20px" },
  { token: "6", rem: "1.5rem", px: "24px" },
  { token: "8", rem: "2rem", px: "32px" },
  { token: "10", rem: "2.5rem", px: "40px" },
  { token: "12", rem: "3rem", px: "48px" },
  { token: "16", rem: "4rem", px: "64px" },
  { token: "20", rem: "5rem", px: "80px" },
  { token: "24", rem: "6rem", px: "96px" },
];

const breakpoints = [
  { name: "sm", value: "40rem", px: "640px", usage: "Bascule des colonnes de formulaire" },
  { name: "md", value: "48rem", px: "768px", usage: "Grilles de cartes à deux colonnes, gouttière du conteneur à 2rem" },
  { name: "lg", value: "64rem", px: "1024px", usage: "Apparition de la barre latérale, sections py-16" },
  { name: "xl", value: "80rem", px: "1280px", usage: "Grilles à trois ou quatre colonnes" },
  { name: "2xl", value: "96rem", px: "1536px", usage: "Plafond visuel avant marge morte" },
];

const radii = [
  { token: "rounded-xs", value: "0.125rem", usage: "Puces, indicateurs" },
  { token: "rounded-sm", value: "0.25rem", usage: "Badges, pastilles" },
  { token: "rounded-md", value: "0.375rem", usage: "Contrôles : boutons, champs" },
  { token: "rounded-lg", value: "0.75rem", usage: "Conteneurs : cartes, panneaux, popovers" },
  { token: "rounded-xl", value: "1.25rem", usage: "Blocs héros, illustrations" },
];

const shadows = [
  { token: "shadow-xs", usage: "Repos — cartes, champs" },
  { token: "shadow-sm", usage: "Légère élévation — en-têtes fixes" },
  { token: "shadow-md", usage: "Survol, éléments relevés" },
  { token: "shadow-lg", usage: "Superpositions — popovers, dialogues" },
];

export default function Spacing() {
  return (
    <article>
      <PageHeader
        eyebrow="Fondations"
        title="Espacements & grille"
        titleAr="التباعد والشبكة"
        description="Une échelle unique en base 4px pour tous les espacements, un conteneur central de 78rem, et une grille de douze colonnes pour composer les pages. Les mêmes valeurs gouvernent le rythme vertical des sections, les rayons et les ombres."
      />

      <Section
        id="echelle"
        title="Échelle d'espacement"
        description="Base 4px (0.25rem). Chaque valeur Tailwind (p-4, gap-6, -mt-10…) pointe sur ce même multiple."
      >
        <div className="space-y-2 rounded-lg border border-line bg-surface p-6">
          {steps.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <span className="w-10 shrink-0 text-end font-mono text-xs text-ink-subtle">{s.token}</span>
              <div
                className="h-3 shrink-0 rounded-sm bg-vert"
                style={{ width: s.rem }}
                aria-hidden
              />
              <span className="font-mono text-xs text-ink-muted">{s.rem}</span>
              <span className="font-mono text-xs text-ink-subtle">{s.px}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="rythme"
        title="Rythme vertical"
        description="Les sections de page respirent avec deux paliers, l'un pour le mobile, l'autre à partir de lg."
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Contexte</th>
                <th className="px-4 py-2.5 text-start font-semibold">Classe</th>
                <th className="px-4 py-2.5 text-start font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {[
                ["Section de page", "py-12 lg:py-16", "Blocs empilés sur une page institutionnelle ou d'accueil"],
                ["Section documentaire", "py-8 first:pt-0", "Rubriques de cette documentation (voir Section)"],
                ["Carte / panneau", "p-5 sm:p-6", "Contenu intérieur d'une carte"],
                ["Groupe de contrôles", "gap-3 / gap-4", "Boutons, champs de formulaire côte à côte"],
              ].map(([ctx, cls, usage]) => (
                <tr key={ctx} className="border-t border-line">
                  <td className="px-4 py-2.5 font-medium">{ctx}</td>
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem] text-ink-muted">{cls}</td>
                  <td className="px-4 py-2.5 text-ink-muted">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="conteneur"
        title="Conteneur"
        description="dsm-container centre le contenu avec une largeur maximale de 78rem et une gouttière qui s'élargit à partir de md."
      >
        <div className="space-y-4">
          <div className="dsm-container rounded-lg border border-dashed border-line-strong bg-surface-muted py-6">
            <div className="rounded-md border border-line bg-surface px-4 py-3 text-center text-sm text-ink-muted">
              dsm-container — max-width: 78rem, padding-inline: 1.25rem (2rem à partir de md)
            </div>
          </div>
          <CodeBlock
            lang="css"
            code={`@utility dsm-container {\n  width: 100%;\n  max-width: var(--dsm-container); /* 78rem */\n  margin-inline: auto;\n  padding-inline: var(--dsm-gutter); /* 1.25rem */\n  @media (width >= 48rem) {\n    padding-inline: 2rem;\n  }\n}`}
          />
        </div>
      </Section>

      <Section
        id="points-de-rupture"
        title="Points de rupture"
        description="Les points de rupture par défaut de Tailwind CSS v4, sans surcharge."
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Préfixe</th>
                <th className="px-4 py-2.5 text-start font-semibold">Valeur</th>
                <th className="px-4 py-2.5 text-start font-semibold">En pixels</th>
                <th className="px-4 py-2.5 text-start font-semibold">Usage typique dans DSM</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {breakpoints.map((b) => (
                <tr key={b.name} className="border-t border-line">
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem]">{b.name}:</td>
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-ink-muted">{b.value}</td>
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-ink-subtle">{b.px}</td>
                  <td className="px-4 py-2.5 text-ink-muted">{b.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="grille"
        title="Grille à douze colonnes"
        description="grid-cols-12 avec un empan (col-span-*) variable selon le point de rupture. Exemple : un contenu principal sur huit colonnes et une barre latérale sur quatre."
      >
        <div className="grid grid-cols-12 gap-3">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="flex h-16 items-center justify-center rounded-md bg-vert-soft text-xs font-semibold text-vert-soft-fg"
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-12 gap-3">
          <div className="col-span-12 flex h-20 items-center justify-center rounded-md bg-bleu-soft text-sm font-semibold text-bleu-soft-fg sm:col-span-8">
            col-span-8 — contenu principal
          </div>
          <div className="col-span-12 flex h-20 items-center justify-center rounded-md bg-safran-soft text-sm font-semibold text-safran-soft-fg sm:col-span-4">
            col-span-4 — aside
          </div>
        </div>
      </Section>

      <Section
        id="rayons"
        title="Rayons"
        description="Les rayons suivent la fonction de l'élément, pas sa taille : contrôles, conteneurs, pastilles."
      >
        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {radii.map((r) => (
            <li key={r.token} className="rounded-lg border border-line bg-surface p-5">
              <div className={cn("mb-4 h-16 w-full border-2 border-vert bg-vert-soft", r.token)} aria-hidden />
              <p className="font-mono text-xs font-semibold">{r.token}</p>
              <p className="font-mono text-xs text-ink-subtle">{r.value}</p>
              <p className="mt-1.5 text-xs text-ink-muted">{r.usage}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="ombres"
        title="Ombres"
        description="Des ombres chaudes et discrètes, quatre paliers d'élévation seulement."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shadows.map((s) => (
            <li key={s.token} className="rounded-lg border border-line bg-canvas p-5">
              <div className={cn("mb-4 h-16 w-full rounded-lg bg-surface", s.token)} aria-hidden />
              <p className="font-mono text-xs font-semibold">{s.token}</p>
              <p className="mt-1.5 text-xs text-ink-muted">{s.usage}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="code" title="Utilisation">
        <div className="space-y-4">
          <CodeBlock
            lang="tsx"
            code={`<div className="dsm-container py-12 lg:py-16">\n  <div className="grid grid-cols-12 gap-6">\n    <main className="col-span-12 sm:col-span-8">…</main>\n    <aside className="col-span-12 sm:col-span-4">…</aside>\n  </div>\n</div>`}
          />
          <Alert tone="info" title="Une seule échelle">
            N&apos;introduisez pas de valeurs arbitraires (<code className="font-mono text-xs">mt-[13px]</code>) : composez toujours
            à partir de l&apos;échelle 4px, y compris pour les décalages fins d&apos;icônes ou de libellés.
          </Alert>
        </div>
      </Section>
    </article>
  );
}
