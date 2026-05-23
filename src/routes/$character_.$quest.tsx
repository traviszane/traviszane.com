import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { characters, type CharacterId } from "@/lib/characters";

export const Route = createFileRoute("/$character_/$quest")({
  beforeLoad: ({ params }) => {
    const c = characters[params.character as CharacterId];
    if (!c) throw notFound();
    const ch = c.chapters.find((q) => q.slug === params.quest);
    if (!ch) throw notFound();
  },
  head: ({ params }) => {
    const c = characters[params.character as CharacterId];
    const ch = c?.chapters.find((q) => q.slug === params.quest);
    if (!c || !ch) return { meta: [{ title: "Not found" }] };
    const base = ch.description.slice(0, 155);
    const desc =
      base.length >= 50
        ? base
        : `${ch.title}—a ${c.className.toLowerCase()} quest by Travis Zane. ${base}`.slice(0, 160);
    const url = `https://traviszane.com/${params.character}/${params.quest}`;
    return {
      meta: [
        { title: `${ch.title}—${c.name}` },
        { name: "description", content: desc },
        { property: "og:title", content: `${ch.title}—${c.name}` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:title", content: `${ch.title}—${c.name}` },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: ch.title,
            headline: ch.title,
            description: desc,
            url,
            inLanguage: "en",
            keywords: ch.tags.join(", "),
            author: {
              "@type": "Person",
              name: "Travis Zane",
              url: "https://traviszane.com/",
            },
            about: c.name,
          }),
        },
      ],
    };
  },
  component: QuestPage,
});

function QuestPage() {
  const { character: id, quest } = Route.useParams();
  const c = characters[id as CharacterId];
  const ch = c.chapters.find((q) => q.slug === quest)!;
  const color = `var(${c.colorVar})`;
  const d = ch.details;
  const otherQuests = c.chapters.filter((q) => q.slug !== quest);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SceneBackdrop />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-24 md:px-10">
        <Link
          to="/$character"
          params={{ character: id }}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
        >
          <span>←</span> Back&nbsp;to&nbsp;quest&nbsp;log
        </Link>

        <header className="mt-8 anim-fade-up">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color }}>
            {ch.meta}
          </div>
          <h1 className="mt-2 font-display uppercase italic text-4xl md:text-6xl leading-[0.95] tracking-tight text-foreground">
            {ch.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{ch.description}</p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-2 max-w-2xl">
            {ch.goal && (
              <div className="rounded-md border border-border/70 bg-card/60 px-4 py-3 backdrop-blur-sm">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color }}>Goal</dt>
                <dd className="mt-1 text-sm text-foreground/90 leading-snug">{ch.goal}</dd>
              </div>
            )}
            {ch.outcome && (
              <div className="rounded-md border border-border/70 bg-card/60 px-4 py-3 backdrop-blur-sm">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color }}>Outcome</dt>
                <dd className="mt-1 text-sm text-foreground/90 leading-snug">{ch.outcome}</dd>
              </div>
            )}
          </dl>

          {ch.href && (
            <a
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-card/60"
              style={{ borderColor: `color-mix(in oklab, ${color} 50%, transparent)`, color }}
            >
              Visit&nbsp;the&nbsp;quest <span aria-hidden>↗</span>
            </a>
          )}
        </header>

        {d ? (
          <>
            <section className="mt-10 grid gap-4 sm:grid-cols-3 anim-fade-up">
              {d.client && <Meta label="Client" value={d.client} />}
              {d.role && <Meta label="Role" value={d.role} />}
              {d.timeframe && <Meta label="Timeframe" value={d.timeframe} />}
            </section>

            <section className="mt-10 anim-fade-up">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl">
                {d.summary}
              </p>
            </section>

            {d.metrics && d.metrics.length > 0 && (
              <section className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 anim-fade-up">
                {d.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-md border border-border bg-card/60 px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="font-display italic text-3xl tabular-nums" style={{ color }}>
                      {m.value}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </section>
            )}

            <section className="mt-12 space-y-8">
              {d.sections.map((s, i) => (
                <article
                  key={s.heading}
                  className="anim-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <h2 className="font-display uppercase italic text-2xl md:text-3xl tracking-tight" style={{ color }}>
                    {s.heading}
                  </h2>
                  <p className="mt-3 text-foreground/85 leading-relaxed max-w-2xl">{s.body}</p>
                </article>
              ))}
            </section>
          </>
        ) : (
          <section
            className="mt-12 rounded-md border border-dashed bg-card/40 px-6 py-10 text-center backdrop-blur-sm anim-fade-up"
            style={{ borderColor: `color-mix(in oklab, ${color} 35%, transparent)` }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color }}>
              ◆ Loading quest archive
            </div>
            <h2 className="mt-3 font-display uppercase italic text-2xl md:text-3xl tracking-tight">
              Full case study coming soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
              The receipts—copy, imagery, and breakdowns—are being prepped. Check back shortly, or use the link above to jump straight to the work.
            </p>
          </section>
        )}

        <div className="mt-16 flex flex-wrap gap-2">
          {ch.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        <QuestFooterNav
          characterId={id as CharacterId}
          characterName={c.name}
          color={color}
          otherQuests={otherQuests}
        />
      </main>
    </div>
  );
}

function QuestFooterNav({
  characterId,
  characterName,
  color,
  otherQuests,
}: {
  characterId: CharacterId;
  characterName: string;
  color: string;
  otherQuests: { slug?: string; title: string; meta: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Quest navigation"
      className="mt-20 border-t border-border pt-6 flex items-center justify-between gap-4"
    >
      <Link
        to="/$character"
        params={{ character: characterId }}
        className="group inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors"
      >
        <span aria-hidden>←</span>
        <span>
          Back&nbsp;to&nbsp;<span className="text-foreground group-hover:text-primary transition-colors">{characterName}</span>
        </span>
      </Link>

      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          onFocus={() => setOpen(true)}
          onBlur={(e) => {
            if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
              setOpen(false);
            }
          }}
          aria-haspopup="menu"
          aria-expanded={open}
          className="group inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors"
        >
          <span>More&nbsp;quests</span>
          <span aria-hidden>→</span>
        </button>

        <div
          role="menu"
          className={`absolute right-0 bottom-full mb-3 w-72 rounded-md border border-border bg-card/95 p-2 backdrop-blur-md shadow-lg transition-all origin-bottom-right ${
            open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
          }`}
        >
          <div className="px-3 pt-2 pb-1 font-mono text-[9px] uppercase tracking-[0.28em]" style={{ color }}>
            ◆ {characterName} · Quests
          </div>
          <ul className="mt-1">
            {otherQuests.map((q) =>
              q.slug ? (
                <li key={q.slug}>
                  <Link
                    to="/$character/$quest"
                    params={{ character: characterId, quest: q.slug }}
                    role="menuitem"
                    className="block rounded-sm px-3 py-2 transition-colors hover:bg-background/60 focus:bg-background/60 outline-none"
                  >
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                      {q.meta}
                    </div>
                    <div className="mt-0.5 font-display italic text-base leading-tight text-foreground">
                      {q.title}
                    </div>
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-card/60 px-4 py-3 backdrop-blur-sm">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm text-foreground">{value}</div>
    </div>
  );
}
