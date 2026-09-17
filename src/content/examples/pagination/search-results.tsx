"use client";

import { useState } from "react";
import { Pagination } from "@/dsm/components/pagination";

const demarches = [
  "Renouveler ma Carte Nationale d'Identité Électronique",
  "Demander un passeport biométrique",
  "Immatriculer un véhicule neuf",
  "Adhérer à l'Assurance Maladie Obligatoire",
  "Demander un extrait d'acte de naissance",
];

export default function PaginationSearchResults() {
  const [page, setPage] = useState(1);
  const pageCount = 9;

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-muted">
        <span className="font-semibold text-ink">42 démarches</span> trouvées pour « identité »
      </p>
      <ul className="divide-y divide-line rounded-lg border border-line">
        {demarches.map((label) => (
          <li key={label} className="px-4 py-3 text-sm text-ink">
            {label}
          </li>
        ))}
      </ul>
      <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
    </div>
  );
}
