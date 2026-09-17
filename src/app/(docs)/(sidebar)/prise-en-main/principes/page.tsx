import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Check, X } from "@/dsm/icons";

export const metadata: Metadata = { title: "Principes" };

type Principle = {
  n: string;
  title: string;
  statement: string;
  concretely: string[];
  dont: string;
  do: string;
};

const principles: Principle[] = [
  {
    n: "01",
    title: "Clarté administrative",
    statement: "Un service public numérique se comprend en un coup d'œil : ce qu'il faut faire, ce qu'il faut fournir, combien de temps ça prend.",
    concretely: [
      "Le titre de page nomme l'action attendue, pas le nom interne du service ou de l'application.",
      "Délais, pièces requises et coûts sont annoncés avant de commencer la démarche, pas découverts en cours de route.",
      "Un seul appel à l'action principal par écran ; le reste est secondaire ou tertiaire.",
    ],
    do: "« Demander un acte de naissance »",
    dont: "« Module ETAT-CIVIL-002 »",
  },
  {
    n: "02",
    title: "Trois langues, une expérience",
    statement: "L'arabe, l'amazighe et le français ne sont pas des traductions ajoutées après coup : ce sont trois manières égales de vivre le même service.",
    concretely: [
      "Aucun texte n'est écrit en dur dans un composant : tout passe par le dictionnaire i18n ou par les props de contenu.",
      "La mise en page s'exprime en propriétés logiques (ps, pe, text-start…), jamais en gauche/droite physique.",
      "Chaque script porte sa propre police et son propre réglage d'interligne, appliqués automatiquement par lang.",
    ],
    do: "Tester chaque écran dans les trois langues avant de le livrer",
    dont: "Livrer « en français d'abord, on traduira plus tard »",
  },
  {
    n: "03",
    title: "Accessible d'abord",
    statement: "L'accessibilité se décide à la conception, pas en correction après un audit.",
    concretely: [
      "Les interactions complexes (dialogue, menu, onglets, accordéon) s'appuient sur Base UI plutôt que d'être réinventées.",
      "Le contraste et le focus sont garantis par les jetons de couleur et le style de focus global, pas vérifiés à l'œil au cas par cas.",
      "Chaque parcours critique est testé au clavier avant la revue de code.",
    ],
    do: "Poser le label d'un champ avant de le styliser",
    dont: "Masquer le contour de focus sans le remplacer par un style visible",
  },
  {
    n: "04",
    title: "Institutionnel et chaleureux",
    statement: "Un site officiel inspire confiance sans être froid : la rigueur administrative peut rester accueillante.",
    concretely: [
      "Une palette de neutres chauds (sable, tadelakt) plutôt qu'un gris froid de tableau de bord.",
      "Les signatures visuelles marocaines (filet, khatam, arche) s'utilisent avec retenue, jamais en fond systématique.",
      "Une voix directe et respectueuse, ni familière ni bureaucratique.",
    ],
    do: "Garder une seule signature visuelle par composition",
    dont: "Transformer une page de démarche en vitrine décorative",
  },
  {
    n: "05",
    title: "Sobriété du mouvement",
    statement: "Le mouvement confirme un changement d'état, il ne le célèbre pas.",
    concretely: [
      "Deux courbes d'accélération et trois durées, appliquées de la même façon dans tout le système.",
      "Aucune transition ni animation d'entrée ne dépasse 360 ms.",
      "prefers-reduced-motion est respecté globalement, sans réglage à ajouter dans les composants.",
    ],
    do: "Utiliser animate-dsm-up pour une alerte ou une carte qui apparaît",
    dont: "Ajouter un rebond ou un effet de ressort « pour le style »",
  },
  {
    n: "06",
    title: "Ouvert et composable",
    statement: "DSM se copie, se lit et se modifie : aucune boîte noire, aucune dépendance à un service propriétaire.",
    concretely: [
      "Un composant par fichier, des exports nommés, des props typées et un fichier de métadonnées documenté.",
      "Les styles sont des utilitaires Tailwind posés sur les jetons du système, jamais du CSS isolé ou des couleurs arbitraires.",
      "Toute nouveauté commence comme un composant réutilisable, avant d'être traitée comme un cas particulier.",
    ],
    do: "Composer un nouvel écran à partir des composants existants",
    dont: "Dupliquer un composant pour n'en changer qu'une couleur",
  },
];

export default function Principles() {
  return (
    <article>
      <PageHeader
        eyebrow="Prise en main"
        title="Principes"
        titleAr="المبادئ"
        description="Six principes gouvernent chaque décision de conception dans DSM, des jetons de couleur au dernier composant. Ils servent de test simple face à un choix incertain : est-ce que ça sert la clarté, les trois langues, l'accessibilité, la chaleur institutionnelle, la sobriété du mouvement et l'ouverture du système ?"
      />

      <Section id="les-six" title="Les six principes">
        <div className="space-y-6">
          {principles.map((p) => (
            <div key={p.n} className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-line bg-surface-muted px-6 py-4">
                <span className="font-mono text-sm text-ink-subtle">{p.n}</span>
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              </div>
              <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <p className="text-ink-muted leading-relaxed">{p.statement}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Concrètement</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
                    {p.concretely.map((c) => (
                      <li key={c} className="flex gap-2.5">
                        <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-ink-subtle" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 rounded-md bg-success-soft px-4 py-3 text-sm text-success-soft-fg">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0" />
                    <span>{p.do}</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-md bg-error-soft px-4 py-3 text-sm text-error-soft-fg">
                    <X aria-hidden className="mt-0.5 size-4 shrink-0" />
                    <span>{p.dont}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="nommage"
        title="Conventions de nommage"
        description="Le nom d'un composant change selon qu'on en parle ou qu'on l'importe."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="font-semibold">Dans la documentation</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              Le nom français, celui que lira une équipe métier : « Bouton », « Alerte », « Marque bloc ». Il apparaît dans le titre
              de page, la navigation et la prose.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="font-semibold">Dans le code</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              Le nom anglais, celui qu&apos;on importe : <code className="font-mono text-xs">Button</code>, <code className="font-mono text-xs">Alert</code>,{" "}
              <code className="font-mono text-xs">BlockMark</code>. Aucun renommage à la traduction : les identifiants restent stables d&apos;une langue à l&apos;autre.
            </p>
          </div>
        </div>
        <CodeBlock
          className="mt-4"
          lang="tsx"
          code={`// Fichier de métadonnées d'un composant (src/content/examples/button/meta.ts)
const meta: ComponentMeta = {
  title: "Bouton",     // affiché dans la documentation
  titleAr: "زر",
  titleEn: "Button",
  file: "src/dsm/components/button.tsx", // export nommé : Button
};`}
        />
      </Section>

      <Section id="contribution" title="Règles de contribution">
        <ul className="space-y-2 rounded-lg border border-line bg-surface p-6 text-sm text-ink-muted">
          {[
            "Un composant par fichier, en kebab-case, avec des exports nommés uniquement — jamais d'export par défaut.",
            "Chaque prop exportée est typée (export type XProps) et documentée dans le fichier de métadonnées associé.",
            "Aucune couleur, ombre ou rayon en dehors des jetons DESIGN.md : pas de hex, pas de classe Tailwind par défaut désactivée.",
            "Toute chaîne visible par l'utilisateur passe par une prop de contenu ou par UiStrings, traduite dans les quatre langues.",
            "Chaque composant interactif est vérifié au clavier et en dir=\"rtl\" avant relecture.",
            "Pas de TODO ni de contenu de remplissage : les exemples utilisent des données réalistes de service public marocain.",
          ].map((r) => (
            <li key={r} className="flex gap-3">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-vert" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
}
