"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, 6000);
    return () => window.clearInterval(id);
  }, [paused, next]);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="relative bg-sapphire-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Succès Clients</span>
          <h2 className="section-heading mt-5">Des Résultats Qui Parlent d&apos;Eux-Mêmes.</h2>
        </ScrollReveal>

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Témoignages clients"
        >
          <div className="glass-panel relative overflow-hidden p-8 shadow-glow sm:p-12">
            <Quote className="h-10 w-10 text-aqua-400/40" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                aria-live="polite"
              >
                <p className="mt-4 text-balance text-lg leading-relaxed text-white/85 sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-aqua-400 to-lime-400 font-display text-sm font-bold text-sapphire-950"
                  >
                    {active.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{active.name}</p>
                    <p className="text-xs text-white/55">
                      {active.role}, {active.company}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Témoignage précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-aqua-400/50 hover:text-aqua-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Afficher le témoignage de ${t.name}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-aqua-400" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Témoignage suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-aqua-400/50 hover:text-aqua-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
