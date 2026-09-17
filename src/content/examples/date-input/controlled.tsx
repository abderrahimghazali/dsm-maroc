"use client";

import { useState } from "react";
import { DateInput, parseDateMask } from "@/dsm/components/date-input";
import { Badge } from "@/dsm/components/badge";

export default function DateInputControlled() {
  const [value, setValue] = useState("");
  const parsed = parseDateMask(value);
  const complete = value.length === 10;
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-4">
      <DateInput
        label="Date de l'événement"
        value={value}
        onChange={setValue}
        error={complete && !parsed ? "Cette date est invalide." : undefined}
      />
      <div className="flex items-center gap-2 text-sm text-ink-muted">
        <span>Valeur :</span>
        <code className="rounded-sm bg-surface-muted px-1.5 py-0.5 font-mono text-xs">{value || "—"}</code>
        {parsed && (
          <Badge tone="success" dot>
            Valide
          </Badge>
        )}
      </div>
    </div>
  );
}
