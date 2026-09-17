// End-to-end checks for the dsm-maroc CLI against a throwaway project (no network, no package manager).
import { test, before } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const cli = dirname(dirname(fileURLToPath(import.meta.url)));
const bin = join(cli, "bin", "dsm-maroc.js");
const run = (args, cwd) => execFileSync("node", [bin, ...args, `--cwd=${cwd}`, "--yes", "--no-install"], { encoding: "utf8" });

function scaffold(withGlobals = true) {
  const dir = mkdtempSync(join(tmpdir(), "dsm-cli-"));
  mkdirSync(join(dir, "src", "app"), { recursive: true });
  writeFileSync(join(dir, "package.json"), JSON.stringify({ name: "host", dependencies: { next: "16.0.0", react: "19.0.0" }, devDependencies: { tailwindcss: "4.0.0" } }));
  writeFileSync(join(dir, "tsconfig.json"), JSON.stringify({ compilerOptions: { paths: { "@/*": ["./src/*"] } } }));
  if (withGlobals) writeFileSync(join(dir, "src/app/globals.css"), '@import "tailwindcss";\n\n:root { --brand: red; }\n');
  return dir;
}

before(() => {
  execFileSync("node", [join(cli, "scripts", "sync.mjs")], { stdio: "ignore" });
});

test("init copies the system, injects dsm.css and keeps the host palette", () => {
  const dir = scaffold();
  const out = run(["init"], dir);
  assert.match(out, /files written/);
  for (const f of ["src/dsm/components/button.tsx", "src/dsm/lib/cn.ts", "src/dsm/i18n/provider.tsx", "src/app/dsm.css", "src/app/fonts.ts", "public/patterns/khatam.svg"]) {
    assert.ok(existsSync(join(dir, f)), `${f} should exist`);
  }
  const globals = readFileSync(join(dir, "src/app/globals.css"), "utf8");
  assert.equal(globals.split('@import "./dsm.css";').length, 2, "dsm.css imported exactly once");
  assert.ok(globals.indexOf('@import "tailwindcss";') < globals.indexOf('@import "./dsm.css";'), "tailwind import comes first");
  assert.match(globals, /--brand: red/, "host css preserved");
  const dsm = readFileSync(join(dir, "src/app/dsm.css"), "utf8");
  assert.doesNotMatch(dsm, /^\s*--color-\*: initial;/m, "host Tailwind palette must not be reset");
  assert.match(dsm, /@theme inline/);
  assert.match(dsm, /@utility dsm-filet/);
});

test("init is idempotent and never overwrites without --overwrite", () => {
  const dir = scaffold();
  run(["init"], dir);
  const button = join(dir, "src/dsm/components/button.tsx");
  writeFileSync(button, "// customised\n");
  const out = run(["init"], dir);
  assert.match(out, /left untouched/);
  assert.equal(readFileSync(button, "utf8"), "// customised\n");
  assert.equal(readFileSync(join(dir, "src/app/globals.css"), "utf8").split('@import "./dsm.css";').length, 2);
});

test("init creates globals.css when the host has none", () => {
  const dir = scaffold(false);
  run(["init"], dir);
  assert.match(readFileSync(join(dir, "src/app/globals.css"), "utf8"), /@import "tailwindcss";\n@import "\.\/dsm\.css";/);
});

test("add copies a component with only what it imports", () => {
  const dir = scaffold();
  run(["add", "stepper"], dir);
  for (const f of ["src/dsm/components/stepper.tsx", "src/dsm/i18n/index.ts", "src/dsm/i18n/provider.tsx", "src/dsm/icons/index.tsx", "src/dsm/lib/cn.ts"]) {
    assert.ok(existsSync(join(dir, f)), `${f} should exist`);
  }
  assert.ok(!existsSync(join(dir, "src/dsm/components/button.tsx")), "unrelated components are not copied");
});

test("add rejects unknown components", () => {
  const dir = scaffold();
  let failure;
  try {
    run(["add", "nope"], dir);
  } catch (err) {
    failure = err;
  }
  assert.ok(failure, "the command should exit with an error");
  assert.equal(failure.status, 1);
  assert.match(String(failure.stdout), /Unknown component/);
});

test("list prints every component", () => {
  const out = execFileSync("node", [bin, "list"], { encoding: "utf8", env: { ...process.env, NO_COLOR: "1" } });
  assert.match(out, /DSM components \(\d+\)/);
  assert.match(out, /\bbutton\b/);
});
