// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME. Add / remove / reorder objects in `projects` below.
//   • Each object => one cascading card on the landing page.
//   • Each object => one static page at /work/<slug> (the "under the hood" view).
// No component edits needed. `slug` must be unique + url-safe (lowercase, dashes).
//
// `poster` is a Tailwind gradient class string used as the card artwork — no
// external images, so the strict Content-Security-Policy stays intact. Swap in
// your own `from-…/to-…` colors freely.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectType = "project" | "idea";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  type: ProjectType;
  title: string;
  /** One line shown on the card front — the "design idea". */
  tagline: string;
  /** Tailwind gradient classes for the card poster. */
  poster: string;
  /** Short pitch shown at the top of the detail page. */
  concept: string;
  /** Under-the-hood sections. */
  problem: string;
  approach: string;
  stack: string[];
  /** Optional outbound links (live demo, GitHub, writeup…). */
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "project-one",
    type: "project",
    title: "Project One",
    tagline: "A one-line hook describing the front-end idea.",
    poster: "from-indigo-500 via-violet-500 to-fuchsia-500",
    concept:
      "Replace this with a 2–3 sentence pitch: what it is, who it's for, and why the design works. This text sits under the hero of the detail page.",
    problem:
      "What problem does it solve? Describe the pain point in a couple of sentences so a visitor immediately gets the 'why'.",
    approach:
      "How you built it under the hood: architecture, key decisions, the proof-of-concept. This is the 'reveal' a curious visitor came for.",
    stack: ["Next.js", "TypeScript", "Tailwind", "OpenAI API"],
    links: [
      { label: "Live demo", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/your-handle/project-one" },
    ],
  },
  {
    slug: "project-two",
    type: "project",
    title: "Project Two",
    tagline: "Another polished build worth clicking into.",
    poster: "from-emerald-500 via-teal-500 to-cyan-500",
    concept: "Short pitch for the second featured project.",
    problem: "The problem this one tackles.",
    approach: "The implementation story and proof of concept.",
    stack: ["Python", "FastAPI", "Postgres", "LLM agents"],
    links: [{ label: "GitHub", href: "https://github.com/your-handle/project-two" }],
  },
  {
    slug: "project-three",
    type: "project",
    title: "Project Three",
    tagline: "Show range — a different kind of build.",
    poster: "from-amber-500 via-orange-500 to-rose-500",
    concept: "Short pitch for the third featured project.",
    problem: "The problem this one tackles.",
    approach: "The implementation story and proof of concept.",
    stack: ["React", "WebGL", "Node"],
    links: [{ label: "Case study", href: "https://example.com" }],
  },
  {
    slug: "idea-one",
    type: "idea",
    title: "Idea One",
    tagline: "A concept you're exploring, not yet shipped.",
    poster: "from-sky-500 via-blue-500 to-indigo-500",
    concept: "Pitch the idea. Ideas signal where your thinking is headed.",
    problem: "The gap in the market or workflow this idea would fill.",
    approach: "Your proposed approach and any early prototype notes.",
    stack: ["Concept", "Prototype"],
  },
  {
    slug: "idea-two",
    type: "idea",
    title: "Idea Two",
    tagline: "Another direction on the whiteboard.",
    poster: "from-fuchsia-500 via-pink-500 to-rose-500",
    concept: "Pitch the second idea.",
    problem: "What it would solve.",
    approach: "Early thinking on how you'd build it.",
    stack: ["Concept"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
