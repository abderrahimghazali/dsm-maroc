"use client";

import { SideMenu, type SideMenuItem } from "@/dsm/components/side-menu";
import { useScrollSpy } from "@/dsm/lib/use-scroll-spy";

/** In-page menu whose current entry follows the reading position. Items are "#section" links. */
export function SectionMenu({ items }: { items: SideMenuItem[] }) {
  const ids = items.map((i) => (i.href ?? "").replace(/^#/, ""));
  const active = useScrollSpy(ids);
  return <SideMenu sticky items={items} activeHref={`#${active ?? ids[0]}`} />;
}
