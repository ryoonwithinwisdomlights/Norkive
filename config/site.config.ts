export const SITE_CONFIG = {
    TITLE: process.env.NEXT_PUBLIC_TITLE || "Ryoon.Gitbook.Log", // 사이트 메타 타이틀입니다. 이 부분을 바꿔주세요.
    DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION ||
    "Ryoon.Gitbook.Log - A Static WebBlog for your every Recorded Archive in Notion with Next.js 15",//메타 설명입니다. 이 부분을 바꿔주세요.
    LINK: process.env.NEXT_PUBLIC_LINK || "https://ryoongitbooklog.vercel.app/", // 사이트 링크를 교체해주세요.
  AVATAR: "/images/rwwl.png", //프로필 이미지를 바꿔주세요. 기본 이미지는 /images/rwwl.png 입니다.
  HOME_BANNER_IMAGE:
  process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || "/images/rwwl_background.png", //홈 배너 이미지를 바꿔주세요. 기본 이미지는 /images/rwwl_background.png 입니다.

};
