import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse the incoming request body (JSON)
    const body = await req.json();

    // Log the form data for debugging purposes
    console.log("Received form data:", body);

 
    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      experience,
      lastCompany,
      lastCTC,
      expectedCTC,
      relocate,
      comments,
    } = body;

   
    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json(
        { message: "Missing required fields. Please fill all mandatory fields." },
        { status: 400 }
      );
    }

    // Nodemailer transport configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use 'gmail' or any other service you prefer
      auth: {
        user: process.env.EMAIL_USER, // Your email address (use an env variable for security)
        pass: process.env.EMAIL_PASS, // Your email password (use an env variable for security)
      },
    });

    // Email message configuration
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: 'info@mcansey.in', 
      subject: `Job Application: ${firstName} ${lastName} for ${position}`,
      html: `
        <h2>Job Application from ${firstName} ${lastName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position Applied for:</strong> ${position}</p>
        <p><strong>Total Experience:</strong> ${experience}</p>
        <p><strong>Last Company:</strong> ${lastCompany}</p>
        <p><strong>Last CTC:</strong> ${lastCTC}</p>
        <p><strong>Expected CTC:</strong> ${expectedCTC}</p>
        <p><strong>Willing to Relocate:</strong> ${relocate}</p>
        <p><strong>Comments:</strong> ${comments}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

    // Respond back with success
    return NextResponse.json(
      { message: "Form submitted successfully! A confirmation email has been sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { message: "Error processing form submission" },
      { status: 500 }
    );
  }
}
