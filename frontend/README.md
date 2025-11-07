# HelloWorld React Application

A minimal React application built with React 19, Vite, TypeScript, and ShadCN/UI components.

## Setup Instructions

This project uses pnpm as the package manager. If pnpm is not installed on your system, follow these steps:

### Option 1: Automatic Setup (Recommended)

```bash
npm run setup
```

This will install pnpm globally and then install all project dependencies.

### Option 2: Manual Setup

1. Install pnpm globally:
```bash
npm install -g pnpm
```

2. Install dependencies:
```bash
pnpm install
```

### Option 3: Enable Corepack (Node.js 16.10+)

```bash
corepack enable
pnpm install
```

## Available Scripts

- `npm run dev` or `pnpm dev` - Start development server
- `npm run build` or `pnpm build` - Build for production
- `npm run preview` or `pnpm preview` - Preview production build
- `npm run eslint` or `pnpm eslint` - Run ESLint
- `npm run test` or `pnpm test` - Run tests

## Features

- **Basic HelloWorld Page** (`/hello`) - Simple, responsive HelloWorld component
- **Enhanced HelloWorld Page** (`/enhanced`) - Interactive version with multi-language greetings
- **Responsive Navigation** - Clean header with navigation between pages
- **Dark/Light Theme Support** - Built-in theme switching capability
- **TypeScript** - Full type safety throughout the application

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── simple-layout.tsx    # Main layout with navigation
│   └── ui/                      # ShadCN/UI components
├── pages/
│   ├── hello-world.tsx          # Basic HelloWorld page
│   └── enhanced-hello.tsx       # Interactive HelloWorld page
├── lib/
│   └── utils.ts                 # Utility functions
└── styles/
    └── index.css                # Global styles and theme variables
```

## Technology Stack

- **React 19** - Latest React with concurrent features
- **Vite 7** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **ShadCN/UI** - Component library with Radix UI primitives
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

## Troubleshooting

### pnpm Command Not Found

If you see `spawnSync pnpm ENOENT` error, it means pnpm is not installed. Run:

```bash
npm run install:pnpm
```

Then run:

```bash
pnpm install
pnpm build
```

### Using npm instead of pnpm

While this project is optimized for pnpm, you can use npm by:

1. Deleting `pnpm-lock.yaml`
2. Running `npm install`
3. Using `npm run` commands instead of `pnpm`

Note: Using npm may result in different dependency versions and larger node_modules.