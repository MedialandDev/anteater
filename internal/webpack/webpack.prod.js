const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const base = require('./webpack.base');

const entryArr = [
  'YoutubePlayer',
  'YoutubePlayer/component',
  'CityArea',
  'FB',
];

const entry = entryArr.reduce((obj, moduleName) => {
  obj[`./${moduleName}/index`] = `./src/${moduleName}/index.js`;
  return obj;
}, {});

module.exports = merge(base, {
  entry,
  output: {
    path: path.resolve('./'),
    filename: '[name].js',
    library: 'anteater',
    libraryTarget: 'umd',
    sourcePrefix: '',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd(),
    }),
  ],
  externals: [
    'rxjs/Rx',
    'rxjs/Subject',
    'rxjs',
    'Vue',
    ...entryArr.map(moduleName => `anteater/${moduleName}`),
  ],
});

