import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/dsm/components/table";

const villes = [
  { nom: "Casablanca", region: "Casablanca-Settat", population: "3 359 818" },
  { nom: "Rabat", region: "Rabat-Salé-Kénitra", population: "577 827" },
  { nom: "Fès", region: "Fès-Meknès", population: "1 112 072" },
  { nom: "Marrakech", region: "Marrakech-Safi", population: "928 850" },
  { nom: "Tanger", region: "Tanger-Tétouan-Al Hoceïma", population: "947 952" },
];

function VillesTable(props: { zebra?: boolean; bordered?: boolean; dense?: boolean }) {
  return (
    <Table {...props} caption="Population des principales villes (RGPH 2024)" captionHidden>
      <TableHead>
        <TableRow>
          <TableHeader>Ville</TableHeader>
          <TableHeader>Région</TableHeader>
          <TableHeader numeric>Population</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {villes.map((v) => (
          <TableRow key={v.nom}>
            <TableCell>{v.nom}</TableCell>
            <TableCell className="text-ink-muted">{v.region}</TableCell>
            <TableCell numeric>{v.population}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function TableVariants() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Zébrée</p>
        <VillesTable zebra />
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Bordée et compacte</p>
        <VillesTable bordered dense />
      </div>
    </div>
  );
}
