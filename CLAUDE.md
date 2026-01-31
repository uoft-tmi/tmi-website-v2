# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run lint         # Run ESLint (--max-warnings=0)
npm run typecheck    # Run TypeScript type checking
npm run ci           # Full CI check: lint + typecheck + build
```

## Architecture

This is the **Trustworthy Machine Intelligence (TMI)** student organization website built with Next.js 16 using the App Router.

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4 with custom theme colors defined in `src/app/globals.css`
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Strict mode enabled

### Project Structure
- `src/app/` — App Router pages (`layout.tsx` wraps all pages with Navbar/Footer)
- `src/app/components/` — Shared components (Navbar, Footer)
- `src/app/components/projects/` — Project display components with types in `types.ts`
- `src/app/components/events/` — Event display components with types in `type.ts`
- `src/app/about/components/` — About page-specific components

### Theme Colors
Custom TMI brand colors are defined as CSS variables in `globals.css`:
- `--color-primary`: TMI orange (#ff5e38)
- `--color-secondary`: TMI teal (#0aabbe)
- Dark mode support via `.dark` class on html element

### Path Aliases
Use `@/*` to import from `src/*` (configured in tsconfig.json).

## Conventions

- Use [Conventional Commits](https://www.conventionalcommits.org) for commit messages
- Keep PRs focused on one change
- Ensure lint/typecheck pass before merging
