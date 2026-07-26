"use client";

import { useSyncExternalStore } from "react";
import Icon from "./Icon";

const subscribe = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};

const getSnapshot = () => document.documentElement.classList.contains("dark") ? "dark" : "light";
const getServerSnapshot = () => "light" as const;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <button type="button" onClick={toggle} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} className="theme-switch" suppressHydrationWarning>
      <Icon name={isDark ? "sun" : "moon"} size={15} />
    </button>
  );
}
