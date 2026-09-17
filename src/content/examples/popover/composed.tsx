"use client";

import { useState } from "react";
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
          <label key={status} className="flex items-center gap-2.5 text-sm text-ink">
            <input
              type="checkbox"
              checked={selected.includes(status)}
              onChange={() => toggle(status)}
              className="size-4 rounded-sm border-line-strong text-primary focus-visible:ring-2 focus-visible:ring-focus"
            />
            {status}
          </label>
        ))}
      </div>
    </Popover>
  );
}
