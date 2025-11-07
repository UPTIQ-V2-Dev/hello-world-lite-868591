#!/bin/bash

echo "Setting up pnpm..."

# First try to enable corepack (available in Node.js 16.10+)
if command -v corepack &> /dev/null; then
    echo "Enabling corepack..."
    corepack enable
    if command -v pnpm &> /dev/null; then
        echo "pnpm is now available via corepack"
        pnpm --version
        exit 0
    fi
fi

# Fallback: Install pnpm using npm
echo "Installing pnpm via npm..."
npm install -g pnpm

# Verify installation
if command -v pnpm &> /dev/null; then
    echo "pnpm installed successfully!"
    pnpm --version
else
    echo "Failed to install pnpm"
    exit 1
fi