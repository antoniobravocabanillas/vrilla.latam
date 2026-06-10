export const runtime = "edge";

type LeadPayload = {
  name?: unknown;
  company?: unknown;
  role?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  challenge?: unknown;
  source?: unknown;
  path?: unknown;
  utm?: unknown;
  referrer?: unknown;
};

const MAX_FIELD_LENGTH = 700;

function sanitize(value: unknown) {
  if (typeof value !== "string") return "";
  return value
    .trim()
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .slice(0, MAX_FIELD_LENGTH);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Formato inválido." }, { status: 400 });
  }

  const lead = {
    name: sanitize(body.name),
    company: sanitize(body.company),
    role: sanitize(body.role),
    email: sanitize(body.email).toLowerCase(),
    whatsapp: sanitize(body.whatsapp),
    challenge: sanitize(body.challenge),
    source: sanitize(body.source),
    path: sanitize(body.path),
    utm: sanitize(body.utm),
    referrer: sanitize(body.referrer),
    createdAt: new Date().toISOString(),
  };

  const missingRequired = [lead.name, lead.company, lead.role, lead.email, lead.whatsapp, lead.challenge].some(
    (value) => value.length === 0,
  );

  if (missingRequired) {
    return Response.json({ error: "Completa todos los campos requeridos." }, { status: 422 });
  }

  if (!isValidEmail(lead.email)) {
    return Response.json({ error: "Ingresa un email válido." }, { status: 422 });
  }

  // Fase MVP: el endpoint queda preparado para conectar HubSpot, Make o Slack
  // cuando existan credenciales. No inventamos integración ni almacenamiento externo.
  return Response.json(
    {
      ok: true,
      lead: {
        email: lead.email,
        company: lead.company,
        source: lead.source || "vrilla-web",
      },
      integration: process.env.HUBSPOT_ACCESS_TOKEN ? "ready-for-crm" : "pending-credentials",
    },
    { status: 202 },
  );
}
