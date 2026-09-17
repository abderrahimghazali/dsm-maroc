import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "follow",
  title: "Bloc de suivi",
  titleAr: "كتلة المتابعة",
  titleEn: "Follow block",
  description:
    "Le bloc de suivi associe une inscription à la lettre d'information et des liens vers les réseaux sociaux officiels, sur une bande de fond neutre — typiquement au-dessus du pied de page.",
  category: "mise-en-page",
  file: "src/dsm/components/follow.tsx",
  when: [
    "Placez ce bloc au-dessus du pied de page, sur les pages d'accueil et les pages de rubrique.",
    "Fournissez `onSubscribe` pour brancher l'inscription à votre service d'envoi ; sans quoi le formulaire ne fait qu'afficher l'interface.",
  ],
  whenNot: [
    "Ne dupliquez pas ce bloc à plusieurs endroits d'une même page.",
    "N'utilisez pas ce composant pour une inscription nécessitant plus qu'une adresse e-mail : construisez un formulaire dédié.",
  ],
  a11y: [
    "Le champ e-mail porte un `<label>` visuellement masqué (`dsm-sr-only`) mais toujours annoncé par les lecteurs d'écran.",
    "Chaque lien social porte un `aria-label` explicite : l'icône seule ne suffit jamais à identifier le réseau.",
  ],
  rtl: [
    "Les deux colonnes (inscription, réseaux sociaux) s'inversent naturellement avec la grille, sans classe spécifique au sens de lecture.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Lettre d'information et réseaux sociaux officiels.", wide: true },
    { slug: "interactive", title: "Avec traitement de l'inscription", description: "Cas réel : `onSubscribe` relié à une confirmation.", wide: true },
  ],
  props: [
    {
      component: "FollowBlock",
      items: [
        { name: "social", type: "{ label: string; href: string; icon: ReactNode }[]", required: true, description: "Liens vers les comptes officiels." },
        { name: "onSubscribe", type: "(email: string) => void", description: "Appelé à la soumission du formulaire de lettre d'information." },
      ],
    },
  ],
  related: ["footer", "share"],
};

export default meta;
