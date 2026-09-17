import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/dsm/components/table";

export default function TableDefault() {
  return (
    <Table caption="Démarches les plus consultées cette semaine">
      <TableHead>
        <TableRow>
          <TableHeader>Démarche</TableHeader>
          <TableHeader>Ministère</TableHeader>
          <TableHeader numeric>Délai moyen</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Renouvellement de la CNIE</TableCell>
          <TableCell className="text-ink-muted">Intérieur</TableCell>
          <TableCell numeric>5 jours</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Extrait d&apos;acte de naissance</TableCell>
          <TableCell className="text-ink-muted">Intérieur</TableCell>
          <TableCell numeric>48 heures</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Carte grise</TableCell>
          <TableCell className="text-ink-muted">Équipement et Eau</TableCell>
          <TableCell numeric>3 jours</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Attestation fiscale</TableCell>
          <TableCell className="text-ink-muted">Économie et Finances</TableCell>
          <TableCell numeric>24 heures</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
