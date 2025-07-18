"use client";
import { BLOG } from "@/blog.config";
import { useGeneralSiteSettings } from "@/lib/context/GeneralSiteSettingsProvider";
import NavPostListEmpty from "@/modules/layout/components/NavPostListEmpty";
import { PaginationDivProps } from "@/types";
import { useRouter } from "next/navigation";
import AllRecordsPostCard from "./AllRecordsPostCard";
import PaginationSimple from "./PaginationSimple";
import { ChevronLeft } from "lucide-react";
/**
 * Archive list pagination table
 * @param page current page
 * @param records All Archives
 * @param tags All tags
 * @returns {JSX.Element}
 * @constructor
 */
const AllRecordsList = ({
  pagenum = 1,
  allPages = [],
  pageCount,
}: PaginationDivProps) => {
  const router = useRouter();
  const totalPage = Math.ceil(pageCount / BLOG.RECORD_PER_PAGE);
  const { locale, searchKeyword } = useGeneralSiteSettings();
  const currentPage = +pagenum;

  const showNext = currentPage < totalPage;
  if (!allPages || allPages.length === 0) {
    return <NavPostListEmpty searchKeyword={searchKeyword} />;
  }
  const historGoBack = () => {
    router.back();
  };
  return (
    <div className=" justify-center flex flex-col gap-y-12">
      <div
        onClick={historGoBack}
        className={` ${!+showNext && "font-bold"} rounded-md transform hover:scale-110 duration-300 group w-1/5 py-2 px-4 gap-x-2 text-start flex flex-row items-center  dark:hover:text-neutral-100  hover:border-neutral-200 dark:bg-neutral-700 bg-neutral-100`}
      >
        <ChevronLeft className="w-4 h-4 dark:text-neutral-300 text-neutral-700 group-hover:font-bold " />

        <span className="dark:text-neutral-300 text-neutral-700   tracking-tight group-hover:font-bold ">
          {locale.PAGINATION.PREV}
        </span>
      </div>
      <div id="records-wrapper ">
        {allPages?.map((record: any) => (
          <AllRecordsPostCard
            key={record.id}
            record={record}
            substr={true}
            substrNumber={BLOG.RECORD_SUBSTR_BASIC_NUMBER}
          />
        ))}
      </div>

      <PaginationSimple pagenum={pagenum} totalPage={totalPage} />
    </div>
  );
};

export default AllRecordsList;
