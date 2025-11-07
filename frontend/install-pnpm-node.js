const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Installing pnpm...');

try {
  // Method 1: Try corepack enable (works with Node.js 16.10+)
  console.log('Trying corepack enable...');
  try {
    execSync('corepack enable', { stdio: 'inherit' });
    console.log('✅ Corepack enabled successfully');
    
    // Check if pnpm is now available
    execSync('pnpm --version', { stdio: 'inherit' });
    console.log('✅ pnpm is available via corepack');
    process.exit(0);
  } catch (corepackError) {
    console.log('⚠️  Corepack method failed, trying npm install...');
  }

  // Method 2: Install via npm
  console.log('Installing pnpm via npm...');
  execSync('npm install -g pnpm', { stdio: 'inherit' });
  
  // Verify installation
  execSync('pnpm --version', { stdio: 'inherit' });
  console.log('✅ pnpm installed successfully via npm');
  
} catch (error) {
  console.error('❌ Failed to install pnpm:', error.message);
  console.log('\n🔧 Manual installation steps:');
  console.log('1. Run: npm install -g pnpm');
  console.log('2. Or enable corepack: corepack enable');
  console.log('3. Then run: pnpm install');
  process.exit(1);
}