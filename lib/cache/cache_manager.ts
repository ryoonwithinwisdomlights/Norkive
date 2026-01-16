import MemoryCache from "./memory_cache";
// import { isRedisConfigured, redis } from "@/lib/redis"; // Upstash Redis 인스턴스
import { BLOG } from "@/blog.config";

// const isProd = BLOG.isProd;
// const TTL = isProd ? 600 : 7200; // prod: 10min, dev: 2h
// const useRedis = isProd && isRedisConfigured;

/**
 * To reduce frequent interface requests，notion data will be cached
 * @param {*} key
 * @returns
 */
export async function getDataFromCache(
  key: string,
  force = false
): Promise<any | null> {
  if (!BLOG.ENABLE_CACHE) return null;

  let cached;
  cached = await MemoryCache.getCache(key);
  // if (useRedis) {
  //   try {
  //     cached = await redis!.get(key);
  //   } catch (error) {
  //     console.warn("[Redis] getCache failed, fallback to Memory:", error);
  //     cached = await MemoryCache.getCache(key);
  //   }
  // } else {
  //   cached = await MemoryCache.getCache(key);
  // }

  console.log(`[Cache Memory] get: ${key} →`, cached ? "hit" : "miss");
  // console.log(
  //   `[Cache ${useRedis ? "Redis" : "Memory"}] get: ${key} →`,
  //   cached ? "hit" : "miss"
  // );
  return cached || null;
}

export async function setDataToCache(key: string, data: any): Promise<void> {
  // if (useRedis) {
  //   try {
  //     await redis!.set(key, data, { ex: TTL }); // 10분 TTL
  //     console.log("[Redis] setCache:", key);
  //     return;
  //   } catch (error) {
  //     console.warn("[Redis] setCache failed, fallback to Memory:", error);
  //   }
  // }
  await MemoryCache.setCache(key, data); // 기존 memory-cache TTL 사용
  console.log("[Memory] setCache:", key);
}

export async function delCacheData(key: string): Promise<void> {
  if (!BLOG.ENABLE_CACHE) return;

  // if (useRedis) {
  //   try {
  //     await redis!.del(key);
  //     console.log("[Redis] delCache:", key);
  //     return;
  //   } catch (error) {
  //     console.warn("[Redis] delCache failed, fallback to Memory:", error);
  //   }
  // }
  await MemoryCache.delCache(key);
  console.log("[Memory] delCache:", key);
}
