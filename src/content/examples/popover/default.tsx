import { Popover } from "@/dsm/components/popover";
import { CircleHelp } from "@/dsm/icons";

export default function PopoverDefault() {
  return (
    <Popover
      trigger={
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-link underline decoration-1 underline-offset-4 hover:text-link-hover"
        >
          <CircleHelp className="size-4" aria-hidden />
          Comment le savoir ?
        </button>
      }
      description="Les sites officiels utilisent le domaine gov.ma et une connexion sécurisée (https). Ne partagez vos informations que sur des sites officiels."
    />
  );
}
