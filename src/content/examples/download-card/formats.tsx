import { DownloadCard } from "@/dsm/components/download-card";

export default function DownloadCardFormats() {
  return (
    <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
      <DownloadCard title="Notice explicative" href="#" format="PDF" size="640 Ko" lang="fr" />
      <DownloadCard title="نموذج طلب البطاقة" href="#" format="PDF" size="710 Ko" lang="ar" />
      <DownloadCard title="Trame de dossier de subvention" href="#" format="DOCX" size="98 Ko" updatedAt="14 janvier 2026" />
      <DownloadCard title="Barème des redevances 2026" href="#" format="XLSX" size="215 Ko" updatedAt="1 janvier 2026" />
    </div>
  );
}
