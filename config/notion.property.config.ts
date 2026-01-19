export const NOTION_PROPERTY_CONFIG = {
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
};

