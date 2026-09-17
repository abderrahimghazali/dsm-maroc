import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "callout",
  title: "Encadré",
  titleAr: "إطار تنبيهي",
  titleEn: "Callout",
  description:
    "L'encadré met en avant une information éditoriale importante à l'intérieur d'un contenu — une précision utile, une invitation à agir, un rappel réglementaire. Contrairement à l'alerte, il n'exprime pas un état du système mais une mise en avant volontaire de l'auteur.",
  category: "contenu",
  file: "src/dsm/components/callout.tsx",
  when: [
    "Utilisez un encadré pour signaler une information « bon à savoir » au fil d'un article ou d'une fiche pratique.",
    "Utilisez la prop `action` pour prolonger l'encadré par un bouton, par exemple vers une démarche liée.",
    "Choisissez un ton de marque (`vert`, `rouge`, `bleu`, `safran`) pour hiérarchiser visuellement plusieurs encadrés d'une même page.",
  ],
  whenNot: [
    "N'utilisez pas l'encadré pour un message d'état du système (succès, erreur) : c'est le rôle du composant `Alert`.",
    "N'abusez pas des encadrés : plus de deux par page diluent leur pouvoir d'attention.",
  ],
  a11y: [
    "L'encadré est un simple conteneur `<div>` : s'il porte une information critique nécessitant une annonce, complétez-le d'un `role=\"status\"` au niveau applicatif.",
    "La couleur du ton ne porte jamais seule le sens : accompagnez-la d'un titre explicite ou d'une icône.",
  ],
  rtl: [
    "Le filet de 4 px utilise `border-s`, donc toujours du côté du début de lecture — à droite en arabe, sans classe additionnelle.",
  ],
  examples: [
    { slug: "tones", title: "Tons", description: "Les cinq tons disponibles : neutre et les quatre teintes de marque." },
    { slug: "with-action", title: "Avec action", description: "Un encadré prolongé par un bouton vers une démarche liée." },
    { slug: "compact", title: "Compact", description: "Version resserrée pour une insertion dans une barre latérale." },
  ],
  props: [
    {
      component: "Callout",
      items: [
        { name: "tone", type: '"neutral" | "vert" | "rouge" | "bleu" | "safran"', default: "neutral", description: "Couleur du filet de 4 px et du fond." },
        { name: "size", type: '"default" | "compact"', default: "default", description: "Densité du padding et de la typographie." },
        { name: "title", type: "ReactNode", description: "Titre de l'encadré, affiché en gras." },
        { name: "icon", type: "ReactNode", description: "Icône optionnelle affichée avant le contenu." },
        { name: "action", type: "ReactNode", description: "Emplacement pour un bouton ou un lien d'action." },
        { name: "children", type: "ReactNode", description: "Corps de l'encadré." },
      ],
    },
  ],
  related: ["highlight", "quote"],
};

export default meta;
