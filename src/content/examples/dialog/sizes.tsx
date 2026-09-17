"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/dsm/components/dialog";
import { Button, ButtonGroup } from "@/dsm/components/button";

const sizes = [
  { size: "sm", label: "Petite", title: "Code de vérification envoyé", body: "Un code à 6 chiffres a été envoyé au 06 12 34 56 78." },
  { size: "md", label: "Moyenne", title: "Créneau proposé", body: "Le créneau du 14 octobre à 10h30, antenne Idarati de Rabat-Agdal, vous est proposé." },
  { size: "lg", label: "Grande", title: "Récapitulatif de la demande", body: "Vérifiez les informations transmises avant l'envoi au bureau d'état civil." },
  { size: "full", label: "Pleine largeur", title: "Dossier n° 2026-114872", body: "Historique complet des pièces reçues et des étapes de traitement du dossier." },
] as const;

export default function DialogSizes() {
  const [openSize, setOpenSize] = useState<string | null>(null);

  return (
    <>
      <ButtonGroup>
        {sizes.map((s) => (
          <Button key={s.size} variant="secondary" size="sm" onClick={() => setOpenSize(s.size)}>
            {s.label}
          </Button>
        ))}
      </ButtonGroup>
      {sizes.map((s) => (
        <Dialog key={s.size} open={openSize === s.size} onOpenChange={(o) => setOpenSize(o ? s.size : null)}>
          <DialogContent size={s.size} title={s.title}>
            <p className="text-sm text-ink-muted">{s.body}</p>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
}
