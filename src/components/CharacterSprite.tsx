import { cn } from "@/lib/utils";
import type { Character } from "@/lib/characters";

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
  const color = `var(${character.colorVar})`;

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
      <img
        src={character.sprite}
        alt={`${character.name}, ${character.className} sprite`}
        className={cn(
          "relative pixelated object-contain anim-idle drop-shadow-[0_18px_24px_rgba(0,0,0,0.55)]",
          sizeMap[size],
        )}
        loading="lazy"
        width={512}
        height={512}
      />
    </div>
  );
}
