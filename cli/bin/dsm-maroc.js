#!/usr/bin/env node
// dsm-maroc — installs DSM (Système de Design du Maroc) into a Next.js + Tailwind v4 project.
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { createInterface } from "node:readline/promises";

const here = dirname(fileURLToPath(import.meta.url));
const templates = join(here, "..", "templates");
const pkg = JSON.parse(readFileSync(join(here, "..", "package.json"), "utf8"));
const tty = process.stdout.isTTY && !process.env.NO_COLOR;
const c = {
  bold: (s) => (tty ? `\x1b[1m${s}\x1b[22m` : s),
  dim: (s) => (tty ? `\x1b[2m${s}\x1b[22m` : s),
  green: (s) => (tty ? `\x1b[32m${s}\x1b[39m` : s),
  red: (s) => (tty ? `\x1b[31m${s}\x1b[39m` : s),
  yellow: (s) => (tty ? `\x1b[33m${s}\x1b[39m` : s),
  cyan: (s) => (tty ? `\x1b[36m${s}\x1b[39m` : s),
};
const log = (s = "") => console.log(s);
const ok = (s) => log(`${c.green("✔")} ${s}`);
const warn = (s) => log(`${c.yellow("!")} ${s}`);
const fail = (s) => {
  log(`${c.red("✖")} ${s}`);
  process.exit(1);
};

// ---------------------------------------------------------------- arguments
const argv = process.argv.slice(2);
const flags = new Set(argv.filter((a) => a.startsWith("-")));
const positional = argv.filter((a) => !a.startsWith("-"));
const command = positional[0];
const cwdFlag = argv.find((a) => a.startsWith("--cwd="))?.slice(6);
const cwd = resolve(cwdFlag ?? process.cwd());
const yes = flags.has("--yes") || flags.has("-y");
const overwrite = flags.has("--overwrite");

const help = `
${c.bold("dsm-maroc")} ${c.dim(`v${pkg.version}`)} — Système de Design du Maroc

${c.bold("Usage")}
  npx dsm-maroc@latest init            install foundations, components, fonts and patterns
  npx dsm-maroc@latest add <name...>   add one or more components (and what they import)
  npx dsm-maroc@latest add --all       add every component
  npx dsm-maroc@latest list            list available components

${c.bold("Options")}
  --yes, -y        skip the confirmation prompt
  --no-install     do not run the package manager
  --overwrite      replace files that already exist
  --cwd=<dir>      run in another directory

${c.bold("Docs")}  https://dsm-maroc.vercel.app/prise-en-main/installation
`;

if (flags.has("--version") || flags.has("-v")) {
  log(pkg.version);
  process.exit(0);
}
if (!command || flags.has("--help") || flags.has("-h")) {
  log(help);
  process.exit(0);
}
if (!existsSync(templates)) fail("Package is missing its templates. Reinstall dsm-maroc.");

const manifest = JSON.parse(readFileSync(join(templates, "manifest.json"), "utf8"));

// ---------------------------------------------------------------- project
function detectProject() {
  const pkgPath = join(cwd, "package.json");
  if (!existsSync(pkgPath)) fail(`No package.json in ${cwd}. Run this inside a Next.js project.`);
  const project = JSON.parse(readFileSync(pkgPath, "utf8"));
  const deps = { ...project.dependencies, ...project.devDependencies };
  const src = existsSync(join(cwd, "src", "app")) ? "src" : existsSync(join(cwd, "app")) ? "" : null;
  if (src === null) fail("No app/ directory found. DSM targets the Next.js App Router.");
  const base = src ? join(cwd, src) : cwd;
  const pm = existsSync(join(cwd, "pnpm-lock.yaml"))
    ? "pnpm"
    : existsSync(join(cwd, "yarn.lock"))
      ? "yarn"
      : existsSync(join(cwd, "bun.lockb")) || existsSync(join(cwd, "bun.lock"))
        ? "bun"
        : "npm";
  return { project, deps, src, base, pm };
}

function checkAliases(src) {
  for (const file of ["tsconfig.json", "jsconfig.json"]) {
    const p = join(cwd, file);
    if (!existsSync(p)) continue;
    const text = readFileSync(p, "utf8");
    const expected = src ? "./src/*" : "./*";
    if (text.includes('"@/*"') && text.includes(expected)) return true;
    warn(`${file}: DSM imports use "@/dsm/…". Make sure "paths" maps "@/*" to "${expected}".`);
    return false;
  }
  warn('No tsconfig.json found. DSM imports use "@/dsm/…"; add a "@/*" path alias.');
  return false;
}

// ---------------------------------------------------------------- files
function copyFile(from, to, stats) {
  if (existsSync(to) && !overwrite) {
    stats.skipped.push(to);
    return;
  }
  mkdirSync(dirname(to), { recursive: true });
  cpSync(from, to);
  stats.written.push(to);
}

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function copyTree(fromDir, toDir, stats) {
  for (const file of walk(fromDir)) copyFile(file, join(toDir, relative(fromDir, file)), stats);
}

function summarize(stats) {
  ok(`${stats.written.length} file${stats.written.length === 1 ? "" : "s"} written`);
  if (stats.skipped.length) warn(`${stats.skipped.length} existing file${stats.skipped.length === 1 ? "" : "s"} left untouched (use --overwrite to replace)`);
}

function injectCss(base, stats) {
  const appDir = join(base, "app");
  const globals = walk(appDir).find((f) => /globals\.css$/.test(f)) ?? join(appDir, "globals.css");
  const target = join(dirname(globals), "dsm.css");
  copyFile(join(templates, "dsm.css"), target, stats);
  if (!existsSync(globals)) {
    writeFileSync(globals, `@import "tailwindcss";\n@import "./dsm.css";\n`);
    stats.written.push(globals);
    return;
  }
  const css = readFileSync(globals, "utf8");
  if (css.includes('"./dsm.css"')) return;
  const line = '@import "tailwindcss";';
  const next = css.includes(line) ? css.replace(line, `${line}\n@import "./dsm.css";`) : `@import "./dsm.css";\n${css}`;
  writeFileSync(globals, next);
  ok(`${relative(cwd, globals)}: added @import "./dsm.css"`);
}

function install(pm, deps) {
  const missing = Object.entries(deps).filter(([name]) => !existsSync(join(cwd, "node_modules", name)));
  if (!missing.length) return ok("Dependencies already installed");
  const specs = missing.map(([n, v]) => `${n}@${v}`);
  if (flags.has("--no-install")) return warn(`Install these yourself: ${specs.join(" ")}`);
  const args = pm === "npm" ? ["install", ...specs] : ["add", ...specs];
  log(`${c.dim("›")} ${pm} ${args.join(" ")}`);
  const r = spawnSync(pm, args, { cwd, stdio: "inherit", shell: process.platform === "win32" });
  if (r.status !== 0) fail(`${pm} exited with code ${r.status}`);
  ok("Dependencies installed");
}

async function confirm(question) {
  if (yes || !process.stdin.isTTY) return true;
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = (await rl.question(`${question} ${c.dim("(Y/n)")} `)).trim().toLowerCase();
  rl.close();
  return answer === "" || answer === "y" || answer === "yes";
}

// Resolve the internal imports of a component so `add` copies what it needs.
function resolveComponent(name, seen = new Set()) {
  const rel = `dsm/components/${name}`;
  const file = ["tsx", "ts"].map((ext) => join(templates, `${rel}.${ext}`)).find(existsSync);
  if (!file) fail(`Unknown component "${name}". Run: npx dsm-maroc list`);
  const key = relative(templates, file);
  if (seen.has(key)) return seen;
  seen.add(key);
  const source = readFileSync(file, "utf8");
  for (const m of source.matchAll(/from\s+"(\.\/[^"]+|@\/dsm\/[^"]+)"/g)) {
    const spec = m[1];
    if (spec.startsWith("./")) resolveComponent(spec.slice(2), seen);
    else {
      const sub = spec.replace("@/dsm/", "dsm/"); // lib/cn, icons, i18n, i18n/provider …
      const candidates = [`${sub}.ts`, `${sub}.tsx`, `${sub}/index.ts`, `${sub}/index.tsx`].map((p) => join(templates, p));
      const hit = candidates.find(existsSync);
      if (hit) {
        const k = relative(templates, hit);
        if (!seen.has(k)) {
          seen.add(k);
          // icons/i18n pull in siblings (social icons, dictionaries): copy their whole folder
          const dir = dirname(hit);
          if (dir !== join(templates, "dsm")) for (const f of walk(dir)) seen.add(relative(templates, f));
        }
      }
    }
  }
  return seen;
}

// ---------------------------------------------------------------- commands
async function init() {
  const { deps, src, base, pm } = detectProject();
  log(`\n${c.bold("DSM — Système de Design du Maroc")} ${c.dim(`v${manifest.version}`)}\n`);
  if (!deps.next) warn("next is not a dependency of this project; DSM is built for Next.js 16 (App Router).");
  if (!deps.tailwindcss) warn("tailwindcss is not installed; DSM needs Tailwind CSS v4.");
  checkAliases(src);
  log(`  ${c.dim("target")}    ${relative(cwd, join(base, "dsm")) || "dsm"}/  ${c.dim("+")} ${src ? "src/" : ""}app/dsm.css, ${src ? "src/" : ""}app/fonts.ts, public/patterns/`);
  log(`  ${c.dim("deps")}      ${Object.keys(manifest.dependencies).join(", ")}  ${c.dim(`via ${pm}`)}\n`);
  if (!(await confirm("Install DSM into this project?"))) return log("Aborted.");

  const stats = { written: [], skipped: [] };
  copyTree(join(templates, "dsm"), join(base, "dsm"), stats);
  copyFile(join(templates, "fonts.ts"), join(base, "app", "fonts.ts"), stats);
  copyTree(join(templates, "public"), join(cwd, "public"), stats);
  injectCss(base, stats);
  summarize(stats);
  install(pm, manifest.dependencies);

  log(`
${c.bold("Next step")} — wire the providers and fonts in ${c.cyan(`${src ? "src/" : ""}app/layout.tsx`)}:

  ${c.dim('import Script from "next/script";')}
  ${c.dim('import { fontVariables } from "./fonts";')}
  ${c.dim('import { ThemeProvider, themeInitScript } from "@/dsm/components/theme";')}
  ${c.dim('import { LocaleProvider } from "@/dsm/i18n/provider";')}

  ${c.dim('<html lang="fr" dir="ltr" className={fontVariables} suppressHydrationWarning>')}
  ${c.dim('  <head><Script id="dsm-theme-init" strategy="beforeInteractive">{themeInitScript}</Script></head>')}
  ${c.dim("  <body>")}
  ${c.dim('    <ThemeProvider><LocaleProvider locale="fr">{children}</LocaleProvider></ThemeProvider>')}
  ${c.dim("  </body>")}
  ${c.dim("</html>")}

Then: ${c.cyan('import { Button } from "@/dsm/components/button";')}
Docs:  https://dsm-maroc.vercel.app
`);
}

async function add() {
  const { base, pm } = detectProject();
  const names = flags.has("--all") ? manifest.components.map((m) => m.name) : positional.slice(1);
  if (!names.length) fail("Nothing to add. Usage: npx dsm-maroc add button card");
  const files = new Set();
  for (const n of names) resolveComponent(n, files);
  const stats = { written: [], skipped: [] };
  for (const f of files) copyFile(join(templates, f), join(base, f), stats);
  summarize(stats);
  const globals = walk(join(base, "app")).find((f) => /globals\.css$/.test(f));
  if (!globals || !readFileSync(globals, "utf8").includes("dsm.css")) warn("Foundations not found. Run: npx dsm-maroc init");
  install(pm, manifest.dependencies);
}

function list() {
  log(`\n${c.bold("DSM components")} ${c.dim(`(${manifest.components.length})`)}\n`);
  const w = Math.max(...manifest.components.map((m) => m.name.length));
  for (const m of manifest.components) {
    const desc = m.description ? (m.description.length > 72 ? `${m.description.slice(0, 71).trimEnd()}…` : m.description) : "";
    log(`  ${c.cyan(m.name.padEnd(w))}  ${m.title ?? ""}${desc ? c.dim(` — ${desc}`) : ""}`);
  }
  log(`\nAdd one:  ${c.dim("npx dsm-maroc@latest add button")}\n`);
}

const commands = { init, add, list };
if (!commands[command]) fail(`Unknown command "${command}".\n${help}`);
await commands[command]();
