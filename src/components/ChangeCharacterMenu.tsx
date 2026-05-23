import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { characterList, type CharacterId } from "@/lib/characters";

export function ChangeCharacterMenu({ currentId }: { currentId?: CharacterId }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative shrink-0"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span aria-hidden>←</span> Change&nbsp;character
      </button>
      {/* pt-2 keeps the menu inside the hover area so cursor can travel button → menu without closing */}
      <div
        role="menu"
        className={`absolute left-0 top-full pt-2 min-w-[13rem] z-30 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-md border border-border bg-card/95 backdrop-blur-sm p-1 shadow-lg">
          {characterList.map((ch) => {
            const chColor = `var(${ch.colorVar})`;
            const isCurrent = ch.id === currentId;
            return (
              <Link
                key={ch.id}
                to="/$character"
                params={{ character: ch.id }}
                role="menuitem"
                className={`flex items-center gap-2 rounded-sm px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-background/60 ${
                  isCurrent ? "opacity-100" : "opacity-50 hover:opacity-80"
                }`}
              >
                <span
                  aria-hidden
                  className={`inline-block rounded-full ${isCurrent ? "size-2" : "size-1.5"}`}
                  style={{
                    background: chColor,
                    boxShadow: isCurrent
                      ? `0 0 10px ${chColor}, 0 0 4px ${chColor}`
                      : `0 0 4px ${chColor}`,
                  }}
                />
                <span style={{ color: chColor }}>{ch.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
