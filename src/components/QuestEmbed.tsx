import { useEffect, useRef, useState } from "react";

export type Embed =
  | { type: "twitter"; url: string }
  | { type: "youtube"; url: string }
  | { type: "instagram"; url: string };

function youTubeId(url: string): string | null {
  const m =
    url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/);
  return m ? m[1] : null;
}

function loadScriptOnce(src: string, id: string) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) {
    // trigger re-scan for twitter/instagram
    // @ts-ignore
    if (id === "twitter-wjs" && window.twttr?.widgets) window.twttr.widgets.load();
    // @ts-ignore
    if (id === "instagram-embed-js" && window.instgrm?.Embeds)
      // @ts-ignore
      window.instgrm.Embeds.process();
    return;
  }
  const s = document.createElement("script");
  s.id = id;
  s.async = true;
  s.src = src;
  document.body.appendChild(s);
}

export function QuestEmbed({ embed }: { embed: Embed }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (embed.type === "twitter") {
      loadScriptOnce("https://platform.twitter.com/widgets.js", "twitter-wjs");
      // attempt re-scan shortly after mount
      const t = setTimeout(() => {
        // @ts-ignore
        if (window.twttr?.widgets) {
          // @ts-ignore
          window.twttr.widgets.load(ref.current);
          setLoaded(true);
        }
      }, 600);
      return () => clearTimeout(t);
    }
    if (embed.type === "instagram") {
      loadScriptOnce(
        "https://www.instagram.com/embed.js",
        "instagram-embed-js",
      );
      const t = setTimeout(() => {
        // @ts-ignore
        if (window.instgrm?.Embeds) window.instgrm.Embeds.process();
        setLoaded(true);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [embed]);

  if (embed.type === "youtube") {
    const id = youTubeId(embed.url);
    if (!id) {
      return (
        <a
          href={embed.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-md border border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground hover:text-foreground"
        >
          Watch on YouTube ↗
        </a>
      );
    }
    return (
      <div className="overflow-hidden rounded-md border border-border bg-black aspect-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  if (embed.type === "twitter") {
    return (
      <div
        ref={ref}
        className="quest-embed-x rounded-md border border-border bg-card/40 backdrop-blur-sm p-3 min-h-[120px]"
      >
        <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
          <a href={embed.url}>{loaded ? "" : "Loading post…"}</a>
        </blockquote>
      </div>
    );
  }

  // instagram
  return (
    <div
      ref={ref}
      className="quest-embed-ig rounded-md border border-border bg-card/40 backdrop-blur-sm p-3 min-h-[120px]"
    >
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={embed.url}
        data-instgrm-version="14"
        style={{ background: "transparent", margin: 0, width: "100%" }}
      >
        <a href={embed.url} target="_blank" rel="noopener noreferrer">
          {loaded ? "" : "Loading reel…"}
        </a>
      </blockquote>
    </div>
  );
}
