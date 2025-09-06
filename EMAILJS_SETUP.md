# EmailJS Setup Guide (Free Alternative)

EmailJS is a great free alternative to SendGrid that allows you to send emails directly from your contact form without a backend server.

## 🚀 Quick Setup

### Step 1: Get Your EmailJS Credentials

1. **Go to [EmailJS](https://www.emailjs.com/) and sign in**
2. **Create a new service:**
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, Yahoo, etc.)
   - Follow the setup instructions for your provider
   - **Copy the Service ID**

3. **Create an email template:**
   - Go to "Email Templates" → "Create New Template"
   - Use this template:

```
Subject: Portfolio Contact: {{from_name}} ({{from_email}})

New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
Sent from your portfolio contact form
```

4. **Get your credentials:**
   - **Service ID**: From your service settings
   - **Template ID**: From your template settings
   - **Public Key**: From Account → API Keys

### Step 2: Configure Your Project

**Option A: Use the setup script (Recommended)**
```bash
npm run setup-emailjs
```

**Option B: Manual setup**

Create a `.env.local` file in your project root:
```bash
VITE_EMAIL_SERVICE=emailjs
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 3: Test Locally

```bash
npm run dev
```

1. Open http://localhost:3000
2. Scroll to the contact form
3. Fill out and submit the form
4. Check your email inbox!

### Step 4: Deploy to Vercel

1. **Add environment variables to Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add these variables:
     ```
     VITE_EMAIL_SERVICE=emailjs
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

2. **Deploy:**
   ```bash
   git add .
   git commit -m "Configure EmailJS contact form"
   git push origin main
   ```

3. **Test on live site:**
   - Visit your deployed portfolio
   - Test the contact form
   - Check your email!

## 🔧 Email Provider Setup

### Gmail Setup
1. Enable 2-Factor Authentication
2. Generate an App Password
3. Use your Gmail address and app password in EmailJS

### Outlook Setup
1. Use your Outlook email and password
2. Enable "Less secure app access" if needed

### Yahoo Setup
1. Enable 2-Factor Authentication
2. Generate an App Password
3. Use your Yahoo email and app password

## 📧 Email Template Variables

Your EmailJS template can use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content

## 🚨 Troubleshooting

### Common Issues

1. **"Email service not configured"**
   - Check that all environment variables are set
   - Verify variable names match exactly

2. **"Failed to send message"**
   - Check EmailJS dashboard for error logs
   - Verify your email provider credentials
   - Make sure your template uses the correct variable names

3. **Emails going to spam**
   - Add your domain to EmailJS authorized domains
   - Use a professional email address
   - Avoid spam trigger words in your template

4. **Template not working**
   - Check that variable names match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Test your template in EmailJS dashboard

### Debug Mode

To see detailed error messages, check your browser's developer console (F12) when submitting the form.

## 📊 EmailJS Limits

**Free Plan:**
- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

**Paid Plans:**
- More emails per month
- More services and templates
- Priority support
- Advanced features

## 🎯 Best Practices

1. **Test thoroughly** before deploying
2. **Monitor your email usage** in EmailJS dashboard
3. **Use professional email addresses** for better deliverability
4. **Keep your credentials secure** and don't commit them to git
5. **Set up email notifications** for failed sends

## 🔄 Switching Between Services

You can easily switch between EmailJS and Vercel API by changing the `VITE_EMAIL_SERVICE` environment variable:

- `VITE_EMAIL_SERVICE=emailjs` - Use EmailJS (free)
- `VITE_EMAIL_SERVICE=vercel` - Use Vercel API (requires SendGrid or SMTP)

## 📞 Support

If you need help:
1. Check EmailJS documentation
2. Review the troubleshooting section above
3. Test with different email providers
4. Check browser console for errors

---

**🎉 Your contact form is now ready to send emails for free with EmailJS!**
