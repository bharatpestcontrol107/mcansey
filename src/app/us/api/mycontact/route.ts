import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, contactNumber, description, includeNDA, captcha, services, numberOfResources } = body;

    if (!email || !description || !services || captcha !== '7' || !numberOfResources) {
      return NextResponse.json({ error: 'Invalid form submission' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@mcansey.in',
      subject: `New Project Proposal from ${fullName || 'Anonymous'}`,
      text: `
        Full Name: ${fullName || 'Not provided'}
        Email: ${email}
        Contact Number: ${contactNumber || 'Not provided'}
        Selected Service: ${services}
        Number of Resources: ${numberOfResources}
        Project Description: ${description}
        Include NDA: ${includeNDA ? 'Yes' : 'No'}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
