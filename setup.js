#!/usr/bin/env node

/**
 * Cross-platform setup script for the portfolio project
 * Ensures proper permissions and platform-specific dependencies
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isWindows = process.platform === 'win32';
const isMac = process.platform === 'darwin';
const isLinux = process.platform === 'linux';

console.log(`🚀 Setting up portfolio for ${process.platform}...`);

// Function to run commands with proper error handling
function runCommand(command, description) {
  try {
    console.log(`📦 ${description}...`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed`);
  } catch (error) {
    console.error(`❌ Error during ${description}:`, error.message);
    process.exit(1);
  }
}

// Function to set executable permissions (Unix-like systems only)
function setExecutablePermissions() {
  if (isWindows) {
    console.log('ℹ️  Skipping permission setup on Windows');
    return;
  }

  try {
    const binDir = path.join(process.cwd(), 'node_modules', '.bin');
    if (fs.existsSync(binDir)) {
      console.log('🔧 Setting executable permissions...');
      execSync(`chmod +x ${binDir}/*`, { stdio: 'inherit' });
      console.log('✅ Executable permissions set');
    }
  } catch (error) {
    console.warn('⚠️  Could not set executable permissions:', error.message);
  }
}

// Main setup process
async function setup() {
  try {
    // Clean previous installations
    if (fs.existsSync('node_modules')) {
      console.log('🧹 Cleaning previous installation...');
      if (isWindows) {
        runCommand('rmdir /s /q node_modules', 'Removing node_modules');
      } else {
        runCommand('rm -rf node_modules', 'Removing node_modules');
      }
    }

    if (fs.existsSync('package-lock.json')) {
      console.log('🧹 Cleaning package-lock.json...');
      fs.unlinkSync('package-lock.json');
    }

    // Install dependencies
    runCommand('npm install', 'Installing dependencies');

    // Set executable permissions
    setExecutablePermissions();

    // Run type check
    runCommand('npm run type-check', 'Running TypeScript type check');

    // Run linting
    runCommand('npm run lint', 'Running ESLint');

    console.log('\n🎉 Setup completed successfully!');
    console.log('\n📋 Available commands:');
    console.log('  npm run dev        - Start development server');
    console.log('  npm run build      - Build for production');
    console.log('  npm run preview    - Preview production build');
    console.log('  npm run lint       - Run ESLint');
    console.log('  npm run lint:fix   - Fix ESLint issues');
    console.log('\n🌐 Your portfolio is ready to run!');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run setup
setup();
