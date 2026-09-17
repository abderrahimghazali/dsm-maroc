import { TooltipProvider, Tooltip, type TooltipSide } from "@/dsm/components/tooltip";
import { Info } from "@/dsm/icons";

const sides: { side: TooltipSide; label: string }[] = [
  { side: "top", label: "Haut" },
  { side: "bottom", label: "Bas" },
  { side: "inline-start", label: "Début" },
  { side: "inline-end", label: "Fin" },
];

export default function TooltipSides() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center justify-center gap-6 py-8">
        {sides.map(({ side, label }) => (
          <Tooltip key={side} content={`Position : ${label.toLowerCase()}`} side={side}>
            <button
              type="button"
              aria-label={`Aide, position ${label.toLowerCase()}`}
              className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-ink-muted hover:bg-surface-muted hover:text-ink"
            >
              <Info className="size-4" aria-hidden />
            </button>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
