import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "radio",
  title: "Bouton radio",
  titleAr: "زر اختيار",
  titleEn: "Radio group",
  description:
    "Sélection exclusive d'une option parmi plusieurs, derrière une légende commune. La variante « card » transforme chaque option en bloc bordé et cliquable, utile quand chaque choix mérite une description plus longue.",
  category: "formulaires",
  file: "src/dsm/components/radio.tsx",
  when: [
    "Utilisez `RadioGroup` pour un choix unique et exclusif entre 2 et 6 options visibles en permanence.",
    "Utilisez `variant=\"card\"` quand chaque option a besoin d'une description ou d'un poids visuel plus fort qu'un simple libellé (mode de retrait, formule d'abonnement).",
    "Utilisez `orientation=\"row\"` pour des options courtes qui tiennent sur une ligne.",
  ],
  whenNot: [
    "N'utilisez pas `RadioGroup` pour plus de 6-7 options : basculez vers `Select`.",
    "N'utilisez pas de bouton radio pour un choix qui peut être laissé vide sans conséquence : une case à cocher ou un interrupteur exprime mieux l'aspect facultatif.",
  ],
  a11y: [
    "Le groupe est annoncé comme un ensemble grâce à la légende native (`Fieldset`), pas seulement comme des boutons isolés.",
    "Chaque option est activable au clavier avec les flèches, une fois le focus posé dans le groupe.",
    "En variante `card`, toute la carte est cliquable : la zone de clic dépasse largement le petit cercle du bouton radio.",
  ],
  rtl: [
    "Le cercle et le texte utilisent un `gap` logique et s'inversent automatiquement en arabe.",
    "La grille de cartes (`variant=\"card\"`, `orientation=\"row\"`) suit le flux normal du document, sans réordonnancement manuel nécessaire en RTL.",
  ],
  examples: [
    { slug: "default", title: "Liste simple", description: "Groupe de radios en colonne, avec une aide par option." },
    { slug: "card", title: "Variante carte", description: "Options présentées en blocs bordés sélectionnables." },
    { slug: "states", title: "États", description: "Option désactivée et groupe en erreur." },
  ],
  props: [
    {
      component: "RadioGroup",
      items: [
        { name: "legend", type: "ReactNode", required: true, description: "Légende du groupe." },
        { name: "hint / error", type: "ReactNode", description: "Aide ou message d'erreur du groupe." },
        { name: "options", type: "{ value, label, hint?, disabled? }[]", required: true, description: "Options proposées." },
        { name: "orientation", type: '"row" | "column"', default: "column", description: "Disposition des options." },
        { name: "variant", type: '"default" | "card"', default: "default", description: "Style de chaque option : simple ligne ou carte bordée." },
        { name: "value / defaultValue / onValueChange", type: "string", description: "Contrôle ou observe la valeur sélectionnée." },
      ],
    },
    {
      component: "RadioOption",
      items: [
        { name: "label", type: "ReactNode", required: true, description: "Libellé de l'option, utilisé en dehors d'un `RadioGroup` DSM (par ex. avec le `RadioGroup` brut de Base UI)." },
        { name: "hint", type: "ReactNode", description: "Texte secondaire de l'option." },
        { name: "variant", type: '"default" | "card"', default: "default", description: "Style de l'option." },
      ],
    },
  ],
  related: ["field", "checkbox", "select"],
};

export default meta;
