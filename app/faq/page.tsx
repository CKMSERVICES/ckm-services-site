import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/constants";

const title = "Questions Fréquentes";
const description =
  "Devis, engagement, produits utilisés, zones d'intervention : les réponses aux questions les plus posées sur les services de nettoyage commercial de CKM Services à Nanterre et en Île-de-France.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    title: `${title} | ${siteConfig.name}`,
    description,
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
    title: `${title} | ${siteConfig.name}`,
    description,
    images: ["/og-image.jpg"],
  },
};

const faqs = [
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui. Vous décrivez votre besoin par téléphone, WhatsApp ou via le formulaire, et vous recevez un devis clair sous 48h, sans frais et sans obligation d'achat.",
  },
  {
    question: "Faut-il vous recevoir sur place pour établir le devis ?",
    answer:
      "Pas forcément. La plupart des devis se font à distance à partir de votre description (type de local, surface, fréquence souhaitée). Une visite peut être organisée si votre site le nécessite.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Non, aucun engagement long. Vous restez libre de continuer, d'ajuster la fréquence ou d'arrêter la prestation à tout moment, sans préavis contraignant.",
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "Nous sommes basés à Nanterre (92) et intervenons dans toute l'Île-de-France : Paris, Courbevoie, Puteaux, La Défense, Boulogne-Billancourt, Levallois-Perret, Colombes et les environs.",
  },
  {
    question: "Utilisez-vous des produits écologiques ?",
    answer:
      "Oui, nos équipes utilisent des produits certifiés écologiques et du matériel professionnel adapté à chaque type de surface, en tenant compte de la sécurité de vos équipes.",
  },
  {
    question: "Quels types de sites nettoyez-vous ?",
    answer:
      "Bureaux, commerces, locaux industriels, et sites en fin de chantier. Si votre besoin sort de ces catégories, décrivez-le-nous : nous adaptons nos équipes en conséquence.",
  },
  {
    question: "Le matériel et les produits sont-ils fournis par CKM Services ?",
    answer:
      "Oui, nos équipes arrivent avec leur propre matériel professionnel et leurs produits certifiés écologiques. Vous n'avez rien à acheter ni à stocker.",
  },
  {
    question: "Proposez-vous des interventions ponctuelles, ou uniquement des contrats réguliers ?",
    answer:
      "Les deux. En plus de l'entretien régulier (quotidien, hebdomadaire ou nocturne), nous intervenons pour des besoins ponctuels : nettoyage post-chantier, remise en état, lavage de vitres, ou toute demande spécifique.",
  },
  {
    question: "Comment se passe la première prise de contact ?",
    answer:
      "Vous nous décrivez votre besoin par téléphone, WhatsApp ou via le formulaire du site (type de local, surface, fréquence souhaitée). Nous revenons vers vous avec un devis sous 48h, sans engagement de votre part.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteConfig.url}/faq` },
  ],
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <section className="relative overflow-hidden bg-sapphire-gradient pb-20 pt-36">
          <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <span className="eyebrow">Questions Fréquentes</span>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tout Savoir sur Nos Services de Nettoyage
            </h1>
            <p className="mt-6 text-balance text-lg text-white/80">
              Devis, engagement, produits utilisés, zones d&apos;intervention — les réponses aux questions qu&apos;on nous pose le plus souvent.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <ScrollReveal key={faq.question} delay={(index % 4) * 0.05}>
                  <div className="glass-card">
                    <h2 className="text-lg font-semibold text-sapphire-900">
                      {faq.question}
                    </h2>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="mt-14 rounded-2xl bg-sapphire-gradient p-8 text-center shadow-soft sm:p-10">
                <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
                  Une autre question ? Contactez-nous
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-balance text-white/80">
                  Réponse sous 48h, par téléphone, WhatsApp ou via le formulaire de devis.
                </p>
                <Link href="/#quote" className="btn-primary mt-6 inline-flex">
                  Obtenez Votre Devis Gratuit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
