import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "button",
  title: "Bouton",
  titleAr: "زر",
  titleEn: "Button",
  description:
    "Le bouton déclenche une action immédiate — envoyer, enregistrer, confirmer — ou reproduit un lien lorsqu'on lui fournit un élément à rendre. Ses variantes, tailles et états permettent de hiérarchiser les actions d'un écran sans changer de composant.",
  category: "actions",
  file: "src/dsm/components/button.tsx",
  when: [
    "Utilisez la variante « primaire » pour l'action principale d'un écran, une seule fois par groupe d'actions.",
    "Utilisez « secondaire » ou « tertiaire » pour les actions concurrentes, moins prioritaires que l'action principale.",
    "Utilisez « danger » uniquement pour une action destructrice et irréversible (suppression, annulation définitive d'une demande).",
    "Utilisez la variante « lien » lorsque l'action s'apparente à de la navigation plutôt qu'à une commande.",
    "Passez `render` (avec `<a href>` ou `Link`) pour qu'un bouton se comporte comme un lien tout en gardant le style et les états du bouton.",
  ],
  whenNot: [
    "N'utilisez pas un bouton pour une navigation simple vers une autre page : préférez un lien, sauf si un traitement doit s'exécuter avant la redirection.",
    "N'empilez pas plusieurs boutons « primaire » dans la même zone : un seul par groupe d'actions.",
    "Ne désactivez pas un bouton sans expliquer la raison à proximité (message d'aide ou d'erreur).",
  ],
  a11y: [
    "Un bouton qui ne contient qu'une icône doit recevoir un `aria-label` explicite décrivant l'action, jamais le nom de l'icône.",
    "L'état `loading` pose `aria-busy=\"true\"` et garde le bouton focusable (`focusableWhenDisabled`) pour ne pas faire sauter le focus clavier.",
    "Les tailles `sm`, `md` et `lg` offrent toutes une zone cliquable d'au moins 36 à 52px de haut, adaptée à un usage tactile.",
  ],
  rtl: [
    "Les icônes directionnelles (flèche, chevron) doivent utiliser `ArrowForward` / `ChevronForward` : elles se retournent automatiquement en arabe.",
    "Les icônes à sens fixe (téléchargement, ajout, fermeture) ne doivent jamais être enveloppées dans une classe de retournement.",
  ],
  examples: [
    { slug: "default", title: "Variantes", description: "Les huit variantes de style, de la plus visible (primaire) à la plus discrète (lien)." },
    { slug: "sizes", title: "Tailles", description: "Tailles sm, md, lg et les variantes carrées pour bouton icône seul." },
    { slug: "icons", title: "Avec icônes", description: "Icône avant le texte, après le texte, ou bouton icône seul avec `aria-label`." },
    { slug: "states", title: "États", description: "États de chargement et désactivé." },
    { slug: "as-link", title: "Rendu en lien", description: "Un bouton qui navigue réellement, grâce à `render`." },
    { slug: "group", title: "Groupe de boutons", description: "Composition d'actions primaire, secondaire et tertiaire dans un `ButtonGroup`." },
  ],
  props: [
    {
      component: "Button",
      items: [
        { name: "variant", type: '"primary" | "secondary" | "tertiary" | "ghost" | "danger" | "accent" | "inverse" | "link"', default: "primary", description: "Style visuel du bouton, à choisir selon l'importance de l'action." },
        { name: "size", type: '"sm" | "md" | "lg" | "icon" | "icon-sm"', default: "md", description: "Hauteur et espacement horizontal ; `icon`/`icon-sm` produisent un bouton carré pour une icône seule." },
        { name: "iconStart", type: "ReactNode", description: "Icône affichée avant le texte ; remplacée par l'indicateur de chargement quand `loading` est actif." },
        { name: "iconEnd", type: "ReactNode", description: "Icône affichée après le texte." },
        { name: "loading", type: "boolean", default: "false", description: "Affiche un indicateur de chargement animé, force `disabled` et pose `aria-busy`." },
        { name: "disabled", type: "boolean", default: "false", description: "Désactive le bouton ; ignoré si `loading` est actif (le bouton reste focusable)." },
        { name: "render", type: "ReactElement", description: "Fusionne les props du bouton sur un autre élément (`<a href>`, `Link`…) pour un bouton qui navigue réellement." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires, fusionnées avec les classes de variante." },
      ],
    },
    {
      component: "ButtonGroup",
      items: [
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
        { name: "children", type: "ReactNode", required: true, description: "Boutons à aligner horizontalement avec un espacement constant et un retour à la ligne automatique." },
      ],
    },
  ],
  related: ["card"],
};

export default meta;
