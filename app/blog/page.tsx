import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: `Conseils et actualités sur le nettoyage professionnel de bureaux et locaux commerciaux en Île-de-France, par ${siteConfig.name}.`,
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "prix-nettoyage-professionnel-ile-de-france",
    title:
      "Prix du Nettoyage Professionnel en Île-de-France : Le Guide des Tarifs 2026",
    excerpt:
      "Entretien de bureaux, nettoyage ponctuel, vitres, fin de chantier : les fourchettes de prix constatées en Île-de-France, ce qui fait varier un devis, et comment obtenir un tarif juste.",
    date: "2026-09-20",
    readingTime: "7 min",
  },
  {
    slug: "pourquoi-externaliser-nettoyage-bureaux-nanterre-idf",
    title:
      "Pourquoi Externaliser le Nettoyage de Vos Bureaux à Nanterre et en Île-de-France",
    excerpt:
      "Coûts cachés du ménage en interne, flexibilité, image de marque : les vraies raisons pour lesquelles de plus en plus d'entreprises franciliennes délèguent l'entretien de leurs locaux.",
    date: "2026-09-20",
    readingTime: "6 min",
  },
];

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden bg-sapphire-gradient pb-20 pt-36">
          <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <span className="eyebrow">Blog CKM Services</span>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Conseils Nettoyage Professionnel
            </h1>
            <p className="mt-6 text-balance text-lg text-white/80">
              Nos retours d&apos;expérience sur l&apos;entretien de locaux professionnels en Île-de-France.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {posts.map((post) => (
              <ScrollReveal key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass-card block transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-wide text-sapphire-700/70">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readingTime} de lecture
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-sapphire-900">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-slate-600">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sapphire-700">
                    Lire l&apos;article
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
