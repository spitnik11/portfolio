"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "ok" | "error";

const configured =
  !!site.web3formsKey && !site.web3formsKey.startsWith("YOUR_");

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: bots fill hidden fields.
    if (data.botcheck) return;

    if (!configured) {
      setError("The contact form isn't configured yet. Please reach out on LinkedIn.");
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
          subject: "New inquiry from your portfolio",
          from_name: "Portfolio contact form",
          name: data.name || "Anonymous visitor",
          email: data.email || undefined, // optional — visitors need not provide one
          message: data.message,
        }),
      });
      if (res.ok) {
        form.reset();
        setStatus("ok");
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-[var(--radius)] border border-primary/40 bg-primary/5 px-8 py-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <p className="font-display text-xl font-medium">Message sent</p>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <Button variant="ghost" size="sm" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-md text-left">
      {/* Honeypot — hidden from humans, catches bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4">
        <input
          name="name"
          type="text"
          placeholder="Your name (optional)"
          className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
        />
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
          />
          <p className="mt-1.5 text-center text-xs text-muted-foreground">
            Only if you&apos;d like a reply — not required to send.
          </p>
        </div>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you trying to build or improve?"
          className="w-full resize-y rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
        />
      </div>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-rose-400">{error}</p>
      )}

      <div className="mt-5 flex justify-center">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <Send />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
