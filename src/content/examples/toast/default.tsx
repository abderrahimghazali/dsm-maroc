"use client";

import { ToastProvider, Toaster, useToast } from "@/dsm/components/toast";
import { Button } from "@/dsm/components/button";

function SendRequestButton() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast.add({
          title: "Demande transmise",
          description: "Votre demande n° 2026-114872 a été transmise au bureau d'état civil de Rabat-Agdal.",
        })
      }
    >
      Envoyer ma demande
    </Button>
  );
}

export default function ToastDefault() {
  return (
    <ToastProvider>
      <SendRequestButton />
      <Toaster />
    </ToastProvider>
  );
}
