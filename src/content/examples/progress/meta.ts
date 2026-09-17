import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "progress",
  title: "Barre de progression",
  titleAr: "شريط التقدم",
  titleEn: "Progress",
  description:
    "La barre de progression indique l'avancement mesurable d'une tâche longue : envoi de pièces, instruction d'un dossier, import de fichiers. Utilisez l'état indéterminé quand la durée n'est pas connue à l'avance.",
  category: "retours",
  file: "src/dsm/components/progress.tsx",
  when: [
    "Utilisez une valeur numérique dès que l'avancement est mesurable (pourcentage de dossier traité, taux de complétion d'un formulaire).",
    "Utilisez `value={null}` uniquement pour une tâche dont la durée ne peut pas être estimée (vérification en cours, appel réseau).",
  ],
  whenNot: [
    "N'utilisez pas la barre de progression pour un simple état d'attente court : préférez un `Spinner`.",
    "Ne changez pas de `tone` en cours de route sans raison : réservez `warning`/`error` à un ralentissement ou un échec réel.",
  ],
  a11y: [
    "`Progress.Root` porte les attributs ARIA de progression (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) sans intervention supplémentaire.",
    "Le `label` doit décrire la tâche en cours, jamais une simple répétition du pourcentage.",
  ],
  rtl: [
    "La piste et l'indicateur utilisent `w-full`/`h-full` : le remplissage progresse depuis le début de ligne, à droite en arabe, sans code spécifique.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Avec libellé et valeur affichée." },
    { slug: "tones", title: "Tons", description: "default, success, warning, error." },
    { slug: "indeterminate", title: "Indéterminée", description: "Durée inconnue, en attente d'une réponse." },
    { slug: "composed", title: "Envoi de pièces jointes", description: "Progression d'un import de documents." },
  ],
  props: [
    {
      component: "Progress",
      items: [
        { name: "value", type: "number | null", required: true, description: "Valeur entre 0 et 100 ; `null` pour l'état indéterminé." },
        { name: "label", type: "ReactNode", description: "Intitulé de la tâche, affiché au-dessus de la piste." },
        { name: "showValue", type: "boolean", default: "false", description: "Affiche la valeur formatée (« 42 % ») à côté du libellé." },
        { name: "tone", type: '"default" | "success" | "warning" | "error"', default: "default", description: "Couleur de l'indicateur." },
        { name: "size", type: '"sm" | "md"', default: "md", description: "Épaisseur de la piste." },
      ],
    },
  ],
  related: ["spinner", "skeleton"],
};

export default meta;
