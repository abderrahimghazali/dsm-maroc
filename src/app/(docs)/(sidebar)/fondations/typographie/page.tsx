import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { Badge } from "@/dsm/components/badge";
import { cn } from "@/dsm/lib/cn";

export const metadata: Metadata = { title: "Typographie" };

type Specimen = {
  lang: "fr" | "ar" | "zgh" | "mono";
  dir?: "rtl";
  family: string;
  role: string;
  sample: string;
  cls: string;
};

const specimens: Specimen[] = [
  {
    lang: "fr",
    family: "IBM Plex Sans",
    role: "Français — texte courant",
    sample: "Le service public s'engage : chaque citoyen mérite une réponse claire, juste et vérifiable.",
    cls: "font-sans",
  },
  {
    lang: "ar",
    dir: "rtl",
    family: "IBM Plex Sans Arabic",
    role: "Arabe — texte courant",
    sample: "المملكة المغربية — بوابة الخدمات العمومية",
    cls: "font-arabic",
  },
  {
    lang: "zgh",
    family: "Noto Sans Tifinagh",
    role: "Amazighe — tifinaghe",
    sample: "ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ",
    cls: "font-tifinagh",
  },
  {
    lang: "mono",
    family: "IBM Plex Mono",
    role: "Code, identifiants, données",
    sample: "GET /api/v1/demarches/acte-de-naissance?dossier=2026-004821",
    cls: "font-mono",
  },
];

type ScaleRow = { token: string; size: string; lh: string; sample: string; cls: string };

const scale: ScaleRow[] = [
  { token: "text-2xs", size: "0.6875rem", lh: "1rem", sample: "Étiquette micro", cls: "text-2xs" },
  { token: "text-xs", size: "0.75rem", lh: "1.1rem", sample: "Métadonnée, légende", cls: "text-xs" },
  { token: "text-sm", size: "0.875rem", lh: "1.35rem", sample: "Texte secondaire", cls: "text-sm" },
  { token: "text-base", size: "1rem", lh: "1.6rem", sample: "Texte courant", cls: "text-base" },
  { token: "text-lg", size: "1.125rem", lh: "1.75rem", sample: "Texte introductif", cls: "text-lg" },
  { token: "text-xl", size: "1.25rem", lh: "1.9rem", sample: "Sous-titre", cls: "text-xl" },
  { token: "text-2xl", size: "1.5rem", lh: "2rem", sample: "Titre de section", cls: "text-2xl" },
  { token: "text-3xl", size: "1.875rem", lh: "2.3rem", sample: "Titre de page", cls: "text-3xl" },
  { token: "text-4xl", size: "2.25rem", lh: "2.6rem", sample: "Titre principal", cls: "text-4xl" },
  { token: "text-5xl", size: "3rem", lh: "1.08", sample: "Grand titre", cls: "text-5xl" },
  { token: "text-6xl", size: "3.75rem", lh: "1.04", sample: "Très grand titre", cls: "text-6xl" },
  { token: "text-display", size: "clamp(2.25rem, 1.6rem + 2.4vw, 3.5rem)", lh: "1.06", sample: "Titre héros", cls: "text-display" },
  { token: "text-display-lg", size: "clamp(2.75rem, 1.8rem + 3.6vw, 5rem)", lh: "1.02", sample: "Héros", cls: "text-display-lg" },
];

const stacks = [
  { variable: "--font-sans", usage: "Défaut (lang=\"fr\", \"en\")", stack: "IBM Plex Sans → IBM Plex Sans Arabic → Noto Sans Tifinagh → système" },
  { variable: "--font-arabic", usage: "lang=\"ar\"", stack: "IBM Plex Sans Arabic → IBM Plex Sans → Noto Sans Tifinagh → système" },
  { variable: "--font-tifinagh", usage: "lang=\"zgh\"", stack: "Noto Sans Tifinagh → IBM Plex Sans → système" },
  { variable: "--font-mono", usage: "Code, identifiants", stack: "IBM Plex Mono → monospace système" },
];

export default function Typography() {
  return (
    <article>
      <PageHeader
        eyebrow="Fondations"
        title="Typographie"
        titleAr="الطباعة"
        description="DSM assemble quatre familles pour couvrir les trois langues officielles et le code : IBM Plex Sans pour le français et l'anglais, IBM Plex Sans Arabic pour l'arabe, Noto Sans Tifinagh pour l'amazighe, et IBM Plex Mono pour tout contenu technique. La police change automatiquement avec l'attribut lang, sans classe à ajouter côté produit."
      />

      <Section
        id="familles"
        title="Les quatre écritures"
        description="Chaque spécimen est rendu dans sa police réelle, chargée via next/font/google dans src/app/fonts.ts."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {specimens.map((s) => (
            <li key={s.lang} className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line bg-surface-muted px-5 py-2.5">
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">{s.role}</span>
                <Badge tone="outline" size="sm">{s.family}</Badge>
              </div>
              <p
                lang={s.lang === "mono" ? undefined : s.lang}
                dir={s.dir}
                className={cn("px-5 py-7 text-xl leading-snug text-balance", s.cls, s.dir === "rtl" && "text-end")}
              >
                {s.sample}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="echelle"
        title="Échelle typographique"
        description="Treize paliers, de la légende micro au grand héros. Taille et interligne sont définis ensemble dans globals.css, jamais composés séparément."
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Utilitaire</th>
                <th className="px-4 py-2.5 text-start font-semibold">Taille</th>
                <th className="px-4 py-2.5 text-start font-semibold">Interligne</th>
                <th className="px-4 py-2.5 text-start font-semibold">Spécimen</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {scale.map((row) => (
                <tr key={row.token} className="border-t border-line align-baseline">
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-[0.8125rem] text-ink-muted">{row.token}</td>
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-ink-subtle">{row.size}</td>
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-ink-subtle">{row.lh}</td>
                  <td className="px-4 py-3">
                    <span className={cn(row.cls, "font-semibold tracking-tight text-balance")}>{row.sample}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="titres"
        title="Conventions de titrage"
        description="Les titres partagent trois réglages : graisse semi-grasse, tracking resserré et césure équilibrée (text-balance)."
      >
        <div className="space-y-5 rounded-lg border border-line bg-surface p-6">
          <div className="space-y-1 border-b border-line pb-4">
            <h1 className="text-4xl font-semibold tracking-tight text-balance">Demande d&apos;acte de naissance</h1>
            <p className="font-mono text-xs text-ink-subtle">h1 — text-4xl font-semibold tracking-tight text-balance</p>
          </div>
          <div className="space-y-1 border-b border-line pb-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Pièces justificatives requises</h2>
            <p className="font-mono text-xs text-ink-subtle">h2 — text-2xl sm:text-3xl font-semibold tracking-tight</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">Délai de traitement</h3>
            <p className="font-mono text-xs text-ink-subtle">h3 — text-lg sm:text-xl font-semibold tracking-tight</p>
          </div>
        </div>
      </Section>

      <Section
        id="arabe"
        title="Règles pour l'arabe"
        description="Le texte arabe respire davantage : l'interligne passe à 1,75 pour compenser les hampes, les points diacritiques et la ligature naturelle du script."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Français — leading-relaxed</p>
            <p className="text-base leading-relaxed text-ink-muted">
              Toute personne a droit à ce que sa cause soit entendue équitablement, dans un délai raisonnable, par un tribunal indépendant.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-6" dir="rtl">
            <p lang="ar" className="mb-3 text-end text-xs font-semibold uppercase tracking-wide text-ink-subtle">
              العربية — line-height: 1.75
            </p>
            <p lang="ar" className="font-arabic text-end text-base text-ink-muted">
              لكل شخص الحق في أن تنظر قضيته بإنصاف وفي أجل معقول من قبل محكمة مستقلة ونزيهة.
            </p>
          </div>
        </div>
        <CodeBlock
          className="mt-4"
          lang="css"
          code={`:lang(ar) {\n  font-family: var(--font-arabic);\n  line-height: 1.75;\n  letter-spacing: 0;\n}`}
        />
      </Section>

      <Section
        id="familles-css"
        title="Familles de police & bascule automatique"
        description={'Quatre variables CSS pointent chacune vers une pile de secours complète. Le composant qui reçoit lang="ar" ou lang="zgh" change de police sans code additionnel.'}
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Variable</th>
                <th className="px-4 py-2.5 text-start font-semibold">Déclenchée par</th>
                <th className="px-4 py-2.5 text-start font-semibold">Pile de secours</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {stacks.map((row) => (
                <tr key={row.variable} className="border-t border-line">
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem]">{row.variable}</td>
                  <td className="whitespace-nowrap px-4 py-2.5 text-ink-muted">{row.usage}</td>
                  <td className="px-4 py-2.5 text-ink-muted">{row.stack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Alert className="mt-4" tone="info" title="Une seule police par nœud, jamais un mélange">
          Ne fixez pas <code className="font-mono text-xs">font-sans</code> sur un conteneur qui accueille du contenu multilingue :
          laissez chaque texte porter son propre <code className="font-mono text-xs">lang</code> et hériter de la bonne police.
        </Alert>
      </Section>

      <Section
        id="chiffres"
        title="Chiffres tabulaires"
        description="Les tableaux de données, montants et identifiants de dossier utilisent des chiffres à chasse fixe pour s'aligner verticalement."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Par défaut</p>
            <div className="space-y-1 font-mono text-sm">
              <p>1 248,00 MAD</p>
              <p>112,50 MAD</p>
              <p>89 320,10 MAD</p>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-subtle">tabular-nums</p>
            <div className="space-y-1 font-mono text-sm tabular-nums">
              <p>1 248,00 MAD</p>
              <p>112,50 MAD</p>
              <p>89 320,10 MAD</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="code" title="Utilisation">
        <CodeBlock
          lang="tsx"
          code={`<h1 className="text-4xl font-semibold tracking-tight text-balance">\n  Demande d'acte de naissance\n</h1>\n\n<p lang="ar" dir="rtl" className="font-arabic text-base">\n  المملكة المغربية — بوابة الخدمات العمومية\n</p>\n\n<span className="font-mono tabular-nums">89 320,10 MAD</span>`}
        />
      </Section>
    </article>
  );
}
