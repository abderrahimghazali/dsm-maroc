import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "transcription",
  title: "Transcription",
  titleAr: "نص مكتوب",
  titleEn: "Transcript",
  description:
    "La transcription affiche, sous forme repliable, le texte intégral d'un contenu audio ou vidéo — webinaire, allocution, capsule explicative — pour en garantir l'accessibilité et la consultation hors ligne.",
  category: "contenu",
  file: "src/dsm/components/transcription.tsx",
  when: [
    "Placez systématiquement une transcription sous tout contenu audio ou vidéo informatif.",
    "Utilisez `title` lorsque plusieurs transcriptions apparaissent sur la même page (playlist, série de capsules).",
  ],
  whenNot: [
    "N'utilisez pas ce composant pour un long article : c'est le rôle du contenu principal en `dsm-prose`.",
    "Ne remplacez pas les sous-titres synchronisés d'une vidéo par ce seul composant : les deux sont complémentaires.",
  ],
  a11y: [
    "Le déclencheur alterne un texte visible entre « Afficher la transcription » et « Masquer la transcription », jamais seulement une icône.",
    "Le contenu du panneau est un texte HTML classique (`dsm-prose`), entièrement navigable au clavier et par lecteur d'écran.",
  ],
  rtl: [
    "Le chevron pivote verticalement, donc de façon identique dans les deux sens de lecture.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Sans titre, le déclencheur occupe toute la largeur." },
    { slug: "with-title", title: "Avec titre", description: "Titre du contenu affiché à côté du déclencheur." },
    { slug: "webinaire", title: "Webinaire en ligne", description: "Cas réel : transcription d'une session d'information sur watiqa.ma." },
  ],
  props: [
    {
      component: "Transcription",
      items: [
        { name: "title", type: "ReactNode", description: "Titre du contenu, affiché à côté du déclencheur." },
        { name: "children", type: "ReactNode", required: true, description: "Texte de la transcription, affiché dans le panneau." },
        { name: "defaultOpen", type: "boolean", default: "false", description: "Ouvre le panneau au premier affichage." },
      ],
    },
  ],
  related: ["accordion", "share"],
};

export default meta;
