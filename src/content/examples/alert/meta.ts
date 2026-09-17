import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "alert",
  title: "Alerte",
  titleAr: "تنبيه",
  titleEn: "Alert",
  description:
    "L'alerte signale un état du système ou le résultat d'une action : information, succès, avertissement ou erreur. Elle est autoportée et doit rester compréhensible même détachée de son contexte visuel.",
  category: "retours",
  file: "src/dsm/components/alert.tsx",
  when: [
    "Utilisez `error` ou `warning` pour un blocage ou un risque qui empêche l'utilisateur de poursuivre sa démarche.",
    "Utilisez `success` pour confirmer qu'une action a abouti (envoi, enregistrement, paiement validé).",
    "Ajoutez un `title` dès que le message dépasse une phrase, pour donner un repère de lecture rapide.",
  ],
  whenNot: [
    "N'utilisez pas une alerte pour un message qui doit disparaître de lui-même après quelques secondes : préférez une notification temporaire.",
    "Ne rendez pas `closable` une alerte qui bloque la poursuite d'une démarche : l'utilisateur doit garder l'information sous les yeux.",
  ],
  a11y: [
    "Les tons `warning` et `error` portent `role=\"alert\"` (annonce immédiate) ; `info` et `success` portent `role=\"status\"` (annonce polie).",
    "L'icône de ton est décorative (`aria-hidden`) : l'information est toujours portée par le texte, jamais par la seule couleur.",
    "Le bouton de fermeture reçoit un `aria-label` traduit (« Fermer ») fourni par le dictionnaire i18n, jamais un texte en dur.",
  ],
  rtl: [
    "La bordure d'accent (`border-s-4`) est posée en logique de lecture : elle reste du côté « début » de la ligne, à droite en arabe.",
    "La croix de fermeture n'est jamais retournée : son sens est fixe quel que soit le sens de lecture.",
  ],
  examples: [
    { slug: "tones", title: "Tons", description: "Les quatre tons : information, succès, avertissement, erreur." },
    { slug: "titles", title: "Avec ou sans titre", description: "Le titre donne un repère de lecture rapide ; il reste facultatif." },
    { slug: "closable", title: "Fermable", description: "Une alerte que l'utilisateur peut masquer lui-même." },
    { slug: "small", title: "Taille compacte", description: "Variante `sm`, pour une zone secondaire ou une barre latérale." },
    { slug: "in-form", title: "Dans un formulaire", description: "Alertes empilées au-dessus des champs d'un formulaire de démarche." },
  ],
  props: [
    {
      component: "Alert",
      items: [
        { name: "tone", type: '"info" | "success" | "warning" | "error"', default: "info", description: "Détermine la couleur, l'icône et le rôle ARIA (`status` ou `alert`)." },
        { name: "size", type: '"sm" | "md"', default: "md", description: "Taille du texte, du padding et de l'icône." },
        { name: "title", type: "ReactNode", description: "Titre court affiché en gras au-dessus du message." },
        { name: "closable", type: "boolean", default: "false", description: "Affiche un bouton de fermeture ; l'alerte gère seule son démontage." },
        { name: "onClose", type: "() => void", description: "Appelé juste après la fermeture, une fois l'alerte masquée." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
        { name: "children", type: "ReactNode", description: "Corps du message, affiché sous le titre s'il est présent." },
      ],
    },
  ],
  related: ["badge"],
};

export default meta;
