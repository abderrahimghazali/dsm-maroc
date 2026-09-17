import { Callout } from "@/dsm/components/callout";
import { Button } from "@/dsm/components/button";
import { CalendarCheck } from "@/dsm/icons";

export default function CalloutWithAction() {
  return (
    <Callout
      tone="vert"
      icon={<CalendarCheck />}
      title="Prenez rendez-vous pour éviter la file d'attente"
      action={<Button size="sm">Prendre rendez-vous</Button>}
      className="max-w-2xl"
    >
      Les centres CNIE de Casablanca, Rabat et Marrakech proposent désormais la prise de rendez-vous en ligne pour tout dépôt de dossier.
    </Callout>
  );
}
