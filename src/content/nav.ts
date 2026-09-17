export type NavEntry = { label: string; href: string; badge?: string };
export type NavSection = { title: string; entries: NavEntry[] };

export const docsNav: NavSection[] = [
  {
    title: "Prise en main",
    entries: [
      { label: "Introduction", href: "/prise-en-main" },
      { label: "Installation", href: "/prise-en-main/installation" },
      { label: "Principes", href: "/prise-en-main/principes" },
    ],
  },
  {
    title: "Fondations",
    entries: [
      { label: "Couleurs", href: "/fondations/couleurs" },
      { label: "Typographie", href: "/fondations/typographie" },
      { label: "Espacements & grille", href: "/fondations/espacements" },
      { label: "Iconographie", href: "/fondations/iconographie" },
      { label: "Motifs & identité", href: "/fondations/motifs" },
      { label: "Mouvement", href: "/fondations/mouvement" },
      { label: "Mode sombre", href: "/fondations/mode-sombre" },
      { label: "Langues & RTL", href: "/fondations/langues" },
    ],
  },
  {
    title: "Modèles",
    entries: [
      { label: "Vue d'ensemble", href: "/modeles" },
      { label: "Portail national", href: "/demo/fr" },
      { label: "Démarche en ligne", href: "/demo/fr/demarches/acte-de-naissance" },
    ],
  },
  {
    title: "Accessibilité",
    entries: [{ label: "Référentiel & bonnes pratiques", href: "/accessibilite" }],
  },
];

export const headerNav = [
  { label: "Prise en main", href: "/prise-en-main" },
  { label: "Fondations", href: "/fondations/couleurs" },
  { label: "Composants", href: "/composants" },
  { label: "Modèles", href: "/modeles" },
  { label: "Accessibilité", href: "/accessibilite" },
];
