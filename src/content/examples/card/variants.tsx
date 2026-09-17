import { Card, CardArrow, CardBody, CardFooter, CardMeta, CardText, CardTitle } from "@/dsm/components/card";

export default function CardVariants() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Card interactive>
        <CardBody>
          <CardMeta>Défaut</CardMeta>
          <CardTitle href="#">Extrait d&apos;acte de naissance</CardTitle>
          <CardText>Fond neutre avec bordure fine, l&apos;usage le plus courant.</CardText>
          <CardFooter>
            <CardArrow />
          </CardFooter>
        </CardBody>
      </Card>
      <Card interactive variant="tinted">
        <CardBody>
          <CardMeta>Teinté</CardMeta>
          <CardTitle href="#">Attestation de résidence</CardTitle>
          <CardText>Fond légèrement grisé, sans bordure, pour un groupe secondaire.</CardText>
          <CardFooter>
            <CardArrow />
          </CardFooter>
        </CardBody>
      </Card>
      <Card interactive variant="outlined">
        <CardBody>
          <CardMeta>Contouré</CardMeta>
          <CardTitle href="#">Renouvellement de la carte grise</CardTitle>
          <CardText>Bordure marquée sans remplissage, pour un fond déjà chargé.</CardText>
          <CardFooter>
            <CardArrow />
          </CardFooter>
        </CardBody>
      </Card>
      <Card interactive variant="ghost">
        <CardBody>
          <CardMeta>Discret</CardMeta>
          <CardTitle href="#">Guide du permis de conduire</CardTitle>
          <CardText>Sans fond ni bordure, pour s&apos;intégrer à une liste déjà encadrée.</CardText>
          <CardFooter>
            <CardArrow />
          </CardFooter>
        </CardBody>
      </Card>
      <Card variant="inverse">
        <CardBody>
          <CardMeta className="text-ink-inverse/60">Chiffre clé</CardMeta>
          <p className="text-4xl font-semibold tracking-tighter">1,2 M</p>
          <CardText className="text-ink-inverse/70">démarches réalisées en ligne ce mois-ci.</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
