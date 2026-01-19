import Link from "next/link";
import { TagIcon } from "lucide-react";
import React, { memo } from "react";
import { TagItem } from "@/types/record.model";

interface TagItemMiniProps {
  tag: TagItem;
  selected?: boolean;
}

const TagItemMini = memo(function TagItemMini({ tag, selected = false }: TagItemMiniProps) {
  const tagName = tag.name ?? "";
  
  return (
    <Link
      key={tagName}
      href={selected ? "/" : `/tag/${encodeURIComponent(tagName)}`}
      passHref
      className={`cursor-pointer inline-block rounded hover:bg-neutral-500 hover:text-white duration-200
        mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white
         ${
           selected
             ? "text-white  bg-black  "
             : `text-neutral-600 hover:shadow-xl notion-${tag.color}_background `
         }`}
    >
      <div className="font-light ">
        {selected && <TagIcon className="mr-1" />}
        {tagName + (tag.count ? `(${tag.count})` : "")}{" "}
      </div>
    </Link>
  );
});

export default TagItemMini;
