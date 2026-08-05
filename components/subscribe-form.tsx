"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "ok" | "error";

const configured = !!site.web3formsKey && !site.web3formsKey.startsWith("YOUR_");
const magnet = site.leadMagnet;

// Lead-magnet capture. Uses the same Web3Forms key as the contact form; subscribers land in the
// inbox tagged "subscriber" (filter/export, migrate to a real ESP later). On success it delivers
// the free tool. Same-origin fetch to Web3Forms is already allowed by the CSP connect-src.
export function SubscribeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.botcheck) return; // honeypot

    if (!configured) {
      setError("Sign-up isn't wired up yet. Reach out on LinkedIn and I'll send it over.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: "New subscriber — lead magnet",
          from_name: "Portfolio lead magnet",
          list: "subscriber",
          name: data.name || "(no name)",
          email: data.email,
        }),
      });
      if (res.ok) {
        setStatus("ok");
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.message || "Something went wrong — please try again.");
        setStatus("error");
      }
    } catch {
      setError("Couldn't reach the server — please try again.");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-[var(--radius)] border border-primary/40 bg-primary/5 px-8 py-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <p className="font-display text-xl font-medium">You&apos;re in.</p>
        <p className="text-sm text-muted-foreground">
          Here&apos;s the tool — bookmark it, it runs entirely in your browser.
        </p>
        <Button asChild size="lg" className="mt-2">
          <a href={magnet.magnetUrl} target="_blank" rel="noopener noreferrer">
            {magnet.magnetLabel} <ArrowUpRight />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-md">
      {/* honeypot */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-3">
        <input
          name="name"
          type="text"
          placeholder="First name (optional)"
          className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
        />
      </div>
      {status === "error" && <p className="mt-3 text-center text-sm text-rose-400">{error}</p>}
      <div className="mt-4 flex justify-center">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" /> Sending…
            </>
          ) : (
            <>{magnet.buttonLabel} <ArrowUpRight /></>
          )}
        </Button>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam. Unsubscribe anytime. Just the tool and the occasional build worth stealing.
      </p>
    </form>
  );
}
