import { Badge } from "@/dsm/components/badge";
import { Card, CardArrow, CardBadges, CardBody, CardFooter, CardMedia, CardMeta, CardText, CardTitle } from "@/dsm/components/card";

const demarches = [
  {
    meta: "DGSN · Gratuit",
    title: "Renouveler ma carte nationale d'identité électronique",
    text: "Dossier en ligne, retrait au bureau d'arrondissement dans un délai de 10 jours ouvrés.",
    badge: { tone: "success" as const, label: "En ligne" },
    gradient: "from-vert to-vert-hover",
  },
  {
    meta: "CNSS · Payant",
    title: "Adhérer à l'Assurance Maladie Obligatoire",
    text: "Constituez votre dossier AMO et suivez le remboursement de vos prestations de santé.",
    badge: { tone: "warning" as const, label: "En cours" },
    gradient: "from-safran to-safran-hover",
  },
  {
    meta: "Ministère de l'Intérieur",
    title: "Immatriculer un véhicule neuf",
    text: "Obtenez votre carte grise définitive après contrôle du dossier par la préfecture.",
    badge: { tone: "info" as const, label: "3 jours" },
    gradient: "from-bleu to-bleu-hover",
  },
];

export default function CardGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {demarches.map((d) => (
        <Card key={d.title} interactive>
          <CardMedia>
            <div className={`size-full bg-gradient-to-br ${d.gradient}`} />
          </CardMedia>
          <CardBody>
            <CardMeta>{d.meta}</CardMeta>
            <CardTitle href="#">{d.title}</CardTitle>
            <CardText>{d.text}</CardText>
            <CardFooter>
              <CardBadges>
                <Badge tone={d.badge.tone} dot>
                  {d.badge.label}
                </Badge>
              </CardBadges>
              <CardArrow />
            </CardFooter>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
