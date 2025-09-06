#!/usr/bin/env node

/**
 * Test script for the contact form API
 * Run this to test the contact form functionality locally
 */

const testData = {
  name: 'Test User',
  email: 'test@example.com',
  message: 'This is a test message from the contact form. It should be at least 10 characters long to pass validation.'
};

async function testContactForm() {
  console.log('🧪 Testing Contact Form API...\n');

  try {
    // Test the API endpoint
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ Contact form test PASSED');
      console.log('📧 Response:', result);
    } else {
      console.log('❌ Contact form test FAILED');
      console.log('🚨 Error:', result.error);
      console.log('📝 Details:', result.details);
    }

  } catch (error) {
    console.log('❌ Contact form test FAILED');
    console.log('🚨 Network Error:', error.message);
    console.log('\n💡 Make sure the development server is running:');
    console.log('   npm run dev');
  }
}

// Run the test
testContactForm();
