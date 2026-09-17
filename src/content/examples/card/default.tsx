import { Badge } from "@/dsm/components/badge";
import { Card, CardArrow, CardBadges, CardBody, CardFooter, CardMedia, CardMeta, CardText, CardTitle } from "@/dsm/components/card";

export default function CardDefault() {
  return (
    <Card interactive className="max-w-sm">
      <CardMedia>
        <div className="size-full bg-gradient-to-br from-vert to-vert-hover" />
      </CardMedia>
      <CardBody>
        <CardMeta>Démarche · Gratuit</CardMeta>
        <CardTitle href="#">Demander un extrait d&apos;acte de naissance</CardTitle>
        <CardText>Obtenez votre extrait en ligne, livré en PDF signé électroniquement sous 48 heures.</CardText>
        <CardFooter>
          <CardBadges>
            <Badge tone="success" dot>
              En ligne
            </Badge>
          </CardBadges>
          <CardArrow />
        </CardFooter>
      </CardBody>
    </Card>
  );
}
