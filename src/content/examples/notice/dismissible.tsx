import { Notice } from "@/dsm/components/notice";

export default function NoticeDismissible() {
  return (
    <div className="-mx-4 sm:-mx-6">
      <Notice
        tone="info"
        title="Idarati.ma évolue"
        description="Un nouvel espace personnel regroupe désormais toutes vos démarches en cours."
        link={{ label: "Découvrir le nouvel espace", href: "#" }}
        dismissible
      />
    </div>
  );
}
