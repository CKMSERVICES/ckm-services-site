import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock,
  MapPin,
  Sparkles,
  AppWindow,
  ClipboardCheck,
  HardHat,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig, services, faqs } from "@/lib/constants";
import { locations, getLocation } from "@/lib/locations";

const iconMap = { Building2, Sparkles, AppWindow, ClipboardCheck, HardHat };

export function generateStaticParams() {
  return locations.map((location) => ({ ville: location.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { ville: string };
}): Metadata {
  const location = getLocation(params.ville);
  if (!location) return {};

  const title = `Nettoyage de Bureaux à ${location.name} (${location.zip})`;
  const description = `Entretien de bureaux, commerces et locaux professionnels à ${location.name}. Devis gratuit sous 48h, sans engagement long, produits écologiques certifiés.`;

  return {
    title,
    description,
    alternates: { canonical: `/nettoyage-bureaux/${location.slug}` },
    openGraph: { type: "website", title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function VillePage({ params }: { params: { ville: string } }) {
  const location = getLocation(params.ville);
  if (!location) notFound();

  const title = `Nettoyage de Bureaux à ${location.name}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: `${siteConfig.url}/nettoyage-bureaux/${location.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Nettoyage de bureaux et de locaux professionnels",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: { "@type": "City", name: location.name },
  };

  const localFaqs = [
    {
      question: `Intervenez-vous vraiment à ${location.name} ?`,
      answer: `Oui, ${location.name} fait partie de notre zone d'intervention régulière. Nous sommes basés à ${siteConfig.baseCity} (92), à proximité directe.`,
    },
    ...faqs.slice(0, 3),
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        <section className="relative overflow-hidden bg-sapphire-gradient pb-16 pt-36">
          <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="eyebrow inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {location.name} ({location.zip})
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-balance text-lg text-white/80">
              {location.intro}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/#quote" className="btn-primary">
                Obtenez Votre Devis Gratuit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-secondary-dark">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow-dark">Nos Services à {location.name}</span>
              <h2 className="section-heading-dark mt-5">
                Un Entretien Complet, Adapté à Votre Site.
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Sparkles;
                return (
                  <ScrollReveal key={service.slug} delay={(index % 3) * 0.1}>
                    <div className="tint-card flex h-full flex-col items-center text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sapphire-100 text-sapphire-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal>
              <div className="mt-16 flex flex-col items-center gap-3 rounded-2xl bg-sapphire-50/70 px-6 py-8 text-center">
                <Clock className="h-6 w-6 text-sapphire-700" aria-hidden="true" />
                <p className="text-lg font-semibold text-sapphire-900">
                  Devis gratuit sous 48h, sans engagement long
                </p>
                <p className="max-w-xl text-sm text-slate-600">
                  Décrivez votre local à {location.name} par téléphone, WhatsApp
                  ou via le formulaire — vous recevez un chiffrage clair,
                  rapidement.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-16">
              <h2 className="text-center text-2xl font-semibold text-sapphire-900">
                Questions fréquentes — {location.name}
              </h2>
              <div className="mt-8 space-y-6">
                {localFaqs.map((faq) => (
                  <ScrollReveal key={faq.question}>
                    <div className="border-b border-slate-100 pb-6">
                      <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{faq.answer}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal>
              <div className="mt-16 rounded-2xl bg-sapphire-gradient p-8 text-center shadow-soft sm:p-10">
                <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
                  Un devis gratuit et personnalisé sous 48h
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-balance text-white/80">
                  Pour votre local à {location.name}, sans engagement.
                </p>
                <Link href="/#quote" className="btn-primary mt-6 inline-flex">
                  Obtenez Votre Devis Gratuit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="mt-14 text-center text-sm text-slate-500">
                Également présents à :{" "}
                {location.neighbors.map((slug, index) => {
                  const neighbor = getLocation(slug);
                  if (!neighbor) return null;
                  return (
                    <span key={slug}>
                      <Link
                        href={`/nettoyage-bureaux/${neighbor.slug}`}
                        className="font-semibold text-sapphire-700 hover:underline"
                      >
                        {neighbor.name}
                      </Link>
                      {index < location.neighbors.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
