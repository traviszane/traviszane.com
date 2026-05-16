import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Character } from "@/lib/characters";
import { useTheme } from "./ThemeProvider";

interface Props {
  character: Character;
  size?: "md" | "lg" | "xl";
  active?: boolean;
}

const sizeMap = {
  md: "h-56",
  lg: "h-full w-auto max-h-full",
  xl: "h-[28rem]",
};

export function CharacterSprite({ character, size = "lg", active = false }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isPainterly = !isDark;
  const color = `var(${character.colorVar})`;
  const src = character.sprite;
  const hasVideo = !!character.painterlyVideo;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  // Drive playback from card hover (`active`)
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !hasVideo) return;
    if (active) {
      v.currentTime = 0;
      v.muted = muted;
      void v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [active, hasVideo, muted]);


  // Sailor-Moon style transformation between modes
  const [transforming, setTransforming] = useState(false);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setTransforming(true);
    const t = window.setTimeout(() => setTransforming(false), 1000);
    return () => window.clearTimeout(t);
  }, [isPainterly]);

  return (
    <div className="relative flex items-end justify-center w-full h-full">
      <div
        aria-hidden
        className={cn(
          "absolute bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-12 rounded-[50%] blur-2xl transition-opacity duration-500",
          active ? "opacity-90 anim-glow" : "opacity-40",
        )}
        style={{ background: color }}
      />
      <div
        aria-hidden
        className={cn(
          "absolute bottom-2 left-1/2 -translate-x-1/2 w-[78%] h-3 rounded-full opacity-70",
          active && "anim-flicker",
        )}
        style={{
          background: `radial-gradient(ellipse, ${color} 0%, transparent 70%)`,
        }}
      />

      {/* Ambient drifting particles (painterly atmosphere) */}
      {isPainterly && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {[
            { left: "20%", top: "70%", dx: "30px", dy: "-180px", delay: "0s", size: 3 },
            { left: "35%", top: "85%", dx: "-40px", dy: "-220px", delay: "1.4s", size: 2 },
            { left: "60%", top: "75%", dx: "50px", dy: "-200px", delay: "2.6s", size: 3 },
            { left: "75%", top: "80%", dx: "-20px", dy: "-260px", delay: "3.8s", size: 2 },
            { left: "50%", top: "65%", dx: "20px", dy: "-240px", delay: "5s", size: 2 },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full anim-drift"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                background: color,
                boxShadow: `0 0 8px ${color}`,
                ["--dx" as string]: p.dx,
                ["--dy" as string]: p.dy,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      )}

      {hasVideo ? (
        <div className={cn("relative", sizeMap[size])}>
          <img
            key={src}
            src={src}
            alt={`${character.name}, ${character.className} sprite`}
            className={cn(
              "relative h-full w-auto max-h-full object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)] pixelated anim-idle transition-opacity duration-500",
              active && "opacity-0",
              transforming && "anim-transform-in",
            )}
            width={512}
            height={512}
          />
          <video
            ref={videoRef}
            key={character.painterlyVideo}
            src={character.painterlyVideo}
            loop
            playsInline
            preload="auto"
            className={cn(
              "absolute inset-0 h-full w-full object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)] transition-opacity duration-500",
              active ? "opacity-100" : "opacity-0",
            )}
            width={512}
            height={512}
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMuted((m) => !m);
            }}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className={cn(
              "absolute bottom-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background/80 text-foreground/80 backdrop-blur-sm transition-opacity hover:text-primary",
              active ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      ) : (
        <img
          key={src}
          src={src}
          alt={`${character.name}, ${character.className} sprite`}
          className={cn(
            "relative object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)] pixelated anim-idle",
            sizeMap[size],
            transforming && "anim-transform-in",
          )}
          width={512}
          height={512}
        />
      )}

      {/* Sailor-Moon transformation flash + sparkles */}
      {transforming && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 anim-transform-flash"
            style={{
              background: `radial-gradient(circle at 50% 55%, ${color} 0%, color-mix(in oklab, ${color} 40%, transparent) 30%, transparent 65%)`,
              mixBlendMode: "screen",
            }}
          />
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = (i / 14) * Math.PI * 2;
            const dist = 120 + (i % 3) * 30;
            const sx = Math.cos(angle) * dist;
            const sy = Math.sin(angle) * dist;
            const sz = 4 + (i % 3) * 2;
            return (
              <span
                key={i}
                className="absolute top-1/2 left-1/2 rounded-full anim-sparkle"
                style={{
                  width: sz,
                  height: sz,
                  background: "white",
                  boxShadow: `0 0 12px 2px ${color}, 0 0 4px white`,
                  animationDelay: `${(i % 5) * 40}ms`,
                  ["--sx" as string]: `${sx}px`,
                  ["--sy" as string]: `${sy}px`,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
