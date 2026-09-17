"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { Menu } from "@base-ui/react/menu";
import { cn } from "@/dsm/lib/cn";
import { Check, Monitor, Moon, Sun } from "@/dsm/icons";
import { useT } from "@/dsm/i18n/provider";
import { menuPopupClass, menuItemClass, menuPositionerClass } from "./menu-styles";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "dsm-theme";

type ThemeContextValue = { theme: Theme; resolved: "light" | "dark"; setTheme: (t: Theme) => void };

const ThemeContext = createContext<ThemeContextValue>({ theme: "system", resolved: "light", setTheme: () => {} });

/** Inline script that sets data-theme before paint (no flash). */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}")||"system";var d=t==="dark"||(t==="system"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light")}catch(e){}})();`;

/* Tiny external store: localStorage preference + system preference. */
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

function readTheme(): Theme {
  try {
    return (localStorage.getItem(STORAGE_KEY) as Theme) || "system";
  } catch {
    return "system";
  }
}
function readSystemDark() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    mq.removeEventListener("change", cb);
    window.removeEventListener("storage", cb);
  };
}

export type ThemeProviderProps = {
  children: ReactNode;
  /**
   * Controlled theme. When set, the provider no longer touches <html> or localStorage:
   * use it to scope a theme to a sub-tree (previews, embedded demos).
   */
  theme?: Theme;
  onThemeChange?: (theme: Theme) => void;
};

export function ThemeProvider({ children, theme: controlled, onThemeChange }: ThemeProviderProps) {
  const stored = useSyncExternalStore(subscribe, readTheme, () => "system" as Theme);
  const systemDark = useSyncExternalStore(subscribe, readSystemDark, () => false);
  const theme = controlled ?? stored;
  const resolved: "light" | "dark" = theme === "dark" || (theme === "system" && systemDark) ? "dark" : "light";
  const isControlled = controlled !== undefined;

  useEffect(() => {
    if (isControlled) return;
    document.documentElement.setAttribute("data-theme", resolved);
  }, [resolved, isControlled]);

  const setTheme = useCallback(
    (t: Theme) => {
      if (isControlled) {
        onThemeChange?.(t);
        return;
      }
      try {
        localStorage.setItem(STORAGE_KEY, t);
      } catch {}
      notify();
    },
    [isControlled, onThemeChange],
  );

  return <ThemeContext.Provider value={{ theme, resolved, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, resolved, setTheme } = useTheme();
  const t = useT();
  const options: { value: Theme; label: string; icon: typeof Sun }[] = [
    { value: "light", label: t.themeLight, icon: Sun },
    { value: "dark", label: t.themeDark, icon: Moon },
    { value: "system", label: t.themeSystem, icon: Monitor },
  ];
  const Current = resolved === "dark" ? Moon : Sun;
  return (
    <Menu.Root>
      <Menu.Trigger
        aria-label={t.theme}
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink data-popup-open:bg-surface-muted data-popup-open:text-ink",
          className,
        )}
      >
        <Current className="size-[18px]" aria-hidden />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className={menuPositionerClass} sideOffset={6} align="end">
          <Menu.Popup className={menuPopupClass}>
            {options.map(({ value, label, icon: Icon }) => (
              <Menu.Item key={value} className={menuItemClass} onClick={() => setTheme(value)}>
                <Icon className="size-4 text-ink-muted" aria-hidden />
                <span className="flex-1">{label}</span>
                {theme === value && <Check className="size-4 text-primary" aria-hidden />}
              </Menu.Item>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
