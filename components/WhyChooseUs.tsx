"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2, Handshake, PiggyBank, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const points = [
  {
    icon: Building2,
    title: "Valorisez Votre Image",
    body: "Un local impeccable, c'est la première impression de vos clients et la fierté quotidienne de vos équipes.",
  },
  {
    icon: Handshake,
    title: "Vivez la Différence",
    body: "Moins de temps perdu, moins de coûts cachés, plus de sérénité au quotidien.",
  },
  {
    icon: PiggyBank,
    title: "Intelligence Financière",
    body: "Un entretien bien pensé optimise votre budget de fonctionnement — à aborder avec votre comptable.",
  },
  {
    icon: Users,
    title: "Une Équipe d'Excellence",
    body: "Des professionnels sélectionnés, formés aux techniques écologiques les plus récentes.",
  },
];

const checklist = [
  "Dépoussiérage & sols",
  "Sanitaires désinfectés",
  "Vitres intérieures",
  "Poubelles & consommables",
  "Points de contact",
  "Contrôle qualité final",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-sapphire-gradient py-24 sm:py-32">
      <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Pourquoi Nous Choisir</span>
          <h2 className="section-heading mt-5">
            Une Propreté Inégalée &amp; une Valeur Imbattable.
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Un partenaire qui traite vos locaux comme les siens.
          </p>
        </ScrollReveal>

        {/* Checklist showcase — premium glass panel with gradient border frame
            and gold-accented icon badges per item. */}
        <ScrollReveal className="mt-14">
          <div className="relative rounded-[28px] bg-gradient-to-br from-gold-300/60 via-white/20 to-sapphire-200/40 p-px shadow-premium">
            <div className="glass-panel relative overflow-hidden rounded-[27px] border-0 p-6 sm:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sapphire-50 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-gold-400 to-transparent" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sapphire-500">
                  À Chaque Intervention
                </p>
              </div>

              <div className="relative mt-7 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                {checklist.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{ y: -2 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sapphire-600 to-sapphire-800 text-white shadow-soft">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Reveal tiles — title-led by default; hovering (or focusing) a tile
            slides a dark panel up over it to reveal the supporting copy. */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <ScrollReveal key={point.title} delay={index * 0.08}>
              <div
                tabIndex={0}
                className="group relative h-64 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft outline-none transition-shadow duration-300 hover:shadow-premium focus-visible:shadow-premium"
              >
                {/* Default face: icon + title */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3 group-hover:opacity-0 group-focus-visible:-translate-y-3 group-focus-visible:opacity-0">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sapphire-50 text-sapphire-600">
                    <point.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {point.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-sapphire-400">
                    Survolez
                  </span>
                </div>

                {/* Reveal face: slides up from the bottom on hover/focus */}
                <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-sapphire-700 to-sapphire-900 px-6 text-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-gold-300">
                    <point.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    {point.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
