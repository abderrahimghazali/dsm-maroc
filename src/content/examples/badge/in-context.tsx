import { Badge } from "@/dsm/components/badge";
import { Card, CardBody, CardMeta, CardText } from "@/dsm/components/card";

export default function BadgeInContext() {
  return (
    <Card className="max-w-md">
      <CardBody>
        <CardMeta>Demande n° 2026-114 892</CardMeta>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-balance">Renouvellement de la CNIE</h3>
          <Badge tone="success" dot>
            Validée
          </Badge>
        </div>
        <CardText>Votre carte est prête. Retirez-la au bureau d&apos;arrondissement de Casablanca-Anfa muni de votre récépissé.</CardText>
      </CardBody>
    </Card>
  );
}
