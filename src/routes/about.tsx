import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { FlipbookOrbit } from "@/components/FlipbookOrbit";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Origin Story—Travis Zane" },
      {
        name: "description",
        content:
          "The character autobio behind the three sprites: who Travis Zane is, what he does, and how to get in touch for collaborations.",
      },
      { property: "og:title", content: "Origin Story—Travis Zane" },
      {
        property: "og:description",
        content:
          "The character autobio behind the three sprites: who Travis Zane is, what he does, and how to get in touch for collaborations.",
      },
      { property: "og:url", content: "https://traviszane.com/about" },
      { name: "twitter:title", content: "Origin Story—Travis Zane" },
      {
        name: "twitter:description",
        content:
          "The character autobio behind the three sprites: who Travis Zane is, what he does, and how to get in touch for collaborations.",
      },
    ],
    links: [{ rel: "canonical", href: "https://traviszane.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SceneBackdrop />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-8 md:py-10">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.35em] text-primary">
          File 04 · Character Autobio
        </p>
        <h1 className="font-display uppercase italic text-4xl md:text-5xl leading-none tracking-tight">
          Origin Story
        </h1>

        <div className="mt-5 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div className="space-y-4 text-sm md:text-[15px] leading-relaxed text-foreground/80">
            <p>
              In a bar in New York designed to look like a bathroom, a friend
              once screamed—at the pitch of a starving seagull—that I was a
              classic Aquarius. She proceeded to don the voice of a 70-year-old
              professor and explain that Aquarians were society's powerhouses
              of creativity: interdisciplinary, socially malleable, always
              bringing people together who'd have no reason to know each other
              otherwise.
            </p>
            <p>
              Though I wanted to snap her out of our generational psychosis, I
              realized that she was right. I've spent my whole life connecting
              people with other people. It's my favorite thing to do. I suppose
              that's why I care about stories—why I craft them for brands,
              readers, and anyone willing to follow me down a rabbit hole.
            </p>
            <p>
              I work across three crafts that share one obsession:
              making things that move people. Some days that's a 3,000-word
              essay. Other days it's a launch plan, or a small piece of copy
              designed to make the world fall in love with a product.
            </p>
            <p>
              The character-select frame you see here is an honest map of my life. Each path on this site is a real body of work with
              real outcomes. Pick whichever one is most useful to you.
            </p>
            <p>
              For collaborations, ideas, or a pensive chat, my inbox is open.
            </p>
          </div>

          <div className="md:sticky md:top-20 flex flex-col items-center">
            <FlipbookOrbit />
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              ◆ Character Reel
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-[0.25em]">
          <a
            href="mailto:hello@example.com"
            className="border border-primary/50 text-primary px-4 py-2.5 transition-colors hover:bg-primary/10"
          >
            Open Inbox →
          </a>
          <Link
            to="/"
            className="border border-border px-4 py-2.5 text-foreground transition-colors hover:text-primary"
          >
            ← Back to Select
          </Link>
        </div>
      </main>
    </div>
  );
}
