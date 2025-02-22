export default {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Vue 3 推荐的配置 https://eslint.vuejs.org/
    'plugin:@typescript-eslint/recommended', // TypeScript 推荐的配置
    'vue/typescript/recommended', // Vue 和 TypeScript 推荐的配置
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
  },
  globals: {
    defineProps: 'readonly',
  },
};
