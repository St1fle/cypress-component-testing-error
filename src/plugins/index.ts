/* eslint-disable */
// https://docs.cypress.io/guides/guides/plugins-guide.html

const webpack = require('@cypress/webpack-preprocessor');
const vueWebpackConfig = require('@vue/cli-service/webpack.config');
const alloyWebpackConfig = require('./webpack.config');
const { startDevServer } = require('@cypress/webpack-dev-server');

module.exports = (on: any, config: any): void => {
  // Setup custom webpack to support typescript.
  on(
    'file:preprocessor',
    webpack({
      webpackOptions: alloyWebpackConfig,
    }),
  );

  // Setup webpack to use the same config as the Vue CLI.
  on('dev-server:start', (options: any) => {
    return startDevServer({
      options,
      webpackConfig: vueWebpackConfig,
    });
  });

  // remember: possible to override config values here e.g.
  /*return Object.assign({}, config, {
    supportFile: 'some/other/file.js',
  });*/
};
