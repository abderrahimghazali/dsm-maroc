import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "field",
  title: "Champ",
  titleAr: "حقل",
  titleEn: "Field",
  description:
    "Le champ associe une étiquette, une aide et un message d'erreur à un contrôle de saisie (Input, Select, Textarea…). Il gère l'astérisque d'obligation, la mention « facultatif » et le lien accessible entre le libellé, l'aide et l'erreur. `Fieldset` fait le même travail pour un groupe de contrôles derrière une légende native.",
  category: "formulaires",
  file: "src/dsm/components/field.tsx",
  when: [
    "Enveloppez tout contrôle de saisie unique (Input, Select, Textarea, PasswordInput) dans `Field` pour obtenir gratuitement le libellé, l'aide et l'erreur alignés.",
    "Passez `required` pour les champs obligatoires — l'astérisque est visuel, le mot « obligatoire » est annoncé aux lecteurs d'écran.",
    "Utilisez `Fieldset` pour regrouper plusieurs contrôles sous une légende unique (utilisé en interne par `RadioGroup` et `CheckboxGroup`).",
  ],
  whenNot: [
    "N'utilisez pas `Field` pour un interrupteur ou une case seule : `Switch` et `Checkbox` portent déjà leur propre libellé collé au contrôle.",
    "Ne dupliquez pas le message d'erreur dans le `hint` : l'erreur remplace l'aide dans le flux de lecture, elle ne s'y ajoute pas visuellement.",
  ],
  a11y: [
    "Le contrôle enfant reçoit automatiquement `id`, `aria-invalid` et `aria-describedby` (aide + erreur) : aucune prop à répéter manuellement.",
    "Le message d'erreur porte `role=\"alert\"` et une icône `CircleAlert`, pour ne jamais reposer uniquement sur la couleur.",
    "`FieldLabel`, `FieldHint` et `FieldError` restent disponibles séparément pour composer une mise en page personnalisée sans perdre les mêmes garanties.",
  ],
  rtl: [
    "L'astérisque d'obligation et l'aide suivent le sens de lecture par défaut du navigateur ; aucune classe directionnelle n'est nécessaire.",
    "`Fieldset` utilise une `<legend>` native, qui s'aligne au début de lecture automatiquement en arabe.",
  ],
  examples: [
    { slug: "default", title: "Champ simple", description: "Un `Input` étiqueté, avec aide et astérisque d'obligation." },
    { slug: "states", title: "États", description: "Champ facultatif, champ en erreur et champ désactivé." },
    {
      slug: "formulaire-acte-naissance",
      title: "Formulaire complet",
      description: "Une demande d'extrait d'acte de naissance combinant Field, Input, Select, RadioGroup, Checkbox, DateInput et FileUpload.",
      wide: true,
    },
  ],
  props: [
    {
      component: "Field",
      items: [
        { name: "label", type: "ReactNode", required: true, description: "Libellé du champ, toujours visible." },
        { name: "hint", type: "ReactNode", description: "Texte d'aide affiché avant le contrôle." },
        { name: "error", type: "ReactNode", description: "Message d'erreur affiché après le contrôle ; bascule aussi `aria-invalid` et le style invalide du contrôle." },
        { name: "required", type: "boolean", description: "Ajoute l'astérisque visuel et le mot « obligatoire » lu par les lecteurs d'écran." },
        { name: "optional", type: "boolean", description: "Ajoute la mention « (facultatif) » à côté du libellé." },
        { name: "id", type: "string", description: "Identifiant du contrôle ; généré automatiquement si absent." },
        { name: "children", type: "ReactElement", required: true, description: "Le contrôle unique à étiqueter (Input, Select, Textarea…)." },
      ],
    },
    {
      component: "Fieldset",
      items: [
        { name: "legend", type: "ReactNode", required: true, description: "Légende du groupe, stylée comme un libellé." },
        { name: "hint", type: "ReactNode", description: "Texte d'aide affiché sous la légende." },
        { name: "error", type: "ReactNode", description: "Message d'erreur affiché après les contrôles du groupe." },
        { name: "children", type: "ReactNode", required: true, description: "Les contrôles du groupe." },
      ],
    },
    {
      component: "FieldLabel / FieldHint / FieldError",
      items: [
        { name: "required / optional", type: "boolean", description: "Sur `FieldLabel` uniquement : astérisque ou mention facultative." },
        { name: "children", type: "ReactNode", required: true, description: "Contenu du libellé, de l'aide ou de l'erreur, pour une mise en page personnalisée." },
      ],
    },
  ],
  related: ["input", "select", "checkbox", "radio", "date-input", "file-upload"],
};

export default meta;
