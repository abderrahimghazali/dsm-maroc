import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { fontVariables } from "./fonts";
import { ThemeProvider, themeInitScript } from "@/dsm/components/theme";
import { LocaleProvider } from "@/dsm/i18n/provider";
import { siteConfig } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s · ${siteConfig.shortName}` },
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
    description: siteConfig.description,
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
      alternateName: ["DSM", "Système de Design du Maroc", "Morocco Design System"],
      description: siteConfig.description,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={fontVariables} suppressHydrationWarning>
      <head>
        <Script id="dsm-theme-init" strategy="beforeInteractive">{themeInitScript}</Script>
      </head>
      <body id="top" className="flex min-h-dvh flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <ThemeProvider>
          <LocaleProvider locale="fr">{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
