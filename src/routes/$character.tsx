import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CrtOverlay } from "@/components/CrtOverlay";
import { HudNav } from "@/components/HudNav";
import { ProjectTile } from "@/components/ProjectTile";
import { accent } from "@/lib/accent";
import { characters, type CharacterId } from "@/lib/characters";

const VALID: CharacterId[] = ["writer", "marketer", "creator"];

export const Route = createFileRoute("/$character")({
  parseParams: (params) => {
    if (!VALID.includes(params.character as CharacterId)) {
      throw notFound();
    }
    return { character: params.character as CharacterId };
  },
  head: ({ params }) => {
    const c = characters[params.character];
    return {
      meta: [
        { title: `${c.name} — Choose Your Character` },
        { name: "description", content: c.description },
        { property: "og:title", content: `${c.name} — Choose Your Character` },
        { property: "og:description", content: c.description },
      ],
    };
  },
  component: CharacterPage,
});

function CharacterPage() {
  const params = Route.useParams() as { character: CharacterId };
  const c = characters[params.character];
  const a = accent[c.id];

  return (
    <div className={`min-h-screen bg-background text-foreground ${a.selection}`}>
      <HudNav active={c.id} />

      <main className="relative">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-16 md:grid-cols-[1fr_auto] md:gap-12 md:pt-20">
          <div
            className="flex flex-col justify-center"
            style={{ animation: "slide-in 0.6s var(--ease-arcade) both" }}
          >
            <p className={`mb-4 font-mono text-xs uppercase tracking-[0.35em] ${a.text}`}>
              Class {c.classNum} · Now Playing
            </p>
            <h1 className="font-display text-7xl uppercase italic leading-[0.85] tracking-tighter md:text-9xl">
              The {c.name}
            </h1>
            <p className="mt-6 max-w-[40ch] text-lg text-foreground/65">
              {c.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
              <span className={`border ${a.borderSoft} ${a.text} px-3 py-1.5`}>
                {c.title}
              </span>
              <span className="border border-border px-3 py-1.5 text-foreground/50">
                {c.projects.length} projects loaded
              </span>
            </div>
          </div>

          <div
            className={`relative flex aspect-square w-72 items-center justify-center border border-border ${a.bgSoft} md:w-96`}
            style={{ animation: "slide-in 0.8s var(--ease-arcade) 0.1s both" }}
          >
            <div className="crt-overlay absolute inset-0 opacity-60" />
            <img
              src={c.sprite}
              alt={`${c.name} character sprite`}
              width={512}
              height={512}
              className="pixelated relative z-10 size-5/6 object-contain"
              style={{ animation: "sprite-bob 3.6s ease-in-out infinite" }}
            />
            <span className={`absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] ${a.text}`}>
              SPRITE_{c.id.toUpperCase()}.PNG
            </span>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-border bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-border">
            {c.stats.map((s) => (
              <div key={s.label} className="px-6 py-5">
                <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                  <span>{s.label}</span>
                  <span className={a.text}>{s.value}/100</span>
                </div>
                <div className="h-1 bg-white/10">
                  <div
                    className={`h-full ${a.bg}`}
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className={`mb-2 font-mono text-xs uppercase tracking-[0.3em] ${a.text}`}>
                [ Inventory ]
              </p>
              <h2 className="font-display text-4xl uppercase italic tracking-tight md:text-6xl">
                Selected Quests
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">
              {String(c.projects.length).padStart(2, "0")} items
            </span>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {c.projects.map((p, i) => (
              <ProjectTile key={p.title} character={c} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* Switch character */}
        <section className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                End of run
              </p>
              <p className="mt-2 font-display text-3xl uppercase italic">
                Try another class.
              </p>
            </div>
            <Link
              to="/"
              className={`border ${a.borderSoft} px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] ${a.text} transition-colors hover:bg-white/5`}
            >
              ← Reselect Character
            </Link>
          </div>
        </section>
      </main>

      <CrtOverlay />
    </div>
  );
}
