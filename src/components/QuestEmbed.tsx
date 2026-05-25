import { useEffect, useRef, useState } from "react";

export type Embed =
  | { type: "twitter"; url: string }
  | { type: "youtube"; url: string }
  | { type: "instagram"; url: string }
  | { type: "image-link"; url: string; image: string; alt?: string };

function instagramEmbedSrc(url: string): string | null {
  try {
    const parsed = new URL(url);
    const cleanPath = parsed.pathname.replace(/\/+$/, "");

    if (!cleanPath.startsWith("/p/") && !cleanPath.startsWith("/reel/")) {
      return null;
    }

    return `https://www.instagram.com${cleanPath}/embed/captioned/`;
  } catch {
    return null;
  }
}

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
  }, [embed]);

  if (embed.type === "image-link") {
    return (
      <a
        href={embed.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-md border border-border bg-card/40 backdrop-blur-sm transition hover:border-foreground/40"
      >
        <img
          src={embed.image}
          alt={embed.alt ?? "Instagram post"}
          loading="lazy"
          className="block w-full h-auto"
        />
      </a>
    );
  }

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
  const embedSrc = instagramEmbedSrc(embed.url);

  if (!embedSrc) {
    return (
      <a
        href={embed.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-md border border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground hover:text-foreground"
      >
        View Instagram post ↗
      </a>
    );
  }

  return (
    <div
      ref={ref}
      className="quest-embed-ig overflow-hidden rounded-md border border-border bg-card/40 backdrop-blur-sm"
    >
      <iframe
        src={embedSrc}
        title="Instagram post"
        loading="lazy"
        allowTransparency
        className="block min-h-[720px] w-full border-0 bg-background"
      />
    </div>
  );
}
