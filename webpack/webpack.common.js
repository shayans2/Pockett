const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pockett | Manage Your Money',
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@containers': path.resolve(__dirname, '..', './src/containers/'),
      '@components': path.resolve(__dirname, '..', './src/components/'),
      '@hooks': path.resolve(__dirname, '..', './src/hooks/'),
      '@contexts': path.resolve(__dirname, '..', './src/contexts/'),
      '@api': path.resolve(__dirname, '..', './src/api/'),
      '@theme': path.resolve(__dirname, '..', './src/theme/'),
      '@utils': path.resolve(__dirname, '..', './src/utils/'),
      '@assets': path.resolve(__dirname, '..', './src/assets/'),
      '@constants': path.resolve(__dirname, '..', './src/constants/'),
    },
  },
};
