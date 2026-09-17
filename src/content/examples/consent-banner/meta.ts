import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "consent-banner",
  title: "Bandeau de consentement",
  titleAr: "شريط الموافقة على الكوكيز",
  titleEn: "Consent banner",
  description:
    "La demande de consentement aux cookies, ancrée en bas de la fenêtre. Trois actions à poids égal aux yeux du visiteur : tout accepter, tout refuser, ou personnaliser.",
  category: "overlays",
  file: "src/dsm/components/consent-banner.tsx",
  when: [
    "Affichez-le une seule fois par visite, avant tout dépôt de traceur non essentiel.",
    "Utilisez `defaultOpen` pour un usage non contrôlé, ou `open`/`onAccept`/`onRefuse`/`onCustomise` pour piloter l'état depuis un gestionnaire de consentement existant.",
  ],
  whenNot: [
    "Ne bloquez pas l'accès au contenu de la page derrière ce bandeau : il reste non modal, l'utilisateur doit pouvoir continuer à lire pendant qu'il décide.",
  ],
  a11y: [
    "Le bandeau porte `role=\"dialog\"` et `aria-labelledby`, relié à son titre.",
    "Les trois actions sont des boutons de même taille, dans un ordre de lecture cohérent (accepter, refuser, personnaliser) : aucune n'est mise en avant par un piège visuel.",
  ],
  rtl: [
    "Le bandeau est ancré en fin de ligne (`end-6`) à partir du format `sm`, à gauche en arabe, à droite en français.",
  ],
  examples: [
    { slug: "default", title: "Bandeau de consentement", description: "Rendu ici dans un cadre relatif pour ne pas recouvrir la page de documentation.", minHeight: 260 },
  ],
  props: [
    {
      component: "ConsentBanner",
      items: [
        { name: "open", type: "boolean", description: "État ouvert, en mode contrôlé." },
        { name: "defaultOpen", type: "boolean", default: "true", description: "État initial, en mode non contrôlé." },
        { name: "onAccept", type: "() => void", description: "Appelé au clic sur « Tout accepter »." },
        { name: "onRefuse", type: "() => void", description: "Appelé au clic sur « Tout refuser »." },
        { name: "onCustomise", type: "() => void", description: "Appelé au clic sur « Personnaliser » (n'referme pas le bandeau lui-même)." },
      ],
    },
  ],
  related: ["notice"],
};

export default meta;
