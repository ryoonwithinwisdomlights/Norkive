export const ANALYTICS_CONFIG = {
  // ============ 분석 도구 ============
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // Vercel Analytics 활성화 여부
  ANAYLTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANAYLTICS_GOOGLE_ID || false, // Google Analytics ID (예: G-XXXXXXXXXX)
  ANALYTICS_BUSUANZI_ENABLE:
    process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // Busuanzi 방문자 카운터 활성화 (http://busuanzi.ibruce.info/)
  
  // ============ SEO 인증 ============
  SEO_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || "", // Google Search Console 인증 코드
};
