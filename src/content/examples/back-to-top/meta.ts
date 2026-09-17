import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "back-to-top",
  title: "Retour en haut",
  titleAr: "العودة إلى الأعلى",
  titleEn: "Back to top",
  description:
    "Un bouton flottant qui ramène en douceur vers le haut d'une page longue. Il n'apparaît qu'après un défilement suffisant et reste accessible au clavier même lorsqu'il est masqué à l'écran.",
  category: "navigation",
  file: "src/dsm/components/back-to-top.tsx",
  when: [
    "Ajoutez-le une seule fois par page, sur une page dont le contenu dépasse largement la hauteur de l'écran (article long, texte réglementaire).",
    "Placez un élément avec `id=\"top\"` en haut de page (par défaut) pour définir la cible du retour.",
  ],
  whenNot: [
    "N'en ajoutez pas sur une page courte : le seuil de déclenchement (600 px par défaut) ne sera jamais atteint et le bouton n'a pas lieu d'être.",
  ],
  a11y: [
    "Le bouton reste dans le DOM en permanence ; il est retiré de l'ordre de tabulation (`tabIndex=-1`) et masqué aux technologies d'assistance (`aria-hidden`) tant qu'il n'est pas visible.",
    "Le défilement respecte `prefers-reduced-motion`, géré globalement par le système de design.",
  ],
  rtl: [
    "Le bouton est ancré en `end` (à gauche en arabe, à droite en français) grâce à une propriété logique — jamais `right`.",
  ],
  examples: [
    {
      slug: "default",
      title: "Bouton visible",
      description: "Seuil ramené à 0 pour la démonstration : faites défiler cette page de documentation pour le voir apparaître naturellement en usage réel.",
      minHeight: 140,
    },
  ],
  props: [
    {
      component: "BackToTop",
      items: [
        { name: "threshold", type: "number", default: "600", description: "Distance de défilement, en pixels, avant l'apparition du bouton." },
        { name: "targetId", type: "string", default: "top", description: "Identifiant de l'élément vers lequel défiler." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["table-of-contents"],
};

export default meta;
