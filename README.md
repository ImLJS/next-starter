# Next.js Starter

A modern, full-stack Next.js starter template with authentication, database ORM, and type-safe APIs.

## Tech Stack

- **[Next.js 16](https://nextjs.org)** - React framework with App Router and Turbopack
- **[Better Auth](https://www.better-auth.com/)** - Modern authentication library
- **[tRPC](https://trpc.io)** - End-to-end type-safe APIs
- **[Drizzle ORM](https://orm.drizzle.team)** - TypeScript ORM for PostgreSQL
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[React Query](https://tanstack.com/query)** - Powerful data synchronization
- **[Zod](https://zod.dev)** - TypeScript-first schema validation

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.3.6 or later
- PostgreSQL database

### Installation

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env

# Push database schema
bun db:push

# Start development server
bun dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `bun dev` - Start development server with Turbopack
- `bun build` - Build for production
- `bun start` - Start production server
- `bun preview` - Build and start production server
- `bun check` - Lint and format check with Biome
- `bun check:write` - Lint and format with auto-fix
- `bun typecheck` - Run TypeScript type checking
- `bun db:push` - Push schema changes to database
- `bun db:studio` - Open Drizzle Studio
- `bun db:generate` - Generate migrations
- `bun db:migrate` - Run migrations
- `bun cz` - Create conventional commits

## Features

- ✅ Server Components & Server Actions
- ✅ Type-safe database queries with Drizzle ORM
- ✅ Full-stack type safety with tRPC
- ✅ Authentication with Better Auth
- ✅ PostgreSQL database
- ✅ Tailwind CSS v4 with CSS-first configuration
- ✅ Code quality tools (Biome, TypeScript, Husky)
- ✅ Conventional commits with Commitizen

## Environment Variables

Create a `.env` file based on `.env.example` and configure:

- `DATABASE_URL` - PostgreSQL connection string
- `BETTER_AUTH_SECRET` - Secret for Better Auth
- Additional auth provider credentials (if using OAuth)

## Deployment

This project can be deployed to:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any platform supporting Next.js

Make sure to configure environment variables and set up your PostgreSQL database in production.
