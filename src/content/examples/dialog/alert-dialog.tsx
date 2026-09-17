import { AlertDialog } from "@/dsm/components/dialog";
import { Button } from "@/dsm/components/button";

export default function DialogAlertDialog() {
  return (
    <AlertDialog
      trigger={<Button variant="danger">Annuler le rendez-vous</Button>}
      title="Annuler ce rendez-vous ?"
      description="Le créneau du 14 octobre à 10h30 sera libéré et proposé à un autre usager. Cette action est irréversible."
      tone="danger"
      confirmLabel="Annuler le rendez-vous"
      cancelLabel="Garder le rendez-vous"
    />
  );
}
