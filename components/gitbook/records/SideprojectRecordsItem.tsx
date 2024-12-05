"use client";
/* eslint-disable no-unused-vars */
import LazyImage from "@/components/shared/LazyImage";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { SideprojectRecordsCardInfo } from "./SideprojectRecordsCardInfo";

export default function SideprojectRecordsItem({
  pIndex,
  pId,
  pTitle,
  pPosts,
}) {
  const showPreview = false;
  const showPageCover = pPosts?.pageCoverThumbnail;
  // console.log("pPosts.slug: ", pPosts.slug);
  const router = useRouter();
  // const pathname = usePathname();
  // const url = `${pathname}/${pPosts.slug}`;
  const url = pPosts.slug.split("/");
  const modUrl = `/${url[1]}/${pPosts.id}`;
  ///sideproject/records/sideproject/ryoon-log
  return (
    <div
      key={pIndex}
      onClick={() => {
        console.log("modUrl", modUrl);
        router.push(modUrl);
        console.log("pPosts", pPosts);
      }}
      className="w-full "
    >
      <div className="hover:scale-110 transition-all duration-150">
        <div
          key={pId}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
          id="blog-post-card"
          className={`group  max-md:h-72   w-full flex py-2 justify-between md:flex-row flex-col-reverse ${
            pIndex % 2 === 1 ? "md:flex-row-reverse" : ""
          }overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-neutral-100`}
        >
          {/* Text content */}
          <SideprojectRecordsCardInfo
            index={pIndex}
            post={pPosts}
            showPageCover={showPageCover}
            showPreview={showPreview}
            showSummary={true}
          />

          {/* Picture cover */}
          {showPageCover && (
            <div className="md:w-5/12 overflow-hidden">
              <LazyImage
                alt=""
                priority={pIndex === 1}
                src={pPosts?.pageCoverThumbnail}
                className="h-56 w-full object-cover object-center group-hover:scale-110 duration-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
