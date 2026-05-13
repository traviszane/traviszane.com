import type { CharacterId } from "@/lib/characters";

// Static class strings so Tailwind's content scanner picks them up.
export const accent: Record<
  CharacterId,
  {
    text: string;
    bg: string;
    bgSoft: string;
    border: string;
    borderSoft: string;
    dot: string;
    gradient: string;
    selection: string;
    hoverText: string;
    hoverBorder: string;
    hoverBg: string;
  }
> = {
  writer: {
    text: "text-writer",
    bg: "bg-writer",
    bgSoft: "bg-writer/10",
    border: "border-writer",
    borderSoft: "border-writer/30",
    dot: "bg-writer",
    gradient: "from-writer/25 to-transparent",
    selection: "selection:bg-writer/30",
    hoverText: "hover:text-writer",
    hoverBorder: "hover:border-writer/60",
    hoverBg: "hover:bg-writer/5",
  },
  marketer: {
    text: "text-marketer",
    bg: "bg-marketer",
    bgSoft: "bg-marketer/10",
    border: "border-marketer",
    borderSoft: "border-marketer/30",
    dot: "bg-marketer",
    gradient: "from-marketer/25 to-transparent",
    selection: "selection:bg-marketer/30",
    hoverText: "hover:text-marketer",
    hoverBorder: "hover:border-marketer/60",
    hoverBg: "hover:bg-marketer/5",
  },
  creator: {
    text: "text-creator",
    bg: "bg-creator",
    bgSoft: "bg-creator/10",
    border: "border-creator",
    borderSoft: "border-creator/30",
    dot: "bg-creator",
    gradient: "from-creator/25 to-transparent",
    selection: "selection:bg-creator/30",
    hoverText: "hover:text-creator",
    hoverBorder: "hover:border-creator/60",
    hoverBg: "hover:bg-creator/5",
  },
};
