import { DossierTracker } from "@/dsm/components/dossier-tracker";

export default function DossierTrackerDefault() {
  return (
    <DossierTracker
      className="w-full max-w-2xl"
      reference="2026-114872"
      title="Renouvellement de passeport biométrique"
      status="in-review"
      submittedAt="2 septembre 2026"
      updatedAt="9 septembre 2026"
      expectedBy="sous 8 jours ouvrés"
      currentStep={2}
      steps={[
        { label: "Demande déposée", date: "2 sept.", description: "Formulaire et pièces reçus par la préfecture de Rabat." },
        { label: "Pièces vérifiées", date: "4 sept." },
        { label: "Instruction par la préfecture", description: "Vérification d'identité et de l'ancien titre." },
        { label: "Fabrication du passeport" },
        { label: "Retrait au guichet" },
      ]}
      contact="Une question ? Appelez le 05 37 00 00 00, du lundi au vendredi de 8h30 à 16h30."
    />
  );
}
