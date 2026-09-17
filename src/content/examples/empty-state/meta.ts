import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "empty-state",
  title: "État vide",
  titleAr: "حالة فارغة",
  titleEn: "Empty state",
  description:
    "L'état vide remplace une liste, une recherche ou un tableau de bord quand il n'y a rien à afficher. Il explique la situation et propose, quand c'est utile, une action pour en sortir.",
  category: "retours",
  file: "src/dsm/components/empty-state.tsx",
  when: [
    "Utilisez-le pour une recherche sans résultat, une liste de démarches vide ou un premier usage sans historique.",
    "Ajoutez une `action` quand l'utilisateur peut résoudre lui-même la situation (élargir sa recherche, créer une première démarche).",
  ],
  whenNot: [
    "N'en faites pas un état d'erreur technique : une panne réseau relève d'une `Alert`, pas d'un état vide.",
    "N'utilisez pas `size=\"md\"` dans un espace exigu (carte, panneau latéral) : préférez `size=\"sm\"`.",
  ],
  a11y: [
    "Le titre reste un texte simple, lisible sans l'icône : l'icône décorative est toujours secondaire au message.",
    "Le motif de fond (`pattern`) est purement décoratif et n'affecte jamais la lisibilité du texte au-dessus.",
  ],
  rtl: [
    "La composition est centrée : aucune propriété physique gauche/droite n'entre en jeu.",
    "Le motif khatam est symétrique et ne nécessite pas de miroir en RTL.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Aucun résultat de recherche.", minHeight: 320 },
    { slug: "sizes", title: "Tailles", description: "sm dans un panneau étroit, md en pleine page.", minHeight: 320 },
    { slug: "composed", title: "Premier dossier", description: "Aucune démarche en cours, avec action de départ.", minHeight: 320 },
  ],
  props: [
    {
      component: "EmptyState",
      items: [
        { name: "icon", type: "ReactNode", required: true, description: "Icône affichée dans le cadre en arche." },
        { name: "title", type: "ReactNode", required: true, description: "Message principal, une phrase courte." },
        { name: "description", type: "ReactNode", description: "Précision optionnelle sous le titre." },
        { name: "action", type: "ReactNode", description: "Bouton ou lien permettant de sortir de l'état vide." },
        { name: "size", type: '"sm" | "md"', default: "md", description: "Densité verticale et taille du texte." },
        { name: "pattern", type: "boolean", default: "true", description: "Affiche un motif khatam très discret en fond." },
      ],
    },
  ],
  related: ["skeleton", "card"],
};

export default meta;
