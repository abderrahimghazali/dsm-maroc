"use client";

import { useEffect, useState, type ComponentProps } from "react";
import { cn } from "@/dsm/lib/cn";
import { ArrowUp } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type BackToTopProps = Omit<ComponentProps<"button">, "onClick" | "children"> & {
  /** Scroll distance, in px, after which the button appears. */
  threshold?: number;
  /** Id of the element to scroll back to. */
  targetId?: string;
};

/** Floating shortcut back to the top of a long page. Hidden until the reader has scrolled past `threshold`. */
export function BackToTop({ threshold = 600, targetId = "top", className, ...props }: BackToTopProps) {
  const t = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={() => {
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label={t.backToTop}
      className={cn(
        "fixed bottom-6 end-6 z-40 inline-flex size-11 items-center justify-center rounded-full bg-ink text-ink-inverse shadow-md transition-[opacity,transform,background-color] duration-(--dsm-duration) ease-dsm hover:bg-primary focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        className,
      )}
      {...props}
    >
      <ArrowUp aria-hidden className="size-5" />
    </button>
  );
}
