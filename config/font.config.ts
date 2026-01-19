export const FONT_CONFIG = {
  // ============ 폰트 스타일 ============
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || "font-sans font-light", // Tailwind 폰트 클래스 (font-sans/font-serif + font-weight)
  
  // ============ 외부 폰트 URL (Google Fonts 등) ============
  FONT_URL: [
    "https://fonts.googleapis.com/css?family=Bitter&display=swap", // 세리프 폰트 (영문)
    "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap", // 산세리프 폰트 (중국어/한국어)
    "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap", // 세리프 폰트 (중국어/한국어)
  ],
  
  // ============ Sans-serif 폰트 스택 (본문용) ============
  FONT_SANS: [
    '"PingFang SC"', // macOS 중국어
    "-apple-system", // macOS 시스템
    "BlinkMacSystemFont", // macOS Chrome
    '"Hiragino Sans GB"', // macOS 일본어
    '"Microsoft YaHei"', // Windows 중국어
    '"Segoe UI Emoji"', // Windows 이모지
    '"Segoe UI Symbol"', // Windows 심볼
    '"Segoe UI"', // Windows 시스템
    '"Noto Sans SC"', // Google 산세리프
    "HarmonyOS_Regular", // HarmonyOS
    '"Helvetica Neue"',
    "Helvetica",
    '"Source Han Sans SC"', // Adobe 본고딕
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"', // macOS 이모지
  ],

  // ============ Serif 폰트 스택 (제목/강조용) ============
  FONT_SERIF: [
    "Bitter", // Google 세리프 (영문)
    '"Noto Serif SC"', // Google 세리프 (중국어)
    "SimSun", // Windows 명조
    '"Times New Roman"',
    "Times",
    "serif",
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"',
  ],
};
