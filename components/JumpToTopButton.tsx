"use client";

import { ChevronUpIcon } from "lucide-react";

/**
 * Jump to top of page
 * This control will appear when the screen slides down 500 pixels
 * @param targetRef Target html tag with associated height
 * @param showPercent Whether to display percentage
 * @returns {JSX.Element}
 * @constructor
 */
const JumpToTopButton = () => {
  return (
    <div
      id="jump-to-top"
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="fixed xl:right-80 right-2 mr-10 bottom-28 z-20 "
    >
      <ChevronUpIcon
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="hover:scale-110 duration-150 cursor-pointer p-1 w-8 h-8 text-sm rounded-full border text-white  bg-neutral-700 dark:border-white"
      />
    </div>
  );
};

export default JumpToTopButton;
