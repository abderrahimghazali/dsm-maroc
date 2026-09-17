import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "switch",
  title: "Interrupteur",
  titleAr: "مفتاح تبديل",
  titleEn: "Switch",
  description:
    "Bascule immédiate d'un réglage entre deux états (activé/désactivé). Contrairement à une case à cocher, l'interrupteur suggère un effet instantané plutôt qu'une sélection à valider avec le reste d'un formulaire.",
  category: "formulaires",
  file: "src/dsm/components/switch.tsx",
  when: [
    "Utilisez `Switch` pour un réglage qui prend effet immédiatement, sans bouton de validation (notifications, mode sombre, visibilité d'une information).",
    "Placez le libellé après l'interrupteur (`labelPosition=\"end\"`, par défaut) dans une liste de réglages alignés à gauche.",
    "Utilisez `labelPosition=\"start\"` dans une ligne de tableau ou une carte où le libellé doit rester collé au bord de début.",
  ],
  whenNot: [
    "N'utilisez pas `Switch` dans un formulaire classique validé par un bouton « Envoyer » : une case à cocher (`Checkbox`) est plus cohérente avec ce modèle.",
    "N'utilisez pas `Switch` pour un choix parmi plus de deux options.",
  ],
  a11y: [
    "Le libellé enveloppe l'interrupteur : toute la ligne est cliquable, pas seulement le petit rail.",
    "L'état est exposé nativement (rôle switch), annoncé « activé »/« désactivé » par les lecteurs d'écran.",
  ],
  rtl: [
    "Le curseur glisse avec `translate-x` combiné à `rtl:-translate-x`, ce qui inverse correctement le sens du mouvement en arabe.",
  ],
  examples: [
    { slug: "default", title: "Simple", description: "Interrupteurs avec libellé et aide, coché et non coché." },
    { slug: "sizes", title: "Tailles", description: "Les deux tailles disponibles : sm et md." },
    { slug: "label-position", title: "Position du libellé", description: "Libellé avant ou après le rail, utile dans une liste de réglages." },
  ],
  props: [
    {
      component: "Switch",
      items: [
        { name: "label", type: "ReactNode", description: "Libellé affiché à côté du rail." },
        { name: "hint", type: "ReactNode", description: "Texte secondaire sous le libellé." },
        { name: "size", type: '"sm" | "md"', default: "md", description: "Taille du rail et du curseur." },
        { name: "labelPosition", type: '"start" | "end"', default: "end", description: "Position du libellé par rapport au rail." },
        { name: "checked / defaultChecked / onCheckedChange", type: "boolean", description: "Contrôle ou observe l'état activé." },
      ],
    },
  ],
  related: ["checkbox", "field"],
};

export default meta;
