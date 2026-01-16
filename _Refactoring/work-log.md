## 작업 로그: 의존성/설정/타입 에러 정리 (2026-01-16)

이 문서는 “왜 이런 파일/설정이 생겼는지”를 기록해서, 다음에 같은 이슈가 나도 스스로 해결할 수 있게 돕는 용도입니다.

> 참고: 원래 `_Refactoring/` 폴더는 통째로 gitignore였는데, **학습용 로그 문서(`work-log.md`)만 커밋에 포함**되도록 `.gitignore`를 조정했습니다.

---

### 1) 발생했던 문제 요약

- **런타임 빌드/실행 에러**: `Module not found: Can't resolve 'fuse.js'`
  - `modules/common/components/HeaderSearch.tsx`에서 `import Fuse from "fuse.js"` 를 사용하지만, 의존성이 설치되어 있지 않았음
- 연쇄적으로 다른 missing 모듈이 드러남
  - 예: `react-body-classname`, `react-tweet-embed`, `@upstash/redis`, `dotenv`
- **pnpm 설치 에러**: `ERR_PNPM_UNEXPECTED_STORE (Unexpected store location)`
  - 기존 `node_modules`가 프로젝트 내부 store(`.pnpm-store/v10`)를 참조하고 있었는데,
    pnpm이 사용자 전역 store(`~/Library/pnpm/store/v10`)로 링크하려고 하면서 충돌

---

### 2) 의존성(Dependencies) 변경

#### 추가된 패키지

- **`fuse.js`**
  - 목적: 헤더 검색(`HeaderSearch`)에서 fuzzy search 구현에 필요
- **`react-tweet-embed`**
  - 목적: Notion 페이지에서 트윗 임베드 렌더링에 필요
- **`@upstash/redis`**, **`dotenv`**
  - 목적: `lib/redis.ts`에서 Upstash Redis 사용 + 로컬 개발 시 env 로딩

#### 제거된 패키지

- **`react-body-classname`**
  - 이유: React 19 환경에서 `react-body-classname` → `react-side-effect`가 요구하는 peer React 범위와 충돌(경고/잠재 런타임 이슈)
  - 조치: 외부 패키지 의존을 제거하고, 동일 기능을 **내부 컴포넌트로 대체**

---

### 3) 코드 변경(핵심 포인트)

#### `modules/common/components/shared/NotionPage.tsx`

- `react-body-classname` import 제거
- `BodyClassName` 기능을 내부 컴포넌트로 구현
  - `useEffect`로 `document.body.classList.add/remove` 하는 방식
  - `isDarkMode`일 때 body에 `dark-mode` 클래스를 붙이는 기존 UX 유지

#### TS/타입 에러 정리 (한 번에 해결)

TypeScript 타입체크에서 아래 에러들이 있었고, 현재는 `pnpm exec tsc --noEmit -p tsconfig.json` 기준 **통과**합니다.

- **`Cannot find namespace 'JSX'`**
  - 원인: 일부 컴포넌트에서 리턴 타입을 `: JSX.Element`로 직접 지정했는데,
    프로젝트 타입 조합/설정에 따라 `JSX` 네임스페이스가 기대대로 잡히지 않는 경우가 있음
  - 해결: 리턴 타입을 명시하지 않고 타입 추론을 사용 (Next/React 환경에서 일반적으로 안전)
    - 대상: `ErrorComponent.tsx`, `PrismMac.tsx`

- **`KatexReact.tsx`에서 JSX 컴포넌트 타입 에러**
  - 원인: `as?: keyof JSX.IntrinsicElements` + 동적 컴포넌트 지정 로직이 TS에서 JSX 컴포넌트로 인정되지 않는 케이스 발생
  - 해결: `as` 타입을 `ElementType`로 변경해서 `"div" | "span" | 컴포넌트` 모두 안정적으로 처리

- **`LazyImage.tsx` ref 타입**
  - 원인: `useRef(null)` → `ImgProps.ref`가 `RefObject<HTMLImageElement>`로 고정되어 있어서 타입 불일치
  - 해결:
    - `useRef<HTMLImageElement | null>(null)`로 명확히 지정
    - `types/utils.model.ts`의 `ImgProps.ref`를 `RefObject<HTMLImageElement | null>`로 맞춤

---

### 4) pnpm store 충돌 방지: `.npmrc`

추가된 파일: **`.npmrc`**

내용:

```text
store-dir=.pnpm-store/v10
```

의미:
- pnpm이 패키지를 저장/링크하는 “store 위치”를 **프로젝트 로컬 store로 고정**합니다.
- 여러 환경(다른 pnpm 버전/전역 설정)에서 작업해도 `ERR_PNPM_UNEXPECTED_STORE`가 재발할 확률이 줄어듭니다.

---

### 5) 기타 설정 변경(요약)

- **`.gitignore`**
  - `/.pnpm-store` 무시 추가 (store 폴더가 git에 들어오지 않게)
  - `tsconfig.tsbuildinfo` 무시 추가 (TypeScript 증분 빌드 캐시 파일 커밋 방지)
  - `_Refactoring/` 전체 무시 → **`work-log.md`만 예외로 커밋**되게 조정

- **`next.config.ts`**
  - `outputFileTracingRoot: path.join(__dirname)` 추가
  - 목적: 워크스페이스/락파일 구조 때문에 Next가 root를 잘못 잡는 케이스 방지(배포/standalone tracing 안정화)

- **`.eslintrc.js`**
  - `next/core-web-vitals`로 정리 및 일부 룰을 “차단(error)” 대신 “완화(warn/off)” 방향으로 조정
  - 목적: 레거시/외부 스타일 코드가 섞여 있을 때 CI/빌드가 린트로 막히지 않게 운영 안정성 확보

---

### 6) 부수적인 리팩토링/정리 (기능 변화 최소)

의존성/타입 에러를 잡는 과정에서 “사용하지 않는 값/로그/주석”을 정리한 변경들이 포함되어 있습니다.

- **Notion 데이터 처리 로직 정리**
  - `lib/notion/functions/function.ts`
    - 미사용/불필요 파라미터 정리(`getLatestRecords`에서 `from` 제거)
    - `try/catch`에서 빈 catch 제거 → `console.error`로 최소 로깅 추가
    - import 순서 정리(동일 파일 내 util/constant/type 그룹화)
  - `lib/notion/serviceImpl.ts`
    - 미사용 import 제거
    - `getLatestRecords` 호출부에서 제거된 파라미터 반영
  - `lib/notion/functions/utils.ts`
    - 더 이상 쓰지 않는 대량 주석 블록 제거(가독성 개선)

- **UI 컴포넌트 불필요 로그/값 제거**
  - `modules/blog/records/ArchiveIntro.tsx`: 디버그 `console.log` 제거
  - `modules/layout/components/TopNavBar.tsx`: 사용하지 않는 `oldNav` 구조분해 제거

- **Next 타입 파일 정리**
  - `next-env.d.ts`: routes 타입 레퍼런스 추가 (Next 15 App Router 타입 안정화 목적)

---

### 7) 다음에 비슷한 에러가 나면 이렇게 보면 됨

#### A. `Module not found: Can't resolve 'xxx'`

- 우선 `package.json`에 해당 패키지가 있는지 확인
- 없으면:

```bash
pnpm add xxx
```

#### B. pnpm이 `Unexpected store location`을 뿜으면

- `.npmrc`에 `store-dir=.pnpm-store/v10`이 있는지 확인
- 없다면 추가하고 다시 설치

```bash
pnpm install
```

---

### 8) 이번 작업 결과

- 런타임 “missing module” 에러 해결
- TypeScript 타입체크 통과
- pnpm store 충돌 재발 방지 장치 추가

