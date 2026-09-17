export type ComponentCategory =
  | "mise-en-page"
  | "actions"
  | "formulaires"
  | "navigation"
  | "contenu"
  | "retours"
  | "overlays";

export const categoryLabels: Record<ComponentCategory, string> = {
  "mise-en-page": "Mise en page",
  actions: "Actions",
  formulaires: "Formulaires",
  navigation: "Navigation",
  contenu: "Contenu",
  retours: "Retours & statut",
  overlays: "Superpositions",
};

export type PropDoc = {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
};

export type ExampleDoc = {
  /** File name without extension in `src/content/examples/<component>/` */
  slug: string;
  title: string;
  description?: string;
  /** Render the preview on the inverse (dark) surface */
  inverse?: boolean;
  /** Let the preview span the full width instead of centring the example */
  wide?: boolean;
  /** Minimum preview height in px (for overlays, drawers…) */
  minHeight?: number;
};

export type ComponentMeta = {
  /** URL slug, matches the folder name */
  slug: string;
  title: string;
  /** Arabic name, shown as a secondary title */
  titleAr?: string;
  /** English name */
  titleEn?: string;
  description: string;
  category: ComponentCategory;
  status?: "stable" | "beta";
  /** Source file, relative to project root */
  file: string;
  /** When to use / when not to use — short imperative sentences (French) */
  when?: string[];
  whenNot?: string[];
  /** Accessibility notes (French) */
  a11y?: string[];
  /** RTL / multilingual notes (French) */
  rtl?: string[];
  examples: ExampleDoc[];
  props?: { component: string; items: PropDoc[] }[];
  /** Slugs of related components */
  related?: string[];
};
