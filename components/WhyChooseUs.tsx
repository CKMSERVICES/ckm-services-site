"use client";

import { Building2, Handshake, PiggyBank, Users } from "lucide-react";
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

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {points.map((point, index) => (
            <ScrollReveal key={point.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <GlassCard className="group h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sapphire-50 text-sapphire-600">
                  <point.icon className="h-6 w-6" aria-hidden="true" />
                </div>
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
