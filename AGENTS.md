# AGENTS.md — AI instructions for this project

You are building a **static Next.js site** (`output: "export"`). Prefer **many small reusable components** over page-level markup.

## Non-negotiables

1. **Component-first** — Never paste the same JSX twice. Extract it.
2. **Pages compose components** — `page.tsx` files should mostly import and arrange components, not define layout markup inline.
3. **Props over hardcoding** — Brand name, nav links, image paths, titles, and copy come from props (or a small shared config), not duplicated strings.
4. **Reuse before inventing** — Check `src/components/` first. Extend an existing component before creating a near-duplicate.
5. **Mobile + fast images** — Use `ResponsiveImage` for all photos. `priority` only above the fold. Always set `sizes`.

## Where things live

| Path | Role |
|------|------|
| `src/app/**/page.tsx` | Route composition only |
| `src/app/layout.tsx` | Root shell, metadata, global CSS |
| `src/components/` | All reusable UI |
| `src/lib/` | Shared data/config (nav, site name) |
| `public/images/` | Optimized static images (WebP/AVIF preferred) |

## Required reusable pieces (use / extend these)

- `Brand` — site name / logo text
- `SiteNav` — link list
- `SiteHeader` — Brand + SiteNav
- `SiteFooter` — footer links / credit
- `Container` — width + padding wrapper
- `Section` — titled content block
- `Hero` — full-bleed image + headline + support text
- `ResponsiveImage` — all raster/SVG images
- `Text` / headings via props on `Section` / `Hero` — avoid one-off heading markup on pages

If a new UI pattern appears on **2+ pages or sections**, extract a component immediately.

## Component rules

```tsx
// ❌ BAD — markup buried in the page
export default function Page() {
  return (
    <main>
      <header className="site-header">...</header>
      <section className="hero">...</section>
    </main>
  );
}

// ✅ GOOD — page only composes
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero title="…" description="…" image={{ src: "/images/hero.webp", alt: "…" }} />
      <Section title="…">…</Section>
    </main>
  );
}
```

- One component = one job.
- Export named functions from `src/components/<Name>.tsx`.
- Keep props typed; prefer small prop objects (`image={{ src, alt, width, height }}`).
- Do not add client components (`"use client"`) unless interaction requires it.
- Do not add a design-system / card grid / dashboard chrome unless asked.
- Do not install extra UI libraries unless asked.

## Static export constraints

- Keep `output: "export"` and `images.unoptimized: true`.
- No server-only APIs, cookies, middleware auth, or image optimization server features.
- Links: prefer trailing slash paths (`/about/`) to match `trailingSlash: true`.

## Images checklist

1. File in `public/images/`
2. Render via `ResponsiveImage` (or `Hero`, which uses it)
3. Explicit `width` + `height`
4. Sensible `sizes` for mobile vs desktop
5. `priority` only for LCP/hero

## When adding a page

1. Add `src/app/<route>/page.tsx`
2. Compose existing components only
3. If you need new UI, add it under `src/components/` first, then import it
4. Reuse `siteConfig` / nav from `src/lib/site.ts` for brand and links

## Out of scope unless asked

- CMS, auth, databases, API routes
- Tailwind / UI kits
- Animations beyond simple CSS already in the project
- Dark mode themes
