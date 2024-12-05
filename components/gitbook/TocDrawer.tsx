import { useGitBookGlobal } from "@/lib/providers/themeGitbookProvider";
import Catalog from "./Catalog";

/**
 * Floating drawer catalog
 * @param toc
 * @param post
 * @returns {JSX.Element}
 * @constructor
 */
const TocDrawer = ({ post }) => {
  const { tocVisible, changeTocVisible } = useGitBookGlobal();
  const switchVisible = () => {
    changeTocVisible();
  };
  return (
    <>
      <div
        id="gitbook-toc-float"
        className="fixed top-0 right-0 z-40 md:hidden"
      >
        {/* side menu */}
        <div
          className={
            (tocVisible
              ? "animate__slideInRight "
              : " -mr-72 animate__slideOutRight") +
            " overflow-y-hidden shadow-card w-60 duration-200 fixed right-1 bottom-16 rounded py-2 bg-white dark:bg-neutral-700"
          }
        >
          {post && (
            <>
              <div className="dark:text-neutral-400 text-neutral-600 h-96 p-3">
                <Catalog post={post} />
              </div>
            </>
          )}
        </div>
      </div>
      {/* background mask */}
      <div
        id="right-drawer-background"
        className={
          (tocVisible ? "block" : "hidden") +
          " fixed top-0 left-0 z-30 w-full h-full"
        }
        onClick={switchVisible}
      />
    </>
  );
};
export default TocDrawer;
