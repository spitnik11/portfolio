import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { Offer } from "@/components/offer";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <Offer />

      {/* Closing CTA + contact form */}
      <section id="contact" className="container scroll-mt-24 py-24">
        <div className="relative overflow-hidden rounded-[calc(var(--radius)+0.4rem)] border border-border bg-card px-6 py-16 text-center sm:px-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-2xl">
            <p className="kicker mb-4">Available for work</p>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Have an AI idea worth shipping?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              I take AI projects from a rough concept to a working, deployed product. Send me a note
              below — no email address required.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
