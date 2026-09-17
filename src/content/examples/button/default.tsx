import { Button, ButtonGroup } from "@/dsm/components/button";

export default function ButtonDefault() {
  return (
    <ButtonGroup>
      <Button>Déposer la demande</Button>
      <Button variant="secondary">Enregistrer un brouillon</Button>
      <Button variant="tertiary">Voir les pièces requises</Button>
      <Button variant="ghost">Réinitialiser</Button>
      <Button variant="accent">Suivre ma demande</Button>
      <Button variant="danger">Retirer ma demande</Button>
      <Button variant="inverse">Contacter la commune</Button>
      <Button variant="link">Consulter le guide de la démarche</Button>
    </ButtonGroup>
  );
}
