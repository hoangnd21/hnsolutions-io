import { NextRequest, NextResponse } from 'next/server';
import { IContactFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: IContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending service
    // Options: Resend, SendGrid, Nodemailer, etc.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@hnsolutions.io',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New contact form submission from ${body.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
    //     <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message}</p>
    //   `,
    // });

    // For now, just log the data and return success
    console.log('Contact form submission:', body);

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

