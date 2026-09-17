import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "download-card",
  title: "Carte de téléchargement",
  titleAr: "بطاقة تنزيل",
  titleEn: "Download card",
  description:
    "La carte de téléchargement présente un document à télécharger — formulaire, circulaire, rapport — avec son format, sa taille et sa date de mise à jour. Toute la carte est cliquable.",
  category: "contenu",
  file: "src/dsm/components/download-card.tsx",
  when: [
    "Utilisez la carte de téléchargement pour un document officiel autonome (PDF, DOCX) destiné à être imprimé ou archivé.",
    "Renseignez `updatedAt` dès qu'un document est susceptible d'évoluer, pour que l'usager sache s'il consulte la dernière version.",
    "Regroupez plusieurs cartes dans une grille pour une liste de formulaires d'une même démarche.",
  ],
  whenNot: [
    "N'utilisez pas la carte de téléchargement pour un lien vers une page web : préférez `Tile` ou `Card`.",
    "N'omettez pas `size` : l'usager doit pouvoir évaluer le poids du fichier avant de le télécharger sur une connexion limitée.",
  ],
  a11y: [
    "Le titre est un lien agrandi : toute la carte est cliquable, y compris la zone de l'icône.",
    "La ligne de métadonnées (format, taille, date) est un texte simple, lisible par tout lecteur d'écran sans dépendre d'une icône seule.",
  ],
  rtl: [
    "L'icône de document et l'icône de téléchargement restent identiques dans les deux sens de lecture : aucune n'est directionnelle.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Un formulaire PDF avec date de mise à jour." },
    { slug: "formats", title: "Formats", description: "PDF, DOCX et XLSX, avec et sans langue précisée." },
    { slug: "documents-officiels", title: "Documents officiels", description: "Cas réel : grille de formulaires d'une démarche." },
  ],
  props: [
    {
      component: "DownloadCard",
      items: [
        { name: "title", type: "string", required: true, description: "Nom du document." },
        { name: "description", type: "string", description: "Précision courte sur le contenu du document." },
        { name: "href", type: "string", required: true, description: "URL du fichier." },
        { name: "format", type: "string", required: true, description: "Format affiché, ex. « PDF »." },
        { name: "size", type: "string", required: true, description: "Taille affichée, ex. « 1,2 Mo »." },
        { name: "lang", type: "string", description: "Langue du document, posée en `hrefLang` sur le lien." },
        { name: "updatedAt", type: "string", description: "Date de dernière mise à jour, affichée après « Mis à jour le »." },
      ],
    },
  ],
  related: ["tile", "share"],
};

export default meta;
