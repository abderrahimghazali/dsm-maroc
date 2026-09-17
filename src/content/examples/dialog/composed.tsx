"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogFooter } from "@/dsm/components/dialog";
import { Button } from "@/dsm/components/button";

export default function DialogComposed() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen} trigger={<Button variant="secondary">Demander un duplicata</Button>}>
      <DialogContent
        title="Duplicata d'acte de naissance"
        description="Le document sera envoyé à l'adresse indiquée dans un délai de 5 jours ouvrés."
        footer={
          <DialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button onClick={() => setOpen(false)}>Envoyer la demande</Button>
          </DialogFooter>
        }
      >
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label htmlFor="dialog-composed-num" className="block text-sm font-medium text-ink">
              Numéro d&apos;acte
            </label>
            <input
              id="dialog-composed-num"
              type="text"
              placeholder="2019/RB/00456"
              className="h-11 w-full rounded-md border border-line-strong bg-surface px-3.5 text-sm text-ink outline-none placeholder:text-ink-subtle focus-visible:ring-2 focus-visible:ring-focus"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="dialog-composed-adr" className="block text-sm font-medium text-ink">
              Adresse de livraison
            </label>
            <input
              id="dialog-composed-adr"
              type="text"
              placeholder="12 rue Ibn Sina, Agdal, Rabat"
              className="h-11 w-full rounded-md border border-line-strong bg-surface px-3.5 text-sm text-ink outline-none placeholder:text-ink-subtle focus-visible:ring-2 focus-visible:ring-focus"
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
