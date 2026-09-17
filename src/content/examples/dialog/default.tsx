"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogFooter } from "@/dsm/components/dialog";
import { Button } from "@/dsm/components/button";

export default function DialogDefault() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen} trigger={<Button>Déposer mon dossier</Button>}>
      <DialogContent
        title="Confirmer le dépôt du dossier"
        description="Une fois transmis, votre demande de renouvellement de passeport ne pourra plus être modifiée."
        footer={
          <DialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button onClick={() => setOpen(false)}>Confirmer le dépôt</Button>
          </DialogFooter>
        }
      >
        <p className="mb-3 text-sm font-medium text-ink">Pièces jointes à ce dossier</p>
        <ul className="space-y-2 text-sm text-ink-muted">
          <li>Copie de la CNIE en cours de validité</li>
          <li>Ancien passeport, si disponible</li>
          <li>Justificatif de domicile de moins de 3 mois</li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
