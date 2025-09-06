#!/usr/bin/env node

/**
 * EmailJS Setup Helper
 * This script helps you configure EmailJS for your contact form
 */

import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function setupEmailJS() {
  console.log('📧 EmailJS Setup Helper\n');
  console.log('This will help you configure EmailJS for your contact form.\n');

  try {
    // Get EmailJS credentials
    const serviceId = await question('Enter your EmailJS Service ID: ');
    const templateId = await question('Enter your EmailJS Template ID: ');
    const publicKey = await question('Enter your EmailJS Public Key: ');

    if (!serviceId || !templateId || !publicKey) {
      console.log('\n❌ All fields are required!');
      process.exit(1);
    }

    // Create .env.local file
    const envContent = `# EmailJS Configuration
VITE_EMAIL_SERVICE=emailjs
VITE_EMAILJS_SERVICE_ID=${serviceId}
VITE_EMAILJS_TEMPLATE_ID=${templateId}
VITE_EMAILJS_PUBLIC_KEY=${publicKey}
`;

    fs.writeFileSync('.env.local', envContent);
    console.log('\n✅ Created .env.local file with your EmailJS configuration!');

    // Create Vercel environment variables instructions
    const vercelInstructions = `
# Vercel Environment Variables
# Add these to your Vercel dashboard (Settings → Environment Variables):

VITE_EMAIL_SERVICE=emailjs
VITE_EMAILJS_SERVICE_ID=${serviceId}
VITE_EMAILJS_TEMPLATE_ID=${templateId}
VITE_EMAILJS_PUBLIC_KEY=${publicKey}
`;

    fs.writeFileSync('vercel-env-vars.txt', vercelInstructions);
    console.log('📝 Created vercel-env-vars.txt with instructions for Vercel deployment');

    console.log('\n🎉 EmailJS setup complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Test locally: npm run dev');
    console.log('2. Test the contact form in your browser');
    console.log('3. Deploy to Vercel with the environment variables');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
  } finally {
    rl.close();
  }
}

// Run setup
setupEmailJS();
