import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "card",
  title: "Carte",
  titleAr: "بطاقة",
  titleEn: "Card",
  description:
    "La carte présente un contenu autonome — démarche, institution, actualité — avec un titre, un court texte et une action. Elle se compose librement à partir de sous-composants (média, corps, titre, texte, badges, pied) selon le besoin.",
  category: "contenu",
  file: "src/dsm/components/card.tsx",
  when: [
    "Utilisez une carte pour présenter une démarche, une actualité ou une institution avec un titre et une description courte.",
    "Passez `href` à `CardTitle` pour transformer toute la carte en zone cliquable (lien enrichi) et activez `interactive` sur `Card`.",
    "Utilisez la variante `inverse` avec parcimonie, pour un chiffre clé ou un encart mis en avant.",
  ],
  whenNot: [
    "N'imbriquez pas un second lien ou bouton dans une carte dont le titre est déjà un lien : les zones cliquables se chevaucheraient.",
    "N'utilisez pas une carte pour un simple élément de liste dense : un composant de liste ou un tableau convient mieux à des rangées nombreuses.",
  ],
  a11y: [
    "Le lien enrichi (`CardTitle` avec `href`) pose un pseudo-élément `::after` en position absolue : vérifiez qu'aucun autre élément interactif ne se trouve dans la carte.",
    "Le focus visible de la carte entière est piloté par `:focus-visible` sur le lien du titre, avec un anneau et un décalage (`ring-offset`).",
  ],
  rtl: [
    "La flèche de `CardArrow` est `ArrowForward` : elle pointe naturellement vers la fin de la ligne de lecture et se retourne en arabe.",
    "En orientation `horizontal`, le média occupe toujours le début (`start`) de la carte, quel que soit le sens de lecture.",
  ],
  examples: [
    { slug: "default", title: "Carte par défaut", description: "Carte interactive avec média, métadonnée, titre lien et badge de statut." },
    { slug: "variants", title: "Variantes", description: "Les cinq styles de fond : défaut, teinté, contouré, discret et inversé." },
    { slug: "horizontal", title: "Orientation horizontale", description: "Média à côté du contenu à partir du format `sm`." },
    { slug: "grid", title: "Grille de démarches", description: "Trois démarches avec badges de statut et flèche d'action." },
    { slug: "informational", title: "Carte informative", description: "Carte non interactive, sans lien ni flèche, pour un contenu de repère." },
  ],
  props: [
    {
      component: "Card",
      items: [
        { name: "variant", type: '"default" | "tinted" | "outlined" | "ghost" | "inverse"', default: "default", description: "Style de fond et de bordure de la carte." },
        { name: "orientation", type: '"vertical" | "horizontal"', default: "vertical", description: "En `horizontal`, le média et le corps se placent côte à côte à partir de `sm`." },
        { name: "interactive", type: "boolean", default: "false", description: "Active les états de survol/focus (ombre, bordure, anneau) ; à activer quand la carte contient un lien enrichi." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
    { component: "CardMedia", items: [{ name: "className", type: "string", description: "Conteneur du média (image, illustration, dégradé) ; ratio 16/9 par défaut, largeur 2/5 en orientation horizontale à partir de `sm`." }] },
    { component: "CardBody", items: [{ name: "className", type: "string", description: "Zone de contenu de la carte, avec un espacement vertical constant." }] },
    { component: "CardMeta", items: [{ name: "className", type: "string", description: "Étiquette courte au-dessus du titre (catégorie, coût, type de démarche)." }] },
    {
      component: "CardTitle",
      items: [
        { name: "href", type: "string", description: "Transforme le titre en lien et agrandit la zone cliquable à toute la carte (lien enrichi)." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
    { component: "CardText", items: [{ name: "className", type: "string", description: "Texte de description, limité à quelques lignes." }] },
    { component: "CardBadges", items: [{ name: "className", type: "string", description: "Conteneur pour un ou plusieurs badges de statut, avec retour à la ligne automatique." }] },
    { component: "CardFooter", items: [{ name: "className", type: "string", description: "Pied de carte ; aligne son contenu en fin de carte grâce à `mt-auto`." }] },
    {
      component: "CardArrow",
      items: [
        { name: "label", type: "ReactNode", description: "Libellé optionnel affiché avant la flèche (ex. « Consulter »)." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["badge", "button"],
};

export default meta;
