import Link from "next/link";
import { Button } from "@/dsm/components/button";
import { ArrowOutward } from "@/dsm/icons";

export default function ButtonAsLink() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button render={<Link href="/demarches/cnie" />}>Renouveler ma CNIE</Button>
      <Button variant="secondary" iconEnd={<ArrowOutward />} render={<a href="https://www.idarati.ma" target="_blank" rel="noopener noreferrer" />}>
        Voir sur idarati.ma
      </Button>
    </div>
  );
}
