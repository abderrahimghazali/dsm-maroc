import { Button, ButtonGroup } from "@/dsm/components/button";
import { Plus } from "@/dsm/icons";

export default function ButtonSizes() {
  return (
    <ButtonGroup>
      <Button size="sm">Petit</Button>
      <Button size="md">Moyen</Button>
      <Button size="lg">Grand</Button>
      <Button size="icon-sm" variant="secondary" aria-label="Ajouter une pièce jointe">
        <Plus />
      </Button>
      <Button size="icon" aria-label="Ajouter une pièce jointe">
        <Plus />
      </Button>
    </ButtonGroup>
  );
}
