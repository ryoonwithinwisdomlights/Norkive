"use client";
import React, { memo } from "react";
import { useGeneralSiteSettings } from "@/lib/context/GeneralSiteSettingsProvider";

const NoRecordFound = memo(function NoRecordFound() {
  const { locale } = useGeneralSiteSettings();
  return (
    <div
      className="text-neutral-500 dark:text-neutral-300 flex flex-col w-full 
    items-center justify-center 
    min-h-screen mx-auto my-auto md:text-4xl text-2xl  "
    >
      {locale.SEARCH.NO_RECORD_FOUND}
    </div>
  );
});

export default NoRecordFound;
