import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "stepper",
  title: "Étapes",
  titleAr: "الخطوات",
  titleEn: "Stepper",
  description:
    "Deux composants pour les démarches en plusieurs étapes : `StepIndicator` (en-tête de progression compact, avec la prochaine étape) et `Steps` (récapitulatif complet des étapes avec leur statut).",
  category: "navigation",
  file: "src/dsm/components/stepper.tsx",
  when: [
    "Utilisez `StepIndicator` en haut d'un formulaire multi-étapes, pour situer l'utilisateur et annoncer la suite.",
    "Utilisez `Steps` pour un récapitulatif complet — page de suivi de dossier, confirmation, sommaire latéral.",
    "Choisissez l'orientation `vertical` de `Steps` dans une colonne étroite, `horizontal` sur toute la largeur d'une page.",
  ],
  whenNot: [
    "N'utilisez pas ces composants pour un contenu qui n'a pas d'ordre imposé : les onglets conviennent mieux.",
    "Ne dépassez pas 5 à 6 étapes en orientation horizontale : au-delà, les libellés se chevauchent visuellement.",
  ],
  a11y: [
    "La barre de progression de `StepIndicator` porte `role=\"progressbar\"` avec `aria-valuenow`/`aria-valuemin`/`aria-valuemax`.",
    "Chaque puce de `Steps` porte un texte masqué (« Terminée », « En cours », « À venir ») : le statut n'est jamais porté par la seule couleur ou forme.",
  ],
  rtl: [
    "La barre segmentée et les connecteurs de `Steps` sont des blocs neutres (pas de flèche) : rien à retourner en RTL.",
    "L'ordre des étapes suit le sens de lecture grâce à `flex` standard, sans classe `rtl:` dédiée.",
  ],
  examples: [
    { slug: "step-indicator", title: "En-tête de progression", description: "Étape courante, titre et barre segmentée, avec l'étape suivante annoncée." },
    { slug: "steps-horizontal", title: "Étapes horizontales", description: "Récapitulatif complet, statuts terminé / en cours / à venir." },
    { slug: "steps-vertical", title: "Étapes verticales", description: "Même récapitulatif, adapté à une colonne étroite." },
    { slug: "demarche-flow", title: "Parcours de démarche", description: "L'en-tête de progression au-dessus d'un extrait de formulaire." },
  ],
  props: [
    {
      component: "StepIndicator",
      items: [
        { name: "step", type: "number", required: true, description: "Numéro de l'étape courante (base 1)." },
        { name: "totalSteps", type: "number", required: true, description: "Nombre total d'étapes." },
        { name: "title", type: "ReactNode", required: true, description: "Titre de l'étape courante." },
        { name: "nextTitle", type: "ReactNode", description: "Titre de l'étape suivante ; omis à la dernière étape." },
      ],
    },
    {
      component: "Steps",
      items: [
        { name: "steps", type: "{ label: ReactNode; description?: ReactNode }[]", required: true, description: "Liste ordonnée des étapes." },
        { name: "current", type: "number", required: true, description: "Étape en cours (base 1) : les précédentes sont terminées, les suivantes à venir." },
        { name: "orientation", type: '"horizontal" | "vertical"', default: "horizontal", description: "Disposition du récapitulatif." },
      ],
    },
  ],
  related: ["breadcrumb"],
};

export default meta;
