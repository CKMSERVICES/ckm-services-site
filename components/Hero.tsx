"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig, trustPoints } from "@/lib/constants";

const iconMap = { BadgeCheck, Clock };

export default function Hero() {
  const [pointA, pointB] = trustPoints;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-sapphire-gradient pb-20 pt-32"
    >
      {/* Layered background: gradient + soft light circles, matching CKM's brand visuals */}
      <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
            Basés à {siteConfig.baseCity} — intervention Paris & Île-de-France
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Transformez Votre Espace de Travail : Un Nettoyage Commercial
            d&apos;Exception pour une Performance Optimale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-lg text-white/80"
          >
            Des bureaux d&apos;entreprise aux sites industriels, {siteConfig.shortName}{" "}
            propose des programmes de nettoyage méticuleux et écologiques qui
            protègent votre image, vos équipes et votre rentabilité — chaque jour.
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
              Entièrement Assurés
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-white" aria-hidden="true" />
              Sans Engagement Long
            </div>
          </motion.div>
        </div>

        {/* Showcase panel highlighting CKM's real value props */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="panel-dark relative aspect-[4/5] overflow-hidden p-1">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-sapphire-800 via-sapphire-900 to-sapphire-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_55%)]" />
              <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6">
                {[pointA, pointB].map((point) => {
                  const Icon = iconMap[point.icon as keyof typeof iconMap];
                  return (
                    <div key={point.title} className="panel-dark flex items-center gap-3 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {point.title}
                        </p>
                        <p className="text-xs text-white/60">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Floating badge — the third real trust point */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="panel-dark absolute -left-6 -top-6 hidden w-48 p-4 sm:block"
          >
            <p className="text-lg font-bold text-white">
              {trustPoints[2].title}
            </p>
            <p className="text-xs text-white/60">{trustPoints[2].description}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
