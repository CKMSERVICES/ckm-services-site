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

// Doubled for a seamless, continuous loop (track scrolls exactly -50%).
const track = [...services, ...services];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-sapphire-gradient py-24 sm:py-32">
      <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nos Services</span>
          <h2 className="section-heading mt-5">
            Un Programme de Nettoyage Complet, Sous Un Seul Toit.
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Du nettoyage quotidien de bureaux au post-chantier, chaque
            service est conçu autour des besoins réels de votre site.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} className="relative mt-16">
        <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee gap-6 group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
            {track.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Sparkles;
              return (
                <GlassCard
                  key={`${service.slug}-${index}`}
                  className="group flex h-full w-[280px] flex-shrink-0 flex-col items-center text-center sm:w-[320px]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sapphire-50 text-sapphire-600 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <a
                    href="#quote"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sapphire-600 transition-colors hover:text-sapphire-800"
                  >
                    En savoir plus
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
