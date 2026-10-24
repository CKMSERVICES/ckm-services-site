import type { LeadPayload } from "./validation";
// WhatsApp is handled client-side via a free wa.me click-to-chat link
// (see lib/constants.ts + components/WhatsAppButton.tsx) instead of a paid
// API (Twilio/Meta), so no server-side WhatsApp sending happens here.

// Email notifications go through the Hostinger Mail API, sent from the
// contact@ckmservices.fr mailbox itself (the API has no separate "from"
// field — it always sends as the authenticated mailbox).
const hostingerMailApiKey = process.env.HOSTINGER_MAIL_API_KEY;
const hostingerMailboxId =
  process.env.HOSTINGER_MAILBOX_ID || "ACb6710855e890848fc7565f0930ee";

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
      <p style="padding:12px 24px;color:#5478c4;font-size:12px;">
        Pour répondre directement au client, utilisez son adresse email ci-dessus
        (cette notification est envoyée depuis contact@ckmservices.fr).
      </p>
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
  if (!hostingerMailApiKey) {
    console.warn(
      "[notifications] HOSTINGER_MAIL_API_KEY not configured — skipping lead email."
    );
    return { skipped: true };
  }

  const to = process.env.LEAD_TO_EMAIL || "contact@ckmservices.fr";

  const response = await fetch(
    `https://api.mail.hostinger.com/api/v1/mailboxes/${hostingerMailboxId}/send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${hostingerMailApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [to],
        displayName: "Site CKM Services",
        subject: `Nouvelle demande de devis de ${lead.name}${
          lead.company ? ` (${lead.company})` : ""
        }`,
        html: leadEmailHtml(lead),
        text: `Nouvelle demande de devis\n\nNom: ${lead.name}\nEntreprise: ${
          lead.company || "—"
        }\nEmail: ${lead.email}\nTéléphone: ${lead.phone}\nType de site: ${
          lead.premisesType
        }\nServices: ${lead.services.join(", ") || "—"}\nMessage: ${
          lead.message || "—"
        }`,
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(
      `[notifications] Hostinger Mail API error (${response.status}): ${errorBody}`
    );
  }

  return { skipped: false };
}
