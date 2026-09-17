import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "toast",
  title: "Notification temporaire",
  titleAr: "إشعار مؤقت",
  titleEn: "Toast",
  description:
    "La notification temporaire confirme le résultat d'une action (envoi, copie, erreur réseau) sans interrompre le parcours. Elle disparaît d'elle-même et reste consultable au clavier via la touche F6.",
  category: "retours",
  file: "src/dsm/components/toast.tsx",
  when: [
    "Utilisez-la pour confirmer une action déjà effectuée (« Votre demande a été transmise ») que l'utilisateur n'a pas besoin de revoir.",
    "Ajoutez une `action` (« Annuler ») quand l'utilisateur peut encore revenir en arrière juste après l'action.",
  ],
  whenNot: [
    "N'y placez pas une information que l'utilisateur doit absolument lire : une notification peut disparaître avant d'être vue.",
    "Ne l'utilisez pas pour une erreur de validation de formulaire : préférez un message porté par le champ concerné.",
  ],
  a11y: [
    "`ToastProvider` doit englober l'ensemble de la vue pour que la touche F6 permette d'atteindre la zone des notifications.",
    "Chaque notification est glissable au doigt pour être écartée, en plus du bouton de fermeture.",
    "Le ton `error` porte une priorité d'annonce plus élevée pour les lecteurs d'écran.",
  ],
  rtl: [
    "La pile de notifications est ancrée en fin de ligne (`end-4`) : elle apparaît à gauche de l'écran en arabe.",
    "La bordure d'accent (`border-s-4`) reste du côté « début » quel que soit le sens de lecture.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Déclenchée par un bouton, avec titre et description.", minHeight: 260 },
    { slug: "tones", title: "Tons", description: "info, succès, avertissement, erreur.", minHeight: 260 },
    { slug: "with-action", title: "Avec action", description: "Un bouton « Annuler » directement dans la notification.", minHeight: 260 },
  ],
  props: [
    {
      component: "ToastProvider",
      items: [
        { name: "limit", type: "number", default: "3", description: "Nombre maximal de notifications affichées simultanément." },
        { name: "timeout", type: "number", default: "5000", description: "Délai par défaut avant fermeture automatique, en millisecondes." },
      ],
    },
    { component: "Toaster", items: [{ name: "—", type: "—", description: "Aucune prop : rend le portail et la pile de notifications. À placer une fois par `ToastProvider`." }] },
    {
      component: "useToast()",
      items: [
        { name: "add(options)", type: "(options: ToastOptions) => string", description: "Affiche une notification et renvoie son identifiant." },
        { name: "options.title", type: "ReactNode", description: "Titre court de la notification." },
        { name: "options.description", type: "ReactNode", description: "Texte complémentaire." },
        { name: "options.tone", type: '"info" | "success" | "warning" | "error"', default: "info", description: "Couleur d'accent et icône." },
        { name: "options.action", type: "{ label: ReactNode; onClick: () => void }", description: "Bouton d'action secondaire dans la notification." },
        { name: "options.timeout", type: "number", description: "Délai spécifique à cette notification, remplace celui du `ToastProvider`." },
        { name: "close(id)", type: "(id?: string) => void", description: "Ferme une notification précise, ou toutes si omis." },
      ],
    },
  ],
  related: ["alert"],
};

export default meta;
