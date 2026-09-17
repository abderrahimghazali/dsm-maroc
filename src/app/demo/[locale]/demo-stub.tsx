import Link from "next/link";
import { Button, ButtonGroup } from "@/dsm/components/button";
import { EmptyState } from "@/dsm/components/empty-state";
import { ArrowForward, Construction } from "@/dsm/icons";
import { demoHref, getDemoContent, type DemoLocale } from "@/content/demo";

/** Placeholder for links that exist in the demo's navigation but have no page behind them. */
export async function DemoStub({ locale }: { locale: DemoLocale }) {
  const c = await getDemoContent(locale);
  return (
    <section className="dsm-container py-16 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <EmptyState
          pattern
          icon={<Construction />}
          title={c.errors.demoStubTitle}
          description={c.errors.demoStubText}
          action={
            <ButtonGroup className="justify-center">
              <Button render={<Link href={demoHref(locale, "/")} />} iconEnd={<ArrowForward />}>
                {c.common.backHome}
              </Button>
              <Button variant="secondary" render={<Link href="/composants" />}>
                DSM
              </Button>
            </ButtonGroup>
          }
        />
      </div>
    </section>
  );
}
