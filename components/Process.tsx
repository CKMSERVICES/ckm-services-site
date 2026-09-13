"use client";

import ScrollReveal from "./ScrollReveal";
import { processSteps } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-sapphire-gradient py-24 sm:py-32">
      <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Comment Ça Marche ?</span>
          <h2 className="section-heading mt-5">
            Du Premier Message à un Espace Impeccable.
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Un parcours simple et transparent, pensé pour éliminer les zones
            d&apos;ombre — et livrer des résultats visibles dès le premier jour.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.1}>
              <div className="glass-card h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sapphire-700 font-display text-lg font-bold text-white">
                  {index + 1}
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
