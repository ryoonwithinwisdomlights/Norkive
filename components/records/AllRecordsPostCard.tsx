"use client";
import { AllRecordsPostCardProps } from "@/lib/models";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const AllRecordsPostCard = ({ post, className }: AllRecordsPostCardProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const currentSelected = pathname.split("/")[2] === post.id;
  // console.log("currentSelected 1", pathname.split("/")[2]);
  // console.log("currentSelected 2", post.id);
  return (
    <div
      key={post.id}
      className={`${className} py-1 cursor-pointer px-2 hover:bg-neutral-100 hover:dark:text-white rounded-md dark:hover:bg-neutral-500  ${
        currentSelected ? " text-neutral-500" : ""
      }`}
    >
      <div className="flex flex-col w-full select-none">
        <Link href={`/records/${post.id}`} passHref>
          <span className="text-xs pr-1">{post.pageIcon} </span>{" "}
          {post.title.length > 25
            ? post.title.substr(0, 25) + "..."
            : post.title}
        </Link>
      </div>
    </div>
  );
};

export default AllRecordsPostCard;
