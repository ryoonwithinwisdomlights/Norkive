const CORE_BLOG_CONFIG = {
  // Basic site metadata
  APP_NAME: "RyoonGitbookLog", //사이트 이름에요
    AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || "이름을 바꿔주세요.",
    BIO: //우측에 나타나는 소개문구에요
      process.env.NEXT_PUBLIC_BIO ||
      "소개문구를 바꿔주세요.",
  TITLE: process.env.NEXT_PUBLIC_TITLE || "사이트 메타 타이틀을 바꿔주세요.", // 사이트 메타 타이틀에요
  DESCRIPTION: //메타 설명에요
    process.env.NEXT_PUBLIC_DESCRIPTION ||
    "Description을 바꿔주세요.",
  LINK: process.env.NEXT_PUBLIC_LINK || "https://ryoongitbooklog.vercel.app/", // 사이트 링크를 교체해주세요.
  KEYWORDS: //메타 키워드에요
    process.env.NEXT_PUBLIC_KEYWORD ||
    "Keywords를 바꿔주세요.",
INTRO:{
    sub_title: process.env.NEXT_PUBLIC_INTRO_SUB_TITLE || "✨ Welcome to",// 자유롭게 커스터마이징 해주세요.
    title: process.env.NEXT_PUBLIC_INTRO_TITLE || "Ryoon.Gitbook.Log",// 자유롭게 커스터마이징 해주세요.
    description: process.env.NEXT_PUBLIC_INTRO_DESCRIPTION || "Please enjoy your Own Archive!" // 자유롭게 커스터마이징 해주세요.
  },
  // Contact / social links
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "", //이메일 링크에요
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || "",
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || "", //깃허브 링크에요
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || "", //인스타그램 링크에요
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || "", //링크드인 링크에요

  // Notion
  NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID ||"2ea1eb5c033780349f3fc73c9160c4f6", //Notion DB 페이지 ID에요. 자신의 Notion DB 페이지 ID를 입력해주세요.
  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || "https://www.notion.so",
  NOTION_PROPERTY_NAME: {
    // type / status value mapping
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || "type", //레코드 타입에요
    type_able_arr: ["RECORD", "GENERAL", "PROJECT", "ENGINEERING"], //블로그 글 타입으로 가능한 값들에요
    type_record: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || "RECORD",
    type_general:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || "GENERAL",
    type_project:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PROJECT || "PROJECT",
    type_engineering:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_ENGINEERING || "ENGINEERING",
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || "Page",
    type_notice:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || "Notice",
    type_tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_TAGS || "tags",
    type_category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_CATEGORY || "category",
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || "Menu",
    type_sub_menu:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || "SubMenu",
    type_sub_menu_page:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU_PAGE ||
      "SubMenuPage",

    status_publish:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || "Published", //공개 상태에요
    status_invisible:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || "Invisible", //비공개 상태에요
  },

  // i18n / theme
  LANG: process.env.NEXT_PUBLIC_LANG || "kr-KR", //사이트 기본 설정 언어에요
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || "light", //사이트 기본 테마 색상에요
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], //다크모드 시작 시간과 종료 시간에요

  // Branding assets
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || "/favicon.ico",
  AVATAR: "/images/rwwl.png", //프로필 이미지를 바꿔주세요. 기본 이미지는 /images/rwwl.png 입니다.
  HOME_BANNER_IMAGE:
    process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || "/images/rwwl_background.png", //홈 배너 이미지를 바꿔주세요. 기본 이미지는 /images/rwwl_background.png 입니다.

  // Fonts
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || "font-sans font-light",
  FONT_SANS: [
    '"PingFang SC"',
    "-apple-system",
    "BlinkMacSystemFont",
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    "HarmonyOS_Regular",
    '"Helvetica Neue"',
    "Helvetica",
    '"Source Han Sans SC"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
  ],
  FONT_SERIF: [
    "Bitter",
    '"Noto Serif SC"',
    "SimSun",
    '"Times New Roman"',
    "Times",
    "serif",
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"',
  ],

  // UI / Behavior
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY, //복사 가능 여부에요 false일시 우측 클릭이 불가능해요
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || "Notion",
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || "",
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT ||
    "images.unsplash.com",

  // Styling
  BACKGROUND_LIGHT: "#eeeeee",
  BACKGROUND_DARK: "#000000",

  // Archives / records
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024,
  RECORD_PER_PAGE: 12,
  RECORD_URL_PREFIX: process.env.NEXT_PUBLIC_RECORD_URL_PREFIX || "general",
  RECORD_SUBSTR_BASIC_NUMBER: 80,
  RECORD_SUBSTR_NAVBAR_NUMBER: 24,
  PAGE_RECOMMEND_COUNT: 6,
  MENU_SORT_BY: process.env.NEXT_PUBLIC_MENU_SORT_BY || "notion",
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  // ISR / SSG controls (keep build-time safe)
  NEXT_REVALIDATE_SECOND: Number(process.env.NEXT_PUBLIC_NEXT_REVALIDATE_SECOND || 300),
  // Limit pre-rendered pages at build time to avoid heavy Notion crawling.
  NEXT_STATIC_PARAMS_LIMIT: Number(process.env.NEXT_PUBLIC_NEXT_STATIC_PARAMS_LIMIT || 30),

  // Share
  RECORD_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_RECORD_SHARE_BAR || "true",
  RECORD_SHARE_SERVICE:
    process.env.NEXT_PUBLIC_RECORD_SHARE_SERVICES || "email,twitter,link",

  // Code / diagrams
  PRISM_JS_PATH: "https://npm.elemecdn.com/prismjs@1.29.0/components/",
  PRISM_JS_AUTO_LOADER:
    "https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js",
  PRISM_THEME_PREFIX_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH ||
    "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css",
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true,
  PRISM_THEME_LIGHT_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH ||
    "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css",
  PRISM_THEME_DARK_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH ||
    "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css",
  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || false,
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false,
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true,
  CODE_COLLAPSE_EXPAND_DEFAULT:
    process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true,
  MERMAID_CDN:
    process.env.NEXT_PUBLIC_MERMAID_CDN ||
    "https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js",

  // Comments / analytics
  COMMENT_GISCUS_REPONAME: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPONAME,
  ANAYLTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANAYLTICS_GOOGLE_ID || false,
  ANALYTICS_BUSUANZI_ENABLE:
    process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true,

  // Build / runtime flags
  ENABLE_CACHE:
    process.env.ENABLE_CACHE ||
    process.env.npm_lifecycle_event === "build" ||
    process.env.npm_lifecycle_event === "export",
  isProd: process.env.NEXT_VERCEL_ENV === "production",
  BUNDLE_ANALYZER: process.env.ANALYZE === "true" || false,
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
