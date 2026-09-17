import type { ComponentMeta } from "@/content/types";

const meta: ComponentMeta = {
  slug: "avatar",
  title: "Avatar",
  titleAr: "الصورة الرمزية",
  titleEn: "Avatar",
  description:
    "L'avatar représente une personne ou un agent : photo si disponible, sinon initiales sur un fond de couleur douce choisi de façon stable à partir du nom. `AvatarGroup` superpose plusieurs avatars, par exemple les agents affectés à un dossier.",
  category: "contenu",
  file: "src/dsm/components/avatar.tsx",
  when: [
    "Utilisez `name` pour garantir un repli lisible (initiales) même sans photo ou en cas d'échec de chargement.",
    "Utilisez `AvatarGroup` avec `max` pour représenter une équipe ou plusieurs intervenants sans surcharger l'interface.",
  ],
  whenNot: [
    "N'utilisez pas l'avatar seul pour transmettre un statut (en ligne, absent) : associez-le à un `Badge` ou un texte explicite.",
    "Ne comptez pas sur la couleur de repli pour identifier une personne de façon fiable : elle est décorative, pas signifiante.",
  ],
  a11y: [
    "Fournissez toujours `alt` (ou `name`, réutilisé comme alternative) pour que l'image ait un texte de remplacement pertinent.",
    "Le repli en initiales attend la fin du chargement de l'image (`delay`) avant de s'afficher, pour éviter un scintillement.",
  ],
  rtl: [
    "Dans `AvatarGroup`, le chevauchement utilise une marge logique (`-ms-2.5`) : les avatars se chevauchent du bon côté quel que soit le sens de lecture.",
  ],
  examples: [
    { slug: "default", title: "Tailles", description: "De xs à xl, en initiales." },
    { slug: "with-image", title: "Avec photo", description: "Repli automatique en initiales si l'image échoue." },
    { slug: "group", title: "Groupe", description: "Agents affectés à un dossier, avec dépassement." },
  ],
  props: [
    {
      component: "Avatar",
      items: [
        { name: "src", type: "string", description: "URL de la photo." },
        { name: "alt", type: "string", description: "Texte alternatif ; par défaut, reprend `name`." },
        { name: "name", type: "string", description: "Nom complet, utilisé pour les initiales et la couleur de repli." },
        { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: "md", description: "Taille de l'avatar." },
        { name: "shape", type: '"circle" | "square"', default: "circle", description: "Forme du cadre." },
      ],
    },
    {
      component: "AvatarGroup",
      items: [
        { name: "max", type: "number", description: "Nombre d'avatars affichés avant le badge « +N »." },
        { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: "md", description: "Taille appliquée à tous les avatars du groupe." },
        { name: "children", type: "ReactElement<AvatarProps> | ReactElement<AvatarProps>[]", description: "Les `Avatar` à superposer." },
      ],
    },
  ],
  related: ["badge"],
};

export default meta;
