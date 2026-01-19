import { DOCS_CONFIG } from "@/config/docs.config";
import { FONT_CONFIG } from "@/config/font.config";
import { CONTACT_CONFIG } from "@/config/contact.config";
import { IMAGE_CONFIG } from "@/config/image.config";
import { ANALYTICS_CONFIG } from "@/config/analytics.config";
import { DEV_CONFIG } from "@/config/dev.config";
import { SITE_CONFIG } from "@/config/site.config";
import { EXTERNAL_CONFIG } from "@/config/external.config";
import { NOTION_PROPERTY_CONFIG } from "@/config/notion.property.config";

const CORE_BLOG_CONFIG = {
  // Basic site metadata
  APP_NAME: "RyoonGitbookLog", // 사이트 이름을 바꿔주세요.
  // i18n / theme
  LANG: process.env.NEXT_PUBLIC_LANG || "kr-KR", //사이트 기본 설정 언어에요
  // Archives / records
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024,
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || "ryoonwithinwisdomlights", // 사이트 저자 이름을 바꿔주세요.
  BIO: process.env.NEXT_PUBLIC_BIO ||
      "A Software Engineer who likes to Giveaway to the World with Joy, Love and Lights.",//우측에 나타나는 Bio(소개문구)입니다. 이 부분을 바꿔주세요.

  KEYWORDS: 
    process.env.NEXT_PUBLIC_KEYWORD ||
    "Ryoon.Gitbook.Log, Gitbook Themed-Static Website, with Notion API",//메타 키워드입니다. 이 부분을 바꿔주세요.

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || "/favicon.ico",  // Branding assets

    APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || "light", //사이트 기본 테마 색상에요
    APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], //다크모드 시작 시간과 종료 시간에요

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY, //복사 가능 여부에요 false일시 우측 클릭이 불가능해요

    INTRO:{
    sub_title: process.env.NEXT_PUBLIC_INTRO_SUB_TITLE || "✨ Welcome to",// 자유롭게 커스터마이징 해주세요.
    title: process.env.NEXT_PUBLIC_INTRO_TITLE || "Ryoon.Gitbook.Log",// 자유롭게 커스터마이징 해주세요.
    description: process.env.NEXT_PUBLIC_INTRO_DESCRIPTION || "Browse all your archives written and recorded in Notion!" // 자유롭게 커스터마이징 해주세요.
  },


  // ISR / SSG controls (keep build-time safe)
  NEXT_REVALIDATE_SECOND: Number(process.env.NEXT_PUBLIC_NEXT_REVALIDATE_SECOND || 300),
  // Limit pre-rendered pages at build time to avoid heavy Notion crawling.
  NEXT_STATIC_PARAMS_LIMIT: Number(process.env.NEXT_PUBLIC_NEXT_STATIC_PARAMS_LIMIT || 30),

  // Share
  RECORD_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_RECORD_SHARE_BAR || "true",
  RECORD_SHARE_SERVICE:
    process.env.NEXT_PUBLIC_RECORD_SHARE_SERVICES || "email,twitter,link",

  

  BUNDLE_ANALYZER: process.env.ANALYZE === "true" || false,

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

/**
 * `BLOG` is intentionally kept as a flat object for backward compatibility.
 * Internally, we keep a "core vs optional features" boundary to make the OSS
 * template easier to reason about and document.
 */
const OPTIONAL_FEATURE_CONFIG = {
  // NOTE: This file currently has no additional feature-only keys beyond core.
  // Keep this object to make future optional features easier to isolate.
};

export const BLOG = {
  ...CORE_BLOG_CONFIG,
  ...OPTIONAL_FEATURE_CONFIG,
} as const;
