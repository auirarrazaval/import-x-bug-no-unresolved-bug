import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

import tseslint from 'typescript-eslint';

/**
 * Base TypeScript ESLint configuration for all projects.
 * This configuration includes:
 * - Recommended rules for TypeScript and JavaScript
 * - Custom stylistic rules
 * - Excludes files in `dist` and `node_modules`
 * - Global browser environment
 */
export default tseslint.config(
  { ignores: [
    '**/dist/**',
    '**/node_modules/**',
    // build things
    '**/vite.config.mts.timestamp*',
  ] },
  {
    files: ['**/**.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Adds the parser and parserOptions
  tseslint.configs.base,
  // Enables the recommended rules for both JavaScript and TypeScript from stylistic
  stylistic.configs.customize({
    indent: 2,
    semi: true,
    arrowParens: true,
  }),
);
