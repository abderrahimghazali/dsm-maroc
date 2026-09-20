import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { fontVariables } from "@/app/fonts";
import { Header } from "@/dsm/components/header";
import { Footer } from "@/dsm/components/footer";
import { ThemeProvider, themeInitScript } from "@/dsm/components/theme";
import { LocaleProvider } from "@/dsm/i18n/provider";
import { headerNav } from "@/content/nav";
import { siteConfig } from "@/content/site";
import "@/app/globals.css";

// Root layout of the documentation site. The demo portal has its own root layout under
// src/app/demo/[locale] so that <html lang dir> can follow the demo locale.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} · Moroccan design system`, template: `%s · ${siteConfig.shortName}` },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  category: "technology",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.descriptionLong,
    locale: "fr_MA",
    alternateLocale: ["ar_MA", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.descriptionEn,
    creator: siteConfig.author.xHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // After deploying, paste the Search Console token here: verification: { google: "…" }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B6B3F" },
    { media: "(prefers-color-scheme: dark)", color: "#0B6B3F" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: ["DSM", "Système de Design du Maroc", "Morocco Design System", "Moroccan Design System"],
      description: siteConfig.descriptionLong,
      inLanguage: ["fr", "ar", "zgh"],
      author: { "@id": `${siteConfig.url}/#author` },
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${siteConfig.url}/#software`,
      name: siteConfig.name,
      description: siteConfig.descriptionEn,
      codeRepository: siteConfig.repo,
      installUrl: siteConfig.npm,
      sameAs: [siteConfig.npm],
      programmingLanguage: ["TypeScript", "CSS"],
      runtimePlatform: "Next.js",
      url: siteConfig.url,
      author: { "@id": `${siteConfig.url}/#author` },
      keywords: siteConfig.keywords.join(", "),
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#author`,
      name: siteConfig.author.name,
      url: siteConfig.author.url,
      sameAs: [siteConfig.author.github, siteConfig.author.x, siteConfig.author.linkedin].filter(Boolean),
      ...(siteConfig.author.email ? { email: siteConfig.author.email } : {}),
    },
  ],
};

export default function DocsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={fontVariables} suppressHydrationWarning>
      <head>
        <Script id="dsm-theme-init" strategy="beforeInteractive">{themeInitScript}</Script>
      </head>
      <body id="top" className="flex min-h-dvh flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <ThemeProvider>
          <LocaleProvider locale="fr">
            <Header
              service={{ title: "Système de Design du Maroc", tagline: "DSM · composants pour les services publics numériques", href: "/" }}
              nav={headerNav}
              search={false}
              sticky
            />
            {children}
            <Footer
              description="DSM est un système de design ouvert pour concevoir des services publics numériques marocains cohérents, accessibles et trilingues. Projet indépendant, non affilié à une administration."
              columns={[
                {
                  title: "Documentation",
                  links: [
                    { label: "Prise en main", href: "/prise-en-main" },
                    { label: "Fondations", href: "/fondations/couleurs" },
                    { label: "Composants", href: "/composants" },
                    { label: "Modèles", href: "/modeles" },
                  ],
                },
                {
                  title: "Démonstration",
                  links: [
                    { label: "Portail national (FR)", href: "/demo/fr" },
                    { label: "البوابة الوطنية (AR)", href: "/demo/ar" },
                    { label: "ⵜⴰⴱⴱⵓⵔⵜ ⵜⴰⵏⴰⵎⵓⵔⵜ (ZGH)", href: "/demo/zgh" },
                  ],
                },
                {
                  title: "Ressources",
                  links: [
                    { label: "Accessibilité", href: "/accessibilite" },
                    { label: "Langues & RTL", href: "/fondations/langues" },
                    { label: "Journal des versions", href: "/prise-en-main#versions" },
                    { label: "Paquet npm dsm-maroc", href: "https://www.npmjs.com/package/dsm-maroc" },
                  ],
                },
              ]}
              bottomLinks={[
                { label: "Plan du site", href: "/composants" },
                { label: "Accessibilité : AA visée, audit à venir", href: "/accessibilite" },
                { label: "Licence MIT", href: "/prise-en-main#licence" },
              ]}
              license={
                <>
                  DSM v0.1 — Système de Design du Maroc. Code sous licence MIT. Les symboles nationaux restent la propriété du Royaume du Maroc.
                  <br />
                  Conçu et développé par{" "}
                  <a href={siteConfig.author.url} rel="author" className="font-medium text-ink-muted hover:text-ink">
                    {siteConfig.author.name}
                  </a>
                  {" · "}
                  <a href={siteConfig.author.github} rel="me noopener" target="_blank" className="hover:text-ink">
                    GitHub
                  </a>
                  {" · "}
                  <a href={siteConfig.author.x} rel="me noopener" target="_blank" className="hover:text-ink">
                    X
                  </a>
                  {siteConfig.author.linkedin && (
                    <>
                      {" · "}
                      <a href={siteConfig.author.linkedin} rel="me noopener" target="_blank" className="hover:text-ink">
                        LinkedIn
                      </a>
                    </>
                  )}
                  {siteConfig.author.email && (
                    <>
                      {" · "}
                      <a href={`mailto:${siteConfig.author.email}`} className="hover:text-ink">
                        {siteConfig.author.email}
                      </a>
                    </>
                  )}
                  {" · "}
                  <a href={siteConfig.repo} rel="noopener" target="_blank" className="hover:text-ink">
                    Code source
                  </a>
                  {" · "}
                  <a href="https://www.npmjs.com/package/dsm-maroc" rel="noopener" target="_blank" className="hover:text-ink">
                    npm
                  </a>
                </>
              }
            />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
