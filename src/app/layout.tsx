import type { Metadata } from "next";
import Script from "next/script";
import { fontVariables } from "./fonts";
import { ThemeProvider, themeInitScript } from "@/dsm/components/theme";
import { LocaleProvider } from "@/dsm/i18n/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "DSM — Système de Design du Maroc", template: "%s · DSM" },
  description:
    "Le système de design de l'État marocain : composants, fondations et modèles pour des services publics numériques trilingues, accessibles et cohérents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={fontVariables} suppressHydrationWarning>
      <head>
        <Script id="dsm-theme-init" strategy="beforeInteractive">{themeInitScript}</Script>
      </head>
      <body id="top" className="flex min-h-dvh flex-col">
        <ThemeProvider>
          <LocaleProvider locale="fr">{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
