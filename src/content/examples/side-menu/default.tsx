import { SideMenu } from "@/dsm/components/side-menu";

export default function SideMenuDefault() {
  return (
    <SideMenu
      title="État civil"
      items={[
        { label: "Vue d'ensemble", href: "#" },
        {
          label: "Actes de naissance",
          active: true,
          items: [
            { label: "Demander un extrait", href: "#", active: true },
            { label: "Rectifier une erreur", href: "#" },
            { label: "Transcription à l'étranger", href: "#" },
          ],
        },
        {
          label: "Actes de mariage",
          items: [
            { label: "Demander un extrait", href: "#" },
            { label: "Duplicata", href: "#" },
          ],
        },
        { label: "Actes de décès", href: "#" },
      ]}
    />
  );
}
