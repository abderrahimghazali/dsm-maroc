import { FileUpload } from "@/dsm/components/file-upload";

export default function FileUploadMultiple() {
  return (
    <div className="mx-auto max-w-md">
      <FileUpload label="Pages de l'acte de propriété" accept=".pdf,.jpg,.jpeg" maxSizeMb={10} multiple />
    </div>
  );
}
