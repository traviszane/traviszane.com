import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import p1 from "@/assets/about/p1.png";
import p2 from "@/assets/about/p2.png";
import p3 from "@/assets/about/p3.png";
import p4 from "@/assets/about/p4.jpg";
import p5 from "@/assets/about/p5.jpg";
import p6 from "@/assets/about/p6.jpg";
import p7 from "@/assets/about/p7.jpg";
import p8 from "@/assets/about/p8.jpeg";
import p9 from "@/assets/about/p9.jpg";
import p10 from "@/assets/about/p10.jpg";
import p11 from "@/assets/about/p11.jpeg";
import p12 from "@/assets/about/p12.jpg";
import p13 from "@/assets/about/p13.jpg";
import p14 from "@/assets/about/p14.jpg";

const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14];

const INTERVAL_MS = 3500;

export function Flipbook() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % photos.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [playing]);

  const prev = () => setI((v) => (v - 1 + photos.length) % photos.length);
  const next = () => setI((v) => (v + 1) % photos.length);

  return (
    <div className="mx-auto w-full max-w-sm">
      {/* CRT bezel */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-border bg-card/60 shadow-[0_0_40px_color-mix(in_oklab,var(--primary)_25%,transparent)]">
        {/* Stacked images, fade between */}
        <div className="absolute inset-0">
          {photos.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden={idx !== i}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              style={{
                opacity: idx === i ? 1 : 0,
                filter: "saturate(0.85) contrast(1.05)",
              }}
              loading="lazy"
              draggable={false}
            />
          ))}
        </div>

        {/* Tinted color wash — keeps photo color but pulls toward theme */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-color opacity-30"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 70%, transparent), color-mix(in oklab, var(--primary) 30%, transparent))",
          }}
        />

        {/* Scanline overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px)",
          }}
        />

        {/* Vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        {/* Faint horizontal scan sweep */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 h-8 opacity-25 flipbook-sweep"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--primary) 50%, transparent), transparent)",
          }}
        />

        {/* HUD corners */}
        <span aria-hidden className="absolute top-2 left-2 size-3 border-t border-l border-primary/70" />
        <span aria-hidden className="absolute top-2 right-2 size-3 border-t border-r border-primary/70" />
        <span aria-hidden className="absolute bottom-2 left-2 size-3 border-b border-l border-primary/70" />
        <span aria-hidden className="absolute bottom-2 right-2 size-3 border-b border-r border-primary/70" />

        {/* Frame counter */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          Frame {String(i + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="flex h-9 w-9 items-center justify-center border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause auto-loop" : "Play auto-loop"}
          className="flex h-9 items-center gap-2 border border-border px-3 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70 transition-colors hover:border-primary hover:text-primary"
        >
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {playing ? "Auto" : "Paused"}
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="flex h-9 w-9 items-center justify-center border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
