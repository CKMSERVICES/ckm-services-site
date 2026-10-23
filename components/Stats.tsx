"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { stats } from "@/lib/constants";

function AnimatedStatValue({ value }: { value: string }) {
// Tous les hooks sont appelés inconditionnellement (règles des Hooks React)
// — on calcule d'abord un préfixe numérique par défaut, puis on choisit
// l'affichage au moment du render.
const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
const numberPart = match ? match[1] : "0";
const suffix = match ? match[2] : "";
const target = parseFloat(numberPart);
const hasDecimal = numberPart.includes(".");

const ref = useRef<HTMLSpanElement>(null);
const inView = useInView(ref, { once: true, margin: "-10% 0px" });
const motionValue = useMotionValue(0);
const spring = useSpring(motionValue, { duration: 1.1, bounce: 0 });
const display = useTransform(spring, (v) =>
hasDecimal ? v.toFixed(1) : Math.round(v).toString()
);

useEffect(() => {
if (inView) motionValue.set(target);
}, [inView, motionValue, target]);

if (!match) {
// Pas de préfixe numérique (ne devrait pas arriver avec les données
// actuelles) — on affiche simplement la valeur telle quelle.
return <span ref={ref}>{value}</span>;
}

return (
<span ref={ref}>
<motion.span>{display}</motion.span>
{suffix}
</span>
);
}

export default function Stats() {
return (
<section className="relative overflow-hidden bg-white py-20 sm:py-24">
<div className="relative mx-auto max-w-6xl px-6 lg:px-8">
<div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
{stats.map((stat, index) => (
<ScrollReveal key={stat.label} delay={index * 0.08} className="text-center">
<p className="font-display text-4xl font-bold text-sapphire-700 sm:text-5xl">
<AnimatedStatValue value={stat.value} />
</p>
<p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm">
{stat.label}
</p>
</ScrollReveal>
))}
</div>
</div>
</section>
);
}
