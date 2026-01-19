"use client";
import { useMemo } from "react";
import { useGeneralSiteSettings } from "@/lib/context/GeneralSiteSettingsProvider";
import { ARCHIVE_CONFIG } from "@/lib/utils/archive-config";
import NoRecordFound from "@/modules/blog/records/NoRecordFound";
import NavPostItem from "@/modules/layout/components/NavPostItem";
import NavPostListEmpty from "@/modules/layout/components/NavPostListEmpty";
import { usePathname } from "next/navigation";

/**
 * Blog list scrolling paging
 * @param records All articles
 * @param tags All tags
 * @returns {JSX.Element}
 * @constructor
 */
const NavPostList = (props) => {
  const { searchKeyword, filteredNavPages } = useGeneralSiteSettings();
  const pathname = usePathname();

  // Memoize expensive grouping calculation
  const groupedArray = useMemo(() => {
    if (!filteredNavPages || filteredNavPages.length === 0) {
      return null;
    }

    const groups = filteredNavPages.reduce((acc: any, item: any) => {
      const categoryName = item?.category ? item?.category : "";

      let existingGroup: any = null;
      if (JSON.parse(ARCHIVE_CONFIG.AUTO_SORT.toString())) {
        existingGroup = acc.find(
          (group: any) => group.category === categoryName
        );
      } else {
        existingGroup = acc[acc.length - 1];
      }

      if (existingGroup && existingGroup.category === categoryName) {
        existingGroup.items.push(item);
      } else {
        acc.push({ category: categoryName, items: [item] });
      }
      return acc;
    }, []);

    // Handle selection
    let selectedSth = false;
    groups.forEach((group) => {
      let groupSelected = false;
      for (const record of group?.items) {
        if (pathname.split("?")[0] === "/" + record.slug) {
          groupSelected = true;
          selectedSth = true;
        }
      }
      group.selected = groupSelected;
    });

    // If none selected, open first by default
    if (!selectedSth && groups.length > 0) {
      groups[0].selected = true;
    }

    return groups;
  }, [filteredNavPages, pathname]);

  if (filteredNavPages !== undefined && filteredNavPages.length < 0) {
    return <NoRecordFound />;
  }

  if (!groupedArray || groupedArray.length === 0) {
    return <NavPostListEmpty searchKeyword={searchKeyword} />;
  }

  return (
    <div id="records-wrapper" className="flex-grow w-full h-full ">
      {groupedArray.map((group, index) => (
        <NavPostItem
          key={index}
          group={group}
          onHeightChange={props.onHeightChange}
        />
      ))}
    </div>
  );
};

export default NavPostList;
