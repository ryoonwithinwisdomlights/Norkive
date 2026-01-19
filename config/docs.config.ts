export const DOCS_CONFIG = {
  RECORD_PER_PAGE: 12, // 목록 페이지당 표시할 글 개수
  RECORD_URL_PREFIX: process.env.NEXT_PUBLIC_RECORD_URL_PREFIX || "general", // 기본 글 타입의 URL prefix (예: /general/[pageId])
  RECORD_SUBSTR_BASIC_NUMBER: 80, // 카드 미리보기에서 요약 텍스트 최대 글자 수
  RECORD_SUBSTR_NAVBAR_NUMBER: 24, // 사이드바 네비게이션에서 제목 최대 글자 수
  PAGE_RECOMMEND_COUNT: 6, // 추천 글 표시 개수
  MENU_SORT_BY: process.env.NEXT_PUBLIC_MENU_SORT_BY || "notion", // 메뉴 정렬 기준 (notion: Notion DB 순서 / date: 날짜순)
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // URL에 .html 확장자 추가 여부 (SEO용)
};
