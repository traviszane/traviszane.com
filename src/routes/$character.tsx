import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { CharacterSprite } from "@/components/CharacterSprite";
import { characters, characterList, type CharacterId } from "@/lib/characters";

export const Route = createFileRoute("/$character")({
  beforeLoad: ({ params }) => {
    if (!(params.character in characters)) throw notFound();
  },
  head: ({ params }) => {
    const c = characters[params.character as CharacterId];
    if (!c) return { meta: [{ title: "Not found" }] };
    return {
      meta: [
        { title: `${c.name} — ${c.className}'s Journey` },
        { name: "description", content: c.blurb.slice(0, 155) },
        { property: "og:title", content: `${c.name} — ${c.className}'s Journey` },
        { property: "og:description", content: c.blurb.slice(0, 155) },
      ],
    };
  },
  component: CharacterPage,
});

function CharacterPage() {
  const { character: id } = Route.useParams();
  const c = characters[id as CharacterId];
  const color = `var(${c.colorVar})`;
  const fileIndex = characterList.findIndex((ch) => ch.id === id);
  const fileNumber = String(fileIndex + 1).padStart(2, "0");

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SceneBackdrop />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
          >
            <span>←</span> Change&nbsp;character
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            File {fileNumber} · {c.className}
          </span>
        </div>

        <section className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] anim-fade-up">
          <div
            className="relative flex items-end justify-center rounded-md border border-border bg-card/60 backdrop-blur-sm overflow-hidden min-h-[26rem]"
            style={{
              background: `radial-gradient(ellipse at 50% 80%, color-mix(in oklab, ${color} 30%, transparent) 0%, transparent 70%), color-mix(in oklab, var(--card) 80%, transparent)`,
            }}
          >
            <div
              aria-hidden
              className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              <span>Profile</span>
              <span style={{ color }}>● Active</span>
            </div>
            <div className="px-4 pt-12">
              <CharacterSprite character={c} size="xl" active />
            </div>
            <Brackets />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {c.className} · Lvl 99
              </div>
              <h1 className="mt-2 font-display uppercase italic text-5xl md:text-7xl leading-[0.9] tracking-tight text-foreground">
                {c.name}
              </h1>
              <p className="mt-3 italic text-lg" style={{ color }}>
                {c.tagline}
              </p>
              <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">{c.blurb}</p>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Stats
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color }}>
                  MAX
                </div>
              </div>
              <div className="space-y-2">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
                      <span className="text-foreground/80">{s.label}</span>
                      <span style={{ color }}>{s.value}</span>
                    </div>
                    <div
                      className="mt-1 h-2 w-full overflow-hidden rounded-sm border"
                      style={{
                        borderColor: `color-mix(in oklab, ${color} 30%, transparent)`,
                        background: `color-mix(in oklab, ${color} 8%, transparent)`,
                      }}
                    >
                      <div
                        className="h-full"
                        style={{
                          width: `${s.value}%`,
                          background: `linear-gradient(90deg, color-mix(in oklab, ${color} 60%, transparent), ${color})`,
                          boxShadow: `0 0 12px color-mix(in oklab, ${color} 50%, transparent)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  XP Earned
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color }}>
                  ▲ Receipts
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {c.xp.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-sm border border-border bg-background/30 px-3 py-2.5"
                    style={{
                      boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${color} 10%, transparent)`,
                    }}
                  >
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">
                      {s.label}
                    </div>
                    <div
                      className="mt-1 font-display italic text-3xl tabular-nums leading-none"
                      style={{ color }}
                    >
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
                Equipped Abilities
              </div>
              <div className="flex flex-wrap gap-2">
                {c.abilities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-wider"
                    style={{
                      borderColor: `color-mix(in oklab, ${color} 50%, transparent)`,
                      color,
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                ◆ Quest Log
              </div>
              <h2 className="mt-2 font-display uppercase italic text-3xl md:text-5xl tracking-tight">Experience</h2>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Completed quests
            </span>
          </div>

          <ol className="mt-8 space-y-4">
            {c.chapters.map((ch, i) => {
              const inner = (
                <>
                  <div
                    className="font-display italic text-3xl tabular-nums"
                    style={{ color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {ch.meta}
                    </div>
                    <h3 className="mt-1 font-display uppercase italic text-2xl text-foreground tracking-tight">{ch.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground max-w-2xl">
                      {ch.description}
                    </p>
                    {(ch.goal || ch.outcome) && (
                      <dl className="mt-3 grid gap-2 sm:grid-cols-2 max-w-2xl">
                        {ch.goal && (
                          <div className="rounded-sm border border-border/70 bg-background/40 px-3 py-2">
                            <dt className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color }}>
                              Goal
                            </dt>
                            <dd className="mt-0.5 text-xs text-foreground/85 leading-snug">{ch.goal}</dd>
                          </div>
                        )}
                        {ch.outcome && (
                          <div className="rounded-sm border border-border/70 bg-background/40 px-3 py-2">
                            <dt className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color }}>
                              Outcome
                            </dt>
                            <dd className="mt-0.5 text-xs text-foreground/85 leading-snug">{ch.outcome}</dd>
                          </div>
                        )}
                      </dl>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ch.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                    {ch.href ? "Read ↗" : "Open →"}
                  </div>
                </>
              );
              const cls =
                "group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded-md border border-border bg-card/60 px-6 py-5 backdrop-blur-sm transition-all hover:border-primary/40 hover:-translate-y-0.5 anim-fade-up";
              return (
                <li key={ch.title} style={{ animationDelay: `${i * 80}ms` }} className="contents">
                  {ch.href ? (
                    <a
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      {inner}
                    </a>
                  ) : ch.slug ? (
                    <Link
                      to="/$character/$quest"
                      params={{ character: id, quest: ch.slug }}
                      className={cls}
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className={cls} style={{ animationDelay: `${i * 80}ms` }}>
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mt-20 rounded-md border border-border bg-card/60 p-8 backdrop-blur-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                ✦ End of path
              </div>
              <h3 className="mt-2 font-display uppercase italic text-2xl md:text-4xl tracking-tight">
                Ready to start a quest together?
              </h3>
              <p className="mt-1 text-muted-foreground max-w-lg">
                If something here resonates — a project, a collaboration, a conversation — send a note. I read everything.
              </p>
            </div>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center self-start rounded-md bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send a raven →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function Brackets() {
  const cls = "absolute size-4 border-primary/70";
  return (
    <>
      <span aria-hidden className={`${cls} top-2 left-2 border-t border-l`} />
      <span aria-hidden className={`${cls} top-2 right-2 border-t border-r`} />
      <span aria-hidden className={`${cls} bottom-2 left-2 border-b border-l`} />
      <span aria-hidden className={`${cls} bottom-2 right-2 border-b border-r`} />
    </>
  );
}
