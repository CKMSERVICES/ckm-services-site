"use client";

import { motion } from "framer-motion";
import {
Leaf,
ShieldCheck,
BadgeCheck,
ClipboardCheck,
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
ClipboardCheck,
Users,
ThumbsUp,
};

export default function QualityAssurance() {
return (
<section id="quality" className="relative overflow-hidden bg-white py-24 sm:py-32">
<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
<ScrollReveal className="mx-auto max-w-2xl text-center">
<span className="eyebrow-dark">Le Standard CKM</span>
<h2 className="section-heading-dark mt-5">
La Qualité, la Sécurité &amp; la Durabilité, Toujours.
</h2>
<p className="mt-5 text-lg text-slate-600">
Chaque équipe, chaque produit et chaque protocole répond à un
standard que nous appelons Le Standard CKM — parce que
« suffisamment bien » ne l&apos;est jamais.
</p>
</ScrollReveal>

<div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
{qualityBadges.map((badge, index) => {
const Icon = iconMap[badge.icon] ?? ShieldCheck;
return (
<ScrollReveal key={badge.label} delay={index * 0.06}>
<motion.div
whileHover={{ y: -4 }}
transition={{ type: "spring", stiffness: 300, damping: 18 }}
className="flex h-full flex-col items-center gap-3 rounded-2xl border border-sapphire-100 bg-sapphire-50/50 p-5 text-center shadow-soft transition-colors duration-300 hover:border-sapphire-200 hover:bg-white hover:shadow-elevate"
>
<motion.span
whileHover={{ scale: 1.15, rotate: 8 }}
transition={{ type: "spring", stiffness: 300, damping: 12 }}
className="flex h-12 w-12 items-center justify-center rounded-full bg-sapphire-100 text-sapphire-700"
>
<Icon className="h-6 w-6" aria-hidden="true" />
</motion.span>
<p className="text-xs font-semibold leading-snug text-slate-700">
{badge.label}
</p>
</motion.div>
</ScrollReveal>
);
})}
</div>
</div>
</section>
);
}
