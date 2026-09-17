import { Quote } from "@/dsm/components/quote";

export default function QuoteSizes() {
  return (
    <div className="max-w-lg space-y-8">
      <Quote size="md" author="Youssef K." role="Usager, Tanger">
        La télédéclaration m&apos;a évité un aller-retour de deux heures jusqu&apos;au centre des impôts.
      </Quote>
      <Quote size="lg" author="Fatima-Zahra E." role="Usagère, Agadir">
        En dix ans d&apos;attente pour un acte de naissance par courrier, jamais je n&apos;aurais imaginé l&apos;obtenir en PDF signé le jour même.
      </Quote>
    </div>
  );
}
