"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

export default function GlassCard({
children,
className,
hover = true,
}: {
children: ReactNode;
className?: string;
hover?: boolean;
}) {
return (
<motion.div
whileHover={
hover
? { y: -8, scale: 1.015, transition: { type: "spring", stiffness: 300, damping: 22 } }
: undefined
}
whileTap={hover ? { scale: 0.99 } : undefined}
className={clsx("glass-card p-6 sm:p-8", className)}
>
{children}
</motion.div>
);
}
