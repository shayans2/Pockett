const path = require('path');
const Dotenv = require('dotenv-webpack');
// const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
  ],
  // plugins: [
  //   new DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production'),
  //     }
  //   }),
  // ],
  devtool: 'eval-source-map',
};
