import { FileUpload } from "@/dsm/components/file-upload";

export default function FileUploadDefault() {
  return (
    <div className="mx-auto max-w-md">
      <FileUpload label="Justificatif de domicile" accept=".pdf,.jpg,.jpeg,.png" maxSizeMb={5} />
    </div>
  );
}
