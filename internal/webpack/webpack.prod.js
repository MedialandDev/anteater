const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const base = require('./webpack.base');

const entryArr = [
  'YoutubePlayer',
  'YoutubePlayer/vue',
  'CityArea',
  'FB',
  'util',
  'util/device',
  'util/line',
  'util/validate',
  'util/inView',
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
    library: 'ml.anteater',
    libraryTarget: 'umd',
    sourcePrefix: '',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd(),
    }),
  ],
  externals: [
    ...base.externals,
    'rxjs/Rx',
    'rxjs/Subject',
    'rxjs',
    ...entryArr.map(moduleName => `ml.anteater/${moduleName}`),
  ],
});

