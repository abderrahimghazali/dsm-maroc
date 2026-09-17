import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "popover",
  title: "Fenêtre contextuelle",
  titleAr: "نافذة سياقية",
  titleEn: "Popover",
  description:
    "La fenêtre contextuelle affiche un contenu riche (texte, filtres, mini-formulaire) ancré à un déclencheur, sans quitter la page. Contrairement à l'infobulle, elle reste accessible au clic et au clavier.",
  category: "overlays",
  file: "src/dsm/components/popover.tsx",
  when: [
    "Utilisez-la pour une explication détaillée qui ne tient pas dans une infobulle (« Comment le savoir ? »).",
    "Utilisez-la pour un panneau de filtres ou d'options secondaires, accessible depuis une seule action.",
  ],
  whenNot: [
    "N'y placez pas une action irréversible ou destructive : utilisez `AlertDialog`.",
    "Ne l'utilisez pas pour un contenu qui doit rester ouvert pendant que l'utilisateur défile la page : préférez un `Drawer`.",
  ],
  a11y: [
    "Le déclencheur reçoit `aria-expanded` et l'ouverture est disponible au clavier (Entrée, Espace).",
    "Quand `closable` est actif, le bouton de fermeture porte un `aria-label` traduit.",
  ],
  rtl: [
    "`side` accepte `inline-start` / `inline-end` : la position bascule automatiquement selon le sens de lecture.",
    "Le repère visuel optionnel (showArrow) est positionné par Base UI et miroité en RTL, sans propriété physique dans le code d'usage.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Une explication courte ancrée à un lien.", minHeight: 260 },
    { slug: "with-close", title: "Avec titre et fermeture", description: "Panneau nommé, fermable explicitement.", minHeight: 280 },
    { slug: "composed", title: "Filtre de démarches", description: "Mini-formulaire de filtres dans une fenêtre contextuelle.", minHeight: 320 },
  ],
  props: [
    {
      component: "Popover",
      items: [
        { name: "trigger", type: "ReactElement", required: true, description: "Élément déclencheur, rendu via `Popover.Trigger`." },
        { name: "title", type: "ReactNode", description: "Titre optionnel en tête de fenêtre." },
        { name: "description", type: "ReactNode", description: "Texte principal, sous le titre." },
        { name: "side", type: '"top" | "bottom" | "inline-start" | "inline-end"', default: "bottom", description: "Côté logique d'ancrage." },
        { name: "align", type: '"start" | "center" | "end"', default: "center", description: "Alignement sur l'axe perpendiculaire." },
        { name: "sideOffset", type: "number", default: "4", description: "Distance en pixels avec le déclencheur." },
        { name: "showArrow", type: "boolean", default: "false", description: "Affiche le repère triangulaire vers le déclencheur." },
        { name: "closable", type: "boolean", default: "false", description: "Affiche un bouton de fermeture à côté du titre." },
        { name: "children", type: "ReactNode", description: "Contenu libre, sous le titre et la description." },
      ],
    },
  ],
  related: ["tooltip", "dialog"],
};

export default meta;
