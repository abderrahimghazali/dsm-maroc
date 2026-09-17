import { Spinner } from "@/dsm/components/spinner";

export default function SpinnerDefault() {
  return (
    <div className="flex items-center gap-6 text-ink-muted">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
}
