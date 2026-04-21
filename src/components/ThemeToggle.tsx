"use client";

import { useSyncExternalStore } from "react";
import Icon from "./Icon";

const subscribe = (cb: () => void) => {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const getSnapshot = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";
const getServerSnapshot = () => "light" as const;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:text-accent hover:border-accent transition-colors"
      suppressHydrationWarning
    >
      <Icon name={isDark ? "sun" : "moon"} size={16} />
    </button>
  );
}
