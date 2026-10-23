"use client";

import { useEffect, useRef } from "react";
import {
motion,
useInView,
useMotionValue,
useSpring,
useTransform,
} from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { googleRating } from "@/lib/constants";

function AnimatedRating() {
const ref = useRef<HTMLSpanElement>(null);
const inView = useInView(ref, { once: true, margin: "-10% 0px" });
const motionValue = useMotionValue(0);
const spring = useSpring(motionValue, { duration: 1.2, bounce: 0 });
const display = useTransform(spring, (v) => v.toFixed(1));

useEffect(() => {
if (inView) motionValue.set(googleRating.value);
}, [inView, motionValue]);

return <motion.span ref={ref}>{display}</motion.span>;
}

function AnimatedReviewCount() {
const ref = useRef<HTMLSpanElement>(null);
const inView = useInView(ref, { once: true, margin: "-10% 0px" });
const motionValue = useMotionValue(0);
const spring = useSpring(motionValue, { duration: 1.2, bounce: 0 });
const display = useTransform(spring, (v) => Math.round(v));

useEffect(() => {
if (inView) motionValue.set(googleRating.count);
}, [inView, motionValue]);

return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Testimonials() {
return (
<section id="testimonials" className="relative overflow-hidden bg-sapphire-gradient py-24 sm:py-32">
<div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
<div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
<ScrollReveal className="mx-auto max-w-2xl">
<span className="eyebrow">Avis Vérifiés</span>
<h2 className="section-heading mt-5">
Noté 5 Étoiles par Nos Clients sur Google.
</h2>
<p className="mt-5 text-lg text-white/80">
Pas de témoignages inventés ici — juste notre fiche Google, à jour,
que vous pouvez consulter et compléter vous-même.
</p>
</ScrollReveal>

<ScrollReveal delay={0.1}>
<a
href={googleRating.url}
target="_blank"
rel="noopener noreferrer"
className="glass-panel group mt-12 inline-flex flex-col items-center gap-5 px-10 py-10 transition-transform duration-300 hover:-translate-y-1 sm:px-16"
>
<div className="flex items-center gap-1" aria-hidden="true">
{Array.from({ length: 5 }).map((_, i) => (
<motion.span
key={i}
initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.15 + i * 0.08, type: "spring", stiffness: 260, damping: 14 }}
>
<Star className="h-8 w-8 fill-gold-400 text-gold-400" />
</motion.span>
))}
</div>

<div className="flex items-baseline gap-3">
<span className="font-display text-5xl font-bold text-slate-900 sm:text-6xl">
<AnimatedRating />
</span>
<span className="text-lg font-medium text-slate-500">/ 5</span>
</div>

<p className="text-sm font-semibold uppercase tracking-wide text-sapphire-700">
<AnimatedReviewCount /> avis Google
</p>

<span className="btn-secondary mt-2 inline-flex items-center gap-2 text-sm">
Voir les avis sur Google
<ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
</span>
</a>
</ScrollReveal>
</div>
</section>
);
}
