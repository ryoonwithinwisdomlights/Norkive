export const DEV_CONFIG = {
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false,
    // Notion 설정
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
    NOTION_ACTIVE_USER: process.env.NOTION_ACTIVE_USER || "",
    NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  
  BACKGROUND_LIGHT: "#eeeeee", // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: "#000000", // use hex value, don't forget '#'
  NODE_ENV: process.env.NODE_ENV || "development",
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
  // Comments 
  COMMENT_GISCUS_REPONAME: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPONAME,
  COMMENT_GISCUS_CROSSORIGIN: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN,
  COMMENT_GISCUS_EMIT_METADATA: process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA,
  COMMENT_GISCUS_INPUT_POSITION: process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION,
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG,
  COMMENT_GISCUS_LOADING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING,
  COMMENT_GISCUS_MAPPING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING,
  COMMENT_GISCUS_REACTIONS_ENABLED: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED,
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID,
  
  ENABLE_CACHE:
    process.env.ENABLE_CACHE ||
    process.env.npm_lifecycle_event === "build" ||
    process.env.npm_lifecycle_event === "export", // The cache can be selectively turned on during development, debugging, and packaging. It does not make much sense to turn this feature on during formal deployment.
  isProd: process.env.VERCEL === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
