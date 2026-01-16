# RyoonGitbookLog

![RyoonGitbookLog Intro](public/images/Intro_260116.png)

A Notion database–powered blog / documentation framework built with **Next.js 15 (App Router) + TypeScript**.  
Users can duplicate the Notion template, set a few environment variables, and run/deploy the site.

> References / inspiration:
> - [transitive-bullshit/nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit)
> - [tangly1024/NotionNext](https://github.com/tangly1024/NotionNext)
>
> Historically, this project started from the Gitbook theme direction of NotionNext (Next.js 13 Page Router, written in JavaScript), but RyoonGitbookLog has been rebuilt around **Next.js 15 App Router + TypeScript**, so the current structure/implementation is significantly different.

## Notion template (duplicate & use)

- Template: [Notion Blog Template](https://ryoonwithwisdomtrees.notion.site/2ea1eb5c033780349f3fc73c9160c4f6?v=2ea1eb5c03378122a3ba000c8cf252d1&source=copy_link)

---

## Features

### Core (framework advantages)

- **Next.js 15 App Router**
- **TypeScript-first codebase**
- **Notion DB → page generation / rendering** (Notion as CMS)
- Configuration via `blog.config.ts` + environment variables (`env.example`)

### Content & navigation

- Record-type routes: `general`, `project`, `engineering`, `archive`
- Category & tag pages: `/category`, `/tag`
- Left navigation (sidebar) + mobile drawer
- Header search: fuzzy search via `fuse.js`
- Table of contents (scroll spy): highlight current section on scroll

### Rendering / markup

- Notion rendering via `react-notion-x`
- Code highlighting (Prism) + theme switching options
- Math (KaTeX)
- Mermaid diagrams (CDN-loaded)
- Image UX
  - lazy placeholder
  - zoom-in support

### UX / interaction

- Dark mode (appearance setting / persisted)
- i18n: locale initialization via `NEXT_PUBLIC_LANG` + language switch UI
- Page transition progress bar
- Share bar / share buttons via `react-share`
- Optional comments via Giscus

### Performance / operations

- Memory cache controlled by `ENABLE_CACHE`
- (Vercel) cron-based cache refresh: `/api/cron/update-records`
- Bundle analyzer: `pnpm bundle-report` (`ANALYZE=true`)

---

## Quick start

### Prerequisites

- Node.js: `>= 22.18.0` (see `package.json#engines`)
- pnpm: `corepack enable`

### 1) Install

```bash
corepack enable
pnpm install
```

### 2) Configure environment variables

This repo provides `env.example` (instead of `.env.example`).

```bash
cp env.example .env.local
```

Minimum required value:

- **`NOTION_DATABASE_ID`**: your Notion database page ID  
  (multiple IDs supported as `id1,id2`)

### 3) Run

```bash
pnpm dev
```

Open `http://localhost:3000`.

---

## Notion setup

1. **Duplicate** the Notion template.
2. Extract the page ID from the duplicated Notion DB page URL and set it to `NOTION_DATABASE_ID`.
3. Run locally and verify menus / categories / tags / record pages render correctly.

---

## Environment variables

See `env.example` for the full list and defaults.

## Configuration (`blog.config.ts`)

`blog.config.ts` is the main **blog configuration file** for this framework.  
Most values can be overridden via `.env.local` (`NEXT_PUBLIC_*`), while defaults live in `blog.config.ts`.

### Key config mapping (what it changes)

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

### Required

- `NOTION_DATABASE_ID`

### Optional (feature toggles)

- `ENABLE_CACHE`: enable cache
- `ANALYZE`: bundle analysis (`pnpm bundle-report`)

### i18n

- `NEXT_PUBLIC_LANG`: default locale (e.g. `kr-KR`, `en-US`)

### Comments (Giscus)

To enable comments, set:

- `NEXT_PUBLIC_COMMENT_GISCUS_REPONAME`
- `NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID`
- `NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY`
- `NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID`
- `NEXT_PUBLIC_COMMENT_GISCUS_MAPPING` (default `pathname`)

---

## URL paths

- Record pages:
  - `/general/[pageId]`
  - `/project/[pageId]`
  - `/engineering/[pageId]`
  - `/archive/[pageId]`
- Taxonomies:
  - `/category`
  - `/tag`

---

## Scripts

- `pnpm dev`: start dev server
- `pnpm build`: production build
- `pnpm start`: run production server after build
- `pnpm lint`: lint (warnings allowed; errors fail)
- `pnpm prettier:check`: formatting check
- `pnpm bundle-report`: build with bundle analyzer (`ANALYZE=true`)

---

## Deployment (Vercel)

- `vercel.json` config includes a cron calling:
  - `/api/cron/update-records`
- If you don’t need it, remove the `crons` section from `vercel.json`.

---

## CI

CI is intentionally **disabled** for the initial OSS release.  
See `docs/ci.md` to enable it later.

---

## Contributing / Security

- Contributing: `CONTRIBUTING.md`
- Security: `SECURITY.md`

---

## License

MIT License. See `LICENSE`.

