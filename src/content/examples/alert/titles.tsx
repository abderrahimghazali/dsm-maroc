import { Alert } from "@/dsm/components/alert";

export default function AlertTitles() {
  return (
    <div className="grid gap-4">
      <Alert tone="info" title="Maintenance programmée">
        Le service sera indisponible dimanche 20 septembre de 2h à 4h pour une opération de maintenance.
      </Alert>
      <Alert tone="info">Votre rendez-vous au centre CNIE de Marrakech est confirmé pour le 24 septembre à 10h.</Alert>
    </div>
  );
}
