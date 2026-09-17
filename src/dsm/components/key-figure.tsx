import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { ArrowDown, ArrowUp, Minus } from "@/dsm/icons";

export type TrendDirection = "up" | "down" | "flat";
export type KeyFigureTone = "default" | "primary" | "inverse";

const trendIcon: Record<TrendDirection, typeof ArrowUp> = { up: ArrowUp, down: ArrowDown, flat: Minus };
const trendToneClass: Record<TrendDirection, string> = {
  up: "text-success",
  down: "text-error",
  flat: "text-ink-subtle",
};

export type KeyFigureProps = ComponentProps<"div"> & {
  tone?: KeyFigureTone;
  value: string;
  label: ReactNode;
  description?: ReactNode;
  trend?: { value: string; direction: TrendDirection };
};

/** A large standalone statistic ("chiffre clé"), typically used inside a `KeyFigureGrid`. */
export function KeyFigure({ className, tone = "default", value, label, description, trend, ...props }: KeyFigureProps) {
  const TrendIcon = trend ? trendIcon[trend.direction] : null;
  const inverse = tone === "inverse";
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      <p
        className={cn(
          "text-5xl font-semibold tracking-tighter tabular-nums text-balance",
          inverse ? "text-ink-inverse" : tone === "primary" ? "text-primary" : "text-ink",
        )}
      >
        {value}
      </p>
      <p className={cn("text-sm font-medium", inverse ? "text-ink-inverse/80" : "text-ink-muted")}>{label}</p>
      {(description || trend) && (
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {trend && TrendIcon && (
            <span className={cn("inline-flex items-center gap-1 text-xs font-semibold", trendToneClass[trend.direction])}>
              <TrendIcon className="size-3.5" aria-hidden />
              {trend.value}
            </span>
          )}
          {description && (
            <span className={cn("text-xs", inverse ? "text-ink-inverse/60" : "text-ink-subtle")}>{description}</span>
          )}
        </div>
      )}
    </div>
  );
}

type GridColumns = 2 | 3 | 4;

const gridColsClass: Record<GridColumns, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

const dividerClass: Record<GridColumns, string> = {
  2: "sm:[&>*:nth-child(2n+1)]:border-s-0 sm:[&>*:nth-child(2n+1)]:ps-0",
  3: "sm:[&>*:nth-child(3n+1)]:border-s-0 sm:[&>*:nth-child(3n+1)]:ps-0",
  4: "sm:[&>*:nth-child(4n+1)]:border-s-0 sm:[&>*:nth-child(4n+1)]:ps-0",
};

export type KeyFigureGridProps = ComponentProps<"div"> & { columns?: GridColumns };

/** Lays out `KeyFigure` items in a grid with dividers between cells. */
export function KeyFigureGrid({ className, columns = 3, ...props }: KeyFigureGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8",
        gridColsClass[columns],
        "[&>*]:border-t [&>*]:border-line [&>*]:pt-6 [&>*:first-child]:border-t-0 [&>*:first-child]:pt-0",
        "sm:[&>*]:border-t-0 sm:[&>*]:border-s sm:[&>*]:border-line sm:[&>*]:pt-0 sm:[&>*]:ps-8",
        dividerClass[columns],
        className,
      )}
      {...props}
    />
  );
}
