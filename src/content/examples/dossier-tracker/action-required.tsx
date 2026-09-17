import { DossierTracker } from "@/dsm/components/dossier-tracker";

export default function DossierTrackerActionRequired() {
  return (
    <DossierTracker
      className="w-full max-w-2xl"
      reference="2026-118204"
      title="Demande d'extrait d'acte de naissance"
      status="action-required"
      submittedAt="11 septembre 2026"
      updatedAt="12 septembre 2026"
      currentStep={1}
      steps={[
        { label: "Demande déposée", date: "11 sept." },
        { label: "Pièces vérifiées", description: "La copie de la CNIE est illisible : le recto doit être entièrement visible." },
        { label: "Signature électronique de l'officier d'état civil" },
        { label: "Extrait disponible" },
      ]}
      action={{
        label: "Déposer une nouvelle copie",
        href: "#",
        description: "Ajoutez une photo nette du recto de votre CNIE (PDF, JPG ou PNG, 5 Mo max). Le dossier reprendra automatiquement.",
      }}
    />
  );
}
