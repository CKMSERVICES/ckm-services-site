"use client";

import {
  Building2,
  Sparkles,
  AppWindow,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import { services } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Sparkles,
  AppWindow,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-sapphire-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-heading mt-5">
            A Complete Cleaning Program, Under One Roof.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            From daily office cleaning to specialized disinfection, every
            service is built around your facility&apos;s real-world demands.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <ScrollReveal key={service.slug} delay={(index % 3) * 0.1}>
                <GlassCard className="group flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400/20 to-lime-400/20 text-aqua-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                    {service.description}
                  </p>
                  <a
                    href="#quote"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-aqua-300 transition-colors hover:text-lime-300"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
