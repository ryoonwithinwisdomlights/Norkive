"use client";

import { useGeneralSiteSettings } from "@/lib/context/GeneralSiteSettingsProvider";
import Fuse from "fuse.js";
import debounce from "lodash.debounce";
import { Search, XIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import SearchResultSkeleton from "../ui/search-result-skeleton";
import Link from "next/link";

export default function HeaderSearch() {
  const { locale, allPagesForLeftNavBar } = useGeneralSiteSettings();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ title: string; url: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const groupedArray = allPagesForLeftNavBar?.map((item: any) => {
    return {
      id: item.id,
      category: item.category,
      title: item.title,
      url: item.slug,
    };
  });

  const fuse = useMemo(
    () =>
      new Fuse(groupedArray, {
        keys: ["title"],
        threshold: 0.3,
      }),
    []
  );

  const handleSearch = useMemo(
    () =>
      debounce((text: string) => {
        //사용자가 입력할 때마다 계속 검색 호출 안 되게 딜레이 걸어주는 함수
        //한 글자 입력할 때마다 실시간 검색하면 너무 많은 연산 낭비 → 0.3초 입력 멈추면 그때 검색
        if (text.trim().length === 0) {
          setResults([]);
          setLoading(false);
          return;
        }
        // setLoading(true);
        const searchResults = fuse.search(text).map((res) => res.item);
        setResults(searchResults);
        setLoading(false);
      }, 300),
    [fuse]
  );

  const cleanSearch = () => {
    setQuery("");
    setResults([]);
    setLoading(false);
  };

  useEffect(() => {
    if (query.trim().length === 0) {
      setLoading(false); // 명확하게 초기화
      return;
    }

    setLoading(true);
    handleSearch(query);
    return () => {
      handleSearch.cancel();
    };
  }, [query, handleSearch]);

  return (
    <div className="relative hidden md:flex  flex-col items-start justify-center w-full max-w-sm text-sm mr-4">
      {/* Search Input */}
      <div className="relative flex items-center w-full">
        <span className="absolute left-3 ">
          <Search
            size={16}
            className="text-neutral-400 dark:text-neutral-400"
          />
        </span>
        <input
          type="text"
          placeholder={locale.COMMON.ENTER_SEARCH_TERM}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full
            pl-9 pr-3 py-2
            rounded-md
            bg-neutral-100
            placeholder-neutral-500
            focus:outline-none
            focus:ring-2 focus:ring-neutral-400
            transition
           dark:text-white/50
            text-neutral-700 
           hover:ring-2 hover:ring-neutral-400
            dark:bg-neutral-700/50 
            dark:placeholder-neutral-500
            dark:focus:ring-neutral-600
            dark:hover:bg-neutral-600/50
          "
        />
        {results.length > 0 || query.trim().length > 0 ? (
          <button
            onClick={() => {
              cleanSearch();
            }}
            className="pointer-events-auto  inset-y-0 absolute right-3 text-neutral-500 dark:text-neutral-400"
          >
            <XIcon className="h-4 w-4 text-neutral-600" />
          </button>
        ) : (
          <kbd className="ml-auto absolute right-3 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        )}
      </div>

      {/* Results */}
      <div className=" absolute top-12 mt-2 w-full bg-white dark:bg-neutral-900 rounded-md shadow-lg">
        {loading ? (
          <SearchResultSkeleton />
        ) : results.length > 0 ? (
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-700 overflow-y-auto max-h-56">
            {results.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.url}
                  className="block px-3 py-2 rounded-md  hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                >
                  {item.title.length > 30
                    ? item.title.substring(0, 30) + "..."
                    : item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : query.trim().length > 0 ? (
          <div className="p-3 text-neutral-500 dark:text-neutral-400 ">
            No results found.
          </div>
        ) : null}
      </div>
    </div>
  );
}
