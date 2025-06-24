import nextPlugin from "eslint-plugin-next";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...nextPlugin.configs["core-web-vitals"],
  },
];
