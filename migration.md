# TASK PROMPT: Migration from Vite + React to Next.js App Router + TypeScript (Preserving Design & Animations)

> **Role & Perspective**: Senior Software Engineer / Lead Frontend Architect  
> **Objective**: Migrate this Vite + React + SASS + GSAP portfolio project into Next.js (App Router) with full TypeScript (`.tsx`) without altering the visual design, SCSS styles, layout, or animations (100% Pixel-Perfect & Design Preserved).

---

## 🏗️ 1. TARGET STACK & ARCHITECTURE
- **Framework**: Next.js latest version (App Router)
- **Language**: TypeScript (`strict: true`)
- **Styling**: SASS / SCSS (`sass` package)
- **Animation**: GSAP (`gsap` + `@gsap/react`)
- **Icons**: `react-icons`
- **Fonts**: Optimized via `next/font/local`

---

## 📜 2. MIGRATION STEPS (STEP-BY-STEP INSTRUCTIONS)

### Step 1: Project Initialization & Dependency Setup
1. Initialize the Next.js App Router project with TypeScript configuration.
2. Install required dependencies: `sass`, `gsap`, `@gsap/react`, `react-icons`, `axios`.
3. Configure `tsconfig.json` path aliases (e.g., `@/*` pointing to `./src/*` or root).

### Step 2: Asset & Font Optimization Migration
1. Move static assets from the old `public/` directory into Next.js `public/`.
2. For custom fonts like `Rajdhani-Regular.ttf`, integrate them using `next/font/local` inside `src/app/layout.tsx` to prevent FOUT (Flash of Unstyled Text) and maintain 100% typography precision.

### Step 3: Global Layout & SCSS Architecture
1. Migrate global styles from `src/App.scss` to `src/app/globals.scss` or import global SCSS in `src/app/layout.tsx`.
2. Ensure global CSS classes such as `.wrapper`, `.light-animate`, CSS variables, and keyframe animations remain intact without missing class names.

### Step 4: Client Components Strategy (GSAP & React Hooks)
1. Since Next.js App Router defaults to Server Components, add the `'use client';` directive to components utilizing GSAP animations, `useRef`, `useEffect`, or event listeners.
2. Convert `App.jsx` into `src/app/page.tsx` or a dedicated client wrapper component `PortfolioWrapper.tsx`.
3. For GSAP hooks (`useGSAP`), explicitly type `useRef` hooks (e.g., `const container = useRef<HTMLDivElement>(null)`).

### Step 5: Component Conversion to TypeScript (`.tsx`)
Convert all existing components from `.jsx` to `.tsx` with strict TypeScript prop interfaces:
- `Navbar` (`src/components/Navbar`)
- `Hero` (`src/components/Hero`)
- `About` (`src/components/About`)
- `Experience` (`src/components/Experience`)
- `Works` (`src/components/Works`)
- `Contact` (`src/components/Contact`)
- `Footer` (`src/components/Footer`)

**Component Conversion Rules:**
- DO NOT alter existing CSS class names, HTML element structures, or inline style attributes.
- When replacing standard HTML `<img>` elements with `next/image`, ensure dimensions (`width`, `height`, `fill`) and positioning styles remain strictly identical.

### Step 6: SEO & Metadata Configuration
Add professional metadata inside `src/app/layout.tsx`:
- `title`: Portfolio Hadis
- `description`: Professional Web Developer Portfolio
- OpenGraph & Favicon configuration.

---

## 🚫 STRICT GUARDRAILS
1. **DO NOT** replace SCSS with TailwindCSS or any other CSS framework. Preserve original SCSS styles!
2. **DO NOT** modify existing margin, padding, HSL/HEX color codes, z-index layers, or GSAP keyframes.
3. **DO NOT** remove ref attributes or DOM IDs targeted by GSAP selectors.
4. **ENSURE** zero TypeScript errors (`any` types must be minimized) and a successful build with `npm run build`.

---

## 🔍 EXECUTION & VERIFICATION
1. Run `npm run dev` and ensure there are no hydration mismatch warnings in the browser console.
2. Run `npm run build` and `npx tsc --noEmit` to verify 100% type safety and clean build execution.
