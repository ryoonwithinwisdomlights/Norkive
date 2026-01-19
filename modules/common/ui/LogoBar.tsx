"use client"; // 클라이언트 컴포넌트
import React, { memo } from "react";
import { BLOG } from "@/blog.config";
import { useGlobal } from "@/lib/context/EssentialNavInfoProvider";
import LazyImage from "@/modules/common/components/shared/LazyImage";
import Link from "next/link";

/**
 * Logo area
 * @param {*} props
 * @returns
 */
const LogoBar = memo(function LogoBar() {
  const { siteInfo } = useGlobal({ from: "LogoBar" });

  return (
    <div id="top-wrapper" className="w-full flex  flex-row items-center   ">
      <Link
        href="/"
        className="flex flex-row   text-md  text-neutral-900 dark:text-neutral-200  p-2 dark:hover:text-white dark:hover:bg-neutral-500 px-2 hover:rounded-lg "
      >
        <LazyImage
          src={BLOG.AVATAR}
          width={24}
          height={24}
          alt={BLOG.AUTHOR}
          className="mr-2  "
        />
        {siteInfo?.title}
        <span className="text-xs flex flex-row  items-end mb-1  ">
          &nbsp; ©
        </span>
      </Link>
    </div>
  );
});

export default LogoBar;
