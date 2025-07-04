"use client";
import { BLOG } from "@/blog.config";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
// 사전에 사용할 아이콘 추가
library.add(faBullhorn);

import {
  Github,
  InstagramIcon,
  LinkedinIcon,
  MailPlusIcon,
  TwitterIcon,
} from "lucide-react";
//fas fa-envelope
//fab fa-linkedin
/**
 * Social contact button set
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return (
    <div className="space-x-3 text-xl text-neutral-600 dark:text-neutral-400 flex-wrap flex justify-center ">
      {(BLOG.CONTACT_TWITTER as string).length > 0 && (
        <a
          target="_blank"
          rel="noreferrer"
          title={"twitter"}
          href={BLOG.CONTACT_TWITTER}
        >
          <TwitterIcon className="transform hover:scale-125 duration-150 hover:text-neutral-400" />
        </a>
      )}
      {(BLOG.CONTACT_LINKEDIN as string).length > 0 && (
        <a
          target="_blank"
          rel="noreferrer"
          href={BLOG.CONTACT_LINKEDIN}
          title={"linkedIn"}
        >
          <LinkedinIcon className="transform hover:scale-125 duration-150 hover:text-neutral-400" />
        </a>
      )}
      {(BLOG.CONTACT_INSTAGRAM as string).length > 0 && (
        <a
          target="_blank"
          rel="noreferrer"
          title={"instagram"}
          href={BLOG.CONTACT_INSTAGRAM}
        >
          <InstagramIcon className="transform hover:scale-125 duration-150 hover:text-neutral-400" />
        </a>
      )}
      {(BLOG.CONTACT_EMAIL as string).length > 0 && (
        <a
          target="_blank"
          rel="noreferrer"
          title={"email"}
          href={`mailto:${BLOG.CONTACT_EMAIL}`}
        >
          <MailPlusIcon className="transform hover:scale-125 duration-150 hover:text-neutral-400" />
        </a>
      )}
      {(BLOG.CONTACT_GITHUB as string).length > 0 && (
        <a
          target="_blank"
          rel="noreferrer"
          title={"github"}
          href={BLOG.CONTACT_GITHUB}
        >
          <Github className="transform hover:scale-125 duration-150 hover:text-neutral-400" />
        </a>
      )}
    </div>
  );
};
export default SocialButton;
