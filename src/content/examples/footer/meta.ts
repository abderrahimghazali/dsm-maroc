import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "footer",
  title: "Pied de page",
  titleAr: "تذييل الصفحة",
  titleEn: "Footer",
  description:
    "Le pied de page rappelle l'identité de l'entité, relie vers l'écosystème des sites officiels et regroupe les liens secondaires (mentions légales, accessibilité, contact). Il porte aussi les réseaux sociaux et la licence des contenus.",
  category: "mise-en-page",
  file: "src/dsm/components/footer.tsx",
  when: [
    "Reprenez le bloc marque et le nom de l'entité dans le pied de page, en plus grand que dans l'en-tête (`size=\"lg\"`).",
    "Listez les sites officiels associés (`ecosystem`) pour aider l'utilisateur à distinguer les domaines gouvernementaux légitimes.",
    "Indiquez toujours l'état de conformité accessibilité dans `bottomLinks` (ex. « Accessibilité : partiellement conforme »).",
  ],
  whenNot: [
    "N'utilisez pas le pied de page pour de la navigation primaire : ses liens sont secondaires et moins visibles que ceux de l'en-tête.",
    "Ne dépassez pas trois colonnes de liens : au-delà, la lecture devient difficile sur petit écran.",
  ],
  a11y: [
    "Les colonnes de liens sont regroupées dans un `<nav aria-label=\"Pied de page\">` distinct de la navigation principale de l'en-tête.",
    "Chaque icône de réseau social reçoit un `aria-label` nommant le réseau ; l'icône seule ne porte jamais l'information.",
    "Le lien « Haut de page » cible l'ancre `#top` posée sur le `<body>`, pour un retour clavier rapide en haut de page.",
  ],
  rtl: [
    "Le motif décoratif `dsm-khatam-fade-end` est positionné avec `end-0` : il reste toujours du côté « fin » de la page, quel que soit le sens de lecture.",
    "Les séparateurs verticaux entre les liens du bas de page sont posés avec des marges logiques (`mx-2`) et restent corrects dans les deux sens.",
  ],
  examples: [
    { slug: "default", title: "Pied de page complet", description: "Entité, description, écosystème, colonnes de liens, réseaux sociaux et licence.", wide: true },
    { slug: "minimal", title: "Pied de page minimal", description: "Entité, description et liens légaux, sans colonnes ni réseaux sociaux.", wide: true },
  ],
  props: [
    {
      component: "Footer",
      items: [
        { name: "entity", type: "Partial<Record<Locale, string>>", description: "Nom de l'entité affiché à côté du bloc marque." },
        { name: "description", type: "ReactNode", description: "Court texte de présentation affiché sous le bloc marque." },
        { name: "ecosystem", type: "FooterLink[]", default: "[]", description: "Liens vers les sites officiels partenaires (ex. maroc.ma), affichés en ligne sous la description." },
        { name: "columns", type: "FooterColumn[]", default: "[]", description: "Colonnes de liens secondaires, chacune avec un titre." },
        { name: "bottomLinks", type: "FooterLink[]", default: "[]", description: "Liens légaux affichés en bas de page, séparés par un trait vertical." },
        { name: "social", type: "{ label: string; href: string; icon: ReactNode }[]", default: "[]", description: "Icônes de réseaux sociaux ; l'icône doit provenir de `@/dsm/icons`." },
        { name: "license", type: "ReactNode", description: "Mention de licence des contenus, affichée en dernière ligne du pied de page." },
        { name: "extra", type: "ReactNode", description: "Emplacement libre au-dessus de la barre du bas (newsletter, partenaires…)." },
        { name: "homeHref", type: "string", default: "/", description: "Cible du bloc marque." },
        { name: "backToTop", type: "boolean", default: "true", description: "Affiche le lien de retour en haut de page." },
        { name: "className", type: "string", description: "Classes Tailwind supplémentaires." },
      ],
    },
  ],
  related: ["header", "block-mark"],
};

export default meta;
