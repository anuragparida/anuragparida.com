# anuragparida.com

Personal portfolio site for [anuragparida.com](https://anuragparida.com).

A static site built with **Astro 5 + React + Tailwind CSS + shadcn/ui**. No CMS, no database, no API. Every visible string lives in `src/lib/constants.ts` (the data) or in section components under `src/components/sections/` (the layout). The homepage is a single `src/pages/index.astro` that arranges ~12 cards into a bento grid.

> **Working on this project?** Read [`AGENTS.md`](./AGENTS.md) first — it has the hard rules (work on `main`, no GitHub Actions, fragile bento grid, content is the product).

## Stack

- **Astro 5** — file-based routing, server-rendered at build time, View Transitions enabled
- **React 18** — only used for shadcn/ui primitives and the theme toggle
- **Tailwind 3** + **shadcn/ui** — design tokens, no custom design system
- **motion** (formerly Framer Motion) — card-load stagger
- **Inter** — sole webfont

Node version pinned in `.nvmrc`. Package manager: **npm**.

## Commands

All commands are run from the project root.

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Project layout

```
src/
├── pages/         # index.astro (the bento grid) + subpages (/work, /projects, /awards, 404)
├── components/
│   ├── sections/  # one .astro file per homepage card
│   ├── ui/        # shadcn/ui React primitives
│   └── Card.astro # wrapper used by every section card
├── lib/
│   └── constants.ts  # ⬅️ ALL VISIBLE CONTENT LIVES HERE
├── layouts/       # BaseLayout, TopLayout, BottomLayout
└── styles/globals.css
public/            # favicon, hero portrait, CV PDF, OG image
```

The bento grid is `md:grid-cols-2 lg:grid-cols-4` auto-flow. Card sizes are set via `col-span` and `row-span` props on `<Card>`. **Card order in the markup determines grid order.** When you add or remove a card, balance the row-spans of the others — do not fight the auto-flow with `col-start` / `row-start` overrides.

## Deployment

Built artifacts in `./dist/` are deployed manually to the host — no CI, no GitHub Actions. See `AGENTS.md` for why.

## License

Source: MIT. Content (the strings in `constants.ts` and the portrait/CV PDFs in `public/`): © Anurag Parida.
