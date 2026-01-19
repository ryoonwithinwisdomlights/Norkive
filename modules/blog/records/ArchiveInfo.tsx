"use client";
import React, { memo } from "react";
import { useGlobal } from "@/lib/context/EssentialNavInfoProvider";
import { formatToKoreanDate } from "@/lib/utils/utils";
import { Clock4Icon } from "lucide-react";

interface ArchiveInfoProps {
  props?: {
    page?: {
      lastEditedDate?: string;
    };
  };
}

const ArchiveInfo = memo(function ArchiveInfo({ props }: ArchiveInfoProps) {
  const { notice } = useGlobal({ from: "ArchiveInfo" });
  const modRecord = props?.page ? props?.page : notice;
  if (!modRecord) {
    return null;
  }

  return (
    <div className="m-0 p-0  flex flex-row items-center mb-5">
      <Clock4Icon className="mr-2 w-3 h-3 " />
      <span className="text-xs">
        Last update: {formatToKoreanDate(modRecord.lastEditedDate)}
      </span>
    </div>
  );
});

export default ArchiveInfo;
