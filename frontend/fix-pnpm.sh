#!/bin/bash

echo "🔧 Fixing pnpm installation issue..."
echo "======================================"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check Node.js
if ! command_exists node; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Method 1: Try corepack (recommended for Node.js 16.10+)
echo "🔧 Trying corepack enable..."
if command_exists corepack; then
    corepack enable 2>/dev/null
    if command_exists pnpm; then
        echo "✅ pnpm available via corepack: $(pnpm --version)"
        echo "🎉 pnpm is now ready!"
        exit 0
    fi
fi

# Method 2: Install via npm
echo "📦 Installing pnpm via npm..."
if command_exists npm; then
    npm install -g pnpm
    
    # Update PATH to include global npm packages
    export PATH="$(npm config get prefix)/bin:$PATH"
    
    if command_exists pnpm; then
        echo "✅ pnpm installed: $(pnpm --version)"
        echo "🎉 pnpm is now ready!"
        echo ""
        echo "💡 You may need to restart your terminal or run:"
        echo "   export PATH=\"\$(npm config get prefix)/bin:\$PATH\""
        exit 0
    fi
fi

# Method 3: Download pnpm binary directly
echo "⬇️  Downloading pnpm binary..."
PNPM_DIR="$HOME/.local/bin"
mkdir -p "$PNPM_DIR"

if command_exists curl; then
    curl -fsSL https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linux-x64 -o "$PNPM_DIR/pnpm"
    chmod +x "$PNPM_DIR/pnpm"
    
    # Add to PATH
    export PATH="$PNPM_DIR:$PATH"
    
    if [ -x "$PNPM_DIR/pnpm" ]; then
        echo "✅ pnpm binary downloaded to $PNPM_DIR/pnpm"
        echo "🎉 pnpm is now ready!"
        echo ""
        echo "💡 Add this to your ~/.bashrc or ~/.zshrc:"
        echo "   export PATH=\"$PNPM_DIR:\$PATH\""
        exit 0
    fi
fi

echo "❌ Failed to install pnpm. Please install manually:"
echo "   Method 1: corepack enable"
echo "   Method 2: npm install -g pnpm"
echo "   Method 3: Use npm instead of pnpm"
exit 1