"use client";
import NotionPage from "@/components/shared/NotionPage";
import { useGlobal } from "@/lib/providers/globalProvider";
import { CalendarIcon, LockIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import TagItemMini from "../TagItemMini";

/**
 * Portfolio list text content
 * @param {*} param0
 * @returns
 */
function DevprojectCardInfoItem({
  post,
  showPreview,
  showPageCover,
  showSummary,
}) {
  const router = useRouter();
  const patname = usePathname();
  const { locale } = useGlobal({ from: "index" });
  // const onClick = (category: string) => {
  //   router.push(`/category/${category}`);
  // };
  const onClick = (recId: string) => {
    router.push(`${patname}/${recId}`);
  };
  return (
    <div
      className={`flex flex-col justify-between lg:p-6 p-4   ${
        showPageCover && !showPreview
          ? "md:w-7/12 w-full md:max-h-60"
          : "w-full"
      }`}
    >
      <div className="flex flex-col items-start  text-start">
        <div
          onClick={(e) => {
            onClick(post.id);
          }}
          className={`line-clamp-2 flex flex-row replace cursor-pointer text-2xl ${
            showPreview ? "text-center" : ""
          } leading-tight font-normal text-neutral-600  hover:text-black`}
        >
          <span className="menu-link text-start">
            {post.title}
            {/* {post.title.substr(0, 25) + "..."} */}
          </span>
        </div>
        {/* Classification */}
        {post?.category && (
          <div
            className={`flex items-center ${
              showPreview ? "justify-center" : "justify-start"
            } flex-wrap dark:text-neutral-500 text-neutral-400 `}
          >
            <span className="text-xs flex flex-row">
              &nbsp;&nbsp;&nbsp;{" "}
              {post.password !== "" && (
                <>
                  <LockIcon className="mr-1 w-4 h-4" />
                  &nbsp;{locale.COMMON.LOCKED}
                </>
              )}
            </span>
          </div>
        )}

        {/* Summary */}
        {(!showPreview || showSummary) && !post.results && (
          <p className="line-clamp-2 replace  text-neutral-500  dark:text-neutral-500 text-sm font-light leading-7">
            {post.summary}
          </p>
        )}

        {/* Preview */}
        {showPreview && (
          <div className="overflow-ellipsis truncate">
            <NotionPage post={post} />
          </div>
        )}
      </div>

      <div>
        {/* date label */}
        <div className="text-neutral-400 justify-between flex">
          <div className="flex flex-row items-center">
            <CalendarIcon className="mr-1 w-4 h-4" />
            {post?.publishDay || post.lastEditedDay}
          </div>
          <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
            <div>
              {post.tagItems?.map((tag) => (
                <TagItemMini key={tag.name} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevprojectCardInfoItem;
