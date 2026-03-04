# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BBBot is a Telegram bot that manages content for https://bbki.ng. It supports two deployment modes:

1. **Node.js Server Mode** - Long-polling mode for traditional server deployment
2. **Cloudflare Worker Mode** - Serverless webhook mode using Cloudflare Workers

## Development Commands

```bash
# Install dependencies
pnpm install

# Run locally (Node.js polling mode)
pnpm dev

# Run locally with proxy (for debugging)
pnpm dev-local

# Run locally (Cloudflare Worker mode)
pnpm dev:worker

# Build for production (outputs to build/bbbot.js)
pnpm release

# Deploy to Cloudflare Workers
pnpm deploy
```

## Architecture

### Dual Runtime Support

The codebase abstracts runtime differences through `src/runtime.ts`:

- **Node.js mode** (`src/index.ts`): Uses `process.env` for environment variables, memory-based sessions
- **Worker mode** (`src/worker.ts`): Uses Cloudflare Worker `env` bindings, KV-based sessions

Both modes share the same bot logic in `src/bbbot.ts`.

### Key Components

**Commands** (`src/commands/`): Implement `BBCmd` interface from `types.ts`. Register commands in `src/commands/index.ts`. Commands can require admin privileges via `needAdmin: true`.

**Middlewares** (`src/middlewares/`):
- `login/` - OAuth flow, admin check, authentication state
- `session/` - Session management with dual storage (memory for Node, KV for Worker)
- `post/` - Text message handling for creating posts

**Stage** (`src/stage/`): Telegraf wizard scenes for multi-step interactions (e.g., `updateMovieScene`).

**Utils** (`src/utils/`):
- `DataBase.ts` - Supabase client singleton for DB operations and OAuth
- `Network.ts` - HTTP configuration
- `MsgHelper.ts` - Message formatting utilities

### Authentication Flow

1. User runs `/login` → GitHub OAuth URL via Supabase
2. OAuth callback contains auth code as `start` payload
3. `Login` middleware in `src/middlewares/login/index.ts` exchanges code for Supabase session
4. Session stored in Telegraf session (memory or KV)
5. `SessionRestore` middleware refreshes Supabase auth on each request
6. `AdminRequired` checks `ADMIN_EMAIL` match for privileged commands

### Post Creation

Sending a multi-line message creates a post:
- First line = title
- Remaining lines = body (converted from Markdown to HTML)
- Message is deleted after successful creation
- Requires admin authentication

### Environment Variables

**Required for all modes:**
- `BOT_TOKEN` - Telegram bot token
- `ADMIN_ID` - Telegram user ID for admin notifications
- `ADMIN_EMAIL` - Email for admin verification
- `SUPABASE_URL` / `SUPABASE_ANNO_KEY` - Supabase credentials

**Required for Worker mode:**
- `WEBHOOK_SECRET` - Path segment for webhook security
- `SESSION_KV` - KV namespace binding (configured in wrangler.toml)

**Optional:**
- `SITE_URL` - OAuth redirect URL

### Build System

- `build/build.mjs` - esbuild configuration, bundles to single file
- `build/defineEnv.mjs` - Inlines environment variables at build time using `JSON.stringify`

### Deployment

**Node.js Server:**
GitHub Actions workflow (`.github/workflows/release.yml`) builds and deploys via SSH to a server.

**Cloudflare Worker:**
Configure secrets with `wrangler secret put`, then run `pnpm deploy`. Webhook URL format:
```
https://<worker-domain>/telegram/<WEBHOOK_SECRET>
```
