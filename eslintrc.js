// https://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended', // https://eslint.org/docs/rules/
    'prettier',
    'prettier/babel',
    'prettier/flowtype',
  ],
  rules: {
    'no-console': ['error', {allow: ['info', 'warn', 'error']}],
    'eol-last': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    // 'indent': ['error', 'tab'],
    // 'linebreak-style': ['error', 'unix'],
    // 'quotes': ['error', 'single'],
    // 'semi': ['error', 'never'],
    // 'arrow-parens': 0, // allow paren-less arrow functions
    // 'generator-star-spacing': 0, // allow async-await
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
    // 'padded-blocks': ["error", { "classes": "always" }], // require padding inside classes
    // 'no-trailing-spaces': 0 // allow trailing whitespace
  },
};
