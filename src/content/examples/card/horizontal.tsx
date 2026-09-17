import { Card, CardArrow, CardBody, CardFooter, CardMedia, CardMeta, CardText, CardTitle } from "@/dsm/components/card";

export default function CardHorizontal() {
  return (
    <Card interactive orientation="horizontal" className="max-w-2xl">
      <CardMedia>
        <div className="size-full bg-gradient-to-br from-bleu to-bleu-hover" />
      </CardMedia>
      <CardBody>
        <CardMeta>Direction Générale de la Sûreté Nationale</CardMeta>
        <CardTitle href="#">Passeport biométrique en 5 jours</CardTitle>
        <CardText>Prenez rendez-vous en ligne, déposez votre dossier au centre le plus proche et suivez son avancement depuis votre espace personnel.</CardText>
        <CardFooter>
          <CardArrow label="Prendre rendez-vous" />
        </CardFooter>
      </CardBody>
    </Card>
  );
}
