import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "tile",
  title: "Tuile",
  titleAr: "بلاطة",
  titleEn: "Tile",
  description:
    "La tuile est un lien enrichi vers une démarche, une rubrique ou une institution, avec une icône dans un cadre en arche ou une image. Toute la surface de la tuile est cliquable.",
  category: "contenu",
  file: "src/dsm/components/tile.tsx",
  when: [
    "Utilisez une tuile pour un point d'entrée de premier niveau vers une démarche ou une rubrique (page d'accueil, sommaire de catégorie).",
    "Regroupez les tuiles dans un `TileGrid` pour composer une grille de navigation homogène.",
    "Utilisez `orientation=\"horizontal\"` dans une colonne étroite ou une barre latérale.",
  ],
  whenNot: [
    "N'utilisez pas de tuile pour une action destructive ou qui ne mène pas à une nouvelle page : préférez `Button`.",
    "Évitez de mélanger icônes et images au sein d'une même grille de tuiles : gardez un langage visuel cohérent.",
  ],
  a11y: [
    "Le titre est un lien agrandi (`after:absolute after:inset-0`) : toute la carte est cliquable au clic, au tactile et au clavier.",
    "L'icône et l'image sont décoratives (`aria-hidden` ou `alt=\"\"`) : le sens est toujours porté par le titre.",
  ],
  rtl: [
    "La flèche de fin (`ArrowForward`) est automatiquement mise en miroir et glisse vers le début de lecture au survol en arabe.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Orientation verticale avec icône en cadre arche." },
    { slug: "horizontal", title: "Horizontale", description: "Orientation horizontale, adaptée à une colonne étroite." },
    { slug: "grid-demarches", title: "Grille de démarches", description: "Cas réel : point d'entrée vers les catégories de démarches." },
  ],
  props: [
    {
      component: "Tile",
      items: [
        { name: "title", type: "ReactNode", required: true, description: "Titre du lien, seul élément interactif." },
        { name: "description", type: "ReactNode", description: "Texte descriptif court." },
        { name: "href", type: "string", required: true, description: "Destination du lien agrandi." },
        { name: "icon", type: "ReactNode", description: "Icône affichée dans un cadre `dsm-arch`." },
        { name: "image", type: "string", description: "Image affichée à la place de l'icône, dans le même cadre." },
        { name: "orientation", type: '"vertical" | "horizontal"', default: "vertical", description: "Disposition de l'icône et du texte." },
        { name: "variant", type: '"default" | "tinted"', default: "default", description: "Fond neutre ou teinté (`bg-surface-muted`)." },
      ],
    },
    {
      component: "TileGrid",
      items: [{ name: "columns", type: "2 | 3 | 4", default: "3", description: "Nombre de colonnes à partir du point de rupture `sm`." }],
    },
  ],
  related: ["card", "download-card"],
};

export default meta;
