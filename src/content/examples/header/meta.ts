import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "header",
  title: "En-tête",
  titleAr: "الترويسة",
  titleEn: "Header",
  description:
    "L'en-tête identifie le site, expose la recherche et l'accès au compte, et porte la navigation principale — y compris les méga-menus pour les rubriques riches. Il gère lui-même son adaptation mobile (tiroir de navigation) et l'ouverture de la recherche.",
  category: "mise-en-page",
  file: "src/dsm/components/header.tsx",
  when: [
    "Utilisez l'en-tête complet (avec `nav` et `search`) sur le site public ; ajoutez `featured` à une entrée pour mettre en avant une démarche phare dans son méga-menu.",
    "Renseignez `entity` pour ancrer le service à l'administration qui le porte, en plus du bloc marque national.",
    "Activez `sticky` sur les pages longues où l'accès à la recherche ou à la connexion doit rester disponible pendant le défilement.",
  ],
  whenNot: [
    "N'utilisez pas la version minimale (sans `nav` ni `search`) sur le site public : réservez-la aux parcours dédiés (paiement, authentification) où la navigation distrairait l'utilisateur.",
    "Ne dépassez pas une poignée d'entrées de premier niveau : au-delà, regroupez les rubriques dans un méga-menu plutôt que d'allonger la barre de navigation.",
  ],
  a11y: [
    "Le lien d'évitement (`SkipLinks`) précède tout le reste du DOM et permet de sauter directement au contenu, à la navigation ou au pied de page.",
    "Le tiroir mobile (`Drawer`) piège le focus et se ferme au clavier (Échap) grâce aux primitives Base UI.",
    "Le bouton de recherche mobile bascule `aria-expanded` et son icône, pour annoncer l'état ouvert/fermé aux technologies d'assistance.",
  ],
  rtl: [
    "Le tiroir mobile s'ouvre du côté « fin » de la page : `swipeDirection` s'inverse automatiquement en RTL.",
    "Le chevron des menus déroulants (`ChevronDown`) ne se retourne jamais — seule sa rotation à l'ouverture change ; les flèches de méga-menu (`ChevronForward`) suivent, elles, le sens de lecture.",
  ],
  examples: [
    {
      slug: "default",
      title: "En-tête complet",
      description:
        "Bloc marque, service, recherche, connexion et navigation avec méga-menu mis en avant. Le composant accepte aussi une prop `sticky` pour rester visible au défilement — désactivée ici pour ne pas capturer le défilement de la page de documentation.",
      wide: true,
      minHeight: 200,
    },
    {
      slug: "minimal",
      title: "En-tête minimal",
      description: "Sans navigation ni recherche, pour un parcours dédié (authentification, paiement).",
      wide: true,
      minHeight: 200,
    },
  ],
  props: [
    {
      component: "Header",
      items: [
        { name: "entity", type: "Partial<Record<Locale, string>>", description: "Nom de l'entité affiché dans le bloc marque de l'en-tête." },
        { name: "service", type: "{ title: string; tagline?: string; href?: string }", description: "Nom (et sous-titre) du service, affiché à côté du bloc marque à partir de `md`." },
        { name: "nav", type: "NavItem[]", default: "[]", description: "Entrées de navigation principale ; une entrée avec `children` devient un méga-menu, avec `featured` pour l'encart mis en avant." },
        { name: "localeLinks", type: "Partial<Record<Locale, string>>", description: "URL par langue ; affiche le sélecteur de langue uniquement quand cette prop est fournie." },
        { name: "search", type: "{ action?: string; onSubmit?: (query: string) => void } | false", default: "{}", description: "Configuration du champ de recherche ; passez `false` pour le masquer entièrement." },
        { name: "login", type: "{ label?: string; href: string } | false", default: "false", description: "Bouton de connexion affiché à droite de l'en-tête." },
        { name: "tools", type: "ReactNode", description: "Emplacement pour des outils additionnels, affichés avant le sélecteur de langue." },
        { name: "themeToggle", type: "boolean", default: "true", description: "Affiche ou masque le sélecteur de thème clair/sombre/système." },
        { name: "sticky", type: "boolean", default: "false", description: "Fixe l'en-tête en haut de la fenêtre lors du défilement." },
        { name: "homeHref", type: "string", default: "/", description: "Cible du bloc marque et du lien du service." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["footer", "block-mark", "language-switcher", "theme-toggle"],
};

export default meta;
