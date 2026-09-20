import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { ExamplePreview } from "@/components/docs/example-preview";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { kingdomWordmark, localeMeta, ui, type Locale } from "@/dsm/i18n";
import { cn } from "@/dsm/lib/cn";
import { TrilingualSample } from "./rtl-demo";
import { formatDate, formatHijriDate, formatMoney, formatNumber, formatPhone } from "@/dsm/lib/format";
import { BreadcrumbJsonLd } from "@/components/docs/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Langues & RTL",
  description: "DSM est trilingue — arabe, amazighe (tifinaghe), français — avec deux directions d'écriture.",
  alternates: { canonical: "/fondations/langues" },
  openGraph: { url: "/fondations/langues" },
};

const locales: Locale[] = ["fr", "ar", "zgh", "en"];

const sampleKeys: (keyof (typeof ui)["fr"])[] = ["kingdom", "home", "search", "next", "required", "close"];

const rtlChecklist = [
  "Basculer dir=\"rtl\" et vérifier qu'aucun texte ni contrôle ne déborde ou ne se chevauche.",
  "Vérifier que les flèches et chevrons directionnels s'inversent, et que Check, X et ExternalLink restent fixes.",
  "Chercher dans le diff toute classe pl-/pr-/ml-/mr-/left-/right-/text-left/text-right : elles doivent disparaître au profit des classes logiques.",
  "Vérifier que les glissements au survol utilisent rtl:-translate-x-* et non une valeur codée en dur.",
  "Aligner le texte avec text-start / text-end plutôt qu'avec un côté physique.",
  "Vérifier l'ordre de la marque nationale (arabe, tifinaghe, français) et son alignement à droite.",
  "Parcourir la page au clavier : l'ordre de tabulation doit suivre l'ordre visuel RTL.",
  "Relire le rendu de l'amazighe tifinaghe : une seule graisse, un tracking élargi.",
];

export default function LanguagesRtl() {
  return (
    <article>
      <BreadcrumbJsonLd trail={[{ name: "Langues & RTL" }]} />
      <PageHeader
        eyebrow="Fondations"
        title="Langues & RTL"
        titleAr="اللغات والاتجاه من اليمين إلى اليسار"
        description="DSM est trilingue — arabe, amazighe (tifinaghe), français — avec deux directions d'écriture. L'anglais existe comme quatrième locale technique du dictionnaire des composants, sans démonstration. Chaque composant s'adapte via un fournisseur de contexte et des dictionnaires, sans jamais coder de texte en dur."
      />

      <Section
        id="locales"
        title="Locales prises en charge"
        description="Déclarées dans src/dsm/i18n/index.ts, chacune avec son code BCP-47, sa direction et son libellé natif."
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Locale</th>
                <th className="px-4 py-2.5 text-start font-semibold">Code</th>
                <th className="px-4 py-2.5 text-start font-semibold">Direction</th>
                <th className="px-4 py-2.5 text-start font-semibold">Libellé natif</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {locales.map((l) => {
                const m = localeMeta[l];
                return (
                  <tr key={l} className="border-t border-line">
                    <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem]">{l}</td>
                    <td className="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-ink-muted">{m.code}</td>
                    <td className="whitespace-nowrap px-4 py-2.5 text-ink-muted">{m.dir}</td>
                    <td className={cn(m.fontClass, "px-4 py-2.5")} lang={m.code} dir={m.dir}>
                      {m.nativeLabel}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="fournisseur"
        title="LocaleProvider, useLocale, useT"
        description="LocaleProvider pose la direction (via le DirectionProvider de Base UI) et expose la locale, le code de langue et le dictionnaire courant."
      >
        <CodeBlock
          lang="tsx"
          code={`import { LocaleProvider, useLocale, useT } from "@/dsm/i18n/provider";\n\n<LocaleProvider locale="ar">\n  <Page />\n</LocaleProvider>\n\nfunction Page() {\n  const { locale, dir, lang } = useLocale(); // "ar", "rtl", "ar-MA"\n  const t = useT();                          // dictionnaire UiStrings courant\n  return <button aria-label={t.close}>{t.next}</button>;\n}`}
        />
      </Section>

      <Section
        id="dictionnaire"
        title="Le dictionnaire UiStrings"
        description="Un même jeu de clés dans les quatre langues. Ajouter une clé impose de la traduire partout, sans exception."
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Clé</th>
                <th className="px-4 py-2.5 text-start font-semibold">fr</th>
                <th className="px-4 py-2.5 text-start font-semibold">ar</th>
                <th className="px-4 py-2.5 text-start font-semibold">zgh</th>
                <th className="px-4 py-2.5 text-start font-semibold">en</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {sampleKeys.map((key) => (
                <tr key={key} className="border-t border-line">
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem]">{key}</td>
                  <td className="px-4 py-2.5">{ui.fr[key]}</td>
                  <td className="px-4 py-2.5 font-arabic" lang="ar" dir="rtl">
                    {ui.ar[key]}
                  </td>
                  <td className="px-4 py-2.5 font-tifinagh" lang="zgh">
                    {ui.zgh[key]}
                  </td>
                  <td className="px-4 py-2.5">{ui.en[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="chiffres"
        title="Chiffres, dates et montants"
        description="Les conventions marocaines, appliquées par les fonctions de @/dsm/lib/format : chiffres occidentaux dans les trois langues, virgule décimale, dirham en MAD ou د.م., dates grégoriennes avec l'hégirien en complément."
      >
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Locale</th>
                <th className="px-4 py-2.5 text-start font-semibold">Nombre</th>
                <th className="px-4 py-2.5 text-start font-semibold">Montant</th>
                <th className="px-4 py-2.5 text-start font-semibold">Date</th>
                <th className="px-4 py-2.5 text-start font-semibold">Hégirien (indicatif)</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {(["fr", "ar", "zgh"] as const).map((l) => {
                const m = localeMeta[l];
                const sample = new Date(2026, 8, 17);
                return (
                  <tr key={l} className="border-t border-line">
                    <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem]">{l}</td>
                    <td className={cn(m.fontClass, "whitespace-nowrap px-4 py-2.5 tabular-nums")} lang={m.code} dir={m.dir}>{formatNumber(1234567.89, l)}</td>
                    <td className={cn(m.fontClass, "whitespace-nowrap px-4 py-2.5 tabular-nums")} lang={m.code} dir={m.dir}>{formatMoney(1250.5, l)}</td>
                    <td className={cn(m.fontClass, "whitespace-nowrap px-4 py-2.5")} lang={m.code} dir={m.dir}>{formatDate(sample, l)}</td>
                    <td className={cn(m.fontClass, "whitespace-nowrap px-4 py-2.5")} lang={m.code} dir={m.dir}>{formatHijriDate(sample, l)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Chiffres occidentaux, partout", "En arabe aussi : c'est l'usage de l'administration, de la presse et de l'école au Maroc. Ne forcez jamais les chiffres indo-arabes (nu-arab) ; formatNumber impose nu-latn."],
            ["Espace fine et virgule", "Milliers séparés par une espace fine insécable, décimales par une virgule, dans les trois langues : « 1 234 567,89 ». Intl seul donnerait un point des milliers en fr-MA."],
            ["Dirham : MAD ou د.م.", "Code ISO après le montant en français et en amazighe (« 1 250,50 MAD »), symbole د.م. en arabe. Jamais « DH », « Dhs » ni « dh » dans une interface officielle. Deux décimales pour un prix, aucune pour un chiffre-clé."],
            ["Dates grégoriennes en toutes lettres", "Format long dans la langue de l'interface (17 septembre 2026, 17 شتنبر 2026, 17 ⵛⵓⵜⴰⵏⴱⵉⵔ 2026) ; JJ/MM/AAAA uniquement dans les champs de saisie (DateInput)."],
            ["Hégirien en complément, jamais seul", "formatHijriDate utilise le calendrier islamic-umalqura. Le Maroc suit l'observation lunaire locale : la date calculée peut différer d'un jour, présentez-la comme indicative — « 17 septembre 2026 (6 rabia ath-thani 1448) »."],
            ["Téléphone et heures", `National « ${formatPhone("0612345678")} », international « ${formatPhone("0612345678", "international")} » (IdentityInput, formatPhone). Heures sur 24 h : « 8 h 30 – 16 h 30 ».`],
          ].map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
        <CodeBlock
          className="mt-6"
          lang="tsx"
          title="src/dsm/lib/format.ts"
          code={`import { formatDate, formatDualDate, formatMoney, formatNumber, formatPhone } from "@/dsm/lib/format";\n\nformatNumber(1234567.89, "ar"); // "1 234 567,89"\nformatMoney(1250.5, "fr");      // "1 250,50 MAD"\nformatMoney(1250.5, "ar");      // "1 250,50 د.م."\nformatDate(new Date(), "zgh");  // "17 ⵛⵓⵜⴰⵏⴱⵉⵔ 2026"\nformatDualDate(new Date(), "fr"); // "17 septembre 2026 (6 rabia ath-thani 1448)"\nformatPhone("+212612345678");   // "06 12 34 56 78"`}
        />
      </Section>

      <Section
        id="regles-rtl"
        title="Règles RTL"
        description="Un composant DSM ne teste jamais dir === 'rtl' : il s'exprime en propriétés logiques et laisse le navigateur inverser la mise en page."
      >
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-line bg-surface p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-subtle">LTR</p>
              <div className="rounded-md border-s-4 border-vert bg-surface-muted ps-4 pe-4 py-3 text-sm text-start">
                border-s-4 · ps-4 · pe-4 · text-start
              </div>
            </div>
            <div dir="rtl" className="rounded-lg border border-line bg-surface p-6">
              <p className="mb-3 text-end text-xs font-semibold uppercase tracking-wide text-ink-subtle">RTL</p>
              <div className="rounded-md border-s-4 border-vert bg-surface-muted ps-4 pe-4 py-3 text-sm text-start">
                border-s-4 · ps-4 · pe-4 · text-start
              </div>
            </div>
          </div>
          <p className="text-sm text-ink-muted">
            Même classe, même code : le filet de bordure et le retrait passent du côté gauche au côté droit avec la direction.
          </p>
          <CodeBlock
            lang="tsx"
            code={`{/* À éviter */}\n<div className="pl-4 pr-2 ml-1 text-left border-l-4" />\n\n{/* À faire */}\n<div className="ps-4 pe-2 ms-1 text-start border-s-4" />\n\n{/* Glissement au survol qui respecte le sens de lecture */}\n<span className="translate-x-1 rtl:-translate-x-1" />`}
          />
        </div>
      </Section>

      <Section
        id="demo"
        title="Démonstration trilingue"
        description="Basculez la langue dans la barre de l'aperçu : direction, police et contenu changent ensemble, sans recharger la page."
      >
        <ExamplePreview
          title="Alerte, bouton et badge"
          description="Le composant lit useLocale() et useT() : aucune chaîne n'est écrite en dur."
          code={<CodeBlock lang="tsx" code={`const { locale } = useLocale();\nconst t = useT();\n\n<Alert tone="info" title={t.info}>{t.officialExplainer}</Alert>\n<Button iconEnd={<ArrowForward />}>{t.nextStep}</Button>\n<Badge tone="success" dot>{t.results} : 12</Badge>`} />}
        >
          <TrilingualSample />
        </ExamplePreview>
      </Section>

      <Section
        id="marque"
        title="Ordre de la marque nationale"
        description="Sur les supports officiels, les trois lignes du nom du Royaume suivent toujours cet ordre, quelle que soit la langue de l'interface."
      >
        <div className="rounded-lg border border-line bg-surface p-6">
          <ol className="space-y-2">
            {kingdomWordmark.map((line, i) => (
              <li key={line.lang} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-muted text-xs font-semibold text-ink-subtle">
                  {i + 1}
                </span>
                <span
                  lang={line.lang}
                  dir={line.lang === "ar" ? "rtl" : "ltr"}
                  className={line.lang === "ar" ? "font-arabic" : line.lang === "zgh" ? "font-tifinagh" : "font-sans"}
                >
                  {line.text}
                </span>
                <span className="ms-auto font-mono text-xs text-ink-subtle">{line.lang}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        id="tifinaghe"
        title="Recommandations pour le tifinaghe"
        description="Noto Sans Tifinagh n'est chargée qu'en une seule graisse : la hiérarchie visuelle passe par la taille et l'espacement, jamais par le gras."
      >
        <Alert tone="warning" title="Traductions amazighes : relecture en attente" className="mb-4">
          Les chaînes en tamazight du dictionnaire, de la démonstration et des noms de régions ont été rédigées sans relecture par un
          locuteur natif. Faites-les valider (IRCAM ou traducteur assermenté) avant toute mise en production, et signalez les corrections
          sur le dépôt.
        </Alert>
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            ["Une seule graisse", "Noto Sans Tifinagh est chargée en poids 400 uniquement (font-tifinagh) : n'appliquez jamais font-bold à du texte tifinaghe, il n'a aucun effet et casse la cohérence."],
            ["Tracking élargi", "Ajoutez tracking-wide sur les lignes tifinaghes pour compenser la densité des glyphes, comme le fait BlockMark sur la ligne zgh."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="checklist" title="Relecture d'une page en RTL">
        <ul className="space-y-2 rounded-lg border border-line bg-surface p-6 text-sm text-ink-muted">
          {rtlChecklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-vert" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Alert className="mt-4" tone="info" title="Le direction provider est unique">
          <code className="font-mono text-xs">LocaleProvider</code> intègre déjà le <code className="font-mono text-xs">DirectionProvider</code> de
          Base UI : n&apos;en ajoutez pas un second dans une page ou un composant.
        </Alert>
      </Section>
    </article>
  );
}
