import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";

// One static page per project entry — shareable URLs, no server needed.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.name}`,
    description: project.concept,
  };
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-10">
      <p className="kicker mb-4">{label}</p>
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="container max-w-3xl py-16">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to work
      </Link>

      {/* Hero poster echoes the card's design idea */}
      <div className={`mt-8 h-48 w-full rounded-[var(--radius)] bg-gradient-to-br ${project.poster}`} />

      <div className="mt-8 flex items-center justify-center gap-3">
        <Badge variant={project.type === "idea" ? "muted" : "default"} className="kicker !text-[0.62rem]">
          {project.type}
        </Badge>
      </div>

      <h1 className="mt-4 text-center font-display text-4xl font-medium tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-center text-xl leading-relaxed text-foreground/85">
        {project.concept}
      </p>

      <div className="mt-10">
        <Section label="The problem">{project.problem}</Section>
        <Section label="Under the hood">{project.approach}</Section>

        <div className="border-t border-border py-10">
          <p className="kicker mb-4">Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s} variant="outline" className="font-mono text-xs">
                {s}
              </Badge>
            ))}
          </div>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="border-t border-border py-10">
            <p className="kicker mb-4">Proof of concept</p>
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 border-t border-border pt-10 text-center">
        <p className="text-muted-foreground">
          Want something like this built?{" "}
          <a href="/#contact" className="text-primary underline-offset-4 hover:underline">
            Get in touch
          </a>
          .
        </p>
      </div>
    </article>
  );
}
