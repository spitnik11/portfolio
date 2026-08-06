// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME. This file controls the site identity, hero copy, and contact links.
// Nothing else needs touching to rebrand the site.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Gabriel Pina",
  role: "AI Consultant · Workflow Automation",
  // Short headline shown large in the hero. Keep it punchy.
  headline: "AI solutions that streamline how your team works.",
  // One or two sentences under the headline.
  subhead:
    "I'm an AI consultant. I design and deploy practical AI systems that *automate the busywork*, *speed up your workflows*, and turn ideas into **tools you can actually use**. Available for new projects.",
  // Set false to show a muted "not currently available" state instead of the green dot.
  available: true,
  availableText: "Available for new projects",

  // Where inquiries land. Used by the contact form (via Web3Forms) and footer.
  email: "losthero11@yahoo.com",

  // The live Kit lead-magnet page — the ONE funnel destination for the offer CTA, footer, and /join.
  leadMagnetUrl: "https://gabrielpina.kit.com/ca3e6533a3",

  // ── Contact form (Web3Forms) ────────────────────────────────────────────────
  // Lets visitors message you WITHOUT giving their own email, with no backend.
  // ONE-TIME SETUP (2 min, free, no account):
  //   1. Go to https://web3forms.com
  //   2. Enter your email (losthero11@yahoo.com) and click "Create Access Key"
  //   3. Copy the access key they email you and paste it below.
  // The key is safe to expose publicly — it only forwards messages to your inbox.
  web3formsKey: "b76ddd2c-ef38-4ac8-aab6-a268894cdc90",

  // ── The offer (services / done-for-you) ─────────────────────────────────────
  // The productized service. ONE clear offer + ONE next step (a booking call).
  // `bookingUrl`: paste your Cal.com (or Calendly) link once you have it. Until then it
  // stays a placeholder and the button falls back to the contact form — the page still works.
  // Emphasis markup (**accent**, *bright*) is supported in headline/body/bullets.
  offer: {
    kicker: "Work with me",
    headline: "I build the AI workflow. You keep the time it saves.",
    body:
      "Most teams don't need a bigger AI subscription — they need one **workflow built right**: the repetitive task automated end to end, so it runs without them. That's what I do, on a *fixed scope* and a *fixed price*.",
    bullets: [
      "A **working tool**, not a slide deck — delivered in about a week",
      "One clear scope, one fixed price — no open-ended retainers to start",
      "Built to run on your stack, handed over with a short walkthrough",
    ],
    // Funnel is list-first (no calls for now): the primary CTA is the free guide.
    // Internal path (/join) or an external https URL both work.
    ctaLabel: "Get the free playbook",
    bookingUrl: "https://gabrielpina.kit.com/ca3e6533a3",
  },

  // ── Lead magnet (the /join page) ────────────────────────────────────────────
  // Bolis-style capture: one promise, one email field, deliver a free tool. Uses the same
  // Web3Forms key (subscribers arrive in your inbox tagged "subscriber" — filter/export them,
  // migrate to Kit/MailerLite later). Emphasis markup supported. Swap the magnet freely.
  leadMagnet: {
    kicker: "Free tool",
    headline: "Find out which PDFs you're **wasting OCR money on** — free.",
    subhead:
      "Drop in a batch of PDFs and this browser tool tells you which already have real text (extract them for free) and which are scans that need OCR — with the spend you'd have wasted. Runs locally, nothing uploaded.",
    bullets: [
      "A **working tool**, not a PDF checklist",
      "Runs in your browser — no signup wall, no upload",
      "Built by my AI workflow — the kind of thing I build for clients",
    ],
    buttonLabel: "Send me the tool",
    // Delivered on the thank-you screen after signup. A file under /public.
    magnetUrl: "/tools/pdf-ocr-triage.html",
    magnetLabel: "Open the PDF OCR-Triage tool",
  },

  // Social / proof links. Remove any you don't want; the header maps over these.
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-pina-498023113/" },
    { label: "GitHub", href: "https://github.com/spitnik11" },
  ],
} as const;
