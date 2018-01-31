const path = require('path');
const webpack = require('webpack');
const { name } = require('../../package.json');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_MODE = process.env.NODE_ENV === 'development';

module.exports = {
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
            preserveWhitespace: false,
            // extractCSS: true,
            stylus: 'stylus-loader?paths=src/css/',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin(`${name} under MIT License copyright ${new Date().getFullYear()} Medialand`),
    ...DEV_MODE
      ? [
        new webpack.NamedModulesPlugin(),
      ]
      : [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
          sourceMap: false,
        }),
      ],
  ],
  externals: [
    'Vue',
    'Vuex',
  ],
};

