import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "otp-field",
  title: "Code de vérification",
  titleAr: "رمز التحقق",
  titleEn: "OTP field",
  description:
    "Saisie segmentée d'un code de vérification à usage unique (SMS, e-mail ou identité numérique). Chaque chiffre occupe sa propre case, avec navigation automatique et prise en charge du collage d'un code complet.",
  category: "formulaires",
  file: "src/dsm/components/otp-field.tsx",
  when: [
    "Utilisez `OtpField` pour tout code de vérification envoyé par SMS ou e-mail lors d'une authentification à deux facteurs ou de la validation d'un numéro de téléphone.",
    "Adaptez `length` à la longueur réelle du code envoyé par votre fournisseur d'identité numérique (souvent 6 chiffres).",
  ],
  whenNot: [
    "N'utilisez pas `OtpField` pour un code que l'usager choisit lui-même (mot de passe, code PIN personnel) : préférez `PasswordInput` ou plusieurs `Input`.",
  ],
  a11y: [
    "Seule la première case porte l'association avec le libellé visible ; les suivantes reçoivent un `aria-label` positionnel (« Chiffre 2 sur 6 ») pour rester compréhensibles au clavier.",
    "Le collage d'un code complet dans n'importe quelle case répartit automatiquement les chiffres dans les cases suivantes.",
  ],
  rtl: [
    "Les chiffres restent affichés de gauche à droite au sein de chaque case (`tabular-nums`) ; seul l'ordre des cases suit le sens de lecture du document.",
  ],
  examples: [
    { slug: "default", title: "Simple", description: "Code à 6 chiffres avec aide contextuelle." },
    { slug: "states", title: "États", description: "Code en erreur et champ désactivé." },
  ],
  props: [
    {
      component: "OtpField",
      items: [
        { name: "length", type: "number", default: "6", description: "Nombre de cases (et de chiffres attendus)." },
        { name: "label", type: "ReactNode", required: true, description: "Libellé visible au-dessus des cases." },
        { name: "hint", type: "ReactNode", description: "Texte d'aide, par exemple l'origine de l'envoi du code." },
        { name: "invalid / error", type: "boolean / ReactNode", description: "Bascule le style d'erreur ; `error` affiche en plus le message sous les cases." },
        { name: "value / defaultValue / onValueChange", type: "string", description: "Contrôle ou observe le code saisi." },
      ],
    },
  ],
  related: ["input", "field"],
};

export default meta;
