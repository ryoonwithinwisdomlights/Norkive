"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { uuidToId } from "notion-utils";
import throttle from "lodash.throttle";

const TableOfContents = ({ page }) => {
  const [activeSection, setActiveSection] = useState(null);

  // Memoize toc and tocIds to avoid recalculation on every render
  const toc = useMemo(() => page?.tableOfContents || [], [page?.tableOfContents]);
  const tocIds = useMemo(() => toc.map((t) => uuidToId(t.id)), [toc]);

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
        if (bbox.top - offset < 0) {
          currentSectionId = section.getAttribute("data-id");
          prevBBox = bbox;
          continue;
        }
        break;
      }
      setActiveSection(currentSectionId);
      const index = tocIds.indexOf(currentSectionId) || 0;
      if (tocIds.length > 0) {
        for (const tocWrapper of document?.getElementsByClassName(
          "toc-wrapper-pc"
        )) {
          tocWrapper?.scrollTo({ top: 10 * index, behavior: "smooth" });
        }
      }
    }, throttleMs),
    [tocIds]
  );

  useEffect(() => {
    window.addEventListener("scroll", actionSectionScrollSpy);
    actionSectionScrollSpy();
    return () => {
      window.removeEventListener("scroll", actionSectionScrollSpy);
    };
  }, [actionSectionScrollSpy]);

  if (!page || toc.length === 0) {
    return null;
  }

  return (
    <div
      id="toc-wrapper-pc"
      className="toc-wrapper-pc overflow-y-auto overscroll-none scroll-hidden "
    >
      <nav className="h-full">
        {toc.map((tocItem) => {
          const id = uuidToId(tocItem.id);
          return (
            <a
              key={id}
              href={`#${id}`}
              data-target-id={id}
              // onClick={() => scrollTo(id)}
              className={`${
                activeSection === id &&
                "pl-4 border-l border-neutral-400 text-neutral-500  font-bold"
              }  hover:text-neutral-500  duration-300 notion-table-of-contents-item  transform  dark:text-neutral-300
              notion-table-of-contents-item-indent-level-${tocItem.indentLevel} catalog-item `}
            >
              <span
                style={{
                  display: "inline-block",
                  marginLeft: tocItem.indentLevel * 16,
                  paddingLeft: 10,
                }}
                className={`truncate ${
                  activeSection === id
                    ? " text-neutral-800 dark:text-white underline"
                    : "text-neutral-500 dark:text-neutral-200"
                }`}
              >
                {tocItem.text}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default TableOfContents;
