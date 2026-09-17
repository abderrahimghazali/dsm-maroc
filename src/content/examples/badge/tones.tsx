import { Badge } from "@/dsm/components/badge";

export default function BadgeTones() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Brouillon</Badge>
      <Badge tone="info">En cours</Badge>
      <Badge tone="success">Validée</Badge>
      <Badge tone="warning">En attente</Badge>
      <Badge tone="error">Refusée</Badge>
      <Badge tone="rouge">Urgent</Badge>
      <Badge tone="vert">Gratuit</Badge>
      <Badge tone="ink">Officiel</Badge>
      <Badge tone="outline">Archivée</Badge>
    </div>
  );
}
