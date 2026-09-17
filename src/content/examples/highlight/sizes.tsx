import { Highlight } from "@/dsm/components/highlight";

export default function HighlightSizes() {
  return (
    <div className="max-w-xl space-y-6">
      <Highlight size="sm">La demande de passeport biométrique nécessite un rendez-vous préalable dans 6 régions sur 12.</Highlight>
      <Highlight size="md">
        Le numéro d&apos;identification national (CIN) reste inchangé à vie, y compris en cas de renouvellement ou de duplicata de la carte.
      </Highlight>
      <Highlight size="lg">
        La dématérialisation des marchés publics a permis de réduire de 30 % le délai moyen de traitement des appels d&apos;offres depuis 2024.
      </Highlight>
    </div>
  );
}
