import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { Badge } from "@/dsm/components/badge";
import { BlockMark, Emblem } from "@/dsm/components/block-mark";
import { Landmark } from "@/dsm/icons";
import { cn } from "@/dsm/lib/cn";

export const metadata: Metadata = { title: "Motifs & identité" };

export default function Patterns() {
  return (
    <article>
      <PageHeader
        eyebrow="Fondations"
        title="Motifs & identité"
        titleAr="الرموز والزخارف"
        description="La marque nationale, le filet tricolore et la tessellation en étoile à huit branches (khatam) forment le vocabulaire visuel de DSM. Ce sont des signatures à utiliser avec retenue : elles identifient un service officiel sans jamais concurrencer son contenu."
      />

      <Section
        id="marque"
        title="La marque nationale (BlockMark)"
        description="L'emblème et le nom du Royaume en trois lignes — arabe, tifinaghe, français — accompagnés en option du nom de l'institution."
      >
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-8 rounded-lg border border-line bg-surface p-6">
            <div className="flex flex-col items-start gap-2">
              <BlockMark size="sm" href="" />
              <span className="text-xs font-mono text-ink-subtle">size=&quot;sm&quot;</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <BlockMark size="md" href="" />
              <span className="text-xs font-mono text-ink-subtle">size=&quot;md&quot; (défaut)</span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <BlockMark size="lg" href="" />
              <span className="text-xs font-mono text-ink-subtle">size=&quot;lg&quot;</span>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Avec entité</p>
            <BlockMark
              size="md"
              href=""
              entity={{ fr: "Ministère de l'Intérieur", ar: "وزارة الداخلية" }}
            />
          </div>

          <div className="rounded-lg bg-surface-inverse p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-inverse/60">Sur fond sombre — inverse</p>
            <BlockMark
              size="md"
              href=""
              inverse
              entity={{ fr: "Portail national des démarches" }}
            />
          </div>
        </div>
      </Section>

      <Section
        id="emblem"
        title="L'emblème"
        description="L'étoile chérifienne à cinq branches, entrelacée, verte sur fond rouge. En version inverse elle passe en currentColor pour s'adapter au fond."
      >
        <div className="flex flex-wrap items-center gap-6 rounded-lg border border-line bg-surface p-6">
          <Emblem className="size-16" />
          <div className="rounded-md bg-surface-inverse p-3">
            <Emblem className="size-16 text-ink-inverse" inverse />
          </div>
        </div>
      </Section>

      <Section id="regles-marque" title="Règles d'usage de la marque">
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            ["Ne jamais recolorer", "L'emblème garde ses couleurs officielles (vert sur rouge) ; seule la variante inverse (currentColor) est autorisée sur fond sombre ou de marque."],
            ["Taille minimale", "N'utilisez pas la marque en dessous de la taille sm (36px). En dessous, elle devient illisible et perd sa valeur de preuve d'officialité."],
            ["Espace de respiration", "Réservez tout autour de la marque un espace au moins égal à la hauteur de l'emblème, libre de tout autre élément graphique."],
            ["Une seule marque par écran", "La marque nationale apparaît dans l'en-tête et, si besoin, le pied de page — jamais répétée dans le corps de page."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="filet"
        title="Le filet"
        description="Un trait identitaire de 3px : le vert amorce, le rouge poursuit. Il ouvre l'en-tête, ferme le pied de page et souligne les éléments d'introduction (« eyebrows »)."
      >
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-subtle">LTR — le vert amorce à gauche</p>
            <div className="dsm-filet rounded-full" />
          </div>
          <div dir="rtl">
            <p className="mb-2 text-end text-xs font-semibold uppercase tracking-wide text-ink-subtle">RTL — le vert amorce à droite</p>
            <div className="dsm-filet rounded-full" />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Variante dsm-filet-ink (rouge → encre)</p>
            <div className="dsm-filet-ink rounded-full" />
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          Le vert marque toujours le début de la lecture, quelle que soit la direction : c&apos;est le repère qui reste stable pendant
          que le rouge se déplace.
        </p>
        <CodeBlock className="mt-4" lang="tsx" code={`<div className="dsm-filet" />\n<div className="dsm-filet-ink" />`} />
      </Section>

      <Section
        id="khatam"
        title="Le khatam"
        description="Une tessellation en étoile à huit branches, motif géométrique traditionnel des zelliges marocains, réduite à un usage strictement décoratif et discret."
      >
        <div className="space-y-6">
          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="mb-2 text-sm font-semibold">Géométrie & technique</p>
            <p className="text-sm leading-relaxed text-ink-muted">
              Le motif est fourni sous forme d&apos;image SVG utilisée comme <strong>masque CSS</strong> (<code className="font-mono text-xs">mask-image</code>),
              répétée tous les 96px (<code className="font-mono text-xs">--dsm-pattern-size</code>). La couleur visible n&apos;est pas dans le
              fichier : elle vient de <code className="font-mono text-xs">background-color: currentColor</code>, donc du <code className="font-mono text-xs">text-*</code> posé sur l&apos;élément. Un même
              motif se teinte ainsi en vert, rouge ou encre sans ressource graphique supplémentaire.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Trois teintes, faible opacité</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { cls: "text-vert", label: "text-vert" },
                { cls: "text-rouge", label: "text-rouge" },
                { cls: "text-ink", label: "text-ink" },
              ].map((c) => (
                <div key={c.label} className="relative h-32 overflow-hidden rounded-lg border border-line bg-surface">
                  <div className={cn("dsm-khatam absolute inset-0 opacity-15", c.cls)} aria-hidden />
                  <span className="absolute bottom-2 start-2 font-mono text-[0.6875rem] text-ink-subtle">{c.label} · opacity-15</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Fondus directionnels</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { cls: "dsm-khatam-fade-end", label: "fade-end" },
                { cls: "dsm-khatam-fade-start", label: "fade-start" },
                { cls: "dsm-khatam-fade-radial", label: "fade-radial" },
                { cls: "dsm-khatam-fade-bottom", label: "fade-bottom" },
              ].map((c) => (
                <div key={c.label} className="relative h-28 overflow-hidden rounded-lg border border-line bg-surface">
                  <div className={cn(c.cls, "absolute inset-0 text-vert opacity-20")} aria-hidden />
                  <span className="absolute bottom-2 start-2 font-mono text-[0.6875rem] text-ink-subtle">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-surface-inverse p-10">
            <div className="dsm-khatam-fade-radial absolute inset-0 text-ink-inverse opacity-[0.08]" aria-hidden />
            <div className="relative max-w-xl">
              <Badge tone="ink" className="mb-4 bg-ink-inverse/10 text-ink-inverse">
                Portail national
              </Badge>
              <h3 className="text-3xl font-semibold tracking-tight text-balance text-ink-inverse">
                Des démarches administratives simples, accessibles à tous les citoyens
              </h3>
              <p className="mt-3 text-ink-inverse/70">
                Exemple d&apos;usage héroïque : le khatam reste un arrière-plan discret, jamais un obstacle à la lecture du titre.
              </p>
            </div>
          </div>

          <CodeBlock
            lang="tsx"
            code={`<div className="relative overflow-hidden rounded-xl bg-surface-inverse p-10">\n  <div className="dsm-khatam-fade-radial absolute inset-0 text-ink-inverse opacity-[0.08]" aria-hidden />\n  <div className="relative">…contenu…</div>\n</div>`}
          />
        </div>
      </Section>

      <Section
        id="bande"
        title="La bande (dsm-band)"
        description="Une rangée de petits losanges, utilisée comme séparateur décoratif entre deux sections."
      >
        <div className="space-y-3">
          <div className="dsm-band text-line-strong" aria-hidden />
          <div className="dsm-band text-vert" aria-hidden />
        </div>
      </Section>

      <Section
        id="arche"
        title="L'arche (dsm-arch)"
        description="Un rayon en fer à cheval sur le haut, appliqué aux cadres d'illustration et aux cartouches d'icône."
      >
        <div className="flex flex-wrap gap-6">
          <div className={cn("dsm-arch flex size-24 items-center justify-center bg-vert-soft text-vert-soft-fg")}>
            <Landmark className="size-8" aria-hidden />
          </div>
          <div className={cn("dsm-arch flex size-24 items-center justify-center bg-bleu-soft text-bleu-soft-fg")}>
            <Landmark className="size-8" aria-hidden />
          </div>
        </div>
      </Section>

      <Section
        id="chamfer"
        title="Le chanfrein (dsm-chamfer)"
        description="Un coin coupé côté fin de ligne, réservé aux blocs d'accent (bandeaux, encarts de mise en avant)."
      >
        <div className="flex flex-wrap gap-6">
          <div className="dsm-chamfer flex h-24 w-40 items-center justify-center bg-rouge text-sm font-semibold text-white">
            Accent
          </div>
          <div dir="rtl" className="dsm-chamfer flex h-24 w-40 items-center justify-center bg-ink text-sm font-semibold text-ink-inverse">
            RTL
          </div>
        </div>
      </Section>

      <Section id="do-dont" title="À faire / à éviter">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-vert-soft/40 p-5">
            <p className="mb-3 font-semibold text-vert-soft-fg">À faire</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>Garder l&apos;opacité d&apos;un motif khatam à 0,15 ou moins derrière du texte.</li>
              <li>N&apos;employer qu&apos;un seul motif signature par composition.</li>
              <li>Laisser le filet amorcer en vert dans le sens de lecture.</li>
              <li>Réserver le chanfrein aux blocs d&apos;accent, jamais aux cartes de contenu.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-line bg-rouge-soft/40 p-5">
            <p className="mb-3 font-semibold text-rouge-soft-fg">À éviter</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>Superposer khatam, bande et arche dans une même zone.</li>
              <li>Recolorer l&apos;emblème ou inverser vert et rouge du filet.</li>
              <li>Poser un motif à plus de 0,15 d&apos;opacité derrière un paragraphe.</li>
              <li>Utiliser la marque nationale en dessous de la taille sm.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="code" title="Utilisation">
        <CodeBlock
          lang="tsx"
          code={`import { BlockMark } from "@/dsm/components/block-mark";\n\n<BlockMark\n  size="md"\n  entity={{ fr: "Ministère de l'Intérieur", ar: "وزارة الداخلية" }}\n/>`}
        />
      </Section>

      <Alert tone="info" className="mt-2" title="Ressources">
        Les fichiers sources des motifs vivent dans <code className="font-mono text-xs">public/patterns/</code> (khatam.svg, khatam-fill.svg, band.svg) et sont
        consommés uniquement via les utilitaires <code className="font-mono text-xs">dsm-*</code> de <code className="font-mono text-xs">globals.css</code>.
      </Alert>
    </article>
  );
}
