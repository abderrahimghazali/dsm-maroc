import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "morocco-map",
  title: "Carte du Maroc",
  titleAr: "خريطة المغرب",
  titleEn: "Morocco map",
  description:
    "La carte des douze régions du Royaume, territoire entier, sous forme de SVG accessible : sélecteur de région, carte choroplèthe pour des chiffres par région, ou simple illustration. Les noms de régions existent dans les quatre locales.",
  category: "contenu",
  status: "beta",
  file: "src/dsm/components/morocco-map.tsx",
  when: [
    "Utilisez la carte comme sélecteur quand l'utilisateur raisonne géographiquement (« dans quelle région se trouve votre commune ? »), en gardant toujours une liste ou un `Select` équivalent à côté.",
    "Utilisez la variante choroplèthe pour comparer un indicateur entre régions (délais, volumes, couverture) ; les cinq paliers sont calculés automatiquement.",
  ],
  whenNot: [
    "N'affichez jamais une carte du Royaume amputée d'une partie du territoire : le composant embarque les douze régions et ne permet pas d'en retirer.",
    "N'utilisez pas la carte comme unique moyen de choisir une région : sur mobile ou au lecteur d'écran, un `Select` reste plus efficace.",
    "Ne l'utilisez pas pour une précision infra-régionale (provinces, communes) : les tracés sont simplifiés pour l'affichage, pas pour la mesure.",
  ],
  a11y: [
    "En mode interactif, chaque région est un `role=\"button\"` focusable avec `aria-pressed` et un libellé complet (nom et valeur) ; Entrée et Espace sélectionnent.",
    "La légende sous la carte est une zone `aria-live` qui annonce la région survolée ou sélectionnée.",
    "La couleur n'est jamais la seule information : les valeurs sont dans les libellés et la légende, et les numéros de région peuvent être imprimés sur la carte.",
  ],
  rtl: [
    "La géométrie ne se retourne pas ; seuls les textes (libellés, légende) suivent la locale et la direction d'écriture.",
    "Les noms de régions sont fournis en arabe, amazighe, français et anglais ; les noms amazighs attendent une relecture par un locuteur natif.",
    "Fond de carte : geoBoundaries (gbOpen, MAR ADM1), licence ODbL 1.0, simplifié pour l'affichage.",
  ],
  examples: [
    { slug: "picker", title: "Sélecteur de région", description: "Carte contrôlée avec numéros de région et légende dynamique.", minHeight: 520 },
    { slug: "choropleth", title: "Carte choroplèthe", description: "Un indicateur par région, cinq paliers dans la couleur primaire, légende automatique.", minHeight: 520 },
    { slug: "static", title: "Illustration", description: "Carte non interactive avec noms de régions, pour une page institutionnelle.", minHeight: 560 },
  ],
  props: [
    {
      component: "MoroccoMap",
      items: [
        { name: "value", type: "MoroccoRegionId | null", description: "Région sélectionnée (contrôlé)." },
        { name: "defaultValue", type: "MoroccoRegionId | null", default: "null", description: "Région sélectionnée par défaut (non contrôlé)." },
        { name: "onValueChange", type: "(id, region) => void", description: "Appelé à la sélection ; un second clic désélectionne (id = null)." },
        { name: "values", type: "Partial<Record<MoroccoRegionId, number>>", description: "Valeur numérique par région, rendue en cinq paliers de la couleur primaire." },
        { name: "formatValue", type: "(value, region) => ReactNode", description: "Formatage des valeurs (par défaut Intl.NumberFormat de la locale)." },
        { name: "labels", type: '"none" | "code" | "name"', default: "none", description: "Texte imprimé dans chaque région. Les noms ne tiennent qu'en grande taille." },
        { name: "interactive", type: "boolean", default: "true si onValueChange", description: "Rend les régions focusables et cliquables." },
        { name: "caption", type: "boolean", default: "true", description: "Légende vivante sous la carte (région survolée ou sélectionnée)." },
        { name: "legend", type: "boolean", default: "true", description: "Échelle des paliers quand `values` est fourni." },
      ],
    },
    {
      component: "moroccoRegions",
      items: [
        { name: "id", type: "MoroccoRegionId", description: "Identifiant stable (ex. `casablanca-settat`)." },
        { name: "code", type: "string", description: "Numéro officiel de la région, 01 à 12." },
        { name: "name", type: "Record<Locale, string>", description: "Nom dans les quatre locales." },
        { name: "capital", type: "string", description: "Chef-lieu de la région." },
      ],
    },
  ],
  related: ["select", "key-figure", "table"],
};

export default meta;
