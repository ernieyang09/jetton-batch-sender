require('@rushstack/eslint-patch/modern-module-resolution')
/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
    'eslint:recommended',
    '@vue/standard',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts']
      }
    }
  }
}

module.exports = config
