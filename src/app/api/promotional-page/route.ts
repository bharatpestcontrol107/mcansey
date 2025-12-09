import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  plan: string;
  projectType: string;  // Add this
  message: string;
};

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, plan, projectType, message }: ContactFormData = await req.json();

    if (!fullName || !email || !phone || !plan || !projectType || !message) {
      return NextResponse.json({ success: false, error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Update mail options to include project type
    const mailOptions = {
      from: email,
      to: 'info@mcansey.in',
      subject: `Contact Form Submission - ${fullName}`,
      text: `You have a new message:\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nPlan: ${plan}\nProject Type: ${projectType}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}
