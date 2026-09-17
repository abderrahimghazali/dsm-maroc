import { DateInput } from "@/dsm/components/date-input";

export default function DateInputDefault() {
  return (
    <div className="mx-auto max-w-sm">
      <DateInput label="Date de naissance" name="naissance" required />
    </div>
  );
}
