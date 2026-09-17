import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "date-input",
  title: "Saisie de date",
  titleAr: "إدخال التاريخ",
  titleEn: "Date input",
  description:
    "Saisie d'une date en trois champs numériques distincts (jour, mois, année), à la manière du GOV.UK Design System. Plus robuste qu'un sélecteur calendrier sur mobile ou pour une date passée éloignée (date de naissance), et immédiatement lisible sans dépendre d'un format implicite.",
  category: "formulaires",
  file: "src/dsm/components/date-input.tsx",
  when: [
    "Utilisez `DateInput` pour une date de naissance ou toute date passée que l'usager connaît par cœur et tape plus vite qu'il ne la sélectionnerait dans un calendrier.",
    "Laissez le `hint` par défaut (exemple de format) tant qu'aucune contrainte particulière ne s'applique.",
  ],
  whenNot: [
    "N'utilisez pas `DateInput` pour choisir une date future dans un calendrier de rendez-vous : un sélecteur visuel de type calendrier est plus adapté.",
    "N'utilisez pas ce composant si le format de date doit rester ambigu entre plusieurs locales : les trois champs séparés lèvent justement cette ambiguïté.",
  ],
  a11y: [
    "Chaque champ (jour, mois, année) porte son propre `<label>` visible, jamais uniquement un `placeholder`.",
    "`inputMode=\"numeric\"` affiche le clavier numérique sur mobile sans changer le type du champ, qui reste du texte pour accepter les zéros initiaux.",
    "Le groupe est annoncé comme un ensemble grâce à la légende du `Fieldset` sous-jacent.",
  ],
  rtl: [
    "L'ordre jour / mois / année reste fixe quel que soit le sens de lecture, conformément aux recommandations d'accessibilité pour les dates segmentées.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Un seul champ masqué JJ/MM/AAAA : les séparateurs s'insèrent pendant la saisie." },
    { slug: "states", title: "États", description: "Valeur initiale, erreur de validation et champ désactivé." },
    { slug: "controlled", title: "Contrôlé et validé", description: "Valeur pilotée par le parent et vérification de la date avec parseDateMask." },
  ],
  props: [
    {
      component: "DateInput",
      items: [
        { name: "label", type: "ReactNode", description: "Libellé visible du champ.", required: true },
        { name: "hint", type: "ReactNode", default: "t.dateHint", description: "Aide affichée sous le libellé (format attendu par défaut)." },
        { name: "error", type: "ReactNode", description: "Message d'erreur ; passe le champ en état invalide." },
        { name: "required", type: "boolean", description: "Ajoute la marque obligatoire au libellé." },
        { name: "value", type: "string", description: "Valeur masquée contrôlée, par exemple « 12/05/1990 »." },
        { name: "defaultValue", type: "string", description: "Valeur initiale en mode non contrôlé." },
        { name: "onChange", type: "(value: string) => void", description: "Appelé à chaque frappe avec la valeur masquée." },
        { name: "placeholder", type: "string", default: "t.datePlaceholder", description: "Texte indicatif (JJ/MM/AAAA)." },
        { name: "disabled", type: "boolean", description: "Désactive la saisie." },
        { name: "name", type: "string", description: "Nom du champ dans le formulaire natif." },
      ],
    },
    {
      component: "parseDateMask",
      items: [{ name: "value", type: "string", description: "Retourne { day, month, year } si la date masquée est complète et existe, sinon null." }],
    },
  ],
  related: ["field", "input"],
};

export default meta;
