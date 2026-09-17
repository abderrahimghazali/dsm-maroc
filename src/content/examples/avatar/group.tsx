import { Avatar, AvatarGroup } from "@/dsm/components/avatar";

export default function AvatarGroupExample() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-ink-muted">Agents affectés au dossier n° 2026-114872</p>
      <AvatarGroup max={4}>
        <Avatar name="Salma Idrissi" src="https://i.pravatar.cc/96?img=5" />
        <Avatar name="Youssef Amrani" />
        <Avatar name="Kenza Bennani" />
        <Avatar name="Hamza El Fassi" />
        <Avatar name="Nadia Chraibi" />
        <Avatar name="Amine Tazi" />
      </AvatarGroup>
    </div>
  );
}
