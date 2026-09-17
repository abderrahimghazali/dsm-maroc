import { Avatar } from "@/dsm/components/avatar";

export default function AvatarWithImage() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar size="lg" name="Amine Tazi" src="https://i.pravatar.cc/96?img=12" />
      <Avatar size="lg" name="Rania Sabir" src="/introuvable.jpg" />
      <Avatar size="lg" shape="square" name="Karim Ouahbi" src="https://i.pravatar.cc/96?img=33" />
    </div>
  );
}
