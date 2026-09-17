"use client";

import { useState } from "react";
import { Checkbox } from "@/dsm/components/checkbox";
import { Popover } from "@/dsm/components/popover";
import { Button } from "@/dsm/components/button";
import { Filter } from "@/dsm/icons";

const statuses = ["En cours", "En attente de pièces", "Terminée"];

export default function PopoverComposed() {
  const [selected, setSelected] = useState<string[]>(["En cours"]);

  function toggle(status: string) {
    setSelected((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]));
  }

  return (
    <Popover
      trigger={
        <Button variant="secondary" iconStart={<Filter />}>
          Filtrer mes démarches
        </Button>
      }
      title="Filtrer par statut"
      align="start"
    >
      <div className="mt-3 space-y-2">
        {statuses.map((status) => (
          <Checkbox key={status} size="sm" label={status} checked={selected.includes(status)} onCheckedChange={() => toggle(status)} />
        ))}
      </div>
    </Popover>
  );
}
