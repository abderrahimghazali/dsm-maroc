import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { Badge } from "@/dsm/components/badge";
import { Button } from "@/dsm/components/button";
import { Card, CardBody, CardFooter, CardText, CardTitle } from "@/dsm/components/card";

export const metadata: Metadata = {
  title: "Mode sombre",
  description: "Le mode sombre n'est pas une feuille de style séparée : c'est le même composant, alimenté par des jetons qui changent de valeur selon l'attribut data-theme. Aucun composant DSM n'écrit de variante dark:.",
};

const tokens = [
  { token: "--dsm-canvas", light: "#FAF7F1", dark: "#121110" },
  { token: "--dsm-surface", light: "#FFFFFF", dark: "#1A1917" },
  { token: "--dsm-surface-inverse", light: "#1C1A17", dark: "#F3EEE6" },
  { token: "--dsm-ink", light: "#1C1A17", dark: "#F3EEE6" },
  { token: "--dsm-ink-inverse", light: "#FAF7F1", dark: "#1C1A17" },
  { token: "--dsm-vert", light: "#0B6B3F", dark: "#3FA870" },
  { token: "--dsm-rouge", light: "#B5202C", dark: "#E4606A" },
  { token: "--dsm-bleu", light: "#2B3FA8", dark: "#8C9BF2" },
  { token: "--dsm-safran", light: "#C4720A", dark: "#E9A23B" },
  { token: "--dsm-primary-fg", light: "#FFFFFF", dark: "#0D0C0B" },
];

function DemoBlock() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardBody>
        <div className="flex items-center justify-between">
          <Badge tone="success" dot>
            Dossier validé
          </Badge>
          <span className="text-xs text-ink-subtle">Réf. 2026-004821</span>
        </div>
        <CardTitle>Acte de naissance</CardTitle>
        <CardText>Votre demande a été traitée. Le document est prêt au téléchargement.</CardText>
        <Alert tone="info" size="sm" title="Conservez votre référence">
          Elle vous sera demandée pour toute réclamation.
        </Alert>
        <CardFooter>
          <Button size="sm">Télécharger</Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}

export default function DarkMode() {
  return (
    <article>
      <PageHeader
        eyebrow="Fondations"
        title="Mode sombre"
        titleAr="الوضع الداكن"
        description="Le mode sombre n'est pas une feuille de style séparée : c'est le même composant, alimenté par des jetons qui changent de valeur selon l'attribut data-theme. Aucun composant DSM n'écrit de variante dark:."
      />

      <Section
        id="fonctionnement"
        title="Comment ça marche"
        description="Un attribut data-theme sur <html>, posé avant la première peinture pour éviter tout flash."
      >
        <div className="space-y-4">
          <ol className="grid gap-4 sm:grid-cols-3">
            {[
              ["1. Avant peinture", "themeInitScript lit la préférence stockée (ou le système) et pose data-theme sur <html> via un <Script strategy=\"beforeInteractive\">."],
              ["2. À l'exécution", "ThemeProvider synchronise React avec cet attribut et écoute les changements de préférence système."],
              ["3. Dans l'UI", "ThemeToggle expose un menu clair / sombre / système, propulsé par le hook useTheme."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-lg border border-line bg-surface p-5">
                <p className="font-semibold">{t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
              </li>
            ))}
          </ol>
          <CodeBlock
            lang="tsx"
            title="src/app/layout.tsx"
            code={`import Script from "next/script";\nimport { ThemeProvider, themeInitScript } from "@/dsm/components/theme";\n\n<html lang="fr" suppressHydrationWarning>\n  <head>\n    <Script id="dsm-theme-init" strategy="beforeInteractive">{themeInitScript}</Script>\n  </head>\n  <body>\n    <ThemeProvider>{children}</ThemeProvider>\n  </body>\n</html>`}
          />
          <CodeBlock
            lang="tsx"
            code={`import { ThemeToggle, useTheme } from "@/dsm/components/theme";\n\n// Menu clair / sombre / système, prêt à l'emploi\n<ThemeToggle />\n\n// Ou piloter soi-même\nconst { theme, resolved, setTheme } = useTheme();`}
          />
        </div>
      </Section>

      <Section
        id="comparaison"
        title="Le même bloc, deux thèmes"
        description={'Card, Badge, Alert et Button rendus sans aucune modification de code, dans un conteneur data-theme="light" puis data-theme="dark".'}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div data-theme="light" className="rounded-lg border border-line bg-canvas p-6">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-ink-subtle">Clair</p>
            <DemoBlock />
          </div>
          <div data-theme="dark" className="rounded-lg border border-line bg-canvas p-6 text-ink">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-ink-subtle">Sombre</p>
            <DemoBlock />
          </div>
        </div>
      </Section>

      <Section
        id="jetons"
        title="Remappage des jetons"
        description={'Chaque variable change de valeur sous [data-theme="dark"] ; les utilitaires Tailwind (bg-canvas, text-ink…) restent identiques dans le code des composants.'}
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Jeton</th>
                <th className="px-4 py-2.5 text-start font-semibold">Clair</th>
                <th className="px-4 py-2.5 text-start font-semibold">Sombre</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {tokens.map((row) => (
                <tr key={row.token} className="border-t border-line">
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem]">{row.token}</td>
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-ink-muted">{row.light}</td>
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-ink-muted">{row.dark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="primary-fg"
        title="primary-fg : le cas du texte sur bouton principal"
        description="Sur bg-primary, le texte doit rester lisible dans les deux thèmes — sa couleur ne peut donc pas être fixe."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div data-theme="light" className="flex items-center justify-center rounded-lg border border-line bg-surface p-6">
            <Button>Valider la demande</Button>
          </div>
          <div data-theme="dark" className="flex items-center justify-center rounded-lg border border-line bg-surface p-6">
            <Button>Valider la demande</Button>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          <code className="font-mono text-xs">primary-fg</code> vaut blanc en clair et une encre proche du noir en sombre : le vert du
          bouton s&apos;éclaircit en mode sombre pour rester accessible, et le texte bascule pour préserver le contraste.
        </p>
      </Section>

      <Section
        id="surfaces-inverses"
        title="Les surfaces inverses basculent aussi"
        description="surface-inverse et ink-inverse sont pensées pour rester contrastées face au thème courant : elles s'inversent donc à leur tour en mode sombre."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div data-theme="light" className="rounded-lg bg-surface-inverse p-6 text-ink-inverse">
            <p className="text-sm font-semibold">Bandeau inverse — thème clair</p>
            <p className="mt-1 text-sm text-ink-inverse/70">surface-inverse = encre foncée, ink-inverse = toile claire.</p>
          </div>
          <div data-theme="dark" className="rounded-lg bg-surface-inverse p-6 text-ink-inverse">
            <p className="text-sm font-semibold">Bandeau inverse — thème sombre</p>
            <p className="mt-1 text-sm text-ink-inverse/70">Les deux jetons s&apos;échangent : le bandeau reste le contraire du fond ambiant.</p>
          </div>
        </div>
      </Section>

      <Section id="regle" title="La règle : jamais de dark:">
        <div className="space-y-4">
          <Alert tone="error" title="Ne jamais écrire de variante dark:">
            Coder une couleur en dur puis la corriger avec <code className="font-mono text-xs">dark:</code> duplique la décision de
            couleur et finit par diverger. Utilisez toujours l&apos;alias sémantique : il porte déjà les deux valeurs.
          </Alert>
          <CodeBlock
            lang="tsx"
            code={`{/* À éviter */}\n<div className="bg-white text-black dark:bg-neutral-900 dark:text-white" />\n\n{/* À faire */}\n<div className="bg-surface text-ink" />`}
          />
        </div>
      </Section>
    </article>
  );
}
