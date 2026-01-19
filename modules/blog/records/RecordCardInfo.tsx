import React, { memo } from "react";
import { usePathname } from "next/navigation";
import ProjectCardInfo from "./ProjectCardInfo";
import BasicCardInfo from "./BasicCardInfo";

interface RecordCardInfoProps {
  item: any;
  showPageCover?: boolean;
}

const RecordCardInfo = memo(function RecordCardInfo({ item, showPageCover = false }: RecordCardInfoProps) {
  const pathname = usePathname();
  const type = pathname.split("/")[1];

  return type === "project" ? (
    <ProjectCardInfo
      record={item}
      showPageCover={showPageCover}
      showPreview={true}
      showSummary={true}
    />
  ) : (
    <BasicCardInfo
      record={item}
      showPageCover={showPageCover}
      showPreview={true}
      showSummary={true}
    />
  );
});

export default RecordCardInfo;
