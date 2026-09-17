import { Header } from "@/dsm/components/header";

const entity = {
  fr: "Caisse Nationale de Sécurité Sociale",
  ar: "الصندوق الوطني للضمان الاجتماعي",
  zgh: "ⴰⵙⵏⴷⵓⵇ ⴰⵏⴰⵎⵓⵔ ⵏ ⵓⵃⵟⵟⵓ ⴰⵏⴰⵎⵓⵔ",
  en: "National Social Security Fund",
};

export default function HeaderMinimal() {
  return (
    <Header
      entity={entity}
      service={{ title: "Espace assuré CNSS", tagline: "Déclarations et prestations sociales" }}
      search={false}
      login={{ href: "#connexion" }}
    />
  );
}
