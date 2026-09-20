import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/constants";

const title =
  "Prix du Nettoyage Professionnel en Île-de-France : Le Guide des Tarifs 2026";
const description =
  "Entretien de bureaux, nettoyage ponctuel, vitres, fin de chantier : les fourchettes de prix constatées en Île-de-France, ce qui fait varier un devis, et comment obtenir un tarif juste.";
const publishedDate = "2026-09-20";
const slug = "prix-nettoyage-professionnel-ile-de-france";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `/blog/${slug}`,
  },
  openGraph: {
    type: "article",
    title,
    description,
    publishedTime: publishedDate,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: `${siteConfig.url}/og-image.jpg`,
  datePublished: publishedDate,
  dateModified: publishedDate,
  inLanguage: "fr-FR",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/brand/logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/blog/${slug}`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: title, item: `${siteConfig.url}/blog/${slug}` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi les prix de nettoyage professionnel varient-ils autant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le tarif dépend surtout de la surface, de la fréquence des passages, de l'état des lieux, du type de sol et du niveau de prestation demandé (entretien courant, grand ménage, fin de chantier). Un devis personnalisé reste la seule façon d'avoir un chiffre fiable.",
      },
    },
    {
      "@type": "Question",
      name: "Existe-t-il un tarif minimum par intervention ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, la plupart des prestataires fixent un forfait plancher (souvent autour de 60 à 80 €) pour les petites interventions, afin de couvrir le déplacement et le temps minimum sur site.",
      },
    },
    {
      "@type": "Question",
      name: "Le devis inclut-il les produits et le matériel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chez CKM Services, oui : nos équipes arrivent avec leur propre matériel professionnel et leurs produits certifiés écologiques, déjà inclus dans le prix.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on obtenir un tarif dégressif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, un contrat récurrent (plusieurs passages par semaine ou engagement mensuel) permet généralement d'obtenir un tarif préférentiel par rapport à une intervention ponctuelle.",
      },
    },
  ],
};

const categories = [
  {
    name: "Entretien régulier (bureaux, commerces, parties communes)",
    m2: "1,80 € à 2,80 € HT/m² par passage",
    hourly: "20 € à 26 € HT/heure en régie",
    note: "Tarif dégressif au-delà de 150-200 m². Fréquence type : 1 à 3 passages par semaine selon l'activité.",
  },
  {
    name: "Nettoyage ponctuel / grand ménage",
    m2: "2,50 € à 3,80 € HT/m²",
    hourly: "25 € à 30 € HT/heure en régie",
    note: "Pour un grand nettoyage annuel, avant un événement, ou en complément d'un contrat régulier.",
  },
  {
    name: "Lavage de vitres",
    m2: "3 € à 5 € HT/m²",
    hourly: "25 € à 35 € HT/heure en régie",
    note: "Minimum d'intervention conseillé autour de 60 à 80 € pour rentabiliser le déplacement.",
  },
  {
    name: "Nettoyage fin de chantier",
    m2: "4 € à 9 € HT/m² selon l'état des lieux",
    hourly: "30 € à 40 € HT/heure en régie",
    note: "4 à 6 € pour un chantier standard (poussières, résidus légers), 6 à 9 € pour un chantier intensif (peinture, plâtre, déchets importants).",
  },
];

const facteurs = [
  {
    title: "La surface et la fréquence",
    body: "Plus l'intervention est fréquente et la surface importante, plus le tarif au m² diminue — un contrat de 3 passages par semaine coûte proportionnellement moins cher qu'un passage isolé.",
  },
  {
    title: "L'état réel des lieux",
    body: "Un fin de chantier avec des résidus de peinture ou de plâtre coûte plus cher qu'un dépoussiérage standard. Pour ce type de prestation, une visite avant devis évite les mauvaises surprises des deux côtés.",
  },
  {
    title: "Les horaires demandés",
    body: "Une intervention en horaires décalés, le week-end, ou en urgence peut entraîner une majoration (généralement 10 à 20 %) par rapport à un créneau standard en semaine.",
  },
  {
    title: "L'accès au site",
    body: "Un accès difficile (stationnement compliqué, étages sans ascenseur, sécurité renforcée) peut aussi influencer le prix final, au même titre que le type de sol ou de surface à traiter.",
  },
];

export default function PricingBlogPost() {
  return (
    <>
      <Header />
      <main id="main-content">
        <article>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <section className="relative overflow-hidden bg-sapphire-gradient pb-16 pt-36">
            <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Retour au blog
              </Link>
              <span className="eyebrow mt-6 inline-block">Guide CKM Services</span>
              <h1 className="mt-6 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {new Date(publishedDate).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  7 min de lecture
                </span>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <ScrollReveal>
                <p className="text-lg leading-relaxed text-slate-700">
                  &quot;Combien coûte le nettoyage de mes locaux ?&quot; — c&apos;est la première question que se posent la plupart des entreprises, commerces et syndics avant de se lancer. En Île-de-France, les tarifs varient selon le type de prestation, la surface et la fréquence. Voici les fourchettes de prix constatées sur le marché francilien, poste par poste, pour vous aider à comparer et à budgétiser avant de demander un devis.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-10 rounded-2xl border border-sapphire-100 bg-sapphire-50/50 p-6">
                  <p className="text-sm leading-relaxed text-slate-600">
                    Ces prix sont indicatifs et donnés à titre de repère : le tarif exact d&apos;une prestation dépend toujours de l&apos;état des lieux, de la fréquence et des spécificités de votre site. Chez {siteConfig.shortName}, chaque devis est personnalisé et fourni gratuitement sous 48h.
                  </p>
                </div>
              </ScrollReveal>

              <div className="mt-12 space-y-6">
                {categories.map((cat, index) => (
                  <ScrollReveal key={cat.name} delay={(index % 4) * 0.05}>
                    <div className="glass-card">
                      <h2 className="text-xl font-semibold text-sapphire-900">
                        {cat.name}
                      </h2>
                      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-sapphire-50 px-4 py-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-sapphire-700/70">
                            Au m²
                          </p>
                          <p className="mt-1 font-semibold text-sapphire-900">{cat.m2}</p>
                        </div>
                        <div className="rounded-xl bg-sapphire-50 px-4 py-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-sapphire-700/70">
                            En régie horaire
                          </p>
                          <p className="mt-1 font-semibold text-sapphire-900">{cat.hourly}</p>
                        </div>
                      </div>
                      <p className="mt-4 leading-relaxed text-slate-600">{cat.note}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <h2 className="mt-16 text-2xl font-semibold text-sapphire-900">
                  Ce qui fait varier le prix d&apos;un devis
                </h2>
              </ScrollReveal>

              <div className="mt-8 space-y-8">
                {facteurs.map((facteur) => (
                  <ScrollReveal key={facteur.title}>
                    <div>
                      <h3 className="text-lg font-semibold text-sapphire-900">
                        {facteur.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-slate-600">
                        {facteur.body}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="mt-14 rounded-2xl bg-sapphire-gradient p-8 text-center shadow-soft sm:p-10">
                  <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
                    Un devis gratuit et personnalisé sous 48h
                  </h2>
                  <p className="mx-auto mt-3 max-w-xl text-balance text-white/80">
                    Décrivez-nous votre local et vos besoins : vous recevez un chiffrage clair, sans engagement, adapté à {siteConfig.baseCity} et à toute l&apos;Île-de-France.
                  </p>
                  <Link href="/#quote" className="btn-primary mt-6 inline-flex">
                    Obtenez Votre Devis Gratuit
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-14">
                  <h2 className="text-2xl font-semibold text-sapphire-900">
                    Questions fréquentes sur les tarifs
                  </h2>
                  <div className="mt-6 space-y-6">
                    {faqSchema.mainEntity.map((faq) => (
                      <div key={faq.name} className="border-b border-slate-100 pb-6">
                        <h3 className="font-semibold text-slate-900">{faq.name}</h3>
                        <p className="mt-2 leading-relaxed text-slate-600">
                          {faq.acceptedAnswer.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="mt-14 text-sm text-slate-500">
                  À lire aussi :{" "}
                  <Link
                    href="/blog/pourquoi-externaliser-nettoyage-bureaux-nanterre-idf"
                    className="font-semibold text-sapphire-700 hover:underline"
                  >
                    Pourquoi externaliser le nettoyage de vos bureaux à Nanterre et en Île-de-France
                  </Link>
                </p>
              </ScrollReveal>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
