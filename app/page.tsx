"use client";
import ArchiveIntro from "@/modules/blog/records/ArchiveIntro";
import RightSlidingDrawer from "@/modules/layout/components/RightSlidingDrawer";
import GeneralRecordTypePageWrapper from "@/modules/layout/templates/GeneralRecordTypePageWrapper";

export default function Page() {
  const props = null;
  return (
    <GeneralRecordTypePageWrapper>
      <ArchiveIntro />
      <RightSlidingDrawer props={props} />
    </GeneralRecordTypePageWrapper>
  );
}
