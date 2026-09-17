"use client";

import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { PopupArrow, popupArrowClass } from "./popup-arrow";
import { popupMotionClass } from "./popup-motion";
import { X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type PopoverSide = "top" | "bottom" | "inline-start" | "inline-end";
export type PopoverAlign = "start" | "center" | "end";

export type PopoverProps = Omit<ComponentProps<typeof BasePopover.Root>, "children"> & {
  /** The trigger element, passed through `Popover.Trigger`'s `render` prop. */
  trigger: ReactElement;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  side?: PopoverSide;
  align?: PopoverAlign;
  sideOffset?: number;
  showArrow?: boolean;
  closable?: boolean;
  className?: string;
};

export function Popover({
  trigger,
  title,
  description,
  children,
  side = "bottom",
  align = "center",
  sideOffset = 4,
  showArrow = false,
  closable = false,
  className,
  ...props
}: PopoverProps) {
  const t = useT();
  return (
    <BasePopover.Root {...props}>
      <BasePopover.Trigger render={trigger} />
      <BasePopover.Portal>
        <BasePopover.Positioner
          side={side}
          align={align}
          sideOffset={sideOffset}
          collisionPadding={8}
          className="isolate z-50 outline-none"
        >
          <BasePopover.Popup
            className={cn(
              "relative flex w-72 flex-col gap-2.5 rounded-lg bg-surface p-3 text-sm text-ink shadow-md ring-1 ring-ink/10 outline-none",
              popupMotionClass,
              className,
            )}
          >
            {showArrow && (
              <BasePopover.Arrow className={popupArrowClass}>
                <PopupArrow fill="fill-surface" edge="fill-line" />
              </BasePopover.Arrow>
            )}
            {(title || description || closable) && (
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  {title && <BasePopover.Title className="font-semibold text-ink">{title}</BasePopover.Title>}
                  {description && (
                    <BasePopover.Description className="text-ink-muted">{description}</BasePopover.Description>
                  )}
                </div>
                {closable && (
                  <BasePopover.Close
                    aria-label={t.close}
                    className="-me-1 -mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-md text-ink-subtle transition-colors duration-(--dsm-duration-fast) hover:bg-surface-muted hover:text-ink"
                  >
                    <X className="size-4" aria-hidden />
                  </BasePopover.Close>
                )}
              </div>
            )}
            {children}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
