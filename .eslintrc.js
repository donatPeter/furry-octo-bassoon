module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    browser: true,
    es2020: true,
  },
  globals: {
    module: true,
  },
};
