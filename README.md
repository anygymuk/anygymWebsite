# anygymWebsite

Marketing website for [anygym](https://www.any-gym.com) — the universal gym membership for the UK.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (deployment)
- [anygymAPI](https://api.any-gym.com) leads endpoints (form persistence + SendGrid)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Local form testing

Run `anygymAPI` locally (`npm run start:dev`, default port 3000), then set:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

in `.env.local`. CORS on the API allows browser requests from the Next.js dev server.

## Environment variables

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.any-gym.com
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_API_URL` | anygymAPI base URL. Defaults to `https://api.any-gym.com` if unset. |

Form submissions (newsletter, gym group, investor) are handled by the API — no SendGrid or database config is needed on this site.

### API endpoints

| Form | Endpoint |
|------|----------|
| Newsletter | `POST {API_BASE}/leads/newsletter` |
| Gym group | `POST {API_BASE}/leads/gym-group` |
| Investor | `POST {API_BASE}/leads/investor` |

Client code lives in `lib/form-status.ts`.

## Deployment (Vercel)

1. Import this repo in [Vercel](https://vercel.com) (separate project from `app.any-gym.com`)
2. Framework preset: **Next.js** (auto-detected)
3. Optionally set `NEXT_PUBLIC_API_URL=https://api.any-gym.com` in Vercel (already the default)
4. Point `www.any-gym.com` DNS to Vercel

## Assets

Admin portal screenshots in `public/screenshots/admin-*.svg` are stylised mockups. Replace with real captures from `anygymAdmin` when available.
