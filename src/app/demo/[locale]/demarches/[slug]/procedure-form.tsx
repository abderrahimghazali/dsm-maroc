"use client";

import { useState } from "react";
import { Alert } from "@/dsm/components/alert";
import { Button, ButtonGroup } from "@/dsm/components/button";
import { Checkbox } from "@/dsm/components/checkbox";
import { DateInput } from "@/dsm/components/date-input";
import { Field } from "@/dsm/components/field";
import { FileUpload } from "@/dsm/components/file-upload";
import { Input } from "@/dsm/components/input";
import { RadioGroup } from "@/dsm/components/radio";
import { Select } from "@/dsm/components/select";
import { StepIndicator } from "@/dsm/components/stepper";
import { Toaster, ToastProvider, useToast } from "@/dsm/components/toast";
import { ArrowBack, ArrowForward, CircleCheck, Download, FileText, Pencil, Send } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import type { DemoContent, DemoFormField } from "@/content/demo/types";
import type { DemoLocale } from "@/content/demo";

type FormContent = DemoContent["procedure"]["form"];
type Values = Record<string, string | boolean | File[] | undefined>;

function isEmpty(v: Values[string]) {
  if (v === undefined || v === null) return true;
  if (typeof v === "string") return v.trim() === "";
  if (typeof v === "boolean") return !v;
  return v.length === 0;
}

function display(field: DemoFormField, v: Values[string]): string {
  if (isEmpty(v)) return "—";
  if (field.kind === "select" || field.kind === "radio") return field.options.find((o) => o.value === v)?.label ?? String(v);
  if (field.kind === "checkbox") return v ? "✓" : "—";
  if (field.kind === "file") return (v as File[]).map((f) => f.name).join(", ");
  return String(v);
}

export function ProcedureForm({ locale, form }: { locale: DemoLocale; form: FormContent }) {
  return (
    <ToastProvider>
      <FormInner locale={locale} form={form} />
      <Toaster />
    </ToastProvider>
  );
}

function FormInner({ form }: { locale: DemoLocale; form: FormContent }) {
  const t = useT();
  const toast = useToast();
  const [step, setStep] = useState(0); // 0..n-1 = fields, n = review
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const total = form.steps.length + 1;
  const reviewIndex = form.steps.length;
  const current = form.steps[step];

  const set = (name: string, v: Values[string]) => {
    setValues((prev) => ({ ...prev, [name]: v }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (fields: DemoFormField[]) => {
    const next: Record<string, string> = {};
    for (const f of fields) if (f.required && isEmpty(values[f.name])) next[f.name] = t.fieldRequired;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (current && !validate(current.fields)) return;
    setStep((s) => Math.min(s + 1, reviewIndex));
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goPrev = () => {
    setStep((s) => Math.max(s - 1, 0));
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const submit = () => {
    if (!consent) {
      setConsentError(true);
      return;
    }
    setSubmitted(true);
    toast.add({ title: form.success.title, description: form.success.reference, tone: "success" });
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="dsm-arch flex size-14 shrink-0 items-center justify-center bg-vert-soft text-vert-soft-fg">
            <CircleCheck className="size-7" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-semibold tracking-tight">{form.success.title}</h3>
            <p className="mt-2 text-ink-muted">{form.success.text}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-surface-muted px-3 py-2 font-mono text-sm">
              <FileText className="size-4 text-primary" aria-hidden />
              {form.success.reference}
            </p>
            <ol className="mt-6 space-y-3">
              {form.success.nextSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-ink-muted">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-ink-inverse">{i + 1}</span>
                  <span className="pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
            <ButtonGroup className="mt-8">
              <Button iconStart={<Download />}>{form.success.download}</Button>
              <Button variant="secondary" iconEnd={<ArrowForward />}>
                {form.success.track}
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }

  const isReview = step === reviewIndex;

  return (
    <div className="rounded-lg border border-line bg-surface">
      <div className="border-b border-line p-6 sm:p-8">
        <StepIndicator
          step={step + 1}
          totalSteps={total}
          title={isReview ? form.reviewTitle : current.title}
          nextTitle={isReview ? undefined : step + 1 < reviewIndex ? form.steps[step + 1].title : form.reviewTitle}
        />
      </div>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (isReview) submit();
          else goNext();
        }}
        className="p-6 sm:p-8"
      >
        {!isReview && (
          <div className="space-y-6">
            {current.description && <p className="text-ink-muted">{current.description}</p>}
            {current.fields.map((f) => {
              const err = errors[f.name] || undefined;
              switch (f.kind) {
                case "text":
                case "email":
                case "tel":
                  return (
                    <Field key={f.name} label={f.label} hint={f.hint} required={f.required} error={err}>
                      <Input
                        type={f.kind}
                        name={f.name}
                        placeholder={f.placeholder}
                        addonStart={f.addonStart}
                        value={(values[f.name] as string) ?? ""}
                        onChange={(e) => set(f.name, e.target.value)}
                        autoComplete={f.kind === "email" ? "email" : f.kind === "tel" ? "tel" : undefined}
                        dir={f.kind === "tel" || f.kind === "email" ? "ltr" : undefined}
                      />
                    </Field>
                  );
                case "date":
                  return (
                    <DateInput
                      key={f.name}
                      label={f.label}
                      hint={f.hint}
                      name={f.name}
                      required={f.required}
                      error={err}
                      value={(values[f.name] as string) ?? ""}
                      onChange={(v) => set(f.name, v)}
                    />
                  );
                case "select":
                  return (
                    <Field key={f.name} label={f.label} hint={f.hint} required={f.required} error={err}>
                      <Select
                        name={f.name}
                        options={f.options}
                        value={(values[f.name] as string) ?? null}
                        onValueChange={(v) => set(f.name, v ?? undefined)}
                        invalid={!!err}
                      />
                    </Field>
                  );
                case "radio":
                  return (
                    <RadioGroup
                      key={f.name}
                      legend={f.label}
                      hint={f.hint}
                      name={f.name}
                      options={f.options}
                      variant="card"
                      orientation="column"
                      error={err}
                      value={(values[f.name] as string) ?? ""}
                      onValueChange={(v) => set(f.name, v)}
                    />
                  );
                case "checkbox":
                  return (
                    <Checkbox
                      key={f.name}
                      name={f.name}
                      label={f.label}
                      hint={f.hint}
                      checked={!!values[f.name]}
                      onCheckedChange={(checked) => set(f.name, checked)}
                    />
                  );
                case "file":
                  return (
                    <FileUpload
                      key={f.name}
                      label={f.label}
                      accept={f.accept}
                      maxSizeMb={5}
                      error={err}
                      onFilesChange={(files) => set(f.name, files)}
                    />
                  );
              }
            })}
          </div>
        )}

        {isReview && (
          <div className="space-y-8">
            <p className="text-ink-muted">{form.reviewText}</p>
            {form.steps.map((s, i) => (
              <section key={s.title} className="overflow-hidden rounded-lg border border-line">
                <div className="flex items-center justify-between gap-3 bg-surface-muted px-4 py-2.5">
                  <h4 className="text-sm font-semibold">{s.title}</h4>
                  <Button variant="tertiary" size="sm" iconStart={<Pencil />} onClick={() => setStep(i)}>
                    {t.edit}
                  </Button>
                </div>
                <dl className="divide-y divide-line">
                  {s.fields.map((f) => (
                    <div key={f.name} className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-4">
                      <dt className="text-sm text-ink-muted">{f.label}</dt>
                      <dd className="text-sm font-medium text-ink">{display(f, values[f.name])}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
            <div>
              <Checkbox
                label={form.consent}
                checked={consent}
                onCheckedChange={(c) => {
                  setConsent(!!c);
                  if (c) setConsentError(false);
                }}
              />
              {consentError && (
                <Alert tone="error" size="sm" className="mt-3">
                  {t.fieldRequired}
                </Alert>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <div className="flex flex-wrap gap-3">
            {step > 0 && (
              <Button type="button" variant="secondary" iconStart={<ArrowBack />} onClick={goPrev}>
                {form.previous}
              </Button>
            )}
            <Button
              type="button"
              variant="tertiary"
              onClick={() => toast.add({ title: t.draftSaved, tone: "info" })}
            >
              {form.saveDraft}
            </Button>
          </div>
          {isReview ? (
            <Button type="submit" size="lg" iconEnd={<Send />}>
              {form.submit}
            </Button>
          ) : (
            <Button type="submit" size="lg" iconEnd={<ArrowForward />}>
              {form.next}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
