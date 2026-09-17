import { TooltipProvider, Tooltip } from "@/dsm/components/tooltip";
import { Download, Printer, Share2 } from "@/dsm/icons";

export default function TooltipComposed() {
  return (
    <TooltipProvider>
      <div className="flex items-center justify-between rounded-lg border border-line bg-surface p-4">
        <div>
          <p className="text-sm font-semibold text-ink">Dossier n° 2026-114872</p>
          <p className="text-xs text-ink-muted">Renouvellement de passeport biométrique</p>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip content="Télécharger le récépissé">
            <button
              type="button"
              aria-label="Télécharger le récépissé"
              className="inline-flex size-10 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink"
            >
              <Download className="size-[18px]" aria-hidden />
            </button>
          </Tooltip>
          <Tooltip content="Imprimer le récépissé">
            <button
              type="button"
              aria-label="Imprimer le récépissé"
              className="inline-flex size-10 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink"
            >
              <Printer className="size-[18px]" aria-hidden />
            </button>
          </Tooltip>
          <Tooltip content="Partager le suivi du dossier">
            <button
              type="button"
              aria-label="Partager le suivi du dossier"
              className="inline-flex size-10 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink"
            >
              <Share2 className="size-[18px]" aria-hidden />
            </button>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
