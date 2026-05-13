import { Link, useRouterState } from "@tanstack/react-router";
import { characterList, type CharacterId } from "@/lib/characters";

interface Props {
  active?: CharacterId | null;
}

export function HudNav({ active }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onSelect = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <span
            className={`size-2.5 rounded-full ${
              active ? `bg-${active}` : "bg-writer"
            } animate-pulse`}
            aria-hidden
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 group-hover:text-foreground transition-colors">
            {onSelect
              ? "Select Character_"
              : active
              ? `Player.01 / ${active.toUpperCase()}_`
              : "Player.01_"}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
          {characterList.map((c, i) => (
            <Link
              key={c.id}
              to="/$character"
              params={{ character: c.id }}
              className={`transition-colors hover:text-${c.id} ${
                active === c.id ? `text-${c.id}` : ""
              }`}
            >
              {String(i + 1).padStart(2, "0")} / {c.name}
            </Link>
          ))}
          <Link to="/about" className="transition-colors hover:text-foreground">
            04 / About
          </Link>
        </div>

        {!onSelect && (
          <Link
            to="/"
            className="font-mono text-[10px] uppercase tracking-[0.25em] border border-border px-3 py-1.5 hover:border-foreground/50 hover:text-foreground transition-colors text-foreground/60"
          >
            ← Reselect
          </Link>
        )}
        {onSelect && (
          <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
            Credits / 03
          </span>
        )}
      </div>
    </nav>
  );
}
