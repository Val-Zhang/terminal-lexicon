module.exports = {
  env: {
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    indent: [2, 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "no-console": "off"
  }
};
