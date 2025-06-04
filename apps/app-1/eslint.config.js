import vueConfig from '@repo/eslint/vue';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...vueConfig('src/locales/*.json', 'file', './tailwind.config.ts'),
]);
