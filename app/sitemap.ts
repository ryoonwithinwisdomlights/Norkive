import { BLOG } from "@/blog.config";
import { getGlobalRecordPageData } from "@/lib/notion/serviceImpl";
import { formatDate } from "@/lib/utils/utils";
import { BaseArchivePageBlock } from "@/types/record.model";
import type { MetadataRoute } from "next";
type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

/**
 *
 * Good to know:
 * sitemap.js is a special Route Handlers
 * that is cached by default unless it uses a Dynamic API or dynamic config option.
 *
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const globalData = await getGlobalRecordPageData({
    pageId: BLOG.NOTION_DATABASE_ID as string,
  });
  const dailyVariable: ChangeFrequency = "daily";

  const urls = [
    {
      url: `${BLOG.LINK}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: dailyVariable,
      priority: 1,
    },
    {
      url: `${BLOG.LINK}records`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: dailyVariable,
      priority: 1,
    },
    {
      url: `${BLOG.LINK}project`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: dailyVariable,
      priority: 1,
    },
    {
      url: `${BLOG.LINK}engineering`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: dailyVariable,
      priority: 1,
    },
  ];
  // Cycle page generation
  const { allPages } = globalData as { allPages?: BaseArchivePageBlock[] };
  allPages
    ?.filter(
      (p: BaseArchivePageBlock) =>
        p.status === BLOG.NOTION_PROPERTY_NAME.status_publish
    )
    .forEach((record: BaseArchivePageBlock) => {
      const lmd =
        record.lastEditedDate && record.date?.start_date
          ? formatDate(record.date.start_date, BLOG.LANG)
          : formatDate(record.lastEditedDate ?? new Date(), BLOG.LANG);
      urls.push({
        url: `${BLOG.LINK}${record.type.toLowerCase()}/${record.id}`,
        lastModified: lmd,
        changeFrequency: dailyVariable,
        priority: 1,
      });
    });

  return urls;
}
