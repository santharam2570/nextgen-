type Inquiry = {
  name?: string;
  phone?: string;
  email?: string;
  course?: string;
  mode?: string;
  message?: string;
};

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Inquiry;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const inquiry = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 20),
    email: clean(body.email, 150),
    course: clean(body.course, 150),
    mode: clean(body.mode, 50),
    message: clean(body.message, 2000),
    submittedAt: new Date().toISOString(),
  };

  const digits = inquiry.phone.replace(/\D/g, "").slice(-10);
  if (inquiry.name.length < 2 || !/^[6-9]\d{9}$/.test(digits) || !inquiry.course) {
    return Response.json({ error: "Please fill all required fields" }, { status: 422 });
  }

  // Set INQUIRY_WEBHOOK_URL (Google Apps Script, Zapier, Make, Slack, CRM…) to receive leads.
  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("Inquiry webhook failed:", err);
      return Response.json({ error: "Could not submit right now" }, { status: 502 });
    }
  } else {
    console.log("New inquiry:", inquiry);
  }

  return Response.json({ ok: true });
}
