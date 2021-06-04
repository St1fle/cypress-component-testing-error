/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              // https://github.com/cypress-io/cypress/issues/2316#issuecomment-412312754
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};
