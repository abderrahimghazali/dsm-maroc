import { Tab, TabPanel, Tabs, TabsList } from "@/dsm/components/tabs";
import { Badge } from "@/dsm/components/badge";

export default function TabsDemarcheDetails() {
  return (
    <article className="space-y-4">
      <div className="flex flex-wrap items-center gap-2.5">
        <Badge tone="success" dot>
          En ligne
        </Badge>
        <Badge tone="outline">CNSS</Badge>
      </div>
      <h2 className="text-xl font-semibold tracking-tight text-ink">Adhérer à l&apos;Assurance Maladie Obligatoire</h2>
      <Tabs defaultValue="conditions" className="w-full">
        <TabsList variant="underline">
          <Tab value="conditions">Conditions</Tab>
          <Tab value="documents">Documents</Tab>
          <Tab value="suivi">Suivi de dossier</Tab>
        </TabsList>
        <TabPanel value="conditions">Ouverte à tout salarié affilié à la CNSS ou à toute personne exerçant une activité indépendante déclarée.</TabPanel>
        <TabPanel value="documents">CIN, attestation de travail ou registre de commerce, RIB au nom du demandeur.</TabPanel>
        <TabPanel value="suivi">Suivez l&apos;instruction de votre dossier sur damancom.ma avec votre numéro d&apos;immatriculation.</TabPanel>
      </Tabs>
    </article>
  );
}
