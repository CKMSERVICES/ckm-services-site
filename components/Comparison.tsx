"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { comparisonPoints, siteConfig } from "@/lib/constants";

export default function Comparison() {
return (
<section className="relative overflow-hidden bg-white py-24 sm:py-32">
<div className="relative mx-auto max-w-5xl px-6 lg:px-8">
<ScrollReveal className="mx-auto max-w-2xl text-center">
<span className="eyebrow-dark">La Différence CKM</span>
<h2 className="section-heading-dark mt-5">
Ce Qui Change Par Rapport à une Prestation Classique.
</h2>
<p className="mt-5 text-lg text-slate-600">
Pas besoin de tout casser pour mieux nettoyer — juste d&apos;éliminer
les frictions habituelles du secteur.
</p>
</ScrollReveal>

<ScrollReveal delay={0.1}>
<div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
<div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:text-sm sm:tracking-normal">
<div className="px-3 py-2.5 sm:px-5 sm:py-3">Besoin</div>
<div className="px-3 py-2.5 text-center sm:px-5 sm:py-3">Approche Classique</div>
<div className="relative px-3 py-2.5 text-center text-sapphire-700 sm:px-5 sm:py-3">
{siteConfig.shortName} Services
</div>
</div>

{comparisonPoints.map((row, index) => (
<motion.div
key={row.need}
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.07, duration: 0.4 }}
className={`grid grid-cols-3 text-xs leading-snug sm:text-sm ${
index % 2 === 0 ? "bg-white" : "bg-slate-50/60"
}`}
>
<div className="px-3 py-2.5 font-medium text-slate-900 sm:px-5 sm:py-3">
{row.need}
</div>
<div className="flex items-start gap-1.5 px-3 py-2.5 text-slate-500 sm:px-5 sm:py-3">
<X className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-300" aria-hidden="true" />
<span>{row.traditional}</span>
</div>
<div className="flex items-start gap-1.5 bg-sapphire-50/40 px-3 py-2.5 text-slate-800 sm:px-5 sm:py-3">
<Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sapphire-600" aria-hidden="true" />
<span>{row.ckm}</span>
</div>
</motion.div>
))}
</div>
</ScrollReveal>
</div>
</section>
);
}
