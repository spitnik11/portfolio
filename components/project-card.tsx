"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/projects";

// Deterministic (SSR-safe) poster heights so the columns cascade at varied
// heights without Math.random — random would cause a hydration mismatch.
const HEIGHTS = ["h-56", "h-72", "h-64", "h-80", "h-60"];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const height = HEIGHTS[index % HEIGHTS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-6 break-inside-avoid"
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.25),0_24px_60px_-24px_hsl(var(--primary)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Poster — a screenshot when provided, else the gradient. */}
        <div className={`relative w-full overflow-hidden ${height}`}>
          {project.posterImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.posterImage}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.poster} transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          <div className="absolute left-4 top-4">
            <Badge variant={project.type === "idea" ? "muted" : "default"} className="kicker !text-[0.62rem] backdrop-blur">
              {project.type}
            </Badge>
          </div>
          <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 translate-y-1 text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white" />
        </div>

        <div className="p-5 text-center">
          <h3 className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70 transition-colors group-hover:text-primary">
            View under the hood
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
