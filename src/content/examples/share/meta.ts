import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "share",
  title: "Partage",
  titleAr: "مشاركة",
  titleEn: "Share",
  description:
    "Le partage propose des raccourcis vers X, Facebook, LinkedIn, l'e-mail et la copie du lien courant — typiquement en fin d'article, de communiqué ou de fiche démarche.",
  category: "actions",
  file: "src/dsm/components/share.tsx",
  when: [
    "Placez le partage en fin de contenu éditorial (actualité, communiqué, fiche pratique) pour encourager sa diffusion.",
    "Laissez `url` par défaut : le composant utilise l'adresse de la page courante côté client.",
  ],
  whenNot: [
    "N'ajoutez pas de partage sur une page contenant des données personnelles ou une démarche en cours de saisie.",
    "N'utilisez pas ce composant comme unique moyen d'accéder à une ressource : il complète toujours un contenu déjà accessible par lien direct.",
  ],
  a11y: [
    "Chaque bouton porte un `aria-label` explicite (« Partager sur X », « Partager par e-mail »…), les icônes seules ne portent jamais le sens.",
    "La confirmation de copie du lien est annoncée par une zone `role=\"status\"`, en plus du changement visuel de l'icône.",
  ],
  rtl: [
    "Les icônes de réseaux sociaux n'étant pas directionnelles, aucune ne nécessite de mise en miroir.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Barre de partage avec le titre par défaut." },
    { slug: "with-title", title: "Titre personnalisé", description: "Remplacement du libellé « Partager »." },
    { slug: "in-article", title: "En fin d'article", description: "Cas réel : partage en pied d'un communiqué officiel." },
  ],
  props: [
    {
      component: "Share",
      items: [
        { name: "title", type: "string", default: "t.share", description: "Libellé affiché avant les boutons." },
        { name: "url", type: "string", description: "URL à partager ; par défaut l'URL de la page courante, résolue côté client." },
      ],
    },
  ],
  related: ["download-card", "transcription"],
};

export default meta;
