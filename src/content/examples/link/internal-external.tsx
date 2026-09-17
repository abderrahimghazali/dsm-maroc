import { TextLink } from "@/dsm/components/link";

export default function LinkInternalExternal() {
  return (
    <p className="max-w-md text-sm leading-relaxed text-ink-muted">
      Consultez la liste des <TextLink href="#">pièces à fournir</TextLink> avant de déposer votre dossier, ou rendez-vous
      directement sur <TextLink href="https://www.idarati.ma">idarati.ma</TextLink> pour suivre son avancement.
    </p>
  );
}
