import AllRecordsPostListPage from "@/components/records/AllRecordsPostListPage";
import { TotalPageParams } from "@/lib/models";
import { generatingCategoryAndTagPageByTypeAndId } from "@/lib/notion/getNotionData";

export async function generateStaticParams() {
  const records = [{ tagId: "techLog" }, { tagId: "another-Tags" }];
  return records.map((record) => ({
    tagId: record.tagId,
  }));
}

export default async function Page({ params, searchParams }: TotalPageParams) {
  const { tagId } = await params;
  const { pagenum } = await searchParams;
  const decodedTagId = decodeURIComponent(tagId);

  const props = await generatingCategoryAndTagPageByTypeAndId(
    tagId,
    decodedTagId,
    "tag",
    pagenum
  );
  return (
    <AllRecordsPostListPage
      pagenum={pagenum !== undefined ? pagenum : 1}
      postCount={props.postCount}
      posts={props.posts}
    />
  );
}
