import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import QualityAssurance from "@/components/QualityAssurance";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Process />
        <Testimonials />
        <QualityAssurance />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
