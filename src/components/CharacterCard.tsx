import { Link } from "@tanstack/react-router";
import type { Character } from "@/lib/characters";
import { accent } from "@/lib/accent";

interface Props {
  character: Character;
  delayMs?: number;
}

export function CharacterCard({ character, delayMs = 0 }: Props) {
  const a = accent[character.id];

  return (
    <Link
      to="/$character"
      params={{ character: character.id }}
      className={`group relative flex aspect-[3/4] flex-col justify-end overflow-hidden border border-border bg-white/5 p-7 transition-all duration-500 ${a.hoverBorder} ${a.hoverBg}`}
      style={{
        animation: `slide-in 0.8s var(--ease-arcade) both`,
        animationDelay: `${delayMs}ms`,
      }}
    >
      {/* hover overlays */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="crt-overlay absolute inset-0" />
        <div className={`absolute inset-0 bg-gradient-to-t ${a.gradient}`} />
      </div>

      {/* sprite */}
      <img
        src={character.sprite}
        alt={`${character.name} sprite`}
        width={512}
        height={512}
        loading="lazy"
        className="pixelated pointer-events-none absolute right-2 top-2 size-44 object-contain opacity-90 transition-all duration-500 group-hover:scale-105 md:size-56"
        style={{ animation: "sprite-bob 3.6s ease-in-out infinite" }}
      />

      <div className="relative z-10">
        <div className={`mb-2 font-mono text-xs ${a.text}`}>
          CLASS: {character.classNum}
        </div>
        <h2 className="mb-3 font-display text-5xl uppercase italic leading-none tracking-tight md:text-6xl">
          {character.name}
        </h2>
        <p className="mb-7 max-w-[22ch] text-sm text-foreground/60">
          {character.tagline}
        </p>

        <div className="space-y-2.5 font-mono text-[10px] uppercase tracking-tight">
          {character.stats.map((s) => (
            <div key={s.label} className="flex items-center justify-between gap-3">
              <span className="text-foreground/70">{s.label}</span>
              <div className="h-1 flex-1 bg-white/10">
                <div
                  className={`h-full ${a.bg} transition-[width] duration-700`}
                  style={{ width: `${s.value}%` }}
                />
              </div>
              <span className={a.text}>{s.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
            Press to start
          </span>
          <span
            className={`font-mono text-[11px] uppercase tracking-[0.2em] ${a.text} opacity-70 transition-all group-hover:translate-x-1 group-hover:opacity-100`}
          >
            Select →
          </span>
        </div>
      </div>
    </Link>
  );
}
