"use client";

import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { X } from "@/dsm/icons";
import { useLocale, useT } from "@/dsm/i18n/provider";

export type DrawerSide = "start" | "end";

export type DrawerProps = Omit<ComponentProps<typeof BaseDrawer.Root>, "children" | "swipeDirection"> & {
  /** Which logical side the panel slides from — mirrored automatically in RTL. */
  side?: DrawerSide;
  trigger?: ReactElement;
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
};

/** A side panel (Base UI `Drawer`) used for mobile filters and menus. */
export function Drawer({ side = "end", trigger, title, description, footer, children, ...props }: DrawerProps) {
  const { dir } = useLocale();
  const t = useT();

  const physicalEnd = dir === "rtl" ? "left" : "right";
  const physicalStart = dir === "rtl" ? "right" : "left";
  const physical = side === "end" ? physicalEnd : physicalStart;
  const onScreenRight = physical === "right";

  return (
    <BaseDrawer.Root swipeDirection={physical} {...props}>
      {trigger && <BaseDrawer.Trigger render={trigger} />}
      <BaseDrawer.Portal>
        <BaseDrawer.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-ink/40 opacity-[calc(1-var(--drawer-swipe-progress))] transition-opacity duration-(--dsm-duration-slow) ease-dsm-out data-starting-style:opacity-0 data-ending-style:opacity-0 data-swiping:duration-0" />
        <BaseDrawer.Viewport
          className={cn("fixed inset-0 z-50 flex items-stretch", onScreenRight ? "justify-end" : "justify-start")}
        >
          <BaseDrawer.Popup
            className={cn(
              "flex h-full w-[min(24rem,100vw-3rem)] flex-col bg-surface text-ink shadow-lg outline-none",
              "transition-transform duration-(--dsm-duration-slow) ease-dsm-out data-swiping:select-none",
              "[transform:translateX(var(--drawer-swipe-movement-x))]",
              onScreenRight
                ? "data-starting-style:[transform:translateX(100%)] data-ending-style:[transform:translateX(100%)]"
                : "data-starting-style:[transform:translateX(-100%)] data-ending-style:[transform:translateX(-100%)]",
            )}
          >
            <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3.5">
              <div className="min-w-0 flex-1">
                {title && (
                  <BaseDrawer.Title className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                    {title}
                  </BaseDrawer.Title>
                )}
                {description && <BaseDrawer.Description className="mt-1 text-sm text-ink-muted">{description}</BaseDrawer.Description>}
              </div>
              <BaseDrawer.Close
                aria-label={t.close}
                className="-me-1 inline-flex size-9 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors duration-(--dsm-duration-fast) hover:bg-surface-muted hover:text-ink"
              >
                <X className="size-5" aria-hidden />
              </BaseDrawer.Close>
            </div>
            <BaseDrawer.Content className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
              {children}
            </BaseDrawer.Content>
            {footer && <div className="border-t border-line p-3">{footer}</div>}
          </BaseDrawer.Popup>
        </BaseDrawer.Viewport>
      </BaseDrawer.Portal>
    </BaseDrawer.Root>
  );
}
