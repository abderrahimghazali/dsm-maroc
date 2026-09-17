"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { popupMotionClass } from "./popup-motion";

/** Wrapper around Base UI's `Tooltip.Provider` — tooltips open instantly and share one delay group. */
export function TooltipProvider(props: ComponentProps<typeof BaseTooltip.Provider>) {
  return <BaseTooltip.Provider delay={0} {...props} />;
}

export type TooltipSide = "top" | "bottom" | "inline-start" | "inline-end";

export type TooltipProps = Omit<ComponentProps<typeof BaseTooltip.Root>, "children"> & {
  content: ReactNode;
  side?: TooltipSide;
  sideOffset?: number;
  /** The trigger element, passed through `Tooltip.Trigger`'s `render` prop. */
  children: ReactElement;
};

// A rotated square that overlaps the popup edge — Base UI sets the along-edge coordinate inline.
const arrowClass = cn(
  "absolute z-50 size-2.5 rotate-45 rounded-[2px] bg-ink",
  "data-[side=top]:-bottom-2.5 data-[side=top]:translate-y-[calc(-50%-2px)]",
  "data-[side=bottom]:top-1 data-[side=bottom]:translate-y-[calc(-50%-2px)]",
  "data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2",
  "data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2",
  "data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2",
  "data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2",
  "rtl:data-[side=inline-start]:right-auto rtl:data-[side=inline-start]:-left-1",
  "rtl:data-[side=inline-end]:left-auto rtl:data-[side=inline-end]:-right-1",
);

export function Tooltip({ content, side = "top", sideOffset = 4, children, ...props }: TooltipProps) {
  return (
    <BaseTooltip.Root {...props}>
      <BaseTooltip.Trigger render={children} />
      <BaseTooltip.Portal>
        <BaseTooltip.Positioner side={side} sideOffset={sideOffset} collisionPadding={8} className="isolate z-50 outline-none">
          <BaseTooltip.Popup
            className={cn(
              "relative inline-flex w-fit max-w-xs items-center gap-1.5 rounded-md bg-ink px-3 py-1.5 text-xs text-balance text-ink-inverse outline-none",
              popupMotionClass,
            )}
          >
            {content}
            <BaseTooltip.Arrow className={arrowClass} />
          </BaseTooltip.Popup>
        </BaseTooltip.Positioner>
      </BaseTooltip.Portal>
    </BaseTooltip.Root>
  );
}
