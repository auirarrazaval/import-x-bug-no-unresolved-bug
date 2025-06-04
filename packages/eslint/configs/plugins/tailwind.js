import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';

/**
 * Tailwind CSS ESLint configuration.
 * This configuration includes:
 * - Recommended rules for Tailwind CSS
 * - Custom settings for Tailwind CSS callees and ignored keys
 * - Applies to all files
 */
const plugin = (twConfig = './tailwind.config.js') => tseslint.config(
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
        ignoredKeys: ['defaultVariants', 'compoundVariants'],
      },
    },
    rules: {
      'tailwindcss/no-custom-classname': ['warn', {
        whitelist: ['material\\-symbols\\-rounded'],
        config: twConfig,
      }],
    },
  },
);

export default plugin;
