import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { Button } from "@/dsm/components/button";
import { ArrowForward } from "@/dsm/icons";
import { BreadcrumbJsonLd } from "@/components/docs/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Prise en main",
  description: "DSM (Système de Design du Maroc) est un système de design complet pour les services publics numériques marocains",
  alternates: { canonical: "/prise-en-main" },
  openGraph: { url: "/prise-en-main" },
};

export default function GettingStarted() {
  return (
    <article>
      <BreadcrumbJsonLd trail={[{ name: "Prise en main" }]} />
      <PageHeader
        eyebrow="Prise en main"
        title="Introduction"
        titleAr="مقدمة"
        description="DSM (Système de Design du Maroc) est un système de design complet pour les services publics numériques marocains : des fondations (couleurs, typographie, espacements), une bibliothèque de composants React accessibles et trilingues, et des modèles de pages prêts à assembler."
      />

      <Section id="pourquoi" title="Pourquoi un système de design ?">
        <div className="dsm-prose text-ink-muted">
          <p>
            Comme le DSFR en France ou le GOV.UK Design System au Royaume-Uni, un système de design d&apos;État donne aux
            équipes un socle commun : les citoyens reconnaissent immédiatement un service officiel, les équipes gagnent
            des semaines de conception, et l&apos;accessibilité n&apos;est plus une option mais une propriété du système.
          </p>
          <p>
            DSM répond à une contrainte que peu de systèmes traitent nativement : <strong>trois langues et deux directions
            d&apos;écriture</strong>. L&apos;arabe (RTL), l&apos;amazighe en tifinaghe et le français sont pris en charge par chaque
            composant, sans code spécifique côté produit.
          </p>
        </div>
      </Section>

      <Section id="contenu" title="Ce que contient DSM">
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            ["Fondations", "Jetons de couleur, échelle typographique multi-scripts, espacements, motifs et mouvement — exposés en variables CSS et utilitaires Tailwind."],
            ["Composants", "Plus de cinquante composants React construits sur Base UI : en-tête, formulaires, navigation, contenu, retours, superpositions."],
            ["Modèles", "Un portail national de démonstration en trois langues : accueil, démarche pas à pas, page institutionnelle, recherche, erreurs."],
            ["Internationalisation", "Un fournisseur de locale, des dictionnaires ar / zgh / fr / en, une marque nationale trilingue et des icônes directionnelles."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="installation" title="Installation rapide" description="DSM n'est pas une bibliothèque à importer mais des sources copiées dans votre projet Next.js (App Router) et Tailwind v4 : vous possédez le code, et vous décidez quand reprendre une mise à jour. La CLI fait la copie.">
        <div className="space-y-4">
          <CodeBlock lang="bash" title="terminal" code={`npx dsm-maroc@latest init   # copie src/dsm, dsm.css, fonts.ts et public/patterns, installe les 5 dépendances`} />
          <CodeBlock
            lang="tsx"
            title="src/app/layout.tsx"
            code={`import Script from "next/script";\nimport { fontVariables } from "./fonts";\nimport { ThemeProvider, themeInitScript } from "@/dsm/components/theme";\nimport { LocaleProvider } from "@/dsm/i18n/provider";\nimport "./globals.css";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="fr" dir="ltr" className={fontVariables} suppressHydrationWarning>\n      <head>\n        <Script id="dsm-theme-init" strategy="beforeInteractive">{themeInitScript}</Script>\n      </head>\n      <body>\n        <ThemeProvider>\n          <LocaleProvider locale="fr">{children}</LocaleProvider>\n        </ThemeProvider>\n      </body>\n    </html>\n  );\n}`}
          />
          <Alert tone="info" title="Polices">
            Les polices (IBM Plex Sans, IBM Plex Sans Arabic, Noto Sans Tifinagh, IBM Plex Mono) sont chargées via <code className="font-mono text-xs">next/font/google</code> dans <code className="font-mono text-xs">src/app/fonts.ts</code>. Copiez ce fichier ou auto-hébergez les fichiers woff2.
          </Alert>
        </div>
        <div className="mt-6">
          <Button render={<Link href="/prise-en-main/installation" />} iconEnd={<ArrowForward />}>
            Guide d&apos;installation détaillé
          </Button>
        </div>
      </Section>

      <Section id="premier-composant" title="Premier composant">
        <CodeBlock
          lang="tsx"
          code={`import { Button } from "@/dsm/components/button";\nimport { Alert } from "@/dsm/components/alert";\nimport { ArrowForward } from "@/dsm/icons";\n\nexport function Demarche() {\n  return (\n    <>\n      <Alert tone="info" title="Pièces à préparer">CNIE et justificatif de domicile.</Alert>\n      <Button size="lg" iconEnd={<ArrowForward />}>Commencer la démarche</Button>\n    </>\n  );\n}`}
        />
      </Section>

      <Section id="versions" title="Versions">
        <div className="rounded-lg border border-line bg-surface p-5 text-sm">
          <p className="font-semibold">v0.1 — septembre 2026</p>
          <p className="mt-1 text-ink-muted">Première version publique : fondations, 53 composants documentés, modèles de portail et de démarche trilingues, documentation.</p>
        </div>
      </Section>

      <Section id="licence" title="Licence">
        <p className="text-sm leading-relaxed text-ink-muted">
          Le code de DSM est publié sous licence MIT. Les symboles nationaux (drapeau, étoile, dénominations officielles) restent la
          propriété du Royaume du Maroc et doivent être utilisés conformément à la réglementation en vigueur. DSM est un projet
          indépendant, non affilié à une administration.
        </p>
      </Section>
    </article>
  );
}
