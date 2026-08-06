import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { emphasize } from "@/lib/emphasis";

// The productized-service section: one clear offer + one next step (book a call).
// Backwards-compatible: renders nothing if `site.offer` is removed; the CTA falls back to the
// contact form until a real booking URL is set, so the page always works.
export function Offer() {
  const offer = site.offer;
  if (!offer) return null;

  const href = offer.bookingUrl && !offer.bookingUrl.includes("your-handle") ? offer.bookingUrl : "#contact";
  const external = /^https?:\/\//.test(href); // only real URLs open in a new tab; /join and #contact stay in-page

  return (
    <section id="work-with-me" className="container scroll-mt-24 py-20">
      <div className="relative overflow-hidden rounded-[calc(var(--radius)+0.4rem)] border border-border bg-card px-6 py-14 sm:px-14 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-2xl">
          <p className="kicker mb-4">{offer.kicker}</p>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            {emphasize(offer.headline)}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{emphasize(offer.body)}</p>

          <ul className="mt-8 grid gap-3">
            {offer.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 flex-none text-primary" />
                <span className="text-foreground/90">{emphasize(b)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {offer.ctaLabel} <ArrowUpRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Or send a note</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
