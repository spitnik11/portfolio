// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME. This file controls the site identity, hero copy, and contact links.
// Nothing else needs touching to rebrand the site.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Your Name",
  role: "AI Consultant",
  // Short headline shown large in the hero. Keep it punchy.
  headline: "I build AI tools that ship.",
  // One or two sentences under the headline.
  subhead:
    "Independent AI consultant. I design, prototype, and deploy practical AI systems — from idea to a link you can click. Available for new work.",
  // Set false to show a muted "not currently available" state instead of the green dot.
  available: true,
  availableText: "Available for new projects",

  // Contact — mailto keeps the site fully static (no form endpoint to secure).
  email: "you@example.com",

  // Social / proof links. Remove any you don't want; the header maps over these.
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "X", href: "https://x.com/your-handle" },
  ],
} as const;
