export const NOTION_PROPERTY_CONFIG = {
   // ============ Notion DB 속성명 매핑 ============
   // Notion 템플릿의 속성 이름과 매핑됩니다. 템플릿 속성명을 변경했다면 여기도 수정하세요.
   
   type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || "type", // Notion DB의 "타입" 속성명
   type_tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_TAGS || "tags", // Notion DB의 "태그" 속성명
   type_category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_CATEGORY || "category", // Notion DB의 "카테고리" 속성명
   
   // ============ 레코드 타입 값 ============
   type_able_arr: ["RECORD", "GENERAL", "PROJECT", "ENGINEERING"], // 블로그 글로 인식할 타입 값 배열
   type_record: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || "RECORD", // 기본 글 타입 → /archive/[pageId]
   type_general: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || "GENERAL", // 일반 글 타입 → /general/[pageId]
   type_project: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PROJECT || "PROJECT", // 프로젝트 글 타입 → /project/[pageId]
   type_engineering: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_ENGINEERING || "ENGINEERING", // 기술 글 타입 → /engineering/[pageId]
   
   // ============ 시스템 타입 값 ============
   type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || "Page", // 단독 페이지 (블로그 목록에 미표시)
   type_notice: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || "Notice", // 공지사항
   type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || "Menu", // 메뉴 항목
   type_sub_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || "SubMenu", // 서브메뉴 항목
   type_sub_menu_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU_PAGE || "SubMenuPage", // 서브메뉴 페이지

   // ============ 상태 값 ============
   status_publish: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || "Published", // 공개 상태 (이 값만 사이트에 표시)
   status_invisible: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || "Invisible", // 비공개 상태 (사이트에 미표시)
};

