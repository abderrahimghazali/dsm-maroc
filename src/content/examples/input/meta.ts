import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "input",
  title: "Champ de texte",
  titleAr: "حقل نصي",
  titleEn: "Text input",
  description:
    "Contrôle de saisie de texte natif partagé par tous les formulaires du DSM : bordure, focus, états invalide et désactivé sont cohérents entre `Input`, `Textarea` et `PasswordInput`. Icônes et affixes textuels (« MAD », « +212 ») s'insèrent sans casser l'alignement du texte.",
  category: "formulaires",
  file: "src/dsm/components/input.tsx",
  when: [
    "Utilisez `Input` pour toute saisie sur une ligne : texte, nombre, e-mail, téléphone, recherche simple.",
    "Utilisez `addonStart`/`addonEnd` pour un préfixe ou suffixe textuel fixe (unité, indicatif) plutôt que de l'inclure dans le `placeholder`.",
    "Utilisez `Textarea` pour un texte libre de plusieurs lignes, avec `maxLength` si le champ alimente un système ayant une limite de caractères.",
    "Utilisez `PasswordInput` pour tout mot de passe ou code secret afin d'offrir le bouton d'affichage/masquage.",
  ],
  whenNot: [
    "N'utilisez pas `Input` pour un choix parmi une liste fermée : préférez `Select` ou `RadioGroup`.",
    "Ne mettez pas d'information obligatoire uniquement dans le `placeholder` : elle disparaît dès la saisie, utilisez `Field` avec `hint` ou `required`.",
  ],
  a11y: [
    "Toujours envelopper le contrôle dans `Field` (ou lui fournir un `<label>` explicite) : `Input` seul n'a pas de nom accessible.",
    "L'anneau de focus est déplacé sur le conteneur du champ (pas sur le texte) afin de rester net même avec des icônes ou affixes.",
    "`Textarea` annonce le compteur de caractères restants avec `aria-live=\"polite\"`, sans interrompre la saisie.",
    "`PasswordInput` porte un `aria-label` explicite (« Afficher/Masquer le mot de passe ») sur le bouton bascule, jamais une icône seule sans texte alternatif.",
  ],
  rtl: [
    "Les paddings utilisent `ps-*`/`pe-*` : les icônes et affixes changent de côté automatiquement en arabe.",
    "Les bordures d'affixe utilisent `border-s`/`border-e`, jamais `border-l`/`border-r`.",
  ],
  examples: [
    { slug: "default", title: "Champ simple et affixes", description: "Saisie de base, puis avec un affixe textuel (« MAD », « +212 »)." },
    { slug: "sizes", title: "Tailles", description: "Les trois hauteurs disponibles : sm, md, lg." },
    { slug: "states", title: "États", description: "Invalide, désactivé et lecture seule." },
    { slug: "textarea-password", title: "Zone de texte et mot de passe", description: "`Textarea` avec compteur de caractères et `PasswordInput` avec bascule de visibilité." },
  ],
  props: [
    {
      component: "Input",
      items: [
        { name: "size", type: '"sm" | "md" | "lg"', default: "md", description: "Hauteur du champ : 36px, 44px ou 52px." },
        { name: "invalid", type: "boolean", description: "Applique l'anneau et le focus en ton d'erreur." },
        { name: "iconStart / iconEnd", type: "ReactNode", description: "Icône décorative insérée avant ou après le texte." },
        { name: "addonStart / addonEnd", type: "ReactNode", description: "Affixe textuel dans un encart teinté (unité, indicatif téléphonique…)." },
        { name: "disabled / readOnly", type: "boolean", description: "États standards du champ natif, stylés de façon cohérente." },
      ],
    },
    {
      component: "Textarea",
      items: [
        { name: "rows", type: "number", default: "4", description: "Nombre de lignes visibles initialement." },
        { name: "maxLength", type: "number", description: "Active un compteur « n caractères restants » sous le champ." },
        { name: "invalid", type: "boolean", description: "Applique l'anneau en ton d'erreur." },
      ],
    },
    {
      component: "PasswordInput",
      items: [
        { name: "…", type: "InputProps", description: "Accepte toutes les props d'`Input` sauf `type` et `iconEnd`, réservées à la bascule de visibilité." },
      ],
    },
  ],
  related: ["field", "search-bar", "otp-field"],
};

export default meta;
