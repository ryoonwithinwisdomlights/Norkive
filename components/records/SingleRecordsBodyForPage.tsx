import { MENU_MOBILE } from "@/lib/constants/menu-mobile.constansts";
import Comment from "@/components/shared/Comment";
import NotionPage from "@/components/shared/NotionPage";
import ShareBar from "@/components/shared/ShareBar";
import ArticleAround from "../ArticleAround";
import CategoryItem from "../CategoryItem";
import TagItemMini from "../TagItemMini";

const SingleRecordsBodyForPage = ({ post, prev, next }) => {
  return (
    <section className="px-1 dark:text-neutral-200">
      <div id="article-wrapper">
        <NotionPage post={post} />
      </div>
      {/* share */}
      <ShareBar post={post} />
      {/* Article classification and tag information */}
      <div className="mt-6 flex justify-between">
        {MENU_MOBILE.RECORD_DETAIL_CATEGORY && post?.category && (
          <CategoryItem category={post.category} />
        )}
        <div>
          {MENU_MOBILE.RECORD_DETAIL_TAG &&
            post?.tagItems?.map((tag) => (
              <TagItemMini key={tag.name} tag={tag} />
            ))}
        </div>
      </div>

      {post?.type !== "CONFIG" &&
        post?.type !== "Menu" &&
        post?.type !== "SubMenu" &&
        post?.type !== "SubMenuPage" &&
        post?.type !== "Notice" &&
        post?.type !== "Page" &&
        post?.status === "Published" &&
        post.type === "Devproject" && <ArticleAround prev={prev} next={next} />}
      {/* <AdSlot /> */}

      <Comment frontMatter={post} />
    </section>
  );
};

export default SingleRecordsBodyForPage;
