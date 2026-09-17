import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "link",
  title: "Lien",
  titleAr: "رابط",
  titleEn: "Link",
  description:
    "Deux liens de contenu : `TextLink` pour un lien de texte courant (interne ou externe, avec repère de nouvelle fenêtre), et `DownloadLink` pour un document téléchargeable avec son format et sa taille.",
  category: "actions",
  file: "src/dsm/components/link.tsx",
  when: [
    "Utilisez `TextLink` dans un paragraphe ou une liste ; le repère « nouvelle fenêtre » s'ajoute automatiquement pour toute URL commençant par http(s).",
    "Utilisez `DownloadLink` pour tout document (PDF, formulaire) proposé au téléchargement, avec son format et son poids.",
  ],
  whenNot: [
    "N'utilisez pas `TextLink` pour une action qui ne change pas de page (ouvrir une modale, trier une liste) : utilisez un bouton `variant=\"link\"`.",
  ],
  a11y: [
    "Un lien externe ouvre un nouvel onglet (`target=\"_blank\"`, `rel=\"noopener noreferrer\"`) et porte un texte masqué annonçant « nouvelle fenêtre ».",
    "`DownloadLink` porte l'attribut natif `download` et un texte masqué « Télécharger », en plus du format et de la taille visibles.",
  ],
  rtl: [
    "L'icône de nouvelle fenêtre (`ExternalLink`) a un sens fixe et ne se retourne jamais.",
    "Le texte du lien reste aligné en début de ligne (`text-start`) dans `DownloadLink`, quel que soit le sens de lecture.",
  ],
  examples: [
    { slug: "internal-external", title: "Interne et externe", description: "Un lien interne (next/link) et un lien externe détecté automatiquement." },
    { slug: "variants", title: "Variantes", description: "Les styles `default`, `subtle` et `inverse` (sur fond sombre)." },
    { slug: "download", title: "Téléchargement de documents", description: "Liste de formulaires téléchargeables avec format et taille." },
  ],
  props: [
    {
      component: "TextLink",
      items: [
        { name: "href", type: "string", required: true, description: "Cible du lien." },
        { name: "external", type: "boolean", description: "Force le traitement interne/externe ; auto-détecté depuis `href` (http/https) si omis." },
        { name: "variant", type: '"default" | "subtle" | "inverse"', default: "default", description: "Couleur et style de soulignement du lien." },
        { name: "size", type: '"inherit" | "sm"', default: "inherit", description: "Taille du texte." },
      ],
    },
    {
      component: "DownloadLink",
      items: [
        { name: "href", type: "string", required: true, description: "URL du fichier." },
        { name: "label", type: "ReactNode", required: true, description: "Nom du document." },
        { name: "format", type: "string", required: true, description: "Format affiché dans la métadonnée, p. ex. « PDF »." },
        { name: "size", type: "string", required: true, description: "Taille affichée, p. ex. « 1,2 Mo »." },
        { name: "lang", type: "string", description: "Langue du document, si différente de la page." },
      ],
    },
  ],
  related: ["button", "tag"],
};

export default meta;
