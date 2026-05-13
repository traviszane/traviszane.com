import { createFileRoute, Link } from "@tanstack/react-router";
import { CharacterCard } from "@/components/CharacterCard";
import { CrtOverlay } from "@/components/CrtOverlay";
import { HudNav } from "@/components/HudNav";
import { characterList } from "@/lib/characters";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-writer/30">
      <HudNav />

      <main className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pb-16 md:pt-24">
          <div
            className="text-center"
            style={{ animation: "slide-in 0.6s var(--ease-arcade) both" }}
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-foreground/50">
              Insert Coin · Player 01 Ready
            </p>
            <h1 className="font-display text-6xl uppercase italic leading-[0.9] tracking-tighter text-balance md:text-8xl lg:text-[10rem]">
              Choose Your <span className="text-writer">Character</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-foreground/55">
              One portfolio, three lives. Pick a class to explore the work —
              long-form writing, growth campaigns, or shipped creative projects.
            </p>
          </div>
        </section>

        {/* Roster */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
            <span>// Roster</span>
            <span>03 / 03 Available</span>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {characterList.map((c, i) => (
              <CharacterCard
                key={c.id}
                character={c}
                delayMs={100 + i * 100}
              />
            ))}
          </div>
        </section>

        {/* Footer hint */}
        <section className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>System Online · v1.0</span>
            </div>
            <div className="flex gap-6">
              <Link to="/about" className="hover:text-foreground transition-colors">
                About the Player
              </Link>
              <a
                href="mailto:hello@example.com"
                className="hover:text-foreground transition-colors"
              >
                Open Inbox
              </a>
            </div>
          </div>
        </section>
      </main>

      <CrtOverlay />
    </div>
  );
}
