"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2, Handshake, PiggyBank, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

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

        {/* Checklist showcase — what's covered on every visit */}
        <ScrollReveal className="mt-14">
          <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sapphire-500">
              À Chaque Intervention
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
              {checklist.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8, x: -8 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-2.5"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      delay: index * 0.08 + 0.15,
                    }}
                  >
                    <CheckCircle2
                      className="h-5 w-5 flex-shrink-0 text-sapphire-600"
                      aria-hidden="true"
                    />
                  </motion.span>
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {points.map((point, index) => (
            <ScrollReveal key={point.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <GlassCard className="group flex h-full flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-sapphire-50 text-sapphire-600"
                >
                  <point.icon className="h-6 w-6" aria-hidden="true" />
                </motion.div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {point.body}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
