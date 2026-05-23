import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex items-center gap-0.5 rounded-md border border-border bg-card/70 p-0.5 backdrop-blur-sm font-mono shadow-[2px_2px_0_color-mix(in_oklab,var(--foreground)_8%,transparent)]"
    >
      <SlotButton
        slot="01"
        label="Dark"
        icon={<Moon className="h-3.5 w-3.5" strokeWidth={2.5} />}
        active={isDark}
        onClick={() => { if (!isDark) toggle(); }}
      />
      <SlotButton
        slot="02"
        label="Light"
        icon={<Sun className="h-3.5 w-3.5" strokeWidth={2.5} />}
        active={!isDark}
        onClick={() => { if (isDark) toggle(); }}
      />
    </div>
  );
}

interface SlotButtonProps {
  slot: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function SlotButton({ slot, label, icon, active, onClick }: SlotButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={`${label} mode`}
      className={cn(
        "relative flex flex-col items-start gap-0.5 rounded-sm px-2.5 py-1.5 transition-all",
        active
          ? "bg-background border border-border shadow-sm"
          : "opacity-40 hover:opacity-90 cursor-pointer border border-transparent",
      )}
    >
      <div className="flex items-center gap-1.5">
        <span
          className={cn(
            "size-1.5 rounded-full transition-colors",
            active ? "bg-primary anim-blink" : "bg-muted-foreground/50",
          )}
          style={active ? { boxShadow: "0 0 6px color-mix(in oklab, var(--primary) 80%, transparent)" } : undefined}
        />
        <span
          className={cn(
            "text-[8px] font-bold uppercase tracking-[0.2em] leading-none",
            active ? "text-primary" : "text-muted-foreground",
          )}
        >
          Slot {slot}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className={cn(active ? "text-foreground" : "text-muted-foreground")}>{icon}</span>
        <span
          className={cn(
            "text-[10px] font-extrabold uppercase tracking-[0.18em] leading-none",
            active ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {label}
        </span>
      </div>
      {active && (
        <span aria-hidden className="absolute -bottom-0.5 left-2.5 right-2.5 h-0.5 bg-primary" />
      )}
    </button>
  );
}
