module.exports = {
  // other configurations
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
  ignores: ["node_modules/**", "dist/**", "*next"],
};
