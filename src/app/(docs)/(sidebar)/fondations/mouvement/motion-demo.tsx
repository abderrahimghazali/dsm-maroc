"use client";

import { createContext, useContext, useState, type CSSProperties, type ReactNode } from "react";
import { Accordion, AccordionItem } from "@/dsm/components/accordion";
import { Alert } from "@/dsm/components/alert";
import { Button } from "@/dsm/components/button";
import { Card, CardArrow, CardBody, CardMeta, CardText, CardTitle } from "@/dsm/components/card";
import { Switch } from "@/dsm/components/switch";
import { ArrowForward, RefreshCw } from "@/dsm/icons";
import { cn } from "@/dsm/lib/cn";

/* ------------------------------------------------------------------ */
/* Playground: a slow-motion switch that rescales the motion tokens    */
/* for everything rendered inside it.                                  */
/* ------------------------------------------------------------------ */

const SlowMoContext = createContext(1);

export function MotionPlayground({ children }: { children: ReactNode }) {
  const [slow, setSlow] = useState(false);
  const factor = slow ? 6 : 1;
  const vars = {
    "--dsm-duration-fast": `${120 * factor}ms`,
    "--dsm-duration": `${200 * factor}ms`,
    "--dsm-duration-slow": `${360 * factor}ms`,
  } as CSSProperties;

  return (
    <SlowMoContext.Provider value={factor}>
      <div style={vars} className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-line bg-surface px-5 py-4">
          <div>
            <p className="font-semibold">Ralenti ×6</p>
            <p className="text-sm text-ink-muted">
              Multiplie les trois jetons de durée à l&apos;intérieur du terrain de jeu pour observer les courbes à l&apos;œil nu.
            </p>
          </div>
          <Switch checked={slow} onCheckedChange={setSlow} label={slow ? "Ralenti actif" : "Vitesse réelle"} />
        </div>
        {children}
      </div>
    </SlowMoContext.Provider>
  );
}

function ReplayButton({ onClick, label = "Rejouer" }: { onClick: () => void; label?: string }) {
  return (
    <Button variant="secondary" size="sm" iconStart={<RefreshCw />} onClick={onClick}>
      {label}
    </Button>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Durations — the same displacement with the three tokens          */
/* ------------------------------------------------------------------ */

const durations = [
  { label: "fast", ms: 120, cls: "duration-(--dsm-duration-fast)", usage: "survol, focus, appui" },
  { label: "défaut", ms: 200, cls: "duration-(--dsm-duration)", usage: "transitions courantes" },
  { label: "slow", ms: 360, cls: "duration-(--dsm-duration-slow)", usage: "entrées de superposition" },
];

export function DurationRaceDemo() {
  const [run, setRun] = useState(false);
  const [instant, setInstant] = useState(false);
  const factor = useContext(SlowMoContext);

  function replay() {
    setInstant(true);
    setRun(false);
    window.setTimeout(() => {
      setInstant(false);
      setRun(true);
    }, 40);
  }

  return (
    <div className="rounded-lg border border-line bg-surface p-6">
      <div className="space-y-5">
        {durations.map((d) => (
          <div key={d.label} className="grid grid-cols-[7rem_minmax(0,1fr)_7rem] items-center gap-4">
            <div>
              <p className="font-mono text-sm font-semibold">{d.label}</p>
              <p className="font-mono text-xs text-ink-subtle">{d.ms * factor} ms</p>
            </div>
            <div className="@container relative h-12 rounded-md bg-surface-muted">
              <div aria-hidden className="absolute inset-y-0 start-12 end-12 border-x border-dashed border-line-strong" />
              <div
                className={cn(
                  "absolute top-1 h-10 w-10 rounded-md bg-primary shadow-sm ease-dsm",
                  !instant && "transition-transform",
                  d.cls,
                  run ? "start-1 translate-x-[calc(100cqw-3rem)] rtl:-translate-x-[calc(100cqw-3rem)]" : "start-1 translate-x-0",
                )}
              />
            </div>
            <p className="text-xs text-ink-muted">{d.usage}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <ReplayButton onClick={replay} label="Lancer la course" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Easing — curve + a dot travelling with it                         */
/* ------------------------------------------------------------------ */

type Curve = { name: string; token: string; bezier: [number, number, number, number]; note: string };

const curves: Curve[] = [
  { name: "linéaire", token: "linear", bezier: [0, 0, 1, 1], note: "Mécanique, jamais utilisée dans DSM" },
  { name: "ease-dsm", token: "cubic-bezier(0.2, 0.8, 0.2, 1)", bezier: [0.2, 0.8, 0.2, 1], note: "Défaut : départ franc, arrivée posée" },
  { name: "ease-dsm-out", token: "cubic-bezier(0.16, 1, 0.3, 1)", bezier: [0.16, 1, 0.3, 1], note: "Entrées : décélération longue" },
];

function bezierPath([x1, y1, x2, y2]: Curve["bezier"], size = 100) {
  // Cubic Bézier from (0,0) to (1,1) with the given control points, drawn in a size×size box (y flipped).
  return `M0 ${size} C ${x1 * size} ${size - y1 * size}, ${x2 * size} ${size - y2 * size}, ${size} 0`;
}

export function EasingDemo() {
  const [run, setRun] = useState(false);
  const [instant, setInstant] = useState(false);

  function replay() {
    setInstant(true);
    setRun(false);
    window.setTimeout(() => {
      setInstant(false);
      setRun(true);
    }, 40);
  }

  return (
    <div className="rounded-lg border border-line bg-surface p-6">
      <div className="grid gap-6 sm:grid-cols-3">
        {curves.map((c) => (
          <div key={c.name} className="flex flex-col gap-3">
            <div className="rounded-md bg-surface-muted p-4">
              <svg viewBox="-4 -4 108 108" className="w-full text-primary" aria-hidden>
                <path d="M0 100 L100 0" stroke="var(--dsm-line-strong)" strokeDasharray="3 3" fill="none" />
                <path d={bezierPath(c.bezier)} stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="relative h-8 rounded-full bg-surface-muted">
              <div
                className={cn(
                  "absolute top-1 h-6 w-6 rounded-full bg-primary duration-(--dsm-duration-slow)",
                  !instant && "transition-transform",
                  run ? "start-1 translate-x-[calc(100%*var(--track))] rtl:-translate-x-[calc(100%*var(--track))]" : "start-1 translate-x-0",
                )}
                style={{ transitionTimingFunction: c.token, ["--track" as string]: "0" }}
                ref={(el) => {
                  if (!el?.parentElement) return;
                  const w = el.parentElement.clientWidth - el.clientWidth - 8;
                  el.style.setProperty("--track", String(w / el.clientWidth));
                }}
              />
            </div>
            <div>
              <p className="font-mono text-sm font-semibold">{c.name}</p>
              <p className="font-mono text-xs text-ink-subtle">{c.token}</p>
              <p className="mt-1 text-xs text-ink-muted">{c.note}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <ReplayButton onClick={replay} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Enter animations on real components                               */
/* ------------------------------------------------------------------ */

export function EnterDemo({ variant }: { variant: "dsm-in" | "dsm-up" }) {
  const [key, setKey] = useState(0);
  const isIn = variant === "dsm-in";
  return (
    <div className="rounded-lg border border-line bg-surface p-6">
      <div className="flex min-h-36 items-center justify-center rounded-md bg-surface-muted p-4">
        {isIn ? (
          <div
            key={key}
            className="animate-dsm-in w-64 rounded-lg border border-line bg-surface p-4 shadow-lg"
            style={{ animationDuration: "var(--dsm-duration)" }}
          >
            <p className="text-sm font-semibold">Dossier n° 2026-114872</p>
            <p className="mt-1 text-xs text-ink-muted">Renouvellement de passeport en cours d&apos;instruction.</p>
          </div>
        ) : (
          <div key={key} className="animate-dsm-up w-full max-w-sm" style={{ animationDuration: "var(--dsm-duration-slow)" }}>
            <Alert tone="success" title="Demande transmise" size="sm">
              Vous recevrez une confirmation par e-mail.
            </Alert>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-sm font-semibold">animate-{variant}</p>
          <p className="text-xs text-ink-muted">
            {isIn ? "Fondu + échelle 0,98 → 1 — popovers, menus, dialogues." : "Fondu + montée de 8px — alertes, cartes, sections."}
          </p>
        </div>
        <ReplayButton onClick={() => setKey((k) => k + 1)} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Micro-interactions already in the components                     */
/* ------------------------------------------------------------------ */

export function InteractionDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-line bg-surface p-6">
        <Button iconEnd={<ArrowForward />}>Déposer la demande</Button>
        <p className="text-center text-xs text-ink-muted">Survol : fond · Appui : translation d&apos;1px (fast)</p>
      </div>
      <Card interactive>
        <CardBody className="gap-2 p-5">
          <CardMeta>Carte interactive</CardMeta>
          <CardTitle href="#interactions" className="text-base">
            Survolez cette carte
          </CardTitle>
          <CardText>Élévation progressive et flèche qui glisse dans le sens de lecture.</CardText>
          <CardArrow className="pt-1" />
        </CardBody>
      </Card>
      <div className="rounded-lg border border-line bg-surface px-5 py-2">
        <Accordion>
          <AccordionItem value="a" title="Accordéon">
            <p className="text-sm text-ink-muted">Le panneau se déplie sur la durée par défaut (200 ms), jamais plus.</p>
          </AccordionItem>
          <AccordionItem value="b" title="Deuxième élément">
            <p className="text-sm text-ink-muted">La fermeture suit la même courbe, en sens inverse.</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
