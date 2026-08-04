# Portfolio

A static, self-hostable portfolio for an available AI consultant. Landing page of cascading
project/idea cards; each card opens an "under the hood" page. Built to be edited from **one data
file** and deployed as pure static files.

- **Stack:** Next.js (static export) · TypeScript · Tailwind · shadcn/ui · Framer Motion
- **Host:** Cloudflare Pages (free, HTTPS, real public link)
- **Security:** no server, strict CSP + security headers, no runtime secrets

## Edit the content (this is the whole job)

- `content/site.ts` — your name, role, headline, availability, email, social links.
- `content/projects.ts` — the cards. Add an object → a new card **and** a new `/work/<slug>` page
  appear automatically. No component edits needed.

`poster` on each project is a Tailwind gradient (`from-… via-… to-…`) used as the card artwork —
no image files, so the strict CSP stays intact.

## Turn on the contact form (one-time, 2 min, free)

The contact form lets visitors message you **without giving their own email** and with **no
backend** — it relays through [Web3Forms](https://web3forms.com) straight to your inbox.

1. Go to https://web3forms.com, enter your email (`losthero11@yahoo.com`), click **Create Access
   Key**.
2. Copy the access key they email you.
3. Paste it into `content/site.ts` → `web3formsKey`.

That's it — the form starts delivering. The key is safe to commit (it only forwards mail to you).
Until it's set, the form shows a friendly "not configured yet" notice instead of failing.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build (static export)

```bash
npm run build
```

Outputs a fully static site to `out/`.

## Deploy to Cloudflare Pages

**Option A — connect the git repo (recommended, push-to-deploy):**

1. Push this repo to a private GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build` · Build output directory: `out`.
4. Every push to `main` redeploys. You get a `https://<project>.pages.dev` link.

**Option B — direct upload from your machine:**

```bash
npm run build
npx wrangler pages deploy out
```

(First run prompts a browser login to your Cloudflare account.)

The `public/_headers` file ships the CSP and security headers automatically.
