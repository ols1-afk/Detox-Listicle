# DetoxMe Listicle Landing Page

A "7 reasons" listicle landing page for DetoxMe Chitosan, built for paid social
traffic from women over 40.

Sibling project to [`ols1-afk/DETOX`](https://github.com/ols1-afk/DETOX), which
holds the long-form advertorial. This repo shares that project's stack but is
deliberately independent: separate repo, separate deploy, separate domain, so
neither page can take the other down.

## Stack

| Layer       | Technology                                            |
| ----------- | ----------------------------------------------------- |
| Frontend    | React 19, Vite 7, TypeScript, Tailwind CSS 4, wouter   |
| UI kit      | shadcn/ui on Radix primitives, lucide-react            |
| API         | tRPC 11 over Express 4                                 |
| Database    | Drizzle ORM targeting MySQL (optional, unused by page) |
| Tests       | Vitest + Testing Library (jsdom)                       |
| Package mgr | pnpm 10, Node 22                                       |

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

```bash
pnpm test         # Vitest suite
pnpm check        # tsc --noEmit
pnpm build        # client -> dist/public, server -> dist/index.js
pnpm start        # run the production build
pnpm format       # Prettier
```

## How the page is built

All copy, images and offer details live in
**`client/src/content/listicleContent.ts`** as typed data. `pages/Home.tsx`
renders that data and holds no copy of its own.

This is deliberate. The sibling advertorial parses its copy out of markdown and
keys behaviour off exact sentences, which meant every copy edit risked silently
dropping an image or a colour. Here, editing copy cannot change how the page
renders, and the type checker catches a malformed entry before it ships.

To change the page:

- **Copy, headlines, reviews, stats, offer** — edit `listicleContent.ts`.
- **Add a missing image** — drop the file in `client/public/images/` and fill in
  the `image` field on the relevant entry (`src`, `alt`, `width`, `height`, and
  an optional `caption`). Sections without an image render text-only by design,
  so the page is always shippable.
- **Layout and styling** — `pages/Home.css`. Mobile-first: the single-column
  layout is the real design and the `48rem` breakpoint only relaxes it.

### Images

Six of the seven are in place. One is still outstanding:

| Where     | Needed                                      |
| --------- | ------------------------------------------- |
| Reason 04 | Woman mid-afternoon, energised, out walking |

Reason 05's "fat blocker vs pharmaceutical grade" panel is rendered as markup
rather than an image, so it stays sharp at any size and reads to screen readers.

Set `priority: true` on an image that sits above the fold. The hero uses it, so
it loads eagerly at high fetch priority instead of being lazy-loaded: it is the
Largest Contentful Paint element, and lazy-loading it would delay the very thing
the visitor is waiting for. Everything below the fold stays lazy.

## Deploying

Railway runs a persistent Node process, which is what `server/_core/index.ts`
expects. Nixpacks detects the project and runs `pnpm install`, `pnpm build`,
then `pnpm start`.

- **No environment variables are required.** Images are committed and the page
  needs neither a database nor sign-in.
- **Do not set `PORT`.** Railway assigns it and routes to it; the server binds
  exactly what it is given and fails loudly rather than drifting to another port.
- Generate a public domain under Settings → Networking, or the service runs
  without being reachable.

## Notes on the inherited template

This stack came from a Manus export, and two pieces of it were removed here:

1. **`vite-plugin-manus-runtime`** inlined roughly 360 kB of render-blocking
   editor runtime into `index.html`. It does nothing outside the Manus editor.
   Removing it took the built HTML from 368 kB to 1.4 kB (105 kB to 0.7 kB
   gzipped), which matters on the mobile connections this page buys traffic for.
2. **The Umami analytics tag** referenced `%VITE_ANALYTICS_ENDPOINT%`
   placeholders that were never substituted, so every visitor's browser
   requested a literal `%VITE_ANALYTICS_ENDPOINT%` URL, received the SPA
   fallback HTML, and logged a MIME-type error. Add analytics properly when
   there is a real endpoint to point at.

`server/_core/` is still generated platform glue (LLM, maps, image generation,
notifications, voice transcription). The landing page uses none of it and it can
be pruned.

## License

MIT
