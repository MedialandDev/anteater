const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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

const getLibFolderNames = () => {
  const s = new Set();
  entryArr.forEach((libName) => {
    const [n] = libName.split('/');
    s.add(n);
  });
  return Array.from(s);
};


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
    new CleanWebpackPlugin(getLibFolderNames(), {
      root: process.cwd(),
    }),
    new CopyWebpackPlugin([
      { from: 'src/CityArea/CityAreaData.json', to: './CityArea', ignore: ['.*'] },
    ]),
  ],
  externals: [
    ...base.externals,
    'rxjs/Rx',
    'rxjs/Subject',
    'rxjs',
    ...entryArr.map(moduleName => `ml.anteater/${moduleName}`),
  ],
});
