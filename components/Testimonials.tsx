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
    <section id="testimonials" className="relative overflow-hidden bg-sapphire-gradient py-24 sm:py-32">
      <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
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
          <div className="glass-panel relative overflow-hidden p-8 sm:p-12">
            <Quote className="h-10 w-10 text-gold-400" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                aria-live="polite"
              >
                <p className="mt-4 text-balance text-lg leading-relaxed text-slate-800 sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-sapphire-700 font-display text-sm font-bold text-white"
                  >
                    {active.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{active.name}</p>
                    <p className="text-xs text-slate-500">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white/70 transition-colors hover:border-white hover:text-white"
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
                  className={`relative h-2 overflow-hidden rounded-full bg-white/25 transition-all duration-300 ${
                    i === index ? "w-8" : "w-2"
                  }`}
                >
                  {i === index && (
                    <motion.span
                      key={`${index}-progress`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: paused ? 0.3 : 1 }}
                      transition={{ duration: paused ? 0.3 : 6, ease: "linear" }}
                      style={{ transformOrigin: "left" }}
                      className="absolute inset-0 rounded-full bg-white"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Témoignage suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white/70 transition-colors hover:border-white hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
