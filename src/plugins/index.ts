/* eslint-disable */
// https://docs.cypress.io/guides/guides/plugins-guide.html

const customWebpackConfig = require('./webpack.config');
const { startDevServer } = require('@cypress/webpack-dev-server');

module.exports = (on: any, config: any): void => {
  on('dev-server:start', (options: any) => {
    return startDevServer({
      options,
      webpackConfig: customWebpackConfig,
    });
  });

  return config;
};
