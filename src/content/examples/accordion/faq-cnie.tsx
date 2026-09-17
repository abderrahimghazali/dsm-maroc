import { Accordion, AccordionItem } from "@/dsm/components/accordion";

export default function AccordionFaqCnie() {
  return (
    <div className="max-w-2xl">
      <h3 className="mb-4 text-lg font-semibold tracking-tight text-ink">Foire aux questions — Renouvellement de la CNIE</h3>
      <Accordion multiple defaultValue={["validite"]}>
        <AccordionItem value="validite" title="Ma carte est encore valide, puis-je la renouveler par anticipation ?">
          Oui, à partir de 90 jours avant la date d&apos;expiration inscrite sur votre carte actuelle. Passé ce délai, la demande est traitée comme un premier établissement.
        </AccordionItem>
        <AccordionItem value="retrait" title="Où retirer ma nouvelle carte ?">
          Au bureau d&apos;arrondissement ou au centre national des documents d&apos;identité où la demande a été déposée, muni du récépissé remis lors du dépôt.
        </AccordionItem>
        <AccordionItem value="perte" title="Ma carte a été perdue ou volée, que faire ?">
          Déclarez la perte ou le vol auprès du commissariat le plus proche, puis déposez une demande de duplicata sur watiqa.ma. Des frais de 75 MAD s&apos;appliquent dans ce cas.
        </AccordionItem>
        <AccordionItem value="suivi" title="Comment suivre l'avancement de ma demande ?">
          Le numéro de suivi communiqué lors du dépôt permet de consulter l&apos;état de la demande à tout moment, dans la rubrique « Suivre ma demande » de watiqa.ma.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
