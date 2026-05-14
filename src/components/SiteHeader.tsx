import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="relative z-30 flex items-center justify-between px-6 py-5 md:px-10">
      <Link
        to="/"
        className="font-display text-xl uppercase italic tracking-wide text-foreground hover:text-primary transition-colors"
      >
        <span className="text-primary">◆</span>&nbsp;CHOOSE&nbsp;YOUR&nbsp;STORY
      </Link>
      <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <Link to="/about" className="hover:text-foreground transition-colors">
          About
        </Link>
        <span>Save&nbsp;Slot&nbsp;01</span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary anim-glow inline-block" />
          Online
        </span>
      </nav>
    </header>
  );
}
