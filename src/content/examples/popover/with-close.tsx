import { Popover } from "@/dsm/components/popover";
import { Button } from "@/dsm/components/button";

export default function PopoverWithClose() {
  return (
    <Popover
      trigger={<Button variant="secondary">Statut du dossier</Button>}
      title="Dossier n° 2026-114872"
      closable
      description="Votre demande de renouvellement de passeport est en cours d'instruction depuis le 2 septembre 2026."
    >
      <p className="mt-3 text-xs text-ink-subtle">Délai moyen de traitement : 8 jours ouvrés.</p>
    </Popover>
  );
}
