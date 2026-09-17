import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "language-switcher",
  title: "Sélecteur de langue",
  titleAr: "محول اللغة",
  titleEn: "Language switcher",
  description:
    "Le sélecteur de langue permet de basculer entre les langues officielles du site sans perdre le contexte de la page courante. Il s'appuie sur un menu accessible et affiche la langue courante en abrégé ou sous forme d'icône.",
  category: "navigation",
  file: "src/dsm/components/language-switcher.tsx",
  when: [
    "Placez un seul sélecteur de langue par page, dans l'en-tête, à côté des autres outils.",
    "Fournissez `links` avec l'URL équivalente dans chaque langue, pour rester sur le même contenu après le changement.",
    "Restreignez `available` si une page n'existe pas encore dans toutes les langues officielles.",
  ],
  whenNot: [
    "N'utilisez pas ce composant pour changer un réglage autre que la langue (thème clair/sombre) : utilisez `ThemeToggle`.",
    "Ne masquez pas la langue courante de la liste déroulante : l'utilisateur doit voir où il se trouve.",
  ],
  a11y: [
    "Le déclencheur porte un `aria-label` (« Choisir la langue ») car son contenu visible peut se limiter à une icône ou à un code de langue.",
    "Chaque option précise sa propre langue (`lang`) et son sens de lecture (`dir`), pour une prononciation correcte par les lecteurs d'écran.",
    "La langue active est cochée (`Check`) dans le menu, en plus d'être annoncée par son libellé natif.",
  ],
  rtl: [
    "Le menu s'ouvre et s'aligne selon le sens de lecture courant, piloté par le `DirectionProvider` global — aucun réglage RTL manuel n'est nécessaire.",
  ],
  examples: [
    { slug: "default", title: "Par défaut", description: "Menu avec libellé (code de langue) et coche sur la langue active." },
    { slug: "icon", title: "Variante icône", description: "Déclencheur réduit à l'icône du globe, pour un en-tête compact." },
    { slug: "restricted", title: "Langues restreintes", description: "Un service qui n'existe encore qu'en français et en arabe." },
  ],
  props: [
    {
      component: "LanguageSwitcher",
      items: [
        { name: "links", type: "Partial<Record<Locale, string>>", description: "URL par langue ; sans cette prop, utilisez `onChange` pour un changement côté client." },
        { name: "onChange", type: "(locale: Locale) => void", description: "Appelé avec la langue choisie lorsque `links` n'est pas fourni." },
        { name: "available", type: "Locale[]", default: "toutes les langues", description: "Restreint les langues proposées dans le menu." },
        { name: "variant", type: '"icon" | "label"', default: "label", description: "« label » affiche le code de la langue courante à côté de l'icône ; « icon » n'affiche que le globe." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["header", "theme-toggle"],
};

export default meta;
