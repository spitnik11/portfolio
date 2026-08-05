import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SubscribeForm } from "@/components/subscribe-form";
import { site } from "@/content/site";
import { emphasize, stripEmphasis } from "@/lib/emphasis";

const magnet = site.leadMagnet;

export const metadata: Metadata = {
  title: `${stripEmphasis(magnet.headline)} — ${site.name}`,
  description: stripEmphasis(magnet.subhead),
};

// Bolis-style lead-magnet landing: one promise, one email field, one free tool.
// Link this from your LinkedIn "Featured" section and the end of posts.
export default function JoinPage() {
  return (
    <section className="container flex min-h-[80vh] max-w-2xl flex-col justify-center py-20 text-center">
      <p className="kicker mb-4 justify-center">{magnet.kicker}</p>
      <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
        {emphasize(magnet.headline)}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        {emphasize(magnet.subhead)}
      </p>

      <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left">
        {magnet.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="mt-1 h-4 w-4 flex-none text-primary" />
            <span className="text-foreground/90">{emphasize(b)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <SubscribeForm />
      </div>
    </section>
  );
}
