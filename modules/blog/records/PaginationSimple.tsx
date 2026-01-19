"use client";
import React, { memo, useCallback, useMemo } from "react";
import { useGeneralSiteSettings } from "@/lib/context/GeneralSiteSettingsProvider";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface PaginationSimpleProps {
  pagenum: number | string;
  totalPage: number;
}

/**
 * Simple page turning plug-in
 * @param page Current page number
 * @param totalPage Is there a next page?
 * @returns {JSX.Element}
 * @constructor
 */
const PaginationSimple = memo(function PaginationSimple({ pagenum, totalPage }: PaginationSimpleProps) {
  const { locale } = useGeneralSiteSettings();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = useMemo(() => +pagenum, [pagenum]);
  const showNext = useMemo(() => currentPage < totalPage, [currentPage, totalPage]);
  const pagePrefix = useMemo(() => pathname.replace(/\/page\/[1-9]\d*/, ""), [pathname]);

  const handleNextPage = useCallback(() => {
    router.push(`${pagePrefix}?pagenum=${currentPage + 1}`);
  }, [router, pagePrefix, currentPage]);

  return (
    <div className={` flex w-full justify-end  space-x-2`}>
      <div
        onClick={handleNextPage}
        className={`${
          +showNext ? "block" : "invisible"
        } rounded-md transform hover:scale-105 duration-300 text-end group w-3/5 py-2 px-4 gap-x-2 flex flex-row items-center  dark:hover:text-neutral-100  hover:border-neutral-200 dark:bg-neutral-700 bg-neutral-100`}
      >
        <span className="dark:text-neutral-300 text-neutral-700   tracking-tight group-hover:font-bold ">
          {locale.PAGINATION.NEXT}
        </span>
        <ChevronRight className="w-4 h-4 dark:text-neutral-300 text-neutral-700 group-hover:font-bold " />
      </div>
    </div>
  );
});

export default PaginationSimple;
