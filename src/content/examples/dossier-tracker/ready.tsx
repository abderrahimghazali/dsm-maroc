import { DossierTracker } from "@/dsm/components/dossier-tracker";

export default function DossierTrackerReady() {
  return (
    <DossierTracker
      className="w-full max-w-2xl"
      reference="2026-109331"
      title="Attestation de régularité fiscale"
      status="ready"
      submittedAt="1er septembre 2026"
      updatedAt="3 septembre 2026"
      currentStep={3}
      steps={[
        { label: "Demande déposée", date: "1er sept." },
        { label: "Situation fiscale vérifiée", date: "2 sept." },
        { label: "Attestation signée", date: "3 sept.", description: "Document PDF signé électroniquement, valable 3 mois." },
      ]}
      action={{ label: "Télécharger l'attestation (PDF)", href: "#" }}
    />
  );
}
