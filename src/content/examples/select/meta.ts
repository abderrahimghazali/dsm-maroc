import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "select",
  title: "Liste déroulante",
  titleAr: "قائمة منسدلة",
  titleEn: "Select",
  description:
    "Sélection d'une valeur unique parmi une liste, avec un déclencheur au style des champs de texte et un menu accessible au clavier. Les options peuvent être regroupées et porter une description secondaire. `NativeSelect` couvre les cas simples qui n'ont pas besoin de description ni de regroupement.",
  category: "formulaires",
  file: "src/dsm/components/select.tsx",
  when: [
    "Utilisez `Select` dès que les options bénéficient d'un regroupement (par région, par catégorie) ou d'une description secondaire.",
    "Utilisez `groups` pour structurer de longues listes, par exemple les communes classées par région.",
    "Préférez `NativeSelect` sur un formulaire très dense où le comportement natif du système (clavier, autocomplétion) est suffisant.",
  ],
  whenNot: [
    "N'utilisez pas `Select` pour moins de 5 options mutuellement exclusives affichées en permanence : `RadioGroup` évite un clic supplémentaire.",
    "N'utilisez pas `Select` pour une sélection multiple : ce composant ne gère qu'une valeur à la fois.",
  ],
  a11y: [
    "Le déclencheur est un vrai `<button>` : il est focusable au clavier et s'ouvre avec Entrée, Espace ou les flèches.",
    "L'option sélectionnée est annoncée avec l'indicateur `Check`, jamais par la seule couleur.",
    "Toujours envelopper `Select` dans `Field` pour lui fournir un libellé accessible.",
  ],
  rtl: [
    "Le chevron et l'alignement du texte suivent le sens de lecture (`text-start`), sans classe additionnelle.",
    "Le menu s'ouvre et s'aligne sur la largeur du déclencheur quel que soit le sens de lecture.",
  ],
  examples: [
    { slug: "default", title: "Simple", description: "Une liste plate d'options avec un espace réservé." },
    { slug: "grouped", title: "Regroupée", description: "Options réparties par région, avec description secondaire." },
    { slug: "states", title: "États", description: "Invalide et désactivé." },
    { slug: "native", title: "Liste native", description: "`NativeSelect`, un `<select>` stylé pour les cas simples." },
  ],
  props: [
    {
      component: "Select",
      items: [
        { name: "options", type: "{ value, label, description?, disabled? }[]", description: "Liste plate d'options." },
        { name: "groups", type: "{ label, options }[]", description: "Options regroupées sous un intertitre ; remplace `options`." },
        { name: "placeholder", type: "string", default: "t.selectPlaceholder", description: "Texte affiché tant qu'aucune valeur n'est choisie." },
        { name: "value / defaultValue / onValueChange", type: "string | null", description: "Contrôle ou observe la valeur sélectionnée." },
        { name: "size", type: '"sm" | "md" | "lg"', default: "md", description: "Hauteur du déclencheur, alignée sur `Input`." },
        { name: "invalid", type: "boolean", description: "Applique le style d'erreur au déclencheur." },
      ],
    },
    {
      component: "NativeSelect",
      items: [
        { name: "options", type: "{ value, label, disabled? }[]", required: true, description: "Options du `<select>` natif." },
        { name: "placeholder", type: "string", description: "Ajoute une option désactivée initiale." },
        { name: "invalid", type: "boolean", description: "Applique le style d'erreur." },
      ],
    },
  ],
  related: ["field", "radio", "checkbox"],
};

export default meta;
