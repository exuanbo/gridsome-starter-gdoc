module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/standard',
    'prettier/vue'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': 'error'
  }
}
