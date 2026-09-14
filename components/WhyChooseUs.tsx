"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2, Handshake, PiggyBank, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

const points = [
  {
    icon: Building2,
    title: "Valorisez Votre Image d'Entreprise",
    body: "Un environnement impeccable n'est pas seulement propre — c'est une déclaration. C'est la première impression que reçoivent vos clients, et le coup de fouet quotidien que mérite votre équipe. Nous ne nettoyons pas seulement ; nous façonnons une atmosphère de professionnalisme.",
  },
  {
    icon: Handshake,
    title: "Vivez la Différence",
    body: "Nous ne proposons pas seulement des services ; nous proposons des solutions qui vous font gagner du temps, réduisent vos coûts et projettent un niveau d'excellence inégalé. Choisissez-nous et gagnez un partenaire stratégique dédié à votre réussite.",
  },
  {
    icon: PiggyBank,
    title: "Au-Delà du Propre : Intelligence Financière",
    body: "Des services de nettoyage professionnels peuvent être un véritable atout pour votre entreprise. Nos solutions sur mesure sont conçues pour optimiser votre budget de fonctionnement — parlez-en à votre comptable pour connaître les avantages fiscaux potentiels. Investir dans la propreté, c'est investir dans la croissance.",
  },
  {
    icon: Users,
    title: "Une Équipe qui Définit l'Excellence",
    body: "Nos professionnels méticuleux et rigoureusement sélectionnés sont le cœur de notre service — de véritables artisans de l'hygiène, formés aux techniques écologiques les plus récentes. Nous attirons les meilleurs parce que nous sommes les meilleurs, et ce dévouement se voit dans chaque résultat.",
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
            Dites oui à une entreprise plus intelligente et plus propre — et à
            un partenaire qui traite vos locaux comme les siens.
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
              <GlassCard className="group h-full">
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
