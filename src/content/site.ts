/** Single source of truth for SEO metadata and author attribution. */
export const siteConfig = {
  name: "DSM — Système de Design du Maroc",
  shortName: "DSM",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dsm-maroc.vercel.app",
  /** ≤ 155 characters: it is the search snippet of the home page. */
  description:
    "Système de design des services publics marocains : composants, fondations et modèles trilingues. The Moroccan design system for public services.",
  /** Longer French description for JSON-LD, the manifest and social cards. */
  descriptionLong:
    "Le système de design pour les services publics numériques marocains : fondations, composants React accessibles et modèles de pages, trilingues (arabe, amazighe, français) et RTL natifs.",
  descriptionEn:
    "A design system for Moroccan public digital services: foundations, accessible React components and page templates, trilingual (Arabic, Tamazight, French) and RTL-first.",
  keywords: [
    "design system",
    "système de design",
    "Maroc",
    "Morocco",
    "gov.ma",
    "services publics numériques",
    "e-gouvernement",
    "composants React",
    "Next.js",
    "Tailwind CSS",
    "Base UI",
    "RTL",
    "arabe",
    "amazigh",
    "tifinagh",
    "DSFR",
    "accessibilité",
    "WCAG 2.2",
    "نظام تصميم",
    "المغرب",
    "الخدمات العمومية الرقمية",
  ],
  repo: "https://github.com/abderrahimghazali/dsm-maroc",
  npm: "https://www.npmjs.com/package/dsm-maroc",
  author: {
    name: "Abderrahim Ghazali",
    url: "https://abderrahimghazali.github.io/",
    github: "https://github.com/abderrahimghazali",
    x: "https://x.com/Ghazalidotdev",
    xHandle: "@Ghazalidotdev",
    /** Add a LinkedIn URL here to show it in the footer credit. */
    linkedin: "",
    /** Left empty on purpose: set it to publish a contact e-mail in the footer and JSON-LD. */
    email: "",
  },
} as const;
