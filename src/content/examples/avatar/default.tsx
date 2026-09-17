import { Avatar } from "@/dsm/components/avatar";

export default function AvatarDefault() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar size="xs" name="Salma Idrissi" />
      <Avatar size="sm" name="Youssef Amrani" />
      <Avatar size="md" name="Kenza Bennani" />
      <Avatar size="lg" name="Hamza El Fassi" />
      <Avatar size="xl" name="Nadia Chraibi" />
    </div>
  );
}
