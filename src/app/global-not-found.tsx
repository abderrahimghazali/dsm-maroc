import type { Metadata } from "next";
import Link from "next/link";
import { fontVariables } from "@/app/fonts";
import "@/app/globals.css";

// Rendered for URLs that match no route at all. Bypasses every layout, hence the own <html>.
export const metadata: Metadata = { title: "Page introuvable · DSM", robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <html lang="fr" dir="ltr" className={fontVariables}>
      <body className="flex min-h-dvh flex-col items-center justify-center bg-canvas px-6 text-center text-ink">
        <p className="font-mono text-sm text-ink-subtle">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Page introuvable</h1>
        <p className="mt-3 max-w-md text-ink-muted">Cette adresse ne correspond à aucune page du Système de Design du Maroc.</p>
        <Link href="/" className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-5 text-[0.9375rem] font-semibold text-primary-fg no-underline hover:bg-primary-hover">
          Retour à l&apos;accueil
        </Link>
      </body>
    </html>
  );
}
