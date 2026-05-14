import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SceneBackdrop } from "@/components/SceneBackdrop";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Player — Choose Your Story" },
      {
        name: "description",
        content:
          "Behind the three sprites: who I am, what I do, and how to get in touch.",
      },
      { property: "og:title", content: "About the Player" },
      {
        property: "og:description",
        content:
          "Behind the three sprites: who I am, what I do, and how to get in touch.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SceneBackdrop />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-primary">
          File 04 · Player Bio
        </p>
        <h1 className="font-display uppercase italic text-5xl md:text-7xl leading-none tracking-tight">
          About the Player
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/75">
          <p>
            I split my time across three crafts that share one obsession:
            making things that move people. Some days that's a 3,000-word
            essay. Other days it's a launch plan, or a small piece of code
            that ships on the open web.
          </p>
          <p>
            The character-select frame isn't a gimmick — it's an honest map.
            Each path on this site is a real body of work, with real outcomes.
            Pick whichever one is most useful to you.
          </p>
          <p>For collaborations, briefs, or a quiet chat, the inbox is open.</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.25em]">
          <a
            href="mailto:hello@example.com"
            className="border border-primary/50 text-primary px-5 py-3 transition-colors hover:bg-primary/10"
          >
            Open Inbox →
          </a>
          <Link
            to="/"
            className="border border-border px-5 py-3 text-foreground/60 transition-colors hover:text-foreground"
          >
            ← Back to Select
          </Link>
        </div>
      </main>
    </div>
  );
}
