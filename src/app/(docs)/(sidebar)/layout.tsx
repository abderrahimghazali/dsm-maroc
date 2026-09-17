import { DocsSidebar } from "@/components/docs/sidebar";
import { docsNav } from "@/content/nav";
import { getByCategory } from "@/content/registry";
import { categoryLabels, type ComponentCategory } from "@/content/types";

const order: ComponentCategory[] = ["mise-en-page", "actions", "formulaires", "navigation", "contenu", "retours", "overlays"];

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const groups = getByCategory();
  const componentSections = order
    .filter((c) => groups[c]?.length)
    .map((c) => ({
      title: `Composants · ${categoryLabels[c]}`,
      entries: groups[c].map((e) => ({
        label: e.meta.title,
        href: `/composants/${e.meta.slug}`,
        badge: e.meta.status === "beta" ? "bêta" : undefined,
      })),
    }));

  const sections = [
    docsNav[0],
    docsNav[1],
    { title: "Composants", entries: [{ label: "Tous les composants", href: "/composants" }] },
    ...componentSections,
    docsNav[2],
    docsNav[3],
  ];

  return (
    <div className="dsm-container flex gap-10 py-8 lg:py-12">
      <aside className="sticky top-[calc(var(--dsm-header-height)+3rem)] hidden w-60 shrink-0 self-start lg:block">
        <DocsSidebar sections={sections} className="max-h-[calc(100dvh-var(--dsm-header-height)-4rem)] overflow-y-auto pe-2" />
      </aside>
      <main id="contenu" className="min-w-0 flex-1">
        {children}
      </main>
    </div>
  );
}
