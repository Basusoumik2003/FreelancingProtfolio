import { RequestHandler } from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import { Resend } from "resend";
import { z } from "zod";
import { ContactResponse } from "@shared/api";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be 80 characters or less."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(120, "Email must be 120 characters or less."),
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters.")
    .max(5000, "Message must be 5000 characters or less."),
});

let mongoClientPromise: Promise<MongoClient> | null = null;

function getMongoClient() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (!mongoClientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    mongoClientPromise = client.connect();
  }

  return mongoClientPromise;
}

function getDatabaseName() {
  return process.env.MONGODB_DB_NAME || "portfolio";
}

function getResendClient() {
  return new Resend(requireEnv("RESEND_API_KEY"));
}

function requireEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const handleContactSubmit: RequestHandler = async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    const response: ContactResponse = {
      success: false,
      message: firstIssue?.message || "Please fill a valid name, email, and message.",
    };

    return res.status(400).json(response);
  }

  try {
    const payload = parsed.data;
    const client = await getMongoClient();
    const db = client.db(getDatabaseName());

    await db.collection("contact_submissions").insertOne({
      ...payload,
      createdAt: new Date(),
      ipAddress: req.ip,
      userAgent: req.get("user-agent") ?? null,
    });

    const resend = getResendClient();
    const from = requireEnv("RESEND_FROM_EMAIL");
    const to = requireEnv("CONTACT_NOTIFY_EMAIL");

    await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject: `New portfolio enquiry from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
      html: `
        <h2>New portfolio enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    const response: ContactResponse = {
      success: true,
      message: "Thanks! Your message has been sent successfully.",
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error("Contact submission failed", error);

    const response: ContactResponse = {
      success: false,
      message:
        "Sorry, your message could not be sent right now. Please try again in a moment.",
    };

    return res.status(500).json(response);
  }
};
