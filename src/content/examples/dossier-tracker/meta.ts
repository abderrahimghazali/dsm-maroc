import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "dossier-tracker",
  title: "Suivi de dossier",
  titleAr: "تتبع الملف",
  titleEn: "Dossier tracker",
  description:
    "La carte de suivi d'une demande administrative : référence copiable, statut dans un vocabulaire commun (déposé, en instruction, action requise, accepté, refusé, prêt), progression dans les étapes, délai estimé et prochaine action pour l'usager.",
  category: "retours",
  status: "beta",
  file: "src/dsm/components/dossier-tracker.tsx",
  when: [
    "Utilisez le suivi de dossier dès qu'un usager a déposé une demande : page « Mes démarches », e-mail de confirmation, espace personnel.",
    "Renseignez `action` chaque fois qu'un statut attend quelque chose de l'usager (pièce manquante, retrait, paiement) : c'est l'information la plus utile de la carte.",
    "Gardez le vocabulaire des six statuts ; il est traduit dans les quatre locales et cohérent d'un service à l'autre.",
  ],
  whenNot: [
    "N'utilisez pas ce composant pour une chronologie éditoriale ou un historique sans statut : préférez `Timeline`.",
    "N'inventez pas de statut supplémentaire (« en attente de signature ») : exprimez-le dans la description de l'étape courante.",
  ],
  a11y: [
    "Chaque étape annonce son état (terminée, en cours, à venir) dans un texte masqué pour les lecteurs d'écran ; l'état n'est jamais porté par la couleur seule.",
    "La référence est copiable par un bouton dont le libellé passe de « Copier » à « Copié » ; la référence elle-même reste sélectionnable.",
    "La prochaine action est un vrai bouton ou lien, jamais une simple mention.",
  ],
  rtl: [
    "Le fil des étapes et les marqueurs utilisent des propriétés logiques ; la référence reste en `dir=\"ltr\"` comme sur le récépissé.",
    "Les libellés de statut et de métadonnées viennent du dictionnaire (fr, ar, zgh, en).",
  ],
  examples: [
    { slug: "default", title: "En cours d'instruction", description: "Le cas courant : quelques étapes franchies, un délai estimé." },
    { slug: "action-required", title: "Action requise", description: "Une pièce manque : l'étape est bloquée et la prochaine action est mise en avant." },
    { slug: "ready", title: "Prêt", description: "Toutes les étapes sont franchies ; l'action est le retrait ou le téléchargement." },
  ],
  props: [
    {
      component: "DossierTracker",
      items: [
        { name: "reference", type: "string", required: true, description: "Référence du dossier, affichée en monospace avec un bouton de copie." },
        { name: "title", type: "ReactNode", required: true, description: "Intitulé de la demande." },
        { name: "status", type: '"submitted" | "in-review" | "action-required" | "approved" | "rejected" | "ready"', required: true, description: "Statut courant, traduit et coloré automatiquement." },
        { name: "steps", type: "{ label, date?, description? }[]", required: true, description: "Étapes ordonnées de la procédure." },
        { name: "currentStep", type: "number", required: true, description: "Index de l'étape en cours ; `steps.length` quand tout est terminé." },
        { name: "submittedAt / updatedAt / expectedBy", type: "ReactNode", description: "Métadonnées affichées sous le titre (le délai est masqué une fois le dossier clos)." },
        { name: "action", type: "{ label, href?, onClick?, description? }", description: "Prochaine action pour l'usager, dans un encadré dont le ton suit le statut." },
        { name: "contact", type: "ReactNode", description: "Ligne d'aide affichée sous les étapes." },
      ],
    },
  ],
  related: ["timeline", "stepper", "badge", "callout"],
};

export default meta;
