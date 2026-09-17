import { FollowBlock } from "@/dsm/components/follow";
import { SocialFacebook, SocialInstagram, SocialLinkedin, SocialX, SocialYoutube } from "@/dsm/icons";

export default function FollowDefault() {
  return (
    <FollowBlock
      social={[
        { label: "X", href: "#", icon: <SocialX /> },
        { label: "Facebook", href: "#", icon: <SocialFacebook /> },
        { label: "Instagram", href: "#", icon: <SocialInstagram /> },
        { label: "YouTube", href: "#", icon: <SocialYoutube /> },
        { label: "LinkedIn", href: "#", icon: <SocialLinkedin /> },
      ]}
    />
  );
}
