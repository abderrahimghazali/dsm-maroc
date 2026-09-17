import { Timeline } from "@/dsm/components/timeline";

export default function TimelineSuiviDossier() {
  return (
    <div className="max-w-lg">
      <h3 className="mb-5 text-lg font-semibold tracking-tight text-ink">Suivi de la demande de passeport n° PB-2026-0341179</h3>
      <Timeline
        items={[
          { date: "2 septembre 2026", title: "Demande déposée", description: "Dépôt au centre CNIE de Meknès.", status: "completed" },
          { date: "4 septembre 2026", title: "Paiement confirmé", description: "Frais de 300 MAD réglés par carte bancaire.", status: "completed" },
          { date: "9 septembre 2026", title: "Fabrication en cours", description: "Le passeport est en cours de personnalisation.", status: "current" },
          { date: "Estimation : 15 septembre 2026", title: "Disponible au retrait", status: "upcoming" },
        ]}
      />
    </div>
  );
}
