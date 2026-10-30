"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock, MapPin, Sparkles } from "lucide-react";
import { siteConfig, trustPoints } from "@/lib/constants";

const iconMap = { BadgeCheck, Clock, MapPin };

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const orb1X = useTransform(springX, [-1, 1], [-24, 24]);
  const orb1Y = useTransform(springY, [-1, 1], [-24, 24]);
  const orb2X = useTransform(springX, [-1, 1], [18, -18]);
  const orb2Y = useTransform(springY, [-1, 1], [18, -18]);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-sapphire-gradient pb-20 pt-32"
    >
      {/* Layered background: gradient + soft light circles, matching CKM's brand visuals */}
      <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute -left-20 top-16 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow inline-flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-300 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          Basés à {siteConfig.baseCity} — intervention Paris & Île-de-France
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Un Nettoyage Commercial{" "}
          <span className="text-gradient-gold">d&apos;Exception</span>, Pensé
          Pour Votre Performance.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-lg text-white/80"
        >
          Bureaux, commerces et sites industriels : des programmes de
          nettoyage écologiques, méticuleux, chaque jour.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a href="#quote" className="btn-primary">
            Obtenez Votre Devis Gratuit
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#services" className="btn-secondary-dark">
            Découvrir Nos Services
          </a>
        </motion.div>

        {/* Trust pills — the 3 real reasons to choose CKM, premium centered row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {trustPoints.map((point) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <motion.div
                key={point.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="panel-dark flex flex-col items-center gap-2 px-5 py-6 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-gold-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-white">{point.title}</p>
                <p className="text-xs text-white/60">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
