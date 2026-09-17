import { DownloadCard } from "@/dsm/components/download-card";

export default function DownloadCardDocumentsOfficiels() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold tracking-tight text-ink">Formulaires — Création d&apos;entreprise</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <DownloadCard
          title="Statuts types de SARL"
          description="Modèle de statuts pour une société à responsabilité limitée."
          href="#"
          format="DOCX"
          size="86 Ko"
          lang="fr"
          updatedAt="10 juillet 2025"
        />
        <DownloadCard
          title="Demande de certificat négatif"
          description="À déposer auprès de l'Office Marocain de la Propriété Industrielle et Commerciale."
          href="#"
          format="PDF"
          size="450 Ko"
          lang="fr"
          updatedAt="10 juillet 2025"
        />
        <DownloadCard
          title="Guide du créateur d'entreprise"
          description="Étapes, coûts et délais pour immatriculer une société au registre du commerce."
          href="#"
          format="PDF"
          size="3,4 Mo"
          lang="fr"
          updatedAt="2 mars 2026"
        />
        <DownloadCard
          title="دليل منشئ المقاولة"
          href="#"
          format="PDF"
          size="3,1 Mo"
          lang="ar"
          updatedAt="2 مارس 2026"
        />
      </div>
    </div>
  );
}
