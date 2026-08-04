// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME. Add / remove / reorder objects in `projects` below.
//   • Each object => one cascading card on the landing page.
//   • Each object => one static page at /work/<slug> (the full write-up).
// No component edits needed. `slug` must be unique + url-safe (lowercase, dashes).
//
// `poster` is a Tailwind gradient class string used as the card artwork (fallback
// when no `posterImage`) — no external images, so the strict CSP stays intact.
// `body` is the article: separate paragraphs with a blank line; it renders as flowing prose.
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
  /** One line shown on the card front. */
  tagline: string;
  /** Tailwind gradient classes for the card poster (fallback when no posterImage). */
  poster: string;
  /** Optional screenshot for the card + detail hero (path under /public, e.g. "/shots/foo.png").
   *  When set, it replaces the gradient. Same-origin so the strict CSP holds. */
  posterImage?: string;
  /** One-paragraph lede shown large under the title. */
  concept: string;
  /** The article. Blank-line-separated paragraphs; rendered as flowing prose (no section titles). */
  body: string;
  stack: string[];
  /** Optional outbound links (repo, live demo, source, references…). */
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
      "A browser tool that inspects each PDF, decides whether it holds real text or is a scanned image, and routes only the scans to paid OCR — built as a working proof of concept from the firecrawl/pdf-inspector repo.",
    body: `Most document pipelines OCR everything by default. But a large share of the PDFs a business actually handles — exported invoices, generated contracts, digital statements, anything produced by software rather than a scanner — already carry a real, selectable text layer. Running those through OCR spends money to re-derive text that was sitting right there.

The cost is easy to underestimate because the headline number is small. Plain text OCR runs about $1.50 per 1,000 pages across the major clouds. The bill actually lands on the useful kind of extraction: pulling structured fields off invoices, forms, and tables costs roughly $10 per 1,000 pages and climbs to $65–70 per 1,000 for full forms-plus-tables processing. A team pushing hundreds of thousands of pages a month is paying real money — and pdf-inspector's own figure is that around 54% of a typical corpus can skip OCR entirely.

You don't need to open a document to know which bucket it belongs in; its structure gives it away. A text-based PDF carries embedded fonts and text-drawing operators. A scan is essentially one image per page, flagged by image objects and image filters like DCTDecode or CCITTFax. Sampling those signals classifies a file in tens of milliseconds — no OCR, no rendering, no cost.

The proof of concept is a single-file browser tool built from one clear prompt against the repo. Drop in a batch of PDFs and each is sorted into "has real text — extract it for free" or "this one's a scan — send it to OCR," with a confidence score and a running tally of the OCR spend avoided at your own per-page rate. It runs entirely client-side, so nothing leaves the machine — which matters when the documents are client data.

The browser version has an honest ceiling: it reads the usually-uncompressed object dictionary, so heavily compressed content streams can hide the text operators, where the production Rust library decompresses them for precision. But the point isn't this one tool — it's the pattern. Any team handling invoices, contracts, or forms at scale can put a cheap classification step in front of OCR and turn a flat per-page cost into a per-page decision.`,
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
      "An AI agent is a model in a loop — often dozens of calls per task. Route the routine steps to a local model and keep the frontier API for the hard reasoning: the rate-limit ceiling stops being the bottleneck, and routine work never leaves the machine.",
    body: `An agent isn't one clever request. It's a model in a loop: it plans a step, calls a tool, reads the result, and goes again, often dozens of times before a single task is done. Every one of those steps is an API call, and they're bursty and dependent — each waits on the last.

That's exactly the workload hosted APIs throttle. Providers meter you on several axes at once — requests per minute, tokens per minute, and daily caps — and crossing any one of them returns a 429. The limits are also lower than people expect early on: a fresh Anthropic tier starts around 50 requests per minute, and OpenAI's tiers only widen as your cumulative spend grows. You can be well under your request budget and still hit the token ceiling, and when you do, one throttle stalls the whole chain.

The usual patches keep a run alive without fixing the economics. Exponential backoff and retry-after handling work by making the agent wait — you're paying, in latency and sometimes in duplicated tokens, to sit in your own queue. Gateways that fail over to a second key or model help, but they're still renting someone else's capacity.

The hedge is to treat the hosted model as the expensive specialist, not the default. Most steps in an agent loop are not hard reasoning — they're parsing a response, formatting output, classifying an intent, deciding "is this done yet?". Those can run on a capable local model on hardware you already own, where there's no per-minute ceiling and the marginal call is effectively free. The frontier API is reserved for the genuinely hard reasoning and the final answer. Route by difficulty, not by habit.

What makes this practical now is that 2026's open models — Qwen 3, Llama 3.3, Mistral Small and their peers — do reliable tool-calling, which is the mechanism an agent loop runs on. The payoff is throughput that isn't capped by a vendor's quota, and routine work — often client data — that never leaves the building. The honest limit: local models are smaller, so the whole thing depends on being clear-eyed about which steps actually need the big model. Misroute the hard ones and you've traded a rate-limit problem for a quality one.`,
    stack: ["Local LLMs", "Agent loops", "Tool-calling"],
  },
  {
    slug: "project-two",
    type: "project",
    title: "Project Two",
    tagline: "Another polished build worth clicking into.",
    poster: "from-emerald-500 via-teal-500 to-cyan-500",
    concept: "Short pitch for the second featured project — what it is and why it matters.",
    body: `Replace this with the full write-up: open with the problem in plain terms, then walk through how you approached it and what the build actually does.

Keep it a single flowing article — a few short paragraphs a visitor would genuinely read — rather than labelled sections. Separate paragraphs with a blank line.`,
    stack: ["Python", "FastAPI", "Postgres", "LLM agents"],
    links: [{ label: "GitHub", href: "https://github.com/your-handle/project-two" }],
  },
  {
    slug: "project-three",
    type: "project",
    title: "Project Three",
    tagline: "Show range — a different kind of build.",
    poster: "from-amber-500 via-orange-500 to-rose-500",
    concept: "Short pitch for the third featured project — what it is and why it matters.",
    body: `Replace this with the full write-up for the third project.

A blank line starts a new paragraph. Aim for a readable article, not a spec sheet.`,
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
      "A retrieval-augmented assistant that sits on top of your internal knowledge — SOPs, runbooks, past tickets, Notion and Drive — and gives employees instant, sourced answers instead of pinging a teammate or digging through wikis.",
    body: `Teams lose hours every week re-answering the same questions and hunting for information scattered across tools. New hires ramp slowly; experts get interrupted constantly. The knowledge already exists — it just isn't reachable at the moment someone needs it.

A knowledge copilot closes that gap by grounding the model in your own material. The approach: ingest and chunk your documents, embed them into a vector store, and retrieve the most relevant passages at query time so the assistant answers only from your content — with citations back to the source, so an answer can be trusted and checked.

It deploys where people already work — a Slack bot or a web widget — rather than as one more tab to open. RAG-powered internal assistants have been shown to cut support resolution time by roughly half; the work worth paying for is scoping the right data sources, the retrieval quality, and the guardrails that keep it from answering when it shouldn't.`,
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
      "An agent that watches your support or IT queue, classifies each new ticket by intent and priority, routes it to the right owner, and drafts a first response — resolving the routine tier-1 requests automatically.",
    body: `Manual triage is slow and inconsistent. Tickets sit unassigned, priorities get missed, and agents burn time on password resets and FAQs instead of the hard cases. Response times slip, and customers feel it.

A triage agent puts a classification step at the front of the queue. It uses a model with function-calling to label, prioritize, and summarize each ticket, then acts through your helpdesk's API — Zendesk, Freshservice, ServiceNow — auto-answering known issues from a knowledge base and escalating the rest with the context already attached.

Leading teams report response times cut by well over half once routine tier-1 work is handled automatically. The engineering that matters is the classifier's accuracy, the guardrails around what it's allowed to answer, and a human-in-the-loop review for anything it isn't sure about.`,
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
