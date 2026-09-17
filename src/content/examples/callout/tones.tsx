import { Callout } from "@/dsm/components/callout";
import { BadgeCheck, CircleAlert, Info, ShieldCheck } from "@/dsm/icons";

export default function CalloutTones() {
  return (
    <div className="grid max-w-2xl gap-4">
      <Callout tone="neutral" title="Bon à savoir">
        Les horaires d&apos;été des guichets s&apos;appliquent du 1er juillet au 30 septembre : 8h30 à 15h00, du lundi au vendredi.
      </Callout>
      <Callout tone="vert" icon={<BadgeCheck />} title="Démarche 100 % en ligne">
        Cette procédure ne nécessite aucun déplacement : dépôt, paiement et retrait du document se font depuis votre espace watiqa.ma.
      </Callout>
      <Callout tone="rouge" icon={<CircleAlert />} title="Date limite">
        Les déclarations fiscales des revenus professionnels doivent être télétransmises avant le 31 mars 2026, sous peine de majoration.
      </Callout>
      <Callout tone="bleu" icon={<Info />} title="Nouveau service">
        L&apos;attestation de résidence est désormais délivrable en ligne pour les 12 communes de la préfecture de Rabat.
      </Callout>
      <Callout tone="safran" icon={<ShieldCheck />} title="Vérifiez l'authenticité">
        Chaque document délivré porte un QR code de vérification. Ne transmettez jamais vos identifiants à un intermédiaire.
      </Callout>
    </div>
  );
}
