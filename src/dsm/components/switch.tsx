"use client";

import type { ComponentProps, ReactNode } from "react";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { cn } from "@/dsm/lib/cn";

export type SwitchSize = "sm" | "md";

const trackClass: Record<SwitchSize, string> = { sm: "h-5 w-9 p-0.5", md: "h-6 w-11 p-0.5" };
const thumbClass: Record<SwitchSize, string> = {
  sm: "size-4 data-checked:translate-x-4 rtl:data-checked:-translate-x-4",
  md: "size-5 data-checked:translate-x-5 rtl:data-checked:-translate-x-5",
};

export type SwitchProps = ComponentProps<typeof BaseSwitch.Root> & {
  label?: ReactNode;
  hint?: ReactNode;
  size?: SwitchSize;
  labelPosition?: "start" | "end";
};

/** Base UI switch styled as a sliding pill track, RTL-safe. */
export function Switch({ label, hint, size = "md", labelPosition = "end", className, id, ...props }: SwitchProps) {
  const track = (
    <BaseSwitch.Root
      id={id}
      className={cn(
        "relative inline-flex shrink-0 cursor-pointer items-center rounded-full bg-line-strong ring-1 ring-inset ring-black/5 transition-colors duration-(--dsm-duration) ease-dsm",
        "hover:not-data-disabled:not-data-checked:bg-ink-subtle data-checked:bg-primary data-checked:ring-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        trackClass[size],
        className,
      )}
      {...props}
    >
      <BaseSwitch.Thumb
        className={cn(
          "pointer-events-none block rounded-full bg-white shadow-[0_1px_2px_rgb(0_0_0/0.25)] transition-transform duration-(--dsm-duration) ease-dsm",
          thumbClass[size],
        )}
      />
    </BaseSwitch.Root>
  );

  if (!label) return track;

  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2.5 has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50",
        labelPosition === "start" && "flex-row-reverse justify-end",
      )}
    >
      {track}
      <span className="flex flex-col gap-0.5 text-sm leading-5 text-ink">
        <span>{label}</span>
        {hint && <span className="text-ink-subtle">{hint}</span>}
      </span>
    </label>
  );
}
