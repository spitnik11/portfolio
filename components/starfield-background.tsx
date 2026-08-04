"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";

// Site-wide "pretty" background: a subtle twinkling star field with a few shooting-star
// layers streaking across. Mounted once in the layout, fixed to the viewport, BEHIND all
// content (z-0 < content's z-1) and pointer-events:none so it never blocks interaction.
// On-brand colours (lime accent + soft starlight) instead of the demo's neon rainbow.
// Fully self-contained: no external requests, CSP-safe. Shooting stars self-disable under
// prefers-reduced-motion; the twinkle animation is flattened by the global reduced-motion rule.
//
// To remove the effect: delete <StarfieldBackground /> from app/layout.tsx.
// To tune it: edit the layers below, or the `.starfield` rule in app/globals.css.
export function StarfieldBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="starfield" />

      <ShootingStars
        starColor="#c6f622"
        trailColor="#c6f622"
        minSpeed={12}
        maxSpeed={26}
        minDelay={2600}
        maxDelay={6000}
        starWidth={14}
      />
      <ShootingStars
        starColor="#a9c7ff"
        trailColor="#a9c7ff"
        minSpeed={9}
        maxSpeed={20}
        minDelay={3600}
        maxDelay={8000}
        starWidth={12}
      />
      <ShootingStars
        starColor="#b98bff"
        trailColor="#b98bff"
        minSpeed={16}
        maxSpeed={30}
        minDelay={4200}
        maxDelay={9000}
        starWidth={10}
      />
    </div>
  );
}
