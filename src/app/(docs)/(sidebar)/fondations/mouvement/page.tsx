import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { DurationRaceDemo, EasingDemo, EnterDemo, InteractionDemo, MotionPlayground } from "./motion-demo";
import { BreadcrumbJsonLd } from "@/components/docs/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Mouvement",
  description: "Le mouvement dans DSM confirme une action, jamais ne décore. Trois durées, deux courbes d'accélération, et une règle simple",
  alternates: { canonical: "/fondations/mouvement" },
  openGraph: { url: "/fondations/mouvement" },
};

const componentMap = [
  ["Bouton (survol, appui)", "transition-[background-color,box-shadow,transform] duration-(--dsm-duration-fast)", "Retour immédiat, translation d'1px à l'appui"],
  ["Bouton en chargement", "animate-dsm-spin", "Rotation continue de l'icône Loader2"],
  ["Squelette de chargement", "animate-dsm-shimmer", "Balayage de lueur en boucle sur dsm-shimmer"],
  ["Menu, Popover, Select (Base UI)", "data-starting-style / data-ending-style", "Fondu + translation de 2–4px ou scale-[0.97] à l'ouverture/fermeture"],
  ["Dialogue, feuille latérale", "duration-(--dsm-duration) + scale/translate", "Entrée légèrement plus posée, jamais au-delà de 360 ms"],
  ["Alerte, notification", "animate-dsm-up", "Apparition par le bas, 8px de translation"],
  ["Carte interactive", "transition-[box-shadow,border-color]", "Élévation progressive au survol, pas de mouvement de position"],
  ["Flèche de carte (CardArrow)", "transition-transform + translate-x-1 rtl:-translate-x-1", "Glisse d'un cran dans le sens de lecture au survol"],
  ["Accordéon", "grid-template-rows + duration-(--dsm-duration)", "Dépliage fluide de la hauteur du panneau"],
];

export default function Motion() {
  return (
    <article>
      <BreadcrumbJsonLd trail={[{ name: "Mouvement" }]} />
      <PageHeader
        eyebrow="Fondations"
        title="Mouvement"
        titleAr="الحركة"
        description="Le mouvement dans DSM confirme une action, jamais ne décore. Trois durées, deux courbes d'accélération, et une règle simple : rien ne dépasse 400 millisecondes."
      />

      <Section
        id="durees"
        title="Durées & courbes"
        description="Les valeurs vivent dans globals.css sous forme de variables CSS, exposées à Tailwind comme classes duration-(--…) et ease-dsm / ease-dsm-out."
      >
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Jeton</th>
                <th className="px-4 py-2.5 text-start font-semibold">Valeur</th>
                <th className="px-4 py-2.5 text-start font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {[
                ["--dsm-duration-fast", "120 ms", "Survol, focus, appui — micro-retours"],
                ["--dsm-duration", "200 ms", "Défaut : la plupart des transitions"],
                ["--dsm-duration-slow", "360 ms", "Entrées de superposition, plafond du système"],
                ["--dsm-ease", "cubic-bezier(0.2, 0.8, 0.2, 1)", "Courbe par défaut, franche et stable"],
                ["--dsm-ease-out", "cubic-bezier(0.16, 1, 0.3, 1)", "Sortie douce des entrées animate-dsm-in / -up"],
              ].map(([token, value, usage]) => (
                <tr key={token} className="border-t border-line">
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem]">{token}</td>
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-ink-muted">{value}</td>
                  <td className="px-4 py-2.5 text-ink-muted">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="terrain"
        title="Terrain de jeu"
        description="Les démonstrations ci-dessous utilisent les vrais jetons. Activez le ralenti pour observer ce qui, à vitesse réelle, se lit comme un simple « clic net »."
      >
        <MotionPlayground>
          <div>
            <h3 className="mb-3 text-base font-semibold">Les trois durées</h3>
            <DurationRaceDemo />
          </div>
          <div>
            <h3 className="mb-3 text-base font-semibold">Les courbes d&apos;accélération</h3>
            <EasingDemo />
          </div>
          <div>
            <h3 className="mb-3 text-base font-semibold">Animations d&apos;entrée</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <EnterDemo variant="dsm-in" />
              <EnterDemo variant="dsm-up" />
            </div>
          </div>
          <div id="interactions" className="scroll-mt-28">
            <h3 className="mb-3 text-base font-semibold">Micro-interactions des composants</h3>
            <InteractionDemo />
          </div>
        </MotionPlayground>
      </Section>

      <Section id="principes" title="Principes">
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            ["Subtil", "Le mouvement confirme un changement d'état, il ne le célèbre pas. Pas de rebond, pas d'effet de ressort."],
            ["Purposeful", "Chaque transition répond à une question : d'où vient cet élément, où va-t-il ? Sinon, pas d'animation."],
            ["400 ms au plus", "Aucune transition ni entrée ne dépasse la durée slow (360 ms) ; au-delà, l'interface paraît lente."],
            ["Fondu + 2–4px", "Les popups (menu, tooltip, select) s'ouvrent par un fondu combiné à une translation de 2 à 4px, jamais plus."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="reduction"
        title="Mouvement réduit"
        description="prefers-reduced-motion est respecté globalement, sans réglage à faire dans les composants."
      >
        <div className="space-y-4">
          <Alert tone="success" title="Géré au niveau des fondations">
            Une règle globale dans <code className="font-mono text-xs">globals.css</code> ramène toute animation et transition à 0,01 ms
            dès que l&apos;utilisateur a activé la réduction de mouvement dans son système — aucune classe supplémentaire à poser sur les composants.
          </Alert>
          <CodeBlock
            lang="css"
            code={`@media (prefers-reduced-motion: reduce) {\n  *, ::before, ::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}`}
          />
        </div>
      </Section>

      <Section id="mapping" title="Composant → animation" description="Où chaque outil de mouvement est déjà utilisé dans le système.">
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Composant</th>
                <th className="px-4 py-2.5 text-start font-semibold">Mécanisme</th>
                <th className="px-4 py-2.5 text-start font-semibold">Comportement</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {componentMap.map(([comp, mech, behavior]) => (
                <tr key={comp} className="border-t border-line">
                  <td className="px-4 py-2.5 font-medium">{comp}</td>
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.75rem] text-ink-muted">{mech}</td>
                  <td className="px-4 py-2.5 text-ink-muted">{behavior}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="code" title="Utilisation">
        <CodeBlock
          lang="tsx"
          code={`<button className="transition-[background-color,transform] duration-(--dsm-duration-fast) ease-dsm active:translate-y-px">\n  Valider\n</button>\n\n<div className="animate-dsm-up">Nouvelle notification</div>`}
        />
      </Section>
    </article>
  );
}
