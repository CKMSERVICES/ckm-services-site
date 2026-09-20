import Image from "next/image";
import { siteConfig } from "@/lib/constants";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "À Propos" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "#quote", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-sapphire-950 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#top" className="inline-flex items-center" aria-label={siteConfig.name}>
              <span className="flex items-center justify-center rounded-xl bg-white p-1.5 shadow-soft">
                <Image
                  src="/brand/logo.png"
                  alt={siteConfig.name}
                  width={38}
                  height={40}
                  className="h-9 w-auto"
                />
              </span>
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
                  <a href={link.href} className="hover:text-white">
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
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                {siteConfig.address.street}, {siteConfig.address.zip}{" "}
                {siteConfig.address.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>
            Basés à {siteConfig.baseCity} — intervention dans toute la
            région parisienne
          </p>
        </div>
      </div>
    </footer>
  );
}
