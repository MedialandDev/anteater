const remove = require('lodash/remove');
const rootWebpackConfig = require('../webpack/webpack.base');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  Object.assign(defaultConfig.resolve.alias, rootWebpackConfig.resolve.alias);

  defaultConfig.resolve.modules = [
    ...defaultConfig.resolve.modules,
    ...rootWebpackConfig.resolve.modules,
  ];
  const { rules } = storybookBaseConfig.module;
  // console.log(rules);
  remove(rules, rule => rule.test.test('.md'));
  remove(rules, rule => rule.test.test('.vue'));
  defaultConfig.module.rules = [
    ...rules,
    ...rootWebpackConfig.module.rules,
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    },
  ];

  return defaultConfig;
};

/* // load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const rootWebpackConfig = require('../webpack/webpack.base');
const updateWebpackConfig = require('storybook-readme/env/vue/updateWebpackConfig');

module.exports = (baseConfig, configType) => {
  const config = updateWebpackConfig(genDefaultConfig(baseConfig, configType));

  Object.assign(config.resolve.alias, rootWebpackConfig.resolve.alias);

  rootWebpackConfig.resolve.modules.forEach((modulePath) => {
    if (modulePath.indexOf('node_modules') === -1) {
      config.resolve.modules.push(modulePath);
    }
  });

  return config;
};
 */