"use client";

import { useState } from "react";
import { FollowBlock } from "@/dsm/components/follow";
import { Alert } from "@/dsm/components/alert";
import { SocialFacebook, SocialLinkedin, SocialX, SocialYoutube } from "@/dsm/icons";

export default function FollowInteractive() {
  const [confirmed, setConfirmed] = useState<string | null>(null);

  return (
    <div>
      {confirmed && (
        <div className="dsm-container pt-8">
          <Alert tone="success" title="Inscription confirmée">
            Un e-mail de confirmation a été envoyé à {confirmed}.
          </Alert>
        </div>
      )}
      <FollowBlock
        onSubscribe={(email) => setConfirmed(email)}
        social={[
          { label: "X", href: "#", icon: <SocialX /> },
          { label: "Facebook", href: "#", icon: <SocialFacebook /> },
          { label: "YouTube", href: "#", icon: <SocialYoutube /> },
          { label: "LinkedIn", href: "#", icon: <SocialLinkedin /> },
        ]}
      />
    </div>
  );
}
