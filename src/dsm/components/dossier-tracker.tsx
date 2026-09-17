"use client";

import Link from "next/link";
import { useState, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { Check, CircleAlert, Copy, X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import { Badge, type BadgeProps } from "./badge";
import { Button } from "./button";
import { Callout } from "./callout";

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

const calloutTone: Partial<Record<DossierStatus, "safran" | "vert" | "rouge">> = {
  "action-required": "safran",
  ready: "vert",
  approved: "vert",
  rejected: "rouge",
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

  return (
    <section className={cn("rounded-lg border border-line bg-surface", className)} {...props}>
      <header className="flex flex-col gap-3 border-b border-line p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="flex items-center gap-2 text-xs text-ink-muted">
            <span className="uppercase tracking-wide">{t.dossierReference}</span>
            <span dir="ltr" className="font-mono text-sm font-medium text-ink">
              {reference}
            </span>
            <button
              type="button"
              onClick={copy}
              aria-label={copied ? t.copied : t.copy}
              className="inline-flex size-7 items-center justify-center rounded-md text-ink-subtle transition-colors duration-(--dsm-duration-fast) hover:bg-surface-muted hover:text-ink"
            >
              {copied ? <Check className="size-3.5 text-success" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
            </button>
          </p>
          <Badge tone={statusTone[status]} dot>
            {statusLabel[status]}
          </Badge>
        </div>
        <h2 className="text-lg font-semibold tracking-tight text-ink">{title}</h2>
        {meta.length > 0 && (
          <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            {meta.map(([k, v]) => (
              <div key={k} className="flex gap-1.5">
                <dt className="text-ink-muted">{k}</dt>
                <dd className="font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <ol className="p-5 sm:p-6">
        {steps.map((step, i) => {
          const state = i < currentStep || done ? "completed" : i === currentStep ? (failed ? "failed" : status === "action-required" ? "blocked" : "current") : "upcoming";
          const last = i === steps.length - 1;
          return (
            <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
              {!last && <span aria-hidden className={cn("absolute start-[11px] top-6 bottom-0 w-px", state === "completed" ? "bg-primary" : "bg-line")} />}
              <span
                aria-hidden
                className={cn(
                  "relative z-1 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ring-2 ring-surface",
                  state === "completed" && "bg-primary text-primary-fg",
                  state === "current" && "bg-surface text-primary ring-primary ring-inset",
                  state === "blocked" && "bg-warning-soft text-warning-soft-fg",
                  state === "failed" && "bg-error-soft text-error-soft-fg",
                  state === "upcoming" && "bg-surface-muted text-ink-subtle",
                )}
              >
                {state === "completed" ? <Check className="size-3.5" /> : state === "failed" ? <X className="size-3.5" /> : state === "blocked" ? <CircleAlert className="size-3.5" /> : i + 1}
              </span>
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <p className={cn("text-sm font-medium", state === "upcoming" ? "text-ink-muted" : "text-ink")}>
                    {step.label}
                    <span className="dsm-sr-only">
                      {" — "}
                      {state === "completed" ? t.completed : state === "upcoming" ? t.upcoming : t.current}
                    </span>
                  </p>
                  {step.date && <p className="text-xs text-ink-subtle">{step.date}</p>}
                </div>
                {step.description && <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.description}</p>}
              </div>
            </li>
          );
        })}
      </ol>

      {(action || contact) && (
        <footer className="flex flex-col gap-4 border-t border-line p-5 sm:p-6">
          {action && (
            <Callout tone={calloutTone[status] ?? "neutral"} title={t.dossierNextAction}>
              {action.description && <p className="mb-3">{action.description}</p>}
              <Button
                size="sm"
                variant={status === "action-required" ? "primary" : "secondary"}
                onClick={action.onClick}
                {...(action.href ? { render: <Link href={action.href} /> } : {})}
              >
                {action.label}
              </Button>
            </Callout>
          )}
          {contact && <p className="text-sm text-ink-muted">{contact}</p>}
        </footer>
      )}
    </section>
  );
}
