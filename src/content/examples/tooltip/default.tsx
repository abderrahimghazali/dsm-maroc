import { TooltipProvider, Tooltip } from "@/dsm/components/tooltip";
import { Download } from "@/dsm/icons";

export default function TooltipDefault() {
  return (
    <TooltipProvider>
      <Tooltip content="Télécharger l'accusé de réception">
        <button
          type="button"
          aria-label="Télécharger l'accusé de réception"
          className="inline-flex size-11 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink"
        >
          <Download className="size-5" aria-hidden />
        </button>
      </Tooltip>
    </TooltipProvider>
  );
}
