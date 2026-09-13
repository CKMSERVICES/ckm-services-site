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
  name: z.string().trim().min(2, "Please enter your full name."),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  premisesType: z.string().min(1, "Please select a premises type."),
  services: z.array(z.string()).min(1, "Please select at least one service."),
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
    <section id="quote" className="relative bg-sapphire-950 py-24 sm:py-32">
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="lazyOnload"
        />
      )}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Get Started</span>
          <h2 className="section-heading mt-5">
            Ready for a Pristine Space? Get Your Free Quote Today!
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Tell us about your facility and we&apos;ll respond with a custom
            plan — usually within one business hour.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr,1.3fr]">
          <ScrollReveal direction="left" className="space-y-6">
            <div className="glass-panel p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Talk to us directly
              </h3>
              <div className="mt-5 space-y-4 text-sm text-white/70">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-3 hover:text-aqua-300"
                >
                  <Phone className="h-5 w-5 text-aqua-300" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 hover:text-aqua-300"
                >
                  <Mail className="h-5 w-5 text-aqua-300" aria-hidden="true" />
                  {siteConfig.email}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-aqua-300"
                >
                  <MessageCircle className="h-5 w-5 text-aqua-300" aria-hidden="true" />
                  Chat with us on WhatsApp
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-aqua-300" aria-hidden="true" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-6">
              <p className="text-sm text-white/60">
                We respond to every quote request via email and follow up by
                phone or WhatsApp so nothing falls through the cracks.
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
                    <CheckCircle2 className="h-14 w-14 text-aqua-300" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">
                      Thank you! Your request is in.
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-white/65">
                      A member of our team will reach out shortly with your
                      custom quote. Keep an eye on your inbox and phone.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="btn-secondary mt-8"
                    >
                      Submit another request
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
                    {/* Honeypot — hidden from real users */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register("website")}
                      />
                    </div>

                    <Field
                      label="Full Name"
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
                      label="Company Name"
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

                    <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        className="form-input"
                        {...register("phone")}
                      />
                    </Field>

                    <Field
                      label="Type of Premises"
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
                          Select premises type
                        </option>
                        {premiseTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <fieldset className="sm:col-span-2">
                      <legend className="mb-2 block text-sm font-medium text-white/75">
                        Desired Services
                      </legend>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {services.map((service) => (
                          <label
                            key={service.slug}
                            className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white/75 transition-colors hover:border-aqua-400/40"
                          >
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-white/30 bg-transparent text-aqua-400 focus:ring-aqua-400"
                              checked={selectedServices?.includes(service.title) ?? false}
                              onChange={() => toggleService(service.title)}
                            />
                            {service.title}
                          </label>
                        ))}
                      </div>
                      {errors.services && (
                        <p className="mt-2 text-xs text-red-300">
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
                        placeholder="Tell us about your space, schedule, or specific needs..."
                        {...register("message")}
                      />
                    </Field>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-primary w-full disabled:opacity-60"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Get My Free Quote
                            <Send className="h-4 w-4" aria-hidden="true" />
                          </>
                        )}
                      </button>
                      {recaptchaSiteKey && (
                        <p className="mt-3 text-center text-xs text-white/40">
                          This site is protected by reCAPTCHA and the Google{" "}
                          <a
                            href="https://policies.google.com/privacy"
                            className="underline hover:text-aqua-300"
                          >
                            Privacy Policy
                          </a>{" "}
                          applies.
                        </p>
                      )}
                      {status === "error" && (
                        <p className="mt-3 text-center text-sm text-red-300">
                          Something went wrong. Please try again or call us
                          directly at {siteConfig.phone}.
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
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-white/75">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-300">{error}</p>}
    </div>
  );
}
