import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = "DSM — Système de Design du Maroc";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Full font files on purpose: satori crashes when several Google "text=" subsets are combined.
async function loadGoogleFont(family: string) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}`)).text();
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`No font file for ${family}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Font download failed for ${family}`);
  return res.arrayBuffer();
}

// satori lays words out in logical order, so an RTL phrase is written word-reversed to read correctly.
const arabicWords = ["المغربي", "التصميم", "نظام"];
const tifinagh = "ⴰⵏⴰⴳⵔⴰⵡ ⵏ ⵓⵙⴳⴳⴰ ⴰⵎⵖⵔⵉⴱⵉ";

export default async function OpenGraphImage() {
  const fonts: { name: string; data: ArrayBuffer; weight: 400 | 600 }[] = [];
  let scripts = true;
  try {
    const [sans, sansBold, ar, zgh] = await Promise.all([
      loadGoogleFont("IBM Plex Sans:wght@400"),
      loadGoogleFont("IBM Plex Sans:wght@600"),
      loadGoogleFont("IBM Plex Sans Arabic:wght@600"),
      loadGoogleFont("Noto Sans Tifinagh"),
    ]);
    fonts.push(
      { name: "Plex", data: sans, weight: 400 },
      { name: "Plex", data: sansBold, weight: 600 },
      { name: "PlexArabic", data: ar, weight: 600 },
      { name: "Tifinagh", data: zgh, weight: 400 },
    );
  } catch {
    scripts = false; // fall back to the built-in Latin font only
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FBF8F3",
          color: "#1A1714",
          fontFamily: "Plex, sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", height: 14, width: "100%" }}>
          <div style={{ width: 300, background: "#0B6B3F" }} />
          <div style={{ flex: 1, background: "#B5202C" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "64px 80px 0", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <svg width="96" height="96" viewBox="0 0 48 48">
              <rect width="48" height="48" rx="4" fill="#B5202C" />
              <path d="M24 9 L32.82 36.14 L9.73 19.36 L38.27 19.36 L15.18 36.14 Z" fill="none" stroke="#0B6B3F" strokeWidth="2.4" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {scripts && (
                <div style={{ display: "flex", gap: 6, fontFamily: "PlexArabic", fontSize: 30, fontWeight: 600 }}>
                  {arabicWords.map((w) => (
                    <span key={w}>{w}</span>
                  ))}
                </div>
              )}
              {scripts && <div style={{ fontFamily: "Tifinagh", fontSize: 22, letterSpacing: 2, opacity: 0.8 }}>{tifinagh}</div>}
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", marginTop: 4 }}>DSM</div>
            </div>
          </div>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05, marginTop: 56 }}>
            Système de Design du Maroc
          </div>
          <div style={{ fontSize: 30, color: "#5C554D", marginTop: 24, lineHeight: 1.35, maxWidth: 980 }}>
            Composants, fondations et modèles pour les services publics numériques
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 80px 44px", fontSize: 24, color: "#8A8177" }}>
          <div>{siteConfig.url.replace(/^https?:\/\//, "")}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: "#0B6B3F" }} />
            {scripts && <span style={{ fontFamily: "PlexArabic" }}>العربية</span>}
            {scripts && <span>·</span>}
            {scripts && <span style={{ fontFamily: "Tifinagh" }}>ⵜⴰⵎⴰⵣⵉⵖⵜ</span>}
            {scripts && <span>·</span>}
            <span>Français</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
