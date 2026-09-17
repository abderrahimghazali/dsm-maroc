import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "breadcrumb",
  title: "Fil d'Ariane",
  titleAr: "مسار التصفح",
  titleEn: "Breadcrumb",
  description:
    "Le fil d'Ariane situe la page courante dans l'arborescence du site. Le dernier élément représente la page active et n'est pas cliquable. Sous `sm`, il se réduit à un simple lien de retour vers la page parente.",
  category: "navigation",
  file: "src/dsm/components/breadcrumb.tsx",
  when: [
    "Affichez le fil d'Ariane sur toute page à plus d'un niveau de profondeur (démarche, fiche institution, article).",
    "Gardez les libellés courts et fidèles au titre réel de chaque page intermédiaire.",
  ],
  whenNot: [
    "N'utilisez pas le fil d'Ariane sur la page d'accueil ou une page de premier niveau : il n'apporte rien avec un seul élément.",
    "Ne dupliquez pas le titre `h1` de la page dans le fil d'Ariane : le dernier élément suffit à donner le repère.",
  ],
  a11y: [
    "Le conteneur est un `nav` avec `aria-label` traduit (« Vous êtes ici ») pour être identifiable parmi les autres zones de navigation.",
    "Le dernier élément porte `aria-current=\"page\"` et n'est jamais un lien.",
  ],
  rtl: [
    "Le séparateur (`ChevronForward`) pointe toujours vers la fin de la ligne de lecture et se retourne automatiquement en arabe.",
    "Le lien de retour mobile utilise `ChevronBack`, qui pointe vers le début de la ligne quel que soit le sens de lecture.",
  ],
  examples: [
    { slug: "default", title: "Fil d'Ariane par défaut", description: "Trois niveaux au-dessus de la page courante." },
    { slug: "deep-trail", title: "Arborescence profonde", description: "Un parcours à cinq niveaux — réduisez la fenêtre sous 640 px pour voir le lien de retour mobile." },
    { slug: "page-header", title: "En-tête de page de démarche", description: "Le fil d'Ariane au-dessus du titre d'une démarche, avec sa métadonnée." },
  ],
  props: [
    {
      component: "Breadcrumb",
      items: [
        { name: "items", type: "{ label: string; href?: string }[]", required: true, description: "Le dernier élément est la page courante ; les éléments sans `href` sont rendus en texte simple." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["side-menu", "table-of-contents"],
};

export default meta;
