import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  Noto_Sans_Tifinagh,
} from "next/font/google";

// Latin — IBM Plex Sans (variable)
export const plex = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex",
  display: "swap",
});

// Arabic — IBM Plex Sans Arabic, drawn to sit with Plex Sans
export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

// Tifinagh — Noto Sans Tifinagh (Tamazight)
export const tifinagh = Noto_Sans_Tifinagh({
  subsets: ["tifinagh"],
  weight: "400",
  variable: "--font-tifinagh",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const fontVariables = [
  plex.variable,
  plexArabic.variable,
  tifinagh.variable,
  plexMono.variable,
].join(" ");
