import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      budget,
      contact,
      description,
      services,
      sendNDA,
      mathAnswer,
      newsletter,
    } = await request.json();


    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Environment variables EMAIL_USER and EMAIL_PASS are required');
      return NextResponse.json(
        { message: 'Email configuration error. Please check server settings.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailContent = `
      Name: ${name}
      Email: ${email}
      Budget: ${budget}
      Contact Number: ${contact}
      Description: ${description}
      Services: ${services}
      Send NDA: ${sendNDA ? 'Yes' : 'No'}
      Math Answer: ${mathAnswer}
      Subscribed to Newsletter: ${newsletter ? 'Yes' : 'No'}
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@mcansey.com',
      subject: 'Mcansey: New Proposal Request Form Submission',
      text: mailContent,
    };

   
    const emailResult = await transporter.sendMail(mailOptions);
    console.log('Email sent:', emailResult);

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error.message || error);

    
    if (error.response) {
      console.error('Error response from email server:', error.response);
    }

    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
