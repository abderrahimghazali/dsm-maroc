import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "file-upload",
  title: "Dépôt de fichier",
  titleAr: "إيداع ملف",
  titleEn: "File upload",
  description:
    "Zone de dépôt pour joindre un ou plusieurs justificatifs à une démarche : glisser-déposer ou sélection classique, avec la liste des fichiers choisis, leur taille et un bouton de retrait. L'aide sur les formats et la taille maximale se génère automatiquement à partir de `accept` et `maxSizeMb`.",
  category: "formulaires",
  file: "src/dsm/components/file-upload.tsx",
  when: [
    "Utilisez `FileUpload` pour tout justificatif à joindre à un dossier administratif (CNIE, justificatif de domicile, photo d'identité).",
    "Renseignez `accept` et `maxSizeMb` pour que l'aide affichée corresponde exactement aux contraintes réelles côté serveur.",
    "Utilisez `multiple` lorsque plusieurs fichiers du même type peuvent être joints (ex. plusieurs pages d'un même document).",
  ],
  whenNot: [
    "N'utilisez pas `FileUpload` pour une image de profil unique avec recadrage : un composant dédié à l'avatar est plus adapté.",
    "N'omettez pas `maxSizeMb` si le serveur refuse les fichiers trop lourds : l'usager doit connaître la limite avant de tenter l'envoi.",
  ],
  a11y: [
    "L'entrée de fichier réelle est visuellement masquée (`dsm-sr-only`) mais reste au clavier grâce au `<label>` qui l'enveloppe entièrement.",
    "Chaque fichier retiré déclenche `onFilesChange` avec la liste à jour, permettant de synchroniser un compteur ou une validation externe.",
    "Le bouton de retrait de chaque fichier porte un `aria-label` (« Retirer ») car il n'affiche qu'une icône.",
  ],
  rtl: [
    "La liste des fichiers et leurs boutons de retrait suivent l'ordre logique du DOM ; aucune classe directionnelle nécessaire.",
  ],
  examples: [
    { slug: "default", title: "Simple", description: "Dépôt d'un justificatif avec formats et taille maximale affichés automatiquement." },
    { slug: "multiple", title: "Fichiers multiples", description: "Plusieurs fichiers déposés successivement, listés avec leur taille." },
    { slug: "states", title: "Erreur", description: "Zone de dépôt en état d'erreur." },
  ],
  props: [
    {
      component: "FileUpload",
      items: [
        { name: "label", type: "ReactNode", required: true, description: "Libellé de la zone de dépôt." },
        { name: "accept", type: "string", description: "Extensions ou types MIME acceptés (ex. `.pdf,.jpg,.png`) ; alimente aussi l'aide affichée." },
        { name: "maxSizeMb", type: "number", description: "Taille maximale par fichier, affichée dans l'aide (ex. « 5 Mo max »)." },
        { name: "multiple", type: "boolean", description: "Autorise le dépôt de plusieurs fichiers." },
        { name: "error", type: "ReactNode", description: "Message d'erreur affiché sous la liste des fichiers." },
        { name: "onFilesChange", type: "(files: File[]) => void", description: "Appelé après chaque ajout ou retrait de fichier." },
      ],
    },
  ],
  related: ["field"],
};

export default meta;
