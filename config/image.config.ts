export const IMAGE_CONFIG = {
  // ============ Notion 이미지 설정 ============
  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || "https://www.notion.so", // Notion 도메인 (리버스 프록시 사용 시 변경)
  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, // 기본 이미지 압축 너비 (px) - 커버/본문 이미지에 적용
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, // 이미지 확대 시 로드할 고해상도 너비 (px)
  
  // ============ 이미지 소스 설정 ============
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || "Notion", // 이미지 소스 타입 (Notion만 지원, AMAZON 미지원)
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", // 이미지 lazy load 시 보여줄 placeholder (base64)
 
  // ============ 랜덤 이미지 API ============
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || "", // 랜덤 이미지 API URL (설정 시 커버 이미지 없는 글에 적용)
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT ||
    "images.unsplash.com", // 랜덤 이미지로 대체하지 않을 도메인 키워드
};
