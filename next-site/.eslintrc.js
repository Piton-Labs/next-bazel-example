module.exports = {
  extends: [
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": [
      "error",
      "./services/portal/src/pages",
    ],
  },
};
