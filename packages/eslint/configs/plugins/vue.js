import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import tseslint from 'typescript-eslint';

import vueI18n from '@intlify/eslint-plugin-vue-i18n';

/**
 * Vue.js ESLint configuration for Vue files.
 * This configuration includes:
 * - Recommended rules for Vue.js
 * - Accessibility rules for Vue components
 * - Custom rules for component names and form controls
 * - Uses TypeScript parser for Vue files
 * - Applies to all `.vue` files
 */
export default (localeDir = 'src/locales/*.json', localeKey = 'file') => tseslint.config(
  pluginVue.configs['flat/recommended'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  ...pluginVueA11y.configs['flat/recommended'],
  ...vueI18n.configs['flat/recommended'],
  {
    settings: {
      'vue-i18n': {
        localeDir: {
          pattern: localeDir,
          localeKey: localeKey,
        },
        messageSyntaxVersion: '^11.0.0',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vuejs-accessibility/media-has-caption': 'warn',
      'vuejs-accessibility/form-control-has-label': [
        'error',
        {
          controlComponents: ['TInput', 'TTextArea', 'TSelect', 'TCheckbox', 'TRadio', 'TButton'],
        },
      ],
      'vuejs-accessibility/label-has-for': [
        'error',
        {
          controlComponents: ['TSwitch'],
        },
      ],
    },
  },
);
