import tseslint from 'typescript-eslint';
import baseTsConfig from './base.js';
import importXPlugin from './plugins/importX.js';

/**
 * Vanilla TypeScript ESLint configuration.
 * This configuration includes:
 * - Base TypeScript ESLint rules
 * - ImportX plugin for enhanced import/export linting
 */
export default tseslint.config(
  baseTsConfig,
  importXPlugin,
);
