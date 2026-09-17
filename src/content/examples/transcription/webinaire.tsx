import { Transcription } from "@/dsm/components/transcription";

export default function TranscriptionWebinaire() {
  return (
    <div className="max-w-xl space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">Webinaire · 9 septembre 2026</p>
        <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">
          Session d&apos;information — Déclaration fiscale des auto-entrepreneurs
        </h3>
      </div>
      <Transcription title="Transcription intégrale">
        <p>
          Bonjour à toutes et à tous, et bienvenue à cette session organisée par la Direction Générale des Impôts. Nous
          allons aujourd&apos;hui détailler les modalités de télédéclaration pour les auto-entrepreneurs, ainsi que les
          échéances applicables au titre de l&apos;exercice 2026.
        </p>
        <p>
          La cotisation minimale s&apos;élève à 500 MAD par an pour les activités commerciales, artisanales et
          industrielles, et à 1 000 MAD pour les prestations de services. Le paiement s&apos;effectue en ligne sur
          simpat.impots.gov.ma avant le 31 mars.
        </p>
      </Transcription>
    </div>
  );
}
