import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  const { name, email, subject, message } = req.body ?? {};

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format.",
    });
  }

  // Ensure env variables exist
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    console.error("Missing SMTP environment variables");
    return res.status(500).json({
      success: false,
      message: "Server configuration error",
    });
  }

  try {
    // Create transporter (optimized for serverless)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("Nodemailer error:", err);

    let errorMessage = "Failed to send message";
    if (err.code === "EAUTH") {
      errorMessage = "SMTP authentication failed";
    } else if (err.code === "ECONNECTION" || err.code === "ETIMEDOUT") {
      errorMessage = "SMTP connection failed";
    }

    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
}
