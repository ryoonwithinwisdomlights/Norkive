import cache from "memory-cache";

import { BLOG } from "@/blog.config";
// import { cache } from "react";

const cacheTime = BLOG.isProd ? 10 * 60 : 120 * 60; // 120 minutes for dev,10 minutes for prod

export async function getCache(key) {
  console.log("[memory getCache]:", key);
  return await cache.get(key);
}

export async function setCache(key, data) {
  console.log("[memory setCache]:", key);
  await cache.put(key, data, cacheTime * 1000);
}

export async function delCache(key) {
  console.log("[memory delCache]:", key);
  await cache.del(key);
}

export default { getCache, setCache, delCache };
