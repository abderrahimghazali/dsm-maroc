import { Alert } from "@/dsm/components/alert";

export default function AlertTones() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Alert tone="info" title="Nouvelle version du téléservice">
        Le portail Idarati.ma a été mis à jour le 12 septembre 2026.
      </Alert>
      <Alert tone="success" title="Paiement confirmé">
        Votre cotisation CNSS du mois d&apos;août a bien été enregistrée.
      </Alert>
      <Alert tone="warning" title="Vérifiez votre RIB">
        Le remboursement AMO ne pourra pas être versé tant que votre RIB n&apos;est pas confirmé.
      </Alert>
      <Alert tone="error" title="Document refusé">
        La copie de votre CNIE est illisible. Merci de la téléverser à nouveau.
      </Alert>
    </div>
  );
}
