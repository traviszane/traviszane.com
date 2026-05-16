import {
  BookOpen,
  Music,
  Film,
  Newspaper,
  Disc3,
  Wine,
  Sun,
  Star,
  Moon,
  Waves,
  TreePine,
  Rabbit,
} from "lucide-react";
import { Flipbook } from "./Flipbook";

// Pokéball as a small inline SVG (no lucide equivalent)
function Pokeball({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="21" y2="12" />
      <circle cx="12" cy="12" r="2.4" />
    </svg>
  );
}

type OrbitItem = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const items: OrbitItem[] = [
  { label: "capybara", Icon: Rabbit },
  { label: "book", Icon: BookOpen },
  { label: "music", Icon: Music },
  { label: "film", Icon: Film },
  { label: "zine", Icon: Newspaper },
  { label: "pokeball", Icon: Pokeball },
  { label: "disco ball", Icon: Disc3 },
  { label: "wine", Icon: Wine },
  { label: "sun", Icon: Sun },
  { label: "star", Icon: Star },
  { label: "moon", Icon: Moon },
  { label: "wave", Icon: Waves },
  { label: "tree", Icon: TreePine },
];

export function FlipbookOrbit() {
  const N = items.length;
  // Elliptical radii (a bit wider than tall so it hugs the photo block)
  const rx = 175;
  const ry = 215;

  return (
    <div
      className="relative mx-auto"
      style={{
        width: "min(440px, 90vw)",
        aspectRatio: "5 / 7",
        maxHeight: "62vh",
      }}
    >
      {/* Rotating orbit ring */}
      <div className="absolute inset-0 anim-orbit pointer-events-none" aria-hidden>
        {items.map((it, i) => {
          const angle = (i / N) * 2 * Math.PI;
          const x = Math.cos(angle) * rx;
          const y = Math.sin(angle) * ry;
          return (
            <div
              key={it.label}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              {/* counter-rotate so icons stay upright */}
              <div className="anim-orbit-counter">
                <div
                  className="anim-orbit-bob flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-background/70 text-primary shadow-[0_0_12px_color-mix(in_oklab,var(--primary)_30%,transparent)] backdrop-blur-sm"
                  style={{ animationDelay: `${(i * 0.27).toFixed(2)}s` }}
                  title={it.label}
                >
                  <it.Icon className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Centered flipbook */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Flipbook />
      </div>
    </div>
  );
}
