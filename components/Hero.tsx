"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-sapphire-gradient pb-20 pt-32"
    >
      {/* Layered background: gradient, radial glow, noise */}
      <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
      <div className="noise-layer absolute inset-0" aria-hidden="true" />

      {/* Floating glass orbs suggesting droplets of light */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-aqua-400/20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-16 top-1/3 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle sparkle accents */}
      {[
        { top: "18%", left: "12%", delay: 0 },
        { top: "68%", left: "8%", delay: 0.6 },
        { top: "30%", left: "88%", delay: 1.1 },
        { top: "72%", left: "84%", delay: 0.3 },
      ].map((pos, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute animate-sparkle text-gold-300/70"
          style={{ top: pos.top, left: pos.left, animationDelay: `${pos.delay}s` }}
        >
          <Sparkles className="h-4 w-4" />
        </span>
      ))}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow-dark inline-flex items-center gap-1.5"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Basés à {siteConfig.baseCity} — intervention Paris & Île-de-France
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Transformez Votre Espace de Travail :{" "}
            <span className="text-gold-300">
              Un Nettoyage Commercial d&apos;Exception
            </span>{" "}
            pour une Performance Optimale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-lg text-white/70"
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
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/60"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gold-300" aria-hidden="true" />
              Entièrement Assurés
            </div>
            <div className="flex items-center gap-2">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-300 text-gold-300" />
                ))}
              </div>
              Noté 4,9/5 par les gestionnaires de sites
            </div>
          </motion.div>
        </div>

        {/* Glassmorphism showcase panel standing in for hero imagery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="panel-dark relative aspect-[4/5] overflow-hidden p-1">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-sapphire-800 via-sapphire-900 to-aqua-900/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(223,163,46,0.18),transparent_55%)]" />
              <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6">
                <div className="panel-dark flex items-center gap-3 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/20 text-gold-300">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      98% de Fidélisation Client
                    </p>
                    <p className="text-xs text-white/60">Une confiance qui dure</p>
                  </div>
                </div>
                <div className="panel-dark flex items-center gap-3 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-300">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Produits Éco-Certifiés
                    </p>
                    <p className="text-xs text-white/60">Sûrs pour vos équipes et la planète</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="panel-dark absolute -left-6 -top-6 hidden w-44 p-4 sm:block"
          >
            <p className="text-2xl font-bold text-gold-300">500+</p>
            <p className="text-xs text-white/60">Sites entretenus chaque jour</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
