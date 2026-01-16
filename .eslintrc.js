module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    // Legacy/vendor-style JS in app router. Keep out of CI lint gate for now.
    "app/api/index.js",
  ],
  extends: [
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "standard",
    "prettier",
    "plugin:@typescript-eslint/recommended", // Add TypeScript recommended rules
  ],
  parser: "@typescript-eslint/parser", //  Using the TypeScript parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "prettier",
    "@typescript-eslint", // Add TypeScript plugin
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    semi: 0,
    "react/no-unknown-property": "off", // <style jsx>
    "react/prop-types": "off",
    "space-before-function-paren": 0,
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Keep hygiene, but don't block CI
    "@typescript-eslint/explicit-function-return-type": "off", // Turn off mandatory function return type declaration,
    // OSS-friendly: avoid forcing strict type-safety refactors on legacy code.
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/no-unsafe-function-type": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    camelcase: "off",
    "spaced-comment": "off",
    "dot-notation": "off",
    "no-useless-escape": "off",
    "lines-between-class-members": "off",
    "no-unneeded-ternary": "off",
    "no-void": "off",
    "no-self-assign": "off",
    "array-callback-return": "off",
    "no-constant-condition": "off",
    eqeqeq: "off",
    "prefer-const": "off",
    "no-useless-rename": "off",
    "no-irregular-whitespace": "off",
    "import/no-anonymous-default-export": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "off",
  },
  globals: {
    React: true,
  },
};
