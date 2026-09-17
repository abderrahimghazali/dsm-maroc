import { LanguageSwitcher } from "@/dsm/components/language-switcher";

export default function LanguageSwitcherRestricted() {
  return <LanguageSwitcher available={["fr", "ar"]} links={{ fr: "#fr", ar: "#ar" }} />;
}
