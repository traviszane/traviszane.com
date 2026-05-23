import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { characters, type CharacterId } from "@/lib/characters";

export const Route = createFileRoute("/$character/$quest")({
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
        </header>

        {d && (
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
      </main>
    </div>
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
