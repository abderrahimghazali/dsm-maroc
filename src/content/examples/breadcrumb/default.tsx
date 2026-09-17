import { Breadcrumb } from "@/dsm/components/breadcrumb";

export default function BreadcrumbDefault() {
  return (
    <Breadcrumb
      items={[
        { label: "Accueil", href: "#" },
        { label: "Démarches", href: "#" },
        { label: "État civil", href: "#" },
        { label: "Extrait d'acte de naissance" },
      ]}
    />
  );
}
