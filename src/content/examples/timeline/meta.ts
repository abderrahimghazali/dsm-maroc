import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "timeline",
  title: "Chronologie",
  titleAr: "الخط الزمني",
  titleEn: "Timeline",
  description:
    "La chronologie affiche une suite d'étapes datées — historique d'une démarche, jalons d'un projet — le long d'un fil vertical, avec un marqueur distinct pour les étapes terminées, en cours et à venir.",
  category: "contenu",
  file: "src/dsm/components/timeline.tsx",
  when: [
    "Utilisez la chronologie pour retracer l'avancement d'un dossier ou l'historique d'une démarche.",
    "Marquez au plus une étape `current` à la fois : c'est celle sur laquelle l'attention doit se porter.",
  ],
  whenNot: [
    "N'utilisez pas la chronologie pour une simple liste non ordonnée dans le temps : une liste HTML classique suffit.",
    "Évitez plus d'une dizaine d'étapes : résumez ou proposez un lien « voir l'historique complet ».",
  ],
  a11y: [
    "Chaque statut (terminée, en cours, à venir) porte un texte caché (`dsm-sr-only`) : le sens n'est jamais porté par la seule forme du marqueur.",
    "Le fil vertical est purement décoratif (`aria-hidden`) : la structure logique repose sur la liste ordonnée `<ol>`.",
  ],
  rtl: [
    "Le fil et les marqueurs utilisent `start`, donc toujours du côté du début de lecture, sans classe additionnelle.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Trois étapes, dont une en cours." },
    { slug: "statuses", title: "Statuts", description: "Les trois marqueurs : terminée, en cours et à venir, isolés." },
    { slug: "suivi-dossier", title: "Suivi d'un dossier de passeport", description: "Cas réel avec dates précises." },
  ],
  props: [
    {
      component: "Timeline",
      items: [
        {
          name: "items",
          type: "{ date: ReactNode; title: ReactNode; description?: ReactNode; status?: \"completed\" | \"current\" | \"upcoming\" }[]",
          required: true,
          description: "Liste ordonnée des étapes, dans l'ordre d'affichage.",
        },
      ],
    },
  ],
  related: ["accordion", "key-figure"],
};

export default meta;
