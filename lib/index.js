const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    project: path.resolve(process.cwd(), './tsconfig.json'),
    tsconfigRootDir: process.cwd(),
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    "react-hooks"
  ],
  rules: {
    "no-trailing-spaces": "off",
    "padded-blocks": "off",
    "linebreak-style": "off",
    "quote-props": "off",
    "quotes": "off",
    "keyword-spacing": "off",
    "capitalized-comments": "off",
    "space-infix-ops": "off",
    "no-multiple-empty-lines": "off",
    "object-curly-spacing": "off",
    "no-warning-comments": "off",
    "spaced-comment": "off",
    "no-negated-condition": "off",
    "no-alert": "off",
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true
      }
    ],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true,
        "allowHigherOrderFunctions": true

      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings:  {
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
