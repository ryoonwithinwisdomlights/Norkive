import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG } from "@/blog.config";
import { getARecordPageById } from "@/lib/notion/controller";
import { getStaticPageParams } from "@/lib/notion/api/getStaticPageParams";
import SingleRecords from "@/modules/blog/records/SingleRecords";
import ErrorComponent from "@/modules/common/components/shared/ErrorComponent";
import RightSlidingDrawer from "@/modules/layout/components/RightSlidingDrawer";
import GeneralRecordTypePageWrapper from "@/modules/layout/templates/GeneralRecordTypePageWrapper";

// NOTE: Next.js requires a static number literal here.
export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  return await getStaticPageParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pageId: string }>;
}): Promise<Metadata> {
  const { pageId } = await params;

  const props = await getARecordPageById({
    pageId,
    from: "ENGINEERING-page-metadata",
    type: "ENGINEERING",
  });
  if (!props) {
    notFound();
  }
  const title = props?.page?.title;
  const pageTitle = title ? title : "";
  return {
    title: pageTitle,
    description: BLOG.DESCRIPTION as string,
  };
}

// `generateStaticParams`가 반환한 `params`를 사용하여 이 페이지의 여러 버전이 정적으로 생성됩니다.
export default async function Page({
  params,
}: {
  params: Promise<{ pageId: string }>;
}) {
  const { pageId } = await params;

  if (!pageId) {
    return <ErrorComponent />;
  }

  const result = await getARecordPageById({
    pageId,
    from: "engineering-page",
    type: "Engineering",
  });

  if (!result) {
    return <div>Invalid Page Id</div>;
  }



  return (
    <GeneralRecordTypePageWrapper>
      <SingleRecords props={result} />
      <RightSlidingDrawer props={result} />
    </GeneralRecordTypePageWrapper>
  );
}
