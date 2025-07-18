"use client";

import { useGlobal } from "@/lib/context/EssentialNavInfoProvider";
import dynamic from "next/dynamic";

const NotionPage = dynamic(
  () => import("@/modules/common/components/shared/NotionPage"),
  {
    ssr: false,
  }
);

// 공지사항전용
const Announcement = () => {
  const { notice } = useGlobal({ from: "index" });
  if (notice?.blockMap) {
    return (
      notice.status === "Published" && (
        <div className="justify-center">
          <section id="announcement-wrapper" className="rounded-xl px-2 py-4">
            {
              <div id="announcement-content ">
                <NotionPage record={notice} />
              </div>
            }
          </section>
        </div>
      )
    );
  } else {
    return <></>;
  }
};
export default Announcement;
