"use client";

import { useId, useState, type ComponentProps, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { localeMeta } from "@/dsm/i18n";
import { useLocale, useT } from "@/dsm/i18n/provider";
import { Popover } from "./popover";
import { moroccoMapSize, moroccoMapViewBox, moroccoRegions, projectMoroccoPoint, type MoroccoRegion, type MoroccoRegionId } from "@/dsm/data/morocco-regions";

// Data (regions, names, projection) lives in "@/dsm/data/morocco-regions" — a plain module usable from
// Server Components. Only types are re-exported here, since this file is a Client Component.
export type { MoroccoRegion, MoroccoRegionId } from "@/dsm/data/morocco-regions";

export type MoroccoMapPin = {
  id: string;
  /** Geographic position: [longitude, latitude]. */
  coords: readonly [number, number];
  /** Popover title and accessible name of the pin. */
  label: string;
  description?: ReactNode;
  /** Extra popover content (address, hours, links…). */
  content?: ReactNode;
  tone?: "rouge" | "primary" | "ink";
};

export type MoroccoMapProps = Omit<ComponentProps<"div">, "onChange" | "defaultValue" | "value"> & {
  /** Selected region (controlled). */
  value?: MoroccoRegionId | null;
  defaultValue?: MoroccoRegionId | null;
  onValueChange?: (id: MoroccoRegionId | null, region: MoroccoRegion) => void;
  /** Numeric value per region, rendered as a five-step choropleth in the primary colour. */
  values?: Partial<Record<MoroccoRegionId, number>>;
  formatValue?: (value: number, region: MoroccoRegion) => ReactNode;
  /** What to print inside each region. Names only fit at large sizes. */
  labels?: "none" | "code" | "name";
  /** Regions are focusable buttons. Defaults to true when `onValueChange` is set. */
  interactive?: boolean;
  /** Live caption under the map naming the hovered or selected region. */
  caption?: boolean;
  /** Legend for the choropleth scale (shown automatically when `values` is set). */
  legend?: boolean;
  /** Points of interest drawn over the map; each opens a popover. */
  pins?: MoroccoMapPin[];
  /** Print each pin's label next to its marker. */
  pinLabels?: boolean;
};

const pinTone = {
  rouge: "bg-rouge",
  primary: "bg-primary",
  ink: "bg-ink",
} as const;

const STEPS = 5;

function stepFor(value: number, min: number, max: number) {
  if (max === min) return STEPS - 1;
  return Math.min(STEPS - 1, Math.floor(((value - min) / (max - min)) * STEPS));
}

/** Fill for a choropleth step: primary colour mixed into the surface, 28 % → 100 %. */
function stepFill(step: number) {
  const pct = Math.round(28 + (step / (STEPS - 1)) * 72);
  return `color-mix(in oklab, var(--dsm-primary) ${pct}%, var(--dsm-surface))`;
}

/**
 * The Kingdom's 12 regions, whole territory, as an accessible SVG map: a region picker,
 * a choropleth for figures by region, or a static illustration.
 */
export function MoroccoMap({
  value,
  defaultValue = null,
  onValueChange,
  values,
  formatValue,
  labels = "none",
  interactive = onValueChange !== undefined,
  caption = true,
  legend = true,
  pins,
  pinLabels = false,
  className,
  ...props
}: MoroccoMapProps) {
  const t = useT();
  const { locale } = useLocale();
  const titleId = useId();
  const [internal, setInternal] = useState<MoroccoRegionId | null>(defaultValue);
  const [hovered, setHovered] = useState<MoroccoRegionId | null>(null);
  const selected = value === undefined ? internal : value;

  const numbers = values ? Object.values(values).filter((v): v is number => typeof v === "number") : [];
  const min = numbers.length ? Math.min(...numbers) : 0;
  const max = numbers.length ? Math.max(...numbers) : 0;
  const format = formatValue ?? ((v: number) => new Intl.NumberFormat(localeMeta[locale].code).format(v));

  const select = (region: MoroccoRegion) => {
    const next = selected === region.id ? null : region.id;
    if (value === undefined) setInternal(next);
    onValueChange?.(next, region);
  };

  const active = moroccoRegions.find((r) => r.id === (hovered ?? selected));
  const activeValue = active && values ? values[active.id] : undefined;

  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      <div className="relative">
      <svg
        viewBox={moroccoMapViewBox}
        role={interactive ? "group" : "img"}
        aria-labelledby={titleId}
        lang={localeMeta[locale].code}
        className="h-auto w-full max-w-full select-none"
      >
        <title id={titleId}>{t.moroccoMap}</title>
        {moroccoRegions.map((region) => {
          const v = values?.[region.id];
          const isSelected = selected === region.id;
          const isHovered = hovered === region.id;
          const name = region.name[locale] ?? region.name.fr;
          const fill =
            isSelected ? "var(--dsm-primary)"
            : typeof v === "number" ? stepFill(stepFor(v, min, max))
            : isHovered ? "color-mix(in oklab, var(--dsm-primary) 26%, var(--dsm-surface))"
            : "color-mix(in oklab, var(--dsm-primary) 11%, var(--dsm-surface))";
          return (
            <g key={region.id}>
              <path
                d={region.d}
                fill={fill}
                stroke="var(--dsm-surface)"
                strokeWidth={1.25}
                strokeLinejoin="round"
                className={cn(
                  "transition-[fill] duration-(--dsm-duration-fast) ease-dsm outline-none",
                  interactive && "cursor-pointer hover:brightness-95 focus-visible:stroke-focus focus-visible:stroke-[2.5]",
                )}
                {...(interactive
                  ? {
                      role: "button",
                      tabIndex: 0,
                      "aria-pressed": isSelected,
                      "aria-label": typeof v === "number" ? `${name} : ${format(v, region)}` : name,
                      onClick: () => select(region),
                      onKeyDown: (e: KeyboardEvent<SVGPathElement>) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          select(region);
                        }
                      },
                      onMouseEnter: () => setHovered(region.id),
                      onMouseLeave: () => setHovered(null),
                      onFocus: () => setHovered(region.id),
                      onBlur: () => setHovered(null),
                    }
                  : { onMouseEnter: () => setHovered(region.id), onMouseLeave: () => setHovered(null) })}
              >
                {!interactive && <title>{typeof v === "number" ? `${name} : ${format(v, region)}` : name}</title>}
              </path>
            </g>
          );
        })}
        {labels !== "none" && (
          <g aria-hidden className="pointer-events-none">
            {moroccoRegions.map((region) => {
              const v = values?.[region.id];
              const inverted = selected === region.id || (typeof v === "number" && stepFor(v, min, max) >= 3);
              const name = region.name[locale] ?? region.name.fr;
              // Long names break on their hyphens ("Tanger-Tétouan-Al Hoceïma" → three lines).
              const lines = labels === "code" ? [region.code] : name.split(/\s*-\s*/);
              const lineHeight = labels === "code" ? 0 : 11;
              return (
                <text
                  key={region.id}
                  x={region.label[0]}
                  y={region.label[1] - ((lines.length - 1) * lineHeight) / 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className={cn(
                    "font-medium",
                    labels === "code" ? "text-[13px] tabular-nums" : "text-[9.5px]",
                    inverted ? "fill-primary-fg" : "fill-ink [paint-order:stroke] stroke-surface stroke-[2.5px]",
                  )}
                >
                  {lines.map((line, i) => (
                    <tspan key={i} x={region.label[0]} dy={i === 0 ? 0 : lineHeight}>
                      {line}
                    </tspan>
                  ))}
                </text>
              );
            })}
          </g>
        )}
      </svg>

      {pins && pins.length > 0 && (
        <ul className="pointer-events-none absolute inset-0 m-0 list-none p-0">
          {pins.map((pin) => {
            const [x, y] = projectMoroccoPoint(pin.coords[0], pin.coords[1]);
            return (
              <li
                key={pin.id}
                className="pointer-events-auto absolute"
                style={{ left: `${(x / moroccoMapSize.width) * 100}%`, top: `${(y / moroccoMapSize.height) * 100}%` }}
              >
                <Popover
                  side="top"
                  sideOffset={10}
                  title={pin.label}
                  description={pin.description}
                  trigger={
                    <button
                      type="button"
                      aria-label={pin.label}
                      className={cn(
                        "group/pin absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 outline-none",
                        "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                      )}
                    >
                      <span
                        className={cn(
                          "block size-3.5 rounded-full shadow-[0_0_0_2.5px_var(--dsm-surface),0_1px_3px_rgb(0_0_0/0.35)] transition-transform duration-(--dsm-duration-fast) ease-dsm",
                          "group-hover/pin:scale-125 group-data-popup-open/pin:scale-125",
                          pinTone[pin.tone ?? "rouge"],
                        )}
                      />
                      {pinLabels && (
                        <span className="pointer-events-none absolute start-full top-1/2 ms-0.5 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium text-ink [paint-order:stroke] [-webkit-text-stroke:3px_var(--dsm-surface)]">
                          {pin.label}
                        </span>
                      )}
                    </button>
                  }
                >
                  {pin.content}
                </Popover>
              </li>
            );
          })}
        </ul>
      )}
      </div>

      {values && legend && numbers.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
          <span>{format(min, moroccoRegions[0])}</span>
          <span className="flex gap-0.5" aria-hidden>
            {Array.from({ length: STEPS }, (_, i) => (
              <span key={i} className="block h-3 w-6 rounded-xs" style={{ background: stepFill(i) }} />
            ))}
          </span>
          <span>{format(max, moroccoRegions[0])}</span>
        </div>
      )}

      {caption && (
        <p aria-live="polite" className="min-h-5 text-sm text-ink-muted">
          {active ? (
            <>
              <span className="font-semibold text-ink">{active.name[locale] ?? active.name.fr}</span>
              {typeof activeValue === "number" ? (
                <> — {format(activeValue, active)}</>
              ) : (
                <>
                  {" · "}
                  {t.regionCapital} : {active.capital}
                </>
              )}
            </>
          ) : (
            t.moroccoMapHint
          )}
        </p>
      )}
    </div>
  );
}
