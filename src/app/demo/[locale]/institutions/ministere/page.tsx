import { notFound } from "next/navigation";
import { Breadcrumb } from "@/dsm/components/breadcrumb";
import { Card, CardArrow, CardBody, CardMeta, CardText, CardTitle } from "@/dsm/components/card";
import { DownloadCard } from "@/dsm/components/download-card";
import { KeyFigure, KeyFigureGrid } from "@/dsm/components/key-figure";
import { Tile, TileGrid } from "@/dsm/components/tile";
import { SideMenu } from "@/dsm/components/side-menu";
import { BlockMark } from "@/dsm/components/block-mark";
import { Badge } from "@/dsm/components/badge";
import { Accordion, AccordionItem } from "@/dsm/components/accordion";
import { Clock, FileText, Mail, MapPin, Phone } from "@/dsm/icons";
import { demoHref, getDemoContent, isDemoLocale } from "@/content/demo";

export default async function MinistryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isDemoLocale(locale)) notFound();
  const c = await getDemoContent(locale);
  const m = c.ministry;
  const href = (p: string) => demoHref(locale, p);
  const entity = { fr: m.name, ar: m.name, zgh: m.name, en: m.name } as const;

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div aria-hidden className="dsm-khatam-fade-end pointer-events-none absolute inset-y-0 end-0 w-1/2 text-rouge opacity-[0.07]" />
        <div className="dsm-container relative py-8 lg:py-12">
          <Breadcrumb items={[{ label: m.breadcrumb[0], href: href("/") }, { label: m.breadcrumb[1], href: href("/institutions/ministere") }, { label: m.short }]} />
          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-4">
              <BlockMark entity={entity} locale={locale} size="lg" href={href("/institutions/ministere")} />
              <Badge tone="ink">{m.short}</Badge>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">{m.mission}</p>
          </div>
        </div>
      </section>

      <div className="dsm-container grid gap-12 py-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:py-16">
        <aside className="hidden lg:block">
          <SideMenu
            sticky
            items={[
              { label: m.missionsTitle, href: "#missions", active: true },
              { label: m.servicesTitle, href: "#services" },
              { label: m.organisationTitle, href: "#organisation" },
              { label: m.documentsTitle, href: "#documents" },
              { label: m.contactTitle, href: "#contact" },
            ]}
          />
        </aside>

        <div className="min-w-0 space-y-16">
          <section id="missions" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold tracking-tight">{m.missionsTitle}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {m.missions.map((mi) => (
                <Card key={mi.title} variant="tinted">
                  <CardBody>
                    <CardTitle>{mi.title}</CardTitle>
                    <CardText>{mi.text}</CardText>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-surface-inverse p-8 text-ink-inverse lg:p-10">
            <KeyFigureGrid columns={4} className="[&>*]:border-ink-inverse/15">
              {m.figures.map((f) => (
                <KeyFigure key={f.label} tone="inverse" value={f.value} label={f.label} />
              ))}
            </KeyFigureGrid>
          </section>

          <section id="services" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold tracking-tight">{m.servicesTitle}</h2>
            <TileGrid columns={3} className="mt-6">
              {m.services.map((s, i) => (
                <Tile key={`${s.href}-${i}`} href={href(s.href)} title={s.label} description={s.description} icon={<FileText />} />
              ))}
            </TileGrid>
          </section>

          <section id="organisation" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold tracking-tight">{m.organisationTitle}</h2>
            <Accordion className="mt-6" variant="default">
              {m.organisation.map((o, i) => (
                <AccordionItem key={o.title} value={String(i)} title={o.title}>
                  <p className="text-ink-muted">{o.text}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section id="documents" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold tracking-tight">{m.documentsTitle}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {m.documents.map((d) => (
                <DownloadCard key={d.title} title={d.title} href="#" format={d.format} size={d.size} updatedAt={d.date} />
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold tracking-tight">{m.contactTitle}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Card>
                <CardBody>
                  <CardMeta>{m.contactTitle}</CardMeta>
                  <ul className="space-y-3 text-sm text-ink-muted">
                    <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden /><span>{m.contact.address}</span></li>
                    <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden /><span dir="ltr">{m.contact.phone}</span></li>
                    <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden /><span dir="ltr">{m.contact.email}</span></li>
                    <li className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden /><span>{m.contact.hours}</span></li>
                  </ul>
                </CardBody>
              </Card>
              <Card interactive variant="tinted">
                <CardBody>
                  <CardMeta>{m.newsTitle}</CardMeta>
                  <CardTitle href={href(`/actualites/${c.home.news[0].id}`)}>{c.home.news[0].title}</CardTitle>
                  <CardText>{c.home.news[0].summary}</CardText>
                  <CardArrow label={c.common.readMore} className="mt-auto pt-2" />
                </CardBody>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
