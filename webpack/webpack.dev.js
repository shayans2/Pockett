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
  devServer: {
    static: {
      directory: path.join(__dirname, '..', './public'),
    },
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 9000,
    allowedHosts: 'all',
  },
  devtool: 'eval-source-map',
};
