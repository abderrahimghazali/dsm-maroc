"use client";

import { useState } from "react";
import { Checkbox } from "@/dsm/components/checkbox";
import { Drawer } from "@/dsm/components/drawer";
import { Button } from "@/dsm/components/button";
import { ListFilter } from "@/dsm/icons";

const categories = ["État civil", "Identité", "Véhicules", "Santé", "Impôts"];

export default function DrawerComposed() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      trigger={<Button variant="secondary" iconStart={<ListFilter />}>Filtrer les démarches</Button>}
      title="Filtres"
      description="Affinez la liste des démarches par catégorie."
      footer={
        <div className="flex gap-2.5">
          <Button variant="secondary" className="flex-1" onClick={() => setOpen(false)}>
            Réinitialiser
          </Button>
          <Button className="flex-1" onClick={() => setOpen(false)}>
            Appliquer
          </Button>
        </div>
      }
    >
      <div className="space-y-2">
        {categories.map((c) => (
          <div key={c} className="px-1 py-1.5">
            <Checkbox size="sm" label={c} />
          </div>
        ))}
      </div>
    </Drawer>
  );
}
