import { Facebook, Instagram, Linkedin, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "À Propos" },
  { href: "#quote", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-sapphire-950 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400 to-lime-400 text-sapphire-950">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              {siteConfig.shortName}
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Liens Rapides
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/55">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-aqua-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/55">
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-aqua-300">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-aqua-300">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                {siteConfig.address.street}, {siteConfig.address.zip}{" "}
                {siteConfig.address.city}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Suivez-Nous
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-aqua-400/50 hover:text-aqua-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-aqua-400/50 hover:text-aqua-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-aqua-400/50 hover:text-aqua-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>Zones desservies : {siteConfig.serviceAreas.join(", ")}</p>
        </div>
      </div>
    </footer>
  );
}
