"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a href="#top" className="flex items-center" aria-label={siteConfig.name}>
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
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-gold-300"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <a href="#quote" className="btn-primary !px-5 !py-2.5 text-xs">
            Devis Gratuit
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-sapphire-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Devis Gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
