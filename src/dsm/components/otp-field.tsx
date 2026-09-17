"use client";

import { useId, type ReactNode } from "react";
import { OTPField } from "@base-ui/react/otp-field";
import { cn } from "@/dsm/lib/cn";
import { useT } from "@/dsm/i18n/provider";
import { FieldError, FieldHint } from "./field";

export type OtpFieldProps = {
  length?: number;
  label: ReactNode;
  hint?: ReactNode;
  invalid?: boolean;
  error?: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
};

/** Segmented one-time-code input for SMS or e-ID verification. */
export function OtpField({
  length = 6,
  label,
  hint,
  invalid,
  error,
  value,
  defaultValue,
  onValueChange,
  name,
  disabled,
  className,
  id,
}: OtpFieldProps) {
  const t = useT();
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const isInvalid = !!invalid || !!error;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={fieldId} className="text-sm font-medium text-ink">
        {label}
      </label>
      {hint && <FieldHint id={hintId}>{hint}</FieldHint>}
      <OTPField.Root
        id={fieldId}
        length={length}
        value={value}
        defaultValue={defaultValue}
        onValueChange={(next) => onValueChange?.(next)}
        name={name}
        disabled={disabled}
        aria-invalid={isInvalid || undefined}
        aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined}
        className="flex gap-2"
      >
        {Array.from({ length }).map((_, index) => (
          <OTPField.Input
            key={index}
            aria-label={index === 0 ? undefined : `${t.digit} ${index + 1} ${t.pageOf} ${length}`}
            disabled={disabled}
            className={cn(
              "h-12 w-10 rounded-md bg-surface text-center text-lg font-semibold text-ink ring-1 ring-inset ring-line-strong outline-none transition-shadow duration-(--dsm-duration-fast) ease-dsm",
              "hover:not-data-disabled:ring-ink focus-visible:ring-2 focus-visible:ring-focus",
              isInvalid && "ring-error",
              "data-disabled:cursor-not-allowed data-disabled:bg-surface-muted data-disabled:opacity-60",
            )}
          />
        ))}
      </OTPField.Root>
      {error && <FieldError id={errorId}>{error}</FieldError>}
    </div>
  );
}
