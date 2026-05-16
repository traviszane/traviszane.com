import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const links = [
  { href: "https://x.com/travontheweb", label: "X / Twitter", Icon: Twitter },
  { href: "https://www.instagram.com/travis_zane/", label: "Instagram", Icon: Instagram },
  { href: "https://www.youtube.com/@TravisZane", label: "YouTube", Icon: Youtube },
  { href: "https://www.linkedin.com/in/traviszane/", label: "LinkedIn", Icon: Linkedin },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={"flex items-center gap-3 " + className}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}
