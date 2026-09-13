"use client";

import {
  Leaf,
  ShieldCheck,
  BadgeCheck,
  Award,
  Users,
  ThumbsUp,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { qualityBadges } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  ShieldCheck,
  BadgeCheck,
  Award,
  Users,
  ThumbsUp,
};

export default function QualityAssurance() {
  return (
    <section id="quality" className="relative overflow-hidden bg-sapphire-gradient py-24 sm:py-32">
      <div className="noise-layer absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The Sparkle Standard</span>
          <h2 className="section-heading mt-5">
            Our Commitment to Quality, Safety &amp; Sustainability.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Every crew, every product, and every protocol is held to a
            standard we call The Sparkle Standard — because good enough never
            is.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {qualityBadges.map((badge, index) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <ScrollReveal key={badge.label} delay={index * 0.06}>
                <div className="glass-panel flex h-full flex-col items-center gap-3 p-5 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-aqua-400/20 to-lime-400/20 text-aqua-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-semibold leading-snug text-white/80">
                    {badge.label}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
