module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  globals: {
    YT: false,
    pug: false,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'internal/webpack/webpack.base.js',
      },
    },
  },
  plugins: [
    'html',
    'vue-libs',
    'flowtype',
  ],
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['error', { props: false }],
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
  },
};
