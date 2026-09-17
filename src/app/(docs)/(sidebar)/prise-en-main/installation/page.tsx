import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";

export const metadata: Metadata = {
  title: "Installation",
  description: "Une commande installe DSM dans votre application Next.js : les sources sont copiées dans votre projet, puis évoluent comme le reste de votre code.",
  alternates: { canonical: "/prise-en-main/installation" },
  openGraph: { url: "/prise-en-main/installation" },
};

const structure = `src/
├── app/
│   ├── fonts.ts              # IBM Plex Sans/Arabic, Noto Sans Tifinagh, IBM Plex Mono
│   ├── globals.css           # jetons, thème Tailwind, utilitaires dsm-*
│   └── layout.tsx            # ThemeProvider + LocaleProvider + polices
├── dsm/
│   ├── components/           # button.tsx, card.tsx, header.tsx, theme.tsx…
│   ├── i18n/
│   │   ├── index.ts           # locales, UiStrings, dictionnaires
│   │   └── provider.tsx       # LocaleProvider, useLocale, useT
│   ├── icons/
│   │   ├── index.tsx           # jeu Lucide curaté + glyphes directionnels
│   │   └── social.tsx
│   ├── lib/cn.ts
│   └── index.ts               # ré-export de tout src/dsm
public/
└── patterns/                  # khatam.svg, khatam-fill.svg, band.svg`;

export default function Installation() {
  return (
    <article>
      <PageHeader
        eyebrow="Prise en main"
        title="Installation"
        titleAr="التثبيت"
        description="Une commande installe DSM dans votre application Next.js : les sources sont copiées dans votre projet, puis évoluent comme le reste de votre code."
      />

      <Section
        id="cli"
        title="Installation en une commande"
        description="La CLI dsm-maroc détecte votre projet (dossier src, gestionnaire de paquets, alias @/), copie les sources et installe les dépendances."
      >
        <CodeBlock
          lang="bash"
          title="terminal"
          code={`npx dsm-maroc@latest init          # fondations, composants, polices et motifs\nnpx dsm-maroc@latest add button    # ou un seul composant et ce qu'il importe\nnpx dsm-maroc@latest list          # tous les composants disponibles`}
        />
        <Alert tone="info" title="Ce que fait init" className="mt-4">
          Copie <code className="font-mono text-xs">src/dsm/</code>, ajoute <code className="font-mono text-xs">app/dsm.css</code> importé depuis votre{" "}
          <code className="font-mono text-xs">globals.css</code>, dépose <code className="font-mono text-xs">app/fonts.ts</code> et{" "}
          <code className="font-mono text-xs">public/patterns/</code>, puis installe Base UI, CVA, clsx, tailwind-merge et Lucide. Il ne touche jamais
          à un fichier existant sans <code className="font-mono text-xs">--overwrite</code>. Il reste ensuite à brancher les fournisseurs (étape 3).
        </Alert>
        <p className="mt-4 text-sm text-ink-muted">
          Le paquet est publié sur npm :{" "}
          <a href="https://www.npmjs.com/package/dsm-maroc" target="_blank" rel="noopener">
            npmjs.com/package/dsm-maroc
          </a>
          . Chaque version embarque un instantané des sources ; pour mettre à jour un composant, relancez{" "}
          <code className="font-mono text-xs">npx dsm-maroc@latest add button --overwrite</code> et relisez le diff.
        </p>
      </Section>

      <Section
        id="prerequis"
        title="Prérequis"
        description="DSM cible une base technique précise ; vérifiez-la avant de copier les sources."
      >
        <ul className="grid gap-4 sm:grid-cols-3">
          {[
            ["Node.js 20 ou plus", "Requis par Next.js 16 et par la résolution de modules utilisée dans les scripts du projet."],
            ["Next.js 16 (App Router)", "Les composants sont des Server Components par défaut ; le routeur Pages n'est pas pris en charge."],
            ["Tailwind CSS v4", "Les jetons DSM s'appuient sur @theme inline et @utility, deux mécanismes propres à la v4."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="dependances" title="Installation manuelle — 1. Installer les dépendances" description="Si vous préférez copier les sources vous-même, les trois étapes suivantes reproduisent ce que fait la CLI.">
        <CodeBlock
          lang="bash"
          title="terminal"
          code={`pnpm add @base-ui/react class-variance-authority clsx tailwind-merge lucide-react\npnpm add -D tailwindcss @tailwindcss/postcss`}
        />
      </Section>

      <Section
        id="copie"
        title="2. Copier les fichiers DSM"
        description="Quatre emplacements suffisent : les composants, les jetons, les motifs et les polices."
      >
        <CodeBlock
          lang="bash"
          title="terminal"
          code={`cp -r dsm/src/dsm ./src/dsm\ncp dsm/src/app/globals.css ./src/app/globals.css\ncp dsm/src/app/fonts.ts ./src/app/fonts.ts\ncp -r dsm/public/patterns ./public/patterns`}
        />
      </Section>

      <Section
        id="providers"
        title="3. Brancher les fournisseurs"
        description="ThemeProvider et LocaleProvider s'installent une seule fois, dans le layout racine. themeInitScript s'exécute avant l'hydratation pour éviter tout flash de thème."
      >
        <CodeBlock
          lang="tsx"
          title="src/app/layout.tsx"
          code={`import Script from "next/script";\nimport { fontVariables } from "./fonts";\nimport { ThemeProvider, themeInitScript } from "@/dsm/components/theme";\nimport { LocaleProvider } from "@/dsm/i18n/provider";\nimport "./globals.css";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="fr" dir="ltr" className={fontVariables} suppressHydrationWarning>\n      <head>\n        <Script id="dsm-theme-init" strategy="beforeInteractive">{themeInitScript}</Script>\n      </head>\n      <body>\n        <ThemeProvider>\n          <LocaleProvider locale="fr">{children}</LocaleProvider>\n        </ThemeProvider>\n      </body>\n    </html>\n  );\n}`}
        />
        <Alert className="mt-4" tone="info" title="La direction RTL est déjà prise en charge">
          <code className="font-mono text-xs">LocaleProvider</code> enveloppe ses enfants dans le <code className="font-mono text-xs">DirectionProvider</code> de
          Base UI. N&apos;ajoutez pas votre propre fournisseur de direction : cela créerait deux sources de vérité pour le sens d&apos;écriture.
        </Alert>
      </Section>

      <Section
        id="tokens-tailwind"
        title="4. Utiliser les jetons dans Tailwind"
        description="globals.css mappe chaque variable --dsm-* sur une couleur Tailwind via @theme inline : vous écrivez bg-canvas, pas var(--dsm-canvas)."
      >
        <CodeBlock
          lang="tsx"
          code={`// Dans n'importe quel composant de votre application
<div className="bg-surface text-ink border border-line rounded-lg p-6">
  <button className="bg-primary text-primary-fg hover:bg-primary-hover rounded-md px-4 h-11">
    Continuer
  </button>
</div>`}
        />
      </Section>

      <Section
        id="ajouter-langue"
        title="5. Ajouter ou modifier une locale"
        description="Une locale se déclare à trois endroits : la liste des locales, ses métadonnées, puis son dictionnaire complet."
      >
        <CodeBlock
          lang="tsx"
          title="src/dsm/i18n/index.ts"
          code={`export const locales: Locale[] = ["fr", "ar", "zgh", "en"];\n\nexport const localeMeta: Record<Locale, …> = {\n  // …\n  en: { code: "en", dir: "ltr", label: "Anglais", nativeLabel: "English", short: "EN", fontClass: "font-sans" },\n};\n\nexport const ui: Record<Locale, UiStrings> = {\n  // Ajoutez la clé manquante dans LES QUATRE dictionnaires, jamais un seul\n  fr: { /* … */ },\n  ar: { /* … */ },\n  zgh: { /* … */ },\n  en: { /* … */ },\n};`}
        />
      </Section>

      <Section id="structure" title="Structure de projet">
        <CodeBlock lang="bash" title="arborescence" code={structure} />
      </Section>

      <Section id="depannage" title="Dépannage">
        <div className="space-y-4">
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="font-semibold">Les polices ne se chargent pas hors ligne</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              <code className="font-mono text-xs">next/font/google</code> télécharge les fichiers de police à la compilation. En
              environnement sans accès réseau, hébergez vous-même les fichiers woff2 et remplacez les appels de <code className="font-mono text-xs">next/font/google</code> dans
              <code className="ms-1 font-mono text-xs">src/app/fonts.ts</code> par <code className="font-mono text-xs">next/font/local</code>, en conservant les mêmes noms de variable CSS.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="font-semibold">« Functions cannot be passed directly to Client Components »</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              Un Server Component ne peut pas passer une fonction (un <code className="font-mono text-xs">onClick</code>, un
              résolveur de lien…) en prop à un composant client. Remplacez la fonction par une donnée sérialisable — par exemple
              une table <code className="font-mono text-xs">localeLinks: Record&lt;Locale, string&gt;</code> — et laissez le composant client choisir
              l&apos;entrée à afficher plutôt que d&apos;exécuter une fonction reçue du serveur.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="font-semibold">Avertissement d&apos;hydratation autour de data-theme</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              L&apos;attribut <code className="font-mono text-xs">data-theme</code> est posé côté client par <code className="font-mono text-xs">themeInitScript</code> avant
              l&apos;hydratation : le HTML rendu par le serveur ne le contient pas. Gardez <code className="font-mono text-xs">suppressHydrationWarning</code> sur
              la balise <code className="font-mono text-xs">&lt;html&gt;</code> pour que React ignore cette différence attendue, sans le propager plus bas dans l&apos;arbre.
            </p>
          </div>
        </div>
      </Section>
    </article>
  );
}
