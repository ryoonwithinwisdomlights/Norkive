"use client";
import { isBrowser } from "@/lib/utils/utils";
import throttle from "lodash.throttle";
import { usePathname } from "next/navigation";
import { uuidToId } from "notion-utils";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
/**
 * Directory Navigation Component
 * @param toc
 * @returns {JSX.Element}
 * @constructor
 */
const Catalog = ({ post }) => {
  const pathname = usePathname();
  if (!post) {
    return <></>;
  }
  const isMobile = useMediaQuery("(max-width: 768px");
  const toc = post?.toc;
  console.log("post?.toc: ", post?.toc);
  // Synchronize selected directory events
  const [activeSection, setActiveSection] = useState(null);

  // isten for scroll events
  useEffect(() => {
    window.addEventListener("scroll", actionSectionScrollSpy);
    actionSectionScrollSpy();
    return () => {
      window.removeEventListener("scroll", actionSectionScrollSpy);
    };
  }, [post]);

  const throttleMs = 200;
  const actionSectionScrollSpy = useCallback(
    throttle(() => {
      const sections = document.getElementsByClassName("notion-h");
      let prevBBox;
      let currentSectionId;
      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i];
        if (!section || !(section instanceof Element)) continue;
        if (!currentSectionId) {
          currentSectionId = section.getAttribute("data-id");
        }
        const bbox = section.getBoundingClientRect();
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0;
        const offset = Math.max(150, prevHeight / 4);
        // GetBoundingClientRect returns values relative to viewport
        if (bbox.top - offset < 0) {
          currentSectionId = section.getAttribute("data-id");
          prevBBox = bbox;
          continue;
        }
        // No need to continue loop, if last element has been detected
        break;
      }
      setActiveSection(currentSectionId);
      const tocIds = post?.toc?.map((t) => uuidToId(t.id)) || [];
      const index = tocIds.indexOf(currentSectionId) || 0;
      if (!isMobile && tocIds?.length > 0) {
        for (const tocWrapper of document?.getElementsByClassName(
          "toc-wrapper"
        )) {
          tocWrapper?.scrollTo({ top: 28 * index, behavior: "smooth" });
        }
      }
    }, throttleMs),
    [post]
  );

  // If there is no directory, it will return empty directly.
  if (!toc || toc.length < 1) {
    return null;
  }

  return pathname !== "/" ? (
    <div
      id="toc-wrapper"
      className="toc-wrapper overflow-y-auto my-2 max-h-80 overscroll-none scroll-hidden"
    >
      <nav className="h-full  text-black">
        {toc.map((tocItem) => {
          const id = uuidToId(tocItem.id);
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`notion-table-of-contents-item duration-300 transform font-light dark:text-gray-300
              notion-table-of-contents-item-indent-level-${tocItem.indentLevel} catalog-item `}
            >
              <span
                style={{
                  display: "inline-block",
                  marginLeft: tocItem.indentLevel * 16,
                }}
                className={`truncate ${
                  activeSection === id
                    ? "font-bold text-gray-500 underline"
                    : ""
                }`}
              >
                {tocItem.text}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  ) : (
    <></>
  );
};

export default Catalog;
