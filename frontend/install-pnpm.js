#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Installing pnpm...');
  
  // Try to enable corepack first (available in Node.js 16.10+)
  try {
    execSync('corepack enable', { stdio: 'inherit' });
    console.log('Corepack enabled successfully');
  } catch (error) {
    console.log('Corepack not available, trying npm install...');
    
    // Fallback to npm install
    try {
      execSync('npm install -g pnpm', { stdio: 'inherit' });
      console.log('pnpm installed via npm');
    } catch (npmError) {
      console.error('Failed to install pnpm via npm:', npmError.message);
      process.exit(1);
    }
  }
  
  // Verify pnpm installation
  try {
    execSync('pnpm --version', { stdio: 'inherit' });
    console.log('pnpm is now available');
  } catch (verifyError) {
    console.error('pnpm installation verification failed:', verifyError.message);
    process.exit(1);
  }
  
} catch (error) {
  console.error('Error installing pnpm:', error.message);
  process.exit(1);
}