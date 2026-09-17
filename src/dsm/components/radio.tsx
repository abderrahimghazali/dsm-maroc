"use client";

import type { ComponentProps, ReactNode } from "react";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { cn } from "@/dsm/lib/cn";
import { Fieldset } from "./field";

export type RadioVariant = "default" | "card";

export type RadioOptionProps = ComponentProps<typeof Radio.Root> & {
  label: ReactNode;
  hint?: ReactNode;
  variant?: RadioVariant;
};

/** A single radio button with its label; use inside `RadioGroup` or Base UI's `RadioGroup` directly. */
export function RadioOption({ label, hint, variant = "default", className, disabled, id, ...props }: RadioOptionProps) {
  const dot = (
    <Radio.Root
      id={id}
      disabled={disabled}
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded-full bg-surface ring-1 ring-inset ring-line-strong transition-colors duration-(--dsm-duration-fast) ease-dsm",
        "hover:not-data-disabled:ring-ink data-checked:ring-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
      )}
      {...props}
    >
      <Radio.Indicator className="hidden size-2.5 rounded-full bg-primary data-checked:block" />
    </Radio.Root>
  );

  if (variant === "card") {
    return (
      <label
        htmlFor={id}
        className={cn(
          "flex cursor-pointer items-start gap-3 rounded-lg p-4 ring-1 ring-inset ring-line-strong transition-colors duration-(--dsm-duration-fast) ease-dsm",
          "hover:ring-ink has-[[data-checked]]:bg-vert-soft/40 has-[[data-checked]]:ring-2 has-[[data-checked]]:ring-primary",
          "has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50",
          className,
        )}
      >
        {dot}
        <span className="flex flex-col gap-0.5 text-sm leading-5 text-ink">
          <span className="font-medium">{label}</span>
          {hint && <span className="text-ink-subtle">{hint}</span>}
        </span>
      </label>
    );
  }

  return (
    <label
      htmlFor={id}
      className={cn("inline-flex align-top cursor-pointer items-start gap-2.5 has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50", className)}
    >
      {dot}
      <span className="flex flex-col gap-0.5 text-sm leading-5 text-ink">
        <span>{label}</span>
        {hint && <span className="text-ink-subtle">{hint}</span>}
      </span>
    </label>
  );
}

export type RadioGroupOption = { value: string; label: ReactNode; hint?: ReactNode; disabled?: boolean };

export type RadioGroupProps = {
  legend: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  options: RadioGroupOption[];
  orientation?: "row" | "column";
  variant?: RadioVariant;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
};

/** A fieldset of mutually exclusive radio options, in a plain list or a bordered "card" layout. */
export function RadioGroup({
  legend,
  hint,
  error,
  options,
  orientation = "column",
  variant = "default",
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  className,
}: RadioGroupProps) {
  return (
    <Fieldset legend={legend} hint={hint} error={error} className={className}>
      <BaseRadioGroup
        name={name}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        className={cn(
          variant === "card"
            ? cn("grid gap-3", orientation === "row" && "sm:grid-cols-2")
            : cn("flex gap-x-6 gap-y-3", orientation === "row" ? "flex-row flex-wrap" : "flex-col"),
        )}
      >
        {options.map((option) => (
          <RadioOption key={option.value} value={option.value} disabled={option.disabled} label={option.label} hint={option.hint} variant={variant} />
        ))}
      </BaseRadioGroup>
    </Fieldset>
  );
}
