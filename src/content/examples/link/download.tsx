import { DownloadLink } from "@/dsm/components/link";

export default function LinkDownload() {
  return (
    <ul className="flex flex-col gap-1">
      <li>
        <DownloadLink href="#" label="Formulaire de demande de CNIE" format="PDF" size="1,2 Mo" />
      </li>
      <li>
        <DownloadLink href="#" label="Notice explicative — passeport biométrique" format="PDF" size="640 Ko" />
      </li>
      <li>
        <DownloadLink href="#" label="Attestation sur l'honneur" format="DOCX" size="85 Ko" />
      </li>
    </ul>
  );
}
