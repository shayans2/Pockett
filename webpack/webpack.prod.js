const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/',
          to: '.',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/redirects/],
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      minRatio: 0.8,
    }),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '..', './build'),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item) => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          chunks: 'all',
        },
      },
    },
  },
};
