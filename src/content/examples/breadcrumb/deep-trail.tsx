import { Breadcrumb } from "@/dsm/components/breadcrumb";

export default function BreadcrumbDeepTrail() {
  return (
    <Breadcrumb
      items={[
        { label: "Accueil", href: "#" },
        { label: "Ministère de l'Intérieur", href: "#" },
        { label: "Direction Générale des Collectivités Locales", href: "#" },
        { label: "Région Rabat-Salé-Kénitra", href: "#" },
        { label: "État civil", href: "#" },
        { label: "Duplicata d'acte de mariage" },
      ]}
    />
  );
}
