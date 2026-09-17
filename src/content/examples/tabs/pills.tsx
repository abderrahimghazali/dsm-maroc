import { Tab, TabPanel, Tabs, TabsList } from "@/dsm/components/tabs";

export default function TabsPills() {
  return (
    <Tabs defaultValue="tous" className="w-full max-w-sm">
      <TabsList variant="pills">
        <Tab value="tous">Tous</Tab>
        <Tab value="cours">En cours</Tab>
        <Tab value="traites">Traités</Tab>
      </TabsList>
      <TabPanel value="tous">7 démarches suivies, dont 2 en attente de pièces justificatives.</TabPanel>
      <TabPanel value="cours">2 démarches en cours : passeport biométrique, carte grise.</TabPanel>
      <TabPanel value="traites">5 démarches traitées ce trimestre.</TabPanel>
    </Tabs>
  );
}
