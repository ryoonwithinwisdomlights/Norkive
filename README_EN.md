# 📚 RyoonGitbookLog

![RyoonGitbookLog Intro](public/images/Intro_260116.png)

- A Notion DB–powered blog / documentation starter template (starter kit) built with **Next.js 15 (App Router) + TypeScript**.
- Duplicate the Notion template, set a few environment variables, and you’re ready to run/deploy.

### 🔖 References / inspiration:
> - [transitive-bullshit/nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit)
> - [tangly1024/NotionNext](https://github.com/tangly1024/NotionNext)
    - Inspired by the Gitbook Theme of NotionNext (based on Next.js 13 Page Router and written entirely in Javascript). 
    - Currently, this open source project, RyoonGitbookLog, has been fully migrated and rewritten/restructured/evolved to **Next.js 15 App Router-based + TypeScript**.

## 🧩 Notion template (duplicate & use)

- Template: [Notion Blog Template](https://ryoonwithwisdomtrees.notion.site/2ea1eb5c033780349f3fc73c9160c4f6?v=2ea1eb5c03378122a3ba000c8cf252d1&source=copy_link)

---

## ✨ Features

### 🧱 Core (starter/template advantages)

- **Next.js 15 App Router**
- **TypeScript-first codebase**
- **Notion DB → page generation / rendering** (Notion as CMS)
- Configuration via `blog.config.ts` + environment variables (`env.example`)
- **ISR (route segment caching) + on-demand dynamic routes**: `revalidate`, `dynamicParams`, Notion DB-derived `generateStaticParams`
- **Observability**: Vercel Analytics/Speed Insights + Sentry (optional) for Web Vitals and runtime errors
- **Gradual Strict TypeScript adoption**: `tsconfig.strict.json` + `pnpm typecheck:strict`

### 🧭 Content & navigation

- Post(record)-type routes: `general`, `project`, `engineering`, `archive`
- Category & tag pages: `/category`, `/tag`
- Left navigation (sidebar) + mobile drawer
- Header search: fuzzy search via `fuse.js`
- Table of contents (scroll spy): highlight current section on scroll

### 📝 Rendering / markup

- Notion rendering via `react-notion-x`
- Code highlighting (Prism) + theme switching options
- Math (KaTeX)
- Mermaid diagrams (CDN-loaded)
- Image UX
  - lazy placeholder
  - zoom-in support

### 🎛️ UX / interaction

- Dark mode (appearance setting / persisted)
- i18n: locale initialization via `NEXT_PUBLIC_LANG` + language switch UI
- Page transition progress bar
- Share bar / share buttons via `react-share`
- Optional comments via Giscus

### 🚀 Performance / operations

- Memory cache controlled by `ENABLE_CACHE`
- Redis (Upstash) + memory fallback: use Redis in prod when configured, otherwise auto-fallback to memory
- (Vercel) cron-based cache refresh: `/api/cron/update-records`
- ISR via `revalidate` for route segment caching
- Error monitoring (Sentry): capture in `app/error.tsx` and `app/global-error.tsx` (no-op when DSN missing)
- Bundle analyzer: `pnpm bundle-report` (`ANALYZE=true`)

---

## 🤔 Why this template

- **Notion as CMS, but still “web-fast”**: `react-notion-x` rendering with heavyweight blocks loaded only when needed via `next/dynamic`
- **Ops-friendly caching by default**: Redis (Upstash) + memory fallback + cron refresh + ISR (route segment caching) for stability against slow/unstable upstreams
- **Metrics-ready**: optional observability (Web Vitals + error capture) is built into the template instead of being an afterthought
- **Scales with your codebase**: `typecheck:strict` enables gradual strict-mode adoption as the project grows

## 🎯 Who is this for?

- People who want Notion as a CMS but still want to **control performance/SEO/ops with code**
- Anyone who wants a starter that includes **real-world ops basics** (cache, retries, monitoring, cron refresh)
- Developers who want to learn/apply App Router features like **SSG/ISR/Metadata/Route handlers** in a practical structure

---

## 📈 Performance & Lighthouse

This template keeps initial load fast even with Notion rendering by applying:

- **CSS code-splitting**: Notion/Prism/KaTeX styles load only on record routes
- **Render-blocking CSS reduction (production)**: `experimental.inlineCss` reduces stylesheet link requests
- **Slim animation CSS**: `animate.css` → `animate-lite.css` (only the keyframes actually used)
- **Mobile bundle savings**: the right drawer (`RightSlidingDrawer`) is dynamically loaded only on desktop
- **RUM (Web Vitals)**: capture Core Web Vitals via `useReportWebVitals` + baseline storage/debug helpers

Reference: `react-notion-x` recommends lazy-loading heavyweight blocks via `next/dynamic` — [react-notion-x README](https://github.com/NotionX/react-notion-x/blob/master/readme.md)

### 🧪 Lighthouse (free)

For meaningful results, run Lighthouse against a **production build**, not `pnpm dev`.  
This project uses `output: "standalone"`, so the closest “real” runtime is:

```bash
pnpm build
PORT=3000 node .next/standalone/server.js

npx lighthouse http://localhost:3000 \
  --preset=desktop \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-home.html
```

> Trade-off (one line): `experimental.inlineCss` reduces CSS requests, but can slightly increase initial HTML/RSC payload size.

---

## 🏁 Getting Started

This template is designed to be run with just: “Duplicate the Notion template → set env vars → run”.

### ✅ Prerequisites
- Node.js: `>= 22.18.0` (see `package.json#engines`)
- pnpm: `corepack enable`

### 🧬 1) Fork/Clone

You can fork this repo, or just clone it:

```bash
git clone https://github.com/ryoonwithinwisdomlights/ryoongitbooklog.git
cd ryoongitbooklog
```

### 📦 2) Install

```bash
corepack enable
pnpm install
```

### 🔐 3) Configure environment variables

This repo provides `env.example` (instead of `.env.example`).

```bash
cp env.example .env.local
```

Minimum required value:
- **`NOTION_DATABASE_ID`**: your Notion database page ID  
  (multiple IDs supported as `id1,id2`)

### 🧑‍💻 4) Run (dev)

```bash
pnpm dev
```

Open `http://localhost:3000`.

### 🚢 5) Run (production / standalone recommended)

For production-like runtime (and meaningful Lighthouse results), run the standalone server:

```bash
pnpm run build
PORT=3000 node .next/standalone/server.js
```

---

## 🗂️ Notion setup

1. **Duplicate** the Notion template.
2. Extract the page ID from the duplicated Notion DB page URL and set it to `NOTION_DATABASE_ID`.
3. Run locally and verify menus / categories / tags / record pages render correctly.

---

## 🔐 Environment variables

See `env.example` for the full list and defaults.

## ⚙️ Configuration (`blog.config.ts`)

`blog.config.ts` is the main **blog configuration file** for this starter template.  
Most values can be overridden via `.env.local` (`NEXT_PUBLIC_*`), while defaults live in `blog.config.ts`.

### 🧾 Key config mapping (what it changes)

| Setting | `BLOG` key(s) | Recommended env var | Where it affects (examples) |
| --- | --- | --- | --- |
| Site name / meta title | `APP_NAME`, `TITLE` | `NEXT_PUBLIC_TITLE` | `app/layout.tsx` `metadata.title` |
| Meta description | `DESCRIPTION` | `NEXT_PUBLIC_DESCRIPTION` | `app/layout.tsx` `metadata.description` |
| Site URL (absolute base) | `LINK` | `NEXT_PUBLIC_LINK` | `metadataBase`, sitemap/robots generation, share URL base |
| Favicon | `BLOG_FAVICON` | `NEXT_PUBLIC_FAVICON` | `app/layout.tsx` `metadata.icons.icon` |
| Avatar (profile / default icon) | `AVATAR` | (default is in code) | Used when a Notion page has no icon |
| Home banner (default cover) | `HOME_BANNER_IMAGE` | `NEXT_PUBLIC_HOME_BANNER_IMAGE` | Used when a Notion page has no cover |
| Default language (i18n) | `LANG` | `NEXT_PUBLIC_LANG` | Locale init and UI strings / language switch |
| Theme (light/dark) | `APPEARANCE`, `APPEARANCE_DARK_TIME` | `NEXT_PUBLIC_APPEARANCE`, `NEXT_PUBLIC_APPEARANCE_DARK_TIME` | Dark mode defaults / auto switch |

### ⭐ Required

- `NOTION_DATABASE_ID`

### 🧩 Optional (feature toggles)

- `ENABLE_CACHE`: enable cache
- `ANALYZE`: bundle analysis (`pnpm bundle-report`)

### 🌐 i18n

- `NEXT_PUBLIC_LANG`: default locale (e.g. `kr-KR`, `en-US`)

### 💬 Comments (Giscus)

To enable comments, set:

- `NEXT_PUBLIC_COMMENT_GISCUS_REPONAME`
- `NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID`
- `NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY`
- `NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID`
- `NEXT_PUBLIC_COMMENT_GISCUS_MAPPING` (default `pathname`)

---

## 🧵 URL paths

- Record pages:
  - `/general/[pageId]`
  - `/project/[pageId]`
  - `/engineering/[pageId]`
  - `/archive/[pageId]`
- Taxonomies:
  - `/category`
  - `/tag`

---

## 🧰 Scripts

- `pnpm dev`: start dev server
- `pnpm build`: production build
- `pnpm start`: run production server after build
- `pnpm typecheck`: TypeScript typecheck
- `pnpm typecheck:strict`: strict typecheck (for gradual migration)
- `pnpm lint`: lint (warnings allowed; errors fail)
- `pnpm prettier:check`: formatting check
- `pnpm bundle-report`: build with bundle analyzer (`ANALYZE=true`)

---

## ☁️ Deployment (Vercel)

- `vercel.json` config includes a cron calling:
  - `/api/cron/update-records`
- If you don’t need it, remove the `crons` section from `vercel.json`.

---

## 🧯 CI

CI is intentionally **disabled** for the initial OSS release.  
See `docs/ci.md` to enable it later.

---

## 🤝 Contributing / Security

- Contributing: `CONTRIBUTING.md`
- Security: `SECURITY.md`

---

## 📄 License

MIT License. See `LICENSE`.

