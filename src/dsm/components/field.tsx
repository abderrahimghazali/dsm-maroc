"use client";

import { createContext, useContext, useId, type ComponentProps, type ReactNode } from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { cn } from "@/dsm/lib/cn";
import { CircleAlert } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";

type FieldControlContextValue = { id: string; describedBy?: string; invalid: boolean };
const FieldControlContext = createContext<FieldControlContextValue | null>(null);

type FieldControlInput = {
  id?: string;
  invalid?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling";
};

/** Merge a control's own props with the id / aria wiring provided by the closest `Field` (no-op outside a Field). */
export function useFieldControl(props: FieldControlInput) {
  const ctx = useContext(FieldControlContext);
  const invalid = props.invalid ?? ctx?.invalid ?? false;
  return {
    id: props.id ?? ctx?.id,
    invalid,
    "aria-invalid": props["aria-invalid"] ?? (invalid || undefined),
    "aria-describedby": [props["aria-describedby"], ctx?.describedBy].filter(Boolean).join(" ") || undefined,
  };
}

export type FieldLabelProps = ComponentProps<"label"> & {
  required?: boolean;
  optional?: boolean;
};

export function FieldLabel({ className, required, optional, children, ...props }: FieldLabelProps) {
  const t = useT();
  return (
    <label className={cn("flex items-baseline gap-1.5 text-sm font-medium text-ink", className)} {...props}>
      <span>{children}</span>
      {required && (
        <>
          <span aria-hidden className="text-error">*</span>
          <span className="dsm-sr-only">{t.required}</span>
        </>
      )}
      {optional && <span className="font-normal text-ink-subtle">({t.optional})</span>}
    </label>
  );
}

export type FieldHintProps = ComponentProps<"p">;

export function FieldHint({ className, ...props }: FieldHintProps) {
  return <p className={cn("text-sm leading-relaxed text-ink-muted", className)} {...props} />;
}

export type FieldErrorProps = ComponentProps<"div">;

export function FieldError({ className, children, ...props }: FieldErrorProps) {
  return (
    <div role="alert" className={cn("flex items-start gap-1.5 text-sm text-error", className)} {...props}>
      <CircleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
      <span>{children}</span>
    </div>
  );
}

export type FieldProps = {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  optional?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Labels, hints and validates a single form control (Input, Select, Textarea…). */
export function Field({ label, hint, error, required, optional, id, className, children }: FieldProps) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const hintId = hint ? `${controlId}-hint` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <BaseField.Root invalid={!!error} className={cn("flex flex-col gap-1.5", className)}>
      <FieldLabel htmlFor={controlId} required={required} optional={optional}>
        {label}
      </FieldLabel>
      {hint && <FieldHint id={hintId}>{hint}</FieldHint>}
      <FieldControlContext.Provider value={{ id: controlId, describedBy, invalid: !!error }}>{children}</FieldControlContext.Provider>
      {error && <FieldError id={errorId}>{error}</FieldError>}
    </BaseField.Root>
  );
}

export type FieldsetProps = Omit<ComponentProps<"fieldset">, "children"> & {
  legend: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
};

/** Groups related controls (radio/checkbox groups, composite fields) under a native fieldset/legend. */
export function Fieldset({ legend, hint, error, children, className, ...props }: FieldsetProps) {
  return (
    <fieldset className={cn("flex flex-col gap-3", className)} {...props}>
      <div className="flex flex-col gap-1.5">
        <legend className="p-0 text-sm font-medium text-ink">{legend}</legend>
        {hint && <FieldHint>{hint}</FieldHint>}
      </div>
      {children}
      {error && <FieldError>{error}</FieldError>}
    </fieldset>
  );
}
