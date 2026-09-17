import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "pagination",
  title: "Pagination",
  titleAr: "ترقيم الصفحات",
  titleEn: "Pagination",
  description:
    "La pagination découpe une longue liste de résultats en pages. Elle accepte soit un gabarit d'URL (`hrefFor`, pour rester utilisable depuis un composant serveur), soit un rappel `onPageChange` côté client.",
  category: "navigation",
  file: "src/dsm/components/pagination.tsx",
  when: [
    "Utilisez la pagination pour une liste de résultats trop longue pour tenir sur une seule page (recherche, annuaire, actualités).",
    "Préférez la variante `compact` dans un espace étroit (barre latérale, fiche mobile) où seuls précédent/suivant sont utiles.",
    "Passez `hrefFor=\"/recherche?page={page}\"` quand chaque page correspond à une URL réelle, pour un rendu depuis une page serveur.",
  ],
  whenNot: [
    "N'utilisez pas la pagination pour moins d'une dizaine de résultats : le composant se masque de lui-même si `pageCount` vaut 1.",
    "Ne combinez pas `hrefFor` et `onPageChange` sans raison : le premier prime dès qu'un bouton n'est pas désactivé.",
  ],
  a11y: [
    "Le conteneur est un `nav` avec `aria-label` traduit (« Pagination »).",
    "La page courante est un élément non interactif portant `aria-current=\"page\"` et un texte masqué (« Page actuelle »).",
    "Les boutons première/précédente/suivante/dernière portent chacun un `aria-label` explicite ; les puces numérotées portent « Aller à la page N ».",
  ],
  rtl: [
    "Les chevrons (`ChevronBack`/`ChevronForward`) se retournent automatiquement : « précédent » reste toujours du côté du début de la ligne de lecture.",
    "Les doubles chevrons de première/dernière page suivent la même logique de retournement.",
  ],
  examples: [
    { slug: "default", title: "Pagination par défaut", description: "Beaucoup de pages : les puces intermédiaires laissent place à des points de suspension." },
    { slug: "few-pages", title: "Peu de pages", description: "Sous le seuil de regroupement, toutes les pages restent visibles." },
    { slug: "compact", title: "Variante compacte", description: "« Page X sur Y » avec seulement précédent/suivant, pour un espace étroit." },
    { slug: "search-results", title: "Résultats de recherche", description: "Pagination pilotée côté client (`onPageChange`) au-dessus d'une liste de démarches." },
  ],
  props: [
    {
      component: "Pagination",
      items: [
        { name: "page", type: "number", required: true, description: "Numéro de la page courante (base 1)." },
        { name: "pageCount", type: "number", required: true, description: "Nombre total de pages." },
        { name: "hrefFor", type: "string", description: "Gabarit d'URL contenant le jeton littéral « {page} », p. ex. `/recherche?page={page}`. Une chaîne, pas une fonction : utilisable depuis un composant serveur." },
        { name: "onPageChange", type: "(page: number) => void", description: "Rappel côté client, utilisé quand `hrefFor` est absent." },
        { name: "siblingCount", type: "number", default: "1", description: "Nombre de pages voisines affichées de part et d'autre de la page courante." },
        { name: "variant", type: '"default" | "compact"', default: "default", description: "La variante compacte n'affiche que « Page X sur Y » avec précédent/suivant." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["tabs"],
};

export default meta;
