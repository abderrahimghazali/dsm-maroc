import { Accordion, AccordionItem } from "@/dsm/components/accordion";

export default function AccordionSeparated() {
  return (
    <Accordion variant="separated" className="max-w-2xl">
      <AccordionItem value="etat-civil" title="État civil">
        Actes de naissance, de mariage et de décès, reconnaissance et rectification d&apos;actes auprès des bureaux d&apos;état civil.
      </AccordionItem>
      <AccordionItem value="identite" title="Identité et voyage">
        Carte nationale d&apos;identité électronique, passeport biométrique, carte de résident pour les étrangers établis au Maroc.
      </AccordionItem>
      <AccordionItem value="fiscalite" title="Fiscalité">
        Déclaration de l&apos;impôt sur le revenu, attestations fiscales et régularisation de la taxe professionnelle.
      </AccordionItem>
    </Accordion>
  );
}
