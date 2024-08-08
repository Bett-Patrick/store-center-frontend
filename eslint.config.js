import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default {
  // Add or update the settings for eslint-plugin-react
  settings: {
    react: {
      version: 'detect', // This will automatically detect the version of React
    },
  },
  globals: globals.browser, // Configure global variables
  extends: [
    "eslint:recommended", // Extend ESLint's recommended rules
    "plugin:react/recommended", // Extend ESLint's recommended React rules
    "plugin:@eslint/js/recommended", // Extend ESLint's recommended JavaScript rules
  ],
  plugins: ["react"], // Specify ESLint plugins
  parserOptions: {
    ecmaVersion: 2021, // Specify ECMAScript version
    sourceType: "module", // Specify module type
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
};
