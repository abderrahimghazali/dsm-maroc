import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "tabs",
  title: "Onglets",
  titleAr: "علامات التبويب",
  titleEn: "Tabs",
  description:
    "Les onglets basculent entre plusieurs panneaux liés sur une même page, sans rechargement. Le curseur (`Tabs.Indicator`) glisse vers l'onglet actif ; la navigation au clavier (flèches, Origine/Fin) est fournie par Base UI.",
  category: "navigation",
  file: "src/dsm/components/tabs.tsx",
  when: [
    "Utilisez les onglets pour regrouper des contenus de même niveau et de même nature (ex. « Documents requis », « Délais et tarifs », « Où déposer »).",
    "Choisissez la variante `pills` dans un encart ou une barre d'outils compacte, `underline` pour une section de page pleine largeur.",
  ],
  whenNot: [
    "N'utilisez pas les onglets pour une séquence à suivre dans l'ordre (étapes d'une démarche) : utilisez plutôt `Steps`.",
    "Ne masquez pas d'information essentielle uniquement derrière un onglet non actif : un lecteur pressé ne doit rien manquer d'important.",
  ],
  a11y: [
    "Les rôles `tablist`/`tab`/`tabpanel` et la navigation au clavier (flèches gauche/droite, Origine, Fin) sont gérés par Base UI.",
    "Chaque panneau reste focusable (`tabIndex`) et reçoit un anneau de focus visible.",
  ],
  rtl: [
    "L'indicateur glissant se positionne à partir de mesures de pixels déjà cohérentes avec l'inversion visuelle du conteneur flex en RTL : aucune classe `rtl:` n'est nécessaire.",
    "Le sens de navigation au clavier (flèche gauche/droite) s'inverse automatiquement avec le sens de lecture.",
  ],
  examples: [
    { slug: "underline", title: "Variante soulignée", description: "Le trait glissant, sous les onglets — variante par défaut." },
    { slug: "pills", title: "Variante pilules", description: "Un fond glissant sur onglets arrondis, pour un encart compact." },
    { slug: "with-icons", title: "Avec icônes", description: "Une icône avant chaque libellé d'onglet." },
    { slug: "demarche-details", title: "Fiche démarche", description: "Trois onglets pour organiser la fiche d'une démarche administrative." },
  ],
  props: [
    { component: "Tabs", items: [{ name: "defaultValue", type: "string | number", description: "Valeur de l'onglet actif par défaut (non contrôlé)." }, { name: "value", type: "string | number", description: "Valeur de l'onglet actif (contrôlé)." }, { name: "onValueChange", type: "(value) => void", description: "Appelé au changement d'onglet." }] },
    { component: "TabsList", items: [{ name: "variant", type: '"underline" | "pills"', default: "underline", description: "Style du groupe d'onglets et de l'indicateur glissant." }, { name: "className", type: "string", description: "Classes Tailwind supplémentaires." }] },
    { component: "Tab", items: [{ name: "value", type: "string | number", required: true, description: "Valeur associée au panneau correspondant." }, { name: "icon", type: "ReactNode", description: "Icône optionnelle affichée avant le libellé." }, { name: "disabled", type: "boolean", description: "Désactive l'onglet." }] },
    { component: "TabPanel", items: [{ name: "value", type: "string | number", required: true, description: "Valeur de l'onglet dont ce panneau dépend." }, { name: "className", type: "string", description: "Classes Tailwind supplémentaires." }] },
  ],
  related: ["side-menu", "pagination"],
};

export default meta;
