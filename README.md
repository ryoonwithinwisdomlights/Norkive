## 📚 RyoonGitbookLog

![RyoonGitbookLog Intro](public/images/intro_white.png)
![RyoonGitbookLog Intro](public/images/intro_dark.png)
- Notion DB를 CMS로 사용하는 **Next.js 15 (App Router) + TypeScript** 기반 블로그/문서 스타터 템플릿(starter kit)입니다.
- 기술블로그 글 작성, TIL 작성, 일반 글 작성 그리고 포트폴리오 관리까지 한 곳에서 통합적으로 관리가능해요!
- 이 리포지토리를 클론 또는 fork + 제공되는 Notion 템플릿 복제 + 환경변수 설정 =>바로 로컬 실행 및 배포가 가능해요!


### 🔖 레퍼런스/영감:
> - [transitive-bullshit/nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit)
> - [tangly1024/NotionNext](https://github.com/tangly1024/NotionNext)
      - NotionNext(Next.js 13 Page Router 기반, 전부 Javascript로 작성된)의 Gitbook Theme에서 영감을 받아 출발하였습니다.
      - 현재 이 오픈소스 프로젝트 RyoonGitbookLog는 Next.js 15 App Router 기반 + TypeScript로
        전체 마이그레이션 및 재작성/재구성/발전됐습니다.

### 🧩 Notion 템플릿 (복제해서 사용)

- 템플릿: [Notion Blog Template](https://ryoonwithwisdomtrees.notion.site/2ea1eb5c033780349f3fc73c9160c4f6?v=2ea1eb5c03378122a3ba000c8cf252d1&source=copy_link)

---

## ✨ Features

### 🧱 핵심 구조 (스타터/템플릿 특장점)

- **Next.js 15 최신 App Router 기반**
- **전체 TypeScript 기반**
- **Notion DB → 페이지 생성/렌더링** (Notion을 CMS로 사용)
- **설정은 `blog.config.ts` + 환경변수(`env.example`) 중심**
- **ISR(페이지 결과 캐시) + on-demand 동적 라우트 운영**: `revalidate`, `dynamicParams`, Notion DB 기반 `generateStaticParams`
- **관측성(Observability)**: Vercel Analytics/Speed Insights + Sentry(옵션)로 Web Vitals/에러 추적 가능
- **점진 Strict TypeScript 도입**: `tsconfig.strict.json` + `pnpm typecheck:strict`

### 🧭 콘텐츠/네비게이션

- **레코드(포스트) 타입 라우팅**: `general`, `project`, `engineering`, `archive` 타입 페이지
- **카테고리/태그 페이지**: `/category`, `/tag`
- **좌측 내비게이션(사이드바) + 모바일 Drawer**
- **상단 검색(헤더 검색)**: `fuse.js` 기반 fuzzy search
- **Table of Contents(스크롤 스파이)**: 페이지 내 목차/현재 섹션 하이라이트

### 📝 렌더링/마크업

- **react-notion-x 기반 Notion 렌더링**
- **Code highlighting(Prism)** + 테마 스위칭 옵션
- **수식(KaTeX)**
- **Mermaid 다이어그램**(CDN 로드)
- **이미지 최적화/UX**
  - lazy placeholder
  - 이미지 확대(zoom) 지원

### 🎛️ UX / 인터랙션

- **다크 모드** (appearance 설정/로컬 저장)
- **다국어(i18n)**: `NEXT_PUBLIC_LANG` 기반 locale 초기화 + 언어 전환 UI
- **페이지 전환 progress bar**
- **공유(ShareBar/ShareButtons)**: `react-share` 기반
- **댓글(Giscus)** 옵션

### 🚀 성능/운영

- **캐시(메모리 기반)**: `ENABLE_CACHE`로 제어
- **Redis(Upstash) + Memory fallback**: 프로덕션에서 Redis 사용, 미설정 시 메모리 캐시로 자동 폴백
- **(Vercel) 크론 기반 캐시 갱신**: `/api/cron/update-records`
- **ISR(revalidate) 기반 페이지 결과 캐시**: Notion fetch가 무겁더라도 라우트 결과를 캐시/재검증
- **에러 모니터링(Sentry)**: `app/error.tsx`, `app/global-error.tsx`에서 capture (DSN 없으면 자동 비활성)
- **번들 분석**: `pnpm bundle-report` (`ANALYZE=true`)

---

## 🤔 왜 이게 좋은가

- **Notion을 CMS로 쓰면서도 “웹다운” 성능/UX**: `react-notion-x` 기반 렌더링 + 무거운 블록은 `next/dynamic`으로 필요할 때만 로드
- **운영 가능한 캐시 전략**: Redis(Upstash) + Memory fallback + Cron 갱신 + ISR(페이지 결과 캐시)로 “느린 외부 데이터 소스”를 안정적으로 서비스
- **지표 기반 개선이 가능한 기본값**: Web Vitals/에러를 “나중에 붙이는” 게 아니라, 템플릿 단계에서 관측성(옵션)을 제공
- **코드베이스 성장에 강함**: `typecheck:strict`로 점진 strict 도입 루프를 제공해, 기능 확장 시 타입 안정성을 단계적으로 올릴 수 있음

## 🎯 어떤 사람에게 추천?

- Notion을 CMS로 쓰고 싶지만 **성능/SEO/운영을 코드로 통제**하고 싶은 분
- “블로그 템플릿”을 넘어 **실서비스 운영 감각(캐시·재시도·모니터링·크론)** 이 포함된 스타터가 필요한 분
- Next.js App Router의 **SSG/ISR/Metadata/Route handlers**를 실제 구조에서 학습/응용하고 싶은 분

---

## 📈 Performance & Lighthouse

이 템플릿은 Notion 렌더링(`react-notion-x`)과 App Router 조합에서 성능을 유지하기 위해 아래 전략을 기본값으로 적용합니다:

- **CSS code-splitting**: Notion/Prism/KaTeX 스타일은 record 라우트에서만 로딩
- **Render-blocking CSS 완화(프로덕션)**: `experimental.inlineCss`로 CSS 링크 요청을 줄임
- **애니메이션 CSS 경량화**: `animate.css` → `animate-lite.css` (실사용 키프레임만)
- **모바일 번들 절감**: 우측 패널(`RightSlidingDrawer`)은 데스크탑에서만 동적 로드
- **RUM(Web Vitals)**: `useReportWebVitals`로 Core Web Vitals 수집 + baseline 저장/디버깅

참고: `react-notion-x` 권장 패턴(heavy component는 `next/dynamic`으로 지연 로드) — [react-notion-x README](https://github.com/NotionX/react-notion-x/blob/master/readme.md)

### 🧪 Lighthouse 측정(무료)

정확한 측정을 위해 **`pnpm dev`가 아니라 프로덕션 빌드** 상태에서 실행하세요.  
이 프로젝트는 `output: "standalone"` 이므로 `pnpm start` 대신 아래 방식으로 실행하는 것이 “실서비스 조건”에 가장 가깝습니다.

```bash
pnpm run build
PORT=3000 node .next/standalone/server.js

# HTML 리포트 생성 (Desktop)
npx lighthouse http://localhost:3000 \
  --preset=desktop \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-home.html
```

> Trade-off(한줄): `experimental.inlineCss`는 CSS 요청을 줄이는 대신 초기 HTML/RSC payload 크기가 약간 늘 수 있습니다.

---

## 🏁 Getting Started

이 템플릿은 “Notion 템플릿 복제 → env 설정 → 실행”만 하면 바로 동작합니다.

### ✅ Prerequisites
- Node.js: `>= 22.18.0` (see `package.json#engines`)
- pnpm: `corepack enable`

### 🧬 1) Fork/Clone

Fork 해서 쓰거나, 그대로 clone 해서 시작할 수 있어요:

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

이 프로젝트는 `.env.example` 대신 `env.example` 파일을 제공합니다.

```bash
cp env.example .env.local
```

최소로 필요한 값:
- **`NOTION_DATABASE_ID`**: Notion 데이터베이스 페이지 ID  
  (여러 개면 `id1,id2` 형태로 콤마 구분)

### 🧑‍💻 4) Run (dev)

```bash
pnpm dev
```

브라우저에서 `http://localhost:3000` 접속.

### 🚢 5) Run (production / standalone 권장)

정확한 운영 조건(특히 Lighthouse/성능 측정)을 위해서는 `dev`가 아니라 프로덕션 빌드로 실행하세요:

```bash
pnpm run build
PORT=3000 node .next/standalone/server.js
```

---

## 🗂️ Notion setup

1. 위 템플릿을 **Duplicate** 합니다.
2. 복제한 Notion DB 페이지 URL에서 **페이지 ID**를 추출해 `NOTION_DATABASE_ID`에 넣습니다.
   - 보통 32자리 형태의 ID가 들어갑니다.
3. 로컬 실행 후, 메뉴/카테고리/태그/레코드 페이지가 정상 표시되는지 확인합니다.

---

## 🔐 Environment variables

전체 목록/기본값은 `env.example`를 기준으로 합니다.

## ⚙️ Configuration (`blog.config.ts`)

`blog.config.ts`는 이 스타터/템플릿의 **블로그 설정 파일**입니다.  
대부분의 값은 `.env.local`의 환경변수(`NEXT_PUBLIC_*`)로 **오버라이드**할 수 있고, 기본값은 `blog.config.ts`에 정의되어 있습니다.

### 🧾 대표 설정값(어디에 반영되나)

| 설정 | `BLOG` 키 | 환경변수(권장) | 블로그에서 바뀌는 곳(대표) |
| --- | --- | --- | --- |
| 사이트 이름/메타 타이틀 | `APP_NAME`, `TITLE` | `NEXT_PUBLIC_TITLE` | `app/layout.tsx`의 `metadata.title` (문서/탭 타이틀) |
| 메타 설명 | `DESCRIPTION` | `NEXT_PUBLIC_DESCRIPTION` | `app/layout.tsx`의 `metadata.description` (SEO/공유) |
| 사이트 URL(절대 경로 기준) | `LINK` | `NEXT_PUBLIC_LINK` | `metadataBase`, sitemap/robots 생성, 공유 링크의 base |
| 파비콘(favicon) | `BLOG_FAVICON` | `NEXT_PUBLIC_FAVICON` | `app/layout.tsx`의 `metadata.icons.icon` |
| 아바타(프로필/기본 아이콘) | `AVATAR` | (기본값은 코드에 있음) | Notion 페이지에 아이콘이 없을 때 기본 아이콘/프로필 이미지로 사용 |
| 홈 배너(기본 커버) | `HOME_BANNER_IMAGE` | `NEXT_PUBLIC_HOME_BANNER_IMAGE` | Notion 페이지에 cover가 없을 때 기본 커버로 사용 |
| 다국어(i18n) 기본 언어 | `LANG` | `NEXT_PUBLIC_LANG` | locale 초기화 및 UI 문구/언어 전환 |
| 테마(라이트/다크) | `APPEARANCE`, `APPEARANCE_DARK_TIME` | `NEXT_PUBLIC_APPEARANCE`, `NEXT_PUBLIC_APPEARANCE_DARK_TIME` | 다크모드 기본값/자동 전환 로직 |

### ⭐ 필수

- `NOTION_DATABASE_ID`

### 🧩 선택(기능 on/off)

- `ENABLE_CACHE`: 캐시 사용
- `ANALYZE`: 번들 분석(`pnpm bundle-report`)

### 🌐 다국어(i18n)

- `NEXT_PUBLIC_LANG`: 기본 언어 (예: `kr-KR`, `en-US`)

### 💬 댓글(Giscus)

댓글 기능을 켜려면 아래 값을 채우세요.

- `NEXT_PUBLIC_COMMENT_GISCUS_REPONAME`
- `NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID`
- `NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY`
- `NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID`
- `NEXT_PUBLIC_COMMENT_GISCUS_MAPPING` (기본 `pathname`)

---

## 🧵 URL paths

- 레코드 타입:
  - `/general/[pageId]`
  - `/project/[pageId]`
  - `/engineering/[pageId]`
  - `/archive/[pageId]`
- 분류:
  - `/category`
  - `/tag`

---

## 🧰 Scripts

- `pnpm dev`: 로컬 개발 서버
- `pnpm build`: 프로덕션 빌드
- `pnpm start`: 빌드 후 실행
- `pnpm typecheck`: 타입 체크
- `pnpm typecheck:strict`: 점진 strict 타입 체크(마이그레이션용)
- `pnpm lint`: 린트(현재는 경고 허용 / 에러만 실패)
- `pnpm prettier:check`: 포맷 체크
- `pnpm bundle-report`: 번들 분석 빌드(`ANALYZE=true`)

---

## ☁️ Deployment (Vercel)

- `vercel.json`에 크론이 설정되어 있으며, 아래 엔드포인트를 주기적으로 호출합니다:
  - `/api/cron/update-records`
- 크론이 필요 없으면 `vercel.json`의 `crons` 설정을 제거하세요.

---

## 🧯 CI

초기 오픈에서는 GitHub Actions CI를 **비활성화**했습니다.  
추후 활성화 방법은 `docs/ci.md`를 참고하세요.

---

## 🤝 Contributing / Security

- 기여: `CONTRIBUTING.md`
- 보안 제보: `SECURITY.md`

---

## 📄 License

MIT License. See `LICENSE`.

