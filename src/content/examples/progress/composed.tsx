import { Progress } from "@/dsm/components/progress";
import { FileText } from "@/dsm/icons";

export default function ProgressComposed() {
  return (
    <div className="max-w-sm space-y-3 rounded-lg border border-line bg-surface p-4">
      <div className="flex items-center gap-2.5 text-sm text-ink">
        <FileText className="size-4 shrink-0 text-ink-subtle" aria-hidden />
        <span className="min-w-0 flex-1 truncate">justificatif_domicile.pdf</span>
      </div>
      <Progress size="sm" value={78} showValue tone="success" />
    </div>
  );
}
