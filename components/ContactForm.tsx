"use client";

import { useState } from "react";
import Script from "next/script";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { premiseTypes, services, siteConfig } from "@/lib/constants";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const formSchema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom complet."),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Merci d'indiquer une adresse email valide."),
  phone: z.string().trim().min(7, "Merci d'indiquer un numéro de téléphone valide."),
  premisesType: z.string().min(1, "Merci de sélectionner un type de site."),
  services: z.array(z.string()).min(1, "Merci de sélectionner au moins un service."),
  message: z.string().trim().optional(),
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

async function getRecaptchaToken(): Promise<string | undefined> {
  if (!recaptchaSiteKey || typeof window === "undefined" || !window.grecaptcha) {
    return undefined;
  }
  return new Promise((resolve) => {
    window.grecaptcha!.ready(async () => {
      try {
        const token = await window.grecaptcha!.execute(recaptchaSiteKey, {
          action: "submit_quote",
        });
        resolve(token);
      } catch {
        resolve(undefined);
      }
    });
  });
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      premisesType: "",
      services: [],
      message: "",
      website: "",
    },
  });

  const selectedServices = watch("services");

  function toggleService(title: string) {
    const current = selectedServices || [];
    if (current.includes(title)) {
      setValue(
        "services",
        current.filter((s) => s !== title),
        { shouldValidate: true }
      );
    } else {
      setValue("services", [...current, title], { shouldValidate: true });
    }
  }

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    try {
      const recaptchaToken = await getRecaptchaToken();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recaptchaToken }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="relative overflow-hidden bg-sapphire-gradient py-24 sm:py-32">
      <div className="absolute inset-0 bg-sapphire-radial" aria-hidden="true" />
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="lazyOnload"
        />
      )}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Commencer</span>
          <h2 className="section-heading mt-5">
            Prêt pour un Espace Impeccable ? Obtenez Votre Devis Gratuit !
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Parlez-nous de votre site et recevez un devis clair sous 48h —
            gratuit, sans surprise.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr,1.3fr]">
          <ScrollReveal direction="left" className="space-y-6">
            <div className="glass-panel p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                Contactez-nous directement
              </h3>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-3 hover:text-sapphire-700"
                >
                  <Phone className="h-5 w-5 text-sapphire-600" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 hover:text-sapphire-700"
                >
                  <Mail className="h-5 w-5 text-sapphire-600" aria-hidden="true" />
                  {siteConfig.email}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-sapphire-700"
                >
                  <MessageCircle className="h-5 w-5 text-sapphire-600" aria-hidden="true" />
                  Discuter sur WhatsApp
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-sapphire-600" aria-hidden="true" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.zip} {siteConfig.address.city}
                  </span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-6">
              <p className="text-sm text-slate-500">
                Nous répondons à chaque demande de devis par email et
                assurons un suivi par téléphone ou WhatsApp, pour ne rien
                laisser passer.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass-panel relative overflow-hidden p-6 sm:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-16 text-center"
                  >
                    <CheckCircle2 className="h-14 w-14 text-sapphire-600" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                      Merci ! Votre demande est bien reçue.
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-slate-600">
                      Un membre de notre équipe vous recontactera rapidement
                      avec votre devis personnalisé. Surveillez votre
                      boîte mail et votre téléphone.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="btn-secondary mt-8"
                    >
                      Envoyer une autre demande
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                  >
                    {/* Honeypot — invisible pour les vrais utilisateurs */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Site web</label>
                      <input
                        id="website"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register("website")}
                      />
                    </div>

                    <Field
                      label="Nom Complet"
                      htmlFor="name"
                      error={errors.name?.message}
                    >
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        className="form-input"
                        {...register("name")}
                      />
                    </Field>

                    <Field
                      label="Nom de l'Entreprise"
                      htmlFor="company"
                      error={errors.company?.message}
                    >
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        className="form-input"
                        {...register("company")}
                      />
                    </Field>

                    <Field label="Email" htmlFor="email" error={errors.email?.message}>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="form-input"
                        {...register("email")}
                      />
                    </Field>

                    <Field label="Téléphone" htmlFor="phone" error={errors.phone?.message}>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        className="form-input"
                        {...register("phone")}
                      />
                    </Field>

                    <Field
                      label="Type de Site"
                      htmlFor="premisesType"
                      error={errors.premisesType?.message}
                      className="sm:col-span-2"
                    >
                      <select
                        id="premisesType"
                        className="form-input"
                        defaultValue=""
                        {...register("premisesType")}
                      >
                        <option value="" disabled>
                          Sélectionnez un type de site
                        </option>
                        {premiseTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <fieldset className="sm:col-span-2">
                      <legend className="mb-2 block text-sm font-medium text-slate-700">
                        Services Souhaités
                      </legend>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {services.map((service) => (
                          <label
                            key={service.slug}
                            className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 transition-colors hover:border-sapphire-400"
                          >
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-slate-300 bg-white text-sapphire-600 focus:ring-sapphire-300"
                              checked={selectedServices?.includes(service.title) ?? false}
                              onChange={() => toggleService(service.title)}
                            />
                            {service.title}
                          </label>
                        ))}
                      </div>
                      {errors.services && (
                        <p className="mt-2 text-xs text-red-600">
                          {errors.services.message as string}
                        </p>
                      )}
                    </fieldset>

                    <Field
                      label="Message"
                      htmlFor="message"
                      error={errors.message?.message}
                      className="sm:col-span-2"
                    >
                      <textarea
                        id="message"
                        rows={4}
                        className="form-input resize-none"
                        placeholder="Parlez-nous de votre espace, de vos horaires ou de vos besoins spécifiques..."
                        {...register("message")}
                      />
                    </Field>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-solid w-full disabled:opacity-60"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Obtenir Mon Devis Gratuit
                            <Send className="h-4 w-4" aria-hidden="true" />
                          </>
                        )}
                      </button>
                      {recaptchaSiteKey && (
                        <p className="mt-3 text-center text-xs text-slate-400">
                          Ce site est protégé par reCAPTCHA. La{" "}
                          <a
                            href="https://policies.google.com/privacy"
                            className="underline hover:text-sapphire-800"
                          >
                            politique de confidentialité
                          </a>{" "}
                          de Google s&apos;applique.
                        </p>
                      )}
                      {status === "error" && (
                        <p className="mt-3 text-center text-sm text-red-600">
                          Une erreur est survenue. Merci de réessayer ou de
                          nous appeler directement au {siteConfig.phone}.
                        </p>
                      )}
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
