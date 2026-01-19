export const DEV_CONFIG = {
  // ============ 디버그 / 환경 ============
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 디버그 모드 활성화 (콘솔 로그 상세 출력)
  NODE_ENV: process.env.NODE_ENV || "development", // 실행 환경 (development/production)
  isProd: process.env.VERCEL === "production", // Vercel 프로덕션 환경 여부 (DebugPanel, VConsole 등 비활성화 기준)
  
  // ============ Notion API 인증 ============
  NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID, // Notion 데이터베이스 ID (필수)
  NOTION_ACTIVE_USER: process.env.NOTION_ACTIVE_USER || "", // Notion 사용자 ID (비공개 DB 접근용)
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN, // Notion Integration 토큰 (비공개 DB 접근용)
  
  // ============ 배경색 ============
  BACKGROUND_LIGHT: "#eeeeee", // 라이트 모드 배경색 (hex)
  BACKGROUND_DARK: "#000000", // 다크 모드 배경색 (hex)
  
  // ============ 코드 하이라이팅 (Prism.js) ============
  PRISM_JS_PATH: "https://npm.elemecdn.com/prismjs@1.29.0/components/", // Prism 언어 모듈 CDN 경로
  PRISM_JS_AUTO_LOADER:
    "https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js", // Prism 오토로더 CDN
  PRISM_THEME_PREFIX_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH ||
    "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css", // 기본 코드 테마 CSS
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 다크/라이트 모드에 따라 코드 테마 전환 여부
  PRISM_THEME_LIGHT_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH ||
    "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css", // 라이트 모드 코드 테마
  PRISM_THEME_DARK_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH ||
    "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css", // 다크 모드 코드 테마
  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || false, // 코드 블록 상단 macOS 스타일 버튼 표시
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // 코드 블록 줄 번호 표시
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // 긴 코드 블록 접기 기능 활성화
  CODE_COLLAPSE_EXPAND_DEFAULT:
    process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // 코드 블록 기본 펼침 상태
  
  // ============ Mermaid 다이어그램 ============
  MERMAID_CDN:
    process.env.NEXT_PUBLIC_MERMAID_CDN ||
    "https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js", // Mermaid.js CDN URL
  
  // ============ Giscus 댓글 ============
  COMMENT_GISCUS_REPONAME: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPONAME, // GitHub 저장소명 (user/repo)
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID, // GitHub 저장소 ID
  COMMENT_GISCUS_MAPPING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING, // 댓글 매핑 방식 (pathname/url/title 등)
  COMMENT_GISCUS_REACTIONS_ENABLED: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED, // 리액션 기능 활성화
  COMMENT_GISCUS_EMIT_METADATA: process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA, // 메타데이터 emit 여부
  COMMENT_GISCUS_INPUT_POSITION: process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION, // 댓글 입력창 위치 (top/bottom)
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG, // Giscus UI 언어
  COMMENT_GISCUS_LOADING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING, // 로딩 방식 (lazy 권장)
  COMMENT_GISCUS_CROSSORIGIN: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN, // crossorigin 속성
  
  // ============ 캐시 설정 ============
  ENABLE_CACHE:
    process.env.ENABLE_CACHE ||
    process.env.npm_lifecycle_event === "build" ||
    process.env.npm_lifecycle_event === "export", // 캐시 활성화 (빌드 시 자동 활성화)
};
