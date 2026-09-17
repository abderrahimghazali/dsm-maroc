"use client";

import type { ComponentProps, ReactNode } from "react";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import { cn } from "@/dsm/lib/cn";
import { Check, Minus } from "@/dsm/icons";
import { Fieldset } from "./field";

export type CheckboxSize = "sm" | "md";

const boxSize: Record<CheckboxSize, string> = { sm: "size-4", md: "size-5" };
const iconSize: Record<CheckboxSize, string> = { sm: "size-3", md: "size-3.5" };

export type CheckboxProps = ComponentProps<typeof BaseCheckbox.Root> & {
  label?: ReactNode;
  hint?: ReactNode;
  size?: CheckboxSize;
};

/** Base UI checkbox styled with the DSM primary tone and an optional label/hint. */
export function Checkbox({ label, hint, size = "md", className, indeterminate, id, ...props }: CheckboxProps) {
  const box = (
    <BaseCheckbox.Root
      id={id}
      indeterminate={indeterminate}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-sm bg-surface ring-1 ring-inset ring-line-strong transition-colors duration-(--dsm-duration-fast) ease-dsm",
        "hover:not-data-disabled:ring-ink",
        "data-checked:bg-primary data-checked:ring-primary data-indeterminate:bg-primary data-indeterminate:ring-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        boxSize[size],
        className,
      )}
      {...props}
    >
      <BaseCheckbox.Indicator className={cn("hidden items-center justify-center text-primary-fg data-checked:flex data-indeterminate:flex")}>
        {indeterminate ? <Minus className={iconSize[size]} aria-hidden /> : <Check className={iconSize[size]} aria-hidden />}
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );

  if (!label) return box;

  return (
    <label htmlFor={id} className="inline-flex cursor-pointer items-start gap-2.5 has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50">
      {box}
      <span className="flex flex-col gap-0.5 text-sm leading-5 text-ink">
        <span>{label}</span>
        {hint && <span className="text-ink-subtle">{hint}</span>}
      </span>
    </label>
  );
}

export type CheckboxGroupOption = { value: string; label: ReactNode; hint?: ReactNode; disabled?: boolean };

export type CheckboxGroupProps = {
  legend: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  options: CheckboxGroupOption[];
  orientation?: "row" | "column";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  className?: string;
};

/** A fieldset of related checkboxes sharing selection state. */
export function CheckboxGroup({
  legend,
  hint,
  error,
  options,
  orientation = "column",
  value,
  defaultValue,
  onValueChange,
  disabled,
  className,
}: CheckboxGroupProps) {
  return (
    <Fieldset legend={legend} hint={hint} error={error} className={className}>
      <BaseCheckboxGroup
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        className={cn("flex gap-x-6 gap-y-3", orientation === "row" ? "flex-row flex-wrap" : "flex-col")}
      >
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value} disabled={option.disabled} label={option.label} hint={option.hint} />
        ))}
      </BaseCheckboxGroup>
    </Fieldset>
  );
}
