import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, contactNumber, budget, description, includeNDA, captcha, services } = body;


    if (!email || !description || !services || services === 'Select a Service' || captcha !== '7') {
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
      to: 'info@mcansey.com',
      subject: `New Project Proposal from ${fullName || 'Anonymous'}`,
      text: `
        Full Name: ${fullName || 'Not provided'}
        Email: ${email}
        Contact Number: ${contactNumber || 'Not provided'}
        Selected Service: ${services}
        Budget Range: ${budget || 'Not provided'}
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
