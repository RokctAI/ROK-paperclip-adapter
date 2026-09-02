// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Honour the `_`-prefix convention for parameters that are intentionally
      // unused because an exported function must match an external contract
      // (e.g. `syncRokSkills`, which implements adapter-utils' `syncSkills`).
      // Severity stays "error"; only the naming convention is recognised.
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
);
