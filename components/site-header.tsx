import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px] shadow-primary/60" />
          <span className="font-display text-lg font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4">
          {site.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="kicker rounded-full border border-border px-3 py-1.5 !text-[0.68rem] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
