"use client";

import { useEffect, useState } from "react";

const px = (value: string) => {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
};

/**
 * Returns the id of the section currently being read. A section is "reached" once it sits where a
 * click on its anchor would scroll it to (the scroller's `scroll-padding-top` plus the section's own
 * `scroll-margin-top`), so the highlight matches the anchors exactly. At the bottom of the page the last
 * section wins. Listens to scroll and resize.
 */
export function useScrollSpy(ids: readonly string[], { tolerance = 8 }: { tolerance?: number } = {}) {
  const [active, setActive] = useState<string | undefined>(undefined);
  const key = ids.join(" ");

  useEffect(() => {
    const list = key ? key.split(" ") : [];
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = px(getComputedStyle(document.documentElement).scrollPaddingTop) + tolerance;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string | undefined;
      for (const id of list) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - px(getComputedStyle(el).scrollMarginTop);
        if (top <= line) current = id;
      }
      if (atBottom) current = list[list.length - 1] ?? current;
      const next = current ?? list[0];
      setActive((prev) => (prev === next ? prev : next));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [key, tolerance]);

  return active;
}
