"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="container flex min-h-[82vh] flex-col items-center justify-center py-24 text-center">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
        <motion.div variants={item} className="mb-8 flex items-center justify-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            {site.available && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            )}
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                site.available ? "bg-primary" : "bg-muted-foreground"
              }`}
            />
          </span>
          <span className="kicker !text-foreground">
            {site.available ? site.availableText : "Not currently available"}
          </span>
        </motion.div>

        <motion.p variants={item} className="kicker mb-5">
          {site.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl md:text-7xl"
        >
          {site.headline}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {site.subhead}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#work">
              See the work <ArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">
              Start a project <ArrowUpRight />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
