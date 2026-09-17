import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "drawer",
  title: "Panneau latéral",
  titleAr: "لوحة جانبية",
  titleEn: "Drawer",
  description:
    "Le panneau latéral glisse depuis un bord de l'écran pour afficher un menu, des filtres ou un contenu secondaire, sans quitter la page. Il se ferme au balayage, au clic sur le fond ou avec la touche Échap.",
  category: "overlays",
  file: "src/dsm/components/drawer.tsx",
  when: [
    "Utilisez-le pour le menu de navigation mobile ou un panneau de filtres qui a besoin de plus d'espace qu'une fenêtre contextuelle.",
    "Choisissez `side=\"end\"` (par défaut) pour un panneau d'outils, `side=\"start\"` pour un menu de navigation.",
  ],
  whenNot: [
    "N'utilisez pas de panneau latéral pour une confirmation courte : une fenêtre modale ou une notification suffit.",
    "Évitez d'imbriquer un panneau latéral dans un autre : simplifiez le parcours en une seule vue.",
  ],
  a11y: [
    "Le focus est piégé dans le panneau tant qu'il est ouvert et revient au déclencheur à la fermeture.",
    "Le bouton de fermeture est toujours présent, même sans `title`, pour rester accessible au clavier et au tactile.",
  ],
  rtl: [
    "`side` est exprimé en logique (`start` / `end`) : le panneau glisse depuis la gauche en arabe pour `end`, sans code spécifique.",
    "Le sens de balayage (`swipeDirection`) est calculé à partir de `useLocale().dir`, jamais codé en dur.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Panneau de fin de ligne, utilisé pour des outils.", minHeight: 320 },
    { slug: "start-side", title: "Depuis le début", description: "Menu de navigation ouvert depuis le bord de début.", minHeight: 320 },
    { slug: "composed", title: "Filtres de démarches", description: "Panneau de filtres avec pied d'actions.", minHeight: 320 },
  ],
  props: [
    {
      component: "Drawer",
      items: [
        { name: "side", type: '"start" | "end"', default: "end", description: "Côté logique de glissement, mirroré en RTL." },
        { name: "trigger", type: "ReactElement", description: "Élément déclencheur, rendu via `Drawer.Trigger`." },
        { name: "title", type: "ReactNode", description: "Titre affiché dans l'en-tête du panneau." },
        { name: "description", type: "ReactNode", description: "Texte d'appui sous le titre." },
        { name: "footer", type: "ReactNode", description: "Zone d'actions fixée en pied de panneau." },
        { name: "open", type: "boolean", description: "État contrôlé d'ouverture." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Appelé à chaque changement d'état." },
        { name: "children", type: "ReactNode", description: "Contenu défilant du panneau." },
      ],
    },
  ],
  related: ["dialog", "header"],
};

export default meta;
