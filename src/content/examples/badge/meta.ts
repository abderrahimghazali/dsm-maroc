import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "badge",
  title: "Badge",
  titleAr: "شارة",
  titleEn: "Badge",
  description:
    "Le badge affiche un statut, une catégorie ou une métadonnée courte à côté d'un contenu — l'état d'une demande, le coût d'une démarche, une étiquette d'institution. Il n'est jamais interactif et ne doit jamais être le seul moyen de comprendre une information.",
  category: "retours",
  file: "src/dsm/components/badge.tsx",
  when: [
    "Utilisez un badge pour afficher l'état de traitement d'une demande (déposée, en cours, validée, refusée).",
    "Utilisez `dot` lorsqu'un repère visuel supplémentaire doit renforcer la couleur, notamment pour les statuts en évolution.",
    "Utilisez les tons `rouge`/`vert`/`ink`/`outline` pour des étiquettes de marque (nouveau, gratuit, officiel) plutôt que pour un statut de traitement.",
  ],
  whenNot: [
    "N'utilisez pas un badge comme bouton : il n'est pas interactif et ne doit déclencher aucune action au clic.",
    "N'accumulez pas plus de deux badges sur un même élément, au risque de surcharger la lecture du titre.",
  ],
  a11y: [
    "La couleur n'est jamais le seul signal : le texte du badge doit toujours nommer explicitement le statut (« Refusée », pas seulement un badge rouge).",
    "Le badge est un simple `<span>` : s'il reflète un changement d'état en direct, placez-le dans un conteneur `role=\"status\"`.",
  ],
  rtl: [
    "Le point de statut (`dot`) et le texte s'inversent automatiquement grâce à `inline-flex`/`gap` : aucune classe spécifique au sens de lecture n'est nécessaire.",
  ],
  examples: [
    { slug: "tones", title: "Tons", description: "Les neuf tons disponibles, du statut neutre aux teintes de marque." },
    { slug: "sizes", title: "Tailles", description: "Taille `sm` pour les listes denses, `md` par défaut ailleurs." },
    { slug: "with-dot", title: "Avec puce", description: "Les quatre statuts d'une demande administrative, avec puce de couleur." },
    { slug: "in-context", title: "Dans une carte", description: "Un badge de statut intégré à la ligne de titre d'une carte." },
  ],
  props: [
    {
      component: "Badge",
      items: [
        { name: "tone", type: '"neutral" | "info" | "success" | "warning" | "error" | "rouge" | "vert" | "ink" | "outline"', default: "neutral", description: "Teinte du badge ; les tons `info`/`success`/`warning`/`error` portent un sens de statut, les autres sont des teintes de marque." },
        { name: "size", type: '"sm" | "md"', default: "md", description: "Taille du texte et du padding." },
        { name: "dot", type: "boolean", default: "false", description: "Ajoute une puce de couleur (`currentColor`) avant le texte." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
        { name: "children", type: "ReactNode", required: true, description: "Libellé du badge — toujours un texte explicite, jamais la couleur seule." },
      ],
    },
  ],
  related: ["card", "alert"],
};

export default meta;
