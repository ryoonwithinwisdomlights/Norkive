import { useGlobal } from "@/lib/context/EssentialNavInfoProvider";
import { getFilteredRecordList } from "@/lib/notion/functions/function";
import LazyImage from "@/modules/common/components/shared/LazyImage";
import SubTypeCarousel from "@/modules/common/components/SubTypeCarousel";
import { usePathname } from "next/navigation";
import NoRecordFound from "./NoRecordFound";
import RecordCardInfo from "./RecordCardInfo";

const submenuItems = [
  { id: "1", title: "JavaScript", href: "/category/javascript" },
  { id: "2", title: "TypeScript", href: "/category/typescript" },
  { id: "3", title: "React", href: "/category/react" },
  { id: "4", title: "Next.js", href: "/category/nextjs" },
  { id: "5", title: "CSS", href: "/category/css" },
  { id: "6", title: "Tailwind", href: "/category/tailwind" },
  { id: "7", title: "Network", href: "/category/redux" },
  { id: "8", title: "Database", href: "/category/redux" },
  { id: "9", title: "Redux", href: "/category/redux" },
];

const RecordBodyForPage = () => {
  const pathname = usePathname();
  const type = pathname.split("/")[1];
  const { allPages } = useGlobal({ from: type });
  const recordList = getFilteredRecordList(allPages, type.toUpperCase());

  console.log("recordList:", recordList);
  return (
    <div className="flex flex-col">
      {/* <SubTypeCarousel items={submenuItems} /> */}
      <div className="flex flex-row justify-end">
        <div className="space-y-6 w-full px-2">
          {recordList && recordList.length > 0 ? (
            recordList?.map((item: any, index) => {
              const showPageCover = item?.pageCoverThumbnail;
              return (
                <div key={index} className="w-full ">
                  <div className="hover:scale-110 transition-all duration-150">
                    <div
                      key={item.id}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="800"
                      data-aos-once="false"
                      data-aos-anchor-placement="top-bottom"
                      id="notion-page-card"
                      className={`group w-full max-md:h-72  flex p-2 justify-between md:flex-row flex-col-reverse ${
                        index % 2 === 1 ? "md:flex-row-reverse" : ""
                      }overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-neutral-100`}
                    >
                      {/* Text content */}
                      <RecordCardInfo
                        item={item}
                        showPageCover={showPageCover}
                      />
                      {/* Picture cover */}
                      {showPageCover && (
                        <div className="md:w-5/12 rounded-xl overflow-hidden">
                          <LazyImage
                            alt=""
                            priority={index === 1}
                            src={item?.pageCoverThumbnail}
                            className="h-56 w-full rounded-xl object-cover object-center group-hover:scale-110 duration-500"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <NoRecordFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordBodyForPage;
