"use client";

import { Building2, Handshake, PiggyBank, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

const points = [
  {
    icon: Building2,
    title: "Elevate Your Business Image",
    body: "A spotless environment isn't just clean — it's a statement. It's the first impression your clients get, and the daily boost your team deserves. We don't just clean; we craft an atmosphere of professionalism.",
  },
  {
    icon: Handshake,
    title: "Experience the Difference",
    body: "We don't just offer services; we offer solutions that save you time, reduce overhead, and project an unparalleled standard of excellence. Choose us and gain a strategic partner dedicated to your success.",
  },
  {
    icon: PiggyBank,
    title: "Beyond Clean: Financial Intelligence",
    body: "Professional cleaning services can be a real advantage for your business. Our tailored solutions are designed to optimize your operational budget — talk to your accountant about potential tax-deductible benefits. Invest in cleanliness, invest in growth.",
  },
  {
    icon: Users,
    title: "A Team That Defines Excellence",
    body: "Our meticulous, fully vetted professionals are the heart of our service — artisans of hygiene, trained in the latest eco-friendly techniques. We attract the best because we are the best, and that dedication shows in every result.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-sapphire-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(34,221,198,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-heading mt-5">
            Unlock Unmatched Cleanliness &amp; Unbeatable Value.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Say yes to a smarter, cleaner business — and a partner that treats
            your facility like it&apos;s their own.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {points.map((point, index) => (
            <ScrollReveal key={point.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <GlassCard className="group h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400/20 to-lime-400/20 text-aqua-300">
                  <point.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
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
