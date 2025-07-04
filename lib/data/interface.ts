/* eslint-disable no-unused-vars */
import { BLOG } from "@/blog.config";
import {
  NorkiveRecordData,
  PageBlockDataProps,
  RecordPagingData,
} from "@/types";

import {
  getPageProperties,
  getRecordBlockMapWithRetry,
  getRecordPageWithRetry,
} from "@/lib/data/data";
import {
  generateEmptyGloabalData,
  getAllCategoriesOrTags,
  getAllPageIds,
  getCategoryOptions,
  getCustomMenu,
  getLatestRecords,
  getOldNav,
  getPageArrayWithOutMenu,
  getRecordListForLeftSideBar,
  getSiteInfo,
  getTagOptions,
  setAllRecordsWithSort,
} from "@/lib/data/function";
import { isDatabase, setDataBaseProcessing } from "@/lib/data/utils";
import { Collection, CollectionPropertySchemaMap } from "notion-types";
import { idToUuid } from "notion-utils";

const NOTION_DB_ID = BLOG.NOTION_DATABASE_ID as string;

export default async function initGlobalNotionData(from: string = "main") {
  const props = await getGlobalData({
    pageId: BLOG.NOTION_DATABASE_ID as string,
    from: from,
  });
  return props;
}

export async function getGlobalData({
  pageId,
  from,
  type,
}: PageBlockDataProps) {
  const db = await getDataBaseInfoByNotionAPI({ pageId, from, type });
  if (!db) {
    console.error("can`t get Notion Data ; Which id is: ", pageId);
    return {};
  }
  const props = setDataBaseProcessing(db);
  const allPages = getPageArrayWithOutMenu({ arr: props.allPages, type: type });
  props.records = allPages;
  props.allArchiveRecords = props.allPages;
  return props;
}

/**
 * Get the collection data of the specified notation
 * @param pageId
 * @param from request source
 * @returns {Promise<JSX.Element|*|*[]>}
 */
export async function getAllRecordDataWithCache({ pageId, from, type }) {
  const data = await getDataBaseInfoByNotionAPI({ pageId, from });
  return data;
}

//type으로 전체 가져온다음
//id로 sort.
/**
 * @returns {Promise<JSX.Element|null|*>}
 */
export async function getOneRecordPageData({
  pageId,
  type,
  from,
}: PageBlockDataProps) {
  // console.debug("[API_Request]", `record-page-id:${pageId}`);
  //전체 글로벌데이터.
  const allRecordPageBlockMap = await getRecordBlockMapWithRetry({
    pageId: NOTION_DB_ID,
    retryAttempts: 3,
    from,
  });

  if (!allRecordPageBlockMap) {
    console.error("can`t get Notion Data ; Which id is: ", NOTION_DB_ID);
    return null;
  }

  const block = allRecordPageBlockMap.block || {};
  const uuidedRootPageId = idToUuid(NOTION_DB_ID);

  const rawMetadata = block[uuidedRootPageId]?.value;
  const isntDB = isDatabase(rawMetadata, uuidedRootPageId);
  if (!isntDB) {
    return null;
  }
  const collection =
    (
      Object.values(allRecordPageBlockMap.collection || {})[0] as {
        value: Collection;
      }
    )?.value || {};
  const collectionId = rawMetadata?.collection_id;
  const collectionQuery = allRecordPageBlockMap.collection_query;
  const collectionView = allRecordPageBlockMap.collection_view;
  const viewIds = rawMetadata?.view_ids;
  const schema: CollectionPropertySchemaMap = collection?.schema;
  const siteInfo = getSiteInfo({ collection, block });
  const allpageIds = getAllPageIds(
    collectionQuery,
    collectionId,
    collectionView,
    viewIds
  );

  if (allpageIds?.length === 0) {
    console.error(
      "The obtained achive list is empty, please check the notification template",
      collectionQuery,
      collection,
      collectionView,
      viewIds,
      allRecordPageBlockMap
    );
  }

  const allRecordPageBlockMapPagePropetis: RecordPagingData[] = (
    await Promise.all(
      allpageIds.map(async (id) => {
        const value = block[id]?.value;
        if (!value) return null;

        const properties = await getPageProperties(
          id,
          pageId,
          block,
          schema,
          null,
          getTagOptions(schema)
        );
        return properties;
      })
    )
  ).filter((item): item is RecordPagingData => item !== null);

  const dateSort = BLOG.RECORD_SORT_BY === "date" ? true : false;
  // achive count
  const allRecordCounter = { count: 0 };

  // 특정타입인 전체 레코드
  const allRecords: RecordPagingData[] = setAllRecordsWithSort(
    allRecordPageBlockMapPagePropetis,
    allRecordCounter,
    type,
    dateSort
  );
  const record = allRecords.find((item) => item.id === pageId);
  return {
    allRecords: allRecords,
    record: record,
    siteInfo: siteInfo,
  };
}

/**
 * Call NotionAPI to obtain All Page data
 * @returns {Promise<JSX.Element|null|*>}
 */
async function getDataBaseInfoByNotionAPI({
  pageId = NOTION_DB_ID,
  type,
  from = "main_page",
}: PageBlockDataProps) {
  const uuidedRootPageId = idToUuid(pageId);
  console.debug("[API_Request]", `record-page-id:${pageId}, type:${type}`);
  const pageRecordMap = await getRecordBlockMapWithRetry({
    pageId: uuidedRootPageId,
    from: from,
    retryAttempts: 3,
  });

  if (!pageRecordMap) {
    console.error("can`t get Notion Data ; Which id is: ", uuidedRootPageId);
    return {};
  }

  const block = pageRecordMap.block || {};
  const rawMetadata = block[uuidedRootPageId]?.value;

  const isntDB = isDatabase(rawMetadata, uuidedRootPageId);
  if (!isntDB) {
    return generateEmptyGloabalData(uuidedRootPageId);
  }
  const collection =
    (Object.values(pageRecordMap.collection || {})[0] as { value: Collection })
      ?.value || {};
  const collectionId = rawMetadata?.collection_id;
  const collectionQuery = pageRecordMap.collection_query;
  const collectionView = pageRecordMap.collection_view;

  const viewIds = rawMetadata?.view_ids;

  const schema: CollectionPropertySchemaMap = collection?.schema;
  const siteInfo = getSiteInfo({ collection, block });

  const pageIds = getAllPageIds(
    collectionQuery,
    collectionId,
    collectionView,
    viewIds
  );

  if (pageIds?.length === 0) {
    console.error(
      "The obtained achive list is empty, please check the notification template",
      collectionQuery,
      collection,
      collectionView,
      viewIds,
      pageRecordMap
    );
  }

  // 메인 데이터베이스에서 캡처할 수 있는 최대 블록 수는 1000개입니다. 넘치는 블록은 여기에서 통합된 방식으로 캡처됩니다.
  // const blockIdsNeedFetch = []
  // for (let i = 0; i < pageIds.length; i++) {
  //   const id = pageIds[i]
  //   const value = block[id]?.value
  //   if (!value) {
  //     blockIdsNeedFetch.push(id)
  //   }
  // }
  // const fetchedBlocks = await fetchInBatches(blockIdsNeedFetch)
  // block = Object.assign({}, block, fetchedBlocks)

  const allArchiveRecordsData = (
    await Promise.all(
      pageIds.map(async (id) => {
        const value = block[id]?.value;
        if (!value) return null;

        const properties = await getPageProperties(
          id,
          pageId,
          block,
          schema,
          null,
          getTagOptions(schema)
        );
        return properties;
      })
    )
  ).filter((item): item is NorkiveRecordData => item !== null);

  //   // 사이트 구성은 먼저 구성 테이블을 읽고, 그렇지 않으면 blog.config.js 파일을 읽습니다.
  // const NOTION_CONFIG = (await getConfigMapFromConfigPage(collectionData)) || {}

  // // 각 데이터 필드를 처리합니다
  // collectionData.forEach(function (element) {
  //   adjustPageProperties(element, NOTION_CONFIG)
  // })

  const dateSort = BLOG.RECORD_SORT_BY === "date" ? true : false;
  // achive count
  const allRecordCounter = { count: 0 };

  // Find all Archives and Record
  const allPages = setAllRecordsWithSort(
    allArchiveRecordsData,
    allRecordCounter,
    type,
    dateSort
  );

  const notice = await getNoticePage(allArchiveRecordsData);

  const categoryOptions = getAllCategoriesOrTags({
    allPages,
    propertyOptions: getCategoryOptions(schema),
    propertyName: "category",
  });

  const tagOptions = getAllCategoriesOrTags({
    allPages,
    propertyOptions: getTagOptions(schema),
    propertyName: "tags",
  });

  // old menu
  const oldNav = getOldNav({
    allPages: (allArchiveRecordsData as NorkiveRecordData[]).filter(
      (record) => record?.type === "Page" && record.status === "Published"
    ),
  });
  // new menu
  const customMenu = await getCustomMenu({ allArchiveRecordsData });
  const latestRecords = getLatestRecords({
    allPages,
    from,
    latestRecordCount: 6,
  });

  const allNavPagesForLeftSideBar = getRecordListForLeftSideBar({ allPages });
  const recordCount = allRecordCounter.count;
  return {
    notice,
    siteInfo,
    allPages,
    allNavPagesForLeftSideBar,
    block,
    schema,
    tagOptions,
    categoryOptions,
    rawMetadata,
    oldNav,
    customMenu,
    recordCount,
    pageIds,
    latestRecords,
    // rightSlidingDrawerInfo,
  };
}

export async function getNoticePage(data) {
  const notice = data.filter((page) => {
    return (
      page &&
      page?.type &&
      page?.type === "Notice" &&
      page.status === "Published"
    );
  })?.[0];

  if (!notice) {
    return null;
  }

  notice.blockMap = await getRecordBlockMapWithRetry({
    pageId: notice.id,
    from: "data-notice",
  });
  return notice;
}
