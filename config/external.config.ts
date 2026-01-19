import { config } from "dotenv";
import path from "path";

// 서버 사이드에서만 dotenv 로드
if (typeof window === "undefined") {
  // Vercel 환경에서는 .env.local 파일을 로드하지 않음
  // 로컬 개발 환경에서만 .env.local 파일을 명시적으로 로드
  if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    config({ path: path.resolve(process.cwd(), ".env.local") });
  }
}
export const EXTERNAL_CONFIG = {
  // ============ 테스트용 (개발 환경) ============
  TEST_ID: process.env.TEST_ID || "", // 테스트용 페이지 ID
  TEST_TYPE: process.env.TEST_TYPE || "Docs", // 테스트용 페이지 타입
  
  // ============ Notion API ============
  NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID, // Notion 데이터베이스 ID (필수)
  NOTION_ACTIVE_USER: process.env.NOTION_ACTIVE_USER || "", // Notion 사용자 ID (비공개 DB용)
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN, // Notion Integration 토큰 (비공개 DB용)

  // ============ Cloudinary (이미지 CDN, 선택) ============
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!, // Cloudinary 클라우드 이름
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!, // Cloudinary API 키
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!, // Cloudinary API 시크릿
  CLOUDINARY_UPLOAD_FOLDER: process.env.CLOUDINARY_UPLOAD_FOLDER!, // 업로드 폴더 경로
  
  // ============ Redis 캐시 (Upstash, 선택) ============
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL!, // Upstash Redis REST URL
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN!, // Upstash Redis 토큰
};
