import { Badge } from "@/dsm/components/badge";

export default function BadgeWithDot() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge tone="neutral" dot>
        Déposée
      </Badge>
      <Badge tone="info" dot>
        En cours
      </Badge>
      <Badge tone="success" dot>
        Validée
      </Badge>
      <Badge tone="error" dot>
        Refusée
      </Badge>
    </div>
  );
}
