import { Button, ButtonGroup } from "@/dsm/components/button";
import { ArrowForward, Download, Upload } from "@/dsm/icons";

export default function ButtonIcons() {
  return (
    <ButtonGroup>
      <Button iconStart={<Upload />}>Téléverser mon CNIE</Button>
      <Button variant="secondary" iconEnd={<ArrowForward />}>
        Étape suivante
      </Button>
      <Button variant="secondary" size="icon" aria-label="Télécharger l'accusé de réception">
        <Download />
      </Button>
    </ButtonGroup>
  );
}
