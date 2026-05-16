import { useEffect, useState } from "react";
import p1 from "@/assets/about/p1.jpg";
import p2 from "@/assets/about/p2.jpg";
import p3 from "@/assets/about/p3.jpg";
import p4 from "@/assets/about/p4.png";
import p5 from "@/assets/about/p5.png";
import p6 from "@/assets/about/p6.png";

const photos = [p1, p2, p3, p4, p5, p6];

export function Flipbook() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % photos.length);
    }, 650);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      {/* Inline SVG duotone filters: dark mode = bg + orange, light mode = white + purple */}
      <svg width="0" height="0" aria-hidden className="absolute">
        <defs>
          <filter id="duotone-dark" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0    0    0    1 0"
            />
            <feComponentTransfer>
              {/* 0 -> deep near-black, 1 -> warm orange */}
              <feFuncR tableValues="0.05 1.00" />
              <feFuncG tableValues="0.04 0.58" />
              <feFuncB tableValues="0.08 0.22" />
            </feComponentTransfer>
          </filter>
          <filter id="duotone-light" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0    0    0    1 0"
            />
            <feComponentTransfer>
              {/* 0 -> purple, 1 -> white */}
              <feFuncR tableValues="0.42 1.0" />
              <feFuncG tableValues="0.28 1.0" />
              <feFuncB tableValues="0.66 1.0" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div className="relative mx-auto w-full max-w-sm">
        {/* CRT bezel */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-border bg-card/60 shadow-[0_0_40px_color-mix(in_oklab,var(--primary)_25%,transparent)]">
          {/* Stacked images, fade between */}
          <div className="absolute inset-0 flipbook-duotone">
            {photos.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt=""
                aria-hidden={idx !== i}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-150"
                style={{ opacity: idx === i ? 1 : 0 }}
                loading="lazy"
                draggable={false}
              />
            ))}
          </div>

          {/* Scanline overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-70"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px)",
            }}
          />
          {/* Vignette + CRT curvature glow */}
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
            className="pointer-events-none absolute inset-x-0 h-8 opacity-30 flipbook-sweep"
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
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Frame {String(i + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </>
  );
}
