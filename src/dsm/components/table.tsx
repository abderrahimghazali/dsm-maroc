"use client";

import { useEffect, useRef, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type TableProps = Omit<ComponentProps<"table">, "children"> & {
  children: ReactNode;
  caption?: ReactNode;
  /** Visually hide the caption while keeping it available to assistive technology. */
  captionHidden?: boolean;
  /** Alternate row backgrounds inside the body. */
  zebra?: boolean;
  /** Tighter row padding. */
  dense?: boolean;
  /** Full grid lines (rows and columns) with an outer frame. */
  bordered?: boolean;
  /** Freeze the header row while the body scrolls. */
  stickyHeader?: boolean;
  containerClassName?: string;
};

/**
 * A scrollable, responsive table shell. Compose with `TableHead`, `TableBody`,
 * `TableRow`, `TableHeader`, `TableCell`, `TableFooter` and `TableSortButton`.
 */
export function Table({
  className,
  containerClassName,
  caption,
  captionHidden,
  zebra,
  dense,
  bordered,
  stickyHeader,
  children,
  ...props
}: TableProps) {
  return (
    <div className={cn("relative", containerClassName)}>
      <div
        className={cn(
          "-mx-4 overflow-x-auto px-4",
          "[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]",
          "[-webkit-mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]",
        )}
      >
        <table
          className={cn(
            "w-full min-w-max border-collapse text-start text-sm text-ink",
            zebra && "[&_tbody_tr:nth-child(even)]:bg-surface-muted/60",
            dense && "[&_td]:py-2 [&_th]:py-2",
            bordered &&
              "border border-line [&_td]:border-e [&_td]:border-line [&_td:last-child]:border-e-0 [&_th]:border-e [&_th]:border-line [&_th:last-child]:border-e-0",
            stickyHeader && "[&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:z-10 [&_thead_th]:bg-surface",
            className,
          )}
          {...props}
        >
          {caption && (
            <caption className={cn("mb-3 text-start text-sm text-ink-muted", captionHidden && "dsm-sr-only")}>
              {caption}
            </caption>
          )}
          {children}
        </table>
      </div>
    </div>
  );
}

export function TableHead({ className, ...props }: ComponentProps<"thead">) {
  return <thead className={className} {...props} />;
}

export function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return <tbody className={className} {...props} />;
}

export function TableFooter({ className, ...props }: ComponentProps<"tfoot">) {
  return <tfoot className={cn("border-t-2 border-line-strong font-semibold text-ink", className)} {...props} />;
}

export function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      className={cn("transition-colors duration-(--dsm-duration-fast) ease-dsm hover:bg-surface-muted/50", className)}
      {...props}
    />
  );
}

export type TableHeaderProps = ComponentProps<"th"> & { numeric?: boolean };

export function TableHeader({ className, numeric, ...props }: TableHeaderProps) {
  return (
    <th
      scope="col"
      className={cn(
        "border-b-2 border-line-strong px-4 py-3 text-start text-sm font-semibold text-ink",
        numeric && "text-end tabular-nums",
        className,
      )}
      {...props}
    />
  );
}

export type TableCellProps = ComponentProps<"td"> & { numeric?: boolean };

export function TableCell({ className, numeric, ...props }: TableCellProps) {
  return (
    <td
      className={cn("border-b border-line px-4 py-3 align-top text-ink", numeric && "text-end tabular-nums", className)}
      {...props}
    />
  );
}

export type SortDirection = "none" | "asc" | "desc";

export type TableSortButtonProps = Omit<ComponentProps<"button">, "type" | "onClick"> & {
  direction?: SortDirection;
  onSort?: () => void;
  /** Set when placed inside a `numeric` (end-aligned) header, to flush the button against the end edge instead. */
  numeric?: boolean;
};

/**
 * Sort control meant to be placed inside a `TableHeader` (`<th>`). Reaches up
 * to its parent header cell to set `aria-sort`, matching the WAI-ARIA table pattern.
 */
export function TableSortButton({ direction = "none", onSort, numeric, children, className, ...props }: TableSortButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const t = useT();

  useEffect(() => {
    const th = ref.current?.closest("th");
    if (!th) return;
    if (direction === "asc") th.setAttribute("aria-sort", "ascending");
    else if (direction === "desc") th.setAttribute("aria-sort", "descending");
    else th.removeAttribute("aria-sort");
    return () => th.removeAttribute("aria-sort");
  }, [direction]);

  const Icon = direction === "asc" ? ChevronUp : direction === "desc" ? ChevronDown : ChevronsUpDown;

  return (
    <button
      ref={ref}
      type="button"
      onClick={onSort}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-1 font-semibold text-inherit outline-none",
        "transition-colors duration-(--dsm-duration-fast) ease-dsm hover:bg-surface-muted",
        numeric ? "-me-2" : "-ms-2",
        className,
      )}
      {...props}
    >
      {children}
      <Icon aria-hidden className={cn("size-3.5 shrink-0", direction === "none" ? "text-ink-subtle" : "text-primary")} />
      <span className="dsm-sr-only">{direction === "asc" ? t.sortDescending : t.sortAscending}</span>
    </button>
  );
}
