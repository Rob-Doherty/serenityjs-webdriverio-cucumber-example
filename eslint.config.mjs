import tseslint from 'typescript-eslint';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/.idea/**',
      '**/lib/**',
      '**/target/**',
      '**/yarn.lock',
    ],
  },

  {
    files: ['**/*.ts', '**/*.tsx'],
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'unused-imports': eslintPluginUnusedImports,
    },

    rules: {
      'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
      // Unused imports
      'unused-imports/no-unused-imports': 'error',

      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        args: 'none',
        vars: 'all',
        varsIgnorePattern: '^.*_$',
      }],
      '@typescript-eslint/no-require-imports': 'off',
    }
  });
