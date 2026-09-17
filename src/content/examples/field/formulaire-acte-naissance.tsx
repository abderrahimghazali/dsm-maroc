"use client";

import { useState } from "react";
import { Field, Fieldset } from "@/dsm/components/field";
import { Input } from "@/dsm/components/input";
import { Select } from "@/dsm/components/select";
import { RadioGroup } from "@/dsm/components/radio";
import { Checkbox } from "@/dsm/components/checkbox";
import { DateInput } from "@/dsm/components/date-input";
import { FileUpload } from "@/dsm/components/file-upload";
import { Button, ButtonGroup } from "@/dsm/components/button";

export default function FormulaireActeNaissance() {
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mx-auto flex max-w-xl flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <Field label="Nom et prénom" hint="Tels qu'inscrits sur votre carte d'identité nationale." required>
        <Input placeholder="Ex : Fatima-Ezzahra El Amrani" />
      </Field>

      <Field label="Type d'acte demandé" required>
        <Select
          placeholder="Choisir un type d'acte"
          options={[
            { value: "copie-integrale", label: "Copie intégrale" },
            { value: "extrait-filiation", label: "Extrait avec filiation" },
            { value: "extrait-sans-filiation", label: "Extrait sans filiation" },
          ]}
        />
      </Field>

      <DateInput label="Date de naissance" name="naissance" value={date} onChange={setDate} required />

      <Field label="Commune de naissance" required>
        <Select
          placeholder="Choisir une commune"
          groups={[
            { label: "Région Rabat-Salé-Kénitra", options: [
              { value: "rabat", label: "Rabat" },
              { value: "sale", label: "Salé" },
              { value: "kenitra", label: "Kénitra" },
            ] },
            { label: "Région Casablanca-Settat", options: [
              { value: "casablanca", label: "Casablanca" },
              { value: "mohammedia", label: "Mohammédia" },
              { value: "settat", label: "Settat" },
            ] },
          ]}
        />
      </Field>

      <RadioGroup
        legend="Mode de retrait"
        variant="card"
        orientation="row"
        name="retrait"
        defaultValue="guichet"
        options={[
          { value: "guichet", label: "Retrait au guichet", hint: "Disponible sous 48h à la commune choisie." },
          { value: "postal", label: "Envoi postal", hint: "Compter 5 à 7 jours ouvrés, frais d'envoi inclus." },
        ]}
      />

      <Fieldset legend="Pièces justificatives">
        <FileUpload label="Copie de la CNIE du demandeur" accept=".pdf,.jpg,.jpeg,.png" maxSizeMb={5} />
      </Fieldset>

      <Checkbox
        label="Je certifie sur l'honneur l'exactitude des informations fournies."
        hint="Toute fausse déclaration est passible de poursuites conformément à la loi."
      />

      <ButtonGroup>
        <Button type="submit">Envoyer la demande</Button>
        <Button type="reset" variant="secondary" onClick={() => setSubmitted(false)}>
          Réinitialiser
        </Button>
      </ButtonGroup>

      {submitted && (
        <p role="status" className="text-sm font-medium text-success">
          Votre demande a été enregistrée. Un accusé de réception vous sera envoyé par e-mail.
        </p>
      )}
    </form>
  );
}
