import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur-sm px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
    >
      <span
        className="size-1.5 rounded-full transition-colors"
        style={{ background: isDark ? "var(--creator)" : "var(--primary)" }}
      />
      <span>{isDark ? "Save 01 · Dark" : "Save 02 · Light"}</span>
    </button>
  );
}
