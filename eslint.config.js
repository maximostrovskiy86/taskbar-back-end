import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  {
    env: {
      browser: true,
      es2021: true
    },
    extends: ["plugin:react/recommended", "airbnb", "prettier"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2021,
      sourceType: "module"
    },
    plugins: ["react"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"]
    }
  }
]);
