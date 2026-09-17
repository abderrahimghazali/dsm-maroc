"use client";

import Link from "next/link";
import { useState, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { Check, CircleAlert, CircleCheck, CircleX, Copy, X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import { Badge, type BadgeProps } from "./badge";
import { Button } from "./button";

export type DossierStatus = "submitted" | "in-review" | "action-required" | "approved" | "rejected" | "ready";

export type DossierStep = {
  label: ReactNode;
  date?: ReactNode;
  description?: ReactNode;
};

export type DossierAction = {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  /** What the citizen must do, shown above the button. */
  description?: ReactNode;
};

export type DossierTrackerProps = Omit<ComponentProps<"section">, "title"> & {
  /** Dossier reference, shown in monospace with a copy button. */
  reference: string;
  title: ReactNode;
  status: DossierStatus;
  /** Ordered steps of the procedure. */
  steps: DossierStep[];
  /** Index of the step in progress; `steps.length` once everything is done. */
  currentStep: number;
  submittedAt?: ReactNode;
  updatedAt?: ReactNode;
  /** Expected completion ("sous 48 h", a date…). */
  expectedBy?: ReactNode;
  /** Next action for the citizen (download, complete the file, book a slot…). */
  action?: DossierAction;
  /** Contact or help line, shown under the steps. */
  contact?: ReactNode;
};

const statusTone: Record<DossierStatus, NonNullable<BadgeProps["tone"]>> = {
  submitted: "info",
  "in-review": "info",
  "action-required": "warning",
  approved: "success",
  rejected: "error",
  ready: "vert",
};

const panelTone: Record<DossierStatus, string> = {
  submitted: "bg-surface-muted text-ink",
  "in-review": "bg-surface-muted text-ink",
  "action-required": "bg-safran-soft text-safran-soft-fg",
  approved: "bg-vert-soft text-vert-soft-fg",
  ready: "bg-vert-soft text-vert-soft-fg",
  rejected: "bg-rouge-soft text-rouge-soft-fg",
};
const panelIcon: Partial<Record<DossierStatus, typeof CircleAlert>> = {
  "action-required": CircleAlert,
  approved: CircleCheck,
  ready: CircleCheck,
  rejected: CircleX,
};

/** Follow-up card for an administrative request: reference, status, progress through the steps and the next action. */
export function DossierTracker({
  reference,
  title,
  status,
  steps,
  currentStep,
  submittedAt,
  updatedAt,
  expectedBy,
  action,
  contact,
  className,
  ...props
}: DossierTrackerProps) {
  const t = useT();
  const [copied, setCopied] = useState(false);
  const statusLabel: Record<DossierStatus, string> = {
    submitted: t.statusSubmitted,
    "in-review": t.statusInReview,
    "action-required": t.statusActionRequired,
    approved: t.statusApproved,
    rejected: t.statusRejected,
    ready: t.statusReady,
  };
  const done = status === "approved" || status === "ready";
  const failed = status === "rejected";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: nothing to do */
    }
  };

  const meta = [
    submittedAt && [t.dossierSubmittedOn, submittedAt],
    updatedAt && [t.dossierUpdated, updatedAt],
    expectedBy && !done && !failed && [t.dossierExpected, expectedBy],
  ].filter(Boolean) as [string, ReactNode][];

  const PanelIcon = panelIcon[status];

  return (
    <section className={cn("overflow-hidden rounded-lg border border-line bg-surface shadow-xs", className)} {...props}>
      <header className="border-b border-line bg-surface-muted/50 px-5 pt-5 pb-0 sm:px-6 sm:pt-6">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          <div className="min-w-0 flex-1">
            <p className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
              <span className="font-medium uppercase tracking-wider">{t.dossierReference}</span>
              <span dir="ltr" className="inline-flex items-center gap-1 rounded-md bg-surface px-2 py-0.5 font-mono text-[0.8125rem] font-medium text-ink ring-1 ring-inset ring-line">
                {reference}
                <button
                  type="button"
                  onClick={copy}
                  aria-label={copied ? t.copied : t.copy}
                  className="-me-1 inline-flex size-6 items-center justify-center rounded text-ink-subtle transition-colors duration-(--dsm-duration-fast) hover:bg-surface-muted hover:text-ink"
                >
                  {copied ? <Check className="size-3.5 text-success" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
                </button>
              </span>
            </p>
            <h2 className="mt-2.5 text-xl font-semibold tracking-tight text-balance text-ink">{title}</h2>
          </div>
          <Badge tone={statusTone[status]} dot className="shrink-0 px-2.5 py-1 text-xs">
            {statusLabel[status]}
          </Badge>
        </div>
        {meta.length > 0 && (
          <dl className="mt-5 -mx-5 grid grid-cols-1 divide-y divide-line border-t border-line sm:-mx-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {meta.map(([k, v]) => (
              <div key={k} className="px-5 py-3 sm:px-6">
                <dt className="text-2xs font-medium uppercase tracking-wider text-ink-subtle">{k}</dt>
                <dd className="mt-0.5 text-sm font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <ol className="px-5 py-6 sm:px-6">
        {steps.map((step, i) => {
          const state = i < currentStep || done ? "completed" : i === currentStep ? (failed ? "failed" : status === "action-required" ? "blocked" : "current") : "upcoming";
          const last = i === steps.length - 1;
          return (
            <li key={i} className="relative flex gap-4 pb-7 last:pb-0">
              {!last && (
                <span
                  aria-hidden
                  className={cn("absolute start-[13px] top-7 bottom-0 w-0.5 rounded-full", state === "completed" ? "bg-primary" : "bg-line")}
                />
              )}
              <span
                aria-hidden
                className={cn(
                  "relative z-1 flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                  state === "completed" && "bg-primary text-primary-fg",
                  state === "current" && "bg-surface text-primary ring-2 ring-inset ring-primary shadow-[0_0_0_4px_var(--dsm-vert-soft)]",
                  state === "blocked" && "bg-safran-soft text-safran-soft-fg ring-2 ring-inset ring-safran",
                  state === "failed" && "bg-rouge-soft text-rouge-soft-fg ring-2 ring-inset ring-rouge",
                  state === "upcoming" && "bg-surface text-ink-subtle ring-1 ring-inset ring-line-strong",
                )}
              >
                {state === "completed" ? <Check className="size-4" /> : state === "failed" ? <X className="size-4" /> : state === "blocked" ? <CircleAlert className="size-4" /> : i + 1}
              </span>
              <div className="min-w-0 flex-1 pt-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <p className={cn("text-[0.9375rem] font-semibold", state === "upcoming" ? "text-ink-muted" : "text-ink")}>
                    {step.label}
                    <span className="dsm-sr-only">
                      {" — "}
                      {state === "completed" ? t.completed : state === "upcoming" ? t.upcoming : t.current}
                    </span>
                  </p>
                  {step.date && <p className="text-xs tabular-nums text-ink-subtle">{step.date}</p>}
                </div>
                {step.description && <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.description}</p>}
              </div>
            </li>
          );
        })}
      </ol>

      {(action || contact) && (
        <footer className="border-t border-line">
          {action && (
            <div className={cn("flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-6", panelTone[status])}>
              {PanelIcon && <PanelIcon aria-hidden className="size-6 shrink-0" />}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{t.dossierNextAction}</p>
                {action.description && <p className="mt-1 text-sm leading-relaxed opacity-90">{action.description}</p>}
              </div>
              <Button
                size="sm"
                variant={status === "action-required" ? "primary" : "secondary"}
                className="shrink-0 self-start sm:self-center"
                onClick={action.onClick}
                {...(action.href ? { render: <Link href={action.href} /> } : {})}
              >
                {action.label}
              </Button>
            </div>
          )}
          {contact && <p className={cn("px-5 py-4 text-sm text-ink-muted sm:px-6", action && "border-t border-line")}>{contact}</p>}
        </footer>
      )}
    </section>
  );
}
