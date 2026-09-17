import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { cn } from "@/dsm/lib/cn";

export const metadata: Metadata = { title: "Couleurs" };

type Swatch = { name: string; token: string; cls: string; light: string; dark: string; text?: string; note?: string };

const brand: Swatch[] = [
  { name: "Vert Maroc", token: "--dsm-vert", cls: "bg-vert", light: "#0B6B3F", dark: "#3FA870", text: "text-white", note: "Action principale, succès, marque." },
  { name: "Rouge Maroc", token: "--dsm-rouge", cls: "bg-rouge", light: "#B5202C", dark: "#E4606A", text: "text-white", note: "Accent identitaire, erreur, danger." },
  { name: "Bleu Majorelle", token: "--dsm-bleu", cls: "bg-bleu", light: "#2B3FA8", dark: "#8C9BF2", text: "text-white", note: "Liens, focus, information." },
  { name: "Safran", token: "--dsm-safran", cls: "bg-safran", light: "#C4720A", dark: "#E9A23B", text: "text-white", note: "Avertissement, mise en garde." },
];

const soft: Swatch[] = [
  { name: "Vert doux", token: "--dsm-vert-soft", cls: "bg-vert-soft text-vert-soft-fg", light: "#E4F3EA", dark: "#12291D" },
  { name: "Rouge doux", token: "--dsm-rouge-soft", cls: "bg-rouge-soft text-rouge-soft-fg", light: "#FBEBEC", dark: "#3A1A1D" },
  { name: "Bleu doux", token: "--dsm-bleu-soft", cls: "bg-bleu-soft text-bleu-soft-fg", light: "#E9ECFA", dark: "#1B1F3A" },
  { name: "Safran doux", token: "--dsm-safran-soft", cls: "bg-safran-soft text-safran-soft-fg", light: "#FCF0DB", dark: "#33240F" },
];

const neutrals: Swatch[] = [
  { name: "Toile", token: "--dsm-canvas", cls: "bg-canvas", light: "#FAF7F1", dark: "#121110", note: "Fond de page." },
  { name: "Surface", token: "--dsm-surface", cls: "bg-surface", light: "#FFFFFF", dark: "#1A1917", note: "Cartes, en-tête, panneaux." },
  { name: "Surface atténuée", token: "--dsm-surface-muted", cls: "bg-surface-muted", light: "#F4EFE7", dark: "#23211E", note: "Bandes, survols." },
  { name: "Surface enfoncée", token: "--dsm-surface-sunken", cls: "bg-surface-sunken", light: "#ECE6DB", dark: "#0D0C0B", note: "Pistes, arrière-plans profonds." },
  { name: "Surface inverse", token: "--dsm-surface-inverse", cls: "bg-surface-inverse text-ink-inverse", light: "#1C1A17", dark: "#F3EEE6", note: "Bandeaux à fort contraste." },
  { name: "Encre", token: "--dsm-ink", cls: "bg-ink text-ink-inverse", light: "#1C1A17", dark: "#F3EEE6", note: "Texte principal." },
  { name: "Encre atténuée", token: "--dsm-ink-muted", cls: "bg-ink-muted text-white", light: "#5A554D", dark: "#B5AEA3", note: "Texte secondaire." },
  { name: "Encre discrète", token: "--dsm-ink-subtle", cls: "bg-ink-subtle text-white", light: "#8B857B", dark: "#7F7970", note: "Métadonnées, icônes inactives." },
  { name: "Filet", token: "--dsm-line", cls: "bg-line", light: "#E4DDD2", dark: "#2E2B27", note: "Bordures par défaut." },
  { name: "Filet fort", token: "--dsm-line-strong", cls: "bg-line-strong", light: "#C6BDAF", dark: "#47433D", note: "Contours de champs." },
];

function SwatchGrid({ items, tall }: { items: Swatch[]; tall?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <li key={s.token} className="overflow-hidden rounded-lg border border-line bg-surface shadow-xs">
          <div className={cn("flex items-end p-4", tall ? "h-28" : "h-20", s.cls, s.text)}>
            <span className="text-sm font-semibold">Aa</span>
          </div>
          <div className="space-y-1 p-4">
            <p className="font-semibold">{s.name}</p>
            <p className="font-mono text-xs text-ink-muted">{s.token}</p>
            <p className="font-mono text-xs text-ink-subtle">
              {s.light} · <span title="Mode sombre">{s.dark}</span>
            </p>
            {s.note && <p className="pt-1 text-xs text-ink-muted">{s.note}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Colors() {
  return (
    <article>
      <PageHeader
        eyebrow="Fondations"
        title="Couleurs"
        titleAr="الألوان"
        description="Une palette courte et signifiante : deux couleurs nationales, un bleu de lien, un safran d'alerte et une gamme de neutres chauds inspirés du sable et du tadelakt. Chaque couleur existe en clair et en sombre, et n'est jamais le seul vecteur d'information."
      />

      <Section id="principes" title="Principes">
        <ul className="grid gap-4 md:grid-cols-3">
          {[
            ["Le vert agit", "Le vert est la couleur de l'action : boutons principaux, éléments sélectionnés, succès. Il ne sert jamais de décor."],
            ["Le rouge signe", "Le rouge porte l'identité (marque, filet) et l'erreur. Son usage décoratif est limité au filet et à la marque nationale."],
            ["Les neutres portent", "Fonds, textes et filets forment 90 % de chaque écran. Ils sont chauds, jamais gris froid, pour une lecture apaisée."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-semibold">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="marque" title="Couleurs de marque" description="Les quatre teintes portent une signification fixe dans tout le système.">
        <SwatchGrid items={brand} tall />
      </Section>

      <Section id="douces" title="Teintes douces" description="Fonds légers associés à une couleur de texte dédiée (-soft-fg), pour les badges, alertes et états sélectionnés.">
        <SwatchGrid items={soft} />
      </Section>

      <Section id="neutres" title="Neutres" description="Une gamme sable : quatre surfaces, trois encres, deux filets.">
        <SwatchGrid items={neutrals} />
      </Section>

      <Section id="semantique" title="Jetons sémantiques" description="Les composants n'utilisent que des alias sémantiques ; changer une couleur de marque met à jour tout le système.">
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-4 py-2.5 text-start font-semibold">Alias</th>
                <th className="px-4 py-2.5 text-start font-semibold">Pointe vers</th>
                <th className="px-4 py-2.5 text-start font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody className="bg-surface">
              {[
                ["primary / primary-hover / primary-fg", "vert", "Boutons principaux, sélection, progression"],
                ["accent", "rouge", "Marque, filet, accents identitaires"],
                ["link / link-hover", "bleu", "Liens dans le texte"],
                ["focus", "bleu", "Anneau de focus clavier"],
                ["info / info-soft / info-soft-fg", "bleu", "Messages d'information"],
                ["success / success-soft / success-soft-fg", "vert", "Confirmations, statuts validés"],
                ["warning / warning-soft / warning-soft-fg", "safran", "Mises en garde"],
                ["error / error-soft / error-soft-fg", "rouge", "Erreurs de saisie, statuts refusés"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-t border-line">
                  <td className="px-4 py-2.5 font-mono text-[0.8125rem]">{a}</td>
                  <td className="px-4 py-2.5 font-mono text-[0.8125rem] text-ink-muted">{b}</td>
                  <td className="px-4 py-2.5 text-ink-muted">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="contraste" title="Contraste & accessibilité">
        <div className="space-y-4">
          <Alert tone="success" title="Tous les jetons de texte atteignent AA (4,5:1)">
            Vert sur blanc 6,6:1 · Rouge sur blanc 6,5:1 · Bleu sur blanc 8,8:1 · Encre atténuée sur toile 6,9:1. Le safran est réservé aux fonds et icônes ; le texte d&apos;avertissement utilise <code className="font-mono text-xs">warning-soft-fg</code>.
          </Alert>
          <p className="text-sm text-ink-muted">
            En mode sombre, les couleurs de marque sont éclaircies et le texte des boutons principaux passe à l&apos;encre foncée (<code className="font-mono text-xs">primary-fg</code>) pour préserver le contraste. N&apos;utilisez jamais <code className="font-mono text-xs">text-white</code> sur <code className="font-mono text-xs">bg-primary</code>.
          </p>
        </div>
      </Section>

      <Section id="code" title="Utilisation">
        <CodeBlock
          lang="tsx"
          code={`<div className="bg-surface text-ink border border-line">\n  <button className="bg-primary text-primary-fg hover:bg-primary-hover">Valider</button>\n  <span className="bg-success-soft text-success-soft-fg">Validée</span>\n  <a className="text-link hover:text-link-hover">En savoir plus</a>\n</div>`}
        />
        <p className="mt-4 text-sm text-ink-muted">
          Les variables CSS sont définies dans <code className="font-mono text-xs">src/app/globals.css</code> sous le préfixe <code className="font-mono text-xs">--dsm-</code> et exposées à Tailwind via <code className="font-mono text-xs">@theme inline</code>.
        </p>
      </Section>
    </article>
  );
}
