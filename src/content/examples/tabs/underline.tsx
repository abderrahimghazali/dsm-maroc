import { Tab, TabPanel, Tabs, TabsList } from "@/dsm/components/tabs";

export default function TabsUnderline() {
  return (
    <Tabs defaultValue="documents" className="w-full">
      <TabsList variant="underline">
        <Tab value="documents">Documents requis</Tab>
        <Tab value="delais">Délais et tarifs</Tab>
        <Tab value="depot">Où déposer</Tab>
      </TabsList>
      <TabPanel value="documents">
        Copie de la CNIE en cours de validité, ancienne carte grise, certificat de vente ou facture d&apos;achat, attestation d&apos;assurance en cours.
      </TabPanel>
      <TabPanel value="delais">Délai de traitement : 3 jours ouvrés. Frais de timbre : 350 DH.</TabPanel>
      <TabPanel value="depot">Bureau d&apos;arrondissement le plus proche de votre domicile, ou en ligne sur idarati.ma.</TabPanel>
    </Tabs>
  );
}
