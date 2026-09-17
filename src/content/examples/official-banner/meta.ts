import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "official-banner",
  title: "Bandeau officiel",
  titleAr: "شريط الموقع الرسمي",
  titleEn: "Official banner",
  description:
    "Une fine bande d'identité au-dessus de l'en-tête, qui rappelle qu'il s'agit d'un site officiel et explique, à la demande, comment le reconnaître (domaine gov.ma, connexion sécurisée).",
  category: "mise-en-page",
  file: "src/dsm/components/official-banner.tsx",
  when: [
    "Placez-le tout en haut de chaque page du site public, avant l'en-tête.",
  ],
  whenNot: [
    "Ne le dupliquez pas ailleurs sur la page : une seule occurrence par page suffit, en position la plus haute.",
  ],
  a11y: [
    "Le déclencheur « Comment le savoir ? » est un vrai bouton (`Collapsible.Trigger`) qui annonce son état ouvert/fermé aux technologies d'assistance.",
  ],
  rtl: [
    "Le déclencheur est poussé en fin de ligne par `ms-auto`, qui s'inverse naturellement en arabe.",
    "Le chevron ne se retourne pas — seule sa rotation à l'ouverture change.",
  ],
  examples: [
    { slug: "default", title: "Bandeau officiel", description: "Dépliez « Comment le savoir ? » pour voir l'explication en deux colonnes." },
  ],
  props: [
    {
      component: "OfficialBanner",
      items: [{ name: "className", type: "string", description: "Classes Tailwind supplémentaires." }],
    },
  ],
  related: ["header"],
};

export default meta;
