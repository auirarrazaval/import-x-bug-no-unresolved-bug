import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { importX } from 'eslint-plugin-import-x';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: ['tsconfig.json'],
          alwaysTryTypes: true,
        }),
      ],
    },
  },
  {
    rules: {
      'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import-x/prefer-default-export': 'off',
      'import-x/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
      'import-x/newline-after-import': ['error', { count: 1 }],
      'import-x/order': [
        'warn',
        {
          'groups': [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
            ['object', 'type'],
          ],
          'pathGroups': [
            {
              pattern: 'vue',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'vite',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/assets/**',
              group: 'object',
              position: 'before',
            },
          ],
          'pathGroupsExcludedImportTypes': ['vue', 'vite'],
          'newlines-between': 'always',
          'distinctGroup': false,
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true, rootDir: 'lib', prefix: '@' },
      ],
    },
  },
);
