"use client";

import { Alert } from "@/dsm/components/alert";

export default function AlertInForm() {
  return (
    <form className="max-w-md space-y-4" onSubmit={(e) => e.preventDefault()}>
      <h3 className="text-lg font-semibold tracking-tight">Renouveler ma carte nationale d&apos;identité</h3>

      <Alert tone="error" title="Formulaire incomplet" size="sm">
        Deux champs doivent être corrigés avant l&apos;envoi.
      </Alert>
      <Alert tone="info" title="Astuce" size="sm">
        Le numéro de CNIE figure au verso de votre carte actuelle, sous le code-barres.
      </Alert>

      <div className="space-y-1.5">
        <label htmlFor="alert-form-cin" className="block text-sm font-medium text-ink">
          Numéro de CNIE <span className="text-ink-subtle">(obligatoire)</span>
        </label>
        <input
          id="alert-form-cin"
          type="text"
          aria-invalid="true"
          aria-describedby="alert-form-cin-error"
          placeholder="AB123456"
          className="h-11 w-full rounded-md border border-error bg-surface px-3.5 text-sm text-ink outline-none placeholder:text-ink-subtle focus-visible:ring-2 focus-visible:ring-focus"
        />
        <p id="alert-form-cin-error" className="text-xs text-error">
          Ce champ est obligatoire.
        </p>
      </div>
    </form>
  );
}
