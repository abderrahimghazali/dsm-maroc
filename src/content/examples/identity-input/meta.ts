import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "identity-input",
  title: "Identifiants nationaux",
  titleAr: "المعرفات الوطنية",
  titleEn: "Identity input",
  description:
    "Un champ pour les identifiants que demandent les démarches marocaines — CNIE, ICE, RIB, téléphone — qui filtre les caractères, met en forme pendant la saisie et valide la structure (et la clé du RIB). Les fonctions de validation sont exportées séparément pour le serveur.",
  category: "formulaires",
  status: "beta",
  file: "src/dsm/components/identity-input.tsx",
  when: [
    "Utilisez `kind=\"cnie\"` pour la carte nationale d'identité électronique : une ou deux lettres puis 5 à 7 chiffres, capitalisées automatiquement.",
    "Utilisez `kind=\"ice\"` (15 chiffres) et `kind=\"rib\"` (24 chiffres, clé vérifiée) dans les démarches entreprises et les remboursements.",
    "Utilisez `kind=\"phone\"` pour un numéro national à 10 chiffres ; un numéro collé au format +212 ou 00212 est converti.",
    "Validez aussi côté serveur avec `validateIdentity` de `@/dsm/lib/identity` : le composant ne remplace pas la vérification du dossier.",
  ],
  whenNot: [
    "N'utilisez pas ce champ pour un identifiant dont le format n'est pas garanti (numéros de dossier, références internes) : utilisez `Input`.",
    "Ne masquez pas le numéro saisi (pas de type password) : l'usager doit pouvoir relire son identifiant.",
  ],
  a11y: [
    "Le champ hérite du câblage de `Field` (libellé, indication, message d'erreur, `aria-invalid`).",
    "La validation ne se déclenche qu'à la sortie du champ (`validateOnBlur`), jamais pendant la frappe, pour ne pas annoncer une erreur prématurée.",
    "Le clavier adapté est demandé sur mobile (`inputMode` numérique ou téléphone).",
  ],
  rtl: [
    "Les identifiants sont toujours affichés de gauche à droite (`dir=\"ltr\"`) même dans une interface en arabe ; c'est le sens dans lequel ils sont imprimés sur les documents.",
    "Les messages d'erreur existent dans les quatre locales via `identityErrorMessage(kind, t)`.",
  ],
  examples: [
    { slug: "default", title: "Les quatre identifiants", description: "CNIE, ICE, RIB et téléphone, avec validation à la sortie du champ et message d'erreur traduit." },
    { slug: "controlled", title: "Contrôlé, avec validité en direct", description: "La valeur normalisée et l'état de validité remontent par `onValueChange`." },
  ],
  props: [
    {
      component: "IdentityInput",
      items: [
        { name: "kind", type: '"cnie" | "ice" | "rib" | "phone"', required: true, description: "Type d'identifiant : filtrage, format, validation et clavier mobile en dépendent." },
        { name: "value", type: "string", description: "Valeur normalisée (lettres et chiffres uniquement), contrôlée." },
        { name: "defaultValue", type: "string", description: "Valeur initiale (non contrôlé)." },
        { name: "onValueChange", type: "(raw, { complete, valid, formatted }) => void", description: "Appelé à chaque frappe avec la valeur normalisée et son état de validité." },
        { name: "validateOnBlur", type: "boolean", default: "true", description: "Marque le champ invalide à la sortie si la valeur est incomplète ou incorrecte." },
        { name: "invalid", type: "boolean", description: "Force l'état invalide (prend le pas sur la validation interne)." },
        { name: "…InputProps", type: "InputProps", description: "Taille, icônes, addons et attributs natifs de `Input`." },
      ],
    },
    {
      component: "@/dsm/lib/identity",
      items: [
        { name: "validateIdentity(kind, raw)", type: "{ complete, valid }", description: "Validation pure, utilisable côté serveur." },
        { name: "formatIdentity(kind, raw)", type: "string", description: "Mise en forme conventionnelle (groupes de chiffres)." },
        { name: "normalizeIdentity(kind, input)", type: "string", description: "Ne garde que les caractères admis, en forme canonique." },
        { name: "toInternationalPhone(raw)", type: "string", description: "« 0612345678 » → « +212612345678 »." },
      ],
    },
  ],
  related: ["input", "field", "otp-field"],
};

export default meta;
