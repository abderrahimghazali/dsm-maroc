"use client";

import { useState } from "react";
import { Tag, TagGroup } from "@/dsm/components/tag";

export default function TagDismissible() {
  const [filters, setFilters] = useState(["Région : Rabat-Salé-Kénitra", "Statut : En ligne", "Coût : Gratuit"]);

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">Filtres actifs</p>
      {filters.length > 0 ? (
        <TagGroup>
          {filters.map((label) => (
            <Tag key={label} dismissible onDismiss={() => setFilters((prev) => prev.filter((f) => f !== label))}>
              {label}
            </Tag>
          ))}
        </TagGroup>
      ) : (
        <p className="text-sm text-ink-muted">Aucun filtre actif.</p>
      )}
    </div>
  );
}
