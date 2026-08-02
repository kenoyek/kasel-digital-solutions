import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "hello@kasel.digital";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "KASEL Website <hello@kasel.digital>";

type ContactPayload = {
  company?: unknown;
  email?: unknown;
  name?: unknown;
  project?: unknown;
  website?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { message: "Project enquiries are not configured yet." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Send a valid project enquiry." },
      { status: 400 },
    );
  }

  if (clean(payload.website)) {
    return NextResponse.json({ message: "Project enquiry received." });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const company = clean(payload.company);
  const project = clean(payload.project);

  if (!name || !isValidEmail(email) || !project) {
    return NextResponse.json(
      { message: "Enter your name, a valid email and the project brief." },
      { status: 400 },
    );
  }

  const subject = `New project enquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : "",
    "",
    "Project brief:",
    project,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0b1311;">
      <h1 style="font-size: 22px;">New project enquiry</h1>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      <p><strong>Project brief:</strong></p>
      <p>${escapeHtml(project).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  const response = await fetch(RESEND_ENDPOINT, {
    body: JSON.stringify({
      from: FROM_EMAIL,
      html,
      reply_to: email,
      subject,
      text,
      to: [TO_EMAIL],
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "The enquiry could not be sent. Please try WhatsApp or email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Project enquiry sent." });
}
