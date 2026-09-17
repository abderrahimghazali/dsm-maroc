import { Accordion, AccordionItem } from "@/dsm/components/accordion";

export default function AccordionDefault() {
  return (
    <Accordion defaultValue={["delais"]} className="max-w-2xl">
      <AccordionItem value="delais" title="Quel est le délai de traitement ?">
        Le délai moyen est de 5 jours ouvrés pour une demande complète déposée en ligne, contre 10 jours ouvrés au guichet.
      </AccordionItem>
      <AccordionItem value="pieces" title="Quelles pièces justificatives fournir ?">
        Une copie de la CNIE en cours de validité, un justificatif de domicile de moins de 3 mois et deux photos d&apos;identité récentes.
      </AccordionItem>
      <AccordionItem value="cout" title="Quel est le coût de la démarche ?">
        La démarche est gratuite en ligne. Des frais de 75 MAD s&apos;appliquent uniquement pour un duplicata suite à une perte.
      </AccordionItem>
    </Accordion>
  );
}
