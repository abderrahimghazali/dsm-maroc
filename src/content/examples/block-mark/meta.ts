import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "block-mark",
  title: "Bloc marque",
  titleAr: "الشعار المؤسسي",
  titleEn: "Block mark",
  description:
    "Le bloc marque associe l'emblème du Royaume, le nom trilingue de l'État et, en option, le nom de l'entité (ministère, direction, opérateur) qui porte le service. Il identifie l'origine officielle d'une page dans l'en-tête comme dans le pied de page.",
  category: "mise-en-page",
  file: "src/dsm/components/block-mark.tsx",
  when: [
    "Placez le bloc marque en tête de chaque page et reprenez-le, en plus grand, dans le pied de page.",
    "Renseignez `entity` dès qu'un service est rattaché à une administration précise (ministère, direction, commune, opérateur).",
    "Utilisez `inverse` uniquement sur un fond sombre (`bg-surface-inverse`) pour garantir le contraste de l'emblème et du texte.",
  ],
  whenNot: [
    "Ne recolorez jamais l'emblème : ses couleurs (rouge du champ, vert de l'étoile) sont fixées par la charte et ne suivent pas le thème du site.",
    "N'ajoutez pas de second logo à côté du bloc marque sur la même ligne : le nom de l'entité suffit à identifier le service porteur.",
  ],
  a11y: [
    "L'emblème est décoratif (`aria-hidden`) : l'information est portée par le texte du bloc, y compris quand `entity` est vide.",
    "Le triptyque arabe / amazighe / français porte un `lang` et un `dir` par ligne, pour une prononciation correcte par les lecteurs d'écran.",
  ],
  rtl: [
    "Chaque ligne du nom du Royaume garde son propre sens de lecture (`dir=\"rtl\"` pour l'arabe) quel que soit le sens de la page.",
    "Le nom de l'entité suit le sens de la page ; sa bordure de séparation (`border-s`) reste du côté « début » de la ligne dans les deux sens.",
  ],
  examples: [
    { slug: "sizes", title: "Tailles", description: "Tailles sm, md et lg, du pied de page discret au grand format." },
    { slug: "with-entity", title: "Avec entité", description: "Le nom d'un ministère résolu depuis la carte `entity` selon la langue courante." },
    { slug: "inverse", title: "Sur fond sombre", description: "Variante `inverse`, à réserver aux surfaces `bg-surface-inverse`.", inverse: true },
    { slug: "locales", title: "Variantes de langue", description: "Le même bloc marque en arabe et en amazighe, chacun avec son sens de lecture." },
  ],
  props: [
    {
      component: "BlockMark",
      items: [
        { name: "entity", type: "Partial<Record<Locale, string>>", description: "Nom de l'entité par langue ; à défaut de la langue courante, retombe sur le français puis l'arabe puis l'amazighe puis l'anglais." },
        { name: "locale", type: '"fr" | "ar" | "zgh" | "en"', default: "fr", description: "Langue utilisée pour sélectionner le nom de l'entité et l'ordre de lecture du texte." },
        { name: "href", type: "string", default: "/", description: "Cible du lien ; passez une chaîne vide pour afficher le bloc en texte seul (bannière sans navigation)." },
        { name: "size", type: '"sm" | "md" | "lg"', default: "md", description: "Taille de l'emblème et du texte." },
        { name: "inverse", type: "boolean", description: "Bascule l'emblème et le texte sur les teintes adaptées à un fond sombre." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["header", "footer"],
};

export default meta;
