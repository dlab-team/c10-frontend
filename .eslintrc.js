const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:react/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
  },
};
