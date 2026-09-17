"use client";

import { ToastProvider, Toaster, useToast } from "@/dsm/components/toast";
import { Button } from "@/dsm/components/button";

function RemoveDocumentButton() {
  const toast = useToast();
  return (
    <Button
      variant="secondary"
      onClick={() => {
        const id = toast.add({
          tone: "success",
          title: "Document retiré",
          description: "Le justificatif de domicile a été retiré de votre dossier n° 2026-114872.",
          action: {
            label: "Annuler",
            onClick: () => toast.close(id),
          },
        });
      }}
    >
      Retirer le justificatif de domicile
    </Button>
  );
}

export default function ToastWithAction() {
  return (
    <ToastProvider>
      <RemoveDocumentButton />
      <Toaster />
    </ToastProvider>
  );
}
