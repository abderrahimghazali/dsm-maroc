"use client";

import { useState, type FocusEvent } from "react";
import { cn } from "@/dsm/lib/cn";
import { formatIdentity, identitySpecs, normalizeIdentity, validateIdentity, type IdentityCheck, type IdentityKind } from "@/dsm/lib/identity";
import type { UiStrings } from "@/dsm/i18n";
import { Input, type InputProps } from "./input";

export type { IdentityCheck, IdentityKind } from "@/dsm/lib/identity";

export type IdentityInputProps = Omit<InputProps, "value" | "defaultValue" | "onChange" | "type" | "inputMode" | "maxLength"> & {
  kind: IdentityKind;
  /** Normalised value (letters and digits only), controlled. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (raw: string, check: IdentityCheck & { formatted: string }) => void;
  /** Mark the control invalid after blur when the value is incomplete or fails validation. */
  validateOnBlur?: boolean;
};

/** The error message for a kind, from the UI dictionary — pass it to `Field`'s `error`. */
export function identityErrorMessage(kind: IdentityKind, t: UiStrings) {
  return { cnie: t.cnieInvalid, ice: t.iceInvalid, rib: t.ribInvalid, phone: t.phoneInvalid }[kind];
}

/**
 * Text input for Moroccan identifiers (CNIE, ICE, RIB, phone): filters characters, formats while
 * typing, validates shape and checksum. Always left-to-right, even in an Arabic interface.
 */
export function IdentityInput({
  kind,
  value,
  defaultValue = "",
  onValueChange,
  validateOnBlur = true,
  invalid,
  onBlur,
  placeholder,
  className,
  ...props
}: IdentityInputProps) {
  const spec = identitySpecs[kind];
  const [internal, setInternal] = useState(() => normalizeIdentity(kind, defaultValue));
  const [touched, setTouched] = useState(false);
  const raw = value === undefined ? internal : normalizeIdentity(kind, value);
  const check = validateIdentity(kind, raw);
  const showInvalid = invalid ?? (validateOnBlur && touched && raw.length > 0 && !check.valid);

  return (
    <Input
      {...props}
      type="text"
      dir="ltr"
      inputMode={spec.inputMode}
      autoComplete={props.autoComplete ?? spec.autoComplete}
      autoCapitalize={kind === "cnie" ? "characters" : "off"}
      spellCheck={false}
      maxLength={spec.maxLength}
      placeholder={placeholder ?? spec.placeholder}
      invalid={showInvalid}
      value={formatIdentity(kind, raw)}
      className={cn("font-mono tabular-nums tracking-wide", className)}
      onChange={(e) => {
        const next = normalizeIdentity(kind, e.target.value);
        if (value === undefined) setInternal(next);
        onValueChange?.(next, { ...validateIdentity(kind, next), formatted: formatIdentity(kind, next) });
      }}
      onBlur={(e: FocusEvent<HTMLInputElement>) => {
        setTouched(true);
        onBlur?.(e);
      }}
    />
  );
}
