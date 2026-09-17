import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "skeleton",
  title: "Squelette de chargement",
  titleAr: "هيكل التحميل",
  titleEn: "Skeleton",
  description:
    "Le squelette occupe la forme du contenu à venir pendant son chargement, pour réduire la sensation d'attente et éviter les sauts de mise en page.",
  category: "retours",
  file: "src/dsm/components/skeleton.tsx",
  when: [
    "Utilisez-le quand le contenu met plus de quelques centaines de millisecondes à arriver (liste de démarches, statut d'un dossier).",
    "Reproduisez la forme réelle du contenu final (largeur, hauteur, nombre de lignes) pour une transition sans saut visuel.",
  ],
  whenNot: [
    "N'en abusez pas pour un contenu qui s'affiche quasi instantanément : préférez ne rien montrer plutôt qu'un flash de squelette.",
    "Ne l'utilisez pas comme état d'erreur : une fois le chargement en échec, affichez un `EmptyState` ou une `Alert`.",
  ],
  a11y: [
    "`SkeletonGroup` porte `role=\"status\"` et annonce le libellé « Chargement » aux lecteurs d'écran.",
    "Chaque `Skeleton` est `aria-hidden` : seul le conteneur du groupe est annoncé, pas chaque forme individuellement.",
  ],
  rtl: [
    "Le dégradé animé (`dsm-shimmer`) balaie horizontalement sans notion de sens de lecture : aucune adaptation n'est nécessaire.",
    "La dernière ligne d'un bloc `text` est raccourcie par une largeur relative, cohérente dans les deux sens de lecture.",
  ],
  examples: [
    { slug: "default", title: "Texte", description: "Plusieurs lignes, la dernière plus courte." },
    { slug: "variants", title: "Variantes", description: "text, rect et circle." },
    { slug: "composed", title: "Carte de démarche", description: "Squelette reproduisant une carte de service en cours de chargement." },
  ],
  props: [
    {
      component: "Skeleton",
      items: [
        { name: "variant", type: '"text" | "rect" | "circle"', default: "rect", description: "Forme du squelette." },
        { name: "lines", type: "number", description: "Nombre de lignes pour `variant=\"text\"` ; la dernière est plus courte." },
        { name: "className", type: "string", description: "Dimensions et rayon via des classes Tailwind (`h-4 w-32`, `size-10`…)." },
      ],
    },
    {
      component: "SkeletonGroup",
      items: [{ name: "children", type: "ReactNode", description: "Un ou plusieurs `Skeleton`, annoncés comme un seul état de chargement." }],
    },
  ],
  related: ["progress", "spinner"],
};

export default meta;
