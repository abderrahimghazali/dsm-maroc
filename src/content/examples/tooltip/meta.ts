import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "tooltip",
  title: "Infobulle",
  titleAr: "تلميحة",
  titleEn: "Tooltip",
  description:
    "L'infobulle affiche un texte d'appoint au survol ou au focus d'un élément, généralement une icône ou une action condensée. Elle est purement visuelle et ne doit jamais porter une information indispensable.",
  category: "overlays",
  file: "src/dsm/components/tooltip.tsx",
  when: [
    "Utilisez une infobulle pour clarifier une icône seule (imprimer, télécharger, copier) déjà pourvue d'un `aria-label`.",
    "Regroupez toutes les infobulles d'une même vue sous un seul `TooltipProvider` pour partager le délai d'apparition.",
  ],
  whenNot: [
    "N'y placez jamais une information obligatoire à la compréhension : les écrans tactiles ne peuvent pas déclencher un survol.",
    "Ne l'utilisez pas pour un texte d'aide déjà visible en permanence à côté du champ.",
  ],
  a11y: [
    "Le déclencheur doit toujours porter son propre `aria-label` ou son propre texte visible : l'infobulle ne le remplace pas.",
    "Les infobulles sont désactivées sur les dispositifs tactiles, conformément aux recommandations Base UI.",
  ],
  rtl: [
    "`side` accepte les valeurs logiques `inline-start` / `inline-end` : la position bascule automatiquement selon le sens de lecture.",
    "Le petit repère (carré pivoté) est positionné par Base UI et miroité en RTL pour les côtés inline-start / inline-end.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Sur une action en icône seule.", minHeight: 200 },
    { slug: "sides", title: "Positions", description: "top, bottom, inline-start, inline-end.", minHeight: 260 },
    { slug: "composed", title: "Barre d'actions d'un dossier", description: "Plusieurs infobulles partageant un même provider.", minHeight: 220 },
  ],
  props: [
    {
      component: "TooltipProvider",
      items: [{ name: "delay", type: "number", default: "0", description: "Délai en millisecondes avant l'apparition de l'infobulle." }],
    },
    {
      component: "Tooltip",
      items: [
        { name: "content", type: "ReactNode", required: true, description: "Texte affiché dans l'infobulle." },
        { name: "side", type: '"top" | "bottom" | "inline-start" | "inline-end"', default: "top", description: "Côté logique d'apparition, mirroré en RTL." },
        { name: "sideOffset", type: "number", default: "4", description: "Distance en pixels entre le déclencheur et l'infobulle." },
        { name: "children", type: "ReactElement", required: true, description: "Élément déclencheur, rendu via `Tooltip.Trigger`." },
      ],
    },
  ],
  related: ["popover", "button"],
};

export default meta;
