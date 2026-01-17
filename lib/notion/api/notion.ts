import { NotionAPI } from "notion-client";

export const notion_api = new NotionAPI({
  userTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
});
