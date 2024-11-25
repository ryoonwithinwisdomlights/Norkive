import { useGlobal } from "@/lib/providers/globalProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Simple page turning plug-in
 * @param page Current page number
 * @param totalPage Is there a next page?
 * @returns {JSX.Element}
 * @constructor
 */
const PaginationSimple = ({ page, totalPage }) => {
  const { locale } = useGlobal();

  const pathname = usePathname();
  const currentPage = +page;
  const showNext = currentPage < totalPage;
  const pagePrefix = pathname
    .replace(/\/page\/[1-9]\d*/, "")
    .replace(/\/$/, "");

  return (
    <div className="my-10 flex justify-between font-medium text-black dark:text-neutral-100 space-x-2">
      <Link
        href={{
          pathname:
            currentPage === 2
              ? `${pagePrefix}/`
              : `${pagePrefix}/page/${currentPage - 1}`,
          // query: router.query.s ? { s: router.query.s } : {},
        }}
        passHref
        rel="prev"
        className={`${
          currentPage === 1 ? "invisible" : "block"
        } text-center w-full duration-200 px-4 py-2 hover:border-orange-300 border-b-2 hover:font-bold`}
      >
        ←{locale.PAGINATION.PREV}
      </Link>
      <Link
        href={{
          pathname: `${pagePrefix}/page/${currentPage + 1}`,
          // query: router.query.s ? { s: router.query.s } : {},
        }}
        passHref
        rel="next"
        className={`${
          +showNext ? "block" : "invisible"
        } text-center w-full duration-200 px-4 py-2 hover:border-orange-300 border-b-2 hover:font-bold`}
      >
        {locale.PAGINATION.NEXT}→
      </Link>
    </div>
  );
};

export default PaginationSimple;