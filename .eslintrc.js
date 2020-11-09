module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
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
