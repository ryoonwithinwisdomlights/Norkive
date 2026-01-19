export const SITE_CONFIG = {
  // ============ 사이트 메타 정보 ============
  TITLE: process.env.NEXT_PUBLIC_TITLE || "Ryoon.Gitbook.Log", // 사이트 타이틀 (브라우저 탭, SEO)
  DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION ||
    "Ryoon.Gitbook.Log - A Static WebBlog for your every Recorded Archive in Notion with Next.js 15", // 사이트 설명 (SEO meta description)
  LINK: process.env.NEXT_PUBLIC_LINK || "https://ryoongitbooklog.vercel.app/", // 사이트 절대 URL (sitemap, 공유 링크 base)
  
  // ============ 이미지 에셋 ============
  AVATAR: "/images/rwwl.png", // 프로필 아바타 이미지 경로 (우측 패널, Notion 아이콘 없을 때 대체)
  HOME_BANNER_IMAGE:
    process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || "/images/rwwl_background.png", // 홈 배너/기본 커버 이미지 (Notion 커버 없을 때 대체)
};
