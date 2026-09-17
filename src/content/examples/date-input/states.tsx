import { DateInput } from "@/dsm/components/date-input";

export default function DateInputStates() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <DateInput label="Date de délivrance de la CNIE" defaultValue="14/03/2019" hint="Indiquée au recto de la carte." />
      <DateInput label="Date d'expiration" defaultValue="31/02/2030" error="Cette date n'existe pas. Vérifiez le jour et le mois." />
      <DateInput label="Date de dépôt" defaultValue="12/09/2026" disabled hint="Renseignée automatiquement à la validation." />
    </div>
  );
}
