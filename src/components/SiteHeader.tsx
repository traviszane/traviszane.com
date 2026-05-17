import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "./SocialLinks";

export function SiteHeader() {
  return (
    <header className="relative z-30 flex items-center justify-between gap-4 px-6 py-5 md:px-10">
      <Link
        to="/"
        className="font-display text-xl uppercase italic tracking-wide text-foreground hover:text-primary transition-colors"
      >
        <span className="text-primary">◆</span>&nbsp;TRAVIS&nbsp;ZANE
      </Link>

      <SocialLinks className="absolute left-1/2 -translate-x-1/2 hidden sm:flex" />

      <div className="flex items-center gap-3">
        <Link
          to="/about"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
