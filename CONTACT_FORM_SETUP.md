# Contact Form Setup Guide

This guide will help you set up the contact form to send emails directly to your inbox using Vercel's serverless functions.

## 🚀 Quick Setup (Recommended: SendGrid)

### Step 1: Create a SendGrid Account

1. Go to [SendGrid](https://sendgrid.com/) and create a free account
2. Verify your email address
3. Create an API key:
   - Go to Settings → API Keys
   - Click "Create API Key"
   - Choose "Restricted Access"
   - Give it "Mail Send" permissions
   - Copy the API key (you'll need it later)

### Step 2: Configure Vercel Environment Variables

1. Go to your Vercel dashboard
2. Select your portfolio project
3. Go to Settings → Environment Variables
4. Add these variables:

```
SENDGRID_API_KEY=your_sendgrid_api_key_here
FROM_EMAIL=your-email@domain.com
TO_EMAIL=your-email@domain.com
```

### Step 3: Deploy and Test

1. Push your changes to GitHub
2. Vercel will automatically deploy
3. Test the contact form on your live site

## 🔧 Alternative Setup: Gmail SMTP

If you prefer to use Gmail instead of SendGrid:

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password

1. Go to Google Account → Security
2. Under "2-Step Verification", click "App passwords"
3. Generate a new app password for "Mail"
4. Copy the 16-character password

### Step 3: Update API Route

1. Rename `/api/send-email.js` to `/api/send-email-backup.js`
2. Rename `/api/send-email-smtp.js` to `/api/send-email.js`

### Step 4: Configure Vercel Environment Variables

Add these variables in Vercel:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your_16_character_app_password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=your-email@gmail.com
```

## 📧 EmailJS Setup (Fallback Option)

If you prefer client-side email sending:

### Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Create a new service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key

### Step 2: Configure Environment Variables

Add these to Vercel:

```
VITE_EMAIL_SERVICE=emailjs
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🛠️ Local Development

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Create Local Environment File

Create `.env.local` in your project root:

```bash
# For Vercel API (recommended)
VITE_EMAIL_SERVICE=vercel
VITE_API_ENDPOINT=/api/send-email

# For local testing, you can use EmailJS
# VITE_EMAIL_SERVICE=emailjs
# VITE_EMAILJS_SERVICE_ID=your_service_id
# VITE_EMAILJS_TEMPLATE_ID=your_template_id
# VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 3: Test Locally

```bash
npm run dev
```

## 🔒 Security Features

The contact form includes several security measures:

- **Input Validation**: Server-side validation of all form fields
- **Email Format Validation**: Ensures valid email addresses
- **Rate Limiting**: Built into Vercel's serverless functions
- **CORS Protection**: Proper CORS headers for security
- **Error Handling**: Graceful error handling without exposing sensitive data
- **Spam Protection**: Basic validation to prevent spam

## 📊 Email Template

The emails sent will include:

- **Sender's Name and Email**
- **Message Content**
- **Professional HTML Formatting**
- **Reply-To Header** (so you can reply directly)
- **Timestamp and Source Information**

## 🚨 Troubleshooting

### Common Issues

1. **"Email service not configured"**
   - Check that all required environment variables are set in Vercel
   - Ensure variable names match exactly (case-sensitive)

2. **"Failed to send email"**
   - Check SendGrid API key is valid and has proper permissions
   - Verify FROM_EMAIL and TO_EMAIL are correct
   - Check Vercel function logs for detailed error messages

3. **CORS Errors**
   - Ensure your domain is properly configured in Vercel
   - Check that the API endpoint URL is correct

4. **Form Not Submitting**
   - Check browser console for JavaScript errors
   - Verify all required fields are filled
   - Ensure message is at least 10 characters long

### Debug Mode

To enable debug logging, add this to your Vercel environment variables:

```
DEBUG=true
```

This will provide more detailed error messages in the Vercel function logs.

## 📈 Monitoring

### Vercel Analytics

1. Enable Vercel Analytics in your project dashboard
2. Monitor function execution times and errors
3. Set up alerts for failed email sends

### Email Delivery

- Check your email's spam folder
- Monitor SendGrid dashboard for delivery statistics
- Set up email notifications for failed sends

## 🔄 Testing

### Manual Testing

1. Fill out the contact form with test data
2. Submit and verify success message appears
3. Check your email inbox for the message
4. Test with invalid data to verify error handling

### Automated Testing

You can add automated tests for the contact form:

```javascript
// Example test for the API endpoint
test('POST /api/send-email', async () => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message'
    })
  });
  
  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data.success).toBe(true);
});
```

## 🎯 Best Practices

1. **Always use environment variables** for sensitive data
2. **Test thoroughly** before deploying to production
3. **Monitor email delivery** and set up alerts
4. **Keep API keys secure** and rotate them regularly
5. **Use a professional email address** for FROM_EMAIL
6. **Set up email templates** for consistent branding

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review Vercel function logs
3. Test with different email providers
4. Verify all environment variables are set correctly

---

**🎉 Your contact form is now ready to receive emails directly to your inbox!**
