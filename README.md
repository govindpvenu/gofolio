# gofolio

A minimal portfolio for developers built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
pnpm dev            # Start the local development server
pnpm build          # Build the app for production
pnpm start          # Start the production server
pnpm lint           # Run ESLint
pnpm check-types    # Run TypeScript checks
pnpm format:write   # Format files with Prettier
```

## Editing Content

Most portfolio content lives in `src/profile/data`:

- `user.ts` - profile details, bio, contact info
- `projects.ts` - project list
- `experiences.ts` - work experience
- `tech-stack.ts` - tools and technologies
- `social-links.ts` - social profiles

Site-level config is in `src/config/site.ts`.

## Requirements

- Node.js `20` or `22+`
- pnpm `9+`
