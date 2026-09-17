"use client";

import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { CircleCheck } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type StepIndicatorProps = Omit<ComponentProps<"div">, "title"> & {
  step: number;
  totalSteps: number;
  title: ReactNode;
  /** Title of the following step — omit on the last step. */
  nextTitle?: ReactNode;
};

/** Progress header for a multi-step démarche: eyebrow, step title and a segmented progress bar. */
export function StepIndicator({ step, totalSteps, title, nextTitle, className, ...props }: StepIndicatorProps) {
  const t = useT();
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">
        {t.step} {step} {t.stepOf} {totalSteps}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-balance text-ink">{title}</h2>
      <div
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`${t.step} ${step} ${t.stepOf} ${totalSteps}`}
        className="flex gap-1.5"
      >
        {Array.from({ length: totalSteps }, (_, i) => (
          <span key={i} className={cn("h-1.5 flex-1 rounded-full", i < step ? "bg-primary" : "bg-line")} />
        ))}
      </div>
      {nextTitle && step < totalSteps && (
        <p className="text-sm text-ink-muted">
          <span className="font-medium text-ink">{t.nextStep}</span> : {nextTitle}
        </p>
      )}
    </div>
  );
}

export type Step = { label: ReactNode; description?: ReactNode };

export type StepsProps = Omit<ComponentProps<"ol">, "children"> & {
  steps: Step[];
  /** 1-indexed step currently in progress. Earlier steps render as completed, later ones as upcoming. */
  current: number;
  orientation?: "horizontal" | "vertical";
};

/** Full list of steps with their completion status — for a démarche summary or sidebar recap. */
export function Steps({ steps, current, orientation = "horizontal", className, ...props }: StepsProps) {
  const t = useT();
  const isHorizontal = orientation === "horizontal";

  return (
    <ol className={cn("flex", isHorizontal ? "items-start" : "flex-col", className)} {...props}>
      {steps.map((s, i) => {
        const n = i + 1;
        const status: "completed" | "current" | "upcoming" = n < current ? "completed" : n === current ? "current" : "upcoming";
        const isLast = i === steps.length - 1;
        const statusLabel = status === "completed" ? t.completed : status === "current" ? t.current : t.upcoming;

        const circle = (
          <span
            className={cn(
              "relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
              status === "completed" && "bg-primary text-primary-fg",
              status === "current" && "bg-surface text-primary ring-2 ring-primary",
              status === "upcoming" && "bg-surface-muted text-ink-subtle ring-1 ring-inset ring-line",
            )}
          >
            {status === "completed" ? <CircleCheck aria-hidden className="size-4" /> : n}
            <span className="dsm-sr-only">{statusLabel}</span>
          </span>
        );

        const label = (
          <>
            <p className={cn("text-sm font-medium", status === "upcoming" ? "text-ink-subtle" : "text-ink")}>{s.label}</p>
            {s.description && <p className="mt-0.5 text-xs text-ink-muted">{s.description}</p>}
          </>
        );

        return (
          <li
            key={i}
            className={cn(
              isHorizontal ? "relative flex min-w-0 flex-1 flex-col items-center px-1 text-center" : "relative flex gap-3.5",
              !isLast && "pb-0",
            )}
          >
            {isHorizontal ? (
              <>
                {!isLast && (
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-4 h-px w-[calc(100%-2.5rem)] start-[calc(50%+1.25rem)]",
                      status === "completed" ? "bg-primary" : "bg-line",
                    )}
                  />
                )}
                {circle}
                <div className="mt-3 max-w-[10rem]">{label}</div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  {circle}
                  {!isLast && <span aria-hidden className={cn("my-1 w-px flex-1", status === "completed" ? "bg-primary" : "bg-line")} />}
                </div>
                <div className={cn("pb-8", isLast && "pb-0")}>{label}</div>
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
}
