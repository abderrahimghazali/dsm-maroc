import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "checkbox",
  title: "Case à cocher",
  titleAr: "خانة اختيار",
  titleEn: "Checkbox",
  description:
    "Case à cocher accessible avec libellé et aide intégrés, et son pendant en groupe `CheckboxGroup` pour une sélection multiple derrière une légende commune. L'état indéterminé permet de représenter une sélection partielle d'un groupe.",
  category: "formulaires",
  file: "src/dsm/components/checkbox.tsx",
  when: [
    "Utilisez `Checkbox` pour un consentement ou une option binaire indépendante (accepter les conditions, s'abonner à une notification).",
    "Utilisez `CheckboxGroup` pour une sélection de zéro, un ou plusieurs éléments dans une même liste (documents à joindre, notifications à recevoir).",
    "Utilisez `indeterminate` pour une case « tout sélectionner » qui reflète un état partiel du groupe qu'elle contrôle.",
  ],
  whenNot: [
    "N'utilisez pas une case à cocher seule pour un choix binaire du type marche/arrêt qui prend effet immédiatement : `Switch` est plus adapté.",
    "N'utilisez pas `CheckboxGroup` si un seul choix est possible : `RadioGroup` exprime mieux l'exclusivité mutuelle.",
  ],
  a11y: [
    "Le libellé enveloppe la case (`<label>`), la zone cliquable couvre donc tout le texte, pas seulement la case.",
    "L'état `indeterminate` est visuel et sémantique : il est exposé aux lecteurs d'écran comme un troisième état, distinct de coché/décoché.",
    "`CheckboxGroup` s'appuie sur `Fieldset` : la légende native regroupe correctement les options pour les technologies d'assistance.",
  ],
  rtl: [
    "La case et le texte utilisent `gap` logique : leur ordre visuel s'inverse automatiquement en arabe sans classe additionnelle.",
  ],
  examples: [
    { slug: "default", title: "Case simple", description: "Case isolée, avec libellé, aide et état indéterminé." },
    { slug: "group", title: "Groupe", description: "`CheckboxGroup` en colonne et en ligne." },
    { slug: "states", title: "États", description: "Groupe désactivé et groupe en erreur." },
  ],
  props: [
    {
      component: "Checkbox",
      items: [
        { name: "label", type: "ReactNode", description: "Libellé affiché à côté de la case." },
        { name: "hint", type: "ReactNode", description: "Texte secondaire sous le libellé." },
        { name: "size", type: '"sm" | "md"', default: "md", description: "Taille de la case." },
        { name: "indeterminate", type: "boolean", description: "Affiche un tiret plutôt qu'une coche, pour une sélection partielle." },
        { name: "checked / defaultChecked / onCheckedChange", type: "boolean", description: "Contrôle ou observe l'état coché." },
      ],
    },
    {
      component: "CheckboxGroup",
      items: [
        { name: "legend", type: "ReactNode", required: true, description: "Légende du groupe." },
        { name: "hint / error", type: "ReactNode", description: "Aide ou message d'erreur du groupe." },
        { name: "options", type: "{ value, label, hint?, disabled? }[]", required: true, description: "Cases proposées." },
        { name: "orientation", type: '"row" | "column"', default: "column", description: "Disposition des options." },
        { name: "value / defaultValue / onValueChange", type: "string[]", description: "Valeurs actuellement cochées." },
      ],
    },
  ],
  related: ["field", "radio", "switch"],
};

export default meta;
