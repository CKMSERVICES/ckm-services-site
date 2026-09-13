import { NextRequest, NextResponse } from "next/server";
import { leadSchema, verifyRecaptcha } from "@/lib/validation";
import { sendLeadEmail } from "@/lib/notifications";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form fields.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const lead = parsed.data;

  // Honeypot: bots fill hidden fields humans never see.
  if (lead.website) {
    return NextResponse.json({ success: true });
  }

  const recaptchaOk = await verifyRecaptcha(lead.recaptchaToken);
  if (!recaptchaOk) {
    return NextResponse.json(
      { error: "Verification failed. Please try again." },
      { status: 400 }
    );
  }

  try {
    await sendLeadEmail(lead);
  } catch (error) {
    console.error("[api/contact] notification failure:", error);
  }

  return NextResponse.json({ success: true });
}
