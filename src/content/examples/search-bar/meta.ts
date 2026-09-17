import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "search-bar",
  title: "Barre de recherche",
  titleAr: "شريط البحث",
  titleEn: "Search bar",
  description:
    "Formulaire de recherche autonome avec bouton d'envoi, bouton d'effacement et état de chargement. Pensé pour les pages d'accueil de portails de services, où la recherche est l'action principale plutôt qu'un élément secondaire du header.",
  category: "formulaires",
  file: "src/dsm/components/search-bar.tsx",
  when: [
    "Utilisez `SearchBar` en page d'accueil ou en tête d'une liste de résultats, comme point d'entrée principal vers les démarches ou les contenus.",
    "Utilisez `size=\"lg\"` en position centrale d'une page d'accueil pour lui donner du poids visuel.",
    "Passez `loading` pendant l'appel réseau qui suit la soumission, pour indiquer que la recherche est en cours.",
  ],
  whenNot: [
    "N'utilisez pas `SearchBar` pour une recherche instantanée filtrant une liste déjà affichée : un simple `Input` avec `iconStart` suffit.",
    "N'utilisez pas ce composant dans l'en-tête du site si `Header` propose déjà son propre champ de recherche intégré.",
  ],
  a11y: [
    "Le champ possède un libellé visible uniquement des lecteurs d'écran (`sr-only`) : le rôle `search` et le bouton suffisent à l'identifier visuellement.",
    "Le bouton d'effacement n'apparaît qu'une fois du texte saisi et redonne le focus au champ après un clic.",
    "Les boutons d'action (rechercher, effacer) portent tous un `aria-label` explicite, car ils n'affichent qu'une icône.",
  ],
  rtl: [
    "Le bouton d'envoi reste au bord de fin de ligne grâce à l'ordre naturel du DOM, sans classe directionnelle.",
  ],
  examples: [
    { slug: "default", title: "Simple", description: "Barre de recherche avec effacement une fois du texte saisi." },
    { slug: "sizes", title: "Tailles", description: "Les deux tailles disponibles : md et lg." },
    { slug: "loading", title: "Chargement", description: "État de chargement pendant l'exécution de la recherche." },
  ],
  props: [
    {
      component: "SearchBar",
      items: [
        { name: "size", type: '"md" | "lg"', default: "md", description: "Hauteur de la barre." },
        { name: "placeholder", type: "string", default: "t.searchPlaceholder", description: "Texte d'invite du champ." },
        { name: "defaultValue", type: "string", description: "Valeur initiale du champ." },
        { name: "onSearch", type: "(query: string) => void", description: "Appelé à la soumission du formulaire, avec le texte saisi." },
        { name: "action", type: "string", description: "URL de destination pour une soumission classique (sans JavaScript)." },
        { name: "loading", type: "boolean", description: "Désactive le bouton d'envoi et affiche un indicateur de chargement." },
      ],
    },
  ],
  related: ["input"],
};

export default meta;
