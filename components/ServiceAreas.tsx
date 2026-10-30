import Link from "next/link";
import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { locations } from "@/lib/locations";

export default function ServiceAreas() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-dark">Zones d&apos;Intervention</span>
          <h2 className="section-heading-dark mt-5">
            Présents Partout en Île-de-France.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Basés à Nanterre, actifs dans tout le 92 et à Paris.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/nettoyage-bureaux/${location.slug}`}
                className="tint-card inline-flex items-center gap-2 !p-4 text-sm font-semibold text-sapphire-800"
              >
                <MapPin className="h-4 w-4 text-sapphire-600" aria-hidden="true" />
                {location.name}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
