import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/docs/page-header";
import { Alert } from "@/dsm/components/alert";
import { Badge } from "@/dsm/components/badge";
import { Card, CardArrow, CardBadges, CardBody, CardFooter, CardMeta, CardText, CardTitle } from "@/dsm/components/card";
import { ArrowForward } from "@/dsm/icons";

export const metadata: Metadata = { title: "Modèles" };

type Model = {
  meta: string;
  title: string;
  titleAr: string;
  href: string;
  description: string;
  composed: string[];
};

const models: Model[] = [
  {
    meta: "Modèle · Portail",
    title: "Accueil du portail",
    titleAr: "الصفحة الرئيسية للبوابة",
    href: "/demo/fr",
    description: "La page d'entrée du portail national : recherche de démarches, accès rapides par thématique, actualités et bandeau institutionnel.",
    composed: ["En-tête", "BlockMark", "Champ de recherche", "Card", "Motif khatam", "Pied de page"],
  },
  {
    meta: "Modèle · Démarche",
    title: "Démarche en ligne (multi-étapes)",
    titleAr: "إجراء إلكتروني متعدد المراحل",
    href: "/demo/fr/demarches/acte-de-naissance",
    description: "Un parcours pas à pas pour une demande d'acte de naissance : étapes, formulaire, dépôt de pièces, récapitulatif et confirmation.",
    composed: ["Étapes (Stepper)", "Champs de formulaire", "Dépôt de fichier", "Alert", "Récapitulatif", "Button"],
  },
  {
    meta: "Modèle · Institution",
    title: "Page institutionnelle (ministère)",
    titleAr: "صفحة مؤسساتية (وزارة)",
    href: "/demo/fr/institutions/ministere",
    description: "La vitrine d'un ministère : présentation, organigramme, actualités, coordonnées et services rattachés.",
    composed: ["Fil d'Ariane", "BlockMark avec entité", "Card horizontale", "Accordion", "Coordonnées"],
  },
  {
    meta: "Modèle · Recherche",
    title: "Résultats de recherche",
    titleAr: "نتائج البحث",
    href: "/demo/fr/recherche",
    description: "Recherche transverse de démarches et de contenus : champ de requête, filtres à facettes, liste de résultats et pagination.",
    composed: ["Champ de recherche", "Filtres", "Card", "Badge", "Pagination"],
  },
  {
    meta: "Modèle · Erreur",
    title: "Page d'erreur 404 / 500",
    titleAr: "صفحة خطأ 404 / 500",
    href: "/demo/fr/erreur",
    description: "Une page d'erreur qui oriente plutôt qu'elle ne bloque : message clair, cadre décoratif dsm-arch et actions de repli.",
    composed: ["dsm-arch", "Alert", "Button", "Liens de repli"],
  },
  {
    meta: "Modèle · Éditorial",
    title: "Page de contenu éditorial",
    titleAr: "صفحة محتوى تحريري",
    href: "/demo/fr/actualites/nouvelle-plateforme-cnie",
    description: "Une actualité ou un dossier de fond : typographie longue (dsm-prose), sommaire, médias encadrés et partage.",
    composed: ["dsm-prose", "Sommaire", "dsm-arch", "Badge", "Partage"],
  },
];

export default function Models() {
  return (
    <article>
      <PageHeader
        eyebrow="Modèles"
        title="Modèles de page"
        titleAr="نماذج الصفحات"
        description="Le portail national de démonstration assemble les composants DSM en six modèles de page complets, réutilisables tels quels ou comme point de départ pour un service ministériel."
      />

      <Section
        id="modeles"
        title="Les six modèles"
        description="Chaque modèle est une application Next.js fonctionnelle, avec des données réalistes et un parcours complet."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {models.map((m) => (
            <Card key={m.href} interactive className="h-full">
              <CardBody>
                <CardMeta>{m.meta}</CardMeta>
                <CardTitle href={m.href}>{m.title}</CardTitle>
                <p lang="ar" dir="rtl" className="-mt-2 font-arabic text-sm text-ink-subtle">
                  {m.titleAr}
                </p>
                <CardText>{m.description}</CardText>
                <CardBadges>
                  {m.composed.map((c) => (
                    <Badge key={c} tone="outline" size="sm">
                      {c}
                    </Badge>
                  ))}
                </CardBadges>
                <CardFooter>
                  <CardArrow label="Voir la démonstration" />
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="langues"
        title="Disponibles dans les trois langues"
        description="Chaque modèle existe en français, en arabe et en amazighe, avec la même structure et le même niveau de finition."
      >
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-line bg-surface p-6">
          <Link href="/demo/fr" className="inline-flex items-center gap-1.5 text-sm font-medium text-link hover:text-link-hover">
            Portail (FR) <ArrowForward className="size-4" />
          </Link>
          <span className="text-line-strong">·</span>
          <Link href="/demo/ar" lang="ar" className="inline-flex items-center gap-1.5 font-arabic text-sm font-medium text-link hover:text-link-hover">
            البوابة (AR) <ArrowForward className="size-4" />
          </Link>
          <span className="text-line-strong">·</span>
          <Link href="/demo/zgh" lang="zgh" className="inline-flex items-center gap-1.5 font-tifinagh text-sm font-medium text-link hover:text-link-hover">
            ⵜⴰⴱⴱⵓⵔⵜ (ZGH) <ArrowForward className="size-4" />
          </Link>
        </div>
        <Alert className="mt-4" tone="info" title="Démonstrations à venir">
          Les routes listées ci-dessus correspondent au portail de démonstration en cours de construction : elles sont documentées et
          liées dès maintenant pour fixer le contrat d&apos;URL entre les modèles.
        </Alert>
      </Section>
    </article>
  );
}
