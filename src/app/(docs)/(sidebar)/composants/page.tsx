import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/page-header";
import { getByCategory } from "@/content/registry";
import { categoryLabels, type ComponentCategory } from "@/content/types";
import { ArrowForward } from "@/dsm/icons";

export const metadata: Metadata = {
  title: "Composants",
  description: "Bibliothèque de composants React accessibles, trilingues et compatibles RTL : boutons, formulaires, navigation, contenu, retours et superpositions, prêts à composer des services publics numériques marocains.",
  alternates: { canonical: "/composants" },
  openGraph: { url: "/composants" },
};

const order: ComponentCategory[] = ["mise-en-page", "actions", "formulaires", "navigation", "contenu", "retours", "overlays"];

export default function ComponentsIndex() {
  const groups = getByCategory();
  const total = Object.values(groups).reduce((n, g) => n + g.length, 0);
  return (
    <>
      <PageHeader
        eyebrow="Composants"
        title="Bibliothèque de composants"
        titleAr="مكتبة المكونات"
        description={`${total} composants accessibles, trilingues et compatibles RTL, prêts à composer des services publics numériques.`}
      />
      <div className="space-y-12">
        {order
          .filter((c) => groups[c]?.length)
          .map((c) => (
            <section key={c} id={c} className="scroll-mt-28">
              <div className="mb-4 flex items-baseline gap-3">
                <h2 className="text-xl font-semibold tracking-tight">{categoryLabels[c]}</h2>
                <span className="text-sm text-ink-subtle">{groups[c].length}</span>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {groups[c].map(({ meta }) => (
                  <li key={meta.slug}>
                    <Link
                      href={`/composants/${meta.slug}`}
                      className="group/item flex h-full flex-col rounded-lg border border-line bg-surface p-4 no-underline shadow-xs transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-md"
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-ink">{meta.title}</span>
                        <ArrowForward className="size-4 text-ink-subtle transition-transform group-hover/item:translate-x-0.5 rtl:group-hover/item:-translate-x-0.5" />
                      </span>
                      {meta.titleAr && (
                        <span lang="ar" dir="rtl" className="mt-0.5 block text-start font-arabic text-sm text-ink-subtle">
                          {meta.titleAr}
                        </span>
                      )}
                      <span className="mt-2 line-clamp-2 text-sm text-ink-muted">{meta.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
      </div>
    </>
  );
}
