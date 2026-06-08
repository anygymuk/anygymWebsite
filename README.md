# anygymWebsite

Marketing website for [anygym](https://www.any-gym.com) — the universal gym membership for the UK.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Netlify (deployment)
- Netlify Forms (newsletter, gym group, investor leads)
- SendGrid (investor pack email delivery)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` for local investor email testing:

```
SENDGRID_API_KEY=
SENDGRID_FROM_EMAIL=contact@any-gym.com
INVESTOR_NOTIFICATION_EMAIL=contact@any-gym.com
```

## Deployment (Netlify)

1. Connect this repo to a new Netlify site (separate from `app.any-gym.com`)
2. Build command: `npm run build`
3. Publish directory: leave empty (handled by `@netlify/plugin-nextjs`)
4. Set environment variables in Netlify dashboard
5. Point `www.any-gym.com` DNS to Netlify
6. Enable Netlify Forms and configure email notifications to `contact@any-gym.com`

## Assets

Replace `public/investor-pack.pdf` with the final investor pack document before go-live.

Admin portal screenshots in `public/screenshots/admin-*.svg` are stylised mockups. Replace with real captures from `anygymAdmin` when available.
