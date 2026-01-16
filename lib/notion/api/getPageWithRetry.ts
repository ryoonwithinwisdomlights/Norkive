import { getDataFromCache, setDataToCache } from "@/lib/cache/cache_manager";
import { getPage } from "@/lib/notion/api/getPage";
import { delay } from "@/lib/utils/utils";
import { PageBlockDataProps } from "@/types";
import { ExtendedRecordMap } from "notion-types";

export async function getRecordBlockMapWithRetry({
  pageId,
  from,
  retryAttempts,
}: PageBlockDataProps) {
  console.log("🪵 getRecordBlockMapWithRetry() pageId:", pageId);

  const recordMap = await getPageWithRetry({
    pageId,
    from,
    retryAttempts,
  });

  return recordMap;
}

export async function getPageWithRetry({
  pageId,
  from = "unknown",
  retryAttempts = 3,
}: {
  pageId: string;
  from?: string;
  retryAttempts?: number;
}): Promise<ExtendedRecordMap | null> {
  const cacheKey = `page_block_${pageId}`;

  const cached = await getDataFromCache(cacheKey);
  if (cached) {
    console.log(`[✅ Cache Hit] ${from} - ${pageId}`);
    return cached;
  }

  console.warn(`[🌀 Cache Miss] ${from} - ${pageId}, retry: ${retryAttempts}`);
  if (retryAttempts && retryAttempts > 0) {
    try {
      const pageData = await getPage(pageId);
      await setDataToCache(cacheKey, pageData);
      return pageData;
    } catch (err) {
      console.error(`[❌ Fetch Error] ${from} - ${pageId} : ${err}`);
      await delay(1000);
      return await getPageWithRetry({
        pageId,
        from,
        retryAttempts: retryAttempts - 1,
      });
    }
  }

  console.error(`[🚫 All Retries Failed] ${from} - ${pageId}`);
  return null;
}

const tryGetNotionCachedData = async (cacheKey, pageId, from) => {
  const cached = await getDataFromCache(cacheKey);
  if (cached) {
    console.log(`[Cache hit] ${from} - ${pageId}`);
    return cached;
  }
  return false;
};

const tryFetchNotionRemoteData = async ({
  from,
  pageId,
  retryAttempts,
  cacheKey,
}: {
  from?: string;
  pageId: string;
  retryAttempts?: number;
  cacheKey: string;
}): Promise<ExtendedRecordMap> => {
  console.log(
    `[Cache miss] ${from} - fetching from Notion`,
    `id: ${pageId}`,
    `retries left: ${retryAttempts}`
  );
  const start = Date.now();
  const pageData = await getPage(pageId);
  await setDataToCache(cacheKey, pageData);
  const end = Date.now();
  console.log(`[Notion fetch done] ${from} - id: ${pageId} ${end - start}ms`);
  return pageData;
};
