import tseslint from 'typescript-eslint';
import tsConfig from './vanillaTs.js';
import vuePlugin from './plugins/vue.js';
import tailwindPlugin from './plugins/tailwind.js';

/**
 * Vue ESLint configuration.
 * This configuration includes:
 * - TypeScript support
 * - Vue plugin for linting Vue files
 * - Tailwind CSS plugin for utility-first CSS
 */
export default (
  vueI18nLocaleDir = 'src/locales/*.json',
  vueI18nLocaleKey = 'file',
  tailwindConfig = './tailwind.config.ts',
) => tseslint.config(
  tsConfig,
  vuePlugin(vueI18nLocaleDir, vueI18nLocaleKey),
  tailwindPlugin(tailwindConfig),
);
