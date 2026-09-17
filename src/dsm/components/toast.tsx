"use client";

import { Toast as BaseToast } from "@base-ui/react/toast";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

export type ToastTone = "info" | "success" | "warning" | "error";

const toneIcons: Record<ToastTone, typeof Info> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
};

const toneIconClass: Record<ToastTone, string> = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

const toneBorderClass: Record<ToastTone, string> = {
  info: "border-s-info",
  success: "border-s-success",
  warning: "border-s-warning",
  error: "border-s-error",
};

/** Wrapper around Base UI's `Toast.Provider`. Wrap the part of the tree that shows toasts. */
export function ToastProvider(props: ComponentProps<typeof BaseToast.Provider>) {
  return <BaseToast.Provider {...props} />;
}

type ToastActionData = { actionLabel?: ReactNode };

function ToastList() {
  const { toasts } = BaseToast.useToastManager();
  const t = useT();

  return toasts.map((toast) => {
    const tone = (toast.type as ToastTone | undefined) ?? "info";
    const Icon = toneIcons[tone];
    const actionLabel = (toast.data as ToastActionData | undefined)?.actionLabel;
    return (
      <BaseToast.Root
        key={toast.id}
        toast={toast}
        className={cn(
          "relative flex w-full gap-3 rounded-lg border border-line border-s-4 bg-surface p-4 text-ink shadow-lg outline-none select-none",
          "transition-[transform,opacity] duration-(--dsm-duration-slow) ease-dsm-out",
          "[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--toast-swipe-movement-y))]",
          "data-starting-style:translate-y-2 data-starting-style:scale-95 data-starting-style:opacity-0",
          "data-ending-style:scale-95 data-ending-style:opacity-0",
          toneBorderClass[tone],
        )}
      >
        <Icon aria-hidden className={cn("mt-0.5 size-5 shrink-0", toneIconClass[tone])} />
        <BaseToast.Content className="min-w-0 flex-1">
          {toast.title && <BaseToast.Title className="text-sm font-semibold text-ink" />}
          {toast.description && (
            <BaseToast.Description className="mt-0.5 text-sm leading-relaxed text-ink-muted" />
          )}
          {actionLabel && (
            <BaseToast.Action className="mt-2 text-sm font-medium text-link underline underline-offset-4 hover:text-link-hover">
              {actionLabel}
            </BaseToast.Action>
          )}
        </BaseToast.Content>
        <BaseToast.Close
          aria-label={t.close}
          className="-m-1 inline-flex size-7 shrink-0 items-center justify-center rounded-md text-ink-subtle transition-colors duration-(--dsm-duration-fast) hover:bg-surface-muted hover:text-ink"
        >
          <X className="size-4" aria-hidden />
        </BaseToast.Close>
      </BaseToast.Root>
    );
  });
}

/** Portal + viewport rendering the stacked toasts. Render once inside a `ToastProvider`. */
export function Toaster() {
  return (
    <BaseToast.Portal>
      <BaseToast.Viewport className="fixed bottom-4 end-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col-reverse gap-3 outline-none sm:bottom-6 sm:end-6">
        <ToastList />
      </BaseToast.Viewport>
    </BaseToast.Portal>
  );
}

export type ToastOptions = {
  title?: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
  action?: { label: ReactNode; onClick: () => void };
  timeout?: number;
};

/** Imperative toast API. Must be called from a component rendered inside a `ToastProvider`. */
export function useToast() {
  const manager = BaseToast.useToastManager();
  return {
    add: (options: ToastOptions) =>
      manager.add({
        title: options.title,
        description: options.description,
        type: options.tone ?? "info",
        timeout: options.timeout,
        actionProps: options.action ? { onClick: options.action.onClick } : undefined,
        data: { actionLabel: options.action?.label },
      }),
    close: manager.close,
  };
}
