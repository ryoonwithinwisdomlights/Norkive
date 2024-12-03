import { BLOG } from "@/blog.config";
// import * from "@types/gtag.js"
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  // if (typeof window !== "undefined") {
  //   window.gtag("config", BLOG.ANALYTICS_GOOGLE_ID, {
  //     page_path: url,
  //   });
  // }
  // if (typeof window !== "undefined") {
  window.gtag("config", BLOG.ANALYTICS_GOOGLE_ID, {
    page_path: url,
  });
  // }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, event_category, event_label, value }) => {
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
};