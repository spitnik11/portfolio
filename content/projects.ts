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
    slug: "knowledge-copilot",
    type: "idea",
    title: "Knowledge Copilot",
    tagline: "A grounded AI assistant that answers from your company's own docs.",
    poster: "from-sky-500 via-blue-500 to-indigo-500",
    concept:
      "A retrieval-augmented (RAG) assistant that sits on top of your internal knowledge — SOPs, runbooks, past tickets, Notion and Drive — and gives employees instant, sourced answers instead of pinging a teammate or digging through wikis.",
    problem:
      "Teams lose hours every week re-answering the same questions and hunting for information scattered across tools. New hires ramp slowly; experts get interrupted constantly. The knowledge exists — it just isn't reachable at the moment someone needs it.",
    approach:
      "Ingest and chunk your documents, embed them into a vector store (e.g. pgvector), and retrieve the most relevant passages at query time so the model answers only from your material — with citations back to the source. Deploys as a Slack bot or web widget. RAG-powered internal assistants are shown to cut support resolution time by roughly half; I scope the right data sources and guardrails for your stack.",
    stack: ["RAG", "Embeddings", "pgvector", "OpenAI / Claude", "Slack API"],
    links: [
      {
        label: "Reference: RAG cuts resolution time ~50%",
        href: "https://www.cloudjournee.com/blog/how-rag-powered-ai-is-cutting-support-ticket-resolution-time-by-50/",
      },
    ],
  },
  {
    slug: "ticket-triage-agent",
    type: "idea",
    title: "Ticket Triage Agent",
    tagline: "AI that reads every incoming ticket, tags it, and drafts the reply.",
    poster: "from-fuchsia-500 via-pink-500 to-rose-500",
    concept:
      "An agent that watches your support or IT queue, classifies each new ticket by intent and priority, routes it to the right owner, and drafts a first-response — resolving the routine tier-1 requests automatically.",
    problem:
      "Manual triage is slow and inconsistent: tickets sit unassigned, priorities get missed, and agents burn time on password resets and FAQs instead of the hard cases. Response times slip and customers feel it.",
    approach:
      "Use an LLM with function-calling to label, prioritize, and summarize each ticket, then act through your helpdesk's API (Zendesk, Freshservice, ServiceNow) — auto-answering known issues from a knowledge base and escalating the rest with context attached. Leading teams report 70%+ faster response times and high tier-1 auto-resolution; I build the classifier, the guardrails, and the human-in-the-loop review.",
    stack: ["LLM function-calling", "Zendesk / ServiceNow API", "n8n", "Python"],
    links: [
      {
        label: "Reference: AI triage cut response times 73%",
        href: "https://www.usefini.com/blog/ai-ticket-triage-automation",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
