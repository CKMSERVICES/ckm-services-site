"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { processSteps } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Notre Processus</span>
          <h2 className="section-heading mt-5">
            Du Premier Appel à un Espace Impeccable.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Un parcours simple et transparent, pensé pour éliminer les zones
            d&apos;ombre — et livrer des résultats visibles dès le premier jour.
          </p>
        </ScrollReveal>

        <div className="relative mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px lg:block" aria-hidden="true">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full origin-left bg-gradient-to-r from-gold-400 via-gold-300 to-gold-100"
            />
          </div>

          {processSteps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.12} className="relative">
              <div className="flex flex-col items-start">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white font-display text-xl font-bold text-gold-600 shadow-soft">
                  {step.step}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
