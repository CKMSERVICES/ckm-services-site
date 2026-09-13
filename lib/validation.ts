import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom complet."),
  company: z.string().trim().optional().default(""),
  email: z.string().trim().email("Merci d'indiquer une adresse email valide."),
  phone: z
    .string()
    .trim()
    .min(7, "Merci d'indiquer un numéro de téléphone valide."),
  premisesType: z.string().trim().min(1, "Merci de sélectionner un type de site."),
  services: z.array(z.string()).default([]),
  message: z.string().trim().optional().default(""),
  recaptchaToken: z.string().optional(),
  // Honeypot field — must stay empty
  website: z.string().max(0).optional().default(""),
});

export type LeadPayload = z.infer<typeof leadSchema>;

export async function verifyRecaptcha(token?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn(
      "[validation] RECAPTCHA_SECRET_KEY not configured — skipping verification."
    );
    return true;
  }
  if (!token) return false;

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    }
  );

  const data = await response.json();
  return Boolean(data.success) && (data.score === undefined || data.score >= 0.5);
}
