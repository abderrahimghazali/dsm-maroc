"use client";

import { useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";
import { ConsentBanner } from "@/dsm/components/consent-banner";

const KEY = "dsm-demo-consent";
const EVENT = "dsm-demo-consent";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(EVENT, cb);
  };
}

function remember(choice: "accepted" | "refused") {
  try {
    localStorage.setItem(KEY, choice);
  } catch {
    /* storage unavailable: the banner simply closes for this page view */
  }
  window.dispatchEvent(new Event(EVENT));
}

/** Demo only: shows the consent banner until a choice is stored in this browser. Nothing is sent anywhere. */
export function DemoConsent({ cookiesHref }: { cookiesHref: string }) {
  const router = useRouter();
  const choice = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return localStorage.getItem(KEY) ?? "";
      } catch {
        return "";
      }
    },
    () => "pending", // server render: no banner until the client knows the stored choice
  );
  if (choice !== "") return null;
  return (
    <ConsentBanner
      onAccept={() => remember("accepted")}
      onRefuse={() => remember("refused")}
      onCustomise={() => {
        remember("refused");
        router.push(cookiesHref);
      }}
    />
  );
}
