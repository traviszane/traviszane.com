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
  lg: "h-24 sm:h-32 md:h-44 lg:h-56",
  xl: "h-[28rem]",
};

export function CharacterSprite({ character, size = "lg", active = false }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isPainterly = !isDark;
  const color = `var(${character.colorVar})`;
  const src = isPainterly ? character.spriteDark : character.sprite;

  return (
    <div className="relative flex items-end justify-center w-full">
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

      <img
        src={src}
        alt={`${character.name}, ${character.className} sprite`}
        className={cn(
          "relative object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)]",
          sizeMap[size],
          isPainterly ? "anim-wind" : "pixelated anim-idle",
        )}
        loading="lazy"
        width={512}
        height={512}
      />
    </div>
  );
}
