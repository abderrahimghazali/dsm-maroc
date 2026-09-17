import { FileUpload } from "@/dsm/components/file-upload";

export default function FileUploadStates() {
  return (
    <div className="mx-auto max-w-md">
      <FileUpload label="Copie de la CNIE" accept=".pdf,.jpg,.png" maxSizeMb={5} error="Le fichier dépasse la taille maximale autorisée." />
    </div>
  );
}
