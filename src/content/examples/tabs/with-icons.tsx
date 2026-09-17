import { Tab, TabPanel, Tabs, TabsList } from "@/dsm/components/tabs";
import { ClipboardList, MapPin, Wallet } from "@/dsm/icons";

export default function TabsWithIcons() {
  return (
    <Tabs defaultValue="pieces" className="w-full">
      <TabsList variant="underline">
        <Tab value="pieces" icon={<ClipboardList aria-hidden />}>
          Pièces à fournir
        </Tab>
        <Tab value="tarifs" icon={<Wallet aria-hidden />}>
          Tarifs
        </Tab>
        <Tab value="lieux" icon={<MapPin aria-hidden />}>
          Points d&apos;accueil
        </Tab>
      </TabsList>
      <TabPanel value="pieces">Formulaire rempli, deux photos d&apos;identité récentes, copie du CNIE des deux parents.</TabPanel>
      <TabPanel value="tarifs">Timbre fiscal de 300 DH pour la première demande, gratuit pour les renouvellements liés à une erreur administrative.</TabPanel>
      <TabPanel value="lieux">Consulats du Royaume à l&apos;étranger, ou bureaux d&apos;état civil des communes au Maroc.</TabPanel>
    </Tabs>
  );
}
