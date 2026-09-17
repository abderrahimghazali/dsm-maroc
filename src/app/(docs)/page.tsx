import Link from "next/link";
import { Button, ButtonGroup } from "@/dsm/components/button";
import { Badge } from "@/dsm/components/badge";
import { Alert } from "@/dsm/components/alert";
import { BlockMark, Emblem } from "@/dsm/components/block-mark";
import { Card, CardArrow, CardBadges, CardBody, CardFooter, CardMeta, CardText, CardTitle } from "@/dsm/components/card";
import { CodeBlock } from "@/components/docs/code";
import { getAllComponents } from "@/content/registry";
import {
  Accessibility,
  ArrowForward,
  Component,
  Contrast,
  Grid3x3,
  Landmark,
  Languages,
  Layers,
  MousePointerClick,
  Palette,
  Shapes,
  Type,
} from "@/dsm/icons";

const principles = [
  {
    icon: Languages,
    title: "Trilingue par conception",
    text: "Arabe, amazighe et français sont traités à égalité : typographies harmonisées, RTL natif, chaînes traduites dans chaque composant.",
  },
  {
    icon: Accessibility,
    title: "Accessible par défaut",
    text: "Contrastes validés, focus visible, sémantique et clavier pris en charge par des primitives éprouvées. WCAG 2.2 AA visé.",
  },
  {
    icon: Landmark,
    title: "Institutionnel et chaleureux",
    text: "Une identité sobre — vert d'action, rouge d'accent, neutres sable — inspirée du zellige et de la lumière marocaine.",
  },
  {
    icon: Component,
    title: "Composable et ouvert",
    text: "Des composants React copiables, des jetons CSS lisibles, aucune dépendance opaque. Vous possédez le code.",
  },
];

const foundations = [
  { icon: Palette, title: "Couleurs", text: "Palette, jetons sémantiques et contrastes.", href: "/fondations/couleurs" },
  { icon: Type, title: "Typographie", text: "Échelle, scripts arabe et tifinaghe.", href: "/fondations/typographie" },
  { icon: Grid3x3, title: "Espacements & grille", text: "Rythme vertical, conteneur, points de rupture.", href: "/fondations/espacements" },
  { icon: Shapes, title: "Motifs & identité", text: "Khatam, filet, arche, marque nationale.", href: "/fondations/motifs" },
  { icon: MousePointerClick, title: "Mouvement", text: "Durées, courbes et animations.", href: "/fondations/mouvement" },
  { icon: Contrast, title: "Mode sombre", text: "Thème sombre automatique par jetons.", href: "/fondations/mode-sombre" },
  { icon: Languages, title: "Langues & RTL", text: "Direction, locales et chaînes intégrées.", href: "/fondations/langues" },
  { icon: Layers, title: "Iconographie", text: "Jeu d'icônes et glyphes directionnels.", href: "/fondations/iconographie" },
];

export default function Home() {
  const components = getAllComponents();
  const gallery = [
    { slug: "button", title: "Boutons", preview: <ButtonGroup className="justify-center"><Button size="sm">Commencer</Button><Button size="sm" variant="secondary">Annuler</Button><Button size="sm" variant="tertiary">Aide</Button></ButtonGroup> },
    { slug: "badge", title: "Badges", preview: <div className="flex flex-wrap justify-center gap-1.5"><Badge tone="success" dot>Validée</Badge><Badge tone="warning">En cours</Badge><Badge tone="error">Refusée</Badge><Badge tone="ink">Officiel</Badge></div> },
    { slug: "alert", title: "Alertes", preview: <Alert tone="success" size="sm" title="Demande transmise" className="w-full">Référence N° 2026-04512.</Alert> },
    { slug: "card", title: "Cartes", preview: <Card interactive className="w-full max-w-xs"><CardBody className="gap-2 p-4"><CardMeta>Démarche</CardMeta><CardTitle href="/composants/card" className="text-base">Renouveler sa CNIE</CardTitle><CardFooter className="pt-1"><CardBadges><Badge tone="success" size="sm" dot>En ligne</Badge></CardBadges><CardArrow /></CardFooter></CardBody></Card> },
    { slug: "block-mark", title: "Marque nationale", preview: <BlockMark size="md" href={undefined} /> },
    { slug: "header", title: "En-tête & pied de page", preview: <div className="w-full overflow-hidden rounded-md border border-line bg-surface"><div className="flex items-center gap-3 px-3 py-2"><Emblem className="size-6" /><span className="text-xs font-semibold">Portail national</span></div><div className="dsm-filet" /><div className="flex gap-3 px-3 py-1.5 text-[10px] text-ink-muted"><span className="font-semibold text-ink">Accueil</span><span>Démarches</span><span>Institutions</span></div></div> },
  ];

  return (
    <main id="contenu">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="dsm-container grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:py-24">
          <div className="relative">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="inline-block h-[3px] w-6 bg-primary" aria-hidden />
              Système de Design du Maroc · v0.1
            </p>
            <h1 className="mt-6 text-display font-semibold tracking-tighter text-balance lg:text-[3.75rem] lg:leading-[1.04]">
              Un langage commun pour les services publics numériques.
            </h1>
            <p className="mt-5 flex flex-col gap-1 text-xl text-ink-muted">
              <span lang="ar" dir="rtl" className="self-start font-arabic">
                لغة مشتركة للخدمات العمومية الرقمية
              </span>
              <span lang="zgh" className="font-tifinagh text-lg text-ink-subtle">
                ⵜⵓⵜⵍⴰⵢⵜ ⵉⵛⵛⴰⵔⵏ ⵉ ⵜⵏⴰⴼⵓⵜⵉⵏ ⵜⵉⴳⴷⵓⴷⴰⵏⵉⵏ
              </span>
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              DSM réunit fondations, composants et modèles pour concevoir des services publics cohérents, accessibles et
              trilingues — de l&apos;arabe à l&apos;amazighe, en RTL comme en LTR.
            </p>
            <ButtonGroup className="mt-9">
              <Button size="lg" iconEnd={<ArrowForward />} render={<Link href="/prise-en-main" />}>
                Prise en main
              </Button>
              <Button size="lg" variant="secondary" render={<Link href="/composants" />}>
                Voir les composants
              </Button>
            </ButtonGroup>
          </div>

          {/* Collage */}
          <div className="relative h-[26rem] sm:h-[30rem] lg:h-[34rem]">
            <div className="absolute inset-0 overflow-hidden rounded-xl bg-surface-inverse">
              <div
                aria-hidden
                className="dsm-khatam-fade-radial absolute -inset-10 text-vert opacity-50"
                style={{ ["--dsm-pattern-size" as string]: "120px" }}
              />
              <Emblem className="absolute -bottom-16 -end-16 size-72 opacity-[0.08]" />
            </div>
            <div className="animate-dsm-up absolute start-6 top-8 w-[17rem] sm:start-10 sm:top-12 [animation-delay:80ms]">
              <Card interactive className="shadow-lg">
                <CardBody className="gap-2.5 p-5">
                  <CardMeta>Démarche · Gratuit</CardMeta>
                  <CardTitle href="/demo/fr/demarches/acte-de-naissance" className="text-base">
                    Demander un extrait d&apos;acte de naissance
                  </CardTitle>
                  <CardText>Livré en PDF signé sous 48 h.</CardText>
                  <CardFooter className="pt-1">
                    <CardBadges>
                      <Badge tone="success" size="sm" dot>
                        En ligne
                      </Badge>
                    </CardBadges>
                    <CardArrow />
                  </CardFooter>
                </CardBody>
              </Card>
            </div>
            <div className="animate-dsm-up absolute end-6 top-10 rounded-md bg-surface/95 p-3 shadow-lg backdrop-blur sm:end-10 [animation-delay:200ms]">
              <BlockMark size="sm" href={undefined} />
            </div>
            <div className="animate-dsm-up absolute bottom-24 end-6 flex flex-col items-end gap-2 sm:end-10 [animation-delay:320ms]">
              <Badge tone="vert">Validée</Badge>
              <Badge tone="warning">En cours</Badge>
              <Badge tone="rouge">Nouveau</Badge>
            </div>
            <div className="animate-dsm-up absolute bottom-6 start-6 w-[20rem] sm:start-10 [animation-delay:440ms]">
              <Alert tone="success" size="sm" title="Demande transmise" className="shadow-lg">
                Référence N° 2026-04512 · suivi par SMS.
              </Alert>
            </div>
            <div className="animate-dsm-up absolute end-6 top-32 sm:end-10 [animation-delay:560ms]">
              <Button size="sm" iconEnd={<ArrowForward />}>
                Commencer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key figures */}
      <section className="border-b border-line bg-surface">
        <div className="dsm-container grid grid-cols-2 divide-line sm:divide-x lg:grid-cols-4">
          {[
            { value: String(components.length), label: "composants documentés" },
            { value: "3", label: "langues — ar · zgh · fr — RTL natif" },
            { value: "2", label: "thèmes, clair et sombre, par jetons" },
            { value: "AA", label: "contraste WCAG 2.2 sur tous les jetons" },
          ].map((k) => (
            <div key={k.label} className="px-2 py-8 sm:px-8 first:ps-0">
              <p className="text-4xl font-semibold tracking-tighter tabular-nums">{k.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{k.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="dsm-container py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Principes</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance">Conçu pour l&apos;État, pensé pour les citoyens.</h2>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-lg border border-line bg-surface p-6 shadow-xs">
              <span className="dsm-arch inline-flex size-12 items-center justify-center bg-vert-soft text-vert-soft-fg">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Components gallery */}
      <section className="border-y border-line bg-surface">
        <div className="dsm-container py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Composants</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance">Des briques prêtes à l&apos;emploi, du bouton au portail.</h2>
            </div>
            <Button variant="secondary" iconEnd={<ArrowForward />} render={<Link href="/composants" />}>
              Tous les composants
            </Button>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <li key={g.slug} className="group/g overflow-hidden rounded-lg border border-line bg-canvas shadow-xs transition-[box-shadow,border-color] hover:border-line-strong hover:shadow-md">
                <div className="flex min-h-40 items-center justify-center p-6">{g.preview}</div>
                <Link href={`/composants/${g.slug}`} className="flex items-center justify-between border-t border-line bg-surface px-5 py-3.5 text-sm font-semibold text-ink no-underline">
                  {g.title}
                  <ArrowForward className="size-4 text-ink-subtle transition-transform group-hover/g:translate-x-0.5 rtl:group-hover/g:-translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Foundations */}
      <section className="dsm-container py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Fondations</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance">Les décisions de design, écrites une fois.</h2>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map(({ icon: Icon, title, text, href }) => (
            <li key={href}>
              <Link href={href} className="group/f flex h-full flex-col rounded-lg border border-line bg-surface p-5 no-underline shadow-xs transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-md">
                <Icon className="size-5 text-primary" aria-hidden />
                <span className="mt-4 font-semibold text-ink">{title}</span>
                <span className="mt-1 text-sm text-ink-muted">{text}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Explorer <ArrowForward className="size-4 transition-transform group-hover/f:translate-x-0.5 rtl:group-hover/f:-translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Demo band */}
      <section className="dsm-container pb-16 lg:pb-20">
        <div className="relative overflow-hidden rounded-xl bg-surface-inverse text-ink-inverse">
          <div aria-hidden className="dsm-khatam-fade-end pointer-events-none absolute inset-y-0 end-0 w-2/3 text-vert opacity-40" />
          <div className="relative grid gap-8 p-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-inverse/60">Modèles</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance">Un portail national complet, en trois langues.</h2>
              <p className="mt-4 max-w-xl text-ink-inverse/75">
                Page d&apos;accueil, démarche en ligne pas à pas, page institutionnelle, recherche et pages d&apos;erreur : des modèles
                réels, assemblés avec les composants du système.
              </p>
              <ButtonGroup className="mt-8">
                <Button variant="inverse" iconEnd={<ArrowForward />} render={<Link href="/demo/fr" />}>
                  Ouvrir la démo
                </Button>
                <Button variant="ghost" className="text-ink-inverse hover:bg-ink-inverse/10" render={<Link href="/demo/ar" />}>
                  <span lang="ar" dir="rtl" className="font-arabic">النسخة العربية</span>
                </Button>
                <Button variant="ghost" className="text-ink-inverse hover:bg-ink-inverse/10" render={<Link href="/demo/zgh" />}>
                  <span lang="zgh" className="font-tifinagh">ⵜⴰⵎⴰⵣⵉⵖⵜ</span>
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="border-t border-line bg-surface">
        <div className="dsm-container grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Prise en main</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance">Trois étapes, aucun verrou.</h2>
            <ol className="mt-8 space-y-6">
              {[
                ["Installez les dépendances", "Base UI, CVA, clsx, tailwind-merge et Lucide — rien d'autre."],
                ["Copiez le dossier src/dsm", "Composants, jetons, icônes et dictionnaires vous appartiennent."],
                ["Importez les fondations", "Ajoutez globals.css et enveloppez votre application dans les fournisseurs."],
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-ink-inverse">{i + 1}</span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-4">
            <CodeBlock lang="bash" title="terminal" code={`pnpm add @base-ui/react class-variance-authority clsx tailwind-merge lucide-react\ncp -r dsm/src/dsm ./src/dsm`} />
            <CodeBlock
              lang="tsx"
              title="app/layout.tsx"
              code={`import "./globals.css";\nimport { ThemeProvider } from "@/dsm/components/theme";\nimport { LocaleProvider } from "@/dsm/i18n/provider";\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang="fr" dir="ltr">\n      <body>\n        <ThemeProvider>\n          <LocaleProvider locale="fr">{children}</LocaleProvider>\n        </ThemeProvider>\n      </body>\n    </html>\n  );\n}`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
