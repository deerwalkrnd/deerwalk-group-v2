# Deerwalk Group static site
Next.js App Router site configured for **static export** (`/out`), fast images, and mobile-first layout.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static build

```bash
npm run build
```

Upload the `out/` folder to any static host (Netlify, Cloudflare Pages, S3, etc.).

## Images

1. Put optimized files in `public/images/` (prefer **WebP** or **AVIF**, compress before upload).
2. Use `ResponsiveImage` from `src/components/ResponsiveImage.tsx`.
3. Set `priority` only on above-the-fold images.
4. Always pass a correct `sizes` value for mobile vs desktop.

```tsx
<ResponsiveImage
  src="/images/hero.webp"
  alt="…"
  width={1600}
  height={900}
  priority
  sizes="100vw"
/>
```

## Project layout

```
AGENTS.md          instructions for AI agents (component-first)
src/app/           pages compose components only
src/components/    reusable UI (Brand, Hero, Section, …)
src/lib/site.ts    shared brand + nav config
public/images/     static assets
next.config.ts     output: "export"
```

AI agents: follow **AGENTS.md** — maximize reusable components; pages only compose.
