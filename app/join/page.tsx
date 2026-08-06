"use client";

import { useEffect } from "react";
import { site } from "@/content/site";

// /join now forwards to the live Kit lead-magnet page (the real list). Keeps old links working.
export default function JoinPage() {
  useEffect(() => {
    window.location.replace(site.leadMagnetUrl);
  }, []);

  return (
    <section className="container flex min-h-[70vh] max-w-xl flex-col items-center justify-center py-24 text-center">
      <p className="kicker mb-4">Redirecting…</p>
      <p className="text-lg text-muted-foreground">
        Taking you to the free guide. If it doesn&apos;t open,{" "}
        <a href={site.leadMagnetUrl} className="text-primary underline-offset-4 hover:underline">
          click here
        </a>
        .
      </p>
    </section>
  );
}
