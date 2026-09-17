import { Spinner } from "@/dsm/components/spinner";

export default function SpinnerComposed() {
  return (
    <div className="flex max-w-sm items-center gap-3 rounded-lg border border-line bg-surface p-4">
      <Spinner tone="primary" />
      <p className="text-sm text-ink-muted">Vérification de la disponibilité du créneau du 14 octobre…</p>
    </div>
  );
}
