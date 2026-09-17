import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "table",
  title: "Tableau",
  titleAr: "جدول",
  titleEn: "Table",
  description:
    "Le tableau présente des données structurées en lignes et colonnes — indicateurs, listes de démarches, résultats de recherche. Il défile horizontalement sur petit écran et prend en charge le tri, le zébrage, l'affichage compact et l'en-tête figé.",
  category: "contenu",
  file: "src/dsm/components/table.tsx",
  when: [
    "Utilisez un tableau pour comparer plusieurs valeurs numériques ou catégorielles ligne par ligne.",
    "Ajoutez `caption` pour décrire le contenu du tableau, y compris quand `captionHidden` la réserve aux lecteurs d'écran.",
    "Utilisez `TableSortButton` lorsque l'utilisateur bénéficie réellement de trier une colonne (volumes, dates, montants).",
  ],
  whenNot: [
    "N'utilisez pas un tableau pour une simple liste à une colonne : une liste HTML classique suffit et se lit plus facilement au clavier.",
    "Évitez plus de 6 à 7 colonnes visibles simultanément : regroupez ou renvoyez le détail vers une page dédiée.",
  ],
  a11y: [
    "`TableHeader` pose `scope=\"col\"` automatiquement ; associez toujours vos données à un en-tête explicite.",
    "`TableSortButton` place `aria-sort` sur la cellule d'en-tête parente (`ascending`/`descending`) et porte un libellé caché annonçant l'action de tri suivante.",
    "Le défilement horizontal reste accessible au clavier via la tabulation naturelle du conteneur `overflow-x-auto`.",
  ],
  rtl: [
    "Les bordures de colonnes (`bordered`) et l'alignement des cellules numériques (`text-end`) s'inversent automatiquement grâce aux propriétés logiques.",
    "Le sens du défilement horizontal suit `dir` sans configuration additionnelle.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Un tableau simple avec légende et colonne numérique." },
    { slug: "variants", title: "Variantes", description: "Comparaison des styles zébré et bordé + compact." },
    {
      slug: "sortable-demarches",
      title: "Démarches les plus demandées",
      description: "Cas réel : tri interactif, en-tête figé et zébrage.",
      wide: true,
    },
  ],
  props: [
    {
      component: "Table",
      items: [
        { name: "caption", type: "ReactNode", description: "Légende du tableau." },
        { name: "captionHidden", type: "boolean", default: "false", description: "Masque visuellement la légende (reste accessible)." },
        { name: "zebra", type: "boolean", default: "false", description: "Alterne le fond des lignes du corps." },
        { name: "dense", type: "boolean", default: "false", description: "Réduit le padding vertical des cellules." },
        { name: "bordered", type: "boolean", default: "false", description: "Ajoute un cadre et des séparateurs de colonnes." },
        { name: "stickyHeader", type: "boolean", default: "false", description: "Fige l'en-tête pendant le défilement vertical du conteneur." },
        { name: "containerClassName", type: "string", description: "Classes appliquées au conteneur de défilement." },
      ],
    },
    {
      component: "TableHeader / TableCell",
      items: [{ name: "numeric", type: "boolean", default: "false", description: "Aligne le contenu à la fin, en chiffres tabulaires." }],
    },
    {
      component: "TableSortButton",
      items: [
        { name: "direction", type: '"none" | "asc" | "desc"', default: "none", description: "État de tri courant de la colonne." },
        { name: "onSort", type: "() => void", description: "Appelé au clic, à vous de faire évoluer `direction` et les données." },
        { name: "numeric", type: "boolean", default: "false", description: "Aligne le bouton contre la fin de l'en-tête `numeric`." },
      ],
    },
  ],
  related: ["key-figure", "accordion"],
};

export default meta;
