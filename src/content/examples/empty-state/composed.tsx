import { EmptyState } from "@/dsm/components/empty-state";
import { Button } from "@/dsm/components/button";
import { ClipboardList, Plus } from "@/dsm/icons";

export default function EmptyStateComposed() {
  return (
    <div className="rounded-lg border border-line bg-surface">
      <EmptyState
        icon={<ClipboardList />}
        title="Aucune démarche en cours"
        description="Vos demandes de passeport, CNIE, carte grise ou attestations apparaîtront ici."
        action={
          <Button size="sm" iconStart={<Plus />}>
            Commencer une démarche
          </Button>
        }
      />
    </div>
  );
}
