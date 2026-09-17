"use client";

import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { CircleCheck } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type TimelineStatus = "completed" | "current" | "upcoming";

export type TimelineItem = {
  date: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  status?: TimelineStatus;
};

export type TimelineProps = Omit<ComponentProps<"div">, "children"> & {
  items: TimelineItem[];
};

/** A vertical sequence of dated steps (procedure history, project milestones…). */
export function Timeline({ className, items, ...props }: TimelineProps) {
  const t = useT();
  const statusLabel: Record<TimelineStatus, string> = { completed: t.completed, current: t.current, upcoming: t.upcoming };
  const markerClass = "absolute start-0 top-0.5 size-4 rounded-full";

  return (
    <div className={cn("relative", className)} {...props}>
      <div aria-hidden className="absolute top-2 bottom-2 start-2 w-px bg-line" />
      <ol className="m-0 flex list-none flex-col gap-8 ps-0">
        {items.map((item, index) => {
          const status = item.status ?? "upcoming";
          return (
            <li key={index} className="relative ps-8">
              {status === "completed" ? (
                <CircleCheck className={cn(markerClass, "bg-surface text-vert")} aria-hidden />
              ) : (
                <span
                  aria-hidden
                  className={cn(
                    markerClass,
                    status === "current" ? "bg-vert ring-4 ring-vert-soft" : "bg-surface ring-2 ring-line-strong",
                  )}
                />
              )}
              <span className="dsm-sr-only">{statusLabel[status]}</span>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">{item.date}</p>
              <p className={cn("mt-1 font-semibold text-ink", status === "current" && "text-vert")}>{item.title}</p>
              {item.description && <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
