import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "highlight",
  title: "Mise en exergue",
  titleAr: "نص مُبرز",
  titleEn: "Highlight",
  description:
    "La mise en exergue signale un paragraphe important à l'intérieur d'un contenu long — une définition, une clé de lecture, un chiffre marquant — grâce à un simple filet de 4 px sans changement de fond.",
  category: "contenu",
  file: "src/dsm/components/highlight.tsx",
  when: [
    "Utilisez la mise en exergue pour un paragraphe clé au sein d'un article ou d'une fiche pratique en `dsm-prose`.",
    "Réservez-la à un seul paragraphe par section : sa force vient de sa rareté.",
  ],
  whenNot: [
    "N'utilisez pas la mise en exergue pour un message d'état (succès, erreur, avertissement) : préférez `Alert`.",
    "N'utilisez pas la mise en exergue pour un simple témoignage attribué : préférez `Quote`.",
  ],
  a11y: [
    "Le composant est un simple `<p>` : il ne modifie pas l'ordre de lecture ni la structure des titres.",
    "Le sens ne repose pas uniquement sur la couleur du filet : le paragraphe reste lisible en niveaux de gris.",
  ],
  rtl: [
    "Le filet utilise `border-s`, donc toujours du côté du début de lecture — à droite en arabe, sans classe additionnelle.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Taille `md`, utilisée dans un paragraphe isolé." },
    { slug: "sizes", title: "Tailles", description: "Comparaison des tailles `sm`, `md` et `lg`." },
    { slug: "in-article", title: "Dans un article", description: "Insérée au sein d'un contenu `dsm-prose`." },
  ],
  props: [
    {
      component: "Highlight",
      items: [
        { name: "size", type: '"sm" | "md" | "lg"', default: "md", description: "Taille du texte et du padding de départ." },
        { name: "children", type: "ReactNode", required: true, description: "Texte du paragraphe mis en exergue." },
      ],
    },
  ],
  related: ["callout", "quote"],
};

export default meta;
