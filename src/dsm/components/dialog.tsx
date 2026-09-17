"use client";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/dsm/lib/cn";
import { X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import { buttonVariants } from "./button";

const backdropClass =
  "fixed inset-0 z-50 min-h-dvh bg-black/10 backdrop-blur-xs transition-opacity duration-(--dsm-duration-fast) ease-dsm-out data-starting-style:opacity-0 data-ending-style:opacity-0 dark:bg-black/40";

const popupClass =
  "relative flex w-full flex-col overflow-hidden rounded-lg bg-surface text-ink ring-1 ring-ink/10 outline-none " +
  "transition-[opacity,scale] duration-(--dsm-duration-fast) ease-dsm-out " +
  "data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0";

const sizeClass: Record<"sm" | "md" | "lg" | "full", string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  full: "max-w-4xl",
};

export type DialogProps = Omit<ComponentProps<typeof BaseDialog.Root>, "children"> & {
  /** Rendered through `Dialog.Trigger`'s `render` prop. */
  trigger?: ReactElement;
  children?: ReactNode;
};

/** Wrapper around Base UI's `Dialog.Root`. Pair with `DialogContent`. */
export function Dialog({ trigger, children, ...props }: DialogProps) {
  return (
    <BaseDialog.Root {...props}>
      {trigger && <BaseDialog.Trigger render={trigger} />}
      {children}
    </BaseDialog.Root>
  );
}

export type DialogContentProps = Omit<ComponentProps<typeof BaseDialog.Popup>, "title"> & {
  size?: "sm" | "md" | "lg" | "full";
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
};

export function DialogContent({
  size = "md",
  title,
  description,
  footer,
  children,
  className,
  ...props
}: DialogContentProps) {
  const t = useT();
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className={backdropClass} />
      <BaseDialog.Viewport className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
        <BaseDialog.Popup
          initialFocus={contentRef}
          className={cn(popupClass, "max-h-[calc(100dvh-2rem)]", sizeClass[size], className)}
          {...props}
        >
          <BaseDialog.Close
            aria-label={t.close}
            className="absolute end-3 top-3 inline-flex size-8 items-center justify-center rounded-md text-ink-muted transition-colors duration-(--dsm-duration-fast) hover:bg-surface-muted hover:text-ink"
          >
            <X className="size-4" aria-hidden />
          </BaseDialog.Close>
          <div ref={contentRef} tabIndex={-1} className="flex-1 overflow-y-auto p-5 outline-none">
            {(title || description) && (
              <div className="mb-4 pe-8">
                {title && (
                  <BaseDialog.Title className="text-base font-semibold leading-tight text-ink">{title}</BaseDialog.Title>
                )}
                {description && (
                  <BaseDialog.Description className="mt-1.5 text-sm text-ink-muted">{description}</BaseDialog.Description>
                )}
              </div>
            )}
            {children}
          </div>
          {footer}
        </BaseDialog.Popup>
      </BaseDialog.Viewport>
    </BaseDialog.Portal>
  );
}

export function DialogFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex shrink-0 flex-col-reverse gap-2 border-t border-line bg-surface-muted/50 px-5 py-4 sm:flex-row sm:flex-wrap sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

export type AlertDialogTone = "default" | "danger";

export type AlertDialogProps = Omit<ComponentProps<typeof BaseAlertDialog.Root>, "children"> & {
  trigger?: ReactElement;
  title: ReactNode;
  description?: ReactNode;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
  tone?: AlertDialogTone;
  onConfirm?: () => void;
};

/** Wrapper around Base UI's `AlertDialog` for confirmation prompts. */
export function AlertDialog({
  trigger,
  title,
  description,
  confirmLabel,
  cancelLabel,
  tone = "default",
  onConfirm,
  ...props
}: AlertDialogProps) {
  const t = useT();
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <BaseAlertDialog.Root {...props}>
      {trigger && <BaseAlertDialog.Trigger render={trigger} />}
      <BaseAlertDialog.Portal>
        <BaseAlertDialog.Backdrop className={backdropClass} />
        <BaseAlertDialog.Viewport className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
          <BaseAlertDialog.Popup initialFocus={contentRef} className={cn(popupClass, "max-w-md")}>
            <div ref={contentRef} tabIndex={-1} className="p-5 outline-none">
              <BaseAlertDialog.Title className="text-base font-semibold leading-tight text-ink">{title}</BaseAlertDialog.Title>
              {description && (
                <BaseAlertDialog.Description className="mt-1.5 text-sm text-balance text-ink-muted">
                  {description}
                </BaseAlertDialog.Description>
              )}
            </div>
            <DialogFooter>
              <BaseAlertDialog.Close className={buttonVariants({ variant: "secondary" })}>
                {cancelLabel ?? t.cancel}
              </BaseAlertDialog.Close>
              <BaseAlertDialog.Close
                onClick={onConfirm}
                className={buttonVariants({ variant: tone === "danger" ? "danger" : "primary" })}
              >
                {confirmLabel ?? t.confirm}
              </BaseAlertDialog.Close>
            </DialogFooter>
          </BaseAlertDialog.Popup>
        </BaseAlertDialog.Viewport>
      </BaseAlertDialog.Portal>
    </BaseAlertDialog.Root>
  );
}
