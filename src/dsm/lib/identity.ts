/**
 * Moroccan identifiers: normalisation, display formatting and validation.
 * Pure functions — usable on the server, in forms and in tests.
 */
export type IdentityKind = "cnie" | "ice" | "rib" | "phone";

export type IdentityCheck = {
  /** The value has the expected length / shape (may still fail a checksum). */
  complete: boolean;
  /** Complete and passes every rule (RIB key, phone prefix…). */
  valid: boolean;
};

const digitsOnly = (s: string) => s.replace(/\D/g, "");
const groups = (s: string, sizes: number[]) => {
  const out: string[] = [];
  let i = 0;
  for (const n of sizes) {
    if (i >= s.length) break;
    out.push(s.slice(i, i + n));
    i += n;
  }
  return out.join(" ");
};

/** Moroccan RIB (24 digits): the 2-digit key makes the whole number a multiple of 97. */
export function isRibKeyValid(rib: string) {
  return /^\d{24}$/.test(rib) && BigInt(rib) % BigInt(97) === BigInt(0);
}

type Spec = {
  normalize: (input: string) => string;
  format: (raw: string) => string;
  check: (raw: string) => IdentityCheck;
  /** Longest formatted value, for `maxLength`. */
  maxLength: number;
  inputMode: "text" | "numeric" | "tel";
  autoComplete: string;
  placeholder: string;
};

export const identitySpecs: Record<IdentityKind, Spec> = {
  // Carte nationale d'identité électronique: one or two letters, then five to seven digits (AB123456).
  cnie: {
    normalize: (input) => {
      const s = input.toUpperCase().replace(/[^A-Z0-9]/g, "");
      const letters = (s.match(/^[A-Z]{1,2}/) ?? [""])[0];
      const digits = s.slice(letters.length).replace(/\D/g, "").slice(0, 7);
      return letters + digits;
    },
    format: (raw) => raw,
    check: (raw) => {
      const valid = /^[A-Z]{1,2}\d{5,7}$/.test(raw);
      return { complete: valid, valid };
    },
    maxLength: 9,
    inputMode: "text",
    autoComplete: "off",
    placeholder: "AB123456",
  },
  // Identifiant commun de l'entreprise: 15 digits — 9 (entreprise) + 4 (établissement) + 2 (contrôle).
  ice: {
    normalize: (input) => digitsOnly(input).slice(0, 15),
    format: (raw) => groups(raw, [9, 4, 2]),
    check: (raw) => {
      const complete = raw.length === 15;
      return { complete, valid: complete };
    },
    maxLength: 17,
    inputMode: "numeric",
    autoComplete: "off",
    placeholder: "000000000 0000 00",
  },
  // Relevé d'identité bancaire: 24 digits — banque (3), ville (3), compte (16), clé (2).
  rib: {
    normalize: (input) => digitsOnly(input).slice(0, 24),
    format: (raw) => groups(raw, [3, 3, 16, 2]),
    check: (raw) => {
      const complete = raw.length === 24;
      return { complete, valid: complete && isRibKeyValid(raw) };
    },
    maxLength: 27,
    inputMode: "numeric",
    autoComplete: "off",
    placeholder: "000 000 0000000000000000 00",
  },
  // National number, 10 digits starting with 05 (fixe), 06/07 (mobile) or 08. Accepts pasted +212 / 00212 forms.
  phone: {
    normalize: (input) => {
      let d = digitsOnly(input);
      if (d.startsWith("00212")) d = "0" + d.slice(5);
      else if (d.startsWith("212") && d.length >= 12) d = "0" + d.slice(3);
      return d.slice(0, 10);
    },
    format: (raw) => groups(raw, [2, 2, 2, 2, 2]),
    check: (raw) => {
      const complete = raw.length === 10;
      return { complete, valid: complete && /^0[5-8]\d{8}$/.test(raw) };
    },
    maxLength: 14,
    inputMode: "tel",
    autoComplete: "tel-national",
    placeholder: "06 12 34 56 78",
  },
};

/** Keep only the characters an identifier of this kind can contain, in canonical form. */
export function normalizeIdentity(kind: IdentityKind, input: string) {
  return identitySpecs[kind].normalize(input);
}

/** Display form with the conventional grouping (raw must already be normalised). */
export function formatIdentity(kind: IdentityKind, raw: string) {
  return identitySpecs[kind].format(raw);
}

export function validateIdentity(kind: IdentityKind, raw: string): IdentityCheck {
  return identitySpecs[kind].check(raw);
}

/** E.164 form of a national phone number ("0612345678" → "+212612345678"). */
export function toInternationalPhone(raw: string) {
  return raw.startsWith("0") ? `+212${raw.slice(1)}` : raw;
}
