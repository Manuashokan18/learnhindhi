# Learn Hindi With Me

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- [pnpm](https://pnpm.io)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (`base-nova` style, built on [Base UI](https://base-ui.com) — not Radix)
- [Zustand](https://zustand.docs.pmnd.rs) for client state
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) for forms/validation
- [Axios](https://axios-http.com) for client-side API calls
- ESLint + Prettier (`prettier-plugin-tailwindcss`)
- [Lucide React](https://lucide.dev) for icons

> This project targets a pre-release version of Next.js. Conventions and APIs may differ from
> what's documented publicly — see [AGENTS.md](./AGENTS.md) and
> `node_modules/next/dist/docs/` before assuming standard Next.js behavior.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Purpose                          |
| ------------------- | -------------------------------- |
| `pnpm dev`          | Start the dev server             |
| `pnpm build`        | Production build                 |
| `pnpm start`        | Run the production build         |
| `pnpm lint`         | Lint with ESLint                 |
| `pnpm lint:fix`     | Lint and auto-fix                |
| `pnpm format`       | Format with Prettier             |
| `pnpm format:check` | Check formatting without writing |
| `pnpm typecheck`    | Type-check with `tsc --noEmit`   |

## Project structure

```
app/                Routes (App Router) — layout.tsx, page.tsx, globals.css
components/
  ui/                shadcn-managed primitives — regenerate via `shadcn add`, don't hand-edit
  common/             hand-written shared components
lib/
  utils.ts            shadcn's cn() helper
  api.ts               axios instance
  validations/          Zod schemas
stores/                Zustand stores
hooks/                 custom React hooks
types/                 shared TypeScript types
public/                static assets
```

No `src/` directory — app code lives at the repo root. Non-route code is organized by type
(`components/`, `lib/`, `stores/`, etc.); revisit this if the app grows into several distinct
feature areas.

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable                   | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL for the axios client (`lib/api.ts`) |

## Notes

- shadcn's `form` component isn't published yet for the `base-nova` (Base UI) registry style
  used here — `react-hook-form` and `zod` work directly via `useForm`, just without shadcn's
  `<Form>` wrapper. Recheck `pnpm dlx shadcn@latest view form` once the registry catches up.
- Prefer native `fetch` over axios inside Server Components and Route Handlers — it plugs into
  Next.js's caching/revalidation, which axios bypasses. Reserve axios (`lib/api.ts`) for
  client-side calls.
