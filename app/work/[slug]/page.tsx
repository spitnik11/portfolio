import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";
import { emphasize, stripEmphasis } from "@/lib/emphasis";

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
    description: stripEmphasis(project.concept),
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const paragraphs = project.body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <article className="container max-w-3xl py-16">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to work
      </Link>

      {/* Hero poster — screenshot when provided, else the gradient */}
      {project.posterImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.posterImage}
          alt={project.title}
          className="mt-8 w-full rounded-[var(--radius)] border border-border"
        />
      ) : (
        <div className={`mt-8 h-48 w-full rounded-[var(--radius)] bg-gradient-to-br ${project.poster}`} />
      )}

      <div className="mt-8 flex items-center justify-center gap-3">
        <Badge variant={project.type === "idea" ? "muted" : "default"} className="kicker !text-[0.62rem]">
          {project.type}
        </Badge>
      </div>

      <h1 className="mt-4 text-center font-display text-4xl font-medium tracking-tight sm:text-5xl">
        {project.title}
      </h1>

      {/* Single flowing article — a readable column, no section labels. */}
      <div className="mx-auto mt-10 max-w-2xl">
        <p className="text-xl leading-relaxed text-foreground/90">{emphasize(project.concept)}</p>
        {paragraphs.map((para, i) => (
          <p key={i} className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {emphasize(para)}
          </p>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <div className="border-t border-border py-8">
          <p className="kicker mb-4">Built with</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s} variant="outline" className="font-mono text-xs">
                {s}
              </Badge>
            ))}
          </div>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="border-t border-border py-8">
            <p className="kicker mb-4">Links</p>
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

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground">
            Want something like this built?{" "}
            <a href="/#contact" className="text-primary underline-offset-4 hover:underline">
              Get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
