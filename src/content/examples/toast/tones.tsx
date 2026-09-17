"use client";

import { ToastProvider, Toaster, useToast, type ToastTone } from "@/dsm/components/toast";
import { Button, ButtonGroup } from "@/dsm/components/button";

const scenarios: { tone: ToastTone; label: string; title: string; description: string }[] = [
  { tone: "info", label: "Information", title: "Maintenance programmée", description: "Idarati.ma sera indisponible dimanche de 2h à 4h." },
  { tone: "success", label: "Succès", title: "Paiement confirmé", description: "Votre cotisation CNSS du mois d'août a bien été enregistrée." },
  { tone: "warning", label: "Avertissement", title: "Pièce bientôt expirée", description: "Votre justificatif de domicile arrive à expiration dans 5 jours." },
  { tone: "error", label: "Erreur", title: "Échec de l'envoi", description: "La connexion a été interrompue. Merci de réessayer votre demande." },
];

function ToneButtons() {
  const toast = useToast();
  return (
    <ButtonGroup>
      {scenarios.map((s) => (
        <Button
          key={s.tone}
          variant="secondary"
          size="sm"
          onClick={() => toast.add({ tone: s.tone, title: s.title, description: s.description })}
        >
          {s.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default function ToastTones() {
  return (
    <ToastProvider>
      <ToneButtons />
      <Toaster />
    </ToastProvider>
  );
}
