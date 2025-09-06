// Vercel API route for sending emails
// This file should be in the /api directory for Vercel to recognize it as a serverless function

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers for cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: 'Name, email, and message are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // Validate message length
    if (message.length < 10) {
      return res.status(400).json({ 
        error: 'Message too short',
        details: 'Please provide a more detailed message'
      });
    }

    // Get environment variables
    const {
      SENDGRID_API_KEY,
      FROM_EMAIL,
      TO_EMAIL,
      SENDGRID_TEMPLATE_ID
    } = process.env;

    // Check if SendGrid is configured
    if (!SENDGRID_API_KEY || !FROM_EMAIL || !TO_EMAIL) {
      console.error('SendGrid configuration missing');
      return res.status(500).json({ 
        error: 'Email service not configured',
        details: 'Please contact the site administrator'
      });
    }

    // Send email using SendGrid
    const emailData = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: `Portfolio Contact: ${name} (${email})`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
Message: ${message}

---
Sent from your portfolio contact form
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `
    };

    // Send email via SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SendGrid error:', response.status, errorText);
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: 'Please try again later or contact me directly'
      });
    }

    // Log successful submission (for monitoring)
    console.log(`Contact form submitted: ${name} (${email})`);

    return res.status(200).json({ 
      success: true,
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: 'Please try again later'
    });
  }
}
