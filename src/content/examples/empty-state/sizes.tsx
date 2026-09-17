import { EmptyState } from "@/dsm/components/empty-state";
import { Inbox } from "@/dsm/icons";

export default function EmptyStateSizes() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-lg border border-line bg-surface">
        <EmptyState size="sm" icon={<Inbox />} title="Aucune notification" pattern={false} />
      </div>
      <div className="rounded-lg border border-line bg-surface">
        <EmptyState size="md" icon={<Inbox />} title="Aucune notification" description="Vous serez prévenu ici dès qu'un dossier évolue." />
      </div>
    </div>
  );
}
