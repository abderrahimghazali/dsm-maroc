import { notFound } from "next/navigation";
import { isDemoLocale } from "@/content/demo";
import { DemoStub } from "../demo-stub";

export default async function DemoCatchAll({ params }: { params: Promise<{ locale: string; rest: string[] }> }) {
  const { locale } = await params;
  if (!isDemoLocale(locale)) notFound();
  return <DemoStub locale={locale} />;
}
