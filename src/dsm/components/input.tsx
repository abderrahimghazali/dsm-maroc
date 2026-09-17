"use client";

import { useId, useState, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/dsm/lib/cn";
import { Eye, EyeOff } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import { useFieldControl } from "./field";

export type ControlSize = "sm" | "md" | "lg";

const sizeClasses: Record<ControlSize, string> = {
  sm: "h-9 text-sm gap-2",
  md: "h-11 text-[0.9375rem] gap-2.5",
  lg: "h-13 text-base gap-3",
};

export type InputProps = Omit<ComponentProps<"input">, "size"> & {
  size?: ControlSize;
  invalid?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  addonStart?: ReactNode;
  addonEnd?: ReactNode;
};

/** Native text input with the shared DSM control chrome (ring, icons, text addons). */
export function Input({
  className,
  size = "md",
  invalid,
  iconStart,
  iconEnd,
  addonStart,
  addonEnd,
  disabled,
  readOnly,
  id,
  "aria-describedby": ariaDescribedby,
  "aria-invalid": ariaInvalid,
  ...props
}: InputProps) {
  const field = useFieldControl({ id, invalid, "aria-describedby": ariaDescribedby, "aria-invalid": ariaInvalid });
  const isInvalid = field.invalid;
  return (
    <div
      className={cn(
        "flex items-stretch rounded-md bg-surface text-ink ring-1 ring-inset ring-line-strong transition-shadow duration-(--dsm-duration-fast) ease-dsm",
        "has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-focus",
        !disabled && (isInvalid ? "hover:ring-error" : "hover:ring-ink"),
        isInvalid && "ring-error",
        disabled && "bg-surface-muted opacity-60",
        sizeClasses[size],
        className,
      )}
    >
      {addonStart && (
        <span className="flex shrink-0 items-center rounded-s-md border-e border-line bg-surface-muted px-3 text-sm text-ink-muted">
          {addonStart}
        </span>
      )}
      {iconStart && (
        <span className="flex shrink-0 items-center ps-3.5 text-ink-subtle [&_svg]:size-[1.15em]">{iconStart}</span>
      )}
      <input
        className={cn(
          "min-w-0 flex-1 bg-transparent text-inherit outline-none placeholder:text-ink-subtle disabled:cursor-not-allowed",
          addonStart || iconStart ? "ps-2" : "ps-3.5",
          addonEnd || iconEnd ? "pe-2" : "pe-3.5",
        )}
        id={field.id}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={field["aria-invalid"]}
        aria-describedby={field["aria-describedby"]}
        {...props}
      />
      {iconEnd && (
        <span className="flex shrink-0 items-center pe-3.5 text-ink-subtle [&_svg]:size-[1.15em]">{iconEnd}</span>
      )}
      {addonEnd && (
        <span className="flex shrink-0 items-center rounded-e-md border-s border-line bg-surface-muted px-3 text-sm text-ink-muted">
          {addonEnd}
        </span>
      )}
    </div>
  );
}

export type TextareaProps = ComponentProps<"textarea"> & {
  invalid?: boolean;
};

/** Multi-line text control with an optional live "characters remaining" counter. */
export function Textarea({ className, invalid, maxLength, disabled, value, defaultValue, onChange, rows = 4, id, "aria-describedby": ariaDescribedby, ...props }: TextareaProps) {
  const t = useT();
  const generatedId = useId();
  const field = useFieldControl({ id, invalid, "aria-describedby": ariaDescribedby });
  const textareaId = field.id ?? generatedId;
  const isInvalid = field.invalid;
  const [internalLength, setInternalLength] = useState(() => String(defaultValue ?? "").length);
  const length = value !== undefined ? String(value).length : internalLength;

  return (
    <div className="flex flex-col gap-1.5">
      <textarea
        id={textareaId}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        aria-invalid={field["aria-invalid"]}
        aria-describedby={[field["aria-describedby"], maxLength ? `${textareaId}-count` : undefined].filter(Boolean).join(" ") || undefined}
        className={cn(
          "w-full resize-y rounded-md bg-surface px-3.5 py-2.5 text-[0.9375rem] text-ink outline-none ring-1 ring-inset ring-line-strong transition-shadow duration-(--dsm-duration-fast) ease-dsm placeholder:text-ink-subtle",
          !disabled && (isInvalid ? "hover:ring-error" : "hover:ring-ink"),
          "focus-visible:ring-2 focus-visible:ring-focus",
          isInvalid && "ring-error",
          disabled && "cursor-not-allowed bg-surface-muted opacity-60",
          className,
        )}
        onChange={(event) => {
          setInternalLength(event.currentTarget.value.length);
          onChange?.(event);
        }}
        {...props}
      />
      {maxLength && (
        <p id={`${textareaId}-count`} aria-live="polite" className="text-end text-xs text-ink-subtle">
          {Math.max(maxLength - length, 0)} {t.charactersRemaining}
        </p>
      )}
    </div>
  );
}

export type PasswordInputProps = Omit<InputProps, "type" | "iconEnd">;

/** Input with a show/hide toggle for passwords and secret codes. */
export function PasswordInput({ autoComplete = "current-password", ...props }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  const t = useT();

  return (
    <Input
      type={visible ? "text" : "password"}
      autoComplete={autoComplete}
      iconEnd={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? t.hidePassword : t.showPassword}
          className="-me-1 flex size-8 items-center justify-center rounded-sm text-ink-subtle hover:bg-surface-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        >
          {visible ? <EyeOff className="size-[1.1em]" aria-hidden /> : <Eye className="size-[1.1em]" aria-hidden />}
        </button>
      }
      {...props}
    />
  );
}
