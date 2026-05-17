import { Link } from "@tanstack/react-router";
import { CharacterSprite } from "./CharacterSprite";
import { cn } from "@/lib/utils";
import type { Character } from "@/lib/characters";

interface Props {
  character: Character;
  index: number;
  active: boolean;
  onHover: (id: Character["id"] | null) => void;
}

export function CharacterCard({ character, index, active, onHover }: Props) {
  const color = `var(${character.colorVar})`;

  return (
    <Link
      to="/$character"
      params={{ character: character.id }}
      onMouseEnter={() => onHover(character.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(character.id)}
      onBlur={() => onHover(null)}
      className={cn(
        "group relative flex flex-col items-stretch overflow-hidden rounded-md border bg-card/70 backdrop-blur-sm transition-all duration-500 anim-fade-up",
        "hover:-translate-y-2 focus:-translate-y-2 focus:outline-none",
        active ? "border-primary/70 shadow-[0_30px_80px_-30px_var(--ember)]" : "border-border",
      )}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center justify-between px-2 pt-2 sm:px-4 sm:pt-3 font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>0{index + 1}</span>
        <span style={{ color }}>{character.className}</span>
      </div>

      <div
        className="relative mt-1 px-2 pt-1 pb-2 sm:px-4 sm:pb-4"
        style={{
          background: `radial-gradient(ellipse at 50% 90%, color-mix(in oklab, ${color} 35%, transparent) 0%, transparent 65%)`,
        }}
      >
        <CharacterSprite character={character} active={active} size="lg" />
      </div>

      <div className="px-2 pb-2 pt-1 sm:px-4 sm:pb-4 sm:pt-2">
        <h2 className="font-display uppercase italic text-xl sm:text-2xl md:text-3xl text-foreground leading-tight">
          {character.name}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground italic line-clamp-2">{character.tagline}</p>

        <div className="mt-3">
          <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
            Class Skills
          </div>
          <ul className="space-y-1.5">
            {character.skills.map((s, i) => (
              <li
                key={s.label}
                className="flex items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] transition-all"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  opacity: active ? 1 : 0.78,
                  transform: active ? "translateX(2px)" : "translateX(0)",
                }}
              >
                <span className="truncate uppercase tracking-[0.14em] text-foreground/90">{s.label}</span>
                <span
                  className="shrink-0 rounded-sm border px-1.5 py-[1px] text-[8px] sm:text-[9px] uppercase tracking-[0.18em]"
                  style={{
                    color,
                    borderColor: `color-mix(in oklab, ${color} 55%, transparent)`,
                    background: `color-mix(in oklab, ${color} 12%, transparent)`,
                    boxShadow: active ? `0 0 10px color-mix(in oklab, ${color} 35%, transparent)` : "none",
                  }}
                >
                  {s.tier}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn(
            "mt-2 sm:mt-4 flex items-center justify-between border-t border-border pt-2 sm:pt-3 font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.18em] transition-colors",
            active ? "text-primary" : "text-muted-foreground",
          )}
        >
          <span className="truncate">{active ? "▸ Begin" : "Select"}</span>
          <span className="text-sm sm:text-base">{active ? "↵" : "→"}</span>
        </div>
      </div>

      <Bracket className="top-2 left-2" />
      <Bracket className="top-2 right-2 rotate-90" />
      <Bracket className="bottom-2 left-2 -rotate-90" />
      <Bracket className="bottom-2 right-2 rotate-180" />
    </Link>
  );
}

function Bracket({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute size-3 border-t border-l border-primary/60 transition-opacity opacity-0 group-hover:opacity-100 group-focus:opacity-100",
        className,
      )}
    />
  );
}
