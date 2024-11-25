"use client";
/* eslint-disable multiline-ternary */
import LogoBar from "../LogoBar";
import { useRef, useState } from "react";
import Collapse from "@/components/Collapse";
import { MenuBarMobile } from "../MenuBarMobile";
import { useGlobal } from "@/lib/global";
import CONFIG from "../../config";
import { BLOG } from "@/blog.config";
import { MenuItemDrop } from "../MenuItemDrop";
import DarkModeButton from "@/components/DarkModeButton";

/**
 * Top navigation bar + menu
 * @param {} param0
 * @returns
 */
export default function TopNavBar(props) {
  const { className, customNav, customMenu } = props;
  const [isOpen, changeShow] = useState(false);
  const collapseRef = useRef(null);

  const { locale } = useGlobal();

  const defaultLinks = [
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      name: locale.COMMON.CATEGORY,
      to: "/category",
      show: CONFIG.MENU_CATEGORY,
    },
    {
      icon: "fas fa-tag",
      name: locale.COMMON.TAGS,
      to: "/tag",
      show: CONFIG.MENU_TAG,
    },
    {
      icon: "fa-solid fa-folder-closed",
      name: locale.NAV.ARCHIVE,
      to: "/archive",
      show: CONFIG.MENU_ARCHIVE,
    },

    {
      icon: "fa-solid fa-book",
      name: locale.NAV.WRITING,
      to: "/writing-records",
      show: CONFIG.MENU_WRITING,
    },
    {
      icon: "fa-solid fa-folder-closed",
      name: locale.NAV.GENERAL,
      to: "/general-records",
      show: CONFIG.MENU_GENERAL,
    },
    {
      icon: "fa-solid fa-folder-closed",
      name: locale.NAV.ENGINEERING,
      to: "/engineering-records",
      show: CONFIG.MENU_ENGINEERING,
    },
    {
      icon: "fa-solid fa-hand-sparkles",
      name: locale.NAV.SIDEPROJECT,
      to: "/sideproject",
      show: CONFIG.MENU_SIDEPROJECT,
    },
    // {
    //   icon: 'fas fa-search',
    //   name: locale.NAV.SEARCH,
    //   to: '/search',
    //   show: CONFIG.MENU_SEARCH
    // },
  ];

  let links = defaultLinks.concat(customNav);

  const toggleMenuOpen = () => {
    changeShow(!isOpen);
  };

  // If the custom menu is turned on, the menu generated by Page will be overwritten.
  if (BLOG.CUSTOM_MENU) {
    links = customMenu;
  }

  return (
    <div id="top-nav" className={"fixed top-0 w-full z-40 " + className}>
      {/* Mobile collapsible menu */}
      <Collapse
        type="vertical"
        collapseRef={collapseRef}
        isOpen={isOpen}
        className="md:hidden"
      >
        <div className="bg-white dark:bg-neutral-700 pt-1 py-2 lg:hidden ">
          <MenuBarMobile
            {...props}
            onHeightChange={(param) =>
              collapseRef.current?.updateCollapseHeight(param)
            }
          />
        </div>
      </Collapse>

      {/* Navigation bar menu */}
      <div className="flex w-full h-14 shadow glassmorphism bg-white dark:bg-neutral-700 px-7 items-between">
        {/* Icon Logo on the left */}
        <LogoBar {...props} />

        {/* Collapse button, mobile only display */}
        <div className="mr-1 flex md:hidden justify-end items-center space-x-4 font-serif dark:text-neutral-200">
          <DarkModeButton className="flex text-md items-center h-full" />
          <div
            onClick={toggleMenuOpen}
            className="cursor-pointer text-lg hover:scale-110 duration-150"
          >
            {isOpen ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fa-solid fa-ellipsis-vertical" />
            )}
          </div>
        </div>

        {/* Desktop top menu */}
        <div className="hidden md:flex py-2">
          {links &&
            links?.map((link, index) => (
              <MenuItemDrop key={index} link={link} />
            ))}
          <DarkModeButton className="text-sm flex items-center h-full" />
        </div>
      </div>
    </div>
  );
}