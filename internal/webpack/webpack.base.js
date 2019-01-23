const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { name, version } = require('../../package.json');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_MODE = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: DEV_MODE ? 'inline-source-map' : false,
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    alias: {
      '@': path.resolve('src'),
      'ml.anteater': path.resolve('src'),
      internal: path.resolve('internal'),
    },
    extensions: ['.js', '.vue'],
  },

  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader' },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
          },
        },
      },
      {
        test: /\.pug$/,
        use: ['pug-plain-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin(`${name} under MIT License copyright ${new Date().getFullYear()} Medialand version:${version}`),
  ],
  externals: [
    'Vue',
    'Vuex',
  ],
};
