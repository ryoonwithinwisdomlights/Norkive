"use client";

import { useGlobal } from "@/lib/providers/globalProvider";
import { MoveLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// 사전에 사용할 아이콘 추가

/**
 * Jump to top of page
 * This control will appear when the screen slides down 500 pixels
 * @param targetRef Target html tag with associated height
 * @param showPercent Whether to display percentage
 * @returns {JSX.Element}
 * @constructor
 */
const JumpToBackButton = () => {
  const router = useRouter();
  const { locale } = useGlobal({ from: "index" });
  const handleBack = () => {
    router.back();
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // none of the modals are gonna be rendered unless we are fully on the client side.
  if (!isMounted) return null;
  return (
    <div
      id="jump-to-back"
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="fixed xl:right-80 right-2 mr-20 bottom-40 z-20 "
    >
      <div
        onClick={handleBack}
        className="flex flex-row item-center justify-center text-center hover:scale-110 
        duration-150 cursor-pointer p-2 rounded-full border text-white font-bold  bg-neutral-600 dark:border-white"
      >
        <MoveLeftIcon className="w-4 " />
        <span className="text-sm "> &nbsp; {locale.RECORD.BACK} &nbsp;</span>
      </div>
    </div>
  );
};

export default JumpToBackButton;
