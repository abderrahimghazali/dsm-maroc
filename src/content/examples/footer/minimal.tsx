import { Footer } from "@/dsm/components/footer";

const entity = {
  fr: "Caisse Nationale de Sécurité Sociale",
  ar: "الصندوق الوطني للضمان الاجتماعي",
  zgh: "ⴰⵙⵏⴷⵓⵇ ⴰⵏⴰⵎⵓⵔ ⵏ ⵓⵃⵟⵟⵓ ⴰⵏⴰⵎⵓⵔ",
  en: "National Social Security Fund",
};

export default function FooterMinimal() {
  return (
    <Footer
      entity={entity}
      description="L'espace assuré CNSS permet de déclarer vos salariés et de suivre vos prestations sociales en ligne."
      bottomLinks={[
        { label: "Mentions légales", href: "#" },
        { label: "Données personnelles", href: "#" },
      ]}
      license="© Caisse Nationale de Sécurité Sociale"
    />
  );
}
