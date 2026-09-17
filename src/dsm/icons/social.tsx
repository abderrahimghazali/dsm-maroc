import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;

export function SocialX(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M17.6 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4L5 21H1.9l7.3-8.3L1.5 3H8l4.4 5.9L17.6 3Zm-1.1 16.2h1.7L7.2 4.7H5.4l11.1 14.5Z" />
    </svg>
  );
}
export function SocialFacebook(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 21v-7.4h2.5l.4-3h-2.9V8.7c0-.9.3-1.5 1.5-1.5h1.5V4.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.3H8v3h2.6V21h2.9Z" />
    </svg>
  );
}
export function SocialInstagram(props: P) {
  return (
    <svg {...base} {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function SocialYoutube(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}
export function SocialLinkedin(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 8.5H3.6V20h2.9V8.5ZM5 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.4 13c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.5H10.4c0 .8 0 11.5 0 11.5h2.9v-6.4c0-.3 0-.7.1-.9.3-.7.8-1.4 1.8-1.4 1.3 0 1.8 1 1.8 2.4V20h2.9c.5-.5.5-6.8.5-7Z" />
    </svg>
  );
}
