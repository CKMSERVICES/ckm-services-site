import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/constants";

const title =
  "Pourquoi Externaliser le Nettoyage de Vos Bureaux à Nanterre et en Île-de-France";
const description =
  "Coûts cachés du ménage en interne, flexibilité, image de marque : les vraies raisons pour lesquelles de plus en plus d'entreprises franciliennes délèguent l'entretien de leurs locaux à un prestataire professionnel.";
const publishedDate = "2026-09-20";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog/pourquoi-externaliser-nettoyage-bureaux-nanterre-idf",
  },
  openGraph: {
    type: "article",
    title,
    description,
    publishedTime: publishedDate,
  },
};

const raisons = [
  {
    title: "Un budget maîtrisé, sans coûts cachés",
    body:
      "Employer une personne en interne, c'est un salaire chargé, des congés à couvrir, du matériel à acheter et à entretenir, et une formation à assurer. En externalisant, vous payez une prestation définie à l'avance — au m² ou en régie horaire — sans charges sociales ni remplacement à organiser en cas d'absence.",
  },
  {
    title: "Une qualité constante, pas dépendante d'une seule personne",
    body:
      "Avec un salarié unique, un jour de congé ou d'arrêt maladie veut souvent dire des locaux non nettoyés. Un prestataire s'appuie sur une équipe et un remplaçant est toujours prévu — l'entretien continue, même en cas d'imprévu.",
  },
  {
    title: "Du matériel et des produits professionnels",
    body:
      "Autolaveuses, aspirateurs industriels, produits certifiés écologiques adaptés à chaque type de surface : un prestataire investit dans un équipement que peu d'entreprises achèteraient pour un usage interne, avec un résultat visiblement supérieur.",
  },
  {
    title: "Une image professionnelle qui rassure vos clients",
    body:
      "Un accueil impeccable, des sanitaires irréprochables, des sols qui brillent : le premier contact avec vos locaux influence directement la perception de votre sérieux, que ce soit pour un client, un candidat ou un partenaire qui pousse la porte.",
  },
  {
    title: "Une flexibilité que l'interne ne permet pas",
    body:
      "Besoin d'un passage supplémentaire avant un événement, d'un grand nettoyage ponctuel après des travaux, ou au contraire de réduire la fréquence en période creuse ? Un prestataire ajuste le planning sans les contraintes d'un contrat de travail classique.",
  },
  {
    title: "Du temps rendu à vos équipes",
    body:
      "Vos collaborateurs — et vous-même — n'avez plus à gérer les stocks de produits, les plannings de ménage ou les rappels à l'ordre. Ce temps revient à votre cœur de métier, là où il crée réellement de la valeur.",
  },
];

const faqs = [
  {
    question: "Combien coûte le nettoyage de bureaux en Île-de-France ?",
    answer:
      "Pour un entretien régulier, comptez généralement entre 1,80 € et 2,80 € HT/m² par passage, ou 20 € à 26 € HT/heure en régie selon la fréquence et la surface. Le tarif exact dépend de l'état des lieux, du nombre de passages et des prestations incluses — c'est pourquoi un devis personnalisé reste la meilleure façon d'avoir un chiffrage fiable.",
  },
  {
    question: "Faut-il s'engager sur une longue durée ?",
    answer:
      "Non, pas chez CKM Services. Vous restez libre d'ajuster la fréquence ou d'arrêter la prestation à tout moment, sans préavis contraignant — un point souvent décisif pour les petites structures qui veulent tester avant de s'engager.",
  },
  {
    question: "En combien de temps peut-on démarrer ?",
    answer:
      "Après votre demande, vous recevez un devis sous 48h. Une fois validé, l'intervention peut généralement démarrer en quelques jours, aux horaires qui vous conviennent le mieux (avant l'ouverture, en soirée ou le week-end).",
  },
];

export default function BlogPost() {
  return (
    <>
      <Header />
      <main id="main-content">
        <article>
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
                  6 min de lecture
                </span>
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <ScrollReveal>
                <p className="text-lg leading-relaxed text-slate-700">
                  Entre la gestion des équipes, les clients et le développement de l&apos;activité, l&apos;entretien des locaux passe souvent en dernier — jusqu&apos;au jour où un client ou un candidat pousse la porte d&apos;un accueil négligé. En Île-de-France, de plus en plus de bureaux, commerces et copropriétés font le choix d&apos;externaliser ce poste plutôt que de le gérer en interne. Voici pourquoi, concrètement.
                </p>
              </ScrollReveal>

              <div className="mt-12 space-y-10">
                {raisons.map((raison, index) => (
                  <ScrollReveal key={raison.title} delay={(index % 3) * 0.05}>
                    <div className="flex gap-4">
                      <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sapphire-50 text-sapphire-700">
                        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="text-xl font-semibold text-sapphire-900">
                          {raison.title}
                        </h2>
                        <p className="mt-2 leading-relaxed text-slate-600">
                          {raison.body}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="mt-14 rounded-2xl bg-sapphire-gradient p-8 text-center shadow-soft sm:p-10">
                  <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
                    Un devis gratuit sous 48h, sans engagement
                  </h2>
                  <p className="mx-auto mt-3 max-w-xl text-balance text-white/80">
                    Basés à {siteConfig.baseCity}, nous intervenons dans tout Paris et sa proche périphérie — {siteConfig.serviceAreas.slice(1, 5).join(", ")} et les environs.
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
                    Questions fréquentes
                  </h2>
                  <div className="mt-6 space-y-6">
                    {faqs.map((faq) => (
                      <div key={faq.question} className="border-b border-slate-100 pb-6">
                        <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                        <p className="mt-2 leading-relaxed text-slate-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
