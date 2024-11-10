import globals from "globals";
import javascript from "@eslint/js";
import typescript from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  javascript.configs.recommended,
  ...typescript.configs.recommended,
  ...astro.configs["flat/recommended"],
  { ignores: ["dist", "src/env.d.ts"] },
  prettier,
];
