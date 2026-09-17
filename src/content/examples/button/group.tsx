import { Button, ButtonGroup } from "@/dsm/components/button";

export default function ButtonGroupExample() {
  return (
    <ButtonGroup>
      <Button>Valider la demande de passeport</Button>
      <Button variant="secondary">Enregistrer un brouillon</Button>
      <Button variant="tertiary">Annuler</Button>
    </ButtonGroup>
  );
}
