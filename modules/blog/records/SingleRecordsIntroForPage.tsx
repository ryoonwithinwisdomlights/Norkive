import { BLOG } from "@/blog.config";
import { useGeneralSiteSettings } from "@/lib/context/GeneralSiteSettingsProvider";
import LazyImage from "@/modules/common/components/shared/LazyImage";
import NotionIcon from "@/modules/common/components/shared/NotionIcon";
import { Skeleton } from "@/modules/common/ui/Skeleton";
import {
  CalendarIcon,
  EyeIcon,
  FolderClockIcon,
  TelescopeIcon,
} from "lucide-react";
import Link from "next/link";

const SingleRecordsIntroForPage = ({ record, siteInfo }) => {
  const { locale } = useGeneralSiteSettings();
  // p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-800

  //bg-white dark:bg-neutral-700 rounded-2xl
  return (
    <div className="p-5 w-full h-full items-center flex flex-col justify-center gap-y-6">
      <div
        className="mt-0.5 space-y-2.5 w-full 
       dark:text-neutral-300 text-neutral-700"
      >
        <div className="eyebrow h-5  text-sm font-semibold">{record.type}</div>
        <div className="flex items-center relative gap-2">
          <h1
            id="page-title"
            className="inline-block text-2xl sm:text-3xl tracking-tight  "
          >
            {/* <NotionIcon icon={record?.pageIcon} /> */}
            {record?.title}
          </h1>
        </div>
      </div>

      <section className=" w-full flex-wrap flex flex-row text-sm justify-start items-center text-neutral-500 dark:text-neutral-400 font-light ">
        <span className="whitespace-nowrap flex flex-row items-center">
          <CalendarIcon className="mr-1 w-4 h-4" />
          {locale.COMMON.record_TIME}: {record?.publishDay}
        </span>
        <span className="mx-1 ml-2 mr-2"> | </span>
        <span className="whitespace-nowrap mr-2 flex flex-row items-center">
          <FolderClockIcon className="mr-2 w-4 h-4" />
          {locale.COMMON.LAST_EDITED_TIME}: {record?.lastEditedDay}
        </span>

        <span className=" flex-row items-center busuanzi_container_page_pv">
          <div className="flex flex-row items-center">
            <TelescopeIcon className="mr-2 font-light whitespace-nowrap w-4 h-4 " />
            <span className="busuanzi_value_page_pv"></span>
            <span className="ml-1">{locale.COMMON.VIEW}</span>
          </div>
        </span>
        <span className="mx-1 ml-2 mr-2"> | </span>
        <div className="flex flex-row items-center">
          <LazyImage
            src={siteInfo?.icon}
            className="rounded-full cursor-pointer dark:border dark:border-neutral-300"
            width={16}
            height={16}
            alt={BLOG.AUTHOR}
          />

          <div className="mr-3 ml-2 my-auto text-neutral-400 cursor-pointer">
            {BLOG.AUTHOR}
          </div>
        </div>
      </section>
    </div>
  );
};

const SingleRecordsIntroForPageSkeleton = () => {
  return <Skeleton className="h-9 w-full rounded-md" />;
};
export default SingleRecordsIntroForPage;
SingleRecordsIntroForPage.Skeleton = SingleRecordsIntroForPageSkeleton;
