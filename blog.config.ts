import { DOCS_CONFIG } from "./config/docs.config";
import { FONT_CONFIG } from "./config/font.config";
import { CONTACT_CONFIG } from "./config/contact.config";
import { IMAGE_CONFIG } from "./config/image.config";
import { ANALYTICS_CONFIG } from "./config/analytics.config";
import { DEV_CONFIG } from "./config/dev.config";
import { SITE_CONFIG } from "./config/site.config";
import { EXTERNAL_CONFIG } from "./config/external.config";
import { NOTION_PROPERTY_CONFIG  } from "./config/notion.property.config";

export const BLOG  = {
  // ============ 기본 사이트 정보 ============
  APP_NAME: "RyoonGitbookLog", // 사이트 이름 (내부 식별용)
  LANG: process.env.NEXT_PUBLIC_LANG || "kr-KR", // 기본 언어 설정 (kr-KR, en-US 등)
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024, // 사이트 시작 연도 (푸터 등에 표시)
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || "ryoonwithinwisdomlights", // 저자 이름
  BIO: process.env.NEXT_PUBLIC_BIO ||
      "A Software Engineer who likes to Giveaway to the World with Joy, Love and Lights.", // 프로필 소개 문구 (우측 패널)
  KEYWORDS: 
    process.env.NEXT_PUBLIC_KEYWORD ||
    "Ryoon.Gitbook.Log, Gitbook Themed-Static Website, with Notion API", // SEO 메타 키워드

  // ============ 브랜딩 ============
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || "/favicon.ico", // 파비콘 경로

  // ============ 테마 / 다크모드 ============
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || "light", // 기본 테마 (light/dark/auto)
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // auto일 때 다크모드 시간대 [시작시, 종료시]

  // ============ 복사 방지 ============
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY, // false면 우클릭/복사 차단

  // ============ 홈 인트로 섹션 ============
  INTRO:{
    sub_title: process.env.NEXT_PUBLIC_INTRO_SUB_TITLE || "✨ Welcome to", // 인트로 상단 작은 텍스트
    title: process.env.NEXT_PUBLIC_INTRO_TITLE || "Ryoon.Gitbook.Log", // 인트로 메인 타이틀
    description: process.env.NEXT_PUBLIC_INTRO_DESCRIPTION || "Browse all your archives written and recorded in Notion!" // 인트로 설명 문구
  },

  // ============ ISR / SSG 설정 ============
  NEXT_REVALIDATE_SECOND: Number(process.env.NEXT_PUBLIC_NEXT_REVALIDATE_SECOND || 300), // ISR 재검증 주기 (초)
  NEXT_STATIC_PARAMS_LIMIT: Number(process.env.NEXT_PUBLIC_NEXT_STATIC_PARAMS_LIMIT || 30), // 빌드 시 사전 생성할 최대 페이지 수 (Notion 크롤링 부하 방지)

  // ============ 공유 기능 ============
  RECORD_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_RECORD_SHARE_BAR || "true", // 글 하단 공유 버튼 표시 여부
  RECORD_SHARE_SERVICE:
    process.env.NEXT_PUBLIC_RECORD_SHARE_SERVICES || "email,twitter,link", // 활성화할 공유 서비스 (콤마 구분)

  // ============ 개발 도구 ============
  BUNDLE_ANALYZER: process.env.ANALYZE === "true" || false, // 번들 분석 모드 (ANALYZE=true로 실행 시 활성화)

  ...SITE_CONFIG,
  ...IMAGE_CONFIG,
  ...CONTACT_CONFIG,
  ...FONT_CONFIG,
  ...DOCS_CONFIG,
  ...ANALYTICS_CONFIG,
  ...DEV_CONFIG,
  ...EXTERNAL_CONFIG,
  ...NOTION_PROPERTY_CONFIG,
};



