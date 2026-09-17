import { Button, ButtonGroup } from "@/dsm/components/button";

export default function ButtonStates() {
  return (
    <ButtonGroup>
      <Button loading>Envoi de la demande…</Button>
      <Button variant="secondary" disabled>
        Paiement indisponible
      </Button>
    </ButtonGroup>
  );
}
