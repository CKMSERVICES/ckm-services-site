import { Resend } from "resend";
import type { LeadPayload } from "./validation";
// WhatsApp is handled client-side via a free wa.me click-to-chat link
// (see lib/constants.ts + components/WhatsAppButton.tsx) instead of a paid
// API (Twilio/Meta), so no server-side WhatsApp sending happens here.

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

function leadEmailHtml(lead: LeadPayload) {
  const rows: [string, string][] = [
    ["Nom", lead.name],
    ["Entreprise", lead.company || "—"],
    ["Email", lead.email],
    ["Téléphone", lead.phone],
    ["Type de site", lead.premisesType],
    ["Services demandés", lead.services.join(", ") || "—"],
    ["Message", lead.message || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;color:#5478c4;font-weight:600;white-space:nowrap;">${label}</td><td style="padding:8px 12px;color:#0b1730;">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join("");

  return `
  <div style="font-family:Arial,sans-serif;background:#eef2fb;padding:24px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #d6e0f5;">
      <div style="background:linear-gradient(135deg,#0b1730,#10615a);padding:20px 24px;">
        <h1 style="color:#ffffff;margin:0;font-size:18px;">Nouvelle Demande de Devis</h1>
        <p style="color:#93fbe9;margin:4px 0 0;font-size:13px;">CKM Services — lead du site web</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
    </div>
  </div>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendLeadEmail(lead: LeadPayload) {
  if (!resend) {
    console.warn(
      "[notifications] RESEND_API_KEY not configured — skipping lead email."
    );
    return { skipped: true };
  }

  const from = process.env.LEAD_FROM_EMAIL || "leads@ckmservices.fr";
  const to = process.env.LEAD_TO_EMAIL || "contact@ckmservices.fr";

  return resend.emails.send({
    from: `Site CKM Services <${from}>`,
    to,
    replyTo: lead.email,
    subject: `Nouvelle demande de devis de ${lead.name}${
      lead.company ? ` (${lead.company})` : ""
    }`,
    html: leadEmailHtml(lead),
  });
}
