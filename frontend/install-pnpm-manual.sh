#!/bin/bash

echo "🚀 Setting up HelloWorld React Application"
echo "==========================================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if Node.js is available
if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Try to enable corepack first (available in Node.js 16.10+)
echo "🔧 Attempting to enable corepack..."
if command_exists corepack; then
    corepack enable
    echo "✅ Corepack enabled"
    
    if command_exists pnpm; then
        echo "✅ pnpm is now available via corepack"
        pnpm --version
    fi
else
    echo "⚠️  Corepack not available, using npm to install pnpm"
fi

# Install pnpm if not available
if ! command_exists pnpm; then
    echo "📦 Installing pnpm globally via npm..."
    npm install -g pnpm
    
    if command_exists pnpm; then
        echo "✅ pnpm installed successfully: $(pnpm --version)"
    else
        echo "❌ Failed to install pnpm. Please install manually:"
        echo "   npm install -g pnpm"
        exit 1
    fi
else
    echo "✅ pnpm is already available: $(pnpm --version)"
fi

# Install project dependencies
echo "📦 Installing project dependencies..."
pnpm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
    echo ""
    echo "🎉 Setup complete! You can now run:"
    echo "   pnpm dev    # Start development server"
    echo "   pnpm build  # Build for production"
    echo "   pnpm test   # Run tests"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi