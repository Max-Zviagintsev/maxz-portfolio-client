import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintReact from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginPrettierRecommended,
  ],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist', 'node_modules', 'eslint.config.js'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      project: ['tsconfig.json', 'tsconfig.node.json'],
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    react: eslintReact,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier: prettierPlugin,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
})
