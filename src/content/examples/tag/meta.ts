import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "tag",
  title: "Étiquette",
  titleAr: "وسم",
  titleEn: "Tag",
  description:
    "Une petite étiquette en pilule, utilisée seule, en lien, comme filtre activable (`selectable`) ou comme critère amovible (`dismissible`) dans une liste de filtres actifs.",
  category: "actions",
  file: "src/dsm/components/tag.tsx",
  when: [
    "Utilisez une étiquette `selectable` pour un filtre à bascule (catégorie, statut) dans une barre de filtres.",
    "Utilisez `dismissible` pour représenter un filtre déjà appliqué, que l'utilisateur peut retirer d'un geste.",
    "Passez `href` pour une étiquette qui mène vers une page de résultats filtrés déjà connue à l'avance.",
  ],
  whenNot: [
    "N'utilisez pas d'étiquette pour un simple statut non interactif : préférez `Badge`.",
    "Ne combinez pas `selectable` et `dismissible` sur la même étiquette : ce sont deux usages distincts (filtre à bascule ou critère déjà actif).",
  ],
  a11y: [
    "Une étiquette `selectable` est un vrai bouton avec `aria-pressed`, et affiche une coche lorsqu'elle est activée.",
    "Le bouton de suppression d'une étiquette `dismissible` porte un `aria-label` traduit (« Retirer »), jamais une simple croix muette.",
  ],
  rtl: [
    "La coche et la croix ont un sens fixe et ne se retournent jamais ; seul leur emplacement (fin de ligne) suit le sens de lecture grâce aux marges logiques.",
  ],
  examples: [
    { slug: "default", title: "Étiquettes simples", description: "Avec ou sans icône, en lien." },
    { slug: "selectable", title: "Filtres à bascule", description: "Un groupe d'étiquettes activables, à l'état contrôlé." },
    { slug: "dismissible", title: "Filtres actifs", description: "Des critères déjà appliqués, que l'on peut retirer un par un." },
  ],
  props: [
    {
      component: "Tag",
      items: [
        { name: "children", type: "ReactNode", required: true, description: "Libellé de l'étiquette." },
        { name: "size", type: '"sm" | "md"', default: "md", description: "Taille de l'étiquette." },
        { name: "icon", type: "ReactNode", description: "Icône affichée avant le libellé (ignorée si l'étiquette est activée)." },
        { name: "href", type: "string", description: "Transforme l'étiquette en lien." },
        { name: "selectable", type: "boolean", description: "Rend l'étiquette activable (bouton à bascule)." },
        { name: "pressed", type: "boolean", description: "État activé, en mode `selectable` contrôlé." },
        { name: "onPressedChange", type: "(pressed: boolean) => void", description: "Appelé au changement d'état, en mode `selectable`." },
        { name: "dismissible", type: "boolean", description: "Ajoute un bouton de suppression." },
        { name: "onDismiss", type: "() => void", description: "Appelé au clic sur le bouton de suppression." },
      ],
    },
    { component: "TagGroup", items: [{ name: "className", type: "string", description: "Conteneur avec retour à la ligne automatique et espacement constant." }] },
  ],
  related: ["badge"],
};

export default meta;
