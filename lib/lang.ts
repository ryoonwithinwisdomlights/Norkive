import { ENG_LANG } from "./constants/en-lang.constants";
import { KOR_LANG } from "./constants/kr-lang.constants";
import { getQueryVariable, isBrowser, mergeDeep } from "./utils/utils";

/**
 * Configure all supported languages here
 * country / region
 */
const langList = {
  "en-US": ENG_LANG,
  "kr-KR": KOR_LANG,
};

export default langList;

// 키가 "currentLang"이 아닌 요소들을 필터링
export const getFilteredLangList = (currentLang) => {
  return Object.keys(langList)
    .filter((key) => key !== currentLang)
    .reduce((obj, key) => {
      obj[key] = langList[key];
      return obj;
    }, {});
};

// 키가 "currentLang"이 아닌 키값 반환
export const getFilteredLangListKey = (currentLang) => {
  return Object.keys(langList)
    .filter((key) => key !== currentLang)
    .join();
};

/**
 * 현재 언어 사전 가져오기
 * "국가-지역" 언어가 모두 일치하면 해당 국가의 언어가 표시됩니다.
 * @returns 다양한 언어에 대응하는 사전
 */
export function generateLocaleDict(langString) {
  const supportedLocales = Object.keys(langList);
  let userLocale;

  // 언어 문자열을 언어 및 지역 코드로 분할합니다(예: "kr-KR"을 "kr" 및 "KR"으로 분할).
  const [language, region] = langString.split(/[-_]/);

  // 언어와 지역이 모두 일치하는 상황을 우선적으로 고려합니다.
  const specificLocale = `${language}-${region}`;
  if (supportedLocales.includes(specificLocale)) {
    userLocale = langList[specificLocale];
  }

  // 그런 다음 언어만 일치하는 경우를 일치시켜 보세요.
  if (!userLocale) {
    const languageOnlyLocales: any[] = supportedLocales.filter((locale) =>
      locale.startsWith(language)
    );
    if (languageOnlyLocales.length > 0) {
      userLocale = langList[languageOnlyLocales[0]];
    }
  }

  // 일치하는 항목이 없으면 가장 가까운 언어 팩을 반환합니다.
  if (!userLocale) {
    const fallbackLocale: any = supportedLocales.find((locale) =>
      locale.startsWith("en")
    );
    userLocale = langList[fallbackLocale];
  }

  return mergeDeep({}, langList["en-US"], userLocale);
}

/**
 * 사이트 번역 초기화
 * 사용자의 현재 브라우저 언어에 따라 전환
 */
export function initLocale(lang, locale, changeLang, changeLocale) {
  if (isBrowser) {
    const queryLang =
      getQueryVariable("lang") ||
      loadLangFromLocalStorage() ||
      window.navigator.language;
    let currentLang = lang;
    if (queryLang !== lang) {
      currentLang = queryLang;
    }
    changeLang(currentLang);
    saveLangToLocalStorage(currentLang);

    const targetLocale = generateLocaleDict(currentLang);
    if (JSON.stringify(locale) !== JSON.stringify(currentLang)) {
      changeLocale(targetLocale);
    }
  }
}
/**
 * 언어 read
 * @returns {*}
 */
// export const loadLangFromCookies = () => {
//   return cookie.load("lang");
// };
export const loadLangFromLocalStorage = () => {
  return localStorage.getItem("lang");
};
/**
 * 언어 저장
 * @param newTheme
 */
// export const saveLangToCookies = (lang) => {
//   cookie.save("lang", lang, { path: "/" });
// };
export const saveLangToLocalStorage = (lang) => {
  localStorage.setItem("lang", lang);
};
