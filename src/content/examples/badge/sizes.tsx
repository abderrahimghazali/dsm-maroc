import { Badge } from "@/dsm/components/badge";

export default function BadgeSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge tone="info" size="sm">
        CNIE
      </Badge>
      <Badge tone="info" size="md">
        CNIE
      </Badge>
    </div>
  );
}
