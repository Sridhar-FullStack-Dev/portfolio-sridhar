import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  const { name, email, hcwh, services } = await request.json();

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Message from Your Portfolio</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
            background-color: #2b2d42;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
        }

        .content {
            padding: 20px;
            color: #333333;
        }

        .content h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .content p {
            font-size: 16px;
            line-height: 1.5;
            margin: 10px 0;
        }

        .footer {
            background-color: #edf2f4;
            color: #888888;
            text-align: center;
            padding: 10px;
            font-size: 14px;
        }

        .footer a {
            color: #ef233c;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>New Message from Your Portfolio</h1>
        </div>
        <div class="content">
            <h2>Message Details</h2>
            <p>${new Date()}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${hcwh || "No message provided"}</p>
            <h3>Services Interested In:</h3>
            <ul>
                ${services
                  .map((service: string) => `<li>${service}</li>`)
                  .join("")}
            </ul>
        </div>
        <div class="footer">
            <p>Sridhar&trade; | All rights reserved.</p>
        </div>
    </div>
</body>
</html>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
