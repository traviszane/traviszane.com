import type { Character, Project } from "@/lib/characters";
import { accent } from "@/lib/accent";

export function ProjectTile({
  character,
  project,
  index,
}: {
  character: Character;
  project: Project;
  index: number;
}) {
  const a = accent[character.id];
  return (
    <article
      className={`group relative flex flex-col border border-border bg-white/[0.02] p-6 transition-colors ${a.hoverBg} ${a.hoverBorder}`}
      style={{
        animation: "slide-in 0.6s var(--ease-arcade) both",
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
        <span>QUEST / {String(index + 1).padStart(2, "0")}</span>
        <span className={a.text}>{project.tag}</span>
      </div>

      <h3
        className={`mb-2 font-display text-2xl uppercase italic leading-tight transition-colors group-hover:${a.text}`}
      >
        {project.title}
      </h3>
      <p className="mb-6 text-sm text-foreground/60">{project.blurb}</p>

      <div className="mt-auto flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
        <span>{project.meta}</span>
        <span
          className={`${a.text} transition-transform group-hover:translate-x-1`}
        >
          ►►
        </span>
      </div>
    </article>
  );
}
