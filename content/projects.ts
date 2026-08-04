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
  /** Tailwind gradient classes for the card poster (fallback when no posterImage). */
  poster: string;
  /** Optional screenshot for the card + detail hero (path under /public, e.g. "/shots/foo.png").
   *  When set, it replaces the gradient. Same-origin so the strict CSP holds. */
  posterImage?: string;
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
    slug: "pdf-ocr-triage",
    type: "project",
    title: "PDF OCR Triage",
    tagline: "Classify PDFs as text vs scanned and skip OCR on the ones that don't need it.",
    poster: "from-emerald-500 via-teal-500 to-cyan-500",
    posterImage: "/shots/pdf-ocr-triage.png",
    concept:
      "A browser tool that inspects each PDF and decides whether it holds real text or is a scanned image — routing only the scans to paid OCR. Built as a working proof of concept from the firecrawl/pdf-inspector repo.",
    problem:
      "Teams processing invoices, contracts, and forms at volume run every document through paid OCR by default — but a large share already contain selectable text, so that spend is wasted.",
    approach:
      "A single clear prompt turned the repo's core idea into a working single-file demo: it samples each PDF's bytes for embedded-font/text signals versus image-only content, classifies text-based / scanned / mixed with a confidence, routes accordingly, and tallies the OCR cost avoided — entirely client-side, nothing uploaded. Known ceiling: compressed content streams limit raw-byte detection; the production Rust library decompresses them for precision.",
    stack: ["Vanilla JS", "Single-file HTML", "PDF structure heuristics"],
    links: [
      { label: "Source repo: firecrawl/pdf-inspector", href: "https://github.com/firecrawl/pdf-inspector" },
    ],
  },
  {
    slug: "local-agentic-hedge",
    type: "idea",
    title: "Local-model agent loops",
    tagline: "Hedge against AI rate limits by running the bulk loop steps on a local model.",
    poster: "from-amber-500 via-orange-500 to-rose-500",
    posterImage: "/shots/local-agentic-hedge.png",
    concept:
      "An AI agent is a model in a loop — often dozens of calls per task. Route the routine steps to a local model and reserve the frontier API for the hard reasoning: the rate-limit ceiling stops being the bottleneck, and routine work never leaves the machine.",
    problem:
      "Point every agent call at a hosted API and a long-running job throttles itself — you pay to wait in your own queue, and throughput is capped by someone else's quota.",
    approach:
      "Treat the hosted model as the expensive specialist, not the default: parsing, formatting, classifying, and the quick 'is it done yet?' checks run locally; only the hard reasoning and the final answer hit the API. Route by difficulty, not by habit. The honest limit: local models are smaller, so it only pays off when you're clear about which steps actually need the big model.",
    stack: ["Local LLMs", "Agent loops", "Tool-calling"],
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
