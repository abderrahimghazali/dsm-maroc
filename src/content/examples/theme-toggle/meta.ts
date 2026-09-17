import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "theme-toggle",
  title: "Bascule de thème",
  titleAr: "مبدل السمة",
  titleEn: "Theme toggle",
  description:
    "Le sélecteur de thème permet de choisir un affichage clair, sombre ou aligné sur les préférences système. Le choix est mémorisé et appliqué avant l'affichage de la page, pour éviter tout scintillement au chargement.",
  category: "actions",
  file: "src/dsm/components/theme.tsx",
  when: [
    "Proposez toujours les trois options (clair, sombre, système) plutôt qu'une simple bascule binaire.",
    "Placez le sélecteur de thème dans l'en-tête, à côté du sélecteur de langue.",
  ],
  whenNot: [
    "N'ajoutez pas ce composant sur une page qui n'est pas enveloppée par `ThemeProvider` (déjà posé dans le layout racine) : le contexte par défaut resterait figé sur le thème clair.",
    "Ne dupliquez pas plusieurs sélecteurs de thème sur une même page : son état est global, un seul suffit.",
  ],
  a11y: [
    "Le déclencheur porte un `aria-label` (« Affichage ») car il n'affiche qu'une icône représentant le thème résolu.",
    "L'option active est cochée (`Check`) dans le menu, en plus d'être portée par son libellé.",
  ],
  rtl: [
    "Le menu s'aligne en fin de ligne (`align=\"end\"`), comme les autres menus de l'en-tête, et s'inverse automatiquement en RTL.",
  ],
  examples: [{ slug: "default", title: "Par défaut", description: "Menu clair / sombre / système, prêt à être placé dans un en-tête." }],
  props: [
    { component: "ThemeToggle", items: [{ name: "className", type: "string", description: "Classes Tailwind supplémentaires appliquées au déclencheur." }] },
    {
      component: "ThemeProvider",
      items: [{ name: "children", type: "ReactNode", required: true, description: "Arbre de l'application ; fournit le contexte de thème (clair/sombre/système) à tous les descendants. Déjà posé dans le layout racine." }],
    },
  ],
  related: ["language-switcher", "header"],
};

export default meta;
