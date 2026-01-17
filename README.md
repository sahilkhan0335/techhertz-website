# TechHertz Website

![CI Pipeline](https://github.com/sahilkhan0335/techhertz-website/workflows/CI%20Pipeline/badge.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

Modern, responsive website for TechHertz built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion. Features include an interactive process visualization with an animated infinity shape and dynamic node system.

## 🚀 Live Demo

- **Production:** [Deployed on Vercel](https://techhertz-website.vercel.app) (from `main` branch)
- **Development:** Automatic preview deployments for each PR

## ✨ Features

### Hero Section
- **Responsive Design**: Fully responsive layout optimized for all screen sizes
- **Smooth Animations**: Framer Motion powered entrance animations
- **Call-to-Actions**: Interactive buttons with hover effects
- **3D Elements**: Placeholder for 3D visual integration

### Process Section
- **Animated Infinity Shape**: SVG-based infinity loop with parametric equations
- **Interactive Nodes**: 9 process nodes (4 design, 5 development) with:
  - Hover effects and animations
  - Detailed dropdown panels
  - Real-time completion tracking
  - Color-coded states (green for completed, purple for hover)
- **Blue Line Animation**: Synchronized 8-second animation showing progress
- **Responsive Design**: Adapts to all screen sizes with optimized positioning
- **Typing Tagline**: "KEEP GROWING WITH US" with typing cursor effect

### Navigation
- **Sticky Navbar**: Fixed navigation with scroll detection
- **Responsive Menu**: Mobile hamburger menu with smooth transitions
- **Active Link States**: Visual feedback for navigation

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **React**: 19.2.3

### Styling
- **CSS Framework**: Tailwind CSS 4
- **Animations**: Framer Motion 12.26.2

### Development
- **Linting**: ESLint 9 with Next.js config
- **Type Checking**: TypeScript strict mode
- **Package Manager**: npm

### Fonts
- **Primary**: Geist Sans
- **Monospace**: Geist Mono
- **Display**: Orbitron (process titles)
- **Code**: Share Tech Mono

## 📁 Project Structure

```
techhertz-website/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                    # Main CI pipeline
│   │   ├── branch-protection.yml     # Branch flow validation
│   │   └── deploy.yml                # Deployment notification
│   └── CI_CD_DOCUMENTATION.md        # CI/CD workflow guide
├── public/
│   └── thlogo.png                    # Tech Hertz logo
├── src/
│   ├── app/
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout with fonts
│   │   ├── page.tsx                  # Home page
│   │   └── process/                  # Process page (optional)
│   └── components/
│       ├── hero-section/
│       │   ├── index.tsx             # Hero section container
│       │   ├── buttons/              # CTA buttons
│       │   │   ├── index.tsx
│       │   │   ├── contact-button.tsx
│       │   │   ├── know-more-button.tsx
│       │   │   └── button-icon.tsx
│       │   ├── hero-content/         # Text content
│       │   │   ├── index.tsx
│       │   │   ├── hero-heading.tsx
│       │   │   └── hero-description.tsx
│       │   └── hero-image/           # 3D placeholder
│       ├── navbar/
│       │   ├── nav.tsx               # Main navbar
│       │   ├── nav-container.tsx     # Sticky container
│       │   ├── nav-content.tsx       # Content wrapper
│       │   ├── logo/                 # Logo components
│       │   ├── navlinks/             # Desktop navigation
│       │   ├── mobilemenu/           # Mobile menu
│       │   ├── hooks/                # Custom hooks
│       │   └── constants/            # Navigation data
│       └── process/
│           ├── process-section/
│           │   └── index.tsx         # Process section wrapper
│           ├── infinite-tagline-marquee/
│           │   ├── index.tsx
│           │   ├── use-tagline-animation.ts
│           │   ├── animated-letter.tsx
│           │   └── typing-cursor.tsx
│           ├── process-title/
│           │   └── index.tsx
│           ├── infinity-shape/
│           │   ├── index.tsx
│           │   ├── infinity-3d-shape.tsx
│           │   ├── blue-line-animation.tsx
│           │   ├── white-outline-path.tsx
│           │   ├── path-generator.ts
│           │   ├── gradient-overlay.tsx
│           │   └── loading-spinner.tsx
│           ├── infinity-process-section/
│           │   ├── index.tsx
│           │   ├── calculate-node-positions.ts
│           │   ├── animation-tracker.ts
│           │   ├── use-dimensions.ts
│           │   ├── use-completed-nodes.ts
│           │   ├── use-node-positions.ts
│           │   ├── shape-container.tsx
│           │   ├── node-container.tsx
│           │   └── node-animation-wrapper.tsx
│           ├── process-node/
│           │   ├── index.tsx
│           │   ├── node-button.tsx
│           │   ├── node-icon.tsx
│           │   ├── node-dropdown.tsx
│           │   └── dropdown-position.ts
│           └── constants/
│               └── process-data.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 🏗️ Architecture Highlights

### Modular Component Design
Every component is broken down to the smallest reusable unit:
- **29+ micro-components** for maximum reusability
- **Custom hooks** for complex logic separation
- **Utility functions** for calculations and positioning
- **Type-safe** with TypeScript interfaces

### Animation System
- **Parametric equations** for infinity shape generation
- **Synchronized timings** between blue line and node completion
- **Framer Motion** for smooth transitions and effects
- **Performance optimized** with useMemo and useCallback

### State Management
- **React hooks** for local state
- **Custom hooks** for shared logic
- **Portal rendering** for dropdowns (z-index management)
- **Event listeners** for scroll and touch interactions

## 🚦 Getting Started

### Prerequisites
- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/sahilkhan0335/techhertz-website.git
cd techhertz-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Available Scripts

```bash
npm run dev      # Start development server (Turbopack enabled)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npx tsc --noEmit # Type check without compilation
```

## 🔄 CI/CD Workflow

### Branch Strategy

```
feat/fix/chore/* → dev (CI validation) → main (Auto deploy)
```

### CI Pipeline (Runs on PR to dev/main)
1. **Lint** - ESLint code quality check
2. **Type Check** - TypeScript validation
3. **Test** - Run test suite (if present)
4. **Build** - Production build verification
5. **Code Quality** - Track changed files
6. **Security Audit** - Dependency vulnerability scan
7. **PR Validation** - Branch flow enforcement

### Development Workflow

```bash
# 1. Create feature branch from dev
git checkout dev
git pull origin dev
git checkout -b feat/your-feature

# 2. Make changes and test locally
npm run dev
npm run build
npm run lint

# 3. Commit and push
git add .
git commit -m "feat: add your feature"
git push origin feat/your-feature

# 4. Create PR to dev
# CI runs automatically - all checks must pass

# 5. After testing on dev, create PR from dev to main
# Automatic Vercel deployment on merge
```

See [CI/CD Documentation](.github/CI_CD_DOCUMENTATION.md) for details.

## 📝 Code Style

### Component Structure
```typescript
"use client";
import { ComponentDependencies } from "./dependencies";

interface ComponentProps {
  prop: string;
  className?: string;
}

const Component = ({ prop, className = "" }: ComponentProps) => {
  // Hooks
  // Handlers
  // Render
  return <div className={className}>{/* JSX */}</div>;
};

export default Component;
```

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection`)
- **Files**: kebab-case (e.g., `hero-section.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useDimensions`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `PROCESS_NODES`)

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `chore:` - Maintenance tasks
- `docs:` - Documentation updates
- `style:` - Code formatting
- `refactor:` - Code restructuring

## 🎨 Design System

### Colors
- **Primary Blue**: `#3b82f6`
- **Completed Green**: `#10b981` / `#059669`
- **Hover Purple**: `#8b5cf6` / `#4f46e5`
- **Completed Hover Cyan**: `#06b6d4`

### Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Typography
- Headings: Orbitron (bold, large sizes)
- Body: Geist Sans
- Code: Share Tech Mono, Geist Mono

## 🧪 Testing (Coming Soon)

```bash
npm test          # Run test suite
npm run test:watch  # Watch mode
npm run test:coverage  # Coverage report
```

## 📦 Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
Create `.env.local`:
```bash
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Vercel Deployment
- **Automatic**: Push to `main` branch triggers deployment
- **Manual**: Run `vercel` CLI command
- **Preview**: Every PR gets preview deployment

## 🤝 Contributing

1. Fork the repository
2. Create feature branch from `dev`
3. Make your changes
4. Run local checks: `npm run lint && npm run build`
5. Commit with conventional commit messages
6. Push and create PR to `dev` branch
7. Wait for CI checks to pass
8. Request code review

## 📄 License

This project is private and proprietary to TechHertz.

## 🔗 Links

- **Repository**: [github.com/sahilkhan0335/techhertz-website](https://github.com/sahilkhan0335/techhertz-website)
- **Documentation**: [CI/CD Guide](.github/CI_CD_DOCUMENTATION.md)
- **Issues**: [GitHub Issues](https://github.com/sahilkhan0335/techhertz-website/issues)

## 📧 Contact

For questions or support, reach out to the TechHertz team.

---

**Built with ❤️ by TechHertz** | Keep Growing With Us
