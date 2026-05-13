import { Link, useRouterState } from "@tanstack/react-router";
import { characterList, type CharacterId } from "@/lib/characters";
import { accent } from "@/lib/accent";

interface Props {
  active?: CharacterId | null;
}

export function HudNav({ active }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onSelect = pathname === "/";
  const dotClass = active ? accent[active].dot : "bg-writer";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="group flex items-center gap-3">
          <span className={`size-2.5 rounded-full ${dotClass} animate-pulse`} aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 transition-colors group-hover:text-foreground">
            {onSelect
              ? "Select Character_"
              : active
              ? `Player.01 / ${active.toUpperCase()}_`
              : "Player.01_"}
          </span>
        </Link>

        <div className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50 md:flex">
          {characterList.map((c, i) => {
            const a = accent[c.id];
            return (
              <Link
                key={c.id}
                to="/$character"
                params={{ character: c.id }}
                className={`transition-colors ${a.hoverText} ${
                  active === c.id ? a.text : ""
                }`}
              >
                {String(i + 1).padStart(2, "0")} / {c.name}
              </Link>
            );
          })}
          <Link to="/about" className="transition-colors hover:text-foreground">
            04 / About
          </Link>
        </div>

        {!onSelect ? (
          <Link
            to="/"
            className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60 transition-colors hover:border-foreground/50 hover:text-foreground"
          >
            ← Reselect
          </Link>
        ) : (
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 md:inline-block">
            Credits / 03
          </span>
        )}
      </div>
    </nav>
  );
}
