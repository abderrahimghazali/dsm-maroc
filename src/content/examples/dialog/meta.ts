import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "dialog",
  title: "Fenêtre modale",
  titleAr: "نافذة منبثقة",
  titleEn: "Dialog",
  description:
    "La fenêtre modale interrompt le parcours pour demander une confirmation, afficher un formulaire court ou un récapitulatif. `AlertDialog` couvre le cas particulier d'une confirmation destructive.",
  category: "overlays",
  file: "src/dsm/components/dialog.tsx",
  when: [
    "Utilisez `Dialog` pour un formulaire court ou un récapitulatif qui ne justifie pas de changer de page.",
    "Utilisez `AlertDialog` avant toute action irréversible (suppression, annulation d'un rendez-vous, abandon d'une demande).",
    "Passez `size=\"full\"` pour un contenu dense (récapitulatif de dossier, historique) qui a besoin de plus d'espace.",
  ],
  whenNot: [
    "N'utilisez pas une fenêtre modale pour un contenu qui doit rester consultable pendant que l'utilisateur agit ailleurs sur la page : préférez un `Drawer` ou un `Popover`.",
    "N'empilez pas plusieurs fenêtres modales pour un même parcours : simplifiez en une seule étape ou revenez à une page dédiée.",
  ],
  a11y: [
    "Le focus est piégé dans la fenêtre tant qu'elle est ouverte et revient au déclencheur à la fermeture.",
    "`DialogContent` place toujours un bouton de fermeture avec `aria-label` traduit, y compris quand `title` n'est pas fourni.",
    "`AlertDialog` exige un `title` : la question posée doit toujours être explicite pour les lecteurs d'écran.",
  ],
  rtl: [
    "Le bouton de fermeture est positionné avec `end-3` : il reste dans l'angle de fin de ligne, à gauche en arabe.",
    "Le dialogue est centré à toutes les tailles d'écran, avec une marge de 1rem sur mobile ; aucun mirroring horizontal n'est nécessaire.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Titre, description et pied d'actions.", minHeight: 320 },
    { slug: "sizes", title: "Tailles", description: "sm, md, lg et full, selon la densité du contenu.", minHeight: 320 },
    { slug: "alert-dialog", title: "Confirmation destructive", description: "AlertDialog en ton danger avant une annulation.", minHeight: 280 },
    { slug: "composed", title: "Formulaire dans une modale", description: "Demande de duplicata d'acte de naissance.", minHeight: 320 },
  ],
  props: [
    {
      component: "Dialog",
      items: [
        { name: "trigger", type: "ReactElement", description: "Élément déclencheur, rendu via `Dialog.Trigger` (render prop)." },
        { name: "open", type: "boolean", description: "État contrôlé d'ouverture." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Appelé à chaque changement d'état." },
        { name: "defaultOpen", type: "boolean", default: "false", description: "État initial en mode non contrôlé." },
      ],
    },
    {
      component: "DialogContent",
      items: [
        { name: "size", type: '"sm" | "md" | "lg" | "full"', default: "md", description: "Largeur maximale sur les écrans larges." },
        { name: "title", type: "ReactNode", description: "Titre affiché en haut, porté par `Dialog.Title`." },
        { name: "description", type: "ReactNode", description: "Texte d'appui sous le titre, porté par `Dialog.Description`." },
        { name: "footer", type: "ReactNode", description: "Emplacement pour les actions, généralement un `DialogFooter`." },
        { name: "children", type: "ReactNode", description: "Corps de la fenêtre, défilant indépendamment du pied." },
      ],
    },
    {
      component: "DialogFooter",
      items: [{ name: "className", type: "string", description: "Classes additionnelles ; empile les actions sur mobile." }],
    },
    {
      component: "AlertDialog",
      items: [
        { name: "trigger", type: "ReactElement", description: "Élément déclencheur, rendu via `AlertDialog.Trigger`." },
        { name: "title", type: "ReactNode", required: true, description: "Question posée à l'utilisateur." },
        { name: "description", type: "ReactNode", description: "Conséquence de l'action, notamment son caractère irréversible." },
        { name: "tone", type: '"default" | "danger"', default: "default", description: "`danger` applique le variant `danger` du bouton de confirmation." },
        { name: "confirmLabel", type: "ReactNode", default: "t.confirm", description: "Libellé du bouton de confirmation." },
        { name: "cancelLabel", type: "ReactNode", default: "t.cancel", description: "Libellé du bouton d'annulation." },
        { name: "onConfirm", type: "() => void", description: "Appelé lorsque l'utilisateur confirme." },
      ],
    },
  ],
  related: ["alert-dialog", "drawer", "popover"],
};

export default meta;
