# AGENTS.md

> Onboarding notes for AI agents (and humans) working on the **anuragparida.com** codebase. This is a personal site — content is the product, not the architecture. Treat it that way.

## What this is

A personal portfolio site for **Anurag Parida**. Built as a static site with **Astro 5 + React + Tailwind CSS + shadcn/ui**. No CMS, no database, no API. Every string the visitor reads is hardcoded in `src/lib/constants.ts` (the data) or in the section components (the structure). The whole homepage is a single `index.astro` that arranges ~12 section cards into a **bento grid** using Tailwind's `col-span` / `row-span` utilities.

**Live at:** https://anuragparida.com
**Repository:** https://github.com/anuragparida/anuragparida.com
**Default branch:** `main` (no feature branches — work happens directly on `main`)

---

## Tech stack (only what matters)

- **Astro 5** — file-based routing in `src/pages/`, layouts in `src/layouts/`, components in `src/components/`. View Transitions enabled.
- **React 18** — only used inside `.tsx` files for shadcn/ui primitives and the ThemeToggle. Most of the site is `.astro` files (server-rendered HTML at build time).
- **Tailwind 3** — utility-first. No custom design system beyond shadcn's `bg-background`, `text-foreground`, `text-primary` etc. tokens. Primary color: `hsl(152 58% 34%)` (forest green, used in the favicon).
- **shadcn/ui** — `button.tsx`, `card.tsx`, `dropdown-menu.tsx`, `badge.tsx`. These are real React components inside the Astro app, not in `node_modules`.
- **motion** (formerly Framer Motion) — drives the card-load stagger animation in `index.astro`.
- **lucide-react** — icons everywhere (Github, Linkedin, Mail, ExternalLink, Award, Rocket, Wrench, etc.).
- **Inter** — sole webfont, loaded from Google Fonts in `HeadSEO.astro`.

Node version pinned in `.nvmrc`. `npm` is the package manager (uses `package-lock.json`).

---

## File map (read these first)

```
src/
├── pages/
│   ├── index.astro          ← HOMEPAGE — the bento grid layout, edit this to add/move cards
│   ├── projects.astro       ← /projects subpage (richer than the homepage excerpt)
│   ├── awards.astro         ← /awards subpage
│   ├── work.astro           ← /work subpage (full experience list)
│   └── 404.astro
├── components/
│   ├── Card.astro           ← Wrapper for every section card. Accepts colSpan, rowSpan, colStart, rowStart, title, href.
│   ├── ContentCard.astro    ← Inner content of Card.astro
│   ├── Container.astro      ← Outer page wrapper
│   ├── Footer.astro
│   ├── Header.astro         ← Header with theme toggle
│   ├── HeadSEO.astro        ← <head> tags, OG image, favicon
│   ├── ProjectCard.astro    ← (legacy?) not currently used in index.astro
│   ├── ThemeToggle.astro    ← The shell wrapper; logic in ui/ThemeToggle.tsx
│   ├── sections/            ← One file per card on the homepage
│   │   ├── IntroCard.astro
│   │   ├── AboutMe.astro
│   │   ├── CVCard.astro
│   │   ├── LanguagesCard.astro
│   │   ├── HobbiesCard.astro
│   │   ├── CertificationsCard.astro
│   │   ├── ProjectsCard.astro
│   │   ├── ExperienceCard.astro
│   │   ├── AwardsCard.astro
│   │   ├── EducationCard.astro
│   │   ├── BlogCard.astro
│   │   ├── ToolsAndFrameworksCard.astro
│   │   └── SpotifyCard.astro        ← ⚠️ DEAD CODE: removed from index.astro but file remains. Safe to delete.
│   └── ui/                  ← shadcn/ui React primitives (.tsx)
├── layouts/
│   ├── BaseLayout.astro     ← <html>, <head>, body shell with View Transitions
│   ├── TopLayout.astro
│   └── BottomLayout.astro
├── lib/
│   ├── constants.ts         ← ⚠️ ALL CONTENT LIVES HERE — edit this for almost any change
│   ├── contentful.ts        ← stub, currently commented out (was a planned CMS migration)
│   ├── types.ts             ← `Site`, `Page` interfaces
│   └── utils.ts             ← `cn()` classname helper (shadcn convention)
├── content/work/apple.md    ← unused legacy
├── styles/globals.css       ← Tailwind base + CSS custom properties (colors, radii, etc.)
└── env.d.ts                 ← Astro env types

public/
├── favicon.svg              ← Custom "AP" monogram, green rounded square (matches --primary)
├── portraitSquare.jpg       ← Hero portrait
├── cvss.png                 ← CV preview image
├── anuragparida-CV-English.pdf
├── View1.png / View2.png    ← OG image candidates
└── other photos
```

---

## Critical "where to start" pointers

### 1. **Editing content** → `src/lib/constants.ts`

This is the single most important file in the repo. Every visible string on the site — the hero, the experience list, the projects, the awards, the certifications, the education, the contact links, the page metadata — is exported from here as a typed constant. To change a project description, a job title, an award date, or anything similar, **edit the data in `constants.ts`, not the `.astro` files**.

The exports are:

| Constant | Used by | Notes |
|---|---|---|
| `loaderAnimation` | `index.astro` (motion stagger) | Don't touch unless you understand the sequence. |
| `LINKS` | `IntroCard.astro` | GitHub, LinkedIn, mail, Instagram. Single source of truth for contact URLs. |
| `SITE` | `BaseLayout.astro` / `HeadSEO.astro` | Title, description, author. |
| `WORKPAGE` / `AWARDSPAGE` / `PROJECTPAGE` | the three subpages | Page title + description for `<title>` and OG tags. |
| `EDUCATION` | `EducationCard.astro` | 2 entries: Bachelors + High School. |
| `CERTIFICATIONS` | `CertificationsCard.astro` | 2 entries. |
| `AWARDS` | `AwardsCard.astro` + `awards.astro` | 4 entries. GCI 2018 is the headline win. |
| `PROJECTS` | `ProjectsCard.astro` + `projects.astro` | 4 entries. Includes German-Anki (placeholder data — see warnings below). |
| `EXPERIENCE` | `ExperienceCard.astro` + `work.astro` | 7 entries. Order matters — homepage shows `slice(0, 4)`. |

Each entry follows a consistent shape with optional `outcome` (one-line impact), `tasks` (bullet list used on the subpage), and `link` fields.

### 2. **Editing the bento grid layout** → `src/pages/index.astro`

The grid is `md:grid-cols-2 lg:grid-cols-4` auto-flow. Each card sets its own size via `colSpan` and `rowSpan` props on `<Card>`. **The order of cards in the markup determines their order in the grid** — CSS Grid auto-flows them in document order.

**If you're tempted to add `col-start-X` / `row-start-Y` overrides** to fight the auto-flow, **don't** — that's how the layout breaks. Stay within the template's natural pattern. The card `row-span` props are the only positioning you should be touching.

**Card size budget** (each `row-span` is roughly one row of the auto-flow grid):
- The grid is ~9 rows tall
- Total cell budget across all 12 cards must tile evenly
- If a new card is added, you'll need to balance by adjusting row-spans elsewhere

### 3. **Editing copy in a single card** → `src/components/sections/<CardName>.astro`

The component is the only place that knows the *shape* of how a particular card is rendered. Card-specific stuff (the heading, the description formatting, the link button at the bottom) lives here, not in `constants.ts`.

### 4. **Adding a new card** → four steps

1. Create `src/components/sections/NewCard.astro`. Look at the smallest existing card (`BlogCard.astro` or `LanguagesCard.astro`) for the minimal pattern.
2. Add the data to `src/lib/constants.ts` if it needs any.
3. Import and place the card in `src/pages/index.astro` in the order you want it to appear.
4. Run `npm run build` to verify it compiles.

---

## What the user cares about (so you don't accidentally regress)

The user has explicitly stated these preferences — honor them unless told otherwise:

1. **Work on `main`, no feature branches.**
2. **No GitHub Actions / no deploy pipeline** — the user is handling deploy separately.
3. **No token / no credentials in chat** — Hermes already has `gh` CLI auth wired up via `~/.config/gh/hosts.yml`. Don't ask for tokens.
4. **Stay within the template's natural patterns.** Don't add libraries, frameworks, or architectural changes without asking. The user is happy with the current stack.
5. **The bento grid layout is fragile** — `row-span` math has caused overflow before. If a card is short on content, **trim the content** (descriptions, list items), not the `row-span`. If a card is too tall, the same: trim, don't shrink.
6. **The "Currently" / "Now" card idea was deferred** — don't spontaneously try to add one. If a "what I'm doing right now" pattern is needed, the user wants to discuss it explicitly.
7. **Don't change the favicon, hero copy, or site metadata** without a specific ask.

---

## ⚠️ Things that look like bugs but aren't (and vice versa)

| You might think… | Reality |
|---|---|
| `SpotifyCard.astro` should be on the homepage | It was removed; the file is dead code. Safe to delete. |
| `ProjectCard.astro` should be the card on the homepage | It's legacy — the homepage uses `ProjectsCard.astro` (slightly different name, different file). |
| `contentful.ts` is the data source | It's a stub, fully commented out. All data is in `constants.ts`. |
| `content/work/apple.md` matters | It's legacy. Unused. |
| The bento grid will reflow gracefully when I add a card | It won't, in most cases. You'll need to adjust other cards' `row-span` props. |
| "Tools & Frameworks" card content is accurate | **Verify it before going live.** The Languages/Cloud/ML/Web entries contain best-guess additions the user hasn't confirmed (Go, Hugging Face, LangChain, pgvector in particular). |
| German-Anki project numbers are real | **They were made up.** "3 years", "4,000+ active cards", "40+ thematic decks (Kfz/Versicherung/Behörde/Tech/Smalltalk)" are placeholder numbers and category names — the user needs to replace with actuals. |

---

## Commands

```bash
npm install              # one-time, or after pulling new deps
npm run dev              # local dev server at http://localhost:4321
npm run dev -- --host 0.0.0.0   # expose to LAN (e.g. http://192.168.178.123:4321)
npm run build            # production build → ./dist/
npm run preview          # serve ./dist/ locally
npm run format           # prettier + prettier-plugin-astro + prettier-plugin-tailwindcss
```

The LAN address the user works from: `http://192.168.178.123:4321/`. Tailscale: `http://100.83.146.18:4321/`.

---

## Git workflow

```bash
git add -A
git -c user.name="Anurag Parida" -c user.email="anuragparida37@gmail.com" commit -m "..."
git push origin main
```

(No `gh auth login` needed — the host `~/.config/gh/hosts.yml` already has the token, scoped to `repo`, `workflow`, `read:org`, `gist`.)

There's a pre-redesign baseline tag in git history: `pre-redesign-baseline`. Roll back with `git reset --hard pre-redesign-baseline` if something goes catastrophically wrong. It's safe to delete once the user is happy with the current state — `git tag -d pre-redesign-baseline && git push origin :refs/tags/pre-redesign-baseline`.

---

## Style notes (so the next agent doesn't go off the rails)

- **Outcome-first writing.** Each experience entry, each project, each award should lead with what *changed* (the outcome), not what the person *did* (the topic). The hero, AboutMe, and all data structures already follow this. Keep it.
- **No skill dumps.** A list of "things I work with" is the #1 anti-pattern. The site has a `ToolsAndFrameworksCard.astro` but the user flagged its content for review. Don't add more skill-dump content.
- **YC SS21, not YC W21.** Zepto was in Y Combinator's *Summer* 2021 batch. This is corrected throughout but worth noting because a search for "W21" might lead a future agent to "fix" it back.
- **Cologne, not Stuttgart.** The user moved in February 2026. Stuttgart is the Mercedes-Benz location (in the experience entry), not the user's current city.
- **German at C1.** Not B2. Updated as of 2026-06-06.
- **Stay neutral on "open to work"** in the hero. The user wants the site to read as "always interested in interesting work" — not "I'm looking for a job." Don't rephrase to make it sound like a pitch.

---

## What success looks like

The site is a CV in bento-grid form. Visitors should learn three things in the first 10 seconds:

1. **Who you are** (name, current role, location)
2. **Why you're credible** (HDI, Mercedes, Zepto, GCI)
3. **How to reach you** (email, LinkedIn, GitHub)

If a change makes any of those three things less clear, it's probably the wrong change.

---

*Last updated: 2026-06-06, after the content + design refresh. If you find something in this doc that's wrong, fix it — future agents (and future you) will thank you.*
