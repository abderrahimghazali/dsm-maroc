import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "quote",
  title: "Citation",
  titleAr: "اقتباس",
  titleEn: "Quote",
  description:
    "La citation met en valeur un témoignage ou une déclaration attribuée — retour d'un usager, propos d'un responsable public — avec un filet de début et un guillemet typographique en vert.",
  category: "contenu",
  file: "src/dsm/components/quote.tsx",
  when: [
    "Utilisez la citation pour un témoignage d'usager, un extrait d'entretien ou une déclaration officielle attribuée.",
    "Renseignez toujours `author` : une citation sans attribution perd sa valeur de preuve sociale.",
    "Ajoutez `image` lorsque le portrait de la personne renforce la crédibilité du propos.",
  ],
  whenNot: [
    "N'utilisez pas la citation pour reformuler un contenu factuel non attribué : préférez `Highlight`.",
    "Évitez les citations de plus de trois phrases : raccourcissez ou renvoyez vers la source complète.",
  ],
  a11y: [
    "Le contenu utilise les balises sémantiques `<figure>`, `<blockquote>` et `<figcaption>`, reconnues par les lecteurs d'écran comme une citation attribuée.",
    "Le portrait est décoratif (`alt=\"\"`) : l'identité de l'auteur est portée par le texte de `figcaption`, jamais par l'image seule.",
  ],
  rtl: [
    "Le filet de début (`border-s`) et le guillemet s'alignent naturellement à droite en arabe, sans classe spécifique.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Témoignage d'un usager, taille `md`." },
    { slug: "sizes", title: "Tailles", description: "Comparaison des tailles `md` et `lg`." },
    { slug: "with-portrait", title: "Avec portrait", description: "Citation d'une responsable publique, avec image et fonction." },
  ],
  props: [
    {
      component: "Quote",
      items: [
        { name: "children", type: "ReactNode", required: true, description: "Texte de la citation." },
        { name: "author", type: "ReactNode", required: true, description: "Nom de la personne citée." },
        { name: "role", type: "ReactNode", description: "Fonction ou source, affichée sous le nom." },
        { name: "image", type: "string", description: "URL d'un portrait rond affiché avant le nom." },
        { name: "size", type: '"md" | "lg"', default: "md", description: "Taille du texte de citation." },
      ],
    },
  ],
  related: ["highlight", "callout"],
};

export default meta;
