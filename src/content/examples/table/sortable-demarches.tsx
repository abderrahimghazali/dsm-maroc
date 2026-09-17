"use client";

import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableSortButton,
  type SortDirection,
} from "@/dsm/components/table";

type Demarche = {
  nom: string;
  ministere: string;
  demandesParMois: number;
  delaiJours: number;
};

const demarches: Demarche[] = [
  { nom: "Renouvellement de la CNIE", ministere: "Intérieur", demandesParMois: 412000, delaiJours: 5 },
  { nom: "Extrait d'acte de naissance", ministere: "Intérieur", demandesParMois: 356000, delaiJours: 2 },
  { nom: "Casier judiciaire (extrait B3)", ministere: "Justice", demandesParMois: 187300, delaiJours: 4 },
  { nom: "Carte grise (changement de propriétaire)", ministere: "Équipement et Eau", demandesParMois: 128500, delaiJours: 3 },
  { nom: "Attestation fiscale", ministere: "Économie et Finances", demandesParMois: 94200, delaiJours: 1 },
  { nom: "Duplicata du permis de conduire", ministere: "Équipement et Eau", demandesParMois: 41800, delaiJours: 7 },
];

type SortKey = "demandesParMois" | "delaiJours";

export default function TableSortableDemarches() {
  const [sortKey, setSortKey] = useState<SortKey>("demandesParMois");
  const [direction, setDirection] = useState<SortDirection>("desc");

  const rows = useMemo(() => {
    const sorted = [...demarches].sort((a, b) => a[sortKey] - b[sortKey]);
    return direction === "asc" ? sorted : sorted.reverse();
  }, [sortKey, direction]);

  function toggle(key: SortKey) {
    if (key === sortKey) setDirection((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setDirection("desc");
    }
  }

  return (
    <Table zebra stickyHeader caption="Démarches les plus demandées, par volume mensuel" containerClassName="max-h-72">
      <TableHead>
        <TableRow>
          <TableHeader>Démarche</TableHeader>
          <TableHeader>Ministère</TableHeader>
          <TableHeader numeric>
            <TableSortButton
              numeric
              direction={sortKey === "demandesParMois" ? direction : "none"}
              onSort={() => toggle("demandesParMois")}
            >
              Demandes / mois
            </TableSortButton>
          </TableHeader>
          <TableHeader numeric>
            <TableSortButton numeric direction={sortKey === "delaiJours" ? direction : "none"} onSort={() => toggle("delaiJours")}>
              Délai moyen
            </TableSortButton>
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((d) => (
          <TableRow key={d.nom}>
            <TableCell>{d.nom}</TableCell>
            <TableCell className="text-ink-muted">{d.ministere}</TableCell>
            <TableCell numeric>{d.demandesParMois.toLocaleString("fr-FR")}</TableCell>
            <TableCell numeric>{d.delaiJours} j</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
