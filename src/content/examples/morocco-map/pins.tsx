import { MoroccoMap, type MoroccoMapPin } from "@/dsm/components/morocco-map";
import { moroccoRegions } from "@/dsm/data/morocco-regions";
import { TextLink } from "@/dsm/components/link";

const hours = "Lun.–ven. 8h30–16h30";
const byId = Object.fromEntries(moroccoRegions.map((r) => [r.id, r]));

// Fictitious reception centres in five chef-lieux.
const centres: MoroccoMapPin[] = [
  { id: "rabat", coords: byId["rabat-sale-kenitra"].capitalCoords, label: "Rabat", description: "Centre d'accueil central", content: <Details address="Avenue Mohammed V, Hassan" phone="05 37 00 00 00" /> },
  { id: "casablanca", coords: byId["casablanca-settat"].capitalCoords, label: "Casablanca", description: "Antenne Idarati de Casablanca-Settat", content: <Details address="Boulevard Zerktouni, Maârif" phone="05 22 00 00 00" /> },
  { id: "marrakech", coords: byId["marrakech-safi"].capitalCoords, label: "Marrakech", description: "Antenne de Marrakech-Safi", content: <Details address="Avenue Mohammed VI, Guéliz" phone="05 24 00 00 00" /> },
  { id: "oujda", coords: byId["oriental"].capitalCoords, label: "Oujda", description: "Antenne de l'Oriental", content: <Details address="Boulevard Derfoufi" phone="05 36 00 00 00" /> },
  { id: "laayoune", coords: byId["laayoune-sakia-el-hamra"].capitalCoords, label: "Laâyoune", description: "Antenne de Laâyoune-Sakia El Hamra", tone: "primary", content: <Details address="Avenue de la Mecque" phone="05 28 00 00 00" /> },
];

function Details({ address, phone }: { address: string; phone: string }) {
  return (
    <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-ink-muted">
      <dt className="font-medium text-ink">Adresse</dt>
      <dd>{address}</dd>
      <dt className="font-medium text-ink">Horaires</dt>
      <dd>{hours}</dd>
      <dt className="font-medium text-ink">Téléphone</dt>
      <dd>
        <TextLink href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</TextLink>
      </dd>
    </dl>
  );
}

export default function MoroccoMapPins() {
  return (
    <div className="w-full max-w-lg">
      <p className="mb-3 text-sm font-semibold text-ink">Centres d&apos;accueil — cliquez sur un repère</p>
      <MoroccoMap pins={centres} pinLabels caption={false} className="w-full" />
    </div>
  );
}
