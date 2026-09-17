import { EmptyState } from "@/dsm/components/empty-state";
import { Button } from "@/dsm/components/button";
import { SearchX } from "@/dsm/icons";

export default function EmptyStateDefault() {
  return (
    <EmptyState
      icon={<SearchX />}
      title="Aucune démarche trouvée"
      description="Aucun résultat pour « attestation de résidence ». Vérifiez l'orthographe ou essayez un autre mot-clé."
      action={
        <Button variant="secondary" size="sm">
          Effacer la recherche
        </Button>
      }
    />
  );
}
