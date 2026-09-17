import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "table-of-contents",
  title: "Sommaire",
  titleAr: "الفهرس",
  titleEn: "Table of contents",
  description:
    "Le sommaire liste les sections d'une page longue. La section lue reçoit un repère de couleur sur la piste de gauche, soit passé en prop (`activeId`), soit calculé automatiquement au défilement (`observe`).",
  category: "navigation",
  file: "src/dsm/components/table-of-contents.tsx",
  when: [
    "Utilisez le sommaire sur un article, une fiche institution ou une page réglementaire de plusieurs écrans.",
    "Activez `observe` pour suivre automatiquement la lecture ; sinon pilotez `activeId` vous-même.",
    "Réservez le niveau 2 (`level: 2`) aux sous-sections, pour garder une hiérarchie lisible d'un coup d'œil.",
  ],
  whenNot: [
    "N'affichez pas de sommaire pour une page courte tenant sur un seul écran : il n'apporterait aucun repère utile.",
  ],
  a11y: [
    "Le conteneur est un `nav` avec `aria-label` (le titre du sommaire, ou « Sommaire » par défaut).",
    "Chaque lien pointe vers l'ancre `#id` de sa section ; la section active porte `aria-current=\"location\"`.",
  ],
  rtl: [
    "La piste et le repère actif sont posés en `border-s` : ils restent du côté « début » de la ligne, à droite en arabe.",
  ],
  examples: [
    { slug: "default", title: "Sommaire simple", description: "Section active passée explicitement via `activeId`." },
    { slug: "two-levels", title: "Deux niveaux", description: "Sections et sous-sections, avec indentation du second niveau." },
    { slug: "with-observe", title: "Suivi automatique du défilement", description: "Faites défiler l'article : le repère suit la section lue grâce à `observe`.", minHeight: 320 },
  ],
  props: [
    {
      component: "TableOfContents",
      items: [
        { name: "title", type: "ReactNode", description: "Titre affiché au-dessus du sommaire et utilisé comme `aria-label` s'il s'agit d'une chaîne." },
        { name: "items", type: "{ id: string; label: string; level?: 1 | 2 }[]", required: true, description: "Sections de la page, dans l'ordre d'apparition." },
        { name: "activeId", type: "string", description: "Identifiant de la section active (mode contrôlé)." },
        { name: "observe", type: "boolean", default: "false", description: "Calcule la section active via `IntersectionObserver` en fonction du défilement." },
        { name: "sticky", type: "boolean", default: "false", description: "Fixe le sommaire sous l'en-tête pendant le défilement." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["side-menu", "breadcrumb"],
};

export default meta;
