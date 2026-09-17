import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "side-menu",
  title: "Menu latéral",
  titleAr: "القائمة الجانبية",
  titleEn: "Side menu",
  description:
    "Le menu latéral porte la navigation locale d'une rubrique, sur deux niveaux au maximum. Les groupes se replient avec `Collapsible` ; l'élément actif reçoit une bordure de 3 px et une graisse plus marquée.",
  category: "navigation",
  file: "src/dsm/components/side-menu.tsx",
  when: [
    "Utilisez le menu latéral pour la navigation locale d'une rubrique riche (état civil, institutions, un centre d'aide) affichée à côté du contenu.",
    "Activez `sticky` sur une page longue pour garder le menu visible pendant la lecture.",
  ],
  whenNot: [
    "N'utilisez pas le menu latéral pour la navigation principale du site : c'est le rôle de l'en-tête.",
    "Ne dépassez pas deux niveaux : au-delà, la rubrique gagnerait à être scindée en plusieurs pages.",
  ],
  a11y: [
    "Le conteneur est un `nav` avec `aria-label` (le titre de la rubrique, ou « Dans cette rubrique » par défaut).",
    "Chaque groupe repliable est un déclencheur `button` natif ; son état ouvert/fermé pilote la rotation du chevron.",
    "L'élément courant porte `aria-current=\"page\"` en plus de son style visuel, pour ne pas reposer uniquement sur la couleur.",
  ],
  rtl: [
    "La bordure d'état (active ou groupe ouvert) est posée en `border-s` : elle reste du côté « début » de la ligne, à droite en arabe.",
    "Le chevron de dépliage ne se retourne pas — seule sa rotation à l'ouverture change.",
  ],
  examples: [
    { slug: "default", title: "Menu à deux niveaux", description: "Un groupe déplié par défaut, un élément actif." },
    { slug: "sticky", title: "Menu collant", description: "Reste visible pendant le défilement du contenu voisin." },
    { slug: "section-layout", title: "Mise en page de rubrique", description: "Le menu latéral à côté du contenu d'une rubrique « État civil »." },
  ],
  props: [
    {
      component: "SideMenu",
      items: [
        { name: "title", type: "ReactNode", description: "Titre affiché au-dessus du menu et utilisé comme `aria-label` s'il s'agit d'une chaîne." },
        { name: "items", type: "SideMenuItem[]", required: true, description: "`{ label, href?, active?, items?: SideMenuLink[] }` — un élément avec `items` devient un groupe repliable." },
        { name: "sticky", type: "boolean", default: "false", description: "Fixe le menu sous l'en-tête pendant le défilement." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["table-of-contents", "breadcrumb"],
};

export default meta;
