import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { ChangeCharacterMenu } from "@/components/ChangeCharacterMenu";
import { QuestEmbed } from "@/components/QuestEmbed";
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
        <div className="mt-2">
          <ChangeCharacterMenu currentId={id as CharacterId} />
        </div>

        <header className="mt-6 anim-fade-up">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.3em]">
            <span className="font-semibold" style={{ color }}>{c.name}</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-muted-foreground">{ch.meta}</span>
          </div>
          <h1 className="mt-2 font-display uppercase italic text-4xl md:text-6xl leading-[0.95] tracking-tight text-white">
            {ch.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{ch.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {ch.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>

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
        </header>

        {d ? (
          <>
            <section className="mt-10 grid gap-4 sm:grid-cols-3 anim-fade-up">
              {d.client && <Meta label="Client" value={d.client} />}
              {d.role && <Meta label="Role" value={d.role} />}
              {d.timeframe && <Meta label="Timeframe" value={d.timeframe} />}
            </section>

            {d.situation && (
              <section className="mt-12 anim-fade-up">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                  ◆ The Situation
                </h2>
                <p className="mt-3 text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl">
                  {d.situation}
                </p>
              </section>
            )}

            {d.approach && (
              <section className="mt-10 anim-fade-up">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                  ◆ The Approach
                </h2>
                <p className="mt-3 text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl">
                  {d.approach}
                </p>
              </section>
            )}

            {d.summary && !d.situation && (
              <section className="mt-10 anim-fade-up">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl">
                  {d.summary}
                </p>
              </section>
            )}

            {d.workItems && d.workItems.length > 0 && (
              <section className="mt-10 anim-fade-up">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                  ◆ The Work
                </h2>
                <ul className="mt-4 space-y-2 max-w-2xl">
                  {d.workItems.map((w) => (
                    <li
                      key={w}
                      className="flex gap-3 text-sm md:text-base text-foreground/85 leading-relaxed"
                    >
                      <span aria-hidden style={{ color }}>▸</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {d.sections && d.sections.length > 0 && (
              <section className="mt-12 space-y-8">
                {d.sections.map((s, i) => (
                  <article
                    key={s.heading}
                    className="anim-fade-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <h3 className="font-display uppercase italic text-2xl md:text-3xl tracking-tight" style={{ color }}>
                      {s.heading}
                    </h3>
                    <p className="mt-3 text-foreground/85 leading-relaxed max-w-2xl">{s.body}</p>
                  </article>
                ))}
              </section>
            )}

            {d.metrics && d.metrics.length > 0 && (
              <section className="mt-12 anim-fade-up">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                  ◆ The Outcome
                </h2>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
                </div>
              </section>
            )}

            {d.embeds && d.embeds.length > 0 && (
              <section className="mt-12 anim-fade-up">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                  ◆ Receipts
                </h2>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  {d.embeds.map((e, i) => (
                    <QuestEmbed key={`${e.type}-${i}-${e.url}`} embed={e} />
                  ))}
                </div>
              </section>
            )}

            {d.gallery && d.gallery.length > 0 && (
              <section className="mt-12 anim-fade-up">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                  ◆ Gallery
                </h2>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {d.gallery.map((g, i) => (
                    "type" in g ? (
                      <QuestEmbed key={`${g.type}-${i}-${g.url}`} embed={g} />
                    ) : (
                      <a
                        key={i}
                        href={g.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block overflow-hidden rounded-md border border-border bg-card/40"
                      >
                        <img
                          src={g.src}
                          alt={g.alt}
                          loading="lazy"
                          className="h-full w-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
                        />
                      </a>
                    )
                  ))}
                </div>
              </section>
            )}

            {d.shots && d.shots.length > 0 && (
              <section className="mt-12 anim-fade-up">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                  ◆ The Receipts
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {d.shots.map((s, i) => (
                    <figure
                      key={i}
                      className="overflow-hidden rounded-lg border border-border bg-black/60 backdrop-blur-sm shadow-lg"
                    >
                      <img
                        src={s.src}
                        alt={s.alt}
                        loading="lazy"
                        className="block w-full h-auto object-contain"
                      />
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {d.testimonials && d.testimonials.length > 0 && (
              <section className="mt-12 anim-fade-up">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                  ◆ What Readers Say
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 max-w-3xl">
                  {d.testimonials.map((t, i) => (
                    <blockquote
                      key={i}
                      className="rounded-md border border-border bg-card/60 px-4 py-3 italic text-foreground/85 text-sm leading-relaxed"
                      style={{ borderLeftColor: color, borderLeftWidth: 3 }}
                    >
                      “{t}”
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            {d.pressLinks && d.pressLinks.length > 0 && (
              <section className="mt-12 anim-fade-up">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                  ◆ Links
                </h2>
                <ul className="mt-3 space-y-2 max-w-2xl">
                  {d.pressLinks.map((p) => (
                    <li key={p.url}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base text-foreground/90 hover:text-foreground underline-offset-4 hover:underline"
                      >
                        {p.label} <span aria-hidden>↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

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
              The receipts—copy, imagery, and breakdowns—are being prepped. Check back shortly.
            </p>
          </section>
        )}

        {ch.ctas && ch.ctas.length > 0 && (
          <div className="mt-16 flex flex-wrap justify-center gap-3 anim-fade-up">
            {ch.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-card/60"
                style={{ borderColor: `color-mix(in oklab, ${color} 50%, transparent)`, color }}
              >
                {cta.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        )}


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
  const [questOpen, setQuestOpen] = useState(false);

  return (
    <nav
      aria-label="Quest navigation"
      className="mt-20 border-t border-border pt-6 flex items-center justify-between gap-4"
    >
      <Link
        to="/$character"
        params={{ character: characterId }}
        className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground hover:opacity-80 transition-opacity"
      >
        <span aria-hidden>←</span>
        <span>
          Back&nbsp;to&nbsp;
          <span className="font-semibold" style={{ color }}>{characterName}</span>
        </span>
      </Link>


      <div
        className="relative"
        onMouseEnter={() => setQuestOpen(true)}
        onMouseLeave={() => setQuestOpen(false)}
      >
        <button
          type="button"
          onClick={() => setQuestOpen((v) => !v)}
          onFocus={() => setQuestOpen(true)}
          onBlur={(e) => {
            if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
              setQuestOpen(false);
            }
          }}
          aria-haspopup="menu"
          aria-expanded={questOpen}
          className="group inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>More&nbsp;quests</span>
          <span aria-hidden className={`transition-transform ${questOpen ? "translate-y-0.5" : ""}`}>↓</span>
        </button>

        <div
          role="menu"
          className={`absolute right-0 bottom-full pb-3 w-72 origin-bottom-right transition-opacity ${
            questOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="rounded-md border border-border bg-card/95 p-2 backdrop-blur-md shadow-lg">
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
