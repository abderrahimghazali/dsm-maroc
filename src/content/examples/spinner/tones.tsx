import { Spinner } from "@/dsm/components/spinner";

export default function SpinnerTones() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Spinner tone="current" className="text-ink-muted" />
      <Spinner tone="primary" />
      <Spinner tone="primary" showLabel label="Envoi du dossier en cours" />
    </div>
  );
}
