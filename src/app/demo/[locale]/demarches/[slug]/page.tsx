import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion, AccordionItem } from "@/dsm/components/accordion";
import { Badge } from "@/dsm/components/badge";
import { Breadcrumb } from "@/dsm/components/breadcrumb";
import { Button, ButtonGroup } from "@/dsm/components/button";
import { Callout } from "@/dsm/components/callout";
import { Card, CardBody, CardMeta, CardText, CardTitle } from "@/dsm/components/card";
import { DownloadCard } from "@/dsm/components/download-card";
import { Share } from "@/dsm/components/share";
import { Steps } from "@/dsm/components/stepper";
import { Tab, TabPanel, Tabs, TabsList } from "@/dsm/components/tabs";
import { Timeline } from "@/dsm/components/timeline";
import { ArrowForward, CircleCheck, Clock, PhoneCall, ShieldCheck, TriangleAlert } from "@/dsm/icons";
import { ui } from "@/dsm/i18n";
import { demoHref, demoLocales, getDemoContent, isDemoLocale } from "@/content/demo";
import { ProcedureForm } from "./procedure-form";

export async function generateStaticParams() {
  const fr = await getDemoContent("fr");
  return demoLocales.map((locale) => ({ locale, slug: fr.procedure.slug }));
}

export default async function ProcedurePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isDemoLocale(locale)) notFound();
  const c = await getDemoContent(locale);
  const p = c.procedure;
  if (slug !== p.slug) notFound();
  const t = ui[locale];
  const href = (x: string) => demoHref(locale, x);

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="dsm-container py-8 lg:py-10">
          <Breadcrumb
            items={[
              { label: p.breadcrumb[0], href: href("/") },
              { label: p.breadcrumb[1], href: href("/demarches") },
              { label: p.breadcrumb[2], href: href("/demarches?theme=etat-civil") },
              { label: p.title },
            ]}
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.eyebrow}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance">{p.title}</h1>
              <p className="mt-2 text-sm text-ink-muted">{p.ministry}</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{p.summary}</p>
              <ButtonGroup className="mt-8">
                <Button size="lg" iconEnd={<ArrowForward />} render={<a href="#formulaire" />}>
                  {c.common.startProcedure}
                </Button>
                <Badge tone="success" dot>
                  {c.common.online}
                </Badge>
              </ButtonGroup>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line self-start">
              {p.facts.map((f) => (
                <div key={f.label} className="bg-surface p-4">
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-subtle">{f.label}</dt>
                  <dd className="mt-1 font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="dsm-container grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:py-14">
        <div className="min-w-0">
          <Tabs defaultValue="about">
            <TabsList>
              <Tab value="about">{p.tabs.about}</Tab>
              <Tab value="documents">{p.tabs.documents}</Tab>
              <Tab value="steps">{p.tabs.steps}</Tab>
              <Tab value="faq">{p.tabs.faq}</Tab>
            </TabsList>
            <TabPanel value="about" className="pt-6">
              <div className="dsm-prose">
                {p.about.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <Callout tone="vert" title={p.eligibility.title} icon={<CircleCheck />} className="mt-8">
                <ul className="list-disc space-y-1 ps-5">
                  {p.eligibility.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Callout>
            </TabPanel>
            <TabPanel value="documents" className="pt-6">
              <h2 className="text-xl font-semibold tracking-tight">{p.documents.title}</h2>
              <ul className="mt-4 divide-y divide-line rounded-lg border border-line bg-surface">
                {p.documents.items.map((d) => (
                  <li key={d.label} className="flex items-start gap-3 p-4">
                    <CircleCheck className={`mt-0.5 size-5 shrink-0 ${d.required ? "text-primary" : "text-ink-subtle"}`} aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-ink">{d.label}</p>
                      {d.hint && <p className="mt-0.5 text-sm text-ink-muted">{d.hint}</p>}
                    </div>
                    <Badge tone={d.required ? "vert" : "neutral"} size="sm">
                      {d.required ? t.required : t.optional}
                    </Badge>
                  </li>
                ))}
              </ul>
            </TabPanel>
            <TabPanel value="steps" className="pt-6">
              <h2 className="text-xl font-semibold tracking-tight">{p.stepsTitle}</h2>
              <Timeline className="mt-6" items={p.steps.map((s, i) => ({ date: `${t.step} ${i + 1}`, title: s.title, description: s.text, status: i === 0 ? "current" : "upcoming" }))} />
            </TabPanel>
            <TabPanel value="faq" className="pt-6">
              <Accordion variant="default">
                {p.faq.map((f, i) => (
                  <AccordionItem key={f.q} value={String(i)} title={f.q}>
                    <p className="text-ink-muted">{f.a}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
          </Tabs>

          <Callout tone="safran" title={p.warning.title} icon={<TriangleAlert />} className="mt-10">
            {p.warning.text}
          </Callout>

          <section id="formulaire" className="mt-14 scroll-mt-28">
            <div className="dsm-filet w-24" />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight">{p.form.title}</h2>
            <div className="mt-8">
              <ProcedureForm locale={locale} form={p.form} />
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-[calc(var(--dsm-header-height)+7rem)] lg:self-start">
          <Card>
            <CardBody>
              <CardMeta>{p.stepsTitle}</CardMeta>
              <Steps orientation="vertical" current={1} steps={p.steps.map((s) => ({ label: s.title }))} />
            </CardBody>
          </Card>
          <DownloadCard title={c.ministry.documents[0].title} href="#" format="PDF" size="1,4 Mo" updatedAt={c.ministry.documents[0].date} />
          <Card variant="tinted">
            <CardBody>
              <CardTitle className="flex items-center gap-2 text-base">
                <PhoneCall className="size-4 text-primary" aria-hidden />
                {c.common.helpTitle}
              </CardTitle>
              <CardText>{c.common.helpText}</CardText>
              <Button variant="secondary" size="sm" className="self-start" render={<Link href={href("/aide")} />}>
                {c.common.helpCta}
              </Button>
            </CardBody>
          </Card>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" aria-hidden />
              {t.officialSite}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden />
              {p.facts[0].value}
            </span>
          </div>
          <Share title={t.share} />
        </aside>
      </div>
    </>
  );
}
