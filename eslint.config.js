import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


const reactConfig = {
  name: 'react-eslint',
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  plugins: {
    react: pluginReact,
  },
  languageOptions: {
    ...pluginReact.configs.recommended.languageOptions,
    globals: {
      ...globals.es2022,
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    ...pluginReact.configs.recommended.rules,
    'react/react-in-jsx-scope': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactConfig
];
