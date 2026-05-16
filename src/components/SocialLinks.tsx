import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

function SubstackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 4h16v2.667H4V4zm0 4.667h16v2.666H4V8.667zM4 13.333h16V22l-8-4.444L4 22v-8.667z" />
    </svg>
  );
}

const links: { href: string; label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { href: "https://www.instagram.com/travis_zane/", label: "Instagram", Icon: Instagram },
  { href: "https://sleepoverxyz.substack.com", label: "Substack newsletter", Icon: SubstackIcon },
  { href: "https://x.com/travontheweb", label: "X / Twitter", Icon: Twitter },
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
