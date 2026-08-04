import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />

      {/* Closing CTA */}
      <section className="container py-24">
        <div className="relative overflow-hidden rounded-[calc(var(--radius)+0.4rem)] border border-border bg-card px-8 py-16 sm:px-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="relative max-w-2xl">
            <p className="kicker mb-4">Available for work</p>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Have an AI idea worth shipping?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              I take AI projects from a rough concept to a working, deployed product. Tell me what
              you&apos;re trying to build.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href={`mailto:${site.email}`}>
                Email {site.name.split(" ")[0]} <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
