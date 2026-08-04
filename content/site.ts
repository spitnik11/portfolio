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
    "I'm an AI consultant. I design and deploy practical AI systems that automate the busywork, speed up your workflows, and turn ideas into tools you can actually use. Available for new projects.",
  // Set false to show a muted "not currently available" state instead of the green dot.
  available: true,
  availableText: "Available for new projects",

  // Where inquiries land. Used by the contact form (via Web3Forms) and footer.
  email: "losthero11@yahoo.com",

  // ── Contact form (Web3Forms) ────────────────────────────────────────────────
  // Lets visitors message you WITHOUT giving their own email, with no backend.
  // ONE-TIME SETUP (2 min, free, no account):
  //   1. Go to https://web3forms.com
  //   2. Enter your email (losthero11@yahoo.com) and click "Create Access Key"
  //   3. Copy the access key they email you and paste it below.
  // The key is safe to expose publicly — it only forwards messages to your inbox.
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",

  // Social / proof links. Remove any you don't want; the header maps over these.
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-pina-498023113/" },
    { label: "GitHub", href: "https://github.com/spitnik11" },
  ],
} as const;
