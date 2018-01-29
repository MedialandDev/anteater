// load the default config generator.
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
