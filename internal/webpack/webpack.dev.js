const path = require('path');
const merge = require('webpack-merge');

const base = require('./webpack.base');

module.exports = merge(base, {
  entry: {
    app: './examples/index.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'examples.bundle.js',
  },
  plugins: [
  ],
  devServer: {
    contentBase: path.resolve('examples'),
    historyApiFallback: true,
    noInfo: true,
    port: 3000,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      chunks: false,
      chunkModules: false,
      children: false,
    },
    host: '0.0.0.0',
    disableHostCheck: true,
  },
});

