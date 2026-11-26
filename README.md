# Faktry AI — Manufacturing Operations Agents Website

Executive product and marketing site for **Faktry AI**, showcasing the 5-agent manufacturing Agent Board, deterministic ROI benchmarks, ERP integration stack, and 14-day Leakage Audit pilot.

## Tech Stack

- **Framework**: Next.js (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS + Lucide Icons
- **Security**: Per-request CSP nonces via `src/middleware.ts`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`

## Local Development

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3001](http://127.0.0.1:3001).

## Production Verification

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run start
```

## GitHub Pages Deployment

The workflow at `.github/workflows/deploy-pages.yml` builds a static export (`GITHUB_PAGES=true` with `output: "export"` and automatic `basePath`) and deploys `./out` to GitHub Pages on pushes to `main`.

To test the static Pages export locally:

```bash
NEXT_PUBLIC_BASE_PATH=/website npm run build:pages
```
