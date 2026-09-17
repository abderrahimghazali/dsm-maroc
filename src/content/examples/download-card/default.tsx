import { DownloadCard } from "@/dsm/components/download-card";

export default function DownloadCardDefault() {
  return (
    <DownloadCard
      className="max-w-md"
      title="Formulaire de demande de CNIE"
      description="Formulaire à remplir avant le dépôt au guichet ou en ligne sur watiqa.ma."
      href="#"
      format="PDF"
      size="1,2 Mo"
      lang="fr"
      updatedAt="3 février 2026"
    />
  );
}
