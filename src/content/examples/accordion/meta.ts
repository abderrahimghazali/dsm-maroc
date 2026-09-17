import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "accordion",
  title: "Accordéon",
  titleAr: "الأكورديون",
  titleEn: "Accordion",
  description:
    "L'accordéon regroupe plusieurs panneaux de contenu repliables sous un intitulé cliquable — questions fréquentes, détails d'une démarche, pièces justificatives par catégorie. Un seul panneau ou plusieurs peuvent être ouverts à la fois.",
  category: "contenu",
  file: "src/dsm/components/accordion.tsx",
  when: [
    "Utilisez l'accordéon pour des informations secondaires que l'utilisateur consulte à la demande, comme une foire aux questions.",
    "Utilisez `variant=\"separated\"` lorsque chaque panneau doit se lire comme une carte indépendante, par exemple des catégories de démarches.",
    "Activez `multiple` lorsque les panneaux sont indépendants et gagnent à être comparés ouverts simultanément.",
  ],
  whenNot: [
    "N'utilisez pas l'accordéon pour masquer une information indispensable à la réussite d'une démarche : gardez-la visible en permanence.",
    "Évitez d'imbriquer un accordéon dans un autre panneau d'accordéon : préférez une page ou un sommaire dédié.",
  ],
  a11y: [
    "Chaque intitulé est un vrai bouton (`Accordion.Trigger`) placé dans un `<h3>` : la navigation au clavier et par lecteur d'écran suit la hiérarchie des titres.",
    "L'état ouvert ou fermé est exposé via `aria-expanded`, géré automatiquement par Base UI — aucune annotation manuelle n'est nécessaire.",
  ],
  rtl: [
    "Le chevron pivote de la même façon dans les deux sens de lecture : une rotation verticale n'a pas besoin d'être inversée.",
    "L'intitulé s'aligne avec `text-start`, donc à droite en arabe, sans classe supplémentaire.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Lignes divisées par des filets, un seul panneau ouvert à la fois." },
    { slug: "separated", title: "Variante séparée", description: "Panneaux indépendants sous forme de cartes espacées." },
    {
      slug: "faq-cnie",
      title: "FAQ — Renouvellement de la CNIE",
      description: "Cas réel avec plusieurs panneaux ouverts simultanément grâce à `multiple`.",
    },
  ],
  props: [
    {
      component: "Accordion",
      items: [
        { name: "variant", type: '"default" | "separated"', default: "default", description: "Style de regroupement des panneaux." },
        { name: "multiple", type: "boolean", default: "false", description: "Autorise plusieurs panneaux ouverts en même temps." },
        { name: "defaultValue", type: "unknown[]", description: "Valeurs initialement ouvertes, en mode non contrôlé." },
        { name: "value", type: "unknown[]", description: "Valeurs ouvertes, en mode contrôlé." },
        { name: "onValueChange", type: "(value: unknown[]) => void", description: "Appelé quand un panneau s'ouvre ou se ferme." },
      ],
    },
    {
      component: "AccordionItem",
      items: [
        { name: "value", type: "unknown", required: true, description: "Identifiant unique du panneau." },
        { name: "title", type: "ReactNode", required: true, description: "Intitulé affiché dans l'en-tête cliquable." },
        { name: "disabled", type: "boolean", default: "false", description: "Désactive l'ouverture du panneau." },
        { name: "children", type: "ReactNode", required: true, description: "Contenu affiché lorsque le panneau est ouvert." },
      ],
    },
  ],
  related: ["callout", "table", "transcription"],
};

export default meta;
