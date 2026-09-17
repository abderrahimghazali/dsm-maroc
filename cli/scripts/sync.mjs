// Copies the design-system sources from the docs app into cli/templates so the
// published package carries an exact snapshot of src/dsm, the CSS foundations,
// the fonts file and the pattern assets.
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const cli = dirname(dirname(fileURLToPath(import.meta.url)));
const root = dirname(cli);
const out = join(cli, "templates");
rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, "public", "patterns"), { recursive: true });

cpSync(join(root, "src/dsm"), join(out, "dsm"), { recursive: true });
cpSync(join(root, "src/app/fonts.ts"), join(out, "fonts.ts"));
cpSync(join(root, "public/patterns"), join(out, "public/patterns"), { recursive: true });

// dsm.css = globals.css minus the Tailwind import (the host app has it) and the docs-only shiki styles.
const css = readFileSync(join(root, "src/app/globals.css"), "utf8");
const start = css.indexOf("@custom-variant");
const end = css.indexOf("/* Shiki dual themes */");
writeFileSync(
  join(out, "dsm.css"),
  `/* DSM — Système de Design du Maroc — foundations.\n   Import this file right after \`@import "tailwindcss";\` in your globals.css. */\n\n` +
    css
      .slice(start, end === -1 ? undefined : end)
      // The docs app resets Tailwind's palette to enforce tokens-only colours; an adopting app keeps its own.
      .replace(/^\s*--color-\*: initial;\s*\n/m, "  /* Add `--color-*: initial;` here to disallow Tailwind's default palette (tokens-only mode). */\n")
      .trimEnd() +
    "\n",
);

// Manifest: pinned dependency ranges + component titles from the docs examples.
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const runtimeDeps = ["@base-ui/react", "class-variance-authority", "clsx", "tailwind-merge", "lucide-react"];
const dependencies = Object.fromEntries(runtimeDeps.map((d) => [d, pkg.dependencies[d]]));

const metaBySlug = {};
for (const slug of readdirSync(join(root, "src/content/examples"))) {
  try {
    const meta = readFileSync(join(root, "src/content/examples", slug, "meta.ts"), "utf8");
    const title = meta.match(/^\s*title:\s*"([^"]+)"/m)?.[1];
    const description = meta.match(/^\s*description:\s*"([^"]+)"/m)?.[1];
    if (title) metaBySlug[slug] = { title, description };
  } catch {}
}
const alias = { theme: "theme-toggle" };
const components = readdirSync(join(root, "src/dsm/components"))
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/, ""))
  .sort()
  .map((name) => ({ name, ...(metaBySlug[alias[name] ?? name] ?? {}) }));

writeFileSync(join(out, "manifest.json"), JSON.stringify({ version: pkg.version, dependencies, components }, null, 2) + "\n");
console.log(`dsm-maroc: synced ${components.length} components, dsm.css, fonts.ts and ${readdirSync(join(out, "public/patterns")).length} patterns`);
