#!/usr/bin/env node

/**
 * Test EmailJS configuration
 * Run this to verify your EmailJS setup
 */

// Test EmailJS configuration
const testEmailJS = async () => {
  console.log('🧪 Testing EmailJS Configuration...\n');

  // Check environment variables
  const serviceId = process.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log('📋 Configuration Check:');
  console.log(`Service ID: ${serviceId ? '✅ Set' : '❌ Missing'}`);
  console.log(`Template ID: ${templateId ? '✅ Set' : '❌ Missing'}`);
  console.log(`Public Key: ${publicKey ? '✅ Set' : '❌ Missing'}`);

  if (!serviceId || !templateId || !publicKey) {
    console.log('\n❌ EmailJS not properly configured!');
    console.log('\n💡 Please set these environment variables:');
    console.log('   VITE_EMAILJS_SERVICE_ID=your_service_id');
    console.log('   VITE_EMAILJS_TEMPLATE_ID=your_template_id');
    console.log('   VITE_EMAILJS_PUBLIC_KEY=your_public_key');
    return;
  }

  console.log('\n✅ EmailJS configuration looks good!');
  console.log('\n🚀 You can now test the contact form in your browser.');
};

// Run the test
testEmailJS();
