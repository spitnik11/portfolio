"use client";

import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/project-card";
import { projects, type ProjectType } from "@/content/projects";

type Filter = "all" | ProjectType;

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.type === filter)),
    [filter]
  );

  return (
    <section id="work" className="container scroll-mt-24 py-20">
      <div className="mb-10 flex flex-col items-center gap-6 text-center">
        <div>
          <p className="kicker mb-3">Selected work</p>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Projects &amp; ideas
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Each card opens into a full write-up on the idea — the thinking, the research, and how
            it works.
          </p>
        </div>
        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="project">Projects</TabsTrigger>
            <TabsTrigger value="idea">Ideas</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* CSS columns = cascading masonry. Cards use break-inside-avoid. */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
