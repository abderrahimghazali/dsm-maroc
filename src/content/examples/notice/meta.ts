import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "notice",
  title: "Bandeau d'information",
  titleAr: "شريط إخباري",
  titleEn: "Notice",
  description:
    "Un bandeau pleine largeur, placé sous l'en-tête, pour une information valable pour tout le site : maintenance programmée, nouveau service, incident en cours.",
  category: "retours",
  file: "src/dsm/components/notice.tsx",
  when: [
    "Utilisez un bandeau `info` ou `warning` pour une information ou une maintenance qui concerne l'ensemble du site.",
    "Réservez le ton `alert` à un incident réel affectant le service (panne, interruption).",
    "Ajoutez `dismissible` pour une information que l'utilisateur peut choisir de masquer sans perdre en importance immédiate.",
  ],
  whenNot: [
    "N'utilisez pas le bandeau pour un message propre à une seule page : `Alert` convient mieux, au plus près du contenu concerné.",
    "N'empilez pas plusieurs bandeaux à la fois : un seul message prioritaire à la fois.",
  ],
  a11y: [
    "Le ton `alert` porte `role=\"alert\"` (annonce immédiate) ; les autres tons portent `role=\"status\"` (annonce polie).",
    "Le bouton de fermeture reçoit un `aria-label` traduit (« Masquer »).",
  ],
  rtl: [
    "Le lien optionnel et le bouton de fermeture suivent l'ordre logique du texte ; aucune classe physique (`left`/`right`) n'est utilisée.",
  ],
  examples: [
    { slug: "tones", title: "Les trois tons", description: "Information, avertissement et alerte." },
    { slug: "dismissible", title: "Avec fermeture", description: "Un bandeau que l'utilisateur peut masquer, avec un lien d'action." },
  ],
  props: [
    {
      component: "Notice",
      items: [
        { name: "tone", type: '"info" | "warning" | "alert"', default: "info", description: "Couleur, icône et rôle ARIA du bandeau." },
        { name: "title", type: "ReactNode", description: "Titre court, affiché en gras." },
        { name: "description", type: "ReactNode", description: "Texte complémentaire, affiché à la suite du titre." },
        { name: "link", type: "{ label: string; href: string }", description: "Lien d'action affiché en fin de message." },
        { name: "dismissible", type: "boolean", default: "false", description: "Affiche un bouton de fermeture." },
        { name: "onDismiss", type: "() => void", description: "Appelé juste après la fermeture." },
      ],
    },
  ],
  related: ["alert", "consent-banner"],
};

export default meta;
