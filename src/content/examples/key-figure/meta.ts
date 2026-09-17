import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "key-figure",
  title: "Chiffre clé",
  titleAr: "رقم رئيسي",
  titleEn: "Key figure",
  description:
    "Le chiffre clé met en avant une statistique isolée — taux, montant, volume — avec sa légende et, en option, une tendance. Regroupé dans un `KeyFigureGrid`, il compose un tableau de bord synthétique séparé par des filets.",
  category: "contenu",
  file: "src/dsm/components/key-figure.tsx",
  when: [
    "Utilisez un chiffre clé pour une statistique officielle vérifiable (HCP, ministère, opérateur public).",
    "Ajoutez `trend` uniquement lorsque la comparaison temporelle est pertinente et sourcée.",
    "Regroupez 2 à 4 chiffres clés dans un `KeyFigureGrid` plutôt que de les isoler séparément sur la page.",
  ],
  whenNot: [
    "N'inventez jamais un chiffre approximatif présenté comme officiel : indiquez la source en `description` si besoin de contexte.",
    "N'utilisez pas le chiffre clé pour une valeur qui change en temps réel sans indication de fraîcheur des données.",
  ],
  a11y: [
    "Le nombre est en `tabular-nums` pour un alignement régulier, sans incidence sur sa lecture par synthèse vocale.",
    "La tendance combine toujours une icône et un texte (`+4,2 %`) : la couleur seule (vert/rouge) n'est jamais le seul signal.",
  ],
  rtl: [
    "Les filets de séparation du `KeyFigureGrid` utilisent `border-s`, donc toujours du côté du début de lecture.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Un chiffre clé isolé, avec tendance." },
    { slug: "tones", title: "Tons", description: "Tons `default`, `primary` et `inverse` sur fond sombre." },
    { slug: "maroc-en-chiffres", title: "Le Maroc en chiffres", description: "Cas réel : grille de 4 statistiques du HCP." },
  ],
  props: [
    {
      component: "KeyFigure",
      items: [
        { name: "value", type: "string", required: true, description: "Valeur affichée en grand, ex. « 37,8 M »." },
        { name: "label", type: "ReactNode", required: true, description: "Légende sous la valeur." },
        { name: "description", type: "ReactNode", description: "Précision ou source, affichée en petit." },
        { name: "trend", type: "{ value: string; direction: \"up\" | \"down\" | \"flat\" }", description: "Variation affichée avec icône et couleur sémantique." },
        { name: "tone", type: '"default" | "primary" | "inverse"', default: "default", description: "Couleur du chiffre — `inverse` pour un fond sombre." },
      ],
    },
    {
      component: "KeyFigureGrid",
      items: [{ name: "columns", type: "2 | 3 | 4", default: "3", description: "Nombre de colonnes à partir du point de rupture `sm`." }],
    },
  ],
  related: ["table", "highlight"],
};

export default meta;
