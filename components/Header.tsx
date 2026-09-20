"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { siteConfig } from "@/lib/constants";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Pourquoi Nous" },
  { href: "#process", label: "Processus" },
  { href: "#testimonials", label: "Résultats" },
  { href: "#quality", label: "Standards" },
  { href: "#faq", label: "FAQ" },
];

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.05, delayChildren: 0.08 },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-sapphire-950/75 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-sky-400 via-sapphire-300 to-gold-400"
        aria-hidden="true"
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <motion.a
          href="#top"
          className="flex items-center"
          aria-label={siteConfig.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <span className="flex items-center justify-center rounded-xl bg-white p-1.5 shadow-soft">
            <Image
              src="/brand/logo.png"
              alt={siteConfig.name}
              width={38}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </span>
        </motion.a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium text-white/75 transition-colors duration-200 hover:text-gold-300"
            >
              {link.label}
              <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-gold-300"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <motion.a
            href="#quote"
            className="btn-primary !px-5 !py-2.5 text-xs"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Devis Gratuit
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="overflow-hidden border-t border-white/10 bg-sapphire-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={mobileLinkVariants}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#quote"
                variants={mobileLinkVariants}
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Devis Gratuit
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
