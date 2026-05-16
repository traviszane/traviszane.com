import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { CharacterCard } from "@/components/CharacterCard";
import { useTheme } from "@/components/ThemeProvider";
import { characterList, type CharacterId } from "@/lib/characters";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Choose Your Story — A Portfolio in Three Classes" },
      {
        name: "description",
        content:
          "Pick a character — Writer, Marketer, or Creator — and explore the work behind each path of Travis Zane's portfolio.",
      },
      { property: "og:title", content: "Choose Your Story — A Portfolio in Three Classes" },
      {
        property: "og:description",
        content:
          "A portfolio shaped like a character-select screen. Pick the Writer, Marketer, or Creator to explore each body of work.",
      },
      { property: "og:url", content: "https://traviszane.com/" },
    ],
    links: [{ rel: "canonical", href: "https://traviszane.com/" }],
  }),
  component: Index,
});

function Index() {
  const [hovered, setHovered] = useState<CharacterId | null>(null);
  const { theme } = useTheme();
  const slot = theme === "dark" ? "01" : "02";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SceneBackdrop />
      <SiteHeader />

      <main className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col px-4 pb-4 pt-2 md:px-8">
        <section className="mb-4 max-w-3xl anim-fade-up md:mb-6">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            <span className="size-1.5 bg-primary anim-blink" />
            New Game — Slot {slot}
          </div>
          <h1 className="mt-2 font-display uppercase italic text-4xl md:text-7xl leading-[0.9] tracking-tight text-foreground">
            Choose your{" "}
            <span className="text-primary text-glow">character.</span>
          </h1>
        </section>

        <section
          aria-label="Character select"
          className="grid flex-1 grid-cols-3 gap-2 sm:gap-3 md:gap-5"
        >
          {characterList.map((c, i) => (
            <CharacterCard
              key={c.id}
              character={c}
              index={i}
              active={hovered === c.id}
              onHover={setHovered}
            />
          ))}
        </section>

        <footer className="mt-3 hidden md:flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <div className="flex flex-wrap gap-6">
            <span><span className="text-foreground">↹</span> Tab to cycle</span>
            <span><span className="text-foreground">↵</span> Enter to select</span>
          </div>
          <span className="text-primary anim-flicker">Hover a character to focus</span>
        </footer>
      </main>
    </div>
  );
}
