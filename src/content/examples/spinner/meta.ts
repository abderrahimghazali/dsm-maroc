import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "spinner",
  title: "Indicateur de chargement",
  titleAr: "مؤشر التحميل",
  titleEn: "Spinner",
  description:
    "Le spinner signale une attente courte et de durée inconnue : chargement d'une page, vérification d'un champ, action en cours dans un bouton.",
  category: "retours",
  file: "src/dsm/components/spinner.tsx",
  when: [
    "Utilisez-le pour une attente de quelques secondes sans progression mesurable.",
    "Dans un bouton, préférez la prop `loading` du `Button`, qui embarque déjà ce spinner.",
  ],
  whenNot: [
    "N'utilisez pas de spinner pour une tâche mesurable de plusieurs secondes ou minutes : préférez `Progress`.",
    "Ne l'affichez jamais seul sans texte accessible : `label` doit toujours décrire l'attente, même masqué visuellement.",
  ],
  a11y: [
    "Le conteneur porte `role=\"status\"` : l'attente est annoncée aux lecteurs d'écran dès son apparition.",
    "Le libellé (« Chargement » par défaut) reste toujours présent, visible ou non (`dsm-sr-only`).",
  ],
  rtl: [
    "La rotation de l'icône est continue et symétrique : aucune adaptation n'est nécessaire selon le sens de lecture.",
  ],
  examples: [
    { slug: "default", title: "Tailles", description: "sm, md et lg." },
    { slug: "tones", title: "Tons et libellé visible", description: "current, primary, et affichage du texte." },
    { slug: "composed", title: "Vérification en cours", description: "Spinner accompagnant un contrôle de disponibilité." },
  ],
  props: [
    {
      component: "Spinner",
      items: [
        { name: "size", type: '"sm" | "md" | "lg"', default: "md", description: "Taille de l'icône." },
        { name: "tone", type: '"current" | "primary"', default: "current", description: "`current` hérite de la couleur du texte parent." },
        { name: "label", type: "string", default: "t.loading", description: "Texte accessible, visible seulement si `showLabel`." },
        { name: "showLabel", type: "boolean", default: "false", description: "Affiche le libellé à côté de l'icône plutôt qu'en `sr-only`." },
      ],
    },
  ],
  related: ["progress", "button"],
};

export default meta;
