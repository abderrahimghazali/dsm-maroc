import { Alert } from "@/dsm/components/alert";

export default function AlertSmall() {
  return (
    <Alert tone="warning" size="sm">
      Votre session expire dans 5 minutes.
    </Alert>
  );
}
