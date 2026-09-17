import { Card, CardBody, CardMeta, CardText } from "@/dsm/components/card";

export default function CardInformational() {
  return (
    <Card variant="tinted" className="max-w-md">
      <CardBody>
        <CardMeta>Bon à savoir</CardMeta>
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-balance">Horaires des bureaux d&apos;état civil</h3>
        <CardText>
          Les bureaux d&apos;état civil des communes de Rabat, Casablanca et Marrakech reçoivent le public du lundi au vendredi,
          de 8h30 à 16h00, sans interruption.
        </CardText>
      </CardBody>
    </Card>
  );
}
